#!/usr/bin/env python3
"""
Sincronização de Especificações com Azure DevOps
Spec-Kit - nCommand Lite
"""

import argparse
import json
import os
import sys
import re
from pathlib import Path
from datetime import datetime
from typing import Dict, Optional

try:
    from azure.devops.connection import Connection
    from msrest.authentication import BasicAuthentication
except ImportError:
    print("ERRO: Biblioteca azure-devops não instalada.")
    print("Instale com: pip install azure-devops")
    sys.exit(1)


class AzureDevOpsSync:
    """Classe para sincronizar especificações com Azure DevOps"""
    
    def __init__(self, organization: str, project: str, personal_access_token: str):
        """Inicializar conexão com Azure DevOps"""
        self.organization = organization
        self.project = project
        self.personal_access_token = personal_access_token
        
        # Criar conexão
        credentials = BasicAuthentication('', personal_access_token)
        self.connection = Connection(
            base_url=f'https://dev.azure.com/{organization}',
            creds=credentials
        )
        
        # Clientes
        self.wit_client = self.connection.clients.get_work_item_tracking_client()
    
    def get_work_item(self, work_item_id: int) -> Optional[Dict]:
        """Obter Work Item do Azure DevOps"""
        try:
            work_item = self.wit_client.get_work_item(work_item_id, project=self.project)
            return work_item.as_dict() if work_item else None
        except Exception as e:
            print(f"ERRO ao obter Work Item {work_item_id}: {e}")
            return None
    
    def update_work_item(self, work_item_id: int, fields: Dict[str, str], comment: Optional[str] = None):
        """Atualizar Work Item"""
        try:
            patch_document = []
            for field_name, value in fields.items():
                patch_document.append({
                    "op": "add" if not field_name.startswith("System.") else "replace",
                    "path": f"/fields/{field_name}",
                    "value": value
                })
            
            if comment:
                patch_document.append({
                    "op": "add",
                    "path": "/fields/System.History",
                    "value": comment
                })
            
            work_item = self.wit_client.update_work_item(
                document=patch_document,
                id=work_item_id,
                project=self.project
            )
            return work_item.as_dict() if work_item else None
        except Exception as e:
            print(f"ERRO ao atualizar Work Item {work_item_id}: {e}")
            return None
    
    def link_spec_to_work_item(self, work_item_id: int, spec_file: Path, spec_type: str):
        """Vincular especificação ao Work Item"""
        spec_relative_path = spec_file.relative_to(Path.cwd())
        
        comment = f"Especificação {spec_type} vinculada: {spec_relative_path}"
        
        # Tentar atualizar campo customizado de especificação
        fields = {
            "System.History": comment
        }
        
        # Adicionar link de hiperlink (se suportado)
        # Nota: Links de hiperlink requerem API diferente
        
        return self.update_work_item(work_item_id, fields, comment)
    
    def extract_spec_info(self, spec_file: Path) -> Dict:
        """Extrair informações da especificação"""
        content = spec_file.read_text(encoding='utf-8')
        
        info = {
            'work_item_id': None,
            'title': None,
            'author': None,
            'date': None,
            'status': None,
            'type': None
        }
        
        # Extrair Work Item ID
        work_item_match = re.search(r'\*\*Work Item\*\*:\s*\[?([A-Z]+-\d+)\]?', content)
        if work_item_match:
            info['work_item_id'] = work_item_match.group(1)
        
        # Extrair título
        title_match = re.search(r'\*\*Título\*\*:\s*\[([^\]]+)\]', content)
        if title_match:
            info['title'] = title_match.group(1)
        
        # Extrair autor
        author_match = re.search(r'\*\*Autor\*\*:\s*\[([^\]]+)\]', content)
        if author_match:
            info['author'] = author_match.group(1)
        
        # Extrair data
        date_match = re.search(r'\*\*Data de Criação\*\*:\s*\[([^\]]+)\]', content)
        if date_match:
            info['date'] = date_match.group(1)
        
        # Extrair status
        status_match = re.search(r'\*\*Status\*\*:\s*([A-Za-z\s|]+)', content)
        if status_match:
            info['status'] = status_match.group(1).split('|')[0].strip()
        
        # Determinar tipo
        if 'feature-spec' in str(spec_file):
            info['type'] = 'feature'
        elif 'api-spec' in str(spec_file):
            info['type'] = 'api'
        elif 'infrastructure-spec' in str(spec_file):
            info['type'] = 'infrastructure'
        elif 'usability-spec' in str(spec_file):
            info['type'] = 'usability'
        
        return info


def sync_spec_to_ado(spec_file: Path, organization: str, project: str, pat: str, work_item_id: Optional[int] = None):
    """Sincronizar especificação com Azure DevOps"""
    sync = AzureDevOpsSync(organization, project, pat)
    
    # Extrair informações da spec
    spec_info = sync.extract_spec_info(spec_file)
    
    # Usar work_item_id fornecido ou extraído
    wi_id = work_item_id
    if not wi_id and spec_info['work_item_id']:
        # Extrair número do ID (ex: USER-123 -> 123)
        match = re.search(r'-(\d+)$', spec_info['work_item_id'])
        if match:
            wi_id = int(match.group(1))
    
    if not wi_id:
        print("ERRO: Work Item ID não encontrado")
        return False
    
    # Obter Work Item
    work_item = sync.get_work_item(wi_id)
    if not work_item:
        print(f"ERRO: Work Item {wi_id} não encontrado")
        return False
    
    print(f"Work Item encontrado: {work_item.get('fields', {}).get('System.Title', 'N/A')}")
    
    # Vincular especificação
    spec_type = spec_info.get('type', 'spec')
    result = sync.link_spec_to_work_item(wi_id, spec_file, spec_type)
    
    if result:
        print(f"✓ Especificação vinculada ao Work Item {wi_id}")
        return True
    else:
        print(f"✗ Erro ao vincular especificação")
        return False


def main():
    parser = argparse.ArgumentParser(
        description='Sincronizar especificação com Azure DevOps'
    )
    parser.add_argument(
        '--spec',
        type=Path,
        required=True,
        help='Caminho para arquivo de especificação'
    )
    parser.add_argument(
        '--workitem',
        type=int,
        help='ID do Work Item (opcional se estiver na spec)'
    )
    parser.add_argument(
        '--organization',
        required=True,
        help='Organização do Azure DevOps'
    )
    parser.add_argument(
        '--project',
        required=True,
        help='Projeto do Azure DevOps'
    )
    parser.add_argument(
        '--pat',
        help='Personal Access Token (ou usar variável ADO_PAT)'
    )
    
    args = parser.parse_args()
    
    # Verificar arquivo
    if not args.spec.exists():
        print(f"ERRO: Arquivo não encontrado: {args.spec}")
        sys.exit(1)
    
    # Obter PAT
    pat = args.pat or os.getenv('ADO_PAT')
    if not pat:
        print("ERRO: Personal Access Token não fornecido")
        print("Use --pat ou defina variável ADO_PAT")
        sys.exit(1)
    
    # Sincronizar
    success = sync_spec_to_ado(
        args.spec,
        args.organization,
        args.project,
        pat,
        args.workitem
    )
    
    sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()


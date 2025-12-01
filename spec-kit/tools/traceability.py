#!/usr/bin/env python3
"""
Gerador de Matriz de Rastreabilidade
Spec-Kit - nCommand Lite
"""

import argparse
import json
import sys
import re
from pathlib import Path
from typing import Dict, List, Set
from datetime import datetime


class TraceabilityMatrix:
    """Gera matriz de rastreabilidade a partir de especificações"""
    
    def __init__(self, specs_dir: Path):
        self.specs_dir = Path(specs_dir)
        self.requirements = {}
        self.test_cases = {}
        self.risks = {}
        self.code_references = {}
    
    def scan_specifications(self) -> Dict:
        """Escanear todas as especificações e extrair informações"""
        print(f"Escanando especificações em: {self.specs_dir}")
        
        specs = {
            'features': [],
            'apis': [],
            'infrastructure': [],
            'usability': []
        }
        
        # Escanear arquivos
        for spec_file in self.specs_dir.rglob('*-spec.md'):
            spec_info = self.parse_specification(spec_file)
            if spec_info:
                spec_type = spec_info.get('type', 'feature')
                if spec_type in specs:
                    specs[spec_type].append(spec_info)
        
        return specs
    
    def parse_specification(self, spec_file: Path) -> Dict:
        """Analisar arquivo de especificação e extrair informações"""
        content = spec_file.read_text(encoding='utf-8')
        
        info = {
            'file': str(spec_file.relative_to(self.specs_dir)),
            'type': None,
            'work_item_id': None,
            'title': None,
            'requirements': [],
            'test_cases': [],
            'risks': [],
            'code_refs': []
        }
        
        # Determinar tipo
        if 'feature-spec' in str(spec_file):
            info['type'] = 'feature'
        elif 'api-spec' in str(spec_file):
            info['type'] = 'api'
        elif 'infrastructure-spec' in str(spec_file):
            info['type'] = 'infrastructure'
        elif 'usability-spec' in str(spec_file):
            info['type'] = 'usability'
        
        # Extrair Work Item ID
        wi_match = re.search(r'\*\*Work Item\*\*:\s*\[?([A-Z]+-\d+)\]?', content)
        if wi_match:
            info['work_item_id'] = wi_match.group(1)
        
        # Extrair título
        title_match = re.search(r'\*\*Título\*\*:\s*\[([^\]]+)\]', content)
        if title_match:
            info['title'] = title_match.group(1)
        
        # Extrair requisitos
        req_pattern = r'\|?\s*(REQ-[\d-]+)\s*\|[^\|]*\|[^\|]*\|[^\|]*\|'
        for match in re.finditer(req_pattern, content):
            req_id = match.group(1).strip()
            if req_id and req_id not in info['requirements']:
                info['requirements'].append(req_id)
        
        # Extrair test cases
        tc_pattern = r'\|?\s*(TC-[\d-]+|UT-[\d-]+|IT-[\d-]+)\s*\|'
        for match in re.finditer(tc_pattern, content):
            tc_id = match.group(1).strip()
            if tc_id and tc_id not in info['test_cases']:
                info['test_cases'].append(tc_id)
        
        # Extrair riscos
        risk_pattern = r'\|?\s*(RISK-[\d-]+)\s*\|'
        for match in re.finditer(risk_pattern, content):
            risk_id = match.group(1).strip()
            if risk_id and risk_id not in info['risks']:
                info['risks'].append(risk_id)
        
        # Extrair referências de código
        code_pattern = r'Commit SHA[^\n]*: \[([^\]]+)\]'
        for match in re.finditer(code_pattern, content):
            code_ref = match.group(1).strip()
            if code_ref and code_ref not in info['code_refs']:
                info['code_refs'].append(code_ref)
        
        return info if info['work_item_id'] else None
    
    def generate_matrix(self, specs: Dict, output_file: Path):
        """Gerar matriz de rastreabilidade em Markdown"""
        print(f"Gerando matriz de rastreabilidade: {output_file}")
        
        lines = []
        lines.append("# Matriz de Rastreabilidade - nCommand Lite")
        lines.append("")
        lines.append(f"**Data de Geração**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        lines.append("")
        lines.append("## Requisitos → Especificações → Código → Testes")
        lines.append("")
        lines.append("| Requisito ID | Especificação | Work Item | Código (Commits) | Test Cases | Riscos | Status |")
        lines.append("|--------------|---------------|-----------|------------------|------------|--------|--------|")
        
        all_requirements = set()
        
        # Processar todas as specs
        for spec_type, spec_list in specs.items():
            for spec in spec_list:
                work_item = spec.get('work_item_id', 'N/A')
                title = spec.get('title', 'N/A')
                file = spec.get('file', 'N/A')
                
                # Processar requisitos
                requirements = spec.get('requirements', [])
                if not requirements:
                    # Se não houver requisitos específicos, usar o Work Item como requisito
                    requirements = [work_item] if work_item != 'N/A' else []
                
                for req_id in requirements:
                    if req_id in all_requirements:
                        continue
                    all_requirements.add(req_id)
                    
                    test_cases = ', '.join(spec.get('test_cases', [])) or 'N/A'
                    code_refs = ', '.join(spec.get('code_refs', [])) or 'N/A'
                    risks = ', '.join(spec.get('risks', [])) or 'N/A'
                    
                    lines.append(
                        f"| {req_id} | [{title}]({file}) | {work_item} | {code_refs} | {test_cases} | {risks} | Draft |"
                    )
        
        lines.append("")
        lines.append("## Estatísticas")
        lines.append("")
        lines.append(f"- **Total de Requisitos**: {len(all_requirements)}")
        lines.append(f"- **Especificações Analisadas**: {sum(len(s) for s in specs.values())}")
        lines.append("")
        lines.append("## Legenda")
        lines.append("")
        lines.append("- **Requisito ID**: Identificador único do requisito")
        lines.append("- **Especificação**: Link para documento de especificação")
        lines.append("- **Work Item**: ID do Work Item no Azure DevOps")
        lines.append("- **Código**: Referências a commits Git")
        lines.append("- **Test Cases**: IDs de casos de teste")
        lines.append("- **Riscos**: IDs de riscos identificados")
        lines.append("")
        lines.append("---")
        lines.append("")
        lines.append(f"**Gerado por**: Spec-Kit v1.0")
        lines.append(f"**Conformidade**: IEC 62304 Class B, ISO 13485:2016")
        
        # Escrever arquivo
        output_file.parent.mkdir(parents=True, exist_ok=True)
        output_file.write_text('\n'.join(lines), encoding='utf-8')
        
        print(f"✓ Matriz de rastreabilidade gerada: {output_file}")


def main():
    parser = argparse.ArgumentParser(
        description='Gerar matriz de rastreabilidade'
    )
    parser.add_argument(
        '--specs-dir',
        type=Path,
        default=Path('spec-kit/specs'),
        help='Diretório com especificações (padrão: spec-kit/specs)'
    )
    parser.add_argument(
        '--output',
        type=Path,
        default=Path('docs/traceability-matrix.md'),
        help='Arquivo de saída (padrão: docs/traceability-matrix.md)'
    )
    
    args = parser.parse_args()
    
    # Validar diretório
    if not args.specs_dir.exists():
        print(f"ERRO: Diretório não encontrado: {args.specs_dir}")
        sys.exit(1)
    
    # Gerar matriz
    matrix = TraceabilityMatrix(args.specs_dir)
    specs = matrix.scan_specifications()
    matrix.generate_matrix(specs, args.output)
    
    print(f"\n✓ Processo concluído com sucesso!")
    sys.exit(0)


if __name__ == '__main__':
    main()


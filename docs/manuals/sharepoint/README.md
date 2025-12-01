# Manual - SharePoint Online

**Versão**: 1.0.0  
**Data**: 2024

## Visão Geral

SharePoint Online é o **Repositório Legal** do projeto nCommand Lite. Armazena registros imutáveis (PDFs assinados) do Design History File (DHF) e documentos regulatórios conforme exigências de conformidade.

**Função no Processo**: Armazenamento imutável de documentação regulatória e evidências de conformidade.

## Estrutura de Diretórios

### Hierarquia Principal

```
/SharePoint/nCommand-Lite/
│
├── /DHF/                          # Design History Files
│   ├── /nCommand-Lite/
│   │   └── /Version/
│   │       ├── /v1.0.0/
│   │       │   ├── nCommand-Lite-DHF-v1.0.0.pdf
│   │       │   ├── traceability-matrix-v1.0.0.pdf
│   │       │   └── security-certificate-v1.0.0.pdf
│   │       └── /v1.1.0/
│   │           └── ...
│   │
│   └── /Demo-App/
│       └── /Version/
│           └── /v1.0.0/
│               └── ...
│
├── /Regulatory/                   # Documentos Regulatórios
│   ├── /ISO/
│   │   ├── /ISO-13485-2016/
│   │   ├── /ISO-14971-2019/
│   │   └── /ISO-IEC-27001-2022/
│   │
│   ├── /IEC/
│   │   ├── /IEC-62304-2006-A1-2015/
│   │   └── /IEC-62366-1-2015/
│   │
│   └── /Market-Regulations/
│       ├── /RDC-657-2022-ANVISA/
│       └── /FDA-21-CFR-Part-820/
│
├── /SOPs/                         # Standard Operating Procedures
│   └── [Versões PDF dos SOPs]
│
└── /Audits/                       # Documentos de Auditoria
    └── [Relatórios de auditoria]
```

## Configuração Inicial

### Passo 1: Criar Site

1. SharePoint Admin Center → Create site
2. Tipo: Team site ou Communication site
3. Nome: `nCommand-Lite`
4. URL: `https://[tenant].sharepoint.com/sites/nCommand-Lite`
5. Criar

### Passo 2: Configurar Estrutura de Bibliotecas

**Criar Document Library: DHF**

1. Site Contents → New → Document Library
2. Nome: `DHF`
3. Configurações:
   - Versioning: ✅ Enabled
   - Major versions only: ✅ (para imutabilidade)
   - Require Check Out: ✅ (opcional, para controle)

**Criar Document Library: Regulatory**

1. Site Contents → New → Document Library
2. Nome: `Regulatory`
3. Configurações similares

### Passo 3: Configurar Permissões

**Permissões Recomendadas**:

| Nível | Pasta | Acesso | Usuários |
|-------|-------|--------|----------|
| **Full Control** | Root | Todos os arquivos | QA Leader, Regulatory Affairs |
| **Read** | DHF | Apenas leitura | Dev Team, Stakeholders |
| **Contribute** | Regulatory | Upload e leitura | QA Leader |
| **Restricted** | DHF/v* | Apenas leitura após aprovação | Todos |

**Configurar**:

1. DHF → Settings → Permissions
2. Quebrar herança de permissões
3. Configurar permissões específicas por pasta

### Passo 4: Configurar Versionamento

**Para Bibliotecas Críticas**:

1. Library Settings → Versioning settings
2. Require content approval: ✅ Yes
3. Create a version: ✅ Each time you edit
4. Keep versions: ✅ Keep all versions (regulatório)

### Passo 5: Configurar Metadados

**Colunas Customizadas para DHF**:

| Nome | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| Version | Single line of text | ✅ | Versão do release (ex: v1.0.0) |
| Release Date | Date | ✅ | Data do release |
| Approved By | Person | ✅ | Aprovador (QA Leader) |
| Compliance Status | Choice | ✅ | Draft/Approved/Final |
| Product | Single line of text | ✅ | nCommand-Lite/Demo-App |

## Processo de Upload do DHF

### FASE 4: Upload de Artefatos

#### Passo 1: Preparar Documentos

1. Gerar DHF usando script: `pipelines/scripts/generate-dhf.sh`
2. Converter para PDF (se necessário)
3. Assinar digitalmente (se aplicável)

#### Passo 2: Criar Estrutura de Versão

1. SharePoint → DHF → nCommand-Lite → Version
2. Nova Pasta: `v1.0.0`
3. Descrição: "Release v1.0.0 - [Data]"

#### Passo 3: Upload de Arquivos

**Arquivos a Uploadar**:

1. `nCommand-Lite-DHF-v1.0.0.pdf`
   - Tipo: PDF
   - Tamanho: Verificar limite (geralmente 250MB)
   - Metadados: Preencher campos customizados

2. `traceability-matrix-v1.0.0.pdf`
   - Matriz de rastreabilidade
   - Gerada automaticamente

3. `security-certificate-v1.0.0.pdf`
   - Certificado de segurança
   - Resumo do DefectDojo

#### Passo 4: Aprovação e Imutabilidade

1. Upload de arquivos
2. Aguardar aprovação (se configurado)
3. **Bloquear arquivos para edição**:
   - Selecionar arquivo → More options → Block download
   - OU configurar permissões como Read-only após aprovação

**⚠️ Importante**: Após aprovação e bloqueio, arquivos não podem ser alterados.

### Nomenclatura de Arquivos

**Padrão**: `{Product}-DHF-v{VERSION}.pdf`

**Exemplos**:
- `nCommand-Lite-DHF-v1.0.0.pdf`
- `nCommand-Lite-DHF-v1.1.0.pdf`
- `nCommand-Lite-Demo-DHF-v1.0.0.pdf`

## Integração com Processo

### Automação (Futuro)

**Script de Upload Automático**:

```python
# Exemplo conceitual
sharepoint_upload_dhf(
    file_path="docs/dhf/releases/v1.0.0/nCommand-Lite-DHF-v1.0.0.pdf",
    target_path="/DHF/nCommand-Lite/Version/v1.0.0/",
    metadata={
        "Version": "v1.0.0",
        "ReleaseDate": "2024-01-XX",
        "ApprovedBy": "QA Leader"
    }
)
```

**Status**: Manual por enquanto. Automatização planejada.

### Rastreabilidade

**Links entre Artefatos**:

- Azure DevOps Work Items podem ter links para SharePoint
- DHF referencia Work Items e commits Git
- Matriz de rastreabilidade vincula todos os artefatos

## Configurações de Segurança

### Retenção e Backup

**Políticas de Retenção**:

1. SharePoint Admin Center → Data governance → Retention
2. Criar política de retenção para:
   - Biblioteca: DHF
   - Período: Indefinido (regulatório)
   - Ação: Manter permanentemente

### Auditoria

**Habilitar Auditoria**:

1. SharePoint Admin Center → Audit log
2. Ativar auditoria para:
   - Acesso a arquivos
   - Downloads
   - Mudanças em permissões
   - Uploads

**Retenção de Logs**: 7 anos (requisito regulatório)

### Proteção de Dados

**Classificação de Dados**:

- **DHF**: Classificado como "Confidential" ou "Highly Confidential"
- **Regulatory**: Classificado como "Internal" ou "Confidential"

**Aplicar**:

1. SharePoint → Information Protection
2. Aplicar labels aos documentos
3. Configurar políticas de proteção

## Acesso e Permissões

### Níveis de Acesso

**QA Leader**:
- ✅ Full Control em todos os diretórios
- ✅ Pode aprovar documentos
- ✅ Pode bloquear arquivos

**Regulatory Affairs**:
- ✅ Contribute em Regulatory/
- ✅ Read em DHF/

**Dev Team**:
- ✅ Read em DHF/ (apenas versões aprovadas)
- ❌ Sem acesso a Regulatory/ (documentos completos)

**Auditores**:
- ✅ Read temporário (via convite)
- ✅ Acesso apenas a documentos necessários

### Como Conceder Acesso

1. SharePoint → Site Permissions
2. Advanced permissions settings
3. Grant Permissions
4. Adicionar usuário/grupo
5. Selecionar nível de permissão
6. Enviar convite (opcional)

## Upload de Documentos Regulatórios

### ISO/IEC Standards

**Processo**:

1. Adquirir documento oficial (ver `docs/regulatory/ACCESS-GUIDE.md`)
2. SharePoint → Regulatory → ISO → Criar pasta da norma
3. Upload do PDF
4. Configurar metadados:
   - Norma: ISO 13485:2016
   - Versão: 2016
   - Idioma: Português/Inglês
   - Data de Aquisição: [Data]

**⚠️ Importante**: Documentos são protegidos por copyright. Armazenar apenas para uso interno autorizado.

### Regulamentações Públicas

**RDC 657/2022 (ANVISA)**:
- Download direto (gratuito)
- Upload em: Regulatory/Market-Regulations/RDC-657-2022-ANVISA/
- Versão: 2022
- Idioma: Português

**FDA 21 CFR Part 820**:
- Acesso público online
- Upload de PDF local (se necessário)
- Localização: Regulatory/Market-Regulations/FDA-21-CFR-Part-820/

## Troubleshooting

### Problema: Upload falha (arquivo muito grande)

**Solução**:
- Verificar tamanho do arquivo (limite geralmente 250MB)
- Comprimir PDF se necessário
- Considerar dividir em múltiplos arquivos
- Usar SharePoint Large File Upload se disponível

### Problema: Permissões não funcionam

**Solução**:
- Verificar se herança de permissões foi quebrada
- Verificar grupos do Azure AD
- Limpar cache do navegador
- Aguardar propagação de permissões (até 15 min)

### Problema: Versões não são mantidas

**Solução**:
- Verificar se versionamento está habilitado
- Verificar configuração "Keep all versions"
- Verificar limites de armazenamento do tenant

### Problema: Arquivo não pode ser bloqueado

**Solução**:
- Verificar permissões (precisa Full Control)
- Verificar se arquivo não está checked out
- Verificar políticas de retenção

## Boas Práticas

1. **Sempre preencher metadados** ao fazer upload
2. **Usar nomenclatura padronizada** para arquivos
3. **Manter estrutura de pastas organizada**
4. **Bloquear arquivos após aprovação** para imutabilidade
5. **Revisar permissões periodicamente**
6. **Documentar localização** no README do projeto

## APIs e Automação

### Microsoft Graph API

**Autenticação**:
- Service Principal ou App Registration
- Permissions: `Sites.ReadWrite.All`

**Upload via API**:

```python
# Exemplo conceitual
from office365.sharepoint.client_context import ClientContext

ctx = ClientContext(site_url).with_credentials(credentials)
target_file = ctx.web.get_folder_by_server_relative_url(folder_path)
target_file.upload_file(file_name, file_content)
ctx.execute_query()
```

**Status**: Integração planejada para automação futura.

## Referências

- [Documentação SharePoint Online](https://docs.microsoft.com/sharepoint/)
- [Microsoft Graph API - SharePoint](https://docs.microsoft.com/graph/api/resources/sharepoint)
- Processo no projeto: `docs/PROCESS.md`
- SOP-005: `docs/sop/SOP-005-Change-Control.md`

---

**Última Atualização**: 2024  
**Responsável**: QA Leader / Regulatory Affairs


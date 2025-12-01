# Estrutura do Projeto nCommand Lite

Visão geral completa da estrutura de diretórios e arquivos do projeto.

## Estrutura de Diretórios

```
Ionic.Health-PQ44/
│
├── .github/
│   └── workflows/
│       └── security-scan.yml          # Workflow de segurança (GitHub)
│
├── .pre-commit-config.yaml            # Pre-commit hooks obrigatórios
├── .gitignore                         # Arquivos ignorados pelo Git
│
├── docs/                              # Documentação
│   ├── PROCESS.md                     # Processo integrado completo
│   ├── GETTING-STARTED.md             # Guia de início rápido
│   ├── PROJECT-STRUCTURE.md           # Este arquivo
│   │
│   ├── regulatory/                    # Documentação regulatória
│   │   └── COMPLIANCE-MATRIX.md       # Matriz de conformidade
│   │
│   ├── sop/                           # Standard Operating Procedures
│   │   ├── SOP-001-SDLC.md            # Ciclo de vida de desenvolvimento
│   │   ├── SOP-002-Risk-Management.md # Gestão de riscos
│   │   ├── SOP-003-Vulnerability-Management.md # Gestão de vulnerabilidades
│   │   ├── SOP-004-Verification-Validation.md  # Verificação e validação
│   │   └── SOP-005-Change-Control.md  # Controle de mudança
│   │
│   └── dhf/                           # Design History File
│       └── TEMPLATE.md                # Template do DHF
│
├── infrastructure/                    # Infrastructure as Code
│   └── azure/
│       ├── main.tf                    # Recursos principais
│       ├── variables.tf               # Variáveis do Terraform
│       └── README.md                  # Documentação IaC
│
├── pipelines/                         # Azure DevOps Pipelines
│   ├── azure-pipelines.yml            # Pipeline principal (FASE 3)
│   │
│   └── scripts/                       # Scripts de automação
│       ├── defectdojo-ingest.sh       # Ingestão no DefectDojo
│       ├── defectdojo-check.sh        # Verificação de vulnerabilidades
│       └── generate-dhf.sh            # Geração do DHF (FASE 4)
│
├── security/                          # Gestão de segurança
│   ├── defectdojo/                    # Scripts de integração DefectDojo
│   └── scans/                         # Configurações de scanners
│
├── src/                               # Código fonte (a ser implementado)
│
├── tests/                             # Testes automatizados
│
├── README.md                          # Documentação principal
└── SECURITY.md                        # Política de segurança
```

## Descrição dos Componentes

### Documentação (`docs/`)

#### Processo e Procedimentos

- **PROCESS.md**: Especificação completa do processo integrado (5 fases)
- **GETTING-STARTED.md**: Guia prático para desenvolvedores
- **PROJECT-STRUCTURE.md**: Este arquivo

#### SOPs (`docs/sop/`)

Standard Operating Procedures detalhados:

1. **SOP-001**: SDLC - Regras de Git, branching, PRs, commits
2. **SOP-002**: Gestão de Riscos - ISO 14971, análise RPN, mitigação
3. **SOP-003**: Gestão de Vulnerabilidades - DefectDojo, SLAs, triagem
4. **SOP-004**: Verificação e Validação - Testes, usabilidade IEC 62366
5. **SOP-005**: Controle de Mudança - Versionamento, IaC, LTF, DHF

#### Regulatório (`docs/regulatory/`)

- **COMPLIANCE-MATRIX.md**: Mapeamento de requisitos regulatórios vs implementação

#### DHF (`docs/dhf/`)

- **TEMPLATE.md**: Template para Design History File

### Infraestrutura (`infrastructure/`)

#### Terraform (`infrastructure/azure/`)

- **main.tf**: Recursos Azure (Resource Groups, Key Vault, Log Analytics, Sentinel)
- **variables.tf**: Variáveis do Terraform
- **README.md**: Documentação de uso do IaC

**Princípio**: Toda infraestrutura é código. Alterações manuais proibidas.

### Pipelines (`pipelines/`)

#### Pipeline Principal (`azure-pipelines.yml`)

Pipeline Azure DevOps implementando a **FASE 3** (Verificação Automatizada):

1. **Build e Testes**: Unit tests (100% pass rate)
2. **SAST**: SonarCloud (Quality Gate A)
3. **SCA**: Trivy scan
4. **Ingestão DefectDojo**: Envio automático de relatórios
5. **Validação de Segurança**: Gate bloqueando vulnerabilidades críticas/altas
6. **Deploy Staging**: Para DAST
7. **DAST**: OWASP ZAP scan

#### Scripts (`pipelines/scripts/`)

- **defectdojo-ingest.sh**: Ingestão automática de relatórios no DefectDojo
- **defectdojo-check.sh**: Verificação de vulnerabilidades (gate de pipeline)
- **generate-dhf.sh**: Geração automática do Design History File

### Segurança (`security/`)

Estrutura para scripts e configurações de segurança (a ser expandida).

### Configuração

#### Pre-commit Hooks (`.pre-commit-config.yaml`)

Hooks obrigatórios:
- Linting (ESLint/Pylint)
- Formatação (Prettier/Black)
- Detecção de secrets
- Validação de Terraform

## Fluxo de Dados

```
Developer
   ↓
Git Commit (com hooks)
   ↓
Pull Request
   ↓
Azure DevOps Pipeline
   ├─→ Unit Tests (100% pass)
   ├─→ SAST (SonarCloud)
   ├─→ SCA (Trivy)
   └─→ DefectDojo (Ingestão)
         ↓
      DefectDojo (Validação)
         ↓
      Gate: Bloqueio se crítico/alto
         ↓
   Deploy Staging
         ↓
   DAST (OWASP ZAP)
         ↓
   DefectDojo (Ingestão)
         ↓
   Gate de Liberação
         ↓
   Release + DHF
         ↓
   SharePoint (DHF PDF)
```

## Integrações

### Azure DevOps (ADO)

- **Boards**: Requisitos, riscos, bugs
- **Repos**: Git (código-fonte)
- **Pipelines**: CI/CD
- **Test Plans**: Testes funcionais e usabilidade

### DefectDojo

- **API**: Ingestão automática de scans
- **Web UI**: Triagem manual
- **Push to ADO**: Criação automática de bugs

### SharePoint Online

- **DHF**: Documentos regulatórios imutáveis
- **Estrutura**: `/DHF/Version/v{VERSION}/`

### Azure Cloud

- **Terraform**: IaC (Infrastructure as Code)
- **Key Vault**: Secrets
- **Sentinel**: SIEM (monitoramento)
- **Log Analytics**: Logs

## Próximos Passos

### Para Desenvolvedores

1. Ler `docs/GETTING-STARTED.md`
2. Configurar pre-commit hooks
3. Revisar SOPs relevantes

### Para QA Leader

1. Revisar e aprovar SOPs
2. Configurar variáveis no Azure DevOps
3. Configurar credenciais do DefectDojo
4. Configurar SharePoint para DHF

### Para DevOps/AppSec

1. Configurar backend do Terraform (Azure Storage)
2. Configurar DefectDojo (API keys, produtos, engagements)
3. Configurar scanners (SonarCloud, Trivy, OWASP ZAP)
4. Configurar Azure Sentinel

## Manutenção

### Atualizações Regulares

- **Processo**: Revisão anual (QA Leader)
- **SOPs**: Conforme necessário (QA Leader)
- **Infraestrutura**: Via Terraform (DevOps)
- **Dependências**: Scan diário (Trivy → DefectDojo)

### Versionamento

- **Documentação**: Versionada no Git
- **Código**: Versionado no Git (tags semânticas)
- **DHF**: Versionado no SharePoint (imutável após assinatura)

---

**Última Atualização**: 2024  
**Versão da Estrutura**: 1.0


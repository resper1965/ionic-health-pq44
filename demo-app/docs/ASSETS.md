# Ativos do Projeto - nCommand Lite

Documentação completa de todos os ativos envolvidos no ciclo de vida do desenvolvimento SaMD.

## Arquitetura de Ativos

```
┌─────────────────────────────────────────────────────────────┐
│                    CLOUD & INFRAESTRUTURA                    │
├─────────────────────────────────────────────────────────────┤
│  Azure Cloud                                                │
│  ├── App Services                                           │
│  ├── Key Vault (Secrets)                                    │
│  ├── Storage Accounts                                       │
│  ├── Log Analytics Workspace                                │
│  └── Azure Sentinel (SIEM)                                  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│              FERRAMENTAS DE DESENVOLVIMENTO                 │
├─────────────────────────────────────────────────────────────┤
│  Azure DevOps                                               │
│  ├── Boards (Work Items)                                    │
│  ├── Repos (Git)                                            │
│  ├── Pipelines (CI/CD)                                      │
│  └── Test Plans                                             │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│              SEGURANÇA & QUALIDADE                          │
├─────────────────────────────────────────────────────────────┤
│  DefectDojo                                                 │
│  ├── Gestão de Vulnerabilidades                             │
│  ├── SAST/SCA/DAST                                          │
│  └── Risk Register                                          │
│                                                             │
│  SonarCloud                                                 │
│  ├── Análise Estática (SAST)                                │
│  └── Quality Gate                                           │
│                                                             │
│  Trivy                                                      │
│  ├── Software Composition Analysis                          │
│  └── Container Scanning                                     │
│                                                             │
│  OWASP ZAP                                                  │
│  └── Dynamic Application Security Testing                   │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│              DOCUMENTAÇÃO & COMPLIANCE                      │
├─────────────────────────────────────────────────────────────┤
│  SharePoint Online                                          │
│  ├── Design History File (DHF)                              │
│  ├── Documentos Regulatórios                                │
│  └── Repositório Legal                                      │
│                                                             │
│  Spec-Kit                                                   │
│  ├── Templates de Especificação                             │
│  └── Gestão de Requisitos                                   │
└─────────────────────────────────────────────────────────────┘
```

## Cloud & Infraestrutura

### Azure Cloud

**Função**: Infraestrutura como Serviço (IaaS/PaaS)

**Serviços Utilizados**:

#### App Services
- **Função**: Hospedagem da aplicação web
- **Tipo**: Linux App Service Plan
- **Ambientes**: Development, Staging, Production
- **Configuração**: Via Terraform (IaC)

#### Azure Key Vault
- **Função**: Armazenamento seguro de secrets
- **Conteúdo**:
  - Connection strings de banco de dados
  - API keys de serviços externos
  - Certificados SSL/TLS
  - Tokens de autenticação

#### Azure Storage Accounts
- **Função**: Armazenamento de artefatos
- **Tipos**:
  - Blob Storage: Logs, backups
  - File Storage: Documentação
  - Table Storage: Metadados

#### Log Analytics Workspace
- **Função**: Centralização de logs
- **Retenção**: 30 dias (dev/staging), 365 dias (prod)
- **Integração**: Azure Sentinel, Azure Monitor

#### Azure Sentinel (SIEM)
- **Função**: Segurança e monitoramento em tempo real
- **Capacidades**:
  - Detecção de ameaças
  - Análise de segurança
  - Resposta automatizada
  - Compliance e auditoria

**Responsável**: DevOps Team  
**Governança**: Terraform (Infrastructure as Code)  
**Backup**: Configurações versionadas no Git

---

## Ferramentas de Desenvolvimento

### Azure DevOps (ADO)

**Função**: Fonte da Verdade de Execução - Orquestra requisitos, código e testes

#### Azure Boards
- **Função**: Gestão de trabalho e requisitos
- **Work Item Types**:
  - Features
  - User Stories
  - Tasks
  - Bugs
  - Risks
- **Funcionalidades**:
  - Backlog management
  - Sprint planning
  - Kanban boards
  - Dashboards e relatórios

#### Azure Repos
- **Função**: Versionamento de código
- **Tipo**: Git repository
- **Estrutura**: Gitflow (main, develop, feature branches)
- **Políticas**:
  - Branch policies
  - Pull request requirements
  - Code review obrigatório (mínimo 2 aprovações)

#### Azure Pipelines
- **Função**: CI/CD automatizado
- **Triggers**: Push para develop/main, Pull Requests
- **Stages**:
  - Build & Test
  - SAST (SonarCloud)
  - SCA (Trivy)
  - Security Validation (DefectDojo)
  - Deploy Staging
  - DAST (OWASP ZAP)
- **Integração**: DefectDojo, SonarCloud, Terraform

#### Azure Test Plans
- **Função**: Gestão de testes
- **Tipos**:
  - Test Cases
  - Test Suites
  - Test Runs
  - Manual Testing
- **Integração**: Work Items (rastreabilidade)

**Responsável**: DevOps / QA Team  
**Acesso**: Azure Active Directory  
**Custos**: Azure DevOps Services (incluso no plano)

---

## Segurança & Qualidade

### OWASP DefectDojo

**Função**: Fonte da Verdade de Segurança - Centraliza, deduplica e gerencia vulnerabilidades

**Características**:
- **Gestão de Vulnerabilidades**: Ciclo de vida completo
- **Integrações**: SAST, SCA, DAST scanners
- **Deduplicação**: Automática de findings
- **Risk Register**: Registro de riscos de segurança
- **Integração ADO**: Push automático de bugs

**Scanners Integrados**:
- SonarCloud (SAST)
- Trivy (SCA)
- OWASP ZAP (DAST)
- Custom scanners

**API**: REST API para automação  
**Responsável**: AppSec Team  
**Acesso**: DefectDojo web interface + API keys

---

### SonarCloud

**Função**: Análise Estática de Código (SAST)

**Capacidades**:
- Análise de código-fonte
- Detecção de bugs e vulnerabilidades
- Code smells
- Duplicação de código
- Cobertura de testes
- Quality Gate (A, B, C, D, E)

**Integração**:
- Azure DevOps Pipelines
- Pull Request comments
- Quality Gate como gate de pipeline

**Responsável**: Dev Team / DevOps  
**Licença**: SonarCloud (SaaS)  
**Custo**: Baseado em LOC (Lines of Code)

---

### Trivy

**Função**: Software Composition Analysis (SCA) e Container Scanning

**Capacidades**:
- Scan de dependências (npm, pip, etc.)
- Scan de containers Docker
- Scan de sistemas operacionais
- Detecção de CVEs conhecidos
- Relatórios em múltiplos formatos (JSON, XML, HTML)

**Uso**:
- Scan no pipeline CI/CD
- Scan diário de imagens de produção
- Integração com DefectDojo

**Responsável**: DevOps / AppSec  
**Licença**: Open Source (Apache 2.0)  
**Custo**: Gratuito

---

### OWASP ZAP

**Função**: Dynamic Application Security Testing (DAST)

**Capacidades**:
- Testes de segurança em aplicações em execução
- Detecção de vulnerabilidades OWASP Top 10
- Testes automatizados
- Relatórios detalhados

**Uso**:
- Após deploy em staging
- Antes de releases
- Integração com DefectDojo

**Responsável**: AppSec Team  
**Licença**: Open Source (Apache 2.0)  
**Custo**: Gratuito

---

### Playwright (Testes E2E)

**Função**: Testes End-to-End Automatizados (Principal)

**Capacidades**:
- Testes E2E automatizados em múltiplos browsers (Chrome, Firefox, Safari, Edge)
- Auto-waiting (reduz flakiness)
- Screenshots e vídeos automáticos
- Trace viewer para debug
- Network mocking
- Execução rápida e paralela

**Tipos de Testes**:
- **Smoke Tests**: Verificação básica de sistema (< 2 min)
- **Sanity Tests**: Validação de funcionalidades críticas (< 5 min)
- **E2E Tests**: Fluxos completos de usuário (10-30 min)
- **Regression Tests**: Suíte completa (30-60 min)

**Integração**:
- Azure DevOps Pipelines
- PR Checks (Sanity Tests bloqueiam PR se falhar)
- Azure Test Plans (vinculação automática de resultados)

**Responsável**: QA Team / Dev Team  
**Licença**: Open Source (Apache 2.0)  
**Custo**: Gratuito

---

### Selenium (Testes E2E - Complementar)

**Função**: Testes End-to-End Automatizados (Complementar)

**Capacidades**:
- Testes E2E em todos os browsers
- Máxima compatibilidade com browsers legados
- Suporte para casos específicos não cobertos por Playwright

**Uso**:
- Casos específicos que requerem Selenium
- Compatibilidade com browsers legados
- Ferramentas que exigem Selenium

**Responsável**: QA Team / Dev Team  
**Licença**: Open Source (Apache 2.0)  
**Custo**: Gratuito

**Estratégia**: 80% Playwright (principal), 20% Selenium (complementar)

---

## Documentação & Compliance

### SharePoint Online

**Função**: Repositório Legal (DHF) - Armazena registros imutáveis

**Estrutura**:
```
/DHF/
├── Demo-App/
│   └── Version/
│       └── v1.0.0/
│           ├── nCommand-Lite-Demo-DHF-v1.0.0.pdf
│           ├── traceability-matrix-v1.0.0.pdf
│           └── security-certificate-v1.0.0.pdf
├── Regulatory/
│   ├── ISO/
│   ├── IEC/
│   └── Market-Regulations/
└── SOPs/
```

**Conteúdo**:
- Design History Files (PDFs assinados)
- Documentos regulatórios
- Matrizes de rastreabilidade
- Certificados de segurança
- Artefatos de release

**Imutabilidade**: PDFs assinados digitalmente  
**Responsável**: QA Leader  
**Acesso**: Microsoft 365 / Azure AD

---

### Spec-Kit

**Função**: Kit de Gestão de Especificações Técnicas

**Componentes**:
- Templates de especificação (Markdown)
- Ferramentas de automação (Python, Bash)
- Scripts de validação
- Gerador de rastreabilidade

**Templates**:
- Feature Specification
- API Specification
- Infrastructure Specification
- Usability Specification (IEC 62366-1)

**Ferramentas**:
- `generate-spec.sh`: Geração de specs
- `sync-ado.py`: Sincronização com Azure DevOps
- `traceability.py`: Matriz de rastreabilidade
- `validate-spec.sh`: Validação de specs

**Responsável**: QA Leader / Dev Team  
**Localização**: `spec-kit/` no repositório

---

## Outros Ativos

### Terraform

**Função**: Infrastructure as Code (IaC)

**Arquivos**:
- `infrastructure/azure/main.tf`
- `infrastructure/azure/variables.tf`

**Backend**: Azure Storage (state file)  
**Responsável**: DevOps Team  
**Princípio**: Toda infraestrutura é código

---

### Pre-commit Hooks

**Função**: Validação antes de commits

**Hooks Configurados**:
- Linting (ESLint, Pylint)
- Formatação (Prettier, Black)
- Detecção de secrets
- Validação de Terraform

**Arquivo**: `.pre-commit-config.yaml`  
**Responsável**: Dev Team

---

## Resumo de Custos (Estimado)

| Ativo | Tipo | Custo Mensal (USD) | Notas |
|-------|------|-------------------|-------|
| Azure Cloud | Cloud | $200-500 | Depende do uso |
| Azure DevOps | SaaS | $0-50 | Incluído em planos Azure |
| SonarCloud | SaaS | $10-100 | Baseado em LOC |
| DefectDojo | Self-hosted | $50-200 | Infraestrutura + manutenção |
| Playwright/Selenium | Open Source | $0 | Gratuito |
| SharePoint Online | SaaS | $0-20 | Incluído em M365 |
| **Total Estimado** | | **$260-870/mês** | |

---

## Responsabilidades por Ativo

| Ativo | Responsável | Backup/Secondary |
|-------|-------------|------------------|
| Azure Cloud | DevOps | Tech Lead |
| Azure DevOps | DevOps | QA Leader |
| DefectDojo | AppSec | DevOps |
| SonarCloud | Dev Team | DevOps |
| Playwright/Selenium | QA Team / Dev Team | DevOps |
| SharePoint | QA Leader | Regulatory Affairs |
| Spec-Kit | QA Leader | Dev Team |

---

## Integrações Principais

### Fluxo de Dados

```
Azure DevOps (Work Items)
    ↓
Spec-Kit (Especificações)
    ↓
Git (Código)
    ↓
Azure Pipelines (CI/CD)
    ├─→ SonarCloud (SAST)
    ├─→ Trivy (SCA)
    └─→ DefectDojo (Gestão)
         ↓
    Azure Sentinel (Monitoramento)
         ↓
    SharePoint (DHF)
```

---

**Última Atualização**: 2024  
**Responsável**: QA Leader / DevOps  
**Revisão**: Trimestral


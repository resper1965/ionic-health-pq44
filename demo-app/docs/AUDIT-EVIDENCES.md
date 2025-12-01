# Evidências para Auditoria - nCommand Lite

**Documento**: Mapeamento de Evidências para Auditoria  
**Versão**: 1.0  
**Data**: 1/12/2025  
**Responsável**: QA Leader

## 1. Objetivo

Este documento mapeia todas as evidências necessárias para auditorias regulatórias (ISO 13485, IEC 62304, ISO 14971, ISO 27001), indicando claramente onde cada evidência está armazenada e como acessá-la.

## 2. Arquitetura de Evidências

### 2.1 Sistemas de Armazenamento

| Sistema | Função | Tipo de Evidência | Acesso |
|---------|--------|-------------------|--------|
| **Azure DevOps** | Fonte da Verdade de Execução | Requisitos, código, testes, aprovações | Web UI / API |
| **DefectDojo** | Fonte da Verdade de Segurança | Vulnerabilidades, scans, triagem | Web UI / API |
| **SharePoint Online** | Repositório Legal (DHF) | Documentos assinados, imutáveis | Web UI / Microsoft 365 |
| **Azure Repos** | Versionamento Git | Histórico de código, commits | Web UI / Git CLI |
| **SonarCloud** | Qualidade de Código | Relatórios SAST, métricas | Web UI / API |
| **Azure Sentinel** | Monitoramento SIEM | Logs, incidentes | Web UI |

---

## 3. Evidências por Fase do Ciclo de Vida

### FASE 1: Planejamento, Risco e Infraestrutura

#### 3.1 Requisitos e Especificações

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Work Items (Features/User Stories)** | Azure DevOps → Boards | https://dev.azure.com/ionic-health/nCommand-Lite/_boards | PO/UX |
| **Perfil de Usuário (IEC 62366)** | Azure DevOps → Work Item → Campos customizados | Work Item → Campo "Perfil de Usuário" | PO/UX |
| **Tarefas Principais (IEC 62366)** | Azure DevOps → Work Item → Campos customizados | Work Item → Campo "Tarefas Principais" | PO/UX |
| **Histórico de Requisitos** | Azure DevOps → Boards → Work Items | Filtros por área/persona/sprint | PO/UX |

**Auditoria**: Mostrar criação, aprovação e rastreabilidade de requisitos.

#### 3.2 Análise de Riscos (ISO 14971)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Work Items de Risco** | Azure DevOps → Boards → Tipo "Risk" | Filtro: Work Item Type = Risk | QA |
| **Análise de Risco (RPN)** | Azure DevOps → Work Item → Campos customizados | Work Item → Campos: Severidade, Probabilidade, Detectabilidade, RPN | QA/PO |
| **Consulta Histórico DefectDojo** | DefectDojo → Findings | Buscar por projeto/engagements antigos | Arquiteto |
| **uFMEA (Análise de Erro de Uso)** | Azure DevOps → Work Item → Comentários/Anexos | Work Item → Aba "Attachments" | UX |
| **Relacionamento Risco → Requisito** | Azure DevOps → Work Item → Links | Work Item → Aba "Links" → Relação "Mitigates" | QA |

**Auditoria**: Mostrar identificação, análise e rastreabilidade de riscos.

#### 3.3 Aceitação de Riscos

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Risk Acceptance Form** | SharePoint → `/Risk Management/Risk Acceptance Forms/` | https://[tenant].sharepoint.com/... | QA Leader |
| **Risk Acceptance Register** | SharePoint → `/Risk Management/Risk Acceptance Register/` | Excel/PDF com lista completa | QA Leader |
| **Status de Aceitação no ADO** | Azure DevOps → Work Item → Campo "Risk Acceptance Status" | Work Item → Campo customizado | QA Leader |
| **Aprovações Digitais** | SharePoint → PDF assinado | Arquivo PDF com assinaturas | QA Leader |
| **Análise de Benefício/Risco** | SharePoint → `/Risk Management/Risk Analysis/Benefit-Risk-Analysis/` | Documento Word/PDF | QA Leader |

**Auditoria**: Mostrar processo formal de aceitação e justificativas.

#### 3.4 Gate de Aprovação (FASE 1)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Aprovação do QA Leader** | Azure DevOps → Work Item → State = "Approved" | Work Item → Histórico de mudanças | QA Leader |
| **Comentário de Aprovação** | Azure DevOps → Work Item → Comentários | Work Item → Aba "Comments" | QA Leader |
| **Work Item State History** | Azure DevOps → Work Item → History | Work Item → Aba "History" | Sistema |

**Auditoria**: Mostrar aprovação formal antes do desenvolvimento iniciar.

---

### FASE 2: Desenvolvimento e Codificação

#### 3.5 Versionamento e Código

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Branches Git** | Azure Repos → Branches | https://dev.azure.com/.../_git/nCommand-Lite/branches | Developer |
| **Commits com Work Item ID** | Azure Repos → Commits | Filtro: commits contendo "[WORKITEM-ID]" | Developer |
| **Histórico de Commits** | Azure Repos → History | Branch → View History | Sistema |
| **Estrutura de Branches (Gitflow)** | Azure Repos → Branches | Visualização de branches: main/develop/feat/* | Sistema |

**Auditoria**: Mostrar rastreabilidade código → requisito.

#### 3.6 Code Review e Pull Requests

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Pull Requests** | Azure Repos → Pull Requests | https://dev.azure.com/.../_git/nCommand-Lite/pullrequests | Developer |
| **Work Item Vinculado no PR** | Azure Repos → PR → Description/Linked Work Items | PR → Aba "Work Items" | Developer |
| **Aprovações de Code Review** | Azure Repos → PR → Reviewers | PR → Aba "Reviewers" → Status "Approved" | Dev Team |
| **Comentários de Review** | Azure Repos → PR → Files/Comments | PR → Comentários inline | Dev Team |
| **Build Status no PR** | Azure Repos → PR → Checks | PR → Aba "Checks" → Status do Pipeline | Sistema |
| **Histórico de PRs** | Azure Repos → Pull Requests → Completed | Filtro por data/status | Sistema |

**Auditoria**: Mostrar processo de review e aprovação de código.

#### 3.7 Pre-commit Hooks e Validações

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Configuração de Hooks** | Azure Repos → `.pre-commit-config.yaml` | Arquivo no repositório | DevOps |
| **Execução de Hooks** | Logs do Git client (local) | `git log` + histórico local | Developer |
| **Falhas de Hooks** | Logs de commit (quando hooks falham) | Mensagens de erro no commit | Sistema |

**Auditoria**: Mostrar validações automáticas antes do commit.

#### 3.8 Testes Unitários

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Código de Testes** | Azure Repos → `tests/` | Arquivos de teste no repositório | Developer |
| **Relatórios de Testes** | Azure DevOps → Pipelines → Test Results | Build → Aba "Tests" → Relatório | Sistema |
| **Cobertura de Código** | Azure DevOps → Pipelines → Code Coverage | Build → Aba "Code Coverage" | Sistema |
| **Pass Rate (100%)** | Azure DevOps → Pipelines → Test Results | Build → Test Summary | Sistema |

**Auditoria**: Mostrar execução e resultados de testes unitários.

#### 3.9 Infraestrutura como Código (IaC)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Código Terraform** | Azure Repos → `infrastructure/azure/` | Arquivos `.tf` no repositório | DevOps |
| **Estado do Terraform** | Azure Storage Account (backend) | Via Terraform CLI ou Azure Portal | DevOps |
| **Histórico de Mudanças IaC** | Azure Repos → Commits em `infrastructure/` | Git history dos arquivos IaC | DevOps |
| **Proibição de Mudanças Manuais** | Azure Portal → Activity Log (ausência de mudanças) | Verificar logs de atividade | Sistema |

**Auditoria**: Mostrar controle de infraestrutura via código.

---

### FASE 3: Verificação Automatizada e Ingestão de Segurança

#### 3.10 Pipeline CI/CD

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Definição do Pipeline** | Azure Repos → `pipelines/azure-pipelines.yml` | Arquivo YAML no repositório | DevOps |
| **Execução do Pipeline** | Azure DevOps → Pipelines → Runs | Histórico de execuções | Sistema |
| **Logs de Build** | Azure DevOps → Pipeline Run → Logs | Run → Aba "Logs" | Sistema |
| **Status do Pipeline** | Azure DevOps → Pipelines → Status | Visualização de status (Success/Failed) | Sistema |
| **Gates de Pipeline** | Azure DevOps → Pipeline → Gates/Checks | Configuração de gates | DevOps |

**Auditoria**: Mostrar execução automatizada e gates configurados.

#### 3.11 SAST (SonarCloud)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Quality Gate Status** | SonarCloud → Project Dashboard | https://sonarcloud.io/project/overview?id=... | DevOps |
| **Relatório de Qualidade** | SonarCloud → Project → Quality Gate | Dashboard com métricas | Sistema |
| **Issues Identificadas** | SonarCloud → Project → Issues | Lista de code smells/bugs | Sistema |
| **Métricas de Código** | SonarCloud → Project → Measures | Coverage, duplicação, etc. | Sistema |
| **Histórico de Scans** | SonarCloud → Project → Activity | Timeline de análises | Sistema |

**Auditoria**: Mostrar qualidade de código e conformidade com Quality Gate A.

#### 3.12 SCA (Trivy)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Relatório Trivy (JSON/XML)** | Azure DevOps → Pipeline → Artifacts | Run → Aba "Artifacts" → trivy-report.json | Sistema |
| **Findings no DefectDojo** | DefectDojo → Findings → Tipo "SCA" | Filtro: Test Type = Trivy | Sistema |
| **CVE Identificados** | DefectDojo → Findings | Detalhes do finding → CVE ID | Sistema |
| **Status de Correção** | DefectDojo → Findings → Status | Mitigated, Active, etc. | AppSec |

**Auditoria**: Mostrar scan de dependências e tratamento de vulnerabilidades.

#### 3.13 DefectDojo - Gestão Centralizada

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Findings (SAST/SCA/DAST)** | DefectDojo → Findings | Lista completa de vulnerabilidades | AppSec |
| **Engagement/Test** | DefectDojo → Engagements | Engagement por release/branch | Sistema |
| **Relatórios de Scan** | DefectDojo → Reports | Relatórios gerados automaticamente | Sistema |
| **Deduplicação Automática** | DefectDojo → Findings → "Duplicate" | Status do finding | Sistema |
| **Auto-Close de Vulnerabilidades** | DefectDojo → Findings → Status = "Mitigated" | Histórico de mudanças | Sistema |
| **Triagem (False Positive)** | DefectDojo → Findings → Status = "False Positive" | Comentários de triagem | AppSec |
| **Ciclo de Vida** | DefectDojo → Findings → History | Timeline de mudanças | Sistema |

**Auditoria**: Mostrar gestão centralizada e ciclo de vida completo.

#### 3.14 Bloqueio de Pipeline por Vulnerabilidades

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Pipeline Failed** | Azure DevOps → Pipeline → Failed Runs | Run → Status "Failed" | Sistema |
| **DefectDojo Check** | Azure DevOps → Pipeline → Logs | Logs do script defectdojo-check.sh | Sistema |
| **Vulnerabilidades Críticas/Altas** | DefectDojo → Findings → Severity | Filtro: Critical/High | Sistema |
| **Gate de Segurança** | Azure DevOps → Pipeline → Gates | Configuração do gate | DevOps |

**Auditoria**: Mostrar bloqueio automático quando há vulnerabilidades.

#### 3.15 DAST (OWASP ZAP)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Relatório OWASP ZAP** | Azure DevOps → Pipeline → Artifacts | Run → zap-report.xml | Sistema |
| **Findings DAST no DefectDojo** | DefectDojo → Findings → Tipo "DAST" | Filtro: Test Type = ZAP | Sistema |
| **Deploy em Staging** | Azure DevOps → Pipeline → Deploy Stage | Logs de deploy | Sistema |

**Auditoria**: Mostrar testes dinâmicos de segurança.

---

#### 3.15.1 Testes E2E Automatizados (Playwright/Selenium)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Sanity Tests E2E (PR)** | Azure DevOps → Pipeline → Stage SanityTests | PR Checks → Status dos testes | Sistema |
| **Smoke Tests E2E** | Azure DevOps → Pipeline → Stage SmokeTests | Run → Aba "Tests" → Smoke Tests | Sistema |
| **Sanity Tests E2E (Staging)** | Azure DevOps → Pipeline → Stage SanityTestsStaging | Run → Aba "Tests" → Sanity Tests | Sistema |
| **E2E Tests (Fluxos Críticos)** | Azure DevOps → Pipeline → Stage E2ETests | Run → Aba "Tests" → E2E Tests | Sistema |
| **Regression Tests E2E** | Azure DevOps → Pipeline → Stage RegressionTests | Run → Aba "Tests" → Regression Tests | Sistema |
| **Relatórios Playwright (HTML)** | Azure DevOps → Pipeline → Artifacts | Run → Artifacts → playwright-report | Sistema |
| **Vídeos de Execução E2E** | Azure DevOps → Pipeline → Artifacts | Run → Artifacts → playwright-report/videos | Sistema |
| **Screenshots E2E** | Azure DevOps → Pipeline → Artifacts | Run → Artifacts → playwright-report/screenshots | Sistema |
| **Playwright Trace Viewer** | Azure DevOps → Pipeline → Artifacts | Run → Artifacts → playwright-report/trace | Sistema |
| **Test Cases no Azure Test Plans** | Azure DevOps → Test Plans | Test Cases vinculados a E2E Tests | Sistema |
| **Pass Rate (100%)** | Azure DevOps → Pipeline → Test Results | Run → Test Summary | Sistema |

**Auditoria**: Mostrar execução automatizada de testes E2E e evidências visuais.

---

### FASE 4: Validação e Liberação

#### 3.16 Testes Funcionais

**Nota**: Testes E2E automatizados reduzem significativamente a carga de testes funcionais manuais. Testes manuais focam em casos complexos e específicos.

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Test Cases (Manuais)** | Azure DevOps → Test Plans | https://dev.azure.com/.../_testManagement/... | QA |
| **Test Cases (E2E Automatizados)** | Azure DevOps → Test Plans | Test Cases criados automaticamente a partir de E2E Tests | Sistema |
| **Resultados de Testes** | Azure DevOps → Test Plans → Runs | Test Run → Resultados | QA |
| **Pass Rate (100%)** | Azure DevOps → Test Plans → Summary | Relatório de testes | Sistema |
| **Screenshots/Evidências** | Azure DevOps → Test Plans → Attachments | Test Case → Anexos | QA |
| **Evidências E2E Automatizadas** | Azure DevOps → Pipeline → Artifacts | Playwright reports com screenshots/vídeos | Sistema |

**Auditoria**: Mostrar execução e resultados de testes funcionais (automatizados e manuais).

#### 3.17 Testes de Usabilidade Somativos (IEC 62366)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Plano de Teste de Usabilidade** | Azure DevOps → Test Plans → Suite "Usability" | Test Suite específica | UX/QA |
| **Resultados Somativos** | Azure DevOps → Test Plans → Results | Test Run → Resultados | QA |
| **Análise de Erro de Uso** | Azure DevOps → Test Plans → Annotations | Comentários nos resultados | UX |
| **Aprovação de Usabilidade** | Azure DevOps → Test Plans → Status | Suite → Status "Passed" | QA Leader |

**Auditoria**: Mostrar conformidade com IEC 62366-1.

#### 3.18 Geração do DHF (Design History File)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Script de Geração** | Azure Repos → `pipelines/scripts/generate-dhf.sh` | Arquivo shell script | DevOps |
| **Matriz de Rastreabilidade** | SharePoint → `/DHF/Version/v1.0.0/traceability-matrix-v1.0.0.pdf` | PDF gerado | Sistema |
| **DHF Completo** | SharePoint → `/DHF/Version/v1.0.0/nCommand-Lite-DHF-v1.0.0.pdf` | PDF assinado | QA Leader |
| **Logs de Geração** | Azure DevOps → Pipeline → Logs | Run → Logs do script | Sistema |

**Auditoria**: Mostrar geração automatizada do DHF.

#### 3.19 Certificado de Segurança

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Resumo DefectDojo** | DefectDojo → Reports → Security Certificate | Relatório exportado | Sistema |
| **0 Vulnerabilidades Críticas/Altas** | DefectDojo → Findings → Filtro | Status: Active, Severity: Critical/High = 0 | Sistema |
| **Certificado no DHF** | SharePoint → `/DHF/Version/v1.0.0/security-certificate-v1.0.0.pdf` | PDF incluído no DHF | QA Leader |

**Auditoria**: Mostrar status de segurança no release.

#### 3.20 Gate de Liberação

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Aprovação Digital do QA Leader** | Azure DevOps → Work Item → State = "Approved" | Work Item de Release | QA Leader |
| **Comentário de Aprovação** | Azure DevOps → Work Item → Comments | Comentário de aprovação | QA Leader |
| **Checklist de Liberação** | Azure DevOps → Work Item → Checklist | Lista de verificação | QA Leader |

**Auditoria**: Mostrar aprovação formal para liberação.

#### 3.21 Transferência para SharePoint

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **DHF PDF Assinado** | SharePoint → `/DHF/Version/v1.0.0/nCommand-Lite-DHF-v1.0.0.pdf` | PDF com assinatura digital | QA Leader |
| **Matriz de Rastreabilidade** | SharePoint → `/DHF/Version/v1.0.0/traceability-matrix-v1.0.0.pdf` | PDF gerado | Sistema |
| **Certificado de Segurança** | SharePoint → `/DHF/Version/v1.0.0/security-certificate-v1.0.0.pdf` | PDF exportado | Sistema |
| **Metadados do Arquivo** | SharePoint → Properties | Data de upload, versão, etc. | Sistema |

**Auditoria**: Mostrar armazenamento imutável de artefatos.

#### 3.22 Git Tag (Release)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Tag v1.0.0** | Azure Repos → Tags | https://dev.azure.com/.../_git/nCommand-Lite/tags | QA Leader |
| **Commit da Tag** | Azure Repos → Tags → Commit | Link para commit específico | Sistema |
| **Mensagem da Tag** | Azure Repos → Tags → Details | Descrição do release | QA Leader |

**Auditoria**: Mostrar versionamento de release.

---

### FASE 5: Monitoramento e Gestão de Vulnerabilidades

#### 3.23 Monitoramento SIEM (Azure Sentinel)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Incidentes de Segurança** | Azure Sentinel → Incidents | Lista de incidentes detectados | AppSec |
| **Alertas** | Azure Sentinel → Incidents → Alerts | Alertas relacionados | Sistema |
| **Logs de Monitoramento** | Azure Sentinel → Logs | Queries KQL | Sistema |
| **Dashboard de Monitoramento** | Azure Sentinel → Workbooks | Visualizações | AppSec |

**Auditoria**: Mostrar monitoramento contínuo de segurança.

#### 3.24 Scans Diários (Trivy → DefectDojo)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Scan Diário Configurado** | Azure DevOps → Pipelines → Scheduled | Pipeline com trigger agendado | DevOps |
| **Execuções Diárias** | Azure DevOps → Pipelines → Runs | Histórico de execuções diárias | Sistema |
| **Findings no DefectDojo** | DefectDojo → Findings → Source = "Daily Scan" | Filtro por source | Sistema |
| **Data de Identificação** | DefectDojo → Findings → Created | Timeline de criação | Sistema |

**Auditoria**: Mostrar vigilância contínua.

#### 3.25 Triagem de Vulnerabilidades

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Triagem (True Positive)** | DefectDojo → Findings → Status | Status mudado de "Active" para "Triaged" | AppSec |
| **False Positive Marcado** | DefectDojo → Findings → Status = "False Positive" | Comentários de triagem | AppSec |
| **Comentários de Triagem** | DefectDojo → Findings → Comments | Análise do AppSec/QA | AppSec/QA |

**Auditoria**: Mostrar processo de triagem.

#### 3.26 Push to Azure DevOps (Criação de Bug)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Bug Criado no ADO** | Azure DevOps → Boards → Bug | Work Item do tipo Bug | Sistema |
| **Link DefectDojo → ADO** | Azure DevOps → Bug → Links | Link para Finding no DefectDojo | Sistema |
| **Histórico de Criação** | Azure DevOps → Bug → History | Data/hora de criação | Sistema |

**Auditoria**: Mostrar integração DefectDojo → Azure DevOps.

#### 3.27 SLA de Correção

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Bug Status no ADO** | Azure DevOps → Bug → State | Estado atual do bug | Dev Team |
| **Data de Criação vs. Resolução** | Azure DevOps → Bug → Dates | Lead time de correção | Sistema |
| **SLA Tracking** | Azure DevOps → Boards → Custom Field "SLA" | Campo customizado | QA |
| **Histórico de Correção** | Azure DevOps → Bug → History | Timeline de mudanças | Sistema |

**Auditoria**: Mostrar conformidade com SLAs definidos.

#### 3.28 Change Request e LTF (Letter to File)

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Change Request** | Azure DevOps → Boards → Work Item Type "Change Request" | Work Item específico | QA Leader |
| **LTF Documentado** | SharePoint → `/Change Management/LTF/` | Documento PDF | QA Leader |
| **Aprovação de Mudança** | Azure DevOps → Change Request → State = "Approved" | Aprovação formal | QA Leader |

**Auditoria**: Mostrar controle de mudanças em produção.

#### 3.29 Reavaliação Trimestral de Riscos

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **Work Items Atualizados** | Azure DevOps → Boards → Risk → Updated Date | Filtro por data de atualização | QA |
| **Reavaliação Documentada** | SharePoint → `/Risk Management/Reassessment/` | Relatório trimestral | QA Leader |
| **Novos Riscos Identificados** | Azure DevOps → Boards → Risk → Created Date | Riscos criados no trimestre | QA |

**Auditoria**: Mostrar processo contínuo de reavaliação.

---

## 4. Evidências de Processo

### 4.1 Documentação de Processos

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **PROCESS.md** | Azure Repos → `docs/PROCESS.md` | Arquivo Markdown | QA Leader |
| **SOP-001 a SOP-005** | Azure Repos → `docs/sop/` | Arquivos Markdown | QA Leader |
| **Versionamento de SOPs** | Azure Repos → Git History | Histórico de commits | Sistema |
| **Aprovação de SOPs** | Azure Repos → `docs/sop/` → Header | Metadados no arquivo | QA Leader |

**Auditoria**: Mostrar processos documentados e aprovados.

### 4.2 Matriz de Conformidade

| Evidência | Onde Está | Como Acessar | Responsável |
|-----------|-----------|--------------|-------------|
| **COMPLIANCE-MATRIX.md** | Azure Repos → `docs/regulatory/COMPLIANCE-MATRIX.md` | Mapeamento requisito → implementação | QA Leader |
| **Rastreabilidade** | SharePoint → DHF → Seção "Traceability" | Matriz completa no DHF | Sistema |

**Auditoria**: Mostrar mapeamento de requisitos regulatórios.

---

## 5. Como Preparar para Auditoria

### 5.1 Checklist Pré-Auditoria

**FASE 1**:
- [ ] Work Items de requisitos acessíveis
- [ ] Work Items de riscos documentados
- [ ] Risk Acceptance Forms no SharePoint
- [ ] Aprovações do QA Leader visíveis

**FASE 2**:
- [ ] Commits rastreáveis (Work Item ID)
- [ ] Pull Requests com aprovações
- [ ] Testes unitários com 100% pass
- [ ] Código Terraform versionado

**FASE 3**:
- [ ] Pipeline executado com sucesso
- [ ] SonarCloud Quality Gate A
- [ ] DefectDojo com 0 vulns críticas/altas
- [ ] Relatórios de scan disponíveis

**FASE 4**:
- [ ] Testes funcionais aprovados
- [ ] Testes de usabilidade somativos
- [ ] DHF gerado e no SharePoint
- [ ] Tag de release criada

**FASE 5**:
- [ ] Scans diários executando
- [ ] Incidentes monitorados no Sentinel
- [ ] Vulnerabilidades triadas
- [ ] SLAs sendo cumpridos

### 5.2 Acesso para Auditores

**Credenciais Temporárias**:
- Azure DevOps: Conta de leitura (Read-only)
- DefectDojo: Usuário com permissão de visualização
- SharePoint: Acesso de leitura ao diretório DHF
- SonarCloud: Acesso público ou conta de leitura

**Documentação para Auditores**:
- Este documento (AUDIT-EVIDENCES.md)
- COMPLIANCE-MATRIX.md
- PROCESS.md
- SOPs completos

---

## 6. Retenção de Evidências

| Tipo de Evidência | Período de Retenção | Localização |
|-------------------|---------------------|-------------|
| **DHF** | Indefinido (regulatório) | SharePoint |
| **Work Items** | Indefinido | Azure DevOps |
| **Commits Git** | Indefinido | Azure Repos |
| **Findings DefectDojo** | 7 anos | DefectDojo |
| **Logs Sentinel** | 365 dias (prod) / 30 dias (dev) | Azure Sentinel |
| **Relatórios de Testes** | 7 anos | SharePoint + Azure Test Plans |

---

## 7. Responsável pelas Evidências

| Área | Responsável Principal | Backup |
|------|----------------------|--------|
| **Azure DevOps** | QA Leader | DevOps Lead |
| **DefectDojo** | AppSec Lead | QA Leader |
| **SharePoint** | QA Leader | Compliance Officer |
| **Azure Repos** | DevOps Lead | Tech Lead |
| **SonarCloud** | DevOps Lead | AppSec Lead |

---

**Última Atualização**: 1/12/2025  
**Próxima Revisão**: Trimestral  
**Responsável**: QA Leader


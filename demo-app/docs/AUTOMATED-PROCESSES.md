# Processos Automatizados do Ciclo de Vida - nCommand Lite

**Documento**: Lista e Documentação de Processos Automatizados  
**Versão**: 1.0  
**Data**: 1/12/2025  
**Responsável**: QA Leader / DevOps Lead

## 1. Objetivo

Este documento lista e descreve todos os processos automatizados implementados no ciclo de vida do nCommand Lite, incluindo localização, funcionamento, triggers e evidências geradas.

## 2. Princípio: Compliance as Code

O nCommand Lite implementa **"Compliance as Code"**, onde todas as exigências regulatórias são impostas por barreiras técnicas automatizadas (Gates) dentro da esteira de produção, garantindo conformidade sem dependência de processos manuais.

---

## 3. Processos Automatizados por Fase

### FASE 1: Planejamento, Risco e Infraestrutura

#### 3.1 Validação de Work Items no Pull Request

**Tipo**: Validação Automática  
**Localização**: Azure DevOps → Branch Policies  
**Script/Config**: Azure DevOps UI (Branch Policies)

**Funcionamento**:
- Validação automática no Pull Request
- Bloqueia PR se Work Item não estiver vinculado
- Verifica campos obrigatórios do Work Item

**Trigger**: Criação ou atualização de Pull Request

**Evidência**:
- **Onde**: Azure DevOps → Pull Request → Checks
- **Formato**: Status do check (Pass/Fail)
- **Auditoria**: Histórico de PRs mostra validação

**Configuração**:
```
Azure DevOps → Project Settings → Repositories → Branch Policies
→ Work Item Linking: Required
```

---

### FASE 2: Desenvolvimento e Codificação

#### 3.2 Pre-commit Hooks

**Tipo**: Validação Local (Cliente)  
**Localização**: `.pre-commit-config.yaml` (raiz do repositório)  
**Script**: Pre-commit framework

**Funcionamento**:
Validações executadas ANTES do commit ser aceito localmente:

1. **Linting**:
   - ESLint (JavaScript/TypeScript)
   - Pylint (Python)

2. **Formatação**:
   - Prettier (JavaScript/TypeScript/JSON/CSS)
   - Black (Python)

3. **Detecção de Secrets**:
   - detect-secrets (credenciais hardcoded)
   - detect-private-key (chaves privadas)

4. **Validação de Arquivos**:
   - check-yaml
   - check-json
   - trailing-whitespace
   - end-of-file-fixer

5. **Validação Terraform**:
   - terraform_fmt
   - terraform_validate
   - terraform_tflint

**Trigger**: Comando `git commit` (local)

**Evidência**:
- **Onde**: Não há evidência direta (preventivo)
- **Auditoria**: Commits que passam = código validado
- **Falha**: Commit rejeitado, erro exibido no terminal

**Configuração**:
```bash
# Instalação
pip install pre-commit
pre-commit install

# Execução manual
pre-commit run --all-files
```

**Arquivo**: `.pre-commit-config.yaml`

---

#### 3.3 Validação Automática de Pull Request

**Tipo**: Validação Automática  
**Localização**: Azure DevOps → Branch Policies  
**Script/Config**: Azure DevOps UI

**Funcionamento**:
Validações automáticas quando PR é criado:

1. **Work Item Vinculado**: Obrigatório
2. **Code Review**: Mínimo 2 aprovações
3. **Build Pipeline**: Deve passar
4. **Sanity Tests E2E**: Deve passar (novo)

**Bloqueios Automáticos**:
- ❌ Sem Work Item → PR REJEITADO
- ❌ Sem 2 reviews → PR BLOQUEADO
- ❌ Build falhou → PR BLOQUEADO
- ❌ Sanity Tests E2E falharam → PR BLOQUEADO (novo)

**Trigger**: Criação ou atualização de Pull Request

**Evidência**:
- **Onde**: Azure DevOps → Pull Request → Checks
- **Formato**: Lista de checks com status
- **Auditoria**: Histórico de PRs mostra validações

**Configuração**:
```
Azure DevOps → Repositories → Branch Policies
→ Require a minimum number of reviewers: 2
→ Check for linked work items: Required
→ Build validation: Enable
→ E2E Tests validation: Enable
```

---

#### 3.3.1 Sanity Tests E2E no Pull Request

**Tipo**: Testes E2E Automatizados  
**Localização**: Pipeline Azure DevOps → Stage `SanityTests`  
**Ferramenta**: Playwright

**Funcionamento**:
1. Pipeline executa Sanity Tests após build
2. Execução rápida (< 5 minutos)
3. Valida funcionalidades críticas básicas
4. **Gate Automático**: Valida 100% Pass Rate
5. Bloqueia PR se falhar

**Critério de Sucesso**: 
- ✅ 100% dos Sanity Tests devem passar
- ❌ Se falhar → PR bloqueado

**Evidência**:
- **Onde**: Azure DevOps → Pipeline Run → Aba "Tests" → Sanity Tests
- **Formato**: Relatório de testes com pass/fail
- **Screenshots/Vídeos**: Playwright Report
- **Auditoria**: Cada execução gera relatório completo

**Trigger**: Pull Request criado/atualizado

---

### FASE 3: Verificação Automatizada e Ingestão de Segurança

#### 3.4 Pipeline CI/CD Completo

**Tipo**: Pipeline Automatizado  
**Localização**: `pipelines/azure-pipelines.yml`  
**Orquestrador**: Azure DevOps Pipelines

**Trigger**:
- **Push** para branches: `develop`, `release/*`, `hotfix/*`
- **Pull Request** para: `develop`, `main`
- **Exceções**: Não executa para mudanças em `docs/*` ou `README.md`

**Evidência**:
- **Onde**: Azure DevOps → Pipelines → Runs
- **Formato**: Histórico completo de execuções com logs
- **Auditoria**: Cada execução gera evidência completa

**Arquivo**: `pipelines/azure-pipelines.yml`

---

#### 3.5 Stage 1: Build e Testes Unitários Automatizados

**Tipo**: Automação de Testes  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `BuildAndTest`  
**Ferramenta**: npm (Jest/NUnit)

**Funcionamento**:
1. Instala dependências (`npm ci`)
2. Executa testes unitários (`npm run test`)
3. Coleta cobertura de código
4. **Gate Automático**: Valida 100% Pass Rate
5. Publica resultados de cobertura

**Critério de Sucesso**: 
- ✅ 100% dos testes devem passar
- ❌ Se falhar → Pipeline bloqueado

**Evidência**:
- **Onde**: Azure DevOps → Pipeline Run → Aba "Tests"
- **Formato**: Relatório de testes com pass/fail
- **Cobertura**: Azure DevOps → Pipeline Run → Aba "Code Coverage"
- **Auditoria**: Cada execução gera relatório completo

---

#### 3.6 Stage 2: SAST Automatizado (SonarCloud)

**Tipo**: Análise Estática Automatizada  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `SAST`  
**Ferramenta**: SonarCloud

**Funcionamento**:
1. Prepara análise SonarCloud
2. Executa build da aplicação
3. Executa testes para análise
4. Analisa código com SonarCloud
5. Publica resultados
6. **Gate Automático**: Valida Quality Gate A
7. Aguarda conclusão (polling)

**Critério de Sucesso**:
- ✅ Quality Gate = A
- ❌ Quality Gate < A → Pipeline bloqueado

**Evidência**:
- **Onde**: 
  - SonarCloud Dashboard: https://sonarcloud.io/project/overview?id=ionic-health_ncommand-lite
  - Azure DevOps → Pipeline → Stage SAST → Logs
- **Formato**: Dashboard SonarCloud com métricas
- **Auditoria**: Histórico completo de análises no SonarCloud

---

#### 3.7 Stage 3: SCA Automatizado (Trivy)

**Tipo**: Análise de Dependências Automatizada  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `SCA`  
**Ferramenta**: Trivy (Docker container)

**Funcionamento**:
1. Executa Trivy scan via Docker
2. Formato: JSON
3. Output: `trivy-scan.json`
4. Publica artefato do relatório
5. Inicia ingestão automática no DefectDojo (script)

**Evidência**:
- **Onde**: 
  - Azure DevOps → Pipeline → Artifacts → `trivy-scan-results`
  - DefectDojo → Findings → Tipo "Trivy Scan"
- **Formato**: JSON + Findings no DefectDojo
- **Auditoria**: Artefato persistido + Findings deduplicados

**Script de Ingestão**: `pipelines/scripts/defectdojo-ingest.sh`

---

#### 3.8 Ingestão Automática no DefectDojo (SAST/SCA/DAST)

**Tipo**: Script de Integração  
**Localização**: `pipelines/scripts/defectdojo-ingest.sh`  
**Linguagem**: Bash

**Funcionamento**:
1. Recebe relatório (JSON/XML) como parâmetro
2. Identifica tipo de scan (SAST/SCA/DAST)
3. Busca ou cria Product no DefectDojo
4. Busca ou cria Engagement
5. Envia relatório via API do DefectDojo
6. DefectDojo processa:
   - Deduplicação automática
   - Classificação de severidade
   - Criação/atualização de findings
   - Auto-close de findings mitigados

**Parâmetros**:
- `--type`: sast|sca|dast
- `--file`: Caminho do relatório
- `--url`: URL do DefectDojo
- `--api-key`: API Key
- `--commit`: SHA do commit
- `--branch`: Nome da branch

**Trigger**: Chamado automaticamente pelo pipeline após cada scan

**Evidência**:
- **Onde**: DefectDojo → Engagements → Findings
- **Formato**: Findings com metadados (commit, branch, scan type)
- **Auditoria**: Histórico completo no DefectDojo com deduplicação

**Uso no Pipeline**:
```yaml
- bash pipelines/scripts/defectdojo-ingest.sh \
    --type sca \
    --file trivy-scan.json \
    --url $(defectdojo.url) \
    --api-key $(defectdojo.apiKey) \
    --commit $(Build.SourceVersion) \
    --branch $(Build.SourceBranchName)
```

---

#### 3.9 Deduplicação Automática no DefectDojo

**Tipo**: Funcionalidade Automática do DefectDojo  
**Localização**: DefectDojo (sistema)  
**Ferramenta**: DefectDojo

**Funcionamento**:
- DefectDojo identifica automaticamente findings duplicados
- Compara: título, localização, tipo de scan
- Marca como duplicate automaticamente
- Mantém apenas 1 finding ativo

**Trigger**: Automático quando novo scan é ingerido

**Evidência**:
- **Onde**: DefectDojo → Finding → Status = "Duplicate"
- **Formato**: Relacionamento entre findings no DefectDojo
- **Auditoria**: Histórico de deduplicação visível

---

#### 3.10 Auto-Close de Vulnerabilidades Mitigadas

**Tipo**: Funcionalidade Automática do DefectDojo  
**Localização**: DefectDojo (sistema)  
**Ferramenta**: DefectDojo

**Funcionamento**:
- DefectDojo detecta quando vulnerabilidade foi corrigida
- Compara scans antigos vs. novos
- Se não aparecer mais no scan → Status = "Mitigated"
- Fecha automaticamente finding antigo

**Trigger**: Automático durante ingestão quando `close_old_findings=true`

**Evidência**:
- **Onde**: DefectDojo → Finding → Status = "Mitigated"
- **Formato**: Status atualizado automaticamente
- **Auditoria**: Histórico mostra mudança de status

**Configuração**: Parâmetro `--close_old_findings=true` no script de ingestão

---

#### 3.11 Validação de Segurança e Bloqueio de Pipeline

**Tipo**: Gate Automático  
**Localização**: `pipelines/scripts/defectdojo-check.sh`  
**Linguagem**: Bash

**Funcionamento**:
1. Consulta API do DefectDojo
2. Busca findings ativos com severidade Critical/High
3. Filtra por branch atual
4. **Gate Automático**: 
   - ✅ 0 vulnerabilidades → Pipeline continua
   - ❌ 1+ vulnerabilidades → Pipeline FALHA

**Critério de Bloqueio**:
- Vulnerabilidades **Críticas** (Critical)
- Vulnerabilidades **Altas** (High)

**Trigger**: Executado automaticamente no Stage `SecurityValidation`

**Evidência**:
- **Onde**: Azure DevOps → Pipeline → Stage SecurityValidation → Logs
- **Formato**: Logs mostrando verificação e resultado
- **Auditoria**: Pipeline Run mostra falha/sucesso do gate

**Uso no Pipeline**:
```yaml
- bash pipelines/scripts/defectdojo-check.sh \
    --url $(defectdojo.url) \
    --api-key $(defectdojo.apiKey) \
    --branch $(Build.SourceBranchName) \
    --severity-critical \
    --severity-high
```

**Arquivo**: `pipelines/scripts/defectdojo-check.sh`

---

#### 3.12 Stage 5: Deploy Automatizado para Staging

**Tipo**: Deploy Automatizado  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `DeployStaging`  
**Ferramenta**: Azure DevOps Deploy Jobs

**Funcionamento**:
1. Executa apenas se:
   - Stages anteriores passaram
   - Branch = `develop`
2. Deploy para ambiente de staging
3. Preparação para testes E2E e DAST

**Trigger**: Automático após Stage SecurityValidation (se branch = develop)

**Evidência**:
- **Onde**: Azure DevOps → Pipeline → Stage DeployStaging → Logs
- **Formato**: Logs de deploy
- **Auditoria**: Histórico de deploys para staging

**Condição**: `condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/develop'))`

---

#### 3.12.1 Stage 6: Smoke Tests E2E Automatizados

**Tipo**: Testes E2E Automatizados  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `SmokeTests`  
**Ferramenta**: Playwright

**Funcionamento**:
1. Executa após deploy em staging
2. Smoke Tests muito rápidos (< 2 minutos)
3. Valida sistema básico operacional
4. **Gate Automático**: Valida 100% Pass Rate
5. Bloqueia pipeline se falhar

**Critério de Sucesso**: 
- ✅ 100% dos Smoke Tests devem passar
- ❌ Se falhar → Pipeline bloqueado

**Evidência**:
- **Onde**: Azure DevOps → Pipeline Run → Aba "Tests" → Smoke Tests
- **Formato**: Relatório Playwright
- **Auditoria**: Cada execução gera relatório completo

**Trigger**: Automático após deploy em staging

---

#### 3.12.2 Stage 7: Sanity Tests E2E Automatizados (Staging)

**Tipo**: Testes E2E Automatizados  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `SanityTestsStaging`  
**Ferramenta**: Playwright

**Funcionamento**:
1. Executa após Smoke Tests
2. Sanity Tests rápidos (< 5 minutos)
3. Valida funcionalidades críticas básicas
4. **Gate Automático**: Valida 100% Pass Rate
5. Bloqueia pipeline se falhar

**Critério de Sucesso**: 
- ✅ 100% dos Sanity Tests devem passar
- ❌ Se falhar → Pipeline bloqueado

**Evidência**:
- **Onde**: Azure DevOps → Pipeline Run → Aba "Tests" → Sanity Tests
- **Formato**: Relatório Playwright com screenshots/vídeos
- **Auditoria**: Cada execução gera relatório completo

**Trigger**: Automático após Smoke Tests

---

#### 3.12.3 Stage 8: E2E Tests Automatizados (Fluxos Críticos)

**Tipo**: Testes E2E Automatizados  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `E2ETests`  
**Ferramenta**: Playwright (80%), Selenium (20%)

**Funcionamento**:
1. Executa após Sanity Tests
2. E2E Tests de fluxos críticos (10-30 minutos)
3. Valida fluxos completos de usuário
4. **Gate Automático**: Valida 100% Pass Rate
5. Aviso (não bloqueia) se falhar, mas registra

**Critério de Sucesso**: 
- ✅ 100% dos E2E Tests devem passar
- ⚠️ Falhas geram notificação (não bloqueiam pipeline)

**Evidência**:
- **Onde**: Azure DevOps → Pipeline Run → Aba "Tests" → E2E Tests
- **Formato**: Relatório Playwright detalhado
- **Screenshots/Vídeos**: Playwright Trace Viewer
- **Auditoria**: Cada execução gera evidências completas

**Trigger**: Automático após Sanity Tests

**Integração com Azure Test Plans**:
- Resultados vinculados automaticamente a Test Cases
- Screenshots/vídeos anexados
- Relatórios HTML salvos como artefatos

---

#### 3.13 Stage 9: DAST Automatizado (OWASP ZAP)

**Tipo**: Teste de Segurança Dinâmico Automatizado  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `DAST`  
**Ferramenta**: OWASP ZAP (Docker container)

**Funcionamento**:
1. Executa OWASP ZAP baseline scan via Docker
2. Alvo: URL de staging (`$(STAGING_URL)`)
3. Output: `zap-report.json`
4. Publica artefato do relatório
5. Inicia ingestão automática no DefectDojo

**Evidência**:
- **Onde**: 
  - Azure DevOps → Pipeline → Artifacts → `zap-dast-results`
  - DefectDojo → Findings → Tipo "ZAP Scan"
- **Formato**: JSON + Findings no DefectDojo
- **Auditoria**: Artefato + Findings deduplicados

**Trigger**: Automático após deploy para staging

**Uso no Pipeline**:
```yaml
docker run --rm \
  -v $(System.DefaultWorkingDirectory):/zap/wrk/:rw \
  owasp/zap2docker-stable zap-baseline.py \
  -t $(STAGING_URL) \
  -J zap-report.json
```

---

#### 3.13.1 Stage 10: Regression Tests E2E (Nightly/Pre-Release)

**Tipo**: Testes E2E Automatizados  
**Localização**: `pipelines/azure-pipelines.yml` → Stage `RegressionTests`  
**Ferramenta**: Playwright/Selenium

**Funcionamento**:
1. Executa suíte completa de testes E2E (30-60 minutos)
2. Validação de regressão completa
3. **Gate Automático**: Valida 100% Pass Rate para release
4. Bloqueia release se falhar

**Critério de Sucesso**: 
- ✅ 100% dos Regression Tests devem passar
- ❌ Se falhar → Release bloqueado

**Frequência**:
- **Pre-Release**: Antes de cada release (obrigatório)
- **Nightly**: Pipeline agendado diariamente (monitoramento)

**Evidência**:
- **Onde**: Azure DevOps → Pipeline Run → Aba "Tests" → Regression Tests
- **Formato**: Relatório Playwright completo
- **Screenshots/Vídeos**: Playwright Trace Viewer
- **Auditoria**: Cada execução gera evidências completas

**Trigger**: 
- Manual (antes de release)
- Scheduled (nightly builds)

**Integração com Azure Test Plans**:
- Test Cases criados/atualizados automaticamente
- Resultados vinculados a Work Items
- Evidências anexadas aos Test Cases

---

### FASE 4: Validação e Liberação

#### 3.14 Geração Automática do Design History File (DHF)

**Tipo**: Script de Geração  
**Localização**: `pipelines/scripts/generate-dhf.sh`  
**Linguagem**: Bash

**Funcionamento**:
1. Gera Matriz de Rastreabilidade (Markdown)
2. Gera Certificado de Segurança:
   - Consulta DefectDojo via API
   - Conta vulnerabilidades ativas por severidade
   - Valida: 0 vulnerabilidades críticas/altas
   - Gera certificado Markdown
3. Gera DHF principal (Markdown)
4. Consolida todos os arquivos

**Parâmetros**:
- `--version`: Versão da release (ex: 1.0.0)
- `--defectdojo-url`: URL do DefectDojo
- `--defectdojo-api-key`: API Key
- `--output-dir`: Diretório de saída

**Arquivos Gerados**:
- `traceability-matrix.md`
- `security-certificate.md`
- `nCommand-Lite-DHF-v{VERSION}.md`

**Gate Automático**:
- ❌ Se certificado reprovado (vulns críticas/altas) → Script falha

**Trigger**: Execução manual antes do release

**Evidência**:
- **Onde**: Diretório de saída especificado
- **Formato**: Arquivos Markdown
- **Auditoria**: Arquivos gerados podem ser convertidos para PDF

**Uso**:
```bash
./pipelines/scripts/generate-dhf.sh \
  --version 1.0.0 \
  --defectdojo-url $DEFECTDOJO_URL \
  --defectdojo-api-key $DEFECTDOJO_API_KEY \
  --output-dir ./dhf/releases/v1.0.0
```

**Arquivo**: `pipelines/scripts/generate-dhf.sh`

---

#### 3.15 Geração Automática da Matriz de Rastreabilidade

**Tipo**: Componente do Script DHF  
**Localização**: Função dentro de `generate-dhf.sh`  
**Linguagem**: Bash

**Funcionamento**:
- Gera arquivo Markdown com estrutura de matriz
- Template pré-definido
- Campos para Requisito → Código → Testes

**Evidência**:
- **Onde**: Arquivo `traceability-matrix.md` no diretório de saída
- **Formato**: Markdown (pode ser convertido para PDF)
- **Auditoria**: Incluído no DHF

**Nota**: Atualmente gera template. Integração com Azure DevOps API pode preencher automaticamente.

---

#### 3.16 Geração Automática do Certificado de Segurança

**Tipo**: Componente do Script DHF  
**Localização**: Função dentro de `generate-dhf.sh`  
**Linguagem**: Bash

**Funcionamento**:
1. Consulta DefectDojo API
2. Busca Product "nCommand-Lite"
3. Conta findings ativos por severidade:
   - Critical
   - High
   - Medium
   - Low
4. Gera certificado:
   - ✅ **APROVADO**: Se Critical = 0 e High = 0
   - ❌ **REPROVADO**: Se Critical > 0 ou High > 0
5. Inclui resumo e status

**Gate Automático**:
- Script retorna erro se reprovado
- Bloqueia geração do DHF completo

**Evidência**:
- **Onde**: Arquivo `security-certificate.md` no diretório de saída
- **Formato**: Markdown com tabela de contagens
- **Auditoria**: Incluído no DHF, mostra status de segurança

---

### FASE 5: Monitoramento e Gestão de Vulnerabilidades

#### 3.17 Scan Diário Automatizado (Produção)

#### 3.17.1 Monitoramento E2E Contínuo (Produção)

**Tipo**: Testes E2E Automatizados  
**Localização**: Pipeline Agendado  
**Ferramenta**: Playwright

**Funcionamento**:
1. Pipeline agendado executa Smoke Tests em produção
2. Após cada deploy em produção
3. Validação básica de sistema operacional
4. Notificação automática se falhar

**Frequência**: Após cada deploy em produção

**Trigger**: Deploy em produção + Scheduled (diariamente)

**Evidência**:
- **Onde**: Azure DevOps → Pipeline Runs → Smoke Tests Production
- **Formato**: Relatório Playwright
- **Auditoria**: Histórico de validações pós-deploy

---

#### 3.18 Scan Diário Automatizado (Produção)

**Tipo**: Pipeline Agendado  
**Localização**: Azure DevOps → Pipeline com Scheduled Trigger  
**Ferramenta**: Trivy

**Funcionamento**:
1. Pipeline agendado executa diariamente
2. Executa Trivy scan nas imagens Docker de produção
3. Gera relatório
4. Ingestão automática no DefectDojo
5. Findings disponíveis para triagem

**Frequência**: Diária (configurável via cron)

**Trigger**: Scheduled (exemplo: `cron: '0 2 * * *'` = 02:00 UTC diariamente)

**Evidência**:
- **Onde**: 
  - Azure DevOps → Pipelines → Runs (filtro: scheduled)
  - DefectDojo → Findings → Source = "Daily Scan"
- **Formato**: Findings no DefectDojo com data de criação
- **Auditoria**: Timeline de scans diários visível

**Configuração**:
```yaml
schedules:
  - cron: '0 2 * * *'  # 02:00 UTC diariamente
    branches:
      include:
        - main
    displayName: Daily Security Scan
```

---

#### 3.19 Monitoramento SIEM Automatizado (Azure Sentinel)

**Tipo**: Monitoramento Contínuo  
**Localização**: Azure Sentinel (Azure Cloud)  
**Ferramenta**: Azure Sentinel

**Funcionamento**:
- Monitoramento contínuo em tempo real
- Detecção automática de:
  - Tentativas de acesso não autorizado
  - Erros críticos de aplicação
  - Degradação de performance
  - Falhas de segurança
- Geração automática de alertas
- Criação automática de incidentes

**Trigger**: Contínuo (24/7)

**Evidência**:
- **Onde**: Azure Sentinel → Incidents / Alerts
- **Formato**: Incidentes com análise e evidências
- **Auditoria**: Histórico completo de incidentes

---

#### 3.20 Push to Azure DevOps (Criação Automática de Bug)

**Tipo**: Integração Automática  
**Localização**: DefectDojo → Azure DevOps Integration  
**Ferramenta**: DefectDojo "Push to Jira/ADO" feature

**Funcionamento**:
1. AppSec/QA identifica True Positive no DefectDojo
2. Clica em "Push to Azure DevOps" no finding
3. DefectDojo cria automaticamente Bug no Azure DevOps
4. Bug vinculado ao Finding do DefectDojo
5. Link bidirecional criado

**Trigger**: Ação manual no DefectDojo (quando True Positive identificado)

**Evidência**:
- **Onde**: 
  - Azure DevOps → Boards → Bug (tipo Work Item)
  - DefectDojo → Finding → Links → Azure DevOps Bug
- **Formato**: Work Item com links e metadados
- **Auditoria**: Rastreabilidade completa Finding → Bug → Correção

**Configuração**: DefectDojo → System Settings → Tool Configurations → Azure DevOps

---

#### 3.21 Reavaliação Trimestral de Riscos (Automatizada)

**Tipo**: Processo Semi-Automatizado  
**Localização**: Processo documentado + Work Items  
**Automação**: Lembretes e relatórios automáticos

**Funcionamento**:
1. Lembrete automático trimestral (calendar/reminder)
2. QA Leader executa reavaliação
3. Work Items atualizados manualmente
4. Relatório gerado e salvo no SharePoint

**Frequência**: Trimestral

**Evidência**:
- **Onde**: 
  - SharePoint → `/Risk Management/Reassessment/`
  - Azure DevOps → Work Items → Updated Date
- **Formato**: Relatório + Work Items atualizados
- **Auditoria**: Timeline de atualizações visível

---

## 4. Scripts e Ferramentas de Automação

### 4.1 Scripts Shell

| Script | Localização | Função | Linguagem |
|--------|-------------|--------|-----------|
| `defectdojo-ingest.sh` | `pipelines/scripts/` | Ingestão de relatórios no DefectDojo | Bash |
| `defectdojo-check.sh` | `pipelines/scripts/` | Verificação de vulnerabilidades (gate) | Bash |
| `generate-dhf.sh` | `pipelines/scripts/` | Geração automática do DHF | Bash |

### 4.2 Scripts Python

| Script | Localização | Função | Linguagem |
|--------|-------------|--------|-----------|
| `sync-ado.py` | `spec-kit/tools/` | Sincronização com Azure DevOps | Python |
| `traceability.py` | `spec-kit/tools/` | Geração de rastreabilidade | Python |

### 4.3 Configurações de Automação

| Config | Localização | Função |
|--------|-------------|--------|
| `.pre-commit-config.yaml` | Raiz | Pre-commit hooks |
| `azure-pipelines.yml` | `pipelines/` | Pipeline CI/CD principal |
| Branch Policies | Azure DevOps UI | Validações de PR |
| `playwright.config.ts` | `tests/e2e/playwright/` | Configuração Playwright |
| `package.json` (scripts) | Raiz | Scripts npm para testes E2E |

### 4.4 Scripts de Testes E2E

| Script | Localização | Função | Linguagem |
|--------|-------------|--------|-----------|
| `test:sanity` | `package.json` | Executar Sanity Tests | npm script |
| `test:smoke` | `package.json` | Executar Smoke Tests | npm script |
| `test:e2e` | `package.json` | Executar E2E Tests completos | npm script |
| `test:e2e:sync-ado` | `package.json` | Sincronizar com Azure Test Plans | npm script |

---

## 5. Integrações Automatizadas

### 5.1 Azure DevOps ↔ DefectDojo

**Direção**: DefectDojo → Azure DevOps  
**Função**: Criação automática de Bugs  
**Trigger**: Ação manual "Push to Azure DevOps"  
**Evidência**: Bug criado no ADO com link para Finding

### 5.2 Pipeline → DefectDojo

**Direção**: Azure Pipeline → DefectDojo  
**Função**: Ingestão automática de scans  
**Trigger**: Após cada scan (SAST/SCA/DAST)  
**Evidência**: Findings criados/atualizados no DefectDojo

### 5.3 DefectDojo → Pipeline

**Direção**: DefectDojo → Azure Pipeline  
**Função**: Bloqueio de pipeline por vulnerabilidades  
**Trigger**: Gate de segurança no pipeline  
**Evidência**: Pipeline falha se houver vulns críticas/altas

### 5.4 SonarCloud ↔ Pipeline

**Direção**: Pipeline → SonarCloud  
**Função**: Análise SAST e Quality Gate  
**Trigger**: Stage SAST do pipeline  
**Evidência**: Dashboard SonarCloud + Status no pipeline

---

## 6. Gates Automáticos

### 6.1 Gates de Pull Request

| Gate | Localização | Critério | Ação se Falhar |
|------|-------------|----------|----------------|
| Work Item Vinculado | Azure DevOps Branch Policies | Work Item obrigatório | PR bloqueado |
| Code Review | Azure DevOps Branch Policies | Mínimo 2 aprovações | PR bloqueado |
| Build Pipeline | Azure DevOps Branch Policies | Pipeline deve passar | PR bloqueado |
| Sanity Tests E2E | Stage SanityTests | 100% Pass Rate | PR bloqueado |

### 6.2 Gates de Pipeline

| Gate | Localização | Critério | Ação se Falhar |
|------|-------------|----------|----------------|
| Testes Unitários | Stage BuildAndTest | 100% Pass Rate | Pipeline falha |
| Quality Gate SAST | Stage SAST | Quality Gate A | Pipeline falha |
| Vulnerabilidades | Stage SecurityValidation | 0 Critical/High | Pipeline falha |
| Certificado Segurança | Script generate-dhf.sh | 0 Critical/High | Script falha |

---

## 7. Triggers e Frequências

| Processo | Trigger | Frequência |
|----------|---------|------------|
| Pre-commit Hooks | `git commit` | A cada commit local |
| PR Validations | Criação/update de PR | A cada PR |
| Sanity Tests E2E (PR) | Pull Request | A cada PR |
| Pipeline CI/CD | Push para develop/release | A cada push |
| Pipeline CI/CD | Pull Request | A cada PR |
| Smoke Tests E2E | Após deploy staging | A cada deploy staging |
| Sanity Tests E2E (Staging) | Após deploy staging | A cada deploy staging |
| E2E Tests (Críticos) | Após deploy staging | A cada deploy staging |
| Regression Tests E2E | Pre-Release + Nightly | Antes de release / Diário |
| Smoke Tests E2E (Prod) | Após deploy produção | A cada deploy produção |
| Scan Diário | Scheduled (cron) | Diariamente |
| Monitoramento SIEM | Contínuo | 24/7 |
| Reavaliação Riscos | Calendar reminder | Trimestral |

---

## 8. Evidências Geradas por Automação

### 8.1 Evidências no Azure DevOps

- ✅ Histórico completo de Pipeline Runs
- ✅ Logs detalhados de cada stage
- ✅ Relatórios de testes (Unit, Integration, E2E)
- ✅ **Relatórios E2E (Playwright)**: Screenshots, vídeos, trace viewer
- ✅ **Resultados E2E vinculados a Test Cases**: Azure Test Plans
- ✅ Cobertura de código
- ✅ Status de Pull Requests
- ✅ Work Items com histórico

### 8.2 Evidências no DefectDojo

- ✅ Findings com metadados (commit, branch, scan type)
- ✅ Histórico de deduplicação
- ✅ Status de vulnerabilidades (mitigated, active, false positive)
- ✅ Engagements por branch/release
- ✅ Relatórios exportáveis

### 8.3 Evidências no SonarCloud

- ✅ Dashboard com métricas
- ✅ Histórico de análises
- ✅ Quality Gate status
- ✅ Tendências de qualidade

### 8.4 Evidências Geradas (Artefatos)

- ✅ Relatórios Trivy (JSON)
- ✅ Relatórios OWASP ZAP (JSON)
- ✅ **Relatórios Playwright (HTML)**: Relatórios E2E interativos
- ✅ **Vídeos E2E**: Gravações de execução dos testes
- ✅ **Screenshots E2E**: Capturas de tela de falhas
- ✅ **Playwright Trace**: Arquivos de trace para debug
- ✅ DHF (Markdown)
- ✅ Matriz de Rastreabilidade (Markdown)
- ✅ Certificado de Segurança (Markdown)

---

## 9. Monitoramento de Automações

### 9.1 Health Checks

| Automação | Como Monitorar | Responsável |
|-----------|----------------|-------------|
| Pipeline CI/CD | Azure DevOps → Pipelines → Status | DevOps Lead |
| Scan Diário | Azure DevOps → Scheduled Runs | AppSec |
| DefectDojo | DefectDojo Dashboard | AppSec |
| SonarCloud | SonarCloud Dashboard | DevOps Lead |
| Sentinel | Azure Sentinel → Incidents | AppSec |

### 9.2 Alertas de Falha

- **Pipeline**: Notificação via Azure DevOps
- **Scan Diário**: Falha gera alerta
- **DefectDojo**: Notificações configuráveis
- **Sentinel**: Alertas automáticos de incidentes

---

## 10. Documentação de Scripts

### 10.1 Como Usar os Scripts

#### defectdojo-ingest.sh

```bash
./pipelines/scripts/defectdojo-ingest.sh \
  --type sca \
  --file trivy-scan.json \
  --url https://defectdojo.example.com \
  --api-key $API_KEY \
  --commit abc123 \
  --branch develop
```

#### defectdojo-check.sh

```bash
./pipelines/scripts/defectdojo-check.sh \
  --url https://defectdojo.example.com \
  --api-key $API_KEY \
  --branch develop \
  --severity-critical \
  --severity-high
```

#### generate-dhf.sh

```bash
./pipelines/scripts/generate-dhf.sh \
  --version 1.0.0 \
  --defectdojo-url https://defectdojo.example.com \
  --defectdojo-api-key $API_KEY \
  --output-dir ./dhf/releases/v1.0.0
```

---

## 11. Melhorias Futuras

### 11.1 Automações Planejadas

- [ ] Geração automática da Matriz de Rastreabilidade (completar com dados do ADO)
- [ ] Integração automática Spec-Kit → Azure DevOps
- [ ] Upload automático do DHF para SharePoint
- [ ] Notificações automáticas de SLA de vulnerabilidades
- [ ] Dashboard automatizado de métricas

### 11.2 Automações em Estudo

- [ ] IA para análise de riscos
- [ ] Predição de vulnerabilidades
- [ ] Auto-remediation de vulnerabilidades conhecidas

---

## 12. Referências

- **Pipeline Principal**: `pipelines/azure-pipelines.yml`
- **Scripts**: `pipelines/scripts/`
- **Pre-commit**: `.pre-commit-config.yaml`
- **SOP-001**: SDLC (validações e gates)
- **SOP-003**: Gestão de Vulnerabilidades (automações DefectDojo)
- **AUDIT-EVIDENCES.md**: Onde estão as evidências

---

**Última Atualização**: 1/12/2025  
**Responsável**: DevOps Lead / QA Leader  
**Próxima Revisão**: Trimestral


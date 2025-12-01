# ESPECIFICAÇÃO DE PROCESSO INTEGRADO: CICLO DE VIDA, SEGURANÇA E INFRAESTRUTURA

**Projeto**: nCommand Lite (SaMD - Software as a Medical Device)  
**Classificação**: IEC 62304 Class B / Risco Moderado  
**Status**: Em vigor  
**Responsável pelo Processo**: QA Leader

## 1. Objetivo e Escopo

Este documento define a arquitetura operacional para o desenvolvimento, manutenção e infraestrutura do nCommand Lite. Ele estabelece o regime de "Compliance as Code", onde as exigências regulatórias são impostas por barreiras técnicas automatizadas (Gates) dentro da esteira de produção.

O escopo abrange desde a concepção clínica e design (UX) até a monitoria pós-mercado, incluindo a gestão da infraestrutura (IaC) e a Gestão Centralizada de Vulnerabilidades.

## 2. Referências Normativas

- **ISO 13485:2016**: Sistema de Gestão da Qualidade
- **IEC 62304:2006+A1:2015**: Ciclo de Vida de Software Médico
- **IEC 62366-1:2015**: Engenharia de Usabilidade
- **ISO 14971:2019**: Gestão de Riscos
- **ISO/IEC 27001 & 27701**: Segurança da Informação e Privacidade
- **RDC 657/2022 (ANVISA) & FDA 21 CFR Part 820**: Regulamentações de mercado

## 3. Arquitetura de Ferramentas e Verdade

A integridade baseia-se na segregação de funções e integração via API:

- **Azure DevOps (ADO)**: A Fonte da Verdade de Execução. Orquestra requisitos, código e testes.
- **OWASP DefectDojo**: A Fonte da Verdade de Segurança. Centraliza, deduplica e gerencia o ciclo de vida de todas as vulnerabilidades (SAST/SCA/DAST).
- **SharePoint Online**: O Repositório Legal (DHF). Armazena registros imutáveis (PDFs assinados).
- **Azure Cloud (IaC)**: A Infraestrutura Imutável. Gerenciada via Terraform.

## 4. Fluxo Detalhado do Processo (End-to-End)

### FASE 1: Planejamento, Risco e Infraestrutura (Inputs)

**Objetivo**: Garantir que funcionalidades são seguras, necessárias e usáveis.

#### Gestão de Demanda e Usabilidade

- Features nascem no Azure Boards
- **UX**: O PO define Perfil de Usuário e Tarefas Principais (IEC 62366) no card

#### Análise de Risco (Safety, Security & Usability)

- **Segurança**: Arquiteto consulta o histórico do DefectDojo para evitar reintrodução de falhas antigas
- **Usabilidade**: Análise de erro de uso (uFMEA)
- **Registro**: Riscos viram Work Items (Risk) vinculados ao Requisito (Mitigates)

#### Gate de Aprovação

O QA Leader aprova o início apenas com riscos mitigados.

### FASE 2: Desenvolvimento e Codificação (Implementation)

**Objetivo**: Produção controlada.

#### Versionamento (Azure Repos - Gitflow)

- Branches `feat/ID-Item` no Azure Repos

#### Desenvolvimento & UX Formativo

- Dev coda com Pre-commit hooks (Segurança)
- UX realiza testes formativos (protótipos) e registra ajustes no Board

#### Infraestrutura (IaC)

- Código Terraform
- **Proibido**: Alteração manual no Portal Azure

#### Pull Request (O Grande Filtro)

**Bloqueio automático**:
- Sem Work Item vinculado? → REJEITADO
- Sem 2 reviews? → REJEITADO
- Build falhou? → REJEITADO

### FASE 3: Verificação Automatizada e Ingestão de Segurança

**Objetivo**: Validação técnica e centralização de achados.

O Pipeline de CI executa e envia os dados para o DefectDojo:

#### Execução de Scans

- **Unit Tests**: Jest/NUnit (Critério: 100% Pass)
- **SAST**: SonarCloud (Critério: Quality Gate A)
- **SCA**: Trivy (Varredura de libs e OS)

#### Ingestão Automática (DefectDojo Integration)

1. Script do Pipeline envia os relatórios (JSON/XML) para a API do DefectDojo
2. **Deduplicação**: O DefectDojo identifica se a falha é nova ou recorrente
3. **Auto-Close**: Se o Dev corrigiu o código, o DefectDojo fecha automaticamente a vulnerabilidade antiga ("Mitigated")
4. **Bloqueio de Pipeline**: Se o DefectDojo registrar novas vulnerabilidades Críticas/Altas → **FALHA O BUILD**

### FASE 4: Validação e Liberação (Release)

**Objetivo**: Congelamento e DHF.

#### Deploy Staging & DAST

- OWASP ZAP ataca o ambiente
- Relatório enviado automaticamente para o DefectDojo

#### Testes Manuais e Somativos

- QA executa Funcional e Usabilidade Somativa (IEC 62366) no Azure Test Plans

#### Geração do DHF (Automated)

- Script gera a Matriz de Rastreabilidade
- Certificado de Segurança (Resumo do DefectDojo: "0 Vulnerabilidades Abertas")

#### Gate de Liberação

- QA Leader aprova digitalmente no ADO
- **Transferência**: Artefatos salvos no SharePoint
- Tag `v1.0.0` criada

### FASE 5: Monitoramento e Gestão de Vulnerabilidades (Post-Market)

**Objetivo**: Tratativa contínua de riscos.

#### Vigilância (SIEM)

- Sentinel monitora incidentes em tempo real

#### Gestão de Vulnerabilidades (O Processo DefectDojo)

1. **Scan Diário**: Trivy roda diariamente nas imagens de produção e envia para o DefectDojo
2. **Triagem**: AppSec/QA analisa novos itens no DefectDojo
3. **False Positive**: Marca no sistema (não impacta métrica)
4. **True Positive**: Clica em "Push to Azure DevOps" → Cria Bug automaticamente para o time

#### SLA de Correção

- **Crítico**: 24h (Hotfix)
- **Alto**: 7 dias

#### Controle de Mudança & LTF

- Alterações em produção exigem Change Request
- QA Leader avalia necessidade de submissão ou Letter to File (LTF)

## 5. Matriz de Responsabilidades (RACI)

| Atividade | Dev Team | AppSec/DevOps | QA Leader | PO/UX |
|-----------|----------|---------------|-----------|-------|
| Definir Requisitos & Usabilidade | C | C | I | **R/A** |
| Análise de Risco (Safety/Usage) | C | C | **A** | **R** |
| Triagem de Vulnerabilidades (Dojo) | I | **R** | **A** | I |
| Correção de Vulnerabilidades | **R** | C | I | I |
| Decisão Regulatória (LTF) | I | I | **R/A** | I |
| Aprovar Release (Gate Final) | I | I | **A** | C |

**Legenda**: R=Responsável, A=Aprovador, C=Consultado, I=Informado

## 6. Lista Mestra de Procedimentos (SOPs)

- **SOP-001**: Ciclo de Vida de Desenvolvimento (SDLC): Regras de Git, Branching e Pipelines
- **SOP-002**: Gestão de Riscos (ISO 14971): Metodologia de cálculo e mitigação
- **SOP-003**: Gestão de Vulnerabilidades e Segurança: DefectDojo como Risk Register, SLAs e False Positives
- **SOP-004**: Verificação e Validação (V&V): Estratégia de testes funcionais e Usabilidade
- **SOP-005**: Controle de Mudança e Configuração: Versionamento, LTF e IaC

## 7. Aprovação

Este processo entra em vigor na data de sua publicação e é mandatório para todos os colaboradores envolvidos no projeto nCommand Lite.


# Estrutura do Repositório de Documentos - nCommand Lite

**Versão**: 1.0.0  
**Data**: 2024

## Visão Geral

Este documento descreve a estrutura completa do repositório de documentos do projeto nCommand Lite, organizando todos os artefatos do ciclo de vida conforme normas regulatórias.

## Princípios de Organização

1. **Hierarquia Clara**: Estrutura lógica por tipo e fase
2. **Rastreabilidade**: Fácil localização de documentos relacionados
3. **Versionamento**: Controle de versões explícito
4. **Acesso Controlado**: Permissões adequadas por tipo de documento
5. **Imutabilidade**: Documentos regulatórios não podem ser alterados após aprovação

## Estrutura Principal

```
Ionic.Health-PQ44/
│
├── README.md                              # Documentação principal do projeto
├── SECURITY.md                            # Política de segurança
│
├── docs/                                  # Documentação do projeto
│   ├── PROCESS.md                         # Processo integrado completo
│   ├── GETTING-STARTED.md                 # Guia de início rápido
│   ├── PROJECT-STRUCTURE.md               # Estrutura do projeto
│   ├── PRESENTATION-PLAN.md               # Plano de apresentação
│   ├── REPOSITORY-STRUCTURE.md            # Este documento
│   │
│   ├── regulatory/                        # Documentação regulatória
│   │   ├── README.md                      # Visão geral
│   │   ├── ACCESS-GUIDE.md                # Guia de acesso aos documentos
│   │   ├── COMPLIANCE-MATRIX.md           # Matriz de conformidade
│   │   ├── SUMMARY.md                     # Resumo executivo
│   │   │
│   │   ├── ISO-13485/                     # ISO 13485:2016
│   │   │   └── README.md
│   │   ├── IEC-62304/                     # IEC 62304:2006+A1:2015
│   │   │   └── README.md
│   │   ├── IEC-62366-1/                   # IEC 62366-1:2015
│   │   │   └── README.md
│   │   ├── ISO-14971/                     # ISO 14971:2019
│   │   │   └── README.md
│   │   ├── ISO-27001-27701/               # ISO/IEC 27001 & 27701
│   │   │   └── README.md
│   │   ├── MARKET-REGULATIONS/            # RDC 657/2022 & FDA 21 CFR Part 820
│   │   │   └── README.md
│   │   └── CE-MARK/                       # CE Mark (MDR 2017/745)
│   │       └── README.md
│   │
│   ├── sop/                               # Standard Operating Procedures
│   │   ├── SOP-001-SDLC.md                # Ciclo de vida de desenvolvimento
│   │   ├── SOP-002-Risk-Management.md     # Gestão de riscos
│   │   ├── SOP-003-Vulnerability-Management.md  # Gestão de vulnerabilidades
│   │   ├── SOP-004-Verification-Validation.md   # Verificação e validação
│   │   └── SOP-005-Change-Control.md      # Controle de mudança
│   │
│   ├── dhf/                               # Design History File
│   │   └── TEMPLATE.md                    # Template do DHF
│   │
│   └── flows/                             # Diagramas de fluxo
│       └── FLOWS.md                       # Diagramas Mermaid
│
├── spec-kit/                              # Kit de Gestão de Especificações
│   ├── README.md                          # Documentação do Spec-Kit
│   ├── USAGE.md                           # Guia de uso
│   ├── CHANGELOG.md                       # Histórico de versões
│   │
│   ├── templates/                         # Templates de especificação
│   │   ├── feature-spec.md                # Template de feature
│   │   ├── api-spec.md                    # Template de API
│   │   ├── infrastructure-spec.md         # Template de infraestrutura
│   │   └── usability-spec.md              # Template de usabilidade
│   │
│   ├── tools/                             # Ferramentas de automação
│   │   ├── generate-spec.sh               # Gerador de especificações
│   │   ├── sync-ado.py                    # Sincronização Azure DevOps
│   │   └── traceability.py                # Geração de rastreabilidade
│   │
│   ├── scripts/                           # Scripts auxiliares
│   │   └── validate-spec.sh               # Validador de especificações
│   │
│   └── specs/                             # Especificações geradas
│       ├── features/                      # Especificações de features
│       ├── api/                           # Especificações de API
│       ├── infrastructure/                # Especificações de infraestrutura
│       └── usability/                     # Especificações de usabilidade
│
├── demo-app/                              # Aplicação demonstrativa
│   ├── README.md                          # Documentação da demo
│   ├── README-DESIGN.md                   # Design system
│   │
│   ├── src/                               # Código fonte
│   ├── tests/                             # Testes automatizados
│   │
│   └── docs/                              # Documentação da demo
│       ├── LIFECYCLE-OVERVIEW.md          # Visão geral do ciclo
│       ├── DESIGN-SYSTEM.md               # Design system completo
│       ├── FLOWS.md                       # Diagramas de fluxo
│       ├── ASSETS.md                      # Arquitetura de ativos
│       │
│       ├── phase-1/                       # FASE 1: Planejamento
│       │   ├── README.md
│       │   └── DEMO-001-feature-spec.md
│       │
│       ├── phase-2/                       # FASE 2: Desenvolvimento
│       │   └── README.md
│       │
│       ├── phase-3/                       # FASE 3: Verificação
│       │   └── README.md
│       │
│       ├── phase-4/                       # FASE 4: Validação
│       │   └── README.md
│       │
│       └── phase-5/                       # FASE 5: Monitoramento
│           └── README.md
│
├── infrastructure/                        # Infrastructure as Code
│   └── azure/
│       ├── main.tf                        # Recursos principais
│       ├── variables.tf                   # Variáveis
│       └── README.md                      # Documentação IaC
│
├── pipelines/                             # Azure DevOps Pipelines
│   ├── azure-pipelines.yml                # Pipeline principal
│   │
│   └── scripts/                           # Scripts de automação
│       ├── defectdojo-ingest.sh           # Ingestão DefectDojo
│       ├── defectdojo-check.sh            # Verificação de vulnerabilidades
│       └── generate-dhf.sh                # Geração do DHF
│
└── security/                              # Gestão de segurança
    ├── defectdojo/                        # Scripts de integração
    └── scans/                             # Configurações de scanners
```

## Repositórios Externos

### SharePoint Online

**Função**: Repositório Legal (Documentos Imutáveis)

**Estrutura**:
```
/DHF/
├── nCommand-Lite/
│   ├── Version/
│   │   ├── v1.0.0/
│   │   │   ├── nCommand-Lite-DHF-v1.0.0.pdf
│   │   │   ├── traceability-matrix-v1.0.0.pdf
│   │   │   └── security-certificate-v1.0.0.pdf
│   │   └── v1.1.0/
│   │       └── ...
│   │
│   └── Demo-App/
│       └── Version/
│           └── v1.0.0/
│               └── ...
│
/Regulatory/
├── ISO/
│   ├── ISO-13485-2016/
│   ├── ISO-14971-2019/
│   └── ISO-IEC-27001-2022/
│
├── IEC/
│   ├── IEC-62304-2006-A1-2015/
│   └── IEC-62366-1-2015/
│
└── Market-Regulations/
    ├── RDC-657-2022-ANVISA/
    └── FDA-21-CFR-Part-820/
```

**Características**:
- PDFs assinados digitalmente
- Imutáveis após aprovação
- Controle de versão
- Acesso controlado por permissões

**Responsável**: QA Leader

---

### Azure DevOps

**Função**: Fonte da Verdade de Execução

**Estrutura**:
```
Project: nCommand-Lite
├── Boards/
│   ├── Work Items/
│   │   ├── Features/
│   │   ├── User Stories/
│   │   ├── Tasks/
│   │   ├── Bugs/
│   │   └── Risks/
│   │
│   └── Sprints/
│
├── Repos/
│   └── nCommand-Lite/
│       ├── main
│       ├── develop
│       └── feat/*
│
├── Pipelines/
│   ├── CI Pipeline
│   └── Release Pipeline
│
└── Test Plans/
    ├── Test Suites/
    └── Test Cases/
```

**Responsável**: DevOps / QA Team

---

### DefectDojo

**Função**: Fonte da Verdade de Segurança

**Estrutura**:
```
Products/
└── nCommand-Lite/
    ├── Engagements/
    │   ├── Development/
    │   ├── Release/
    │   └── Production/
    │
    └── Findings/
        ├── Active/
        ├── Mitigated/
        └── False Positive/
```

**Responsável**: AppSec Team

## Categorização de Documentos

### Por Tipo

| Tipo | Localização | Versionamento | Imutável? |
|------|-------------|---------------|-----------|
| **Processos** | `docs/sop/` | Git | Não |
| **Regulatório** | `docs/regulatory/` + SharePoint | Git + SharePoint | Sim (após aprovação) |
| **Especificações** | `spec-kit/specs/` | Git | Não |
| **DHF** | SharePoint | Versão no nome | Sim |
| **Código** | `src/`, `infrastructure/` | Git | Não |
| **Pipelines** | `pipelines/` | Git | Não |
| **Testes** | `tests/` | Git | Não |

### Por Fase do Ciclo de Vida

| Fase | Documentos Principais | Localização |
|------|----------------------|-------------|
| **FASE 1** | Especificações, Análise de Riscos | `spec-kit/specs/`, Azure DevOps |
| **FASE 2** | Código, Commits, PRs | `src/`, Azure DevOps |
| **FASE 3** | Relatórios de segurança, Pipeline | DefectDojo, Azure DevOps |
| **FASE 4** | DHF, Matriz, Certificado | SharePoint, `docs/dhf/` |
| **FASE 5** | Relatórios de monitoramento | Azure Sentinel, DefectDojo |

## Políticas de Acesso

### Níveis de Acesso

#### Público (Repositório Git)
- Documentação de processos
- Templates
- Código fonte
- Especificações (sem dados sensíveis)

#### Interno (Azure DevOps)
- Work Items
- Test Plans
- Pipelines
- Relatórios de build

#### Confidencial (SharePoint)
- DHF completos
- Documentos regulatórios completos
- Certificados assinados
- Artefatos de release

#### Segurança (DefectDojo)
- Vulnerabilidades
- Findings de segurança
- Relatórios de scan

## Versionamento

### Git (Documentação e Código)

**Estratégia**:
- Tags semânticas: `v1.0.0`, `v1.1.0`
- Branches: `main`, `develop`, `feat/*`
- Commits: `[WORKITEM-ID] Descrição`

**Histórico Completo**: Acessível via Git log

### SharePoint (DHF)

**Estratégia**:
- Versionamento no nome do arquivo
- Estrutura de pastas por versão
- PDFs imutáveis após assinatura

**Exemplo**: `/DHF/Version/v1.0.0/nCommand-Lite-DHF-v1.0.0.pdf`

### Azure DevOps (Work Items)

**Estratégia**:
- Histórico de mudanças automático
- Links entre artefatos
- Rastreabilidade bidirecional

## Busca e Navegação

### Como Encontrar Documentos

#### Por Requisito
1. Work Item no Azure DevOps
2. Links para especificação (Spec-Kit)
3. Links para código (Git commits)
4. Links para testes (Azure Test Plans)
5. Matriz de rastreabilidade (DHF)

#### Por Release
1. Tag Git: `v1.0.0`
2. SharePoint: `/DHF/Version/v1.0.0/`
3. Azure DevOps: Release notes
4. DefectDojo: Engagement da release

#### Por Norma Regulatória
1. `docs/regulatory/{NORMA}/README.md`
2. SharePoint: `/Regulatory/{NORMA}/`
3. Matriz de conformidade: `docs/regulatory/COMPLIANCE-MATRIX.md`

### Índices e Mapas

- **Processo Completo**: `docs/PROCESS.md`
- **Estrutura do Projeto**: `docs/PROJECT-STRUCTURE.md`
- **Matriz de Conformidade**: `docs/regulatory/COMPLIANCE-MATRIX.md`
- **Arquitetura de Ativos**: `demo-app/docs/ASSETS.md`
- **Fluxos**: `demo-app/docs/FLOWS.md`

## Backup e Retenção

### Estratégia de Backup

| Tipo | Backup | Retenção |
|------|--------|----------|
| **Git Repository** | Azure DevOps backup automático | Indefinido |
| **SharePoint** | Microsoft 365 backup | Indefinido |
| **Azure Cloud** | Backup automático Azure | Conforme política |
| **DefectDojo** | Backup do banco de dados | 7 anos |

### Retenção Regulatória

- **DHF**: Indefinido (requisito regulatório)
- **Logs de Segurança**: 7 anos
- **Relatórios de Testes**: 7 anos
- **Documentação Regulatória**: Indefinido

## Manutenção

### Responsabilidades

| Área | Responsável | Frequência |
|------|-------------|------------|
| Estrutura do Repositório | QA Leader | Anual |
| Documentação de Processo | QA Leader | Trimestral |
| Especificações | Dev Team | Por feature |
| DHF | QA Leader | Por release |
| Regulatório | QA Leader | Anual |

### Revisão e Atualização

- **Processos**: Revisão trimestral
- **SOPs**: Revisão anual ou quando necessário
- **Regulatório**: Revisão quando normas atualizadas
- **Estrutura**: Revisão anual

## Checklist de Organização

### Para Cada Release

- [ ] DHF gerado e assinado
- [ ] Matriz de rastreabilidade atualizada
- [ ] Certificado de segurança gerado
- [ ] Artefatos transferidos para SharePoint
- [ ] Tag Git criada
- [ ] Release notes atualizados

### Para Cada Feature

- [ ] Especificação gerada (Spec-Kit)
- [ ] Análise de riscos documentada
- [ ] Work Items vinculados
- [ ] Testes rastreados
- [ ] Código versionado

### Para Auditorias

- [ ] Documentação organizada
- [ ] Acesso aos repositórios configurado
- [ ] Índice de documentos preparado
- [ ] Evidências acessíveis

---

**Última Atualização**: 2024  
**Versão**: 1.0.0  
**Responsável**: QA Leader  
**Próxima Revisão**: 2025


# Índice Geral de Documentação - nCommand Lite

**Última Atualização**: 2024  
**Versão**: 1.0.0

## 🗺️ Mapa de Navegação

Este índice facilita a navegação em toda a documentação do projeto nCommand Lite.

## 📚 Documentação Principal

### Início Rápido

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[README.md](../README.md)** | Visão geral do projeto | Primeiro contato |
| **[GETTING-STARTED.md](GETTING-STARTED.md)** | Guia de início rápido | Configuração inicial |
| **[PROJECT-STRUCTURE.md](PROJECT-STRUCTURE.md)** | Estrutura completa | Entender organização |

### Processo e Procedimentos

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[PROCESS.md](PROCESS.md)** | Processo integrado completo | Entender o processo end-to-end |
| **[SOP-001-SDLC.md](sop/SOP-001-SDLC.md)** | Ciclo de vida de desenvolvimento | Regras de Git, branching, PRs |
| **[SOP-002-Risk-Management.md](sop/SOP-002-Risk-Management.md)** | Gestão de riscos | Análise de riscos (ISO 14971) |
| **[SOP-003-Vulnerability-Management.md](sop/SOP-003-Vulnerability-Management.md)** | Gestão de vulnerabilidades | Processo DefectDojo, SLAs |
| **[SOP-004-Verification-Validation.md](sop/SOP-004-Verification-Validation.md)** | Verificação e validação | Testes, usabilidade (IEC 62366) |
| **[SOP-005-Change-Control.md](sop/SOP-005-Change-Control.md)** | Controle de mudança | Versionamento, LTF, DHF |

### Regulatório

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[COMPLIANCE-MATRIX.md](regulatory/COMPLIANCE-MATRIX.md)** | Matriz de conformidade | Mapeamento de requisitos |
| **[ACCESS-GUIDE.md](regulatory/ACCESS-GUIDE.md)** | Guia de acesso aos documentos | Obter documentos normativos |
| **[SUMMARY.md](regulatory/SUMMARY.md)** | Resumo executivo regulatório | Visão geral das normas |

### Especificações

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[Spec-Kit README](../spec-kit/README.md)** | Kit de gestão de especificações | Criar novas especificações |
| **[Spec-Kit USAGE.md](../spec-kit/USAGE.md)** | Guia de uso do Spec-Kit | Usar ferramentas do Spec-Kit |

### Apresentação

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[PRESENTATION-PLAN.md](PRESENTATION-PLAN.md)** | Plano de apresentação | Preparar apresentação |
| **[REPOSITORY-STRUCTURE.md](REPOSITORY-STRUCTURE.md)** | Estrutura do repositório | Organizar documentos |
| **[SLIDE-TEMPLATE.md](presentation/SLIDE-TEMPLATE.md)** | Template de slides | Criar slides |

### Demonstração

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[Demo App README](../demo-app/README.md)** | Aplicação demonstrativa | Executar demo |
| **[LIFECYCLE-OVERVIEW.md](../demo-app/docs/LIFECYCLE-OVERVIEW.md)** | Visão geral do ciclo | Entender demo completa |
| **[ASSETS.md](../demo-app/docs/ASSETS.md)** | Arquitetura de ativos | Entender ferramentas |
| **[FLOWS.md](../demo-app/docs/FLOWS.md)** | Diagramas de fluxo | Visualizar processos |

## 🔍 Busca Rápida por Tópico

### Por Função

#### Desenvolvedor

1. **[GETTING-STARTED.md](GETTING-STARTED.md)** - Configuração
2. **[SOP-001-SDLC.md](sop/SOP-001-SDLC.md)** - Regras de desenvolvimento
3. **[Spec-Kit USAGE.md](../spec-kit/USAGE.md)** - Criar especificações

#### QA Leader

1. **[PROCESS.md](PROCESS.md)** - Processo completo
2. **[SOP-002-Risk-Management.md](sop/SOP-002-Risk-Management.md)** - Gestão de riscos
3. **[COMPLIANCE-MATRIX.md](regulatory/COMPLIANCE-MATRIX.md)** - Conformidade

#### AppSec/DevOps

1. **[SOP-003-Vulnerability-Management.md](sop/SOP-003-Vulnerability-Management.md)** - Segurança
2. **[ASSETS.md](../demo-app/docs/ASSETS.md)** - Arquitetura de ativos
3. **[Infrastructure README](../infrastructure/azure/README.md)** - IaC

#### Regulatory Affairs

1. **[ACCESS-GUIDE.md](regulatory/ACCESS-GUIDE.md)** - Acesso a documentos
2. **[COMPLIANCE-MATRIX.md](regulatory/COMPLIANCE-MATRIX.md)** - Conformidade
3. **[Regulatory READMEs](regulatory/)** - Normas específicas

### Por Fase do Ciclo

#### FASE 1: Planejamento

- **[SOP-002-Risk-Management.md](sop/SOP-002-Risk-Management.md)**
- **[Spec-Kit](../spec-kit/)**
- **[Regulatory - ISO 14971](regulatory/ISO-14971/)**
- **[Regulatory - IEC 62366-1](regulatory/IEC-62366-1/)**

#### FASE 2: Desenvolvimento

- **[SOP-001-SDLC.md](sop/SOP-001-SDLC.md)**
- **[Infrastructure README](../infrastructure/azure/README.md)**

#### FASE 3: Verificação

- **[SOP-003-Vulnerability-Management.md](sop/SOP-003-Vulnerability-Management.md)**
- **[Pipeline](../pipelines/azure-pipelines.yml)**
- **[Regulatory - ISO 27001](regulatory/ISO-27001-27701/)**

#### FASE 4: Validação

- **[SOP-004-Verification-Validation.md](sop/SOP-004-Verification-Validation.md)**
- **[SOP-005-Change-Control.md](sop/SOP-005-Change-Control.md)**
- **[DHF Template](dhf/TEMPLATE.md)**

#### FASE 5: Monitoramento

- **[SOP-003-Vulnerability-Management.md](sop/SOP-003-Vulnerability-Management.md)**
- **[ASSETS.md](../demo-app/docs/ASSETS.md)**

### Por Norma Regulatória

#### ISO 13485:2016

- **[ISO-13485 README](regulatory/ISO-13485/README.md)**
- **[COMPLIANCE-MATRIX.md](regulatory/COMPLIANCE-MATRIX.md)**

#### IEC 62304:2006+A1:2015

- **[IEC-62304 README](regulatory/IEC-62304/README.md)**
- **[SOP-001-SDLC.md](sop/SOP-001-SDLC.md)**
- **[PROCESS.md](PROCESS.md)**

#### IEC 62366-1:2015

- **[IEC-62366-1 README](regulatory/IEC-62366-1/README.md)**
- **[SOP-004-Verification-Validation.md](sop/SOP-004-Verification-Validation.md)**
- **[Usability Spec Template](../spec-kit/templates/usability-spec.md)**

#### ISO 14971:2019

- **[ISO-14971 README](regulatory/ISO-14971/README.md)**
- **[SOP-002-Risk-Management.md](sop/SOP-002-Risk-Management.md)**

#### ISO/IEC 27001 & 27701

- **[ISO-27001-27701 README](regulatory/ISO-27001-27701/README.md)**
- **[SOP-003-Vulnerability-Management.md](sop/SOP-003-Vulnerability-Management.md)**

#### Regulamentações de Mercado

- **[MARKET-REGULATIONS README](regulatory/MARKET-REGULATIONS/README.md)**
- RDC 657/2022 (ANVISA)
- FDA 21 CFR Part 820

#### CE Mark

- **[CE-MARK README](regulatory/CE-MARK/README.md)**
- MDR 2017/745

## 📊 Diagramas e Visualizações

| Documento | Tipo | Descrição |
|-----------|------|-----------|
| **[FLOWS.md](../demo-app/docs/FLOWS.md)** | Mermaid | Diagramas de fluxo completos |
| **[ASSETS.md](../demo-app/docs/ASSETS.md)** | Mermaid | Arquitetura de ativos |
| **[Demo App](../demo-app/)** | Interativo | Visualização web com diagramas |

## 🔗 Links Úteis

### Ferramentas Online

- **Azure DevOps**: [Link do Projeto]
- **DefectDojo**: [Link]
- **SharePoint**: [Link]
- **SonarCloud**: [Link do Projeto]

### Repositórios

- **Git Repository**: [Link]
- **Documentação Online**: [Link se houver]
- **Wiki Interna**: [Link se houver]

## 📝 Documentação por Prioridade

### Essencial (Leitura Obrigatória)

1. **[README.md](../README.md)** - Visão geral
2. **[PROCESS.md](PROCESS.md)** - Processo completo
3. **[GETTING-STARTED.md](GETTING-STARTED.md)** - Configuração

### Importante (Leitura Recomendada)

4. **[SOP-001 a SOP-005](sop/)** - Todos os SOPs
5. **[COMPLIANCE-MATRIX.md](regulatory/COMPLIANCE-MATRIX.md)** - Conformidade
6. **[REPOSITORY-STRUCTURE.md](REPOSITORY-STRUCTURE.md)** - Organização

### Referência (Consulta Quando Necessário)

7. **[Regulatory READMEs](regulatory/)** - Normas específicas
8. **[Spec-Kit](../spec-kit/)** - Templates e ferramentas
9. **[ASSETS.md](../demo-app/docs/ASSETS.md)** - Ativos e ferramentas

## 🗂️ Organização por Diretório

```
docs/
├── README.md                    # Este arquivo
├── PROCESS.md                   # Processo principal
├── GETTING-STARTED.md           # Guia inicial
├── PROJECT-STRUCTURE.md         # Estrutura do projeto
├── DOCUMENTATION-INDEX.md       # Índice geral (este arquivo)
│
├── regulatory/                  # Documentação regulatória
│   └── [normas e regulamentações]
│
├── sop/                         # Standard Operating Procedures
│   └── [SOP-001 a SOP-005]
│
├── dhf/                         # Design History File
│   └── TEMPLATE.md
│
├── presentation/                # Materiais de apresentação
│   ├── INDEX.md
│   └── SLIDE-TEMPLATE.md
│
└── flows/                       # Diagramas de fluxo
    └── FLOWS.md
```

## 🎯 Fluxo de Aprendizado Sugerido

### Para Novos Membros da Equipe

1. **Dia 1**: Ler README + GETTING-STARTED
2. **Dia 2**: Estudar PROCESS.md completo
3. **Dia 3**: Revisar SOPs relevantes para sua função
4. **Semana 1**: Praticar com Spec-Kit e ferramentas
5. **Semana 2**: Participar de apresentação completa

### Para Stakeholders

1. **Sessão 1**: Apresentação executiva (30 min)
2. **Sessão 2**: Demonstração do processo (60 min)
3. **Sessão 3**: Q&A e aprofundamento (30 min)

### Para Auditores

1. **Briefing**: PROCESS.md + COMPLIANCE-MATRIX
2. **Demonstração**: Aplicação demo + ferramentas
3. **Documentação**: Acesso a repositórios
4. **Evidências**: SharePoint + Azure DevOps + DefectDojo

## 🔄 Atualizações Recentes

| Data | Documento | Mudança |
|------|-----------|---------|
| 2024-01-XX | PRESENTATION-PLAN.md | Criado |
| 2024-01-XX | REPOSITORY-STRUCTURE.md | Criado |
| 2024-01-XX | DOCUMENTATION-INDEX.md | Criado |

---

**Mantido por**: QA Leader  
**Última Atualização**: 2024  
**Próxima Revisão**: Trimestral


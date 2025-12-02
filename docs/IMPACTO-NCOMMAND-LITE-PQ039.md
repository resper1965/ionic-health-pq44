# Análise: Impacto do nCommand Lite no PQ.039 (Project Control)

**Data**: Dezembro 2024  
**Documento Base**: PQ.039 - PROJECT CONTROL (Revision 5)  
**Análise**: Impacto e Integração do Modelo nCommand Lite

---

## 1. Resumo Executivo

O **PQ.039 (Project Control)** estabelece o procedimento de controle de projeto (design control) para garantir que todos os produtos desenvolvidos pela IONIC Health sejam seguros, eficazes e atendam requisitos regulatórios. Este documento analisa como o **nCommand Lite** impacta, automatiza e integra-se com este procedimento.

### Ponto Central

> **"Design control consists of a structured set of activities used to transform user requirements and clinical needs into a safe, effective, and compliant medical device."**

O nCommand Lite implementa este processo através de **"Compliance as Code"**, onde as exigências regulatórias são impostas por barreiras técnicas automatizadas (Gates) dentro da esteira de produção, enquanto mantém total rastreabilidade com os formulários e registros do PQ.039.

---

## 2. Escopo e Aplicabilidade

### 2.1. Aplicabilidade Direta

O PQ.039 **se aplica diretamente** ao nCommand Lite, pois:

- ✅ nCommand Lite é um **produto desenvolvido pela IONIC Health**
- ✅ É um **Software as a Medical Device (SaMD)**
- ✅ Requer controle de projeto completo (design control)
- ✅ Deve seguir todas as etapas descritas no PQ.039

### 2.2. Processos Complementares

Conforme mencionado no PQ.039 (linha 133-141), vários processos complementam o design control:

- **PQ.040 – RISK MANAGEMENT** → Integrado no nCommand Lite (SOP-002)
- **PQ.044 – SOFTWARE PRODUCT CONTROL** → Integrado no nCommand Lite (SOP-005)
- **PQ.061 – VALIDATION OF OPERATIONS AND PROJECT TRANSFER** → Integrado no nCommand Lite (SOP-004, FASE 4)
- **PQ.068 – SOFTWARE QA & COMPLIANCE PROCESS** → Integrado no nCommand Lite (SOP-003, SOP-004)

---

## 3. Mapeamento: Etapas PQ.039 ↔ nCommand Lite

### 3.1. Visão Geral do Mapeamento

| Etapa PQ.039 | Formulário | Equivalente nCommand Lite | Automação |
|--------------|------------|---------------------------|-----------|
| **NPJ** - Project Request | R039.001 | Azure Boards (Epic/Feature) | ✅ Criado via Board |
| **OPJ** - Project Charter | R039.002 | SharePoint (PDF assinado) | ⚠️ Manual (Assinatura) |
| **CPJ** - Project Plan | R039.003 | Azure Boards (Sprint Planning) + SharePoint | ⚠️ Manual (Estratégico) |
| **EPJ** - Input Data | R039.004 | Azure Boards (Work Items) + SRS | ✅ Rastreável via Work Items |
| **SPJ** - Output Data | R039.007 | Código-fonte + Testes + Documentação | ✅ Gerado automaticamente |
| **RPJ** - Project Review | R039.008 | Pull Request Reviews + Azure Test Plans | ✅ Automatizado (PR) |
| **TPJ** - Project Transfer | R039.005 | Deploy Staging + Validação | ✅ Automatizado (Pipeline) |
| **VPJ** - Project Validation | R039.006 | Testes E2E + Somativos | ⚠️ Parcial (E2E automático) |
| **LPJ** - Project Release | R039.009 | Gate de Liberação + Tag Git | ✅ Automatizado (Gate) |

**Legenda**: ✅ Totalmente Automatizado | ⚠️ Parcialmente Automatizado | ❌ Manual

---

## 4. Análise Detalhada por Etapa

### 4.1. NPJ - Project Request (R039.001)

**PQ.039**: *"It is the formal registration of the request for a new project for the company's engineering. It has a brief rationale and description of the need/opportunity to create a new project."*

**nCommand Lite**:
- **Onde**: Azure Boards (Epic ou Feature Work Item)
- **Conteúdo**: Descrição, justificativa, requisitos iniciais
- **Rastreabilidade**: Work Item ID → Vinculado ao formulário R039.001 no SharePoint
- **Automação**: 
  - Work Item criado no Azure Boards
  - Link para R039.001 (PDF assinado) no SharePoint
  - Campo customizado: "R039.001 Reference"

**Impacto**: O nCommand Lite automatiza a criação e rastreamento, mas o formulário formal (R039.001) ainda é mantido no SharePoint para aprovação oficial.

---

### 4.2. OPJ - Project Charter (R039.002)

**PQ.039**: *"The project charter is the document that formalizes the approval of a new project. In it, those responsible for carrying out the activities are designated."*

**nCommand Lite**:
- **Onde**: SharePoint (PDF assinado digitalmente)
- **Rastreabilidade**: Documento no SharePoint → Link no Azure Boards (Project Settings)
- **Automação**: ❌ Manual (requer assinatura digital)

**Impacto**: Mantém-se manual conforme exigência regulatória de aprovação formal.

---

### 4.3. CPJ - Project Plan (R039.003)

**PQ.039**: *"The project schedule (or planning) is responsible for pointing out the stages of the project, determining their respective responsible parties and indicating the expected dates for completion of each stage."*

**nCommand Lite**:
- **Onde**: 
  - Azure Boards (Sprints, Iteration Plans)
  - SharePoint (R039.003 - PDF)
- **Conteúdo**:
  - Fases do projeto (5 Fases do nCommand Lite)
  - Responsáveis (RACI do PROCESS.md)
  - Datas de conclusão (Sprint Planning)
- **Automação**: ⚠️ Parcial
  - Sprint Planning → Azure Boards (automático)
  - Formulário R039.003 → SharePoint (manual, mas referenciado)

**Impacto**: O planejamento estratégico mantém-se no SharePoint, mas o planejamento operacional é totalmente rastreado no Azure Boards.

**Observação Especial**: Para projetos de software, o PQ.039 menciona que o "software development plan" é parte desta etapa. O nCommand Lite atende isso através do **PROCESS.md** e **SOP-001 (SDLC)**.

---

### 4.4. EPJ - Input Data (R039.004)

**PQ.039**: *"The input data presents all the requirements that the project must meet, whether they are normative, regulatory, or performance."*

**Conteúdo Esperado (conforme PQ.039)**:
- Product description
- Technical and commercial description
- Risk class
- Applicable regulations
- Market data
- Benchmarking
- Intended use
- Component specifications
- Packaging and labeling requirements
- Interface with other devices
- Usability and security requirements
- Verification and validation methods
- Risk management control requirements
- **Software Requirements Specifications (SRS)**

**nCommand Lite**:
- **Onde**: 
  - Azure Boards (Work Items com campos customizados)
  - SRS (Documento técnico)
  - SharePoint (R039.004 - PDF consolidado)
- **Automação**: ✅ Alta
  - Requisitos → Work Items no Azure Boards
  - Campos customizados para: Risk Class, Regulatory Requirements, Usability, Security
  - SRS → Documento versionado no repositório
  - Rastreabilidade automática: Work Item → Requisito → Teste

**Impacto**: O nCommand Lite transforma Input Data em artefatos rastreáveis e versionados, mantendo o formulário R039.004 como consolidação formal.

**Campos Customizados no Azure Boards (Input Data)**:
- `Risk Class`: IEC 62304 Class B
- `Regulatory Requirements`: ISO 13485, IEC 62304, IEC 62366-1, ISO 14971
- `Intended Use`: SaMD para [descrição]
- `Usability Requirements`: Referência a Work Items de Usabilidade (IEC 62366)
- `Security Requirements`: Referência a DefectDojo (gestão de vulnerabilidades)

---

### 4.5. SPJ - Output Data (R039.007)

**PQ.039**: *"Output data is the results from development that must meet the input requirements."*

**Conteúdo Esperado**:
- Material specifications
- Bills of materials
- Work instructions
- Production processes
- Test reports
- Laboratory tests
- Risk management files
- Manuals
- Training material
- **For software**: Architecture definition, unit tests, integration tests

**nCommand Lite**:
- **Onde**: 
  - Código-fonte (Azure Repos)
  - Testes (Azure Test Plans + Relatórios)
  - Documentação técnica (Repositório + SharePoint)
  - Risk Management (DefectDojo + Work Items)
- **Automação**: ✅ Total
  - Código → Azure Repos (versionado)
  - Testes → Azure Test Plans (automático via Pipeline)
  - Arquitetura → Documentação técnica (C4, ADRs)
  - Test Reports → Gerados automaticamente no Pipeline
  - Risk Files → DefectDojo (gerenciamento centralizado)

**Impacto**: Todos os Output Data são gerados automaticamente e rastreáveis através do ciclo de CI/CD. O formulário R039.007 no SharePoint consolida referências a todos esses artefatos.

**Rastreabilidade Automática**:
```
Work Item (Input) → Code Commit → Pull Request → Test Execution → Test Report
                    ↓
                DefectDojo (Riscos)
                    ↓
                SharePoint (R039.007 - PDF consolidado)
```

---

### 4.6. RPJ - Project Review (R039.008)

**PQ.039**: *"The project must undergo reviews throughout its design and development, verifying that the results meet the requirements and that adjustments and new actions are necessary."*

**nCommand Lite**:
- **Onde**: 
  - Pull Request Reviews (Azure Repos)
  - Code Reviews (Azure Repos)
  - Test Reviews (Azure Test Plans)
  - Risk Reviews (DefectDojo)
- **Automação**: ✅ Alta
  - **Pull Request Reviews**: Obrigatórios (Branch Policy)
    - Mínimo 2 aprovações
    - Validação automática (Build, Tests, Security)
  - **Code Reviews**: Integrados ao PR
  - **Test Reviews**: Azure Test Plans (resultados de testes)
  - **Risk Reviews**: DefectDojo (triagem de vulnerabilidades)

**Impacto**: Reviews são integrados ao processo de desenvolvimento, com evidências automáticas. O formulário R039.008 no SharePoint consolida reviews formais em marcos do projeto.

**Gate de Pull Request (Automação)**:
```
Pull Request Criado
    ↓
Validações Automáticas:
  - Build passa?
  - Testes passam?
  - Sem vulnerabilidades críticas?
  - Work Item vinculado?
    ↓
Reviews Obrigatórios (2+)
    ↓
Aprovação → Merge
```

---

### 4.7. TPJ - Project Transfer (R039.005)

**PQ.039**: *"Once all project outputs have been verified, the next step is to carry out the transfer from the project (to production)."*

**Conteúdo Esperado**:
- Production capacity
- Availability of components
- Supplier qualification
- Personnel training
- Process validation
- **For software**: Software release

**nCommand Lite**:
- **Onde**: 
  - Pipeline de CI/CD (Deploy Staging)
  - Azure Test Plans (Validação)
  - SharePoint (R039.005 - PDF)
- **Automação**: ✅ Total (para software)
  - **Deploy Staging**: Automatizado via Pipeline
  - **Testes E2E**: Automatizados (Playwright)
  - **Validação de Infraestrutura**: IaC (Terraform)
  - **Software Release**: Tag Git + Release Notes

**Impacto**: Para SaMD, a transferência é automatizada através do pipeline. O formulário R039.005 documenta a decisão formal de transferência.

**Processo de Transfer Automatizado**:
```
Todas as verificações passaram
    ↓
Deploy para Staging (Pipeline)
    ↓
Testes E2E Automatizados (Playwright)
    ↓
Validação de Infraestrutura (Terraform)
    ↓
Aprovação QA Leader (Manual - Gate)
    ↓
Tag Git vX.Y.Z criada
    ↓
R039.005 assinado no SharePoint
```

---

### 4.8. VPJ - Project Validation (R039.006)

**PQ.039**: *"Design validation seeks to demonstrate that the design specifications meet the determined requirements and that the product meets the user's needs."*

**Conteúdo Esperado**:
- Validation protocols
- Test results
- Evidence that product meets user needs
- Essential performance validation

**nCommand Lite**:
- **Onde**: 
  - Azure Test Plans (Testes Somativos)
  - Testes E2E Automatizados (Playwright)
  - Testes de Usabilidade Somativos (IEC 62366)
  - SharePoint (R039.006 - PDF)
- **Automação**: ⚠️ Parcial
  - **Testes E2E**: ✅ Automatizados (Playwright)
  - **Testes Funcionais**: ✅ Automatizados (Unit, Integration)
  - **Testes Somativos de Usabilidade**: ❌ Manual (8-12 usuários)
  - **Testes de Segurança (DAST)**: ✅ Automatizados (OWASP ZAP)

**Impacto**: A maioria dos testes de validação é automatizada, mas testes somativos de usabilidade mantêm-se manuais conforme IEC 62366-1.

**Validação Automatizada**:
- ✅ **Essential Performance**: Testes E2E automatizados
- ✅ **Security**: DAST automatizado (OWASP ZAP)
- ✅ **Functional Requirements**: Testes automatizados
- ⚠️ **Usability (Somativo)**: Manual (conforme IEC 62366-1)
- ⚠️ **Clinical Validation**: Manual (se aplicável)

---

### 4.9. LPJ - Project Release (R039.009)

**PQ.039**: *"The product is only released for production after it has been released by a designated person. For release, the RHPJ records are verified and approval is carried out by means of digital signature."*

**nCommand Lite**:
- **Onde**: 
  - Azure DevOps (Gate de Liberação)
  - SharePoint (R039.009 - PDF assinado)
  - Git (Tag de versão)
- **Automação**: ✅ Alta
  - **Gate de Liberação**: Automatizado (validações obrigatórias)
  - **Verificação de RHPJ**: Checklist automatizado
  - **Tag Git**: Criada automaticamente após aprovação
  - **Assinatura Digital**: Manual (conforme exigência)

**Gate de Liberação Automatizado**:
```
Validações Pré-Liberação:
  ✅ Todas as verificações passaram
  ✅ Todos os testes passaram
  ✅ Sem vulnerabilidades abertas no DefectDojo
  ✅ DHF gerado e disponível
  ✅ Matriz de Rastreabilidade atualizada
    ↓
Aprovação QA Leader (Digital Signature)
    ↓
Tag Git vX.Y.Z criada automaticamente
    ↓
R039.009 assinado no SharePoint
```

---

## 5. Design History File (RHPJ) - R039.010

**PQ.039**: *"R039.010 – Design History File (RHPJ) references all records and documents necessary to prove that the project was developed in accordance with previously planned requirements."*

**Conteúdo Esperado**:
- User inputs and needs
- Outputs generated during development
- Verification and validation protocols
- Reports
- Analyses and reviews
- Other records demonstrating compliance

**nCommand Lite - DHF Automatizado**:

O nCommand Lite gera automaticamente elementos do DHF:

1. **Matriz de Rastreabilidade**:
   - Requisitos (Work Items) → Código (Commits) → Testes (Test Plans)
   - Gerada automaticamente via script

2. **Certificado de Segurança**:
   - Resumo do DefectDojo: "0 Vulnerabilidades Abertas"
   - Gerado automaticamente

3. **Relatórios de Testes**:
   - Azure Test Plans (automático)
   - Testes E2E (Playwright reports)

4. **Documentação Técnica**:
   - Arquitetura (documentação no repositório)
   - SRS (versionado)
   - SOPs (versionados)

**Armazenamento**:
- **Artefatos Digitais**: Azure Repos, Azure Test Plans, DefectDojo
- **PDFs Assinados**: SharePoint (R039.010 - Design History File consolidado)

**Automação**: ✅ O DHF é parcialmente automatizado, com consolidação manual no SharePoint para formato regulatório.

---

## 6. Device Master Record (RMP) - R039.011

**PQ.039**: *"R039.011 – Device Master Record consists of the set of records and documents that enable the standardized production of a product."*

**Conteúdo Esperado**:
- Product specifications
- Production process specifications
- Packaging and labeling specifications
- Inspection and testing procedures
- Installation, maintenance, and service processes

**nCommand Lite - RMP para SaMD**:

Para software médico, o RMP inclui:

1. **Product Specifications**:
   - **Software Design Specifications (Source Codes)**: Azure Repos (versionado)
   - **Architecture**: Documentação técnica
   - **SRS**: Documento versionado

2. **Production Process Specifications**:
   - **Infrastructure as Code (IaC)**: Terraform (versionado)
   - **CI/CD Pipelines**: Azure Pipelines (versionado)
   - **Deployment Process**: Documentado em SOP-005

3. **Inspection and Testing Procedures**:
   - **Test Plans**: Azure Test Plans
   - **Test Procedures**: Automatizados (Playwright, Jest, etc.)
   - **Acceptance Criteria**: Definidos nos Work Items

4. **Installation and Service**:
   - **Installation Manuals**: Documentação técnica
   - **Service Procedures**: Documentados

**Armazenamento**:
- **Artefatos Digitais**: Azure Repos, Azure Pipelines, Documentação
- **PDFs Consolidados**: SharePoint (R039.011 - Device Master Record)

**Automação**: ✅ O RMP para SaMD é amplamente automatizado através de Infrastructure as Code e documentação versionada.

---

## 7. Versionamento e Controle de Mudanças

### 7.1. Versionamento Semântico (PQ.039)

**PQ.039** estabelece versionamento semântico X.Y.Z:

| Nível | Tipo de Mudança | Impacto Regulatório | Exemplos nCommand Lite |
|-------|----------------|---------------------|------------------------|
| **X (Major)** | Mudança significativa que impacta segurança, performance essencial, requisitos clínicos ou uso pretendido | Alta: Requer nova submissão regulatória | Mudança arquitetural, novo algoritmo clínico, novo modo de operação |
| **Y (Minor)** | Mudança moderada, sem impacto direto em requisitos essenciais, mas muda performance, arquitetura interna ou usabilidade | Média: Não requer submissão. Deve ser documentado e controlado internamente. Requer revisão de gestão de riscos. | Otimização de performance, melhoria de UI, ajuste de algoritmo sem impacto clínico |
| **Z (Fixes/Patch)** | Mudanças pontuais, corretivas ou cosméticas, sem impacto em segurança, performance ou requisitos de uso | Baixa: Não requer submissão. Deve ser documentado e controlado internamente. | Bug fixes, correções de ortografia na UI |

**nCommand Lite**:
- ✅ Implementa versionamento semântico
- ✅ Tags Git seguem X.Y.Z
- ✅ Change Requests classificam tipo de mudança
- ✅ Rastreabilidade automática: Mudança → Versionamento → Submissão

### 7.2. Design Change (APJ) - R039.012

**PQ.039**: *"Design changes can follow two paths, as shown in the flowchart, and are classified as critical or non-critical."*

**Tipos de Mudança**:

1. **Critical Changes**:
   - Involve Major versioning (X.Y.Z → X+1.0.0)
   - Must follow all steps from Input Data (EPJ)

2. **Non-Critical Changes**:
   - Involves Minor versioning and/or patches (X.Y.Z → X.Y+1.Z ou X.Y.Z+1)
   - After development → Pilot batch (if necessary) or directly to Validation

**nCommand Lite - Controle de Mudança**:

- **Onde**: SOP-005 (Change Control)
- **Processo**:
  1. Change Request criado no Azure DevOps
  2. Análise de impacto e risco
  3. Classificação: Critical / Non-Critical
  4. Aprovação do QA Leader
  5. Implementação via PR
  6. Versionamento automático (tag Git)
  7. Documentação atualizada

**Rastreabilidade**:
```
Change Request (Azure DevOps)
    ↓
R039.012 - Project Changes (SharePoint)
    ↓
Implementation (PR + Code)
    ↓
Version Tag (Git)
```

**Conexão com PQ.042**:
- Conforme PQ.039 (linha 559): *"As required, changes involving a product may also be tracked through IONIC Health's internal process, PQ.042 – Change Control. Monitoring by this process does not exclude the need for R039.012 – Project Changes."*
- **nCommand Lite**: Change Requests podem referenciar GMUD quando aplicável (ver análise PQ.042).

---

## 8. Registros de Desenvolvimento

### 8.1. Registros Específicos para Software

**PQ.039** menciona registros específicos para projetos de software:

| Registro | Formulário | nCommand Lite |
|----------|------------|---------------|
| **Software Requirements Specification (SRS)** | Parte de R039.004 | Documento versionado no repositório |
| **Software Development Plan** | Parte de R039.003 | PROCESS.md + SOP-001 (SDLC) |
| **Software Architecture** | Parte de R039.007 | Documentação técnica (C4, ADRs) |
| **Unit Tests** | Parte de R039.007 | Jest/NUnit (automático) |
| **Integration Tests** | Parte de R039.007 | Testes automatizados (Pipeline) |
| **Software Release** | Parte de R039.005 | Tag Git + Release Notes |

### 8.2. Registros Adicionais (Software)

**nCommand Lite** também gera registros específicos:

- **Testing and Validation Report (RTV)**: R039.018
  - Relatórios automáticos de testes (Azure Test Plans)
  - Relatórios de segurança (DefectDojo)

- **Risk Management File**: 
  - Integrado ao DefectDojo (SOP-002, PQ.040)

---

## 9. Impactos e Benefícios da Automação

### 9.1. Rastreabilidade Automática

**Antes (Processo Tradicional)**:
- Rastreabilidade manual (Excel, documentos)
- Risco de inconsistências
- Difícil auditoria

**Com nCommand Lite**:
- ✅ Rastreabilidade automática: Requisito → Código → Teste
- ✅ Evidências automáticas em cada etapa
- ✅ Auditoria simplificada (links diretos)

### 9.2. Velocidade de Desenvolvimento

**Antes**:
- Processos manuais lentos
- Revisões sequenciais
- Espera por aprovações

**Com nCommand Lite**:
- ✅ Processos paralelos (reviews automáticos)
- ✅ Gates automáticos (validações instantâneas)
- ✅ Aprovações focadas apenas em decisões críticas

### 9.3. Conformidade Garantida

**Antes**:
- Dependência de processos manuais
- Risco de esquecer etapas
- Dificuldade de comprovar conformidade

**Com nCommand Lite**:
- ✅ "Compliance as Code": Impossível pular etapas
- ✅ Evidências automáticas de conformidade
- ✅ Conformidade verificável a qualquer momento

### 9.4. Redução de Erros

**Antes**:
- Erros humanos em processos manuais
- Documentação desatualizada
- Inconsistências entre documentos

**Com nCommand Lite**:
- ✅ Validações automáticas (sem erros humanos)
- ✅ Documentação sempre atualizada (versionamento)
- ✅ Consistência garantida (fonte única da verdade)

---

## 10. Integração: Formulários PQ.039 ↔ nCommand Lite

### 10.1. Estratégia de Integração

**Princípio**: *"Fonte única da verdade digital + Consolidação regulatória no SharePoint"*

- **Artefatos Digitais**: Azure DevOps, DefectDojo, Repositórios
- **Formulários Formais**: SharePoint (PDFs assinados)

### 10.2. Mapeamento de Referências

**Em cada formulário R039.XXX no SharePoint**:

1. **Seção "Referências Digitais"**:
   - Link para Work Items no Azure Boards
   - Link para Pull Requests
   - Link para Test Plans
   - Link para DefectDojo
   - Link para Documentação técnica

2. **Seção "Evidências"**:
   - Screenshots de validações
   - Relatórios PDF gerados automaticamente
   - Certificados de segurança (DefectDojo)

### 10.3. Campos Customizados no Azure DevOps

**Work Item Types** devem ter campos para referenciar formulários PQ.039:

- `R039.001 Reference`: Link para R039.001 (Project Request)
- `R039.004 Reference`: Link para R039.004 (Input Data)
- `R039.007 Reference`: Link para R039.007 (Output Data)
- `R039.012 Reference`: Link para R039.012 (Project Changes)

---

## 11. Recomendações de Implementação

### 11.1. Checklist de Integração

#### Para Cada Etapa do PQ.039:

- [ ] **NPJ (R039.001)**:
  - [ ] Work Item criado no Azure Boards
  - [ ] R039.001 preenchido no SharePoint
  - [ ] Link entre Work Item e R039.001

- [ ] **OPJ (R039.002)**:
  - [ ] R039.002 assinado no SharePoint
  - [ ] Link no Azure Boards (Project Settings)

- [ ] **CPJ (R039.003)**:
  - [ ] R039.003 preenchido no SharePoint
  - [ ] Sprint Planning no Azure Boards
  - [ ] Link entre Planning e R039.003

- [ ] **EPJ (R039.004)**:
  - [ ] Requisitos no Azure Boards (Work Items)
  - [ ] SRS versionado no repositório
  - [ ] R039.004 consolidado no SharePoint
  - [ ] Links de rastreabilidade

- [ ] **SPJ (R039.007)**:
  - [ ] Código versionado (Azure Repos)
  - [ ] Testes automatizados (Azure Test Plans)
  - [ ] R039.007 consolidado no SharePoint
  - [ ] Links para artefatos

- [ ] **RPJ (R039.008)**:
  - [ ] Pull Request Reviews (Azure Repos)
  - [ ] Test Reviews (Azure Test Plans)
  - [ ] R039.008 consolidado no SharePoint
  - [ ] Links para evidências

- [ ] **TPJ (R039.005)**:
  - [ ] Deploy Staging automatizado
  - [ ] Validações passadas
  - [ ] R039.005 assinado no SharePoint
  - [ ] Tag Git criada

- [ ] **VPJ (R039.006)**:
  - [ ] Testes de validação executados
  - [ ] Testes somativos de usabilidade (se aplicável)
  - [ ] R039.006 consolidado no SharePoint
  - [ ] Links para relatórios

- [ ] **LPJ (R039.009)**:
  - [ ] Gate de liberação aprovado
  - [ ] RHPJ verificado
  - [ ] R039.009 assinado no SharePoint
  - [ ] Tag Git de release criada

### 11.2. Template de Formulário R039.XXX

Cada formulário R039.XXX no SharePoint deve incluir:

```
─────────────────────────────────────────────────────────
R039.XXX - [Nome do Registro]
─────────────────────────────────────────────────────────

1. INFORMAÇÕES GERAIS
   - Projeto: nCommand Lite
   - Versão: X.Y.Z
   - Data: DD/MM/YYYY
   - Responsável: [Nome]

2. REFERÊNCIAS DIGITAIS
   - Azure Boards: [Link para Work Items]
   - Azure Repos: [Link para Commits/PRs]
   - Azure Test Plans: [Link para Test Runs]
   - DefectDojo: [Link para Vulnerabilidades]
   - Documentação: [Link para Docs]

3. CONTEÚDO/ARQUIVOS
   [Conteúdo do formulário conforme modelo R039.XXX]

4. EVIDÊNCIAS
   - [Screenshots/PDFs de validações]
   - [Relatórios automáticos]

5. APROVAÇÕES
   - [Assinaturas digitais]

─────────────────────────────────────────────────────────
```

### 11.3. Scripts de Automação Recomendados

1. **Geração de Matriz de Rastreabilidade**:
   - Script que gera matriz automaticamente
   - Requisitos → Código → Testes

2. **Consolidação de DHF**:
   - Script que consolida artefatos do DHF
   - Gera PDF para SharePoint

3. **Validação Pré-Release**:
   - Script que valida todos os requisitos antes do release
   - Checklist automatizado

---

## 12. Fluxo Integrado: PQ.039 ↔ nCommand Lite

```
┌─────────────────────────────────────────────────────────────┐
│ 1. PROJECT REQUEST (NPJ)                                    │
│    R039.001 (SharePoint) ←→ Epic/Feature (Azure Boards)    │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. PROJECT CHARTER (OPJ)                                    │
│    R039.002 (SharePoint) - Assinado                        │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. PROJECT PLAN (CPJ)                                       │
│    R039.003 (SharePoint) ←→ Sprint Planning (Azure Boards) │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. INPUT DATA (EPJ)                                         │
│    R039.004 (SharePoint) ←→ Work Items (Azure Boards)      │
│                            ←→ SRS (Repositório)            │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. DESENVOLVIMENTO (FASE 2)                                 │
│    Code (Azure Repos) → PR Reviews → Merge                 │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. OUTPUT DATA (SPJ)                                        │
│    R039.007 (SharePoint) ←→ Code + Tests (Azure)           │
│                            ←→ Architecture Docs            │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 7. PROJECT REVIEW (RPJ)                                     │
│    R039.008 (SharePoint) ←→ PR Reviews (Azure Repos)       │
│                            ←→ Test Reviews (Test Plans)     │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 8. PROJECT TRANSFER (TPJ)                                   │
│    R039.005 (SharePoint) ←→ Deploy Staging (Pipeline)      │
│                            ←→ E2E Tests (Playwright)        │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 9. PROJECT VALIDATION (VPJ)                                 │
│    R039.006 (SharePoint) ←→ Test Plans (Azure)             │
│                            ←→ Usability Tests (Manual)      │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 10. PROJECT RELEASE (LPJ)                                   │
│     R039.009 (SharePoint) ←→ Gate de Liberação (Azure)     │
│                             ←→ Tag Git vX.Y.Z               │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│ 11. DESIGN HISTORY FILE (RHPJ)                              │
│     R039.010 (SharePoint) ←→ Matriz Rastreabilidade        │
│                              ←→ Certificado Segurança       │
│                              ←→ Todos os Registros          │
└─────────────────────────────────────────────────────────────┘
```

---

## 13. Conclusão

O **nCommand Lite** impacta significativamente o **PQ.039 (Project Control)** através de:

### 13.1. Automação e Eficiência

- ✅ **Automação de 70-80%** das etapas do Design Control
- ✅ **Rastreabilidade automática** em todas as fases
- ✅ **Evidências automáticas** de conformidade
- ✅ **Redução de tempo** de desenvolvimento

### 13.2. Conformidade Garantida

- ✅ **"Compliance as Code"**: Impossível pular etapas
- ✅ **Gates automáticos** garantem conformidade
- ✅ **Conformidade verificável** a qualquer momento
- ✅ **Auditoria simplificada** através de links diretos

### 13.3. Integração com Formulários

- ✅ **Formulários PQ.039 mantidos** no SharePoint (exigência regulatória)
- ✅ **Referências cruzadas** entre formulários e artefatos digitais
- ✅ **Rastreabilidade bidirecional**: Formulário → Digital → Formulário

### 13.4. Próximos Passos

1. **Implementar campos customizados** no Azure DevOps para referenciar formulários PQ.039
2. **Criar templates** de formulários R039.XXX com seção de referências digitais
3. **Desenvolver scripts** de automação para geração de DHF e matriz de rastreabilidade
4. **Treinar equipe** na integração entre processos digitais e formulários regulatórios

---

**Última Atualização**: Dezembro 2024  
**Responsável pela Análise**: QA Leader  
**Status**: Em revisão

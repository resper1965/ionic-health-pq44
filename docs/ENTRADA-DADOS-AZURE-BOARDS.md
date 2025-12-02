# Como se Dá a Entrada de Dados no Azure Boards - nCommand Lite

**Documento**: Processo de Entrada de Dados no Azure Boards  
**Versão**: 1.0  
**Data**: Dezembro 2025  
**Responsável**: PO / QA Leader

## 1. Visão Geral

O Azure Boards é a **Fonte da Verdade de Execução** do projeto nCommand Lite. Todos os dados são inseridos manualmente ou automaticamente através de APIs, formando um rastreamento completo do ciclo de vida regulatório.

## 2. Formas de Entrada de Dados

### 2.1 Entrada Manual (Interface Web)

**Onde**: Azure DevOps → Boards → Work Items  
**Quem**: PO, UX, Arquiteto, QA Leader, Desenvolvedores

#### Processo Manual Completo:

1. **Acessar Azure Boards**
   - URL: `https://dev.azure.com/ionic-health/nCommand-Lite/_boards`
   - Navegar até o Board (Backlog, Board, Sprints)

2. **Criar Novo Work Item**
   - Clicar em "+ New Work Item"
   - Selecionar tipo: Feature, User Story, Task, Bug, Risk, Change Request

3. **Preencher Campos Obrigatórios**

   **Para Features/User Stories:**
   - **Título**: Descrição clara da funcionalidade
   - **Descrição**: Detalhamento do requisito
   - **Perfil de Usuário** (Campo Customizado): 
     - Categoria de usuário
     - Experiência
     - Contexto de uso
     - *Obrigatório conforme IEC 62366-1*
   - **Tarefas Principais** (Campo Customizado):
     - Lista de tarefas que o usuário realiza
     - *Obrigatório conforme IEC 62366-1*
   - **Acceptance Criteria**: Critérios de aceitação

   **Para Risks:**
   - **Título**: Identificação do risco (ex: "RISK-001: Erro no cálculo de IMC")
   - **Descrição**: Descrição do risco
   - **Severidade** (Campo Customizado): 1-5
   - **Probabilidade** (Campo Customizado): 1-5
   - **Detectabilidade** (Campo Customizado): 1-5
   - **RPN** (Campo Customizado): Severidade × Probabilidade × Detectabilidade
   - **Mitigações**: Relacionamento com Work Items que mitigam o risco

4. **Vincular Relacionamentos**
   - Risks → **Mitigates** → User Story
   - Tasks → **Child of** → User Story
   - Bugs → **Related to** → Feature/User Story

5. **Atribuir e Definir Estado**
   - **Assigned To**: Desenvolvedor responsável
   - **State**: New, Active, Resolved, Closed
   - **Area Path**: Área do produto
   - **Iteration**: Sprint/Iteração

### 2.2 Entrada Automatizada (APIs)

#### 2.2.1 Integração DefectDojo → Azure Boards

**Como funciona:**
1. Vulnerabilidade identificada no DefectDojo (via SAST/SCA/DAST)
2. DefectDojo envia para Azure DevOps via API usando "Push to Azure DevOps"
3. Bug criado automaticamente no Azure Boards
4. Bug vinculado ao Work Item original (se houver)

**Dados inseridos automaticamente:**
- Título: "[DEFECTDOJO-ID] - [Título da Vulnerabilidade]"
- Descrição: Detalhes da vulnerabilidade
- Severidade: Mapeada do DefectDojo (Critical/High → Severity 5/4)
- Labels: "Security", "DefectDojo", "Auto-generated"
- Relacionamento: Related to → Work Item original

**Script responsável**: `pipelines/scripts/defectdojo-ingest.sh`

#### 2.2.2 Integração Azure Sentinel → Azure Boards

**Como funciona:**
1. Azure Sentinel detecta incidente de segurança
2. Script automatizado cria Bug no Azure DevOps
3. Bug atribuído automaticamente ao AppSec

**Dados inseridos automaticamente:**
- Tipo: Bug
- Título: "[SENTINEL] - [Descrição do Incidente]"
- Descrição: Detalhes do incidente do Sentinel
- Labels: "Security", "Sentinel", "Auto-generated"

#### 2.2.3 Integração Azure Test Plans → Work Items

**Como funciona:**
1. Test Case criado no Azure Test Plans
2. Test Case vinculado ao Work Item (Requisito)
3. Durante execução, resultados são registrados
4. Se falha, Bug criado automaticamente vinculado ao Test Case

**Dados inseridos automaticamente:**
- Bug criado para falhas de teste
- Relacionamento: Related to → Test Case → Work Item

## 3. Fluxo Completo de Entrada de Dados por Fase

### FASE 1: Planejamento, Risco e Infraestrutura

**Entrada Manual:**

1. **PO/UX cria Feature no Azure Boards**
   - Tipo: Feature
   - Preenche: Título, Descrição
   - Preenche campos customizados:
     - Perfil de Usuário
     - Tarefas Principais

2. **UX cria User Stories vinculadas à Feature**
   - Tipo: User Story
   - Relacionamento: Child of → Feature
   - Preenche campos customizados de usabilidade

3. **Arquiteto consulta DefectDojo** (manual)
   - Analisa histórico de vulnerabilidades
   - Identifica riscos de segurança potenciais

4. **Arquiteto/QA cria Work Items de Risco**
   - Tipo: Risk
   - Preenche: RPN, Severidade, Probabilidade, Detectabilidade
   - Relacionamento: Mitigates → User Story

5. **QA Leader aprova Work Items**
   - Muda State para "Approved"
   - Adiciona comentário de aprovação
   - Registro de auditoria automático (histórico)

### FASE 2: Desenvolvimento e Codificação

**Entrada Manual:**

1. **Desenvolvedor cria Tasks**
   - Tipo: Task
   - Relacionamento: Child of → User Story
   - Atribui a si mesmo

2. **UX registra feedback de testes formativos**
   - Adiciona comentários no Work Item
   - Cria Tasks para ajustes necessários

**Entrada Automatizada:**

1. **Pull Request valida Work Item vinculado**
   - Pipeline verifica se PR tem Work Item vinculado
   - Se não tiver, PR é bloqueado automaticamente

### FASE 3: Verificação Automatizada

**Entrada Automatizada:**

1. **DefectDojo cria Bugs automaticamente**
   - Vulnerabilidades críticas/altas encontradas
   - Bugs criados via API

2. **Pipeline registra resultados de testes**
   - Test Results vinculados ao Work Item
   - Cobertura de código registrada

### FASE 4: Validação e Liberação

**Entrada Manual:**

1. **QA executa testes somativos**
   - Test Run criado no Azure Test Plans
   - Resultados registrados manualmente

2. **QA Leader aprova release**
   - Muda State do Work Item para "Closed"
   - Comentário de aprovação

**Entrada Automatizada:**

1. **Script de geração de DHF consulta Work Items**
   - Coleta dados via Azure Boards API
   - Gera documentos automaticamente

### FASE 5: Monitoramento

**Entrada Automatizada:**

1. **Azure Sentinel cria Bugs para incidentes**
   - Integração automática
   - Bugs criados em tempo real

2. **Trivy diário cria/atualiza Bugs**
   - Vulnerabilidades em produção
   - Bugs atualizados automaticamente

## 4. Campos Customizados Configurados

### Para Features/User Stories:

1. **Perfil de Usuário** (Text, Multiline, Obrigatório)
   - Categoria do usuário
   - Experiência prévia
   - Contexto de uso
   - **Conformidade**: IEC 62366-1

2. **Tarefas Principais** (Text, Multiline, Obrigatório)
   - Lista de tarefas que o usuário realiza
   - **Conformidade**: IEC 62366-1

### Para Risks:

1. **Severidade** (Picklist: 1-5, Obrigatório)
2. **Probabilidade** (Picklist: 1-5, Obrigatório)
3. **Detectabilidade** (Picklist: 1-5, Obrigatório)
4. **RPN** (Number, Calculado: Severidade × Probabilidade × Detectabilidade)
   - **Conformidade**: ISO 14971

### Para Change Requests:

1. **GMUD Number** (Text, Opcional)
   - Referência ao GMUD quando aplicável
   - **Conformidade**: PQ.042

2. **Change Type** (Picklist)
   - Code Change
   - Infrastructure Change
   - Documentation Change

## 5. Validações e Gates

### Gate 1: Pull Request

**Validação automática:**
- Work Item deve estar vinculado ao PR
- Se não estiver: PR é **BLOQUEADO**

**Como vincular:**
- No PR, seção "Work Items"
- Ou usar `#WORKITEM-ID` na descrição do PR

### Gate 2: Pipeline de CI/CD

**Validação automática:**
- Work Item vinculado ao commit/PR
- Build deve passar
- Testes devem passar (100%)

### Gate 3: Aprovação QA Leader

**Validação manual:**
- Work Item deve estar no estado "Approved"
- Riscos devem estar mitigados
- Documentação completa

## 6. Rastreabilidade

### Links entre Work Items:

```
Epic
 └── Feature
      └── User Story
           ├── Risk (Mitigates)
           ├── Task (Child of)
           ├── Test Case (Tests)
           └── Bug (Related to)
```

### Links com Código:

- Commits: `[WORKITEM-ID] Mensagem do commit`
- Branches: `feat/WORKITEM-123-description`
- Pull Requests: Vinculados ao Work Item

### Links com Testes:

- Test Cases: Vinculados ao User Story
- Test Runs: Resultados vinculados ao Test Case

## 7. APIs Utilizadas para Entrada Automatizada

### Azure DevOps REST API

**Endpoints utilizados:**

1. **Criar Work Item**
   ```
   POST https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/${type}?api-version=7.0
   ```

2. **Atualizar Work Item**
   ```
   PATCH https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/{id}?api-version=7.0
   ```

3. **Vincular Work Items**
   ```
   PATCH https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/{id}?api-version=7.0
   Body: [{"op": "add", "path": "/relations/-", "value": {"rel": "System.LinkTypes.Hierarchy-Forward", "url": "..."}}]
   ```

### Autenticação

- **Personal Access Token (PAT)**
- Scopo: `Work Items (read & write)`

## 8. Exemplos Práticos

### Exemplo 1: Criar Feature Completa (Manual)

1. Azure Boards → "+ New Work Item" → "Feature"
2. Preencher:
   - **Title**: "Cálculo de IMC"
   - **Description**: "Sistema deve calcular IMC do paciente"
   - **Perfil de Usuário**: "Médico, experiência intermediária, contexto hospitalar"
   - **Tarefas Principais**: "Inserir peso e altura, visualizar resultado"
3. Salvar (Work Item criado: FEAT-123)

### Exemplo 2: Criar Risk Vinculado (Manual)

1. Azure Boards → "+ New Work Item" → "Risk"
2. Preencher:
   - **Title**: "RISK-001: Erro no cálculo de IMC"
   - **Description**: "Fórmula incorreta pode causar erro no cálculo"
   - **Severidade**: 5
   - **Probabilidade**: 3
   - **Detectabilidade**: 2
   - **RPN**: 30 (calculado automaticamente)
3. Vincular: "Mitigates" → FEAT-123
4. Salvar

### Exemplo 3: Bug Criado Automaticamente (DefectDojo)

1. Pipeline executa scan SAST
2. Vulnerabilidade encontrada: "SQL Injection"
3. DefectDojo envia para Azure DevOps via API
4. Bug criado automaticamente:
   - **Title**: "[DD-456] - SQL Injection in UserController"
   - **Severity**: High
   - **Labels**: "Security", "DefectDojo", "Auto-generated"
   - Vinculado ao Work Item original (se houver)

## 9. Responsabilidades

| Papel | Entrada de Dados | Frequência |
|-------|-----------------|------------|
| **PO/UX** | Features, User Stories, Perfil de Usuário | Contínua |
| **Arquiteto** | Risks, Análise de Segurança | Por Feature |
| **QA Leader** | Aprovações, Comentários | Gates de aprovação |
| **Desenvolvedor** | Tasks, Comentários, Atualizações | Contínua |
| **QA** | Test Cases, Test Results, Bugs | Por Sprint |
| **Sistema** | Bugs automáticos (DefectDojo, Sentinel) | Automático |

## 10. Conformidade Regulatória

### Evidências Geradas:

- ✅ **Histórico completo**: Todas as mudanças são registradas no histórico do Work Item
- ✅ **Rastreabilidade**: Links entre requisitos, código, testes e riscos
- ✅ **Aprovações digitais**: Comentários de aprovação com timestamp e usuário
- ✅ **Campos obrigatórios**: Validados conforme normas (IEC 62366, ISO 14971)

### Auditoria:

Todas as entradas de dados geram evidências auditáveis:
- Quem criou/modificou
- Quando criou/modificou
- O que foi modificado
- Histórico completo disponível na aba "History" do Work Item

## 11. Referências

- **Manual Azure DevOps**: `docs/manuals/azure-devops/README.md`
- **Processo Completo**: `docs/PROCESS.md`
- **Evidências de Auditoria**: `docs/AUDIT-EVIDENCES.md`
- **Campos Customizados**: Configuração no Azure DevOps → Project Settings → Boards → Process


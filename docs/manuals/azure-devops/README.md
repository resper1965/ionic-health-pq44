# Manual - Azure DevOps

**Versão**: 1.0.0  
**Data**: 2024

## Visão Geral

Azure DevOps é a **Fonte da Verdade de Execução** do projeto nCommand Lite. Orquestra requisitos, código e testes em uma plataforma unificada.

**Função no Processo**: Gestão de trabalho, versionamento, CI/CD e testes.

## Componentes Utilizados

### Azure Boards

**Função**: Gestão de trabalho e requisitos

#### Work Item Types

| Tipo | Uso | Exemplo |
|------|-----|---------|
| **Feature** | Funcionalidade principal | "Autenticação de Usuários" |
| **User Story** | Requisito funcional | "Como usuário, quero fazer login" |
| **Task** | Tarefa de desenvolvimento | "Implementar endpoint de login" |
| **Bug** | Defeito encontrado | "Botão não funciona no mobile" |
| **Risk** | Riscos identificados | "RISK-001: Erro no cálculo de IMC" |

#### Configuração para nCommand Lite

**Campos Customizados**:

1. **Perfil de Usuário** (User Story/Feature)
   - Tipo: Text (multiline)
   - Obrigatório: Sim

2. **Tarefas Principais** (User Story/Feature)
   - Tipo: Text (multiline)
   - Obrigatório: Sim (IEC 62366-1)

3. **RPN** (Risk)
   - Tipo: Number
   - Obrigatório: Sim (ISO 14971)

4. **Severidade** (Risk)
   - Tipo: Picklist (1-5)
   - Obrigatório: Sim

#### Processo de Criação

1. Criar Work Item no Azure Boards
2. Preencher campos obrigatórios:
   - Título
   - Descrição
   - Perfil de Usuário (se aplicável)
   - Tarefas Principais (se aplicável)
   - Análise de Risco (se aplicável)
3. Vincular relacionamentos:
   - Risks → Mitigates → User Story
   - Tasks → Child of → User Story
4. Atribuir e definir estado

### Azure Repos

**Função**: Versionamento de código Git

#### Estrutura de Branches (Gitflow)

```
main                    # Produção (protegida)
├── release/v1.0.0      # Preparação de release
├── develop             # Desenvolvimento integrado
└── feat/WORKITEM-123   # Features individuais
```

#### Políticas de Branch

**Branch: main**
- Proteção: ✅ Sim
- Aprovações: Mínimo 2
- Build obrigatório: ✅ Sim
- Política de PR: Obrigatório

**Branch: develop**
- Proteção: ✅ Sim
- Aprovações: Mínimo 2
- Build obrigatório: ✅ Sim

**Branch: feat/***
- Proteção: ❌ Não
- Merge apenas via PR

#### Pull Request Requirements

**Pré-requisitos Obrigatórios**:

- [ ] Work Item vinculado
- [ ] Build bem-sucedido
- [ ] Sem vulnerabilidades críticas/altas (DefectDojo)
- [ ] Mínimo 2 aprovações
- [ ] Testes unitários: 100% pass
- [ ] SAST: Quality Gate A (SonarCloud)

**Configuração de Policy**:

```yaml
# Branch Policy: Pull Request
- Minimum reviewers: 2
- Required reviewers: QA Leader, Tech Lead (se disponível)
- Reset votes on push: ✅ Sim
- Work item linking: Obrigatório
- Build validation: ✅ Sim
- Status checks: ✅ SonarCloud, DefectDojo
```

### Azure Pipelines

**Função**: CI/CD automatizado

#### Pipeline Principal

**Arquivo**: `pipelines/azure-pipelines.yml`

**Stages**:

1. **BuildAndTest**: Build e testes unitários
2. **SAST**: SonarCloud analysis
3. **SCA**: Trivy scan
4. **SecurityValidation**: DefectDojo check
5. **DeployStaging**: Deploy para staging
6. **DAST**: OWASP ZAP scan

#### Variáveis e Secrets

**Variable Groups**:
- `ncommand-lite-variables`: Variáveis públicas
- `ncommand-lite-secrets`: Secrets (DefectDojo API Key, etc.)

**Como Configurar**:

1. Azure DevOps → Pipelines → Library
2. Criar Variable Group: `ncommand-lite-variables`
3. Adicionar variáveis:
   - `sonarcloud.projectKey`: `ionic-health_ncommand-lite`
   - `defectdojo.url`: `https://defectdojo.example.com`
4. Criar Variable Group: `ncommand-lite-secrets`
5. Adicionar secrets (🔒):
   - `DEFECTDOJO_API_KEY`
   - `SONARCLOUD_TOKEN`
   - `AZURE_SERVICE_PRINCIPAL_*`

### Azure Test Plans

**Função**: Gestão de testes funcionais e usabilidade

#### Estrutura

```
Test Plan: nCommand Lite v1.0.0
├── Test Suite: Functional Tests
│   ├── Test Case: TC-DEMO-001-001
│   ├── Test Case: TC-DEMO-001-002
│   └── ...
├── Test Suite: Usability Tests (IEC 62366)
│   ├── Test Case: TASK-001 - Calcular IMC
│   └── ...
└── Test Suite: Regression Tests
```

#### Criar Test Case

1. Test Plans → Criar Test Case
2. Título: ID + Descrição (ex: `TC-DEMO-001-001: Cálculo de IMC correto`)
3. Passos:
   - Action: O que fazer
   - Expected Result: Resultado esperado
4. Vincular Work Item: Requisito relacionado
5. Adicionar à Test Suite

#### Executar Test Run

1. Criar Test Run a partir do Test Plan
2. Executar testes manualmente
3. Registrar resultados:
   - ✅ Pass
   - ❌ Fail
   - ⚠️ Blocked
4. Registrar bugs para falhas

## Integrações

### Com DefectDojo

**Configuração**:

1. Pipeline envia relatórios para DefectDojo API
2. DefectDojo cria Bugs no Azure DevOps via "Push to Azure DevOps"
3. Bugs vinculados ao Work Item original

**Script**: `pipelines/scripts/defectdojo-ingest.sh`

### Com SonarCloud

**Configuração**:

1. Instalar extensão SonarCloud no Azure DevOps
2. Configurar Service Connection:
   - Organization: `ionic-health`
   - Token: SonarCloud token
3. Pipeline usa tasks:
   - `SonarCloudPrepare@1`
   - `SonarCloudAnalyze@1`
   - `SonarCloudPublish@1`

### Com SharePoint

**Via API ou Manual**:

- Artefatos salvos manualmente no SharePoint
- Links para SharePoint podem ser adicionados em Work Items

## Configuração Inicial do Projeto

### Passo 1: Criar Projeto

1. Azure DevOps → New Project
2. Nome: `nCommand-Lite`
3. Version Control: Git
4. Work Item Process: Basic (ou Agile customizado)

### Passo 2: Configurar Work Item Types

1. Project Settings → Boards → Process
2. Adicionar campos customizados conforme seção "Work Item Types"
3. Configurar estados customizados se necessário

### Passo 3: Configurar Repos

1. Repos → Files → Initialize Repository
2. Conectar repositório local:
   ```bash
   git remote add origin https://dev.azure.com/ionic-health/nCommand-Lite/_git/nCommand-Lite
   git push -u origin main
   ```

### Passo 4: Configurar Pipelines

1. Pipelines → New Pipeline
2. Conectar repositório
3. Selecionar arquivo: `pipelines/azure-pipelines.yml`
4. Configurar Variable Groups
5. Executar primeira execução

### Passo 5: Configurar Test Plans

1. Test Plans → New Test Plan
2. Nome: `nCommand Lite - Functional Tests`
3. Criar Test Suites e Test Cases

## Troubleshooting

### Problema: Pipeline não inicia

**Solução**:
- Verificar triggers no `azure-pipelines.yml`
- Verificar permissões do Service Principal
- Verificar variáveis obrigatórias

### Problema: PR bloqueado incorretamente

**Solução**:
- Verificar status checks
- Verificar políticas de branch
- Verificar aprovações pendentes

### Problema: Test Plans não aparecem

**Solução**:
- Verificar permissões do usuário
- Verificar se Test Plans estão no projeto correto
- Limpar cache do navegador

## Boas Práticas

1. **Sempre vincular Work Items** em PRs e commits
2. **Usar nomenclatura padrão** para branches e Work Items
3. **Manter Test Plans atualizados** conforme novos requisitos
4. **Revisar Variable Groups** periodicamente
5. **Documentar mudanças** em políticas de branch

## Referências

- [Documentação Oficial Azure DevOps](https://docs.microsoft.com/azure/devops)
- [Azure DevOps REST API](https://docs.microsoft.com/rest/api/azure/devops)
- Processo no projeto: `docs/PROCESS.md`
- SOP-001: `docs/sop/SOP-001-SDLC.md`

---

**Última Atualização**: 2024  
**Responsável**: DevOps / QA Team


# Nota Importante: Spec-Kit e Ferramentas de Git

**Data**: 1/12/2025

## Esclarecimentos Importantes

### 1. Spec-Kit

**O Spec-Kit é da ferramenta de apresentação, NÃO do ciclo de vida do nCommand Lite.**

#### Localização Atual
- `spec-kit/` está na raiz do projeto
- É uma ferramenta para a aplicação de apresentação (`demo-app/`)

#### Propósito
- ✅ Ferramenta para demonstrar/visualizar especificações na apresentação
- ❌ **NÃO** é usado no processo de desenvolvimento do nCommand Lite
- ❌ **NÃO** gera artefatos regulatórios do produto

#### No Processo Real do nCommand Lite
O processo real utiliza:
- **Azure DevOps Boards**: Para gestão de requisitos e Work Items
- **Azure DevOps Repos**: Para versionamento de código
- **SharePoint Online**: Para DHF e documentos regulatórios
- **DefectDojo**: Para gestão de vulnerabilidades

### 2. Ferramenta de Git

**Para o processo do nCommand Lite, a ferramenta de Git é Azure DevOps (Azure Repos).**

#### Azure DevOps (Azure Repos)
- ✅ **Git repository principal** para código do nCommand Lite
- ✅ **Branching strategy**: Gitflow
- ✅ **Pull Requests**: Gate de qualidade obrigatório
- ✅ **Políticas**: Branch protection, code review obrigatório

#### GitHub (se usado)
- ⚠️ Pode ser usado apenas para:
  - Repositório de documentação/apresentação
  - Projetos auxiliares
- ❌ **NÃO** é usado para o processo de desenvolvimento do nCommand Lite
- ❌ **NÃO** substitui Azure Repos

## Estrutura Corrigida

### Processo do nCommand Lite
```
Azure DevOps
├── Azure Repos      # Git para código
├── Azure Boards     # Requisitos e Work Items
├── Azure Pipelines  # CI/CD
└── Azure Test Plans # Testes
```

### Aplicação de Apresentação
```
demo-app/
└── (Inclui spec-kit para demonstração)
```

## Referências no Processo

### FASE 2: Desenvolvimento e Codificação

**Versionamento**:
- ✅ Azure Repos (Gitflow)
- ✅ Branches: `feat/WORKITEM-ID`
- ✅ Pull Requests no Azure Repos

**Não menciona**:
- ❌ GitHub
- ❌ Spec-kit para geração de especificações

### Especificações Reais

As especificações do nCommand Lite são gerenciadas em:
- **Azure DevOps Boards**: Work Items (Features, User Stories)
- **SharePoint Online**: Documentos formais (DHF)
- **Não**: Spec-kit templates

## Impacto na Documentação

### Arquivos Atualizados
- ✅ `README.md`: Removido spec-kit do processo principal
- ✅ `docs/PROCESS.md`: Menciona Azure Repos explicitamente
- ✅ `docs/PRESENTATION-APP.md`: Clarifica que spec-kit é da apresentação

### Próximas Ações
- [ ] Considerar mover spec-kit para dentro de `demo-app/` no futuro
- [ ] Atualizar referências internas que mencionam spec-kit como parte do processo
- [ ] Manter distinção clara entre ferramentas do processo vs. apresentação

---

**Importante**: Este documento serve para esclarecer a distinção entre ferramentas do processo de desenvolvimento do nCommand Lite e ferramentas de apresentação/demonstração.


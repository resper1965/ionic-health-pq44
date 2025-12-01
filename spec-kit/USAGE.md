# Guia de Uso do Spec-Kit

Guia prático para usar o Spec-Kit na gestão de especificações do nCommand Lite.

## Instalação

### Pré-requisitos

- Python 3.8+
- Git
- Editor de texto (VS Code, Vim, etc.)

### Instalar Dependências

```bash
cd spec-kit
pip install -r requirements.txt
```

### Configurar Variáveis de Ambiente

```bash
# Azure DevOps Personal Access Token
export ADO_PAT="seu-token-aqui"

# Azure DevOps Organization e Project
export ADO_ORG="ionic-health"
export ADO_PROJECT="nCommand-Lite"
```

## Fluxo de Trabalho

### 1. Criar Nova Especificação

#### Feature Specification

```bash
./spec-kit/tools/generate-spec.sh \
  --type feature \
  --workitem USER-123 \
  --title "Autenticação de Usuários" \
  --author "João Silva"
```

Isso criará: `spec-kit/specs/features/USER-123-feature-spec.md`

#### API Specification

```bash
./spec-kit/tools/generate-spec.sh \
  --type api \
  --workitem USER-124 \
  --title "API de Pacientes" \
  --author "Maria Santos"
```

#### Infrastructure Specification

```bash
./spec-kit/tools/generate-spec.sh \
  --type infrastructure \
  --workitem INFRA-001 \
  --title "Configuração de Backup Automático" \
  --author "DevOps Team"
```

#### Usability Specification

```bash
./spec-kit/tools/generate-spec.sh \
  --type usability \
  --workitem USER-125 \
  --title "Fluxo de Login" \
  --author "UX Team"
```

### 2. Preencher Especificação

Abra o arquivo gerado e preencha todos os campos marcados com `[PLACEHOLDER]`:

- Título completo
- Descrições detalhadas
- Requisitos funcionais
- Análise de riscos
- Testes planejados

### 3. Validar Especificação

```bash
./spec-kit/scripts/validate-spec.sh spec-kit/specs/features/USER-123-feature-spec.md
```

**Modo Estrito** (bloqueia se houver erros):
```bash
./spec-kit/scripts/validate-spec.sh --strict spec-kit/specs/features/USER-123-feature-spec.md
```

### 4. Sincronizar com Azure DevOps

```bash
./spec-kit/tools/sync-ado.py \
  --spec spec-kit/specs/features/USER-123-feature-spec.md \
  --organization ionic-health \
  --project nCommand-Lite \
  --pat $ADO_PAT
```

### 5. Gerar Matriz de Rastreabilidade

```bash
./spec-kit/tools/traceability.py \
  --specs-dir spec-kit/specs \
  --output docs/traceability-matrix.md
```

## Exemplos Práticos

### Exemplo 1: Nova Feature Completa

```bash
# 1. Criar especificação de feature
./spec-kit/tools/generate-spec.sh \
  --type feature \
  --workitem USER-200 \
  --title "Gestão de Prescrições" \
  --author "Dev Team"

# 2. Preencher especificação manualmente
code spec-kit/specs/features/USER-200-feature-spec.md

# 3. Validar
./spec-kit/scripts/validate-spec.sh spec-kit/specs/features/USER-200-feature-spec.md

# 4. Sincronizar com Azure DevOps
./spec-kit/tools/sync-ado.py \
  --spec spec-kit/specs/features/USER-200-feature-spec.md \
  --organization ionic-health \
  --project nCommand-Lite

# 5. Commit no Git
git add spec-kit/specs/features/USER-200-feature-spec.md
git commit -m "[USER-200] Adicionar especificação de gestão de prescrições"
```

### Exemplo 2: Especificação de API

```bash
# 1. Criar especificação de API
./spec-kit/tools/generate-spec.sh \
  --type api \
  --workitem USER-201 \
  --title "REST API para Prescrições" \
  --author "Backend Team"

# 2. Criar especificação de usabilidade relacionada
./spec-kit/tools/generate-spec.sh \
  --type usability \
  --workitem USER-202 \
  --title "Interface de Prescrições" \
  --author "UX Team"
```

### Exemplo 3: Atualizar Matriz de Rastreabilidade

```bash
# Gerar matriz atualizada
./spec-kit/tools/traceability.py \
  --specs-dir spec-kit/specs \
  --output docs/traceability-matrix.md

# Verificar resultados
cat docs/traceability-matrix.md
```

## Integração com Processo Regulatório

### FASE 1: Planejamento

1. **Criar Work Item** no Azure DevOps
2. **Gerar Especificação** usando Spec-Kit
3. **Preencher Análise de Risco** (SOP-002)
4. **Validar Especificação**
5. **Sincronizar com Azure DevOps**
6. **Aprovação** pelo QA Leader

### Durante Desenvolvimento

- Especificação é referência principal
- Mudanças na spec geram novo Work Item
- Rastreabilidade mantida automaticamente

### FASE 4: Validação

- Especificações incluídas no DHF
- Matriz de rastreabilidade gerada automaticamente
- Validação contra especificação

## Dicas e Boas Práticas

### 1. Nomenclatura de Arquivos

Use o padrão: `{WORKITEM-ID}-{TYPE}-spec.md`

Exemplos:
- `USER-123-feature-spec.md`
- `USER-124-api-spec.md`
- `INFRA-001-infrastructure-spec.md`

### 2. Versionamento no Git

Comite especificações junto com o código:

```bash
git add spec-kit/specs/features/USER-123-feature-spec.md
git commit -m "[USER-123] Adicionar especificação de feature"
```

### 3. Revisão de Especificações

Use Pull Requests para revisar specs:

```bash
git checkout -b spec/USER-123-review
# Fazer alterações
git commit -m "Revisar e atualizar especificação"
git push origin spec/USER-123-review
# Criar PR no Azure DevOps
```

### 4. Manter Especificações Atualizadas

- Atualizar specs quando requisitos mudarem
- Documentar mudanças no histórico
- Re-validar após mudanças significativas

### 5. Rastreabilidade

- Vincular sempre Work Items
- Referenciar commits de código
- Vincular test cases
- Documentar riscos identificados

## Troubleshooting

### Erro: "Template não encontrado"

Verifique se os templates estão em `spec-kit/templates/`:
```bash
ls spec-kit/templates/
```

### Erro: "Personal Access Token não fornecido"

Configure a variável de ambiente:
```bash
export ADO_PAT="seu-token"
```

Ou forneça via argumento:
```bash
./spec-kit/tools/sync-ado.py --pat "seu-token" ...
```

### Erro: "Work Item não encontrado"

Verifique:
- ID do Work Item está correto
- Você tem acesso ao projeto no Azure DevOps
- Personal Access Token tem permissões adequadas

### Especificação inválida

Execute validação em modo verbose:
```bash
./spec-kit/scripts/validate-spec.sh --strict spec-kit/specs/.../file.md
```

Corrija os erros reportados e revalide.

## Recursos Adicionais

- **Documentação do Processo**: `docs/PROCESS.md`
- **SOPs**: `docs/sop/`
- **Templates**: `spec-kit/templates/`
- **Exemplos**: `spec-kit/specs/` (criar conforme necessário)

---

**Última Atualização**: 2024  
**Mantido por**: QA Leader


# Correção: Spec-Kit e Git

**Data**: 1/12/2025

## Correções Necessárias

### 1. Spec-Kit

**Correção**: O Spec-Kit é da ferramenta de apresentação (`demo-app/`), **NÃO** do ciclo de vida do nCommand Lite.

**Status Atual**:
- ❌ Spec-kit está na raiz do projeto
- ❌ Referências no README principal
- ❌ Misturado com processo do nCommand Lite

**Ação**:
- ✅ Esclarecer que spec-kit é apenas para apresentação
- ✅ Atualizar documentação para refletir isso
- ✅ Mover referências para demo-app

### 2. Ferramenta de Git

**Correção**: A ferramenta de Git para o processo do nCommand Lite é **Azure DevOps (Azure Repos)**, não GitHub.

**Status Atual**:
- ⚠️ Algumas referências ao GitHub na documentação
- ✅ Processo principal já menciona Azure DevOps
- ⚠️ Alguns documentos mencionam GitHub para documentação

**Clarificação**:
- **Azure DevOps (Azure Repos)**: Git para código e processo do nCommand Lite
- **GitHub**: Apenas para repositório de documentação/apresentação (se aplicável)

## Mudanças Aplicadas

### README.md
- ✅ Removido spec-kit da estrutura principal
- ✅ Movido spec-kit para dentro de demo-app na estrutura
- ✅ Atualizada seção "Início Rápido"
- ✅ Adicionada nota sobre spec-kit ser da apresentação

### docs/PROCESS.md
- ✅ Atualizado "Versionamento" para mencionar Azure Repos explicitamente

### Próximas Ações
- [ ] Mover especificações do spec-kit para demo-app (se necessário)
- [ ] Atualizar todas as referências internas
- [ ] Corrigir documentação que menciona GitHub como ferramenta principal

---

**Aplicado em**: 1/12/2025


# Spec-Kit - nCommand Lite

**Kit de Ferramentas para Gestão de Especificações Técnicas**

O Spec-Kit é um conjunto de ferramentas e templates para gerenciar especificações técnicas, requisitos e documentação do ciclo de vida do nCommand Lite, garantindo rastreabilidade e conformidade regulatória.

## Objetivo

Facilitar o processo de planejamento (FASE 1) e gerenciamento de especificações técnicas durante todo o ciclo de vida do desenvolvimento, integrando com:

- **Azure DevOps**: Requisitos e Work Items
- **Rastreabilidade**: Especificações → Código → Testes
- **Conformidade**: IEC 62304, ISO 13485, IEC 62366-1

## Estrutura

```
spec-kit/
├── templates/              # Templates de especificação
│   ├── feature-spec.md     # Especificação de feature
│   ├── api-spec.md         # Especificação de API
│   ├── infrastructure-spec.md  # Especificação de infraestrutura
│   └── usability-spec.md   # Especificação de usabilidade (IEC 62366)
├── tools/                  # Ferramentas de automação
│   ├── generate-spec.sh    # Gerador de especificação
│   ├── sync-ado.py         # Sincronização com Azure DevOps
│   └── traceability.py     # Geração de rastreabilidade
├── scripts/                # Scripts auxiliares
│   └── validate-spec.sh    # Validador de especificações
└── specs/                  # Especificações geradas
    ├── features/           # Especificações de features
    ├── api/                # Especificações de API
    └── infrastructure/     # Especificações de infraestrutura
```

## Uso Rápido

### Criar Nova Especificação de Feature

```bash
./spec-kit/tools/generate-spec.sh --type feature --workitem USER-123
```

### Sincronizar com Azure DevOps

```bash
./spec-kit/tools/sync-ado.py --workitem USER-123 --spec specs/features/USER-123-feature.md
```

### Validar Especificação

```bash
./spec-kit/scripts/validate-spec.sh specs/features/USER-123-feature.md
```

## Processo de Especificação

### FASE 1: Planejamento

1. **Criar Work Item** no Azure DevOps
2. **Gerar Especificação** usando template apropriado
3. **Análise de Risco** (conforme SOP-002)
4. **Aprovação** pelo QA Leader

### Durante Desenvolvimento

- Especificação é referência para desenvolvimento
- Mudanças na spec geram novo Work Item
- Rastreabilidade mantida automaticamente

### FASE 4: Validação

- Especificação incluída no DHF
- Matriz de rastreabilidade gerada automaticamente

## Integração com Processo Regulatório

O Spec-Kit está integrado com:

- **SOP-001**: SDLC - Especificações versionadas no Git
- **SOP-002**: Gestão de Riscos - Análise de risco na spec
- **SOP-004**: Verificação e Validação - Validação contra especificação
- **SOP-005**: Controle de Mudança - Mudanças rastreadas

## Documentação

- **Templates**: Ver `templates/` para templates disponíveis
- **Ferramentas**: Ver `tools/` para ferramentas de automação
- **Processo**: Consulte `docs/PROCESS.md` para o processo completo

---

**Versão**: 1.0  
**Mantido por**: QA Leader  
**Conformidade**: IEC 62304 Class B


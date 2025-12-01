# Especificações Geradas

Este diretório contém as especificações técnicas geradas usando o Spec-Kit.

## Estrutura

```
specs/
├── features/          # Especificações de features
├── api/              # Especificações de APIs
├── infrastructure/   # Especificações de infraestrutura
└── usability/        # Especificações de usabilidade
```

## Nomenclatura

Use o padrão: `{WORKITEM-ID}-{TYPE}-spec.md`

Exemplos:
- `USER-123-feature-spec.md`
- `USER-124-api-spec.md`
- `INFRA-001-infrastructure-spec.md`
- `USER-125-usability-spec.md`

## Versionamento

- Especificações são versionadas no Git
- Commits devem referenciar Work Item: `[WORKITEM-ID] Mensagem`
- Mudanças significativas requerem atualização do status

## Validação

Antes de commitar, valide a especificação:

```bash
./spec-kit/scripts/validate-spec.sh specs/features/USER-123-feature-spec.md
```

---

**Nota**: Não commitar especificações com placeholders `[PLACEHOLDER]` não preenchidos.


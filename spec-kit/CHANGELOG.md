# Changelog - Spec-Kit

Registro de mudanças do Spec-Kit para nCommand Lite.

## [1.0.0] - 2024-01-XX

### Adicionado

- Templates de especificação:
  - Feature Specification (`feature-spec.md`)
  - API Specification (`api-spec.md`)
  - Infrastructure Specification (`infrastructure-spec.md`)
  - Usability Specification (`usability-spec.md`) - Conformidade IEC 62366-1

- Ferramentas de automação:
  - `generate-spec.sh`: Gerador de especificações a partir de templates
  - `sync-ado.py`: Sincronização com Azure DevOps
  - `traceability.py`: Geração de matriz de rastreabilidade
  - `validate-spec.sh`: Validador de especificações

- Documentação:
  - README.md: Visão geral do Spec-Kit
  - USAGE.md: Guia completo de uso
  - Changelog: Este arquivo

- Integrações:
  - Azure DevOps API (Work Items)
  - Rastreabilidade automática
  - Validação de conformidade regulatória

### Conformidade

- IEC 62304 Class B
- ISO 13485:2016
- IEC 62366-1:2015
- ISO 14971:2019

---

**Formato**: [Semantic Versioning](https://semver.org/)
**Categorias**: Adicionado, Modificado, Removido, Depreciado, Corrigido, Segurança


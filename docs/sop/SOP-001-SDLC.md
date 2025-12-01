# SOP-001: Ciclo de Vida de Desenvolvimento (SDLC)

**Documento**: SOP-001  
**Título**: Ciclo de Vida de Desenvolvimento (SDLC)  
**Versão**: 1.0  
**Data**: 2024  
**Aprovado por**: QA Leader  
**Classificação**: IEC 62304 Class B

## 1. Objetivo

Este procedimento estabelece as regras e práticas para o ciclo de vida de desenvolvimento de software do nCommand Lite, garantindo rastreabilidade, controle de configuração e conformidade com IEC 62304.

## 2. Escopo

Aplica-se a todo código-fonte, configurações, infraestrutura (IaC) e documentação técnica do projeto nCommand Lite.

## 3. Versionamento Git (Gitflow)

### 3.1 Estrutura de Branches

```
main                    # Branch de produção (protegida)
├── release/v*          # Branches de release
├── develop             # Branch de desenvolvimento integrado
└── feat/ID-Item        # Branches de feature (ex: feat/USER-123)
```

### 3.2 Nomenclatura de Branches

- **Features**: `feat/WORKITEM-ID-description` (ex: `feat/USER-123-authentication`)
- **Bugs**: `bug/WORKITEM-ID-description`
- **Hotfixes**: `hotfix/WORKITEM-ID-description`
- **Releases**: `release/v1.0.0`

### 3.3 Regras de Merge

1. Todas as features devem partir de `develop`
2. Pull Requests obrigatórios para merge em `develop` ou `main`
3. Branches devem ser deletadas após merge
4. Commits devem referenciar Work Item ID: `[USER-123] Description`

## 4. Pull Request (Gate de Qualidade)

### 4.1 Pré-requisitos Obrigatórios

- [ ] Work Item do Azure DevOps vinculado no título ou descrição
- [ ] Build pipeline bem-sucedido
- [ ] Sem vulnerabilidades críticas/altas no DefectDojo
- [ ] Mínimo de 2 aprovações de código
- [ ] Testes unitários: 100% pass
- [ ] Cobertura de código: mínimo conforme política do projeto
- [ ] SAST: Quality Gate A (SonarCloud)

### 4.2 Bloqueios Automáticos

O pipeline rejeita PRs que:
- Não tenham Work Item vinculado
- Falhem no build
- Tenham vulnerabilidades críticas/altas abertas
- Não atendam aos critérios de qualidade

## 5. Commits

### 5.1 Formato Padrão

```
[WORKITEM-ID] Título curto (máx 50 caracteres)

Descrição detalhada (opcional)

- Mudança 1
- Mudança 2
```

### 5.2 Tipos de Commit

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Tarefas de manutenção

### 5.3 Pre-commit Hooks

Hooks obrigatórios (configurados em `.pre-commit-config.yaml`):
- Linting (ESLint/Pylint)
- Formatação (Prettier/Black)
- Validação de segredos
- Verificação de credenciais hardcoded

## 6. Tags de Release

### 6.1 Versionamento Semântico

- Formato: `vMAJOR.MINOR.PATCH` (ex: `v1.2.3`)
- **MAJOR**: Mudanças incompatíveis de API
- **MINOR**: Funcionalidades compatíveis
- **PATCH**: Correções compatíveis

### 6.2 Criação de Tags

```bash
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin v1.0.0
```

Tags são criadas apenas após aprovação do Gate de Liberação (SOP-004).

## 7. Controle de Configuração

### 7.1 Artefatos Rastreados

- Código-fonte (Git)
- Configurações de infraestrutura (Terraform)
- Pipelines (Azure DevOps)
- Documentação técnica (Markdown)
- Definições de API (OpenAPI/Swagger)

### 7.2 Rastreabilidade

Cada commit deve estar vinculado a:
- Work Item no Azure DevOps
- Requisito funcional (se aplicável)
- Análise de risco (SOP-002)

## 8. Responsabilidades

| Atividade | Responsável |
|-----------|-------------|
| Criação de branches | Developer |
| Code Review | Dev Team (mínimo 2) |
| Merge em develop | Tech Lead |
| Merge em main | QA Leader |
| Criação de tags | QA Leader |

## 9. Referências

- IEC 62304:2006+A1:2015 - Seção 6: Software Development Process
- SOP-002: Gestão de Riscos
- SOP-003: Gestão de Vulnerabilidades
- SOP-005: Controle de Mudança


# nCommand Lite

**Plataforma de SaMD (Software as a Medical Device)**

## Classificação Regulatória

- **IEC 62304**: Class B (Risco Moderado)
- **Normas de Conformidade**:
  - ISO 13485:2016: Sistema de Gestão da Qualidade
  - IEC 62304:2006+A1:2015: Ciclo de Vida de Software Médico
  - IEC 62366-1:2015: Engenharia de Usabilidade
  - ISO 14971:2019: Gestão de Riscos
  - ISO/IEC 27001 & 27701: Segurança da Informação e Privacidade
  - RDC 657/2022 (ANVISA) & FDA 21 CFR Part 820

## Arquitetura de Ferramentas

- **Azure DevOps (ADO)**: Fonte da Verdade de Execução
- **OWASP DefectDojo**: Fonte da Verdade de Segurança
- **SharePoint Online**: Repositório Legal (DHF)
- **Azure Cloud (IaC)**: Infraestrutura Imutável via Terraform

## Estrutura do Projeto

```
.
├── docs/                    # Documentação regulatória e processos
│   ├── regulatory/          # Normas e regulamentações
│   ├── sop/                 # Procedimentos Operacionais Padrão
│   └── dhf/                 # Design History File templates
├── infrastructure/          # Infrastructure as Code (Terraform)
│   └── azure/               # Configurações Azure
├── pipelines/               # Azure DevOps Pipelines
│   ├── templates/           # Templates reutilizáveis
│   └── scripts/             # Scripts de automação
├── security/                # Gestão de segurança
│   ├── defectdojo/          # Scripts de integração DefectDojo
│   └── scans/               # Configurações de scanners
├── spec-kit/                # Kit de Gestão de Especificações
│   ├── templates/           # Templates de especificação
│   ├── tools/               # Ferramentas de automação
│   ├── scripts/             # Scripts auxiliares
│   └── specs/               # Especificações geradas
├── demo-app/                # Aplicação de apresentação (não parte do produto)
│   └── (Aplicação web para visualizar o processo)
├── src/                     # Código fonte da aplicação
└── tests/                   # Testes automatizados

```

## Processo de Desenvolvimento

O desenvolvimento segue o processo integrado documentado em `docs/sop/SOP-001.md`.

### Fases do Processo

1. **Planejamento, Risco e Infraestrutura**: Gestão de demanda, análise de risco e aprovação
2. **Desenvolvimento e Codificação**: Versionamento Gitflow, desenvolvimento e PRs
3. **Verificação Automatizada**: CI/CD com integração DefectDojo
4. **Validação e Liberação**: Testes, DHF e gates de aprovação
5. **Monitoramento**: Vigilância pós-mercado e gestão de vulnerabilidades

## Início Rápido

### Para Desenvolvedores

1. Leia `docs/GETTING-STARTED.md` para configuração inicial
2. Configure o Spec-Kit: `spec-kit/USAGE.md`
3. Revise os SOPs em `docs/sop/`

### Spec-Kit

O **Spec-Kit** é o conjunto de ferramentas para gestão de especificações técnicas:

- **Templates**: Especificações de features, APIs, infraestrutura e usabilidade
- **Ferramentas**: Geração automática, sincronização com Azure DevOps, rastreabilidade
- **Validação**: Verificação de estrutura e conformidade

**Guia de Uso**: `spec-kit/USAGE.md`

## Documentação

- **Processo Integrado**: `docs/PROCESS.md`
- **SOPs**: `docs/sop/`
- **Spec-Kit**: `spec-kit/README.md`
- **Conformidade Regulatória**: `docs/regulatory/COMPLIANCE-MATRIX.md`


# Matriz de Conformidade Regulatória - nCommand Lite

Mapeamento das exigências regulatórias e como o processo implementado atende a cada requisito.

## Normas Aplicáveis

| Norma | Título | Versão | Escopo |
|-------|--------|--------|--------|
| **ISO 13485** | Sistema de Gestão da Qualidade | 2016 | Gestão da qualidade |
| **IEC 62304** | Ciclo de Vida de Software Médico | 2006+A1:2015 | Desenvolvimento de software |
| **IEC 62366-1** | Engenharia de Usabilidade | 2015 | Usabilidade |
| **ISO 14971** | Gestão de Riscos | 2019 | Análise de riscos |
| **ISO/IEC 27001** | Segurança da Informação | 2022 | Segurança |
| **ISO/IEC 27701** | Privacidade | 2019 | Privacidade |
| **RDC 657/2022** | Regulamentação ANVISA | 2022 | Mercado brasileiro |
| **FDA 21 CFR Part 820** | Quality System Regulation | - | Mercado americano |

## Mapeamento de Requisitos

### ISO 13485:2016

| Requisito | Seção | Implementação | Evidência |
|-----------|-------|---------------|-----------|
| Controle de Documentação | 4.2 | Git + SharePoint | Versionamento Git, DHF no SharePoint |
| Controle de Registros | 4.2.5 | Azure DevOps + SharePoint | Work Items, Test Runs, DHF |
| Responsabilidades | 5.5 | Matriz RACI | `docs/PROCESS.md` |
| Controle de Produto | 7.5 | Pipeline CI/CD | `pipelines/azure-pipelines.yml` |
| Verificação | 8.2 | Testes automatizados | SOP-004 |
| Controle de Mudanças | 7.5.6 | SOP-005 | `docs/sop/SOP-005-Change-Control.md` |

### IEC 62304:2006+A1:2015

| Requisito | Seção | Implementação | Evidência |
|-----------|-------|---------------|-----------|
| Processo de Desenvolvimento | 5 | SDLC (SOP-001) | `docs/sop/SOP-001-SDLC.md` |
| Controle de Configuração | 6 | Git + Terraform | Versionamento, IaC |
| Resolução de Problemas | 7 | DefectDojo + ADO | Gestão de vulnerabilidades |
| Gestão de Riscos | Análise de Requisitos | SOP-002 | `docs/sop/SOP-002-Risk-Management.md` |
| Classificação de Software | A.4 | Class B (Risco Moderado) | Documentação do projeto |

### IEC 62366-1:2015

| Requisivo | Seção | Implementação | Evidência |
|-----------|-------|---------------|-----------|
| Análise de Usuário | 5.3 | Perfil de Usuário no ADO | Work Items com UX |
| Especificação de Usabilidade | 5.4 | Tarefas Principais | Documentado em features |
| Testes Formativos | 5.7 | Durante desenvolvimento | SOP-004 |
| Testes Somativos | 5.8 | Antes do release | SOP-004 |
| Análise de Riscos de Uso | 5.6 | uFMEA | SOP-002 |

### ISO 14971:2019

| Requisito | Seção | Implementação | Evidência |
|-----------|-------|---------------|-----------|
| Análise de Riscos | 5 | SOP-002 | `docs/sop/SOP-002-Risk-Management.md` |
| Avaliação de Riscos | 6 | RPN Calculation | Work Items no ADO |
| Controle de Riscos | 7 | Estratégias de Mitigação | SOP-002 |
| Reavaliação | 8 | Processo contínuo | SOP-002 |

### ISO/IEC 27001:2022

| Requisito | Seção | Implementação | Evidência |
|-----------|-------|---------------|-----------|
| Gestão de Vulnerabilidades | A.12.6 | SOP-003 + DefectDojo | `docs/sop/SOP-003-Vulnerability-Management.md` |
| Controle de Acesso | A.9 | Azure AD + Key Vault | Terraform IaC |
| Monitoramento | A.12.4 | Azure Sentinel | Infraestrutura |
| Resposta a Incidentes | A.5.26 | Processo DefectDojo | SOP-003 |

### RDC 657/2022 (ANVISA)

| Requisito | Artigo | Implementação | Evidência |
|-----------|--------|---------------|-----------|
| Controle de Mudanças | Art. 17 | SOP-005 | `docs/sop/SOP-005-Change-Control.md` |
| Documentação Técnica | Art. 16 | DHF | SharePoint |
| Rastreabilidade | Art. 18 | Matriz de Rastreabilidade | Gerada automaticamente |
| Gestão de Qualidade | Art. 15 | ISO 13485 | Processo completo |

### FDA 21 CFR Part 820

| Requisito | Seção | Implementação | Evidência |
|-----------|-------|---------------|-----------|
| Controle de Design | 820.30 | SDLC + SOPs | Processo completo |
| Controle de Documentação | 820.40 | Git + SharePoint | Versionamento |
| Controle de Mudanças | 820.30(i) | SOP-005 | `docs/sop/SOP-005-Change-Control.md` |
| Validação | 820.75 | SOP-004 | `docs/sop/SOP-004-Verification-Validation.md` |

## Evidências de Conformidade

### Ferramentas e Sistemas

| Sistema | Função | Evidência Armazenada |
|---------|--------|---------------------|
| **Azure DevOps** | Gestão de execução | Requisitos, código, testes, aprovações |
| **DefectDojo** | Gestão de segurança | Vulnerabilidades, scans, triagem |
| **SharePoint** | Repositório legal | DHF, documentos assinados |
| **Git** | Controle de versão | Histórico de código |
| **Terraform** | IaC | Estado de infraestrutura |

### Documentação de Processo

- `docs/PROCESS.md`: Processo integrado completo
- `docs/sop/SOP-001-SDLC.md`: Ciclo de vida de desenvolvimento
- `docs/sop/SOP-002-Risk-Management.md`: Gestão de riscos
- `docs/sop/SOP-003-Vulnerability-Management.md`: Gestão de vulnerabilidades
- `docs/sop/SOP-004-Verification-Validation.md`: Verificação e validação
- `docs/sop/SOP-005-Change-Control.md`: Controle de mudança

### Artefatos Gerados

- **DHF**: Design History File (por release)
- **Matriz de Rastreabilidade**: Requisitos → Código → Testes
- **Certificado de Segurança**: Resumo do DefectDojo
- **Análise de Riscos**: Work Items no ADO
- **Test Reports**: Azure Test Plans

## Auditoria e Revisão

### Revisões Periódicas

- **Anual**: Revisão completa do processo
- **Por Release**: Validação de conformidade
- **Contínua**: Monitoramento via DefectDojo e Sentinel

### Responsável

- **QA Leader**: Responsável pela conformidade geral
- **AppSec**: Responsável pela segurança (ISO 27001)
- **DevOps**: Responsável pela infraestrutura

## Melhorias Contínuas

O processo é revisado e atualizado conforme:
- Mudanças regulatórias
- Feedback de auditorias
- Lições aprendidas
- Melhores práticas da indústria

---

**Última Atualização**: 2024  
**Próxima Revisão**: 2025  
**Responsável**: QA Leader


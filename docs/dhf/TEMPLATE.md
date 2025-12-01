# Design History File (DHF) - nCommand Lite

**Versão**: [VERSION]  
**Data**: [DATE]  
**Projeto**: nCommand Lite (SaMD)  
**Classificação**: IEC 62304 Class B  
**Status**: [DRAFT/APPROVED]

---

## 1. Informações da Release

| Campo | Valor |
|-------|-------|
| **Versão** | [VERSION] |
| **Data de Release** | [DATE] |
| **Branch de Origem** | main |
| **Tag Git** | v[VERSION] |
| **Build ID** | [BUILD_ID] |
| **Commit SHA** | [COMMIT_SHA] |

## 2. Objetivo da Release

[Descrição do objetivo e escopo desta release]

### 2.1 Funcionalidades Incluídas

- [Lista de funcionalidades]

### 2.2 Correções Incluídas

- [Lista de correções]

## 3. Matriz de Rastreabilidade

Ver arquivo anexo: `traceability-matrix-v[VERSION].md`

### 3.1 Resumo de Cobertura

| Componente | Quantidade | Status |
|------------|------------|--------|
| Requisitos Funcionais | [N] | [%] |
| Requisitos Testados | [N] | [%] |
| Testes Unitários | [N] | 100% Pass |
| Testes de Integração | [N] | 100% Pass |
| Testes Funcionais | [N] | [X]% Pass |

## 4. Certificado de Segurança

Ver arquivo anexo: `security-certificate-v[VERSION].md`

### 4.1 Resumo de Vulnerabilidades

| Severidade | Quantidade | Status |
|------------|------------|--------|
| Crítico | 0 | ✓ |
| Alto | 0 | ✓ |
| Médio | [N] | Documentado |
| Baixo | [N] | Documentado |

### 4.2 Scans Executados

- [x] SAST: SonarCloud (Quality Gate A)
- [x] SCA: Trivy Scan
- [x] DAST: OWASP ZAP
- [x] Scan de Dependências: npm audit / pip-audit

## 5. Resultados de Testes

### 5.1 Testes Unitários

- **Ferramenta**: Jest/NUnit
- **Total de Testes**: [N]
- **Pass Rate**: 100%
- **Cobertura de Código**: [X]%

### 5.2 Testes de Integração

- **Ferramenta**: [FRAMEWORK]
- **Total de Testes**: [N]
- **Pass Rate**: 100%

### 5.3 Testes Funcionais

- **Ferramenta**: Azure Test Plans
- **Total de Casos**: [N]
- **Pass Rate**: [X]%
- **Relatório**: [LINK_TO_TEST_RUN]

### 5.4 Testes de Usabilidade (IEC 62366-1)

- **Tipo**: Testes Somativos
- **Participantes**: [N]
- **Taxa de Conclusão**: [X]%
- **Taxa de Erros Críticos**: [X]%
- **Satisfação do Usuário**: [X]/5.0

### 5.5 Testes de Performance

- [Se aplicável]

## 6. Análise de Riscos

### 6.1 Riscos Identificados e Mitigados

| ID | Tipo | Descrição | RPN Inicial | Mitigação | RPN Residual | Status |
|----|------|-----------|-------------|-----------|--------------|--------|
| [RISK-001] | Safety | [Descrição] | [N] | [Descrição] | [N] | Mitigado |
| [RISK-002] | Security | [Descrição] | [N] | [Descrição] | [N] | Mitigado |

### 6.2 Referências

- Work Items no Azure DevOps: [LINK]
- Análise de Riscos Completa: [LINK]

## 7. Mudanças de Infraestrutura

### 7.1 Estado do Terraform

- **Versão do Terraform**: [VERSION]
- **Estado**: Gerenciado via Azure Storage
- **Mudanças Aplicadas**: [SIM/NÃO]

### 7.2 Recursos Criados/Modificados

- [Lista de recursos]

## 8. Configuração de Build e Deploy

### 8.1 Pipeline de CI/CD

- **Pipeline**: Azure DevOps
- **Build ID**: [BUILD_ID]
- **Status**: [SUCCESS/FAILED]
- **Duração**: [TIME]

### 8.2 Ambientes de Deploy

- **Staging**: [STATUS]
- **Produção**: [STATUS]

## 9. Conformidade Regulatória

### 9.1 Normas Aplicáveis

- [x] ISO 13485:2016
- [x] IEC 62304:2006+A1:2015
- [x] IEC 62366-1:2015
- [x] ISO 14971:2019
- [x] ISO/IEC 27001 & 27701
- [x] RDC 657/2022 (ANVISA)
- [x] FDA 21 CFR Part 820

### 9.2 Evidências de Conformidade

- Processo de desenvolvimento: SOP-001
- Gestão de riscos: SOP-002
- Gestão de vulnerabilidades: SOP-003
- Verificação e validação: SOP-004
- Controle de mudança: SOP-005

## 10. Aprovações

### 10.1 Aprovações Obrigatórias

| Aprovador | Função | Data | Assinatura |
|-----------|--------|------|------------|
| [Nome] | QA Leader | [DATE] | [SIGNATURE] |
| [Nome] | Tech Lead | [DATE] | [SIGNATURE] |

### 10.2 Histórico de Aprovações

- [Data] - [Nome] - [Status] - [Comentários]

## 11. Referências e Artefatos

### 11.1 Documentos Relacionados

- Processo Integrado: `docs/PROCESS.md`
- SOPs: `docs/sop/`
- Azure DevOps: [LINK]
- DefectDojo: [LINK]

### 11.2 Artefatos no SharePoint

- DHF PDF: `/DHF/Version/v[VERSION]/nCommand-Lite-DHF-v[VERSION].pdf`
- Matriz de Rastreabilidade: `/DHF/Version/v[VERSION]/traceability-matrix-v[VERSION].pdf`
- Certificado de Segurança: `/DHF/Version/v[VERSION]/security-certificate-v[VERSION].pdf`

## 12. Notas e Observações

[Observações adicionais, limitações conhecidas, próximos passos, etc.]

---

**Documento gerado automaticamente** conforme SOP-005: Controle de Mudança e Configuração.  
**Repositório Legal**: SharePoint Online - `/DHF/Version/v[VERSION]/`


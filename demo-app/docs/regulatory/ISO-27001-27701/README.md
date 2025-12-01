# ISO/IEC 27001 & 27701 - Segurança da Informação e Privacidade

**Normas**: 
- ISO/IEC 27001:2022 - Information Security Management Systems
- ISO/IEC 27701:2019 - Privacy Information Management Systems

**Status**: Ativo

## Informações dos Documentos

### ISO/IEC 27001:2022
- **Código**: ISO/IEC 27001:2022
- **Versão**: 2022 (terceira edição)
- **Páginas**: ~30 páginas (requisitos) + 114 controles (ISO/IEC 27002)

### ISO/IEC 27701:2019
- **Código**: ISO/IEC 27701:2019
- **Versão**: 2019 (primeira edição)
- **Páginas**: ~70 páginas

## Referência no Projeto

**Localização**:
- SharePoint: `/Regulatory/ISO/ISO-IEC-27001-2022/`
- SharePoint: `/Regulatory/ISO/ISO-IEC-27701-2019/`
- Versão física: Biblioteca QA

**Responsável**: QA Leader / AppSec

## Escopo e Aplicabilidade

### ISO/IEC 27001
Especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um sistema de gestão de segurança da informação (SGSI).

### ISO/IEC 27701
Estende ISO/IEC 27001 e ISO/IEC 27002 com requisitos específicos para um sistema de gestão de privacidade de informações (PIMS).

## Estrutura das Normas

### ISO/IEC 27001 - Estrutura de Controles (Anexo A)

**A.5 - Políticas de Segurança**
**A.6 - Organização da Segurança da Informação**
**A.7 - Segurança de Recursos Humanos**
**A.8 - Gestão de Ativos**
**A.9 - Controles de Acesso**
**A.10 - Criptografia**
**A.11 - Segurança Física e Ambiental**
**A.12 - Segurança Operacional**
**A.13 - Segurança de Comunicações**
**A.14 - Aquisição, Desenvolvimento e Manutenção de Sistemas**
**A.15 - Relacionamento com Fornecedores**
**A.16 - Gestão de Incidentes de Segurança da Informação**
**A.17 - Aspectos de Segurança da Informação da Continuidade de Negócios**
**A.18 - Conformidade**

### ISO/IEC 27701 - Requisitos Adicionais

**PIMS-Specific Requirements Related to ISO/IEC 27001**
**PIMS-Specific Requirements Related to ISO/IEC 27002**
**Additional ISO/IEC 27002 Guidance for PII Controllers**
**Additional ISO/IEC 27002 Guidance for PII Processors**

## Mapeamento no nCommand Lite

### Controles Implementados

| Controle ISO 27001 | Implementação no Projeto | Referência |
|---------------------|--------------------------|------------|
| A.12.6 Gestão de Vulnerabilidades | DefectDojo + Pipeline | SOP-003 |
| A.9 Controle de Acesso | Azure AD + Key Vault | infrastructure/ |
| A.12.4 Monitoramento | Azure Sentinel | infrastructure/ |
| A.14 Desenvolvimento Seguro | Pre-commit hooks + SAST | SOP-001, pipelines/ |
| A.16 Gestão de Incidentes | DefectDojo workflow | SOP-003 |

### Checklist de Conformidade

**Gestão de Segurança**:
- [ ] Política de segurança da informação
- [ ] Controles de acesso implementados
- [ ] Gestão de vulnerabilidades (DefectDojo)
- [ ] Monitoramento e logging (Azure Sentinel)
- [ ] Gestão de incidentes
- [ ] Continuidade de negócios

**Privacidade (ISO 27701)**:
- [ ] Política de privacidade
- [ ] Controle de dados pessoais (LGPD/GDPR)
- [ ] Consentimento e direitos dos titulares
- [ ] Processamento de dados pessoais
- [ ] Transferências internacionais

## Documentos Relacionados

- **SOP-003**: Gestão de Vulnerabilidades e Segurança
- **infrastructure/azure/main.tf**: Controles de segurança na infraestrutura
- **pipelines/azure-pipelines.yml**: Segurança no CI/CD

## Como Adquirir

Ver `../ACCESS-GUIDE.md` para instruções de aquisição.

**Links**:
- ISO 27001: https://www.iso.org/standard/27001
- ISO 27701: https://www.iso.org/standard/71670.html
- ABNT: https://www.abnt.org.br/

## Certificação

**Status**: [A ser determinado]

- [ ] Certificação ISO 27001 planejada
- [ ] Certificação ISO 27701 planejada
- [ ] Auditorias internas realizadas
- [ ] Ações corretivas implementadas

## Atualizações e Revisões

### ISO/IEC 27001
- **2022**: Versão atual (terceira edição)
- **2013**: Edição anterior
- **Próxima revisão**: A ser determinado pela ISO

### ISO/IEC 27701
- **2019**: Versão atual (primeira edição)
- **Próxima revisão**: A ser determinado pela ISO

---

**Última Revisão**: 2024  
**Responsável**: QA Leader / AppSec


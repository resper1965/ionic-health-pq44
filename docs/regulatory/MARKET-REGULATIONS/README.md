# Regulamentações de Mercado

**Regulamentações**:
- RDC 657/2022 (ANVISA) - Software como Dispositivo Médico (SaMD)
- FDA 21 CFR Part 820 - Quality System Regulation

**Status**: Ativo

## Informações dos Documentos

### RDC 657/2022 (ANVISA)

- **Código**: RDC 657/2022
- **Título**: Dispõe sobre os requisitos para registro de Software como Dispositivo Médico
- **Data de Publicação**: 10/03/2022
- **Acesso**: Gratuito (documento público)
- **Link**: https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-657-de-10-de-marco-de-2022-386904366

### FDA 21 CFR Part 820

- **Código**: 21 CFR Part 820
- **Título**: Quality System Regulation
- **Data**: Em vigor desde 1997, com atualizações
- **Acesso**: Gratuito (documento público)
- **Link**: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820

## Referência no Projeto

**Localização**:
- SharePoint: `/Regulatory/Market-Regulations/RDC-657-2022-ANVISA/`
- SharePoint: `/Regulatory/Market-Regulations/FDA-21-CFR-Part-820/`
- Documentos públicos disponíveis online

**Responsável**: QA Leader / Regulatory Affairs

## RDC 657/2022 (ANVISA)

### Escopo

Regulamenta os requisitos para registro de Software como Dispositivo Médico (SaMD) no Brasil, incluindo:

- Classificação de risco
- Requisitos técnicos
- Documentação necessária
- Processo de registro

### Principais Requisitos

1. **Classificação de Risco**
   - Classe I, II, III ou IV
   - Baseado na classificação do Anexo VIII da RDC 185/2001

2. **Documentação Técnica**
   - Especificação técnica
   - Análise de riscos
   - Ensaios de validação
   - Documentação de software

3. **Registro**
   - Processo via portal ANVISA
   - Avaliação técnica
   - Certificado de registro

### Mapeamento no nCommand Lite

| Requisito RDC 657/2022 | Implementação | Referência |
|------------------------|---------------|------------|
| Especificação Técnica | Spec-Kit | spec-kit/ |
| Análise de Riscos | SOP-002 | ISO 14971 |
| Validação | SOP-004 | IEC 62304 |
| Documentação | DHF | SOP-005 |

### Checklist de Conformidade (ANVISA)

- [ ] Classificação de risco definida
- [ ] Documentação técnica completa
- [ ] Análise de riscos realizada (ISO 14971)
- [ ] Validação documentada
- [ ] Processo de registro iniciado
- [ ] Certificado de registro obtido (quando aplicável)

## FDA 21 CFR Part 820

### Escopo

Estabelece os requisitos do sistema de qualidade para dispositivos médicos nos EUA, incluindo:

- Controle de design
- Controle de documentos
- Controle de mudanças
- Validação

### Principais Seções

**Subpart A - General Provisions**
- Escopo
- Definições

**Subpart B - Quality System Requirements**
- Responsabilidade da direção
- Gestão de qualidade

**Subpart C - Design Controls**
- Controle de design de dispositivos

**Subpart D - Document Controls**
- Controle de documentos

**Subpart E - Purchasing Controls**
- Controle de compras

**Subpart F - Identification and Traceability**
- Identificação e rastreabilidade

**Subpart G - Production and Process Controls**
- Controles de produção

**Subpart H - Acceptance Activities**
- Atividades de aceitação

**Subpart I - Nonconforming Product**
- Produto não conforme

**Subpart J - Corrective and Preventive Action**
- Ação corretiva e preventiva

**Subpart K - Labeling and Packaging Control**
- Controle de rotulagem

**Subpart L - Handling, Storage, Distribution, and Installation**
- Manuseio, armazenamento, distribuição

**Subpart M - Records**
- Registros

**Subpart N - Servicing**
- Serviços

**Subpart O - Statistical Techniques**
- Técnicas estatísticas

### Mapeamento no nCommand Lite

| Requisito FDA 21 CFR Part 820 | Implementação | Referência |
|-------------------------------|---------------|------------|
| 820.30 Design Controls | SDLC | SOP-001 |
| 820.40 Document Controls | Git + SharePoint | SOP-001, SOP-005 |
| 820.30(i) Change Control | Change Control | SOP-005 |
| 820.75 Process Validation | V&V | SOP-004 |

### Checklist de Conformidade (FDA)

- [ ] Sistema de qualidade implementado
- [ ] Controles de design (SDLC)
- [ ] Controle de documentos
- [ ] Controle de mudanças
- [ ] Validação de processos
- [ ] Gestão de não conformidades
- [ ] Registros mantidos

## Mercados Alvo

### Brasil (ANVISA)

- **Status**: Planejamento
- **Regulamentação**: RDC 657/2022
- **Processo**: Registro ANVISA
- **Timeline**: [A ser definido]

### Estados Unidos (FDA)

- **Status**: Planejamento
- **Regulamentação**: 21 CFR Part 820
- **Processo**: 510(k) ou De Novo (se aplicável)
- **Timeline**: [A ser definido]

## Documentos Relacionados

- **COMPLIANCE-MATRIX.md**: Mapeamento completo de conformidade
- **SOP-001**: SDLC (conformidade com design controls)
- **SOP-004**: V&V (conformidade com validação)
- **SOP-005**: Change Control

## Links de Acesso

### RDC 657/2022

- Documento oficial: https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-657-de-10-de-marco-de-2022-386904366
- Portal ANVISA: https://www.gov.br/anvisa/

### FDA 21 CFR Part 820

- Documento oficial: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820
- Portal FDA: https://www.fda.gov/
- Guidance Documents: https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance

## Atualizações e Revisões

### RDC 657/2022

- **2022**: Versão atual (vigente)
- **Próxima revisão**: A ser determinado pela ANVISA

### FDA 21 CFR Part 820

- **Em vigor desde**: 1997
- **Últimas atualizações**: Contínuas via Federal Register
- **Status**: Ativo e atualizado

---

**Última Revisão**: 2024  
**Responsável**: QA Leader / Regulatory Affairs


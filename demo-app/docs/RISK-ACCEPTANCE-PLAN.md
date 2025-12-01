# Plano de Aceitação de Riscos - nCommand Lite

**Documento**: Plano de Aceitação de Riscos  
**Versão**: 1.0  
**Data**: 1/12/2025  
**Aprovado por**: QA Leader  
**Classificação**: ISO 14971:2019

## 1. Objetivo

Este documento estabelece o processo formal de aceitação de riscos no ciclo de vida do nCommand Lite, conforme ISO 14971:2019, definindo quando, como e com que documentação riscos podem ser aceitos.

## 2. Escopo

Aplica-se a todos os riscos identificados no processo de gestão de riscos:
- **Safety Risks**: Riscos de segurança do paciente
- **Security Risks**: Riscos de segurança da informação
- **Usability Risks**: Riscos de erro de uso

## 3. Princípios de Aceitação de Riscos

### 3.1 Conceitos Fundamentais

- **Risco Residual**: Risco que permanece após aplicação de medidas de mitigação
- **Aceitação de Risco**: Decisão formal de aceitar um risco residual ou não mitigado
- **Justificativa**: Documentação que fundamenta a decisão de aceitar um risco

### 3.2 Quando Riscos Podem Ser Aceitos

Riscos podem ser aceitos quando:

1. **RPN Baixo** (< 5): Riscos negligenciáveis
2. **Mitigação Inviável**: Quando medidas de mitigação não são tecnicamente ou economicamente viáveis
3. **Risco Residual Após Mitigação**: Após aplicação de todas as medidas práticas
4. **Benefícios Superam Riscos**: Análise de benefício/risco justifica aceitação
5. **Conformidade Regulatória**: Riscos dentro dos limites aceitos pela regulamentação

### 3.3 Quando Riscos NÃO Podem Ser Aceitos

Riscos NÃO podem ser aceitos quando:

- ❌ **RPN Crítico (> 50) sem justificativa excepcional**
- ❌ **Risco de Safety Catastrófico** sem mitigação
- ❌ **Violação de requisitos regulatórios**
- ❌ **Sem análise de benefício/risco documentada**

## 4. Processo de Aceitação de Riscos

### 4.1 FASE 1: Planejamento - Aceitação Inicial

**Momento**: Após análise de riscos e avaliação inicial

#### Processo

1. **Identificação e Análise**
   - Riscos identificados e RPN calculado
   - Todas as medidas de mitigação consideradas
   - Estratégias de mitigação documentadas

2. **Decisão de Aceitação**

   **Para Riscos com RPN < 5**:
   - ✅ Aceitação automática após documentação
   - Documento: Risk Acceptance Form básico
   - Aprovação: QA Leader (assinatura digital)

   **Para Riscos com RPN 5-19**:
   - ✅ Aceitação após análise de benefício/risco
   - Documento: Risk Acceptance Form completo
   - Aprovação: QA Leader + PO/Clínico

   **Para Riscos com RPN 20-50**:
   - ⚠️ Aceitação EXCEPCIONAL após justificativa robusta
   - Documento: Risk Acceptance Form + Análise Detalhada
   - Aprovação: QA Leader + PO/Clínico + Diretor Médico

   **Para Riscos com RPN > 50**:
   - ❌ **NÃO podem ser aceitos sem mitigação prévia**
   - Exceção: Apenas após mitigação parcial e análise excepcional
   - Documento: Risk Acceptance Form + Análise Excepcional + Comitê de Riscos
   - Aprovação: Comitê de Riscos (QA Leader + Diretor Médico + Regulatório)

#### Documentação Necessária

- **Risk Acceptance Form** (Template em anexo)
- **Análise de Benefício/Risco** (quando aplicável)
- **Justificativa Técnica/Clínica**
- **Work Item no Azure DevOps** atualizado com status "Accepted"
- **Link para documentos** no SharePoint

### 4.2 FASE 2: Desenvolvimento - Aceitação Durante Implementação

**Momento**: Quando novos riscos são identificados durante desenvolvimento ou quando mitigação não é totalmente efetiva

#### Processo

1. **Reavaliação de Risco**
   - Novo risco identificado OU
   - Mitigação implementada mas risco residual permanece
   - RPN recalculado

2. **Decisão de Aceitação**
   - Seguir mesmo processo da FASE 1
   - Documentar mudanças no Risk Acceptance Form
   - Atualizar Work Item no Azure DevOps

#### Documentação Adicional

- **Impact Assessment**: Impacto no escopo/timeline
- **Code Review Notes**: Comentários sobre implementação
- **Test Results**: Evidências de testes realizados

### 4.3 FASE 3: Verificação - Aceitação de Riscos Residuais

**Momento**: Após execução de scans de segurança e verificação

#### Processo

1. **Vulnerabilidades Identificadas**
   - SAST/SCA/DAST identificam vulnerabilidades
   - DefectDojo registra findings
   - Análise de severidade e impacto

2. **Decisão de Aceitação**

   **Vulnerabilidades de Baixo Risco**:
   - Aceitação após análise de impacto
   - Documento: Vulnerability Acceptance Form
   - Aprovação: AppSec + QA Leader

   **Vulnerabilidades de Médio/Alto Risco**:
   - Aceitação apenas com justificativa robusta
   - Documento: Vulnerability Acceptance Form + Análise Detalhada
   - Aprovação: AppSec + QA Leader + PO/Clínico

#### Documentação Necessária

- **Vulnerability Acceptance Form**
- **Análise de Impacto de Segurança**
- **Plano de Monitoramento** (se aplicável)
- **DefectDojo**: Finding marcado como "Risk Accepted"
- **Link para análise** no SharePoint

### 4.4 FASE 4: Validação - Aceitação Final de Riscos

**Momento**: Antes da liberação do release, revisão final de todos os riscos

#### Processo

1. **Revisão Completa de Riscos**
   - Todos os riscos documentados revisados
   - Status de mitigação verificado
   - Riscos aceitos validados

2. **Gate de Liberação**
   - ✅ Todos os riscos críticos (RPN > 50) mitigados OU aceitos formalmente
   - ✅ Todos os riscos aceitos documentados
   - ✅ Aprovações necessárias obtidas
   - ✅ Documentação completa no SharePoint

#### Documentação Necessária

- **Risk Summary Report**: Resumo de todos os riscos
- **Risk Acceptance Register**: Lista completa de riscos aceitos
- **DHF**: Seção de riscos aceitos incluída
- **Release Approval**: Aprovação final do QA Leader

### 4.5 FASE 5: Monitoramento - Reavaliação de Riscos Aceitos

**Momento**: Monitoramento contínuo e reavaliação periódica

#### Processo

1. **Monitoramento Ativo**
   - Azure Sentinel monitora incidentes
   - Vulnerabilidades novas identificadas
   - Feedback de usuários coletado

2. **Reavaliação de Riscos Aceitos**
   - Riscos aceitos podem ser reavaliados se:
     - Novo incidente relacionado ocorre
     - Novas vulnerabilidades relacionadas são identificadas
     - Análise trimestral indica necessidade
     - Feedback de mercado sugere reavaliação

3. **Reversão de Aceitação**
   - Se risco aceito se tornar inaceitável:
     - Status mudado para "Re-opened"
     - Nova análise de mitigação
     - Correção planejada conforme SLA

#### Documentação Necessária

- **Risk Reassessment Report**: Reavaliação de riscos aceitos
- **Incident Analysis**: Análise de incidentes relacionados
- **Change Request**: Se reversão de aceitação necessária

## 5. Documentação Necessária

### 5.1 Risk Acceptance Form (Template)

**Campos Obrigatórios**:

1. **Informações do Risco**
   - ID do Risco (Work Item ID)
   - Título do Risco
   - Tipo (Safety/Security/Usability)
   - Data de Identificação

2. **Análise de Risco**
   - Severidade (S): 1-5
   - Probabilidade (P): 1-5
   - Detectabilidade (D): 1-5
   - RPN: S × P × D
   - RPN Residual: (após mitigação, se aplicável)

3. **Mitigação Implementada**
   - Medidas aplicadas
   - Eficácia validada
   - Testes realizados
   - Resultados

4. **Justificativa de Aceitação**
   - Razão para aceitar o risco
   - Análise de benefício/risco
   - Alternativas consideradas
   - Por que alternativas não são viáveis

5. **Aprovações**
   - Data de aprovação
   - Aprovador(es) e assinatura digital
   - Comentários dos aprovadores

6. **Monitoramento**
   - Plano de monitoramento
   - Frequência de reavaliação
   - Critérios para reavaliação

### 5.2 Análise de Benefício/Risco

**Conteúdo Mínimo**:

1. **Descrição do Benefício**
   - Benefício clínico/funcional
   - Impacto esperado
   - Beneficiários

2. **Descrição do Risco**
   - Natureza do risco
   - Impacto potencial
   - População afetada

3. **Comparação**
   - Benefícios vs. Riscos
   - Justificativa de que benefícios superam riscos
   - Análise quantitativa/qualitativa

4. **Alternativas**
   - Outras opções consideradas
   - Por que não são viáveis
   - Análise comparativa

### 5.3 Vulnerability Acceptance Form

**Campos Obrigatórios**:

1. **Informações da Vulnerabilidade**
   - ID da Vulnerabilidade (DefectDojo)
   - Tipo (SAST/SCA/DAST)
   - Severidade
   - CVSS Score

2. **Análise de Impacto**
   - Impacto na segurança
   - Probabilidade de exploração
   - Impacto no produto

3. **Justificativa**
   - Razão para aceitar
   - Compensações implementadas
   - Plano de correção futura (se aplicável)

4. **Aprovações**
   - AppSec
   - QA Leader

### 5.4 Risk Acceptance Register

**Registro Central de Todos os Riscos Aceitos**:

| ID | Tipo | RPN | Justificativa | Aprovado por | Data | Status | Reavaliação |
|----|------|-----|---------------|--------------|------|--------|-------------|
| RISK-001 | Safety | 12 | Benefício > Risco | QA Leader | 01/12/2025 | Aceito | Trimestral |

## 6. Níveis de Aprovação

### 6.1 Matriz de Aprovação

| RPN | Tipo | Aprovação Necessária | Documentação |
|-----|------|---------------------|--------------|
| < 5 | Qualquer | QA Leader | Risk Acceptance Form básico |
| 5-19 | Safety | QA Leader + PO/Clínico | Risk Acceptance Form + Análise Benefício/Risco |
| 5-19 | Security/Usability | QA Leader | Risk Acceptance Form completo |
| 20-50 | Safety | QA Leader + PO/Clínico + Diretor Médico | Risk Acceptance Form + Análise Detalhada |
| 20-50 | Security/Usability | QA Leader + AppSec | Risk Acceptance Form + Análise Detalhada |
| > 50 | Qualquer | Comitê de Riscos | Risk Acceptance Form + Análise Excepcional |

### 6.2 Comitê de Riscos

**Composição**:
- QA Leader (presidente)
- Diretor Médico
- Regulatório/Compliance Officer
- AppSec Lead (para riscos de segurança)
- PO/Clínico (para riscos de safety)

**Responsabilidades**:
- Revisar riscos excepcionais (RPN > 50)
- Aprovar aceitação de riscos críticos
- Reavaliar riscos aceitos quando necessário
- Estabelecer políticas de aceitação

## 7. Integração no Processo

### 7.1 Azure DevOps

**Work Item Type: Risk**

**Estados**:
- New → Identificado
- Active → Em análise
- Mitigated → Mitigado
- **Accepted → Aceito** (novo estado)
- Re-opened → Reaberto após reavaliação
- Closed → Fechado após release

**Campos Adicionais**:
- `Risk Acceptance Status`: Pending / Accepted / Rejected
- `Risk Acceptance Date`: Data de aceitação
- `Risk Acceptance Justification`: Link para documento
- `Risk Acceptance Approver`: Aprovador

### 7.2 SharePoint

**Estrutura de Pastas**:

```
SharePoint/
├── Risk Management/
│   ├── Risk Acceptance Forms/
│   │   ├── RISK-001-Acceptance-Form-v1.0.pdf
│   │   └── ...
│   ├── Risk Acceptance Register/
│   │   └── Risk-Acceptance-Register-v1.0.xlsx
│   └── Risk Analysis/
│       ├── Benefit-Risk-Analysis/
│       └── Exception-Analysis/
```

### 7.3 DHF (Design History File)

**Seção Obrigatória**: "Accepted Risks"

Conteúdo:
- Lista de todos os riscos aceitos no release
- Referências aos Risk Acceptance Forms
- Resumo de justificativas
- Aprovações obtidas

## 8. Rastreabilidade

### 8.1 Links Obrigatórios

Cada risco aceito deve estar vinculado a:

- ✅ **Requisito** (Work Item relacionado)
- ✅ **Risk Acceptance Form** (SharePoint)
- ✅ **Testes** (se aplicável)
- ✅ **DHF** (no release)
- ✅ **DefectDojo** (se vulnerabilidade)

### 8.2 Matriz de Rastreabilidade

Incluir coluna "Risk Acceptance Status" na matriz:
- Mitigated
- Accepted
- Pending

## 9. Monitoramento e Reavaliação

### 9.1 Frequência de Reavaliação

- **Riscos Aceitos com RPN 20-50**: Trimestralmente
- **Riscos Aceitos com RPN > 50**: Mensalmente (até estabilização)
- **Todos os Riscos Aceitos**: Anualmente

### 9.2 Triggers para Reavaliação

- Novo incidente relacionado
- Nova vulnerabilidade relacionada
- Mudança no contexto de uso
- Feedback de mercado
- Revisão regulatória

### 9.3 Reversão de Aceitação

Se risco aceito se tornar inaceitável:

1. Status mudado para "Re-opened" no ADO
2. Nova análise de mitigação
3. Correção planejada conforme SLA
4. Documento: Risk Reassessment Report

## 10. Checklist de Aceitação de Riscos

### Antes de Aceitar um Risco

- [ ] RPN calculado corretamente
- [ ] Todas as medidas de mitigação consideradas
- [ ] Justificativa documentada
- [ ] Análise de benefício/risco (quando aplicável)
- [ ] Aprovadores identificados
- [ ] Documentação preparada

### Após Aceitar um Risco

- [ ] Risk Acceptance Form preenchido e assinado
- [ ] Work Item atualizado no Azure DevOps
- [ ] Documento salvo no SharePoint
- [ ] Risk Acceptance Register atualizado
- [ ] Links de rastreabilidade criados
- [ ] Plano de monitoramento definido

### Durante o Release

- [ ] Todos os riscos aceitos documentados no DHF
- [ ] Risk Acceptance Register incluído
- [ ] Aprovações validadas
- [ ] Rastreabilidade completa

## 11. Referências

- ISO 14971:2019 - Section 7: Risk control
- SOP-002: Gestão de Riscos
- SOP-003: Gestão de Vulnerabilidades
- SOP-004: Verificação e Validação
- SOP-005: Controle de Mudança

---

**Aprovado por**: QA Leader  
**Data de Aprovação**: 1/12/2025  
**Próxima Revisão**: Trimestral


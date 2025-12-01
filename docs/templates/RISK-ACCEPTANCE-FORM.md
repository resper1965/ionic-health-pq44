# Formulário de Aceitação de Risco

**ID do Risco**: RISK-XXX  
**Work Item ID**: [ADO Work Item ID]  
**Data**: [Data de Preenchimento]  
**Versão**: 1.0

---

## 1. Informações do Risco

| Campo | Valor |
|-------|-------|
| **ID do Risco** | RISK-XXX |
| **Título** | [Título descritivo do risco] |
| **Tipo** | ☐ Safety ☐ Security ☐ Usability |
| **Data de Identificação** | [DD/MM/YYYY] |
| **Responsável pela Identificação** | [Nome] |
| **Requisito Relacionado** | [Work Item ID] |

---

## 2. Análise de Risco

### 2.1 Avaliação Inicial

| Critério | Valor | Justificativa |
|----------|-------|---------------|
| **Severidade (S)** | [1-5] | [Descrição] |
| **Probabilidade (P)** | [1-5] | [Descrição] |
| **Detectabilidade (D)** | [1-5] | [Descrição] |
| **RPN Inicial** | [S × P × D] | |

### 2.2 Risco Residual (Após Mitigação)

| Critério | Valor | Justificativa |
|----------|-------|---------------|
| **Severidade Residual (S')** | [1-5] | [Descrição] |
| **Probabilidade Residual (P')** | [1-5] | [Descrição] |
| **Detectabilidade Residual (D')** | [1-5] | [Descrição] |
| **RPN Residual** | [S' × P' × D'] | |

---

## 3. Mitigação Implementada

### 3.1 Medidas de Mitigação

**Medida 1**: [Descrição]
- **Tipo**: ☐ Eliminação ☐ Redução ☐ Transferência
- **Implementação**: [Como foi implementado]
- **Responsável**: [Nome]
- **Data de Implementação**: [DD/MM/YYYY]

**Medida 2**: [Descrição]
- **Tipo**: ☐ Eliminação ☐ Redução ☐ Transferência
- **Implementação**: [Como foi implementado]
- **Responsável**: [Nome]
- **Data de Implementação**: [DD/MM/YYYY]

### 3.2 Validação da Mitigação

| Aspecto | Detalhes |
|---------|----------|
| **Testes Realizados** | [Lista de testes] |
| **Resultados** | [Pass/Fail com evidências] |
| **Eficácia Validada** | ☐ Sim ☐ Parcial ☐ Não |
| **Evidências** | [Links para testes/relatórios] |

---

## 4. Justificativa de Aceitação

### 4.1 Razão para Aceitar o Risco

**Justificativa Principal**:

[Explicar por que o risco está sendo aceito:
- RPN baixo suficiente para aceitação?
- Mitigação não é viável?
- Benefício supera o risco?
- Conformidade com critérios de aceitação?]

### 4.2 Análise de Benefício/Risco

**Benefícios**:
- [Benefício 1]
- [Benefício 2]
- [Benefício 3]

**Riscos**:
- [Risco 1]
- [Risco 2]
- [Risco 3]

**Comparação**:

[Explicar como os benefícios superam os riscos ou por que o risco residual é aceitável]

### 4.3 Alternativas Consideradas

| Alternativa | Viabilidade | Razão para Não Implementar |
|-------------|-------------|---------------------------|
| [Alternativa 1] | ☐ Viável ☐ Inviável | [Razão] |
| [Alternativa 2] | ☐ Viável ☐ Inviável | [Razão] |

---

## 5. Plano de Monitoramento

### 5.1 Estratégia de Monitoramento

**Métodos de Monitoramento**:
- ☐ Azure Sentinel (SIEM)
- ☐ DefectDojo
- ☐ Feedback de Usuários
- ☐ Testes Periódicos
- ☐ Análise de Logs
- ☐ Outro: [Especificar]

### 5.2 Frequência de Reavaliação

- ☐ Mensal
- ☐ Trimestral
- ☐ Semestral
- ☐ Anual
- ☐ Contínuo

### 5.3 Critérios para Reavaliação

**O risco será reavaliado se**:
- [ ] Novo incidente relacionado ocorre
- [ ] Nova vulnerabilidade relacionada identificada
- [ ] Feedback de mercado indica problema
- [ ] Contexto de uso muda
- [ ] Revisão regulatória exige

---

## 6. Aprovações

### 6.1 Aprovadores Obrigatórios

**QA Leader**:
- ☐ Aprovado
- ☐ Rejeitado
- **Nome**: ____________________
- **Data**: [DD/MM/YYYY]
- **Assinatura Digital**: [Hash/ID]
- **Comentários**: 
  
  [Comentários sobre a decisão]

**PO/Clínico** (quando aplicável):
- ☐ Aprovado
- ☐ Rejeitado
- **Nome**: ____________________
- **Data**: [DD/MM/YYYY]
- **Assinatura Digital**: [Hash/ID]
- **Comentários**: 
  
  [Comentários sobre a decisão]

**Diretor Médico** (para RPN 20-50 Safety):
- ☐ Aprovado
- ☐ Rejeitado
- **Nome**: ____________________
- **Data**: [DD/MM/YYYY]
- **Assinatura Digital**: [Hash/ID]
- **Comentários**: 
  
  [Comentários sobre a decisão]

**Comitê de Riscos** (para RPN > 50):
- ☐ Aprovado
- ☐ Rejeitado
- **Data da Reunião**: [DD/MM/YYYY]
- **Participantes**: 
  - [Nome]
  - [Nome]
  - [Nome]
- **Ata da Reunião**: [Link para documento]
- **Decisão**: 
  
  [Resumo da decisão do comitê]

---

## 7. Rastreabilidade

### 7.1 Links Obrigatórios

- **Work Item no Azure DevOps**: [Link]
- **Requisito Relacionado**: [Work Item ID]
- **Testes Relacionados**: [IDs dos testes]
- **DHF**: [Link quando incluído no release]
- **DefectDojo** (se vulnerabilidade): [Finding ID]

### 7.2 Documentos Relacionados

- **Análise de Benefício/Risco**: [Link]
- **Análise Excepcional** (se aplicável): [Link]
- **Evidências de Testes**: [Links]

---

## 8. Histórico de Revisões

| Versão | Data | Mudanças | Autor |
|--------|------|----------|-------|
| 1.0 | [DD/MM/YYYY] | Criação inicial | [Nome] |
| | | | |

---

## 9. Status Final

- ☐ **Pendente de Aprovação**
- ☐ **Aprovado**
- ☐ **Rejeitado**
- ☐ **Reavaliado**

**Data Final**: [DD/MM/YYYY]  
**Status**: [Status atual]

---

**Este formulário deve ser preenchido, assinado digitalmente e armazenado no SharePoint em:**
`/Risk Management/Risk Acceptance Forms/`

**Link para este formulário deve ser adicionado ao Work Item no Azure DevOps.**


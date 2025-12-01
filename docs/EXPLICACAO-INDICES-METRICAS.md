# Explicação Detalhada dos Índices e Métricas

**Documento**: Explicação dos Índices da Aplicação  
**Data**: 1/12/2025  
**Objetivo**: Esclarecer o significado de todos os índices apresentados na aplicação

---

## 1. Índices de Conformidade (`/conformidade`)

### 1.1 O Que Significam

Os **índices de conformidade** mostram o **percentual de requisitos regulatórios que foram implementados e comprovados** para cada norma.

### 1.2 Como São Calculados

```
Índice de Conformidade = (Requisitos Implementados / Total de Requisitos) × 100
```

**Exemplo:**
- ISO 13485:2016 tem 5 requisitos principais mapeados
- 5 requisitos estão implementados e comprovados
- **Conformidade: 95%** (alguns requisitos podem ter sub-requisitos)

### 1.3 Exemplos Práticos

#### ISO 13485:2016 - 95% Conforme

**Requisitos Mapeados:**
1. ✅ **4.2 Controle de Documentação** - Implementado via Git + SharePoint
   - Evidência: Versionamento Git, DHF no SharePoint

2. ✅ **4.2.5 Controle de Registros** - Implementado via Azure DevOps + SharePoint
   - Evidência: Work Items, Test Runs, histórico completo

3. ✅ **5.5 Responsabilidades** - Implementado via Matriz RACI
   - Evidência: Documento PROCESS.md

4. ✅ **7.5 Controle de Produto** - Implementado via Pipeline CI/CD
   - Evidência: pipelines/azure-pipelines.yml

5. ✅ **8.2 Verificação** - Implementado via Testes automatizados
   - Evidência: SOP-004-Verification-Validation.md

**Por que 95% e não 100%?**
- Alguns sub-requisitos podem estar em implementação
- Requisitos opcionais podem não se aplicar
- Requisitos futuros podem estar planejados

#### IEC 62304 - 98% Conforme

**Requisitos Mapeados:**
1. ✅ **5 Processo de Desenvolvimento** - SDLC (SOP-001)
2. ✅ **6 Controle de Configuração** - Git + Terraform
3. ✅ **7 Resolução de Problemas** - DefectDojo + ADO

**98% porque:** Processo está quase completo, alguns ajustes finais podem estar pendentes.

---

## 2. Índices de Riscos (`/riscos`)

### 2.1 O Que Significam

Os **índices de riscos** mostram:
- **Total de Riscos**: Quantos riscos foram identificados
- **Riscos Críticos**: Riscos com RPN > 50 (exigem ação imediata)
- **Mitigados**: Riscos que foram tratados e o RPN residual é aceitável
- **Aceitos**: Riscos formalmente aceitos após análise

### 2.2 RPN (Risk Priority Number)

```
RPN = Severidade × Probabilidade × Detectabilidade
```

**Escalas:**
- **Severidade**: 1-5 (1=Negligível, 5=Catastrófico)
- **Probabilidade**: 1-5 (1=Improvável, 5=Muito Provável)
- **Detectabilidade**: 1-5 (1=Detecção Certa, 5=Não Detectável)

**Exemplo:**
- Severidade: 4 (Crítico)
- Probabilidade: 2 (Remoto)
- Detectabilidade: 3 (Média)
- **RPN = 4 × 2 × 3 = 24**

### 2.3 Riscos Aceitos - Explicação Detalhada

#### RISK-004: Falha na integração com sistemas externos

**Por que foi aceito?**
- **RPN Original**: 12 (Moderado)
- **RPN Residual**: 12 (mantido após mitigação)
- **Mitigação implementada**: Monitoramento de integrações e fallback manual
- **Justificativa**: "Risco residual após mitigação aceitável. Benefício clínico supera o risco residual."
- **Aprovado por**: QA Leader + PO/Clínico
- **Data**: 15/11/2025

**O que isso significa?**
- O risco existe, mas é aceitável dado o benefício clínico
- Mitigações foram implementadas (monitoramento + fallback)
- Foi formalmente documentado e aprovado pelos responsáveis

#### RISK-005: Vulnerabilidade de baixa severidade em dependência

**Por que foi aceito?**
- **RPN Original**: 8 (Baixo)
- **RPN Residual**: 8
- **Mitigação**: Monitoramento via Trivy e atualização planejada
- **Justificativa**: "RPN baixo, impacto mínimo, atualização planejada"
- **Aprovado por**: AppSec + QA Leader
- **Data**: 1/12/2025

**O que isso significa?**
- Vulnerabilidade de baixa severidade identificada
- Atualização planejada para próxima release
- Risco aceitável no curto prazo

### 2.4 Riscos Mitigados vs Aceitos

**Mitigados (3 riscos):**
- RISK-001: RPN 24 → Residual 6 (reduzido)
- RISK-002: RPN 40 → Residual 8 (reduzido)
- RISK-003: RPN 27 → Residual 9 (reduzido)

**Aceitos (2 riscos):**
- RISK-004: RPN 12 → Residual 12 (mantido, mas aceito)
- RISK-005: RPN 8 → Residual 8 (baixo, aceito)

**Diferença:**
- **Mitigados**: RPN foi reduzido significativamente através de ações
- **Aceitos**: RPN pode ou não ter sido reduzido, mas foi formalmente aceito após análise

---

## 3. Cobertura de Riscos (`/rastreabilidade`)

### 3.1 O Que Significa

A **cobertura de riscos** mostra quantos requisitos têm análise de risco associada.

```
Cobertura de Riscos = (Requisitos com Análise de Risco / Total de Requisitos) × 100
```

### 3.2 Exemplo Atual

**Estatísticas:**
- Total de Requisitos: 12
- Requisitos com Análise de Risco: 10
- **Cobertura: 83.3%**

### 3.3 O Que Isso Significa

**10 de 12 requisitos têm análise de risco** associada:

✅ **REQ-001** (Autenticação MFA) → **RISK-001** (Falha na autenticação)
✅ **REQ-002** (Cálculo de dosagem) → **RISK-002** (Erro de cálculo)
✅ **REQ-003** (Dashboard) → **RISK-003** (Interface confusa)

**2 requisitos ainda não têm análise de risco** (17%):
- Podem ser requisitos novos
- Podem estar em análise
- Podem ser requisitos de baixo risco que não requerem análise formal

### 3.4 Por Que Isso Importa?

Conforme **ISO 14971:2019**, todos os requisitos que possam impactar segurança do paciente devem ter análise de risco. A cobertura de 83.3% indica:
- ✅ Maioria dos requisitos críticos estão cobertos
- ⚠️ Alguns requisitos podem precisar de análise de risco

---

## 4. Resumo dos Índices

### 4.1 Conformidade

| Norma | Conformidade | Significado |
|-------|--------------|-------------|
| ISO 13485 | 95% | Quase todos os requisitos implementados |
| IEC 62304 | 98% | Processo quase completo |
| ISO 14971 | 100% | Todos os riscos documentados |
| ISO 27001 | 92% | Maioria dos controles implementados |
| RDC 657/2022 | 88% | Em conformidade com regulamentação |

**Interpretação:**
- **> 95%**: Excelente conformidade
- **80-95%**: Boa conformidade, alguns ajustes
- **< 80%**: Necessita atenção

### 4.2 Riscos

| Métrica | Valor | Significado |
|---------|-------|-------------|
| Total | 5 | Cinco riscos identificados |
| Críticos (RPN > 50) | 0 | Nenhum risco crítico pendente ✅ |
| Altos (RPN 20-50) | 2 | Dois riscos altos (mitigados) |
| Mitigados | 3 | Três riscos com RPN reduzido |
| Aceitos | 2 | Dois riscos formalmente aceitos |

**Riscos Aceitos:**
1. **RISK-004**: Falha em integração (RPN 12) - Aceito por QA + Clínico
2. **RISK-005**: Vulnerabilidade baixa (RPN 8) - Aceito por AppSec + QA

### 4.3 Cobertura de Rastreabilidade

| Métrica | Valor | Significado |
|---------|-------|-------------|
| Código | 100% | Todos os requisitos têm código |
| Testes | 91.7% | Quase todos têm testes (11/12) |
| Riscos | 83.3% | Maioria tem análise de risco (10/12) |

**Gaps Identificados:**
- ⚠️ 1 requisito sem testes (8.3%)
- ⚠️ 2 requisitos sem análise de risco (16.7%)

---

## 5. Onde Ver os Detalhes

### 5.1 Conformidade
- **Página**: `/conformidade`
- **O que ver**: Expandir cada norma para ver requisitos específicos
- **Evidências**: Links diretos para documentos e sistemas

### 5.2 Riscos Aceitos
- **Página**: `/riscos` → Seção "Riscos Aceitos"
- **Página**: `/aceitacao-riscos` → Detalhes completos
- **O que ver**: Justificativas, aprovações, datas

### 5.3 Cobertura de Riscos
- **Página**: `/rastreabilidade` → Seção "Gaps de Rastreabilidade"
- **O que ver**: Quais requisitos não têm análise de risco

---

## 6. Perguntas Frequentes

### Q: Por que alguns riscos são aceitos?

**R:** Riscos são aceitos quando:
- O risco residual é aceitável após mitigação
- O benefício clínico supera o risco
- A mitigação completa não é viável ou proporcional
- Foi formalmente aprovado pelos responsáveis

### Q: 95% de conformidade é suficiente?

**R:** Depende:
- **Para auditoria**: Geralmente sim, se os requisitos críticos estão cobertos
- **Para certificação**: Pode ser necessário explicar os 5% faltantes
- **O importante**: Mostrar evidências dos requisitos implementados

### Q: Por que cobertura de riscos é 83.3% e não 100%?

**R:** 
- Alguns requisitos podem ser de baixo risco
- Requisitos novos podem estar em análise
- Alguns requisitos podem não se aplicar ao produto

### Q: Como melhorar os índices?

**R:**
1. **Conformidade**: Implementar requisitos faltantes e documentar evidências
2. **Riscos**: Reduzir RPN através de mitigações
3. **Cobertura**: Associar análise de risco aos requisitos faltantes

---

**Última Atualização**: 1/12/2025  
**Responsável**: QA Leader


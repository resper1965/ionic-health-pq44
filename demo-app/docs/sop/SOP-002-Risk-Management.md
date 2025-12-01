# SOP-002: Gestão de Riscos (ISO 14971)

**Documento**: SOP-002  
**Título**: Gestão de Riscos  
**Versão**: 1.0  
**Data**: 2024  
**Aprovado por**: QA Leader  
**Classificação**: ISO 14971:2019

## 1. Objetivo

Este procedimento estabelece a metodologia de identificação, análise, avaliação e mitigação de riscos do nCommand Lite, conforme ISO 14971:2019 e requisitos de segurança e usabilidade (IEC 62366).

## 2. Escopo

Aplica-se a todos os riscos relacionados a:
- **Safety**: Riscos de segurança do paciente
- **Security**: Riscos de segurança da informação
- **Usability**: Riscos de erro de uso

## 3. Tipos de Riscos

### 3.1 Safety Risks

Riscos que podem causar dano físico ou morte ao paciente.

**Categorias**:
- Dados incorretos exibidos
- Funcionalidade crítica indisponível
- Interpretação incorreta de dados

### 3.2 Security Risks

Riscos que podem comprometer confidencialidade, integridade ou disponibilidade dos dados.

**Categorias**:
- Acesso não autorizado
- Perda de dados
- Violação de privacidade (LGPD/GDPR)

### 3.3 Usability Risks (IEC 62366)

Riscos de erro de uso que podem levar a consequências indesejadas.

**Categorias**:
- Interface confusa
- Feedback insuficiente
- Fluxo de trabalho não intuitivo

## 4. Processo de Análise de Risco

### 4.1 Identificação

Durante a FASE 1 (Planejamento):

1. **Segurança**: Arquiteto consulta histórico do DefectDojo
2. **Usabilidade**: UX realiza análise de erro de uso (uFMEA)
3. **Safety**: QA/PO analisa impacto clínico

### 4.2 Avaliação

Para cada risco identificado, registrar:

| Critério | Descrição |
|----------|-----------|
| **Severidade (S)** | Gravidade do dano (1-5) |
| **Probabilidade (P)** | Frequência de ocorrência (1-5) |
| **Detectabilidade (D)** | Facilidade de detecção (1-5) |
| **RPN** | Risk Priority Number = S × P × D |

### 4.3 Escalas

**Severidade (S)**:
- 5: Catastrófico (morte ou dano permanente)
- 4: Crítico (lesão grave)
- 3: Moderado (lesão temporária)
- 2: Menor (desconforto)
- 1: Negligível

**Probabilidade (P)**:
- 5: Muito provável (>10%)
- 4: Provável (1-10%)
- 3: Ocasional (0.1-1%)
- 2: Remoto (0.01-0.1%)
- 1: Improvável (<0.01%)

**Detectabilidade (D)**:
- 5: Não detectável
- 4: Baixa probabilidade de detecção
- 3: Detecção moderada
- 2: Alta probabilidade de detecção
- 1: Detecção quase certa

### 4.4 Critérios de Aceitação

| RPN | Ação |
|-----|------|
| > 50 | **Crítico**: Mitigação obrigatória antes do desenvolvimento |
| 20-50 | **Alto**: Mitigação obrigatória antes do release |
| 5-19 | **Moderado**: Mitigação recomendada |
| < 5 | **Baixo**: Aceito sem mitigação |

## 5. Registro de Riscos

### 5.1 Work Items no Azure DevOps

Riscos são registrados como Work Items do tipo **Risk**, vinculados ao Requisito correspondente através do relacionamento **Mitigates**.

**Campos obrigatórios**:
- Título do Risco
- Tipo (Safety/Security/Usability)
- Severidade, Probabilidade, Detectabilidade
- RPN calculado
- Descrição do risco
- Estratégia de mitigação
- Responsável pela mitigação

### 5.2 Matriz de Rastreabilidade

Cada risco deve estar vinculado a:
- Requisito funcional
- Teste de validação
- Medida de mitigação implementada

## 6. Mitigação de Riscos

### 6.1 Estratégias de Mitigação

1. **Eliminação**: Remover o risco completamente
2. **Redução**: Diminuir severidade, probabilidade ou aumentar detectabilidade
3. **Transferência**: Terceirizar o risco (ex: seguro)
4. **Aceitação**: Aceitar o risco residual após mitigação

### 6.2 Implementação

1. Desenvolver medidas de mitigação (código, testes, documentação)
2. Validar eficácia das medidas
3. Registrar no Work Item
4. Atualizar RPN residual

### 6.3 Gate de Aprovação

**Bloqueio**: Nenhum desenvolvimento pode iniciar sem:
- Riscos críticos (RPN > 50) mitigados OU justificados
- Todos os riscos registrados no Azure DevOps
- Aprovação do QA Leader

## 7. Reavaliação de Riscos

### 7.1 Momentos de Reavaliação

- Após correção de vulnerabilidades críticas
- Após mudanças significativas no design
- Após incidentes de segurança
- Anualmente (Revisão de Riscos Pós-Mercado)

### 7.2 Processo

1. Identificar novos riscos
2. Reavaliar riscos existentes
3. Atualizar Work Items
4. Recalcular RPNs

## 8. Riscos Pós-Mercado

### 8.1 Vigilância

- Monitoramento via Azure Sentinel (SIEM)
- Análise de incidentes reportados
- Triagem de vulnerabilidades do DefectDojo

### 8.2 Resposta

Conforme SLA definido no SOP-003:
- Crítico: 24h (Hotfix)
- Alto: 7 dias

## 9. Responsabilidades

| Atividade | Responsável |
|-----------|-------------|
| Identificação de riscos | Arquiteto/UX/QA |
| Análise e cálculo RPN | QA/PO |
| Registro no Azure DevOps | QA |
| Implementação de mitigação | Dev Team |
| Aprovação de riscos | QA Leader |

## 10. Referências

- ISO 14971:2019 - Medical devices - Application of risk management to medical devices
- IEC 62366-1:2015 - Application of usability engineering to medical devices
- SOP-001: SDLC
- SOP-003: Gestão de Vulnerabilidades


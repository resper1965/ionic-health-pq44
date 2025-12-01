# Planejamento para Conformidade Total - nCommand Lite

**Documento**: Planejamento de Conformidade e Visibilidade Completa  
**Versão**: 1.0  
**Data**: 2024  
**Responsável**: QA Leader  
**Classificação**: Regulatório

## 1. Objetivo

Este documento apresenta um planejamento detalhado para garantir que a aplicação de demonstração do nCommand Lite apresente **TOTAL VISIBILIDADE E CONFORMIDADE** em relação a:

- ✅ Questões Regulatórias (ISO 13485, IEC 62304, IEC 62366-1, ISO 14971, ISO 27001/27701, RDC 657/2022, FDA 21 CFR Part 820)
- ✅ Gestão de Riscos (Safety, Security, Usability)
- ✅ Segurança da Informação (Vulnerabilidades, Compliance)
- ✅ Rastreabilidade Completa
- ✅ Evidências de Auditoria

## 2. Análise de Gaps - Estado Atual vs. Necessário

### 2.1 Páginas Existentes na Aplicação Demo

| Página | Conteúdo Atual | Status |
|--------|---------------|--------|
| `/` | Ciclo de vida completo com diagramas | ✅ Existe |
| `/automacao` | Lista de processos automatizados | ✅ Existe |
| `/documentos` | Lista de documentos por categoria | ✅ Existe |
| `/documentos/[slug]` | Visualização de documentos individuais | ✅ Existe |

### 2.2 Gaps Identificados

#### ❌ GAP 1: Página de Conformidade Regulatória Dedicada

**Problema**: Não existe uma página dedicada que mostre:
- Matriz de conformidade completa
- Status de conformidade por norma
- Links para evidências específicas
- Rastreabilidade requisito → implementação → evidência

**Impacto**: Dificulta auditorias e demonstração de conformidade

**Prioridade**: 🔴 **ALTA**

---

#### ❌ GAP 2: Dashboard de Riscos

**Problema**: Não existe visualização de:
- Riscos identificados por fase
- Status de mitigação/aceitação
- RPN por risco
- Riscos aceitos e justificativas
- Matriz de risco (Safety/Security/Usability)

**Impacto**: Sem visibilidade sobre gestão de riscos

**Prioridade**: 🔴 **ALTA**

---

#### ❌ GAP 3: Dashboard de Segurança

**Problema**: Não existe visualização de:
- Vulnerabilidades ativas (DefectDojo)
- Status de segurança por fase
- SLA de correção
- Histórico de vulnerabilidades
- Certificado de segurança

**Impacto**: Sem visibilidade sobre segurança

**Prioridade**: 🔴 **ALTA**

---

#### ❌ GAP 4: Rastreabilidade Visual

**Problema**: Não existe visualização de:
- Matriz de rastreabilidade completa (Requisito → Código → Teste → Risco)
- Links bidirecionais entre artefatos
- Cobertura de testes por requisito
- Cobertura de riscos por requisito

**Impacto**: Dificulta demonstração de rastreabilidade completa

**Prioridade**: 🟡 **MÉDIA**

---

#### ❌ GAP 5: Evidências de Auditoria Organizadas

**Problema**: Não existe uma página que organize:
- Todas as evidências por fase
- Links diretos para sistemas (Azure DevOps, DefectDojo, SharePoint)
- Checklist de evidências para auditoria
- Guia de acesso para auditores

**Impacto**: Dificulta preparação e execução de auditorias

**Prioridade**: 🟡 **MÉDIA**

---

#### ❌ GAP 6: Processo de Aceitação de Riscos Visível

**Problema**: Não existe visualização de:
- Riscos aceitos e suas justificativas
- Níveis de aprovação
- Análise de benefício/risco
- Reavaliação de riscos

**Impacto**: Sem visibilidade sobre processo de aceitação

**Prioridade**: 🔴 **ALTA**

---

#### ❌ GAP 7: Status de Conformidade por Norma

**Problema**: Não existe status visual de:
- ISO 13485: Requisitos atendidos vs. pendentes
- IEC 62304: Seções cobertas vs. pendentes
- ISO 14971: Riscos documentados vs. pendentes
- ISO 27001: Controles implementados vs. pendentes

**Impacto**: Dificulta identificação de não conformidades

**Prioridade**: 🟡 **MÉDIA**

---

#### ❌ GAP 8: Fluxos de Processo Interativos

**Problema**: Diagramas existem mas não mostram:
- Status atual de cada etapa
- Gates e bloqueios
- Evidências por etapa
- Integrações entre sistemas

**Impacto**: Dificulta compreensão do estado atual

**Prioridade**: 🟢 **BAIXA**

---

## 3. Planejamento de Implementação

### 3.1 FASE 1: Páginas Críticas de Conformidade (Prioridade ALTA)

#### Página 1: `/conformidade` - Dashboard de Conformidade Regulatória

**Objetivo**: Mostrar conformidade completa com todas as normas

**Componentes**:
1. **Matriz de Conformidade Visual**
   - Tabela interativa por norma
   - Status de cada requisito (Atendido/Parcial/Pendente)
   - Links para evidências
   - Filtros por norma, fase, status

2. **Status Geral por Norma**
   - Cards com % de conformidade
   - Indicadores visuais (vermelho/amarelo/verde)
   - Última atualização
   - Responsável

3. **Mapeamento Requisito → Implementação → Evidência**
   - Árvore visual de rastreabilidade
   - Links clicáveis para cada artefato

**Artefatos Necessários**:
- Dados estruturados de conformidade (JSON/MD)
- Componentes React para visualização
- Integração com COMPLIANCE-MATRIX.md

---

#### Página 2: `/riscos` - Dashboard de Gestão de Riscos

**Objetivo**: Visibilidade completa sobre gestão de riscos

**Componentes**:
1. **Matriz de Riscos Visual**
   - Gráfico de RPN (Severidade × Probabilidade × Detectabilidade)
   - Cores por nível de risco
   - Filtros por tipo (Safety/Security/Usability)

2. **Lista de Riscos**
   - Tabela com todos os riscos identificados
   - Status (Novo/Mitigado/Aceito/Re-aberto)
   - RPN atual e residual
   - Links para análise detalhada

3. **Riscos Aceitos**
   - Lista de riscos aceitos com justificativas
   - Nível de aprovação
   - Data de aceitação
   - Plano de reavaliação

4. **Estatísticas**
   - Total de riscos por tipo
   - Riscos críticos pendentes
   - % de riscos mitigados
   - Tendências

**Artefatos Necessários**:
- Dados estruturados de riscos (exemplo)
- Componentes React para visualização
- Integração com RISK-ACCEPTANCE-PLAN.md

---

#### Página 3: `/seguranca` - Dashboard de Segurança

**Objetivo**: Visibilidade completa sobre segurança da informação

**Componentes**:
1. **Status de Vulnerabilidades**
   - Vulnerabilidades ativas por severidade
   - Gráfico de tendências
   - SLA de correção (crítico: 24h, alto: 7d)

2. **Certificado de Segurança**
   - Status atual (Aprovado/Reprovado)
   - Contagem de vulnerabilidades por severidade
   - Data da última validação
   - Link para relatório completo

3. **Histórico de Scans**
   - Timeline de scans (SAST/SCA/DAST)
   - Findings por scan
   - Evolução ao longo do tempo

4. **Integração com DefectDojo**
   - Link direto para DefectDojo (se configurado)
   - Resumo de findings

**Artefatos Necessários**:
- Dados estruturados de segurança (exemplo)
- Componentes React para visualização
- Integração com SOP-003 e DefectDojo (se disponível)

---

#### Página 4: `/aceitacao-riscos` - Processo de Aceitação de Riscos

**Objetivo**: Visibilidade completa sobre aceitação de riscos

**Componentes**:
1. **Fluxo de Aceitação**
   - Diagrama do processo
   - Níveis de aprovação
   - Critérios por RPN

2. **Riscos Aceitos com Justificativas**
   - Lista completa de riscos aceitos
   - Formulários de aceitação (visualização)
   - Análise de benefício/risco
   - Aprovações obtidas

3. **Reavaliação de Riscos**
   - Cronograma de reavaliações
   - Riscos pendentes de reavaliação
   - Histórico de reavaliações

**Artefatos Necessários**:
- Dados estruturados de aceitação
- Componentes React para visualização
- Integração completa com RISK-ACCEPTANCE-PLAN.md

---

### 3.2 FASE 2: Páginas de Suporte (Prioridade MÉDIA)

#### Página 5: `/rastreabilidade` - Matriz de Rastreabilidade Visual

**Objetivo**: Visualização completa de rastreabilidade

**Componentes**:
1. **Árvore de Rastreabilidade**
   - Requisito → Código → Teste → Risco
   - Visualização interativa
   - Filtros e busca

2. **Cobertura de Rastreabilidade**
   - % de requisitos com código
   - % de requisitos com testes
   - % de requisitos com análise de risco
   - Gaps identificados

3. **Links Bidirecionais**
   - Navegação entre artefatos relacionados
   - Evidências vinculadas

**Artefatos Necessários**:
- Dados estruturados de rastreabilidade
- Componentes React para visualização
- Integração com matriz de rastreabilidade

---

#### Página 6: `/auditoria` - Guia de Evidências para Auditoria

**Objetivo**: Organizar todas as evidências para auditoria

**Componentes**:
1. **Evidências por Fase**
   - Checklist completo por fase
   - Links diretos para sistemas
   - Status de evidência (Disponível/Pendente)

2. **Guia de Acesso**
   - Instruções para auditores
   - Credenciais temporárias (se aplicável)
   - Links para sistemas externos

3. **Checklist Pré-Auditoria**
   - Lista de verificação
   - Status de preparação
   - Responsáveis

**Artefatos Necessários**:
- Integração com AUDIT-EVIDENCES.md
- Componentes React para visualização
- Dados estruturados de evidências

---

#### Página 7: `/status-conformidade` - Status por Norma

**Objetivo**: Status detalhado de conformidade por norma

**Componentes**:
1. **Status por Norma**
   - ISO 13485: Requisitos atendidos
   - IEC 62304: Seções cobertas
   - ISO 14971: Riscos documentados
   - ISO 27001: Controles implementados
   - Etc.

2. **Não Conformidades**
   - Lista de não conformidades identificadas
   - Plano de ação
   - Responsáveis

**Artefatos Necessários**:
- Dados estruturados de status
- Componentes React para visualização
- Integração com COMPLIANCE-MATRIX.md

---

### 3.3 FASE 3: Melhorias de Visibilidade (Prioridade BAIXA)

#### Melhoria 1: Diagramas Interativos

**Objetivo**: Tornar diagramas mais informativos

**Melhorias**:
- Status de cada etapa nos diagramas
- Indicadores de gates (aberto/fechado)
- Links para evidências por etapa
- Tooltips com informações adicionais

---

#### Melhoria 2: Navegação Aprimorada

**Objetivo**: Facilitar navegação entre páginas relacionadas

**Melhorias**:
- Menu lateral com todas as seções
- Breadcrumbs
- Links relacionados em cada página
- Busca global

---

## 4. Estrutura de Dados Necessária

### 4.1 Dados de Conformidade (`data/compliance.json`)

```json
{
  "norms": [
    {
      "id": "iso-13485",
      "name": "ISO 13485:2016",
      "compliance": 95,
      "requirements": [
        {
          "id": "iso-13485-4.2",
          "section": "4.2 Controle de Documentação",
          "status": "compliant",
          "implementation": "Git + SharePoint",
          "evidence": [
            {
              "type": "documentation",
              "location": "docs/PROCESS.md",
              "link": "/documentos/process"
            }
          ]
        }
      ]
    }
  ]
}
```

### 4.2 Dados de Riscos (`data/risks.json`)

```json
{
  "risks": [
    {
      "id": "RISK-001",
      "title": "Exemplo de Risco de Safety",
      "type": "safety",
      "severity": 4,
      "probability": 3,
      "detectability": 2,
      "rpn": 24,
      "status": "mitigated",
      "rpnResidual": 6,
      "mitigation": "Implementação de validação adicional",
      "accepted": false,
      "workItemId": "RISK-001"
    }
  ]
}
```

### 4.3 Dados de Segurança (`data/security.json`)

```json
{
  "status": "approved",
  "lastValidation": "2024-12-01",
  "vulnerabilities": {
    "critical": 0,
    "high": 0,
    "medium": 2,
    "low": 5
  },
  "certificate": {
    "valid": true,
    "expiryDate": "2025-03-01"
  }
}
```

---

## 5. Componentes React Necessários

### 5.1 Componentes de Conformidade

- `ComplianceMatrix.tsx`: Tabela de conformidade
- `NormStatusCard.tsx`: Card de status por norma
- `RequirementTraceability.tsx`: Árvore de rastreabilidade

### 5.2 Componentes de Riscos

- `RiskMatrix.tsx`: Matriz visual de riscos
- `RiskList.tsx`: Lista de riscos
- `RiskAcceptanceDetails.tsx`: Detalhes de aceitação
- `RiskStatistics.tsx`: Estatísticas

### 5.3 Componentes de Segurança

- `SecurityDashboard.tsx`: Dashboard principal
- `VulnerabilityChart.tsx`: Gráfico de vulnerabilidades
- `SecurityCertificate.tsx`: Certificado de segurança
- `ScanHistory.tsx`: Histórico de scans

---

## 6. Checklist de Implementação

### FASE 1: Páginas Críticas

- [ ] Criar página `/conformidade`
  - [ ] Implementar matriz de conformidade visual
  - [ ] Status por norma
  - [ ] Links para evidências
  
- [ ] Criar página `/riscos`
  - [ ] Matriz visual de riscos
  - [ ] Lista de riscos
  - [ ] Estatísticas
  
- [ ] Criar página `/seguranca`
  - [ ] Dashboard de vulnerabilidades
  - [ ] Certificado de segurança
  - [ ] Histórico de scans
  
- [ ] Criar página `/aceitacao-riscos`
  - [ ] Fluxo de aceitação
  - [ ] Riscos aceitos
  - [ ] Reavaliação

### FASE 2: Páginas de Suporte

- [ ] Criar página `/rastreabilidade`
- [ ] Criar página `/auditoria`
- [ ] Criar página `/status-conformidade`

### FASE 3: Melhorias

- [ ] Melhorar diagramas interativos
- [ ] Aprimorar navegação
- [ ] Adicionar busca global

---

## 7. Dados de Exemplo Necessários

Para demonstrar conformidade, precisamos criar dados de exemplo estruturados:

1. **Exemplos de Riscos**: Pelo menos 5-10 riscos de exemplo (Safety, Security, Usability)
2. **Exemplos de Conformidade**: Status de conformidade por norma
3. **Exemplos de Vulnerabilidades**: Histórico de vulnerabilidades (fictício)
4. **Exemplos de Rastreabilidade**: Links entre requisitos, código, testes, riscos

---

## 8. Documentos que Precisam Ser Acessíveis

Todos os documentos já existem, mas precisam estar:
- ✅ Acessíveis via `/documentos/[slug]`
- ✅ Links corretos na aplicação
- ✅ Formatação adequada (Markdown)

**Verificação Necessária**:
- [ ] Todos os SOPs acessíveis
- [ ] Todos os documentos regulatórios acessíveis
- [ ] Templates acessíveis
- [ ] Manuais acessíveis

---

## 9. Integrações Futuras (Opcional)

### 9.1 Integração com Azure DevOps API

**Objetivo**: Dados em tempo real de:
- Work Items (requisitos, riscos)
- Test Runs
- Pipeline status

**Complexidade**: 🟡 MÉDIA

### 9.2 Integração com DefectDojo API

**Objetivo**: Dados em tempo real de:
- Vulnerabilidades ativas
- Findings
- Status de segurança

**Complexidade**: 🟡 MÉDIA

### 9.3 Integração com SharePoint

**Objetivo**: Acesso direto a:
- DHF documents
- Risk Acceptance Forms
- Outros documentos regulatórios

**Complexidade**: 🔴 ALTA

---

## 10. Cronograma de Implementação

### Semana 1-2: FASE 1 - Páginas Críticas

- Criar estrutura de dados
- Implementar página `/conformidade`
- Implementar página `/riscos`
- Implementar página `/seguranca`
- Implementar página `/aceitacao-riscos`

### Semana 3: FASE 2 - Páginas de Suporte

- Implementar página `/rastreabilidade`
- Implementar página `/auditoria`
- Implementar página `/status-conformidade`

### Semana 4: FASE 3 - Melhorias e Testes

- Melhorar diagramas interativos
- Aprimorar navegação
- Testes e validação
- Documentação

---

## 11. Responsáveis

| Atividade | Responsável | Backup |
|-----------|-------------|--------|
| **Estrutura de Dados** | Dev Team | QA |
| **Componentes React** | Dev Team | QA |
| **Design UX** | UX Team | Dev Team |
| **Validação de Conformidade** | QA Leader | Regulatory Affairs |
| **Documentação** | QA Leader | Dev Team |

---

## 12. Critérios de Sucesso

### 12.1 Visibilidade Completa

- ✅ Todas as normas regulatórias com status visível
- ✅ Todos os riscos com status visível
- ✅ Segurança com status visível
- ✅ Rastreabilidade completa visível

### 12.2 Conformidade Demonstrada

- ✅ Cada requisito regulatório tem evidência linkada
- ✅ Cada risco tem documentação linkada
- ✅ Cada vulnerabilidade tem processo linkado
- ✅ Cada processo tem evidência linkada

### 12.3 Usabilidade

- ✅ Navegação intuitiva
- ✅ Busca funcional
- ✅ Links válidos
- ✅ Documentos renderizam corretamente

---

## 13. Próximos Passos Imediatos

1. **Revisar este planejamento** com stakeholders
2. **Priorizar** páginas críticas (FASE 1)
3. **Criar estrutura de dados** inicial
4. **Implementar primeira página** (`/conformidade`)
5. **Validar** com QA Leader
6. **Iterar** e expandir

---

**Última Atualização**: 2024  
**Próxima Revisão**: Após implementação da FASE 1  
**Responsável**: QA Leader / Dev Team


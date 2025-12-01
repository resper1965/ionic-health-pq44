# Especificação de Usabilidade - [FEATURE-ID]

**Work Item**: [WORKITEM-ID]  
**Conformidade**: IEC 62366-1:2015  
**Data de Criação**: [DATE]  
**Autor**: [AUTHOR]  
**Status**: Draft | In Review | Approved | Implemented

---

## 1. Visão Geral

### 1.1 Objetivo

[Descrição do objetivo da especificação de usabilidade]

### 1.2 Contexto Clínico

[Contexto clínico e de uso]

---

## 2. Análise de Usuário

### 2.1 Perfil de Usuário

#### Tipo de Usuário Principal

| Característica | Descrição |
|----------------|-----------|
| **Categoria** | [Médico/Enfermeiro/Técnico/Administrador] |
| **Experiência** | [Experiente/Intermediário/Iniciante] |
| **Formação** | [Descrição] |
| **Frequência de Uso** | [Diária/Semanal/Mensal] |
| **Contexto de Trabalho** | [Ambulatório/Hospital/Home Care/Emergência] |
| **Pressão Temporal** | [Alta/Média/Baixa] |
| **Dispositivo Primário** | [Desktop/Tablet/Mobile] |

#### Características Adicionais

**Habilidades Técnicas**:
- [Nível de habilidade]
- [Software conhecido]

**Características Físicas**:
- [Restrições físicas, se aplicável]

**Características Cognitivas**:
- [Limitações cognitivas, se aplicável]

### 2.2 Outros Tipos de Usuários

[Descrição de outros perfis, se aplicável]

---

## 3. Tarefas Principais (IEC 62366-1)

### 3.1 Identificação de Tarefas

| ID | Tarefa | Frequência | Criticidade | Complexidade |
|----|--------|------------|-------------|--------------|
| TASK-001 | [Descrição da tarefa] | Diária | Alta | Média |
| TASK-002 | [Descrição da tarefa] | Semanal | Média | Baixa |

### 3.2 Descrição Detalhada das Tarefas

#### TASK-001: [Título da Tarefa]

**Objetivo**: [Objetivo da tarefa]

**Contexto de Uso**:
- [Quando a tarefa é executada]
- [Condições ambientais]
- [Dispositivo usado]

**Passos Esperados**:
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

**Resultado Esperado**: [Descrição do resultado]

**Critério de Sucesso**:
- [Critério 1]
- [Critério 2]

**Tempo Estimado**: [X] minutos

### 3.3 Cenários de Uso

**Cenário 1: [Título]**

- **Usuário**: [Tipo]
- **Contexto**: [Descrição]
- **Tarefas**: [TASK-IDs]
- **Resultado Esperado**: [Descrição]

---

## 4. Análise de Erro de Uso (uFMEA)

### 4.1 Identificação de Erros Potenciais

| ID | Erro Potencial | Tarefa | Causa Provável | Consequência | Severidade (1-5) | Probabilidade (1-5) | Detectabilidade (1-5) | RPN | Status |
|----|----------------|--------|----------------|--------------|------------------|---------------------|----------------------|-----|--------|
| ERR-001 | [Descrição] | TASK-001 | [Causa] | [Consequência] | [1-5] | [1-5] | [1-5] | [N] | [Status] |

### 4.2 Descrição Detalhada dos Erros

#### ERR-001: [Título do Erro]

**Descrição**: [Descrição detalhada do erro]

**Causa Provável**: [Análise da causa]

**Consequência**:
- **Segurança do Paciente**: [Impacto]
- **Eficácia Clínica**: [Impacto]
- **Eficiência**: [Impacto]

**Severidade**: [1-5]
- 5: Catastrófico (morte ou dano permanente)
- 4: Crítico (lesão grave)
- 3: Moderado (lesão temporária)
- 2: Menor (desconforto)
- 1: Negligível

**Probabilidade**: [1-5]
- 5: Muito provável (>10%)
- 4: Provável (1-10%)
- 3: Ocasional (0.1-1%)
- 2: Remoto (0.01-0.1%)
- 1: Improvável (<0.01%)

**RPN (Risk Priority Number)**: Severidade × Probabilidade × Detectabilidade

**Estratégia de Mitigação**: [Descrição]

**Evidência de Mitigação**:
- [ ] Design implementado
- [ ] Feedback visual/auditório
- [ ] Validação de entrada
- [ ] Teste de usabilidade

**RPN Residual**: [N]

---

## 5. Especificação de Interface de Usuário

### 5.1 Princípios de Design

**Princípios Aplicados**:
- [Princípio 1]
- [Princípio 2]

**Design System**: ness. (conforme especificação)

### 5.2 Elementos de Interface

**Componentes Principais**:
- [Componente 1]: [Descrição]
- [Componente 2]: [Descrição]

**Layout**:
- [Descrição do layout]
- [Wireframes/Mockups]: [Links]

### 5.3 Feedback ao Usuário

**Feedback Visual**:
- [Tipo de feedback]
- [Quando exibir]

**Feedback Auditório**:
- [Tipo de feedback]
- [Quando exibir]

**Mensagens de Erro**:
- [Formato]
- [Conteúdo]
- [Ações sugeridas]

### 5.4 Acessibilidade

**Conformidade**:
- [ ] WCAG 2.1 Level AA
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado
- [ ] Screen reader compatibility

**Adaptações**:
- [Adaptação 1]
- [Adaptação 2]

---

## 6. Testes de Usabilidade

### 6.1 Testes Formativos (Durante Desenvolvimento)

**Objetivo**: Ajustar design antes da implementação final

**Participantes**: 3-5 usuários representativos

**Método**: [Protótipo/Mockup/Prototipo funcional]

**Métricas**:
- Taxa de conclusão de tarefas
- Tempo para completar tarefas
- Número de erros
- Satisfação subjetiva

**Critérios de Aprovação**:
- ≥ 80% de conclusão de tarefas críticas
- Tempo dentro de [X]% do tempo esperado

**Planejamento**:
- **Data**: [Data]
- **Local**: [Local]
- **Responsável**: [UX/PO]

### 6.2 Testes Somativos (Antes do Release)

**Objetivo**: Validar que produto atende aos critérios de usabilidade

**Participantes**: 8-12 usuários representativos

**Método**: [Teste com produto final]

**Tarefas Testadas**:
- [TASK-IDs]

**Métricas**:
- Taxa de conclusão de tarefas
- Taxa de erros críticos
- Tempo de tarefa
- Satisfação do usuário (SUS - System Usability Scale)

**Critérios de Aceitação**:
- Taxa de conclusão: ≥ 90%
- Taxa de erros críticos: < 5%
- Satisfação (SUS): ≥ 70 (ou equivalente 4.0/5.0)

**Planejamento**:
- **Data**: [Data]
- **Local**: [Local]
- **Responsável**: [QA]

### 6.3 Registro e Análise

**Relatório de Testes**: [Link Azure Test Plans]

**Análise de Erros**:
- [Lista de erros encontrados]
- [Análise de causas]
- [Ações corretivas]

---

## 7. Plano de Treinamento

### 7.1 Material de Treinamento

- [Material 1]
- [Material 2]

### 7.2 Suporte ao Usuário

**Documentação**:
- [Link para documentação]

**Suporte**:
- [Canais de suporte]

---

## 8. Rastreabilidade

### 8.1 Links para Artefatos

- **Work Item**: [Link Azure DevOps]
- **Feature Spec**: [Link]
- **Testes Formativos**: [Link]
- **Testes Somativos**: [Link Azure Test Plans]

### 8.2 Histórico de Mudanças

| Data | Versão | Autor | Mudança |
|------|--------|-------|---------|
| [DATE] | 1.0 | [Author] | Criação inicial |

---

## 9. Aprovações

| Aprovador | Função | Data | Assinatura |
|-----------|--------|------|------------|
| [Nome] | UX/PO | [DATE] | [ ] |
| [Nome] | QA Leader | [DATE] | [ ] |

---

**Documento gerado por**: Spec-Kit v1.0  
**Conformidade**: IEC 62366-1:2015 - Application of usability engineering to medical devices


# Especificação de Feature - Health Check Demo

**Work Item**: DEMO-001  
**Título**: Health Check Demo - Funcionalidades Básicas  
**Versão**: 1.0  
**Data de Criação**: 2024-01-XX  
**Autor**: Demo Team  
**Status**: ✅ Approved

---

## 1. Visão Geral

### 1.1 Objetivo

Desenvolver uma aplicação web demonstrativa que permite aos usuários:
- Calcular e visualizar o Índice de Massa Corporal (IMC)
- Registrar sintomas diários básicos
- Visualizar histórico de registros

Esta aplicação serve como demonstração completa do ciclo de vida regulatório de software médico.

### 1.2 Contexto

Aplicação educacional e demonstrativa para:
- Demonstrar processo completo de desenvolvimento SaMD
- Validar ferramentas e processos estabelecidos
- Servir como referência para projetos futuros

### 1.3 Escopo

**Inclui**:
- Calculadora de IMC (entrada: peso e altura)
- Registro de sintomas (texto livre)
- Visualização de histórico (gráficos simples)
- Interface web responsiva

**Não inclui**:
- Diagnóstico médico
- Recomendações clínicas
- Integração com sistemas externos
- Autenticação de usuários (versão demo)

---

## 2. Requisitos Funcionais

### 2.1 Requisitos Principais

| ID | Descrição | Prioridade | Status |
|----|-----------|------------|--------|
| REQ-001 | O sistema deve calcular o IMC a partir de peso e altura | Alta | ✅ Implementado |
| REQ-002 | O sistema deve exibir a classificação do IMC | Alta | ✅ Implementado |
| REQ-003 | O sistema deve permitir registro de sintomas | Média | ✅ Implementado |
| REQ-004 | O sistema deve exibir histórico de registros | Média | ✅ Implementado |
| REQ-005 | O sistema deve validar entrada de dados | Alta | ✅ Implementado |

### 2.2 Requisitos Detalhados

#### REQ-001: Cálculo de IMC

**Descrição**: O sistema deve calcular o Índice de Massa Corporal usando a fórmula: IMC = peso (kg) / altura (m)²

**Critérios de Aceitação**:
- [x] Aceita entrada de peso em kg (0-500)
- [x] Aceita entrada de altura em metros (0.5-2.5)
- [x] Calcula IMC corretamente
- [x] Exibe resultado com 2 casas decimais
- [x] Valida entrada numérica

**Rastreabilidade**:
- **Work Item**: DEMO-001
- **Test Case**: TC-DEMO-001-001
- **Código**: `src/components/BMICalculator.tsx`

#### REQ-002: Classificação de IMC

**Descrição**: O sistema deve classificar o IMC de acordo com tabela padrão da OMS.

**Critérios de Aceitação**:
- [x] Abaixo do peso: IMC < 18.5
- [x] Peso normal: 18.5 ≤ IMC < 25
- [x] Sobrepeso: 25 ≤ IMC < 30
- [x] Obesidade: IMC ≥ 30
- [x] Exibe classificação com cor indicativa

**Rastreabilidade**:
- **Work Item**: DEMO-001
- **Test Case**: TC-DEMO-001-002
- **Código**: `src/utils/bmi.ts`

---

## 3. Requisitos de Usabilidade (IEC 62366-1)

### 3.1 Perfil de Usuário

| Característica | Descrição |
|----------------|-----------|
| **Tipo de Usuário** | Público geral interessado em saúde |
| **Experiência** | Intermediário (uso básico de web) |
| **Contexto de Uso** | Casa, dispositivo pessoal |
| **Dispositivo** | Desktop, Tablet, Mobile |

### 3.2 Tarefas Principais

| ID | Tarefa | Frequência | Criticidade |
|----|--------|------------|-------------|
| TASK-001 | Calcular IMC | Semanal | Alta |
| TASK-002 | Registrar sintoma | Diária | Média |
| TASK-003 | Visualizar histórico | Semanal | Baixa |

### 3.3 Análise de Erro de Uso (uFMEA)

| ID | Erro Potencial | Causa Provável | Consequência | Severidade | Probabilidade | Detectabilidade | RPN | Mitigação |
|----|----------------|----------------|--------------|------------|---------------|-----------------|-----|-----------|
| ERR-001 | Entrada incorreta de altura | Confusão entre cm e m | IMC incorreto | 3 | 3 | 4 | 36 | Validação e ajuda contextual |
| ERR-002 | Valores extremos | Erro de digitação | Resultado irreal | 2 | 2 | 4 | 16 | Validação de range |
| ERR-003 | Confusão na interface | Design não intuitivo | Não uso da funcionalidade | 2 | 2 | 3 | 12 | Testes de usabilidade |

---

## 4. Análise de Riscos (ISO 14971)

### 4.1 Riscos Identificados

| ID | Tipo | Descrição | Severidade | Probabilidade | Detectabilidade | RPN | Status |
|----|------|-----------|------------|---------------|-----------------|-----|--------|
| RISK-001 | Safety | Erro no cálculo de IMC | 4 | 1 | 5 | 20 | ✅ Mitigado |
| RISK-002 | Security | Perda de dados do usuário | 3 | 2 | 4 | 24 | ✅ Mitigado |
| RISK-003 | Usability | Uso incorreto da aplicação | 2 | 3 | 3 | 18 | ✅ Mitigado |

### 4.2 Estratégias de Mitigação

#### RISK-001: Erro no Cálculo de IMC

**Mitigação**:
- Testes unitários com valores conhecidos
- Validação de entrada
- Revisão de código por pares

**Evidência de Mitigação**:
- ✅ Testes unitários: 100% pass
- ✅ Validação implementada
- ✅ RPN Residual: 5 (Baixo)

---

## 5. Especificação Técnica

### 5.1 Arquitetura

Aplicação web full-stack:
- **Frontend**: Next.js (React)
- **Backend**: Next.js API Routes
- **Storage**: LocalStorage (demo) / Database (produção)

### 5.2 Design de Dados

**Entidades**:
- BMI Record: { date, weight, height, bmi, classification }
- Symptom Record: { date, description }

### 5.3 Segurança

**Controles de Segurança**:
- ✅ Validação de entrada no cliente e servidor
- ✅ Sanitização de dados
- ✅ HTTPS obrigatório (produção)
- ✅ Logging de operações

**Compliance**:
- ✅ ISO/IEC 27001 (segurança básica)
- ✅ LGPD (dados pessoais)

---

## 6. Plano de Testes

### 6.1 Testes Unitários

| ID | Descrição | Critério de Aceitação | Status |
|----|-----------|----------------------|--------|
| UT-001 | Cálculo de IMC correto | Resultado correto para valores conhecidos | ✅ Pass |
| UT-002 | Validação de entrada | Rejeita valores inválidos | ✅ Pass |
| UT-003 | Classificação de IMC | Classifica corretamente | ✅ Pass |

### 6.2 Testes de Integração

| ID | Descrição | Critério de Aceitação | Status |
|----|-----------|----------------------|--------|
| IT-001 | Fluxo completo IMC | Entrada → Cálculo → Exibição | ✅ Pass |

---

## 7. Rastreabilidade

### 7.1 Links para Artefatos

- **Work Item**: DEMO-001
- **Branch**: `feat/DEMO-001-health-check-demo`
- **Pull Request**: PR-001
- **Test Cases**: TC-DEMO-001-001 a TC-DEMO-001-005

### 7.2 Histórico de Mudanças

| Data | Versão | Autor | Mudança |
|------|--------|-------|---------|
| 2024-01-XX | 1.0 | Demo Team | Criação inicial |

---

## 8. Aprovações

| Aprovador | Função | Data | Assinatura |
|-----------|--------|------|------------|
| QA Leader | QA Leader | 2024-01-XX | ✅ Aprovado |

---

**Documento gerado por**: Spec-Kit v1.0  
**Conformidade**: IEC 62304 Class B, ISO 13485:2016, IEC 62366-1:2015


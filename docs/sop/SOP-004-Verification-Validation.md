# SOP-004: Verificação e Validação (V&V)

**Documento**: SOP-004  
**Título**: Verificação e Validação (V&V)  
**Versão**: 1.0  
**Data**: 2024  
**Aprovado por**: QA Leader  
**Classificação**: IEC 62304, IEC 62366-1

## 1. Objetivo

Este procedimento estabelece a estratégia de testes funcionais e de usabilidade para garantir que o nCommand Lite atende aos requisitos especificados e é seguro e eficaz para uso pretendido.

## 2. Escopo

Aplica-se a:
- Testes unitários
- Testes de integração
- Testes funcionais
- Testes de usabilidade (IEC 62366)
- Testes de segurança (DAST)
- Validação pós-release

## 3. Estratégia de Testes

### 3.1 Pirâmide de Testes

```
           ┌─────────────┐
           │  E2E Tests  │  Poucos, críticos
           └─────────────┘
          ┌───────────────┐
          │ Integration   │  Alguns, integrações principais
          └───────────────┘
         ┌─────────────────┐
         │  Unit Tests     │  Muitos, cobertura alta
         └─────────────────┘
```

### 3.2 Critérios de Aceitação

| Tipo de Teste | Critério |
|---------------|----------|
| **Unit Tests** | 100% Pass Rate |
| **Code Coverage** | Mínimo 80% (crítico: 100%) |
| **Integration Tests** | 100% Pass Rate |
| **SAST (SonarCloud)** | Quality Gate A |
| **DAST (OWASP ZAP)** | Sem vulnerabilidades críticas/altas |

## 4. Testes Automatizados

### 4.1 Testes Unitários

**Ferramenta**: Jest (JavaScript/TypeScript) ou NUnit (.NET)

**Escopo**:
- Lógica de negócio
- Funções críticas
- Validações
- Transformações de dados

**Critério**: 100% Pass Rate obrigatório para merge.

### 4.2 Testes de Integração

**Ferramenta**: Framework de testes (Jest, NUnit, etc.)

**Escopo**:
- APIs e endpoints
- Integrações com serviços externos
- Fluxos de dados end-to-end

**Execução**: Pipeline CI/CD

### 4.3 Testes de Segurança (SAST)

**Ferramenta**: SonarCloud

**Critério**: Quality Gate A (Aprovado)

**Blocos**:
- Código Smell
- Bugs
- Vulnerabilidades
- Cobertura mínima

### 4.4 Testes de Segurança (DAST)

**Ferramenta**: OWASP ZAP

**Execução**: Após deploy em Staging

**Processo**:
1. ZAP ataca o ambiente
2. Relatório gerado (XML/JSON)
3. Enviado automaticamente para DefectDojo
4. Vulnerabilidades críticas/altas bloqueiam release

## 5. Testes de Usabilidade (IEC 62366-1)

### 5.1 Testes Formativos

**Quando**: Durante desenvolvimento (FASE 2)

**Responsável**: UX/PO

**Objetivo**: Ajustar design e fluxo antes da implementação final

**Processo**:
1. Protótipo criado
2. Teste com usuários (3-5 participantes)
3. Feedback registrado no Azure Boards
4. Ajustes implementados

### 5.2 Testes Somativos

**Quando**: Antes do release (FASE 4)

**Responsável**: QA

**Objetivo**: Validar que produto atende aos critérios de usabilidade

**Processo**:
1. Cenários de teste baseados em tarefas principais (IEC 62366)
2. Execução com usuários representativos (8-12 participantes)
3. Registro no Azure Test Plans
4. Análise de erros de uso (uFMEA)

**Critérios de Aceitação**:
- Taxa de conclusão de tarefas: ≥ 90%
- Taxa de erros críticos: < 5%
- Satisfação do usuário: ≥ 4.0/5.0

## 6. Testes Funcionais Manuais

### 6.1 Estratégia

**Responsável**: QA Team

**Base**: Casos de teste no Azure Test Plans vinculados a requisitos

### 6.2 Execução

1. **Testes de Fumaça**: Após cada deploy em Staging
2. **Testes de Regressão**: Antes de cada release
3. **Testes de Aceitação**: Validação final antes da liberação

### 6.3 Registro

- Casos de teste: Azure Test Plans
- Resultados: Test Runs no Azure DevOps
- Defeitos: Bugs vinculados a Test Cases

## 7. Matriz de Rastreabilidade

### 7.1 Requisitos → Testes

Cada requisito funcional deve ter:
- **No mínimo 1** caso de teste funcional
- **No mínimo 1** caso de teste de regressão
- Testes de usabilidade (se aplicável)

### 7.2 Geração Automática

Script gera matriz durante FASE 4:
- Requisito → Test Case → Resultado
- Cobertura de testes (% de requisitos testados)
- Status de validação

## 8. Gate de Liberação

### 8.1 Critérios Obrigatórios

Antes da liberação (FASE 4):

- [ ] Todos os testes unitários: 100% pass
- [ ] Cobertura de código: ≥ 80%
- [ ] Testes de integração: 100% pass
- [ ] SAST: Quality Gate A
- [ ] DAST: Sem vulnerabilidades críticas/altas
- [ ] Testes funcionais: 100% pass
- [ ] Testes de usabilidade somativos: Aprovados
- [ ] Certificado de segurança: 0 vulnerabilidades críticas/altas
- [ ] Matriz de rastreabilidade: Gerada
- [ ] DHF: Artefatos salvos no SharePoint

### 8.2 Aprovação

**Aprovador**: QA Leader

**Processo**:
1. QA Leader revisa todos os critérios
2. Aprovação digital no Azure DevOps
3. Tag de release criada: `v1.0.0`
4. Artefatos transferidos para SharePoint

## 9. Validação Pós-Release

### 9.1 Monitoramento

**FASE 5** (Monitoramento):
- Incidentes reportados
- Análise de logs (Azure Sentinel)
- Feedback de usuários

### 9.2 Ações Corretivas

Conforme SLA do SOP-003:
- Crítico: 24h (Hotfix)
- Alto: 7 dias

## 10. Responsabilidades

| Atividade | Responsável |
|-----------|-------------|
| Escrita de testes unitários | Developer |
| Execução de testes de integração | DevOps |
| Testes de usabilidade formativos | UX/PO |
| Testes de usabilidade somativos | QA |
| Testes funcionais manuais | QA |
| Execução de DAST | AppSec/DevOps |
| Aprovação de release | QA Leader |

## 11. Referências

- IEC 62304:2006+A1:2015 - Section 5: Software Development Process
- IEC 62366-1:2015 - Application of usability engineering to medical devices
- SOP-001: SDLC
- SOP-002: Gestão de Riscos
- SOP-003: Gestão de Vulnerabilidades


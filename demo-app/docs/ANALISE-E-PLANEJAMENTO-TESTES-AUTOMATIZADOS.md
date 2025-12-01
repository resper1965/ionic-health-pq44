# Análise e Planejamento: Testes E2E Automatizados (Playwright e Selenium)

**Documento**: Análise e Planejamento de Testes E2E  
**Projeto**: nCommand Lite (SaMD)  
**Data**: 2024  
**Classificação**: IEC 62304 Class B  
**Responsável**: QA Leader / DevOps Team

## 1. Objetivo

Este documento apresenta análise do processo atual e planejamento detalhado para integração de testes E2E automatizados (Playwright e Selenium) no ciclo de vida do nCommand Lite, incluindo Sanity Tests, Smoke Tests e Testes de Regressão.

## 2. Análise do Processo Atual

### 2.1 Estado Atual dos Testes

#### Testes Implementados

| Tipo de Teste | Ferramenta | Fase | Status |
|---------------|-----------|------|--------|
| **Unit Tests** | Jest/NUnit | FASE 3 | ✅ Implementado |
| **Integration Tests** | Jest/NUnit | FASE 3 | ✅ Implementado |
| **SAST** | SonarCloud | FASE 3 | ✅ Implementado |
| **SCA** | Trivy | FASE 3 | ✅ Implementado |
| **DAST** | OWASP ZAP | FASE 3 (pós-deploy) | ✅ Implementado |
| **Testes Funcionais Manuais** | Azure Test Plans | FASE 4 | ✅ Implementado |
| **Testes Usabilidade Somativos** | Azure Test Plans | FASE 4 | ✅ Implementado |
| **E2E Automatizados** | - | - | ❌ **Não implementado** |
| **Sanity Tests** | - | - | ❌ **Não implementado** |
| **Smoke Tests** | - | - | ❌ **Não implementado** |

### 2.2 Lacunas Identificadas

#### FASE 2: Desenvolvimento e Codificação
- ❌ **Sem validação E2E pré-merge**: Apenas testes unitários validam o código antes do PR
- ❌ **Sem feedback rápido de UI**: Desenvolvedores não têm feedback imediato sobre mudanças visuais

#### FASE 3: Verificação Automatizada
- ❌ **Sem testes E2E no pipeline**: Pipeline valida apenas código, não funcionalidade completa
- ❌ **Sem validação de integração frontend-backend**: Testes de integração cobrem apenas APIs

#### FASE 4: Validação e Liberação
- ⚠️ **Testes manuais demorados**: Testes funcionais manuais consomem tempo significativo
- ⚠️ **Regressão manual completa**: Testes de regressão dependem 100% de execução manual
- ❌ **Sem validação automatizada pós-deploy**: Não há validação automática após deploy em staging

#### FASE 5: Monitoramento Pós-Mercado
- ❌ **Sem monitoramento E2E contínuo**: Apenas scans de segurança, não testes funcionais

### 2.3 Impacto das Lacunas

1. **Tempo de Release**: Testes manuais aumentam tempo de ciclo
2. **Cobertura de Regressão**: Difícil garantir 100% de cobertura manual
3. **Feedback Loop**: Desenvolvedores descobrem problemas tarde no ciclo
4. **Rastreabilidade**: Dificuldade em automatizar evidências de testes funcionais
5. **Conformidade Regulatória**: IEC 62304 exige evidências de testes - automação facilita rastreabilidade

## 3. Estratégia de Testes E2E Automatizados

### 3.1 Pirâmide de Testes Atualizada

```
           ┌─────────────────────┐
           │   E2E Tests         │  Poucos, críticos (Playwright/Selenium)
           │   - Sanity Tests    │
           │   - Smoke Tests     │
           │   - Critical Paths  │
           └─────────────────────┘
          ┌─────────────────────────┐
          │ Integration Tests       │  Alguns, APIs e serviços
          └─────────────────────────┘
         ┌───────────────────────────┐
         │  Unit Tests              │  Muitos, cobertura alta
         └───────────────────────────┘
```

### 3.2 Definição de Níveis de Testes

#### 3.2.1 Sanity Tests (Testes de Sanidade)
**Objetivo**: Validar que funcionalidades críticas básicas estão funcionando após mudanças.

**Características**:
- ⏱️ **Execução**: Rápida (< 5 minutos)
- 📊 **Cobertura**: Fluxos críticos e básicos
- 🔄 **Frequência**: A cada PR, após cada deploy
- 🎯 **Escopo**: Happy path de funcionalidades essenciais

**Exemplos para nCommand Lite**:
- Login/autenticação básica
- Navegação principal (menu)
- Carregamento de página inicial
- Visualização de documento básico
- Navegação entre páginas principais

#### 3.2.2 Smoke Tests (Testes de Fumaça)
**Objetivo**: Validar que sistema básico está operacional após deploy.

**Características**:
- ⏱️ **Execução**: Muito rápida (< 2 minutos)
- 📊 **Cobertura**: Infraestrutura e endpoints críticos
- 🔄 **Frequência**: Após cada deploy (staging/prod)
- 🎯 **Escopo**: Verificação de sistema operacional

**Exemplos para nCommand Lite**:
- Aplicação responde (HTTP 200)
- Health check endpoints
- Conexão com banco de dados
- Autenticação básica funciona
- Páginas principais carregam

#### 3.2.3 E2E Tests (Testes End-to-End)
**Objetivo**: Validar fluxos completos de usuário do início ao fim.

**Características**:
- ⏱️ **Execução**: Moderada (10-30 minutos)
- 📊 **Cobertura**: Fluxos críticos de negócio
- 🔄 **Frequência**: Antes de merge em develop, antes de release
- 🎯 **Escopo**: Cenários de usuário completos

**Exemplos para nCommand Lite**:
- Fluxo completo de visualização de ciclo de vida
- Navegação completa entre todas as páginas
- Visualização de documento do início ao fim
- Interação com diagramas Mermaid
- Fluxo completo de automação

#### 3.2.4 Regression Tests (Testes de Regressão)
**Objetivo**: Validar que mudanças não quebraram funcionalidades existentes.

**Características**:
- ⏱️ **Execução**: Longa (30-60 minutos)
- 📊 **Cobertura**: Todos os fluxos principais
- 🔄 **Frequência**: Antes de release, nightly builds
- 🎯 **Escopo**: Suíte completa de testes

## 4. Decisão: Playwright vs Selenium

### 4.1 Comparação Técnica

| Critério | Playwright | Selenium |
|----------|-----------|----------|
| **Velocidade** | ⭐⭐⭐⭐⭐ Mais rápido | ⭐⭐⭐ Moderado |
| **Multi-browser** | ✅ Chrome, Firefox, Safari, Edge | ✅ Todos os browsers |
| **API Moderna** | ✅ Async/await nativo | ⚠️ Mais verboso |
| **Auto-wait** | ✅ Automático | ⚠️ Requer waits explícitos |
| **Screenshots/Video** | ✅ Nativo | ⚠️ Requer configuração |
| **Network Mocking** | ✅ Nativo | ⚠️ Limitado |
| **Trace Viewer** | ✅ Excelente debug | ❌ Não tem |
| **Maturidade** | ⭐⭐⭐⭐ Novo mas estável | ⭐⭐⭐⭐⭐ Muito maduro |
| **Comunidade** | ⭐⭐⭐⭐ Crescendo | ⭐⭐⭐⭐⭐ Gigante |
| **Curva de Aprendizado** | ⭐⭐⭐⭐ Fácil | ⭐⭐⭐ Moderada |

### 4.2 Recomendação: **Playwright** (Principal) + **Selenium** (Complementar)

#### Playwright como Ferramenta Principal
**Justificativa**:
1. ✅ **Performance**: Execução mais rápida (melhor para CI/CD)
2. ✅ **Developer Experience**: API moderna e intuitiva
3. ✅ **Auto-waits**: Reduz flakiness significativamente
4. ✅ **Built-in features**: Screenshots, vídeo, trace viewer
5. ✅ **Suporte multi-browser**: Chrome, Firefox, Safari, Edge
6. ✅ **Ideal para Next.js**: Framework moderno para aplicação moderna

#### Selenium como Ferramenta Complementar
**Justificativa**:
1. ✅ **Legacy/Browser específico**: Alguns casos podem precisar de Selenium
2. ✅ **Compatibilidade**: Máxima compatibilidade com browsers legados
3. ✅ **Conhecimento da equipe**: Se já há expertise em Selenium
4. ✅ **Ferramentas específicas**: Alguns tools podem exigir Selenium

**Estratégia Híbrida**:
- **80% Playwright**: Testes principais, novos testes
- **20% Selenium**: Casos específicos, compatibilidade legada

## 5. Integração no Processo Atual

### 5.1 FASE 2: Desenvolvimento e Codificação

#### 5.1.1 Pré-Commit (Local)

**Sanity Tests Locais**:
```yaml
Local Development:
  - Desenvolvedor roda Sanity Tests antes do commit
  - Ferramenta: Playwright (execução rápida)
  - Critério: 100% pass nos Sanity Tests
  - Feedback: Imediato no terminal
```

**Implementação**:
- Script `npm run test:sanity` (Playwright)
- Pre-commit hook opcional (não bloqueia, apenas avisa)
- Execução < 2 minutos

#### 5.1.2 Pull Request Checks

**Sanity Tests no PR**:
```yaml
PR Validation:
  - Azure DevOps Pipeline executa Sanity Tests
  - Ferramenta: Playwright (CI)
  - Critério: 100% pass
  - Bloqueio: PR não pode ser aprovado se falhar
```

**Integração no Pipeline**:
```yaml
- stage: SanityTests
  displayName: 'Sanity Tests (E2E)'
  dependsOn: BuildAndTest
  jobs:
    - job: PlaywrightSanity
      steps:
        - script: npm run test:sanity:ci
        # Gate: 100% pass obrigatório
```

### 5.2 FASE 3: Verificação Automatizada

#### 5.2.1 Após Merge em Develop

**Smoke Tests + E2E Tests**:
```yaml
Post-Merge Pipeline:
  - Deploy em Staging (automático)
  - Smoke Tests (validação básica)
  - E2E Tests (fluxos críticos)
  - Gate: Se falhar, notificar time
```

**Ordem de Execução no Pipeline**:
1. Build & Unit Tests
2. SAST (SonarCloud)
3. SCA (Trivy)
4. Security Gate (DefectDojo)
5. **Deploy Staging** ← Novo
6. **Smoke Tests** ← Novo
7. **E2E Tests (Sanity)** ← Novo
8. DAST (OWASP ZAP)
9. **E2E Tests (Regression)** ← Novo (opcional, nightly)

#### 5.2.2 Stage no Pipeline: E2E Tests

```yaml
# STAGE 7: E2E Tests (Playwright)
- stage: E2ETests
  displayName: 'Testes E2E Automatizados'
  dependsOn: DeployStaging
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/develop'))
  jobs:
    - job: PlaywrightE2E
      displayName: 'Playwright E2E Tests'
      steps:
        - task: UseNode@1
          inputs:
            version: '18.x'
        
        - script: npm ci
          displayName: 'Instalar Dependências'
        
        - script: |
            npx playwright install --with-deps
          displayName: 'Instalar Browsers Playwright'
        
        # Smoke Tests (rápido)
        - script: |
            npm run test:smoke -- --reporter=html,json
          displayName: 'Executar Smoke Tests'
          env:
            BASE_URL: $(STAGING_URL)
        
        # Sanity Tests
        - script: |
            npm run test:sanity -- --reporter=html,json
          displayName: 'Executar Sanity Tests'
          env:
            BASE_URL: $(STAGING_URL)
        
        # Publicar relatórios
        - task: PublishTestResults@2
          inputs:
            testResultsFormat: 'JUnit'
            testResultsFiles: 'playwright-report/results.xml'
        
        - task: PublishPipelineArtifact@1
          inputs:
            targetPath: 'playwright-report'
            artifact: 'playwright-e2e-report'
        
        # Gate: 100% pass nos Sanity Tests
        - script: |
            if [ $? -ne 0 ]; then
              echo "##vso[task.logissue type=error]E2E Tests falharam. Verifique relatório."
              exit 1
            fi
          displayName: 'Validar E2E Tests Pass'
```

### 5.3 FASE 4: Validação e Liberação

#### 5.3.1 Antes do Release

**Testes de Regressão Completa**:
```yaml
Pre-Release Pipeline:
  - E2E Regression Tests (suite completa)
  - Critério: 100% pass
  - Evidências: Screenshots, vídeos, relatórios
  - Integração: Azure Test Plans (vinculação automática)
```

**Fluxo**:
1. **Testes de Regressão E2E** (automatizado) ← Reduz carga de testes manuais
2. **Testes Funcionais Manuais** (casos complexos/específicos)
3. **Testes de Usabilidade Somativos** (manual - IEC 62366)
4. Gate de Liberação

#### 5.3.2 Rastreabilidade e Evidências

**Integração com Azure Test Plans**:
- E2E Tests automatizados criam Test Cases automaticamente
- Resultados vinculados a Work Items
- Screenshots e vídeos anexados aos Test Cases
- Relatórios HTML/PDF salvos no SharePoint

**Script de Integração**:
```bash
# Gerar Test Cases no Azure Test Plans a partir dos E2E Tests
npm run test:e2e:sync-ado
```

### 5.4 FASE 5: Monitoramento Pós-Mercado

#### 5.4.1 Monitoramento Contínuo

**Testes E2E Contínuos**:
```yaml
Scheduled Pipeline (Nightly):
  - Deploy em staging
  - Smoke Tests
  - E2E Regression Tests
  - Notificação se falhar
```

**Monitoramento de Produção**:
- **Smoke Tests** a cada deploy em produção
- **Health Checks E2E** (verificações básicas)
- Alertas automáticos se falhar

## 6. Estrutura de Testes Proposta

### 6.1 Organização de Arquivos

```
tests/
├── e2e/
│   ├── playwright/
│   │   ├── sanity/
│   │   │   ├── login.spec.ts
│   │   │   ├── navigation.spec.ts
│   │   │   └── basic-flow.spec.ts
│   │   ├── smoke/
│   │   │   ├── health-check.spec.ts
│   │   │   └── system-check.spec.ts
│   │   ├── regression/
│   │   │   ├── lifecycle-flow.spec.ts
│   │   │   ├── documents-flow.spec.ts
│   │   │   └── automation-flow.spec.ts
│   │   ├── fixtures/
│   │   │   └── test-data.ts
│   │   ├── pages/
│   │   │   ├── home.page.ts
│   │   │   ├── documents.page.ts
│   │   │   └── automation.page.ts
│   │   └── playwright.config.ts
│   └── selenium/
│       ├── legacy/
│       └── browser-specific/
├── unit/
└── integration/
```

### 6.2 Exemplo de Sanity Test (Playwright)

```typescript
// tests/e2e/playwright/sanity/navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Sanity Tests - Navigation', () => {
  test('should navigate through main pages', async ({ page }) => {
    // Arrange
    await page.goto(process.env.BASE_URL || 'http://localhost:3000');
    
    // Act & Assert - Home page
    await expect(page.locator('h1')).toContainText('nCommand Lite');
    
    // Navigate to Documents
    await page.click('text=Documentos');
    await expect(page).toHaveURL(/.*documentos/);
    await expect(page.locator('h1')).toContainText('Documentação');
    
    // Navigate to Automation
    await page.click('text=Automação');
    await expect(page).toHaveURL(/.*automacao/);
    await expect(page.locator('h1')).toContainText('Automação');
    
    // Navigate back to Home
    await page.click('text=Ciclo de Vida');
    await expect(page).toHaveURL('/');
  });
  
  test('should display all lifecycle phases', async ({ page }) => {
    await page.goto(process.env.BASE_URL || 'http://localhost:3000');
    
    // Verify all 5 phases are visible
    for (let i = 1; i <= 5; i++) {
      await expect(page.locator(`text=FASE ${i}:`)).toBeVisible();
    }
  });
});
```

### 6.3 Exemplo de Smoke Test

```typescript
// tests/e2e/playwright/smoke/health-check.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Smoke Tests - System Health', () => {
  test('application should load and respond', async ({ page, request }) => {
    // Check HTTP response
    const response = await request.get(process.env.BASE_URL || 'http://localhost:3000');
    expect(response.status()).toBe(200);
    
    // Check page loads
    await page.goto(process.env.BASE_URL || 'http://localhost:3000');
    await expect(page.locator('body')).toBeVisible();
  });
  
  test('critical pages should be accessible', async ({ page }) => {
    const pages = ['/', '/documentos', '/automacao'];
    
    for (const path of pages) {
      const url = `${process.env.BASE_URL || 'http://localhost:3000'}${path}`;
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);
    }
  });
});
```

## 7. Critérios de Aceitação e Gates

### 7.1 Gates por Tipo de Teste

| Tipo de Teste | Fase | Critério | Bloqueia |
|---------------|------|----------|----------|
| **Sanity Tests** | PR | 100% Pass | ✅ Sim (PR) |
| **Smoke Tests** | Deploy Staging | 100% Pass | ✅ Sim (Pipeline) |
| **E2E Tests (Sanity)** | Post-Deploy | 100% Pass | ⚠️ Aviso (não bloqueia) |
| **E2E Tests (Regression)** | Pre-Release | 100% Pass | ✅ Sim (Release) |

### 7.2 Atualização do SOP-004

**Seção 4.5: Testes E2E Automatizados (NOVO)**

```markdown
### 4.5 Testes E2E Automatizados (Playwright)

**Ferramenta**: Playwright (principal), Selenium (complementar)

**Tipos de Testes E2E**:
- **Sanity Tests**: Validação rápida de funcionalidades críticas
- **Smoke Tests**: Verificação básica de sistema operacional
- **E2E Tests**: Fluxos completos de usuário
- **Regression Tests**: Suíte completa de testes

**Execução**:
- Sanity Tests: Em cada PR (obrigatório)
- Smoke Tests: Após deploy em staging (obrigatório)
- E2E Tests: Após merge em develop
- Regression Tests: Antes de release (obrigatório)

**Critérios**:
- Sanity Tests: 100% Pass (bloqueia PR)
- Smoke Tests: 100% Pass (bloqueia pipeline)
- E2E Tests: 100% Pass (bloqueia release)

**Rastreabilidade**:
- Test Cases criados automaticamente no Azure Test Plans
- Resultados vinculados a Work Items
- Evidências (screenshots, vídeos) anexadas
```

## 8. Plano de Implementação

### 8.1 Fase 1: Setup e Infraestrutura (Semana 1-2)

**Objetivos**:
- ✅ Configurar Playwright no projeto
- ✅ Criar estrutura de diretórios
- ✅ Configurar pipeline básico
- ✅ Criar primeiro Sanity Test

**Entregas**:
- [ ] `playwright.config.ts` configurado
- [ ] Scripts npm criados (`test:sanity`, `test:smoke`, `test:e2e`)
- [ ] Stage básico no pipeline Azure DevOps
- [ ] 3-5 Sanity Tests básicos funcionando

### 8.2 Fase 2: Sanity Tests (Semana 2-3)

**Objetivos**:
- ✅ Implementar todos os Sanity Tests
- ✅ Integrar no pipeline de PR
- ✅ Documentar padrões

**Entregas**:
- [ ] 10-15 Sanity Tests implementados
- [ ] Gate de PR configurado
- [ ] Documentação de padrões de teste

### 8.3 Fase 3: Smoke Tests (Semana 3-4)

**Objetivos**:
- ✅ Implementar Smoke Tests
- ✅ Integrar no pipeline pós-deploy
- ✅ Alertas automáticos

**Entregas**:
- [ ] 5-8 Smoke Tests implementados
- [ ] Integração no pipeline de staging
- [ ] Sistema de notificações

### 8.4 Fase 4: E2E Tests e Regressão (Semana 4-6)

**Objetivos**:
- ✅ Implementar E2E Tests críticos
- ✅ Implementar Testes de Regressão
- ✅ Integrar com Azure Test Plans

**Entregas**:
- [ ] 20-30 E2E Tests implementados
- [ ] Integração com Azure Test Plans
- [ ] Relatórios automatizados

### 8.5 Fase 5: Refinamento e Documentação (Semana 6-8)

**Objetivos**:
- ✅ Otimizar performance
- ✅ Documentar processo completo
- ✅ Treinar equipe

**Entregas**:
- [ ] Documentação completa
- [ ] Treinamento da equipe
- [ ] SOP-004 atualizado

## 9. Métricas e KPIs

### 9.1 Métricas de Sucesso

| Métrica | Meta | Medição |
|---------|------|---------|
| **Cobertura E2E** | 80% dos fluxos críticos | % de requisitos com E2E Tests |
| **Tempo de Execução Sanity** | < 5 minutos | Tempo médio de execução |
| **Tempo de Execução Smoke** | < 2 minutos | Tempo médio de execução |
| **Redução de Bugs em Produção** | -30% | Comparação período anterior |
| **Tempo de Release** | -20% | Redução no ciclo de release |
| **Taxa de Sucesso E2E** | > 95% | % de execuções bem-sucedidas |

### 9.2 Rastreabilidade

- **Requisito → Test Case**: Automático via Azure Test Plans
- **Test Case → Execução**: Histórico completo no Azure DevOps
- **Execução → Evidências**: Screenshots, vídeos, logs anexados
- **Falha → Bug**: Criação automática de Bug no Azure Boards

## 10. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| **Flakiness nos testes** | Média | Alto | Auto-waits do Playwright, retry strategy |
| **Tempo de execução longo** | Baixa | Médio | Paralelização, otimização de testes |
| **Curva de aprendizado** | Média | Baixo | Documentação, treinamento, code reviews |
| **Manutenção de testes** | Alta | Médio | Page Object Model, fixtures reutilizáveis |
| **Custos de CI/CD** | Baixa | Baixo | Execução condicional, cache de dependências |

## 11. Responsabilidades

| Atividade | Responsável | Backup |
|-----------|-------------|--------|
| **Implementação inicial** | QA/DevOps | Dev Team |
| **Manutenção de testes** | QA Team | Dev Team |
| **Criação de novos testes** | Dev Team (com feature) | QA Team |
| **Configuração pipeline** | DevOps | QA Leader |
| **Aprovação de padrões** | QA Leader | Tech Lead |

## 12. Referências

- **SOP-004**: Verificação e Validação (V&V)
- **PROCESS.md**: Processo Integrado Completo
- **Playwright Documentation**: https://playwright.dev
- **Selenium Documentation**: https://www.selenium.dev
- **IEC 62304**: Section 5 - Software Development Process

---

**Última Atualização**: 2024  
**Próxima Revisão**: Após implementação da Fase 1  
**Aprovado por**: QA Leader


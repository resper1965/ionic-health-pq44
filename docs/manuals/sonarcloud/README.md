# Manual - SonarCloud

**Versão**: 1.0.0  
**Data**: 2024

## Visão Geral

SonarCloud é a ferramenta de **Análise Estática de Código (SAST)** utilizada no projeto nCommand Lite. Realiza análise contínua de qualidade e segurança do código, detectando bugs, vulnerabilidades e code smells.

**Função no Processo**: Quality Gate obrigatório no pipeline (Gate A), análise de segurança estática antes do merge.

## Configuração Inicial

### Passo 1: Criar Projeto

1. Acessar: https://sonarcloud.io
2. Login com GitHub/Microsoft account
3. Organization: `ionic-health`
4. Create New Project
5. Nome: `nCommand Lite`
6. Key: `ionic-health_ncommand-lite`
7. Visibility: Private

### Passo 2: Obter Token

1. My Account → Security → Generate Token
2. Nome: `azure-devops-pipeline`
3. Type: Global Analysis Token
4. Expires: [Definir expiração ou nunca]
5. Generate
6. **⚠️ Copiar e salvar** (não será exibido novamente)
7. Adicionar como secret no Azure DevOps: `SONARCLOUD_TOKEN`

### Passo 3: Configurar Azure DevOps

**Instalar Extensão**:

1. Azure DevOps → Organization Settings → Extensions
2. Browse Marketplace → SonarCloud
3. Install

**Criar Service Connection**:

1. Project Settings → Service connections → New service connection
2. SonarCloud
3. Organization: `ionic-health`
4. Token: Token gerado no passo 2
5. Service connection name: `SonarCloud`
6. Save

### Passo 4: Configurar Pipeline

**Adicionar Tasks ao Pipeline**:

```yaml
- task: SonarCloudPrepare@1
  inputs:
    SonarCloud: 'SonarCloud'
    organization: 'ionic-health'
    scannerMode: 'CLI'
    configMode: 'manual'
    cliProjectKey: 'ionic-health_ncommand-lite'
    cliProjectName: 'nCommand Lite'
    cliSources: 'src'

- task: SonarCloudAnalyze@1

- task: SonarCloudPublish@1
  inputs:
    pollingTimeoutSec: '300'
```

## Quality Gate

### Critérios do Quality Gate A

**Obrigatório para nCommand Lite**:

| Métrica | Critério | Status |
|---------|----------|--------|
| **Bugs** | 0 | ✅ Bloqueante |
| **Vulnerabilities** | 0 | ✅ Bloqueante |
| **Code Smells** | 0 | ✅ Bloqueante |
| **Coverage** | ≥ 80% | ✅ Bloqueante |
| **Duplicated Lines** | < 3% | ⚠️ Aviso |

### Configuração do Quality Gate

1. SonarCloud → Quality Gates → Create
2. Nome: `nCommand-Lite-Strict`
3. Configurar condições:
   - Bugs: 0
   - Vulnerabilities: 0
   - Coverage: ≥ 80%
   - Code Smells: 0
4. Set as Default para o projeto

### Bloqueio de Pipeline

**Configuração**:

O pipeline bloqueia automaticamente se Quality Gate não for A:

```yaml
- script: |
    # Verificar Quality Gate
    # Pipeline falha se gate não passar
  displayName: 'Validar Quality Gate A'
```

## Análise de Código

### O Que É Analisado

**Bugs**:
- Erros de lógica
- Null pointer exceptions
- Condições impossíveis
- Etc.

**Vulnerabilities**:
- SQL Injection
- XSS
- Insecure randomness
- Hardcoded secrets
- Etc.

**Code Smells**:
- Código duplicado
- Complexidade ciclomática alta
- Código morto
- Etc.

### Relatórios

**Dashboard Principal**:

- Overview: Métricas gerais
- Issues: Lista de problemas
- Security Hotspots: Pontos de atenção
- Code: Análise do código

**Relatórios por Pull Request**:

- Comentários automáticos no PR
- Diff analysis
- Novos issues encontrados

## Integração com Pipeline

### Execução no Pipeline

**Ordem de Execução**:

1. SonarCloudPrepare: Preparar análise
2. Build: Compilar código
3. Tests: Executar testes com cobertura
4. SonarCloudAnalyze: Analisar código
5. SonarCloudPublish: Publicar resultados
6. Verificação: Validar Quality Gate

**Condições de Falha**:

- Quality Gate ≠ A → Pipeline falha
- Novas vulnerabilidades → Pipeline falha
- Bugs críticos → Pipeline falha

### Relatórios no DefectDojo

**Integração**:

1. Pipeline executa SonarCloud
2. Gerar relatório em formato compatível
3. Script envia para DefectDojo API
4. DefectDojo processa e deduplica

**Formato**: JSON ou XML

## Configurações Específicas do Projeto

### Exclusões

**Arquivos/Pastas Excluídas**:

```
# SonarCloud Analysis Configuration
sonar.exclusions=**/node_modules/**,**/dist/**,**/build/**,**/*.test.ts,**/*.spec.ts
sonar.test.inclusions=**/*.test.ts,**/*.spec.ts
sonar.coverage.exclusions=**/*.test.ts,**/*.spec.ts,**/node_modules/**
```

**Configurar em**: `sonar-project.properties` ou via pipeline

### Regras Customizadas

**Desabilitar Regras** (se necessário):

1. SonarCloud → Rules → Search
2. Filtrar regras aplicáveis
3. Desabilitar se não aplicável ao projeto

**⚠️ Cuidado**: Desabilitar regras pode reduzir qualidade. Justificar sempre.

## Troubleshooting

### Problema: Quality Gate sempre falha

**Solução**:
- Revisar métricas no dashboard
- Corrigir bugs e vulnerabilidades
- Aumentar cobertura de testes
- Ajustar critérios se necessário (com aprovação)

### Problema: Análise muito lenta

**Solução**:
- Excluir arquivos não relevantes
- Reduzir escopo de análise
- Verificar cache do SonarCloud
- Otimizar configuração do scanner

### Problema: Falsos positivos

**Solução**:
- Adicionar comentário "NOSONAR" (esporadicamente)
- Criar issue no SonarCloud para revisar regra
- Documentar justificativa

## Boas Práticas

1. **Corrigir issues imediatamente** antes de criar novos
2. **Manter cobertura alta** (≥ 80%)
3. **Revisar Security Hotspots** prioritariamente
4. **Não desabilitar regras** sem justificativa
5. **Integrar com PRs** para feedback rápido

## Referências

- [Documentação SonarCloud](https://docs.sonarcloud.io/)
- [SonarCloud Quality Gates](https://docs.sonarcloud.io/user-guide/quality-gates/)
- Processo no projeto: `docs/PROCESS.md`
- SOP-003: `docs/sop/SOP-003-Vulnerability-Management.md`

---

**Última Atualização**: 2024  
**Responsável**: Dev Team / DevOps


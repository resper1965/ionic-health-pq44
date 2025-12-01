# Manual - OWASP DefectDojo

**Versão**: 1.0.0  
**Data**: 2024

## Visão Geral

DefectDojo é a **Fonte da Verdade de Segurança** do projeto nCommand Lite. Centraliza, deduplica e gerencia o ciclo de vida completo de todas as vulnerabilidades identificadas através de SAST, SCA e DAST.

**Função no Processo**: Gestão centralizada de vulnerabilidades, deduplicação automática, integração com pipeline e Azure DevOps.

## Arquitetura

### Como Fonte da Verdade

```
Scanners (SAST/SCA/DAST)
    ↓
DefectDojo API
    ↓
Deduplicação Automática
    ↓
Gestão de Ciclo de Vida
    ↓
Azure DevOps (Bugs)
```

## Configuração Inicial

### Passo 1: Acesso ao DefectDojo

**URL**: [Configurar conforme ambiente]

**Credenciais**:
- Usuário: [Fornecido pelo AppSec]
- Senha: [Definida no primeiro acesso]

### Passo 2: Obter API Key

1. Login no DefectDojo
2. User → API Key
3. Gerar nova API Key
4. Copiar e armazenar como secret no Azure DevOps

**⚠️ Importante**: API Key deve ser tratada como secret. Nunca commitar no código.

### Passo 3: Criar Produto

1. Products → Add Product
2. Nome: `nCommand-Lite`
3. Description: `nCommand Lite - SaMD Platform`
4. Product Type: [Selecionar tipo apropriado]
5. Lifecycle: Active
6. Save

### Passo 4: Criar Engagement

**Engagements por Tipo**:

- **Development**: Para scans durante desenvolvimento
- **Release**: Para scans pré-release
- **Production**: Para scans diários de produção

**Criar Engagement**:

1. Products → nCommand-Lite → Engagements
2. Add Engagement
3. Nome: `nCommand-Lite-develop` (ou `-release`, `-production`)
4. Engagement Type: CI/CD
5. Target Start: Data atual
6. Target End: [Data futura]
7. Save

## Integração com Pipeline

### Ingestão Automática

**Script**: `pipelines/scripts/defectdojo-ingest.sh`

**Uso no Pipeline**:

```yaml
- task: Bash@3
  inputs:
    targetType: 'inline'
    script: |
      bash pipelines/scripts/defectdojo-ingest.sh \
        --type sast \
        --file $(System.DefaultWorkingDirectory)/sonar-report.json \
        --url $(DEFECTDOJO_URL) \
        --api-key $(DEFECTDOJO_API_KEY) \
        --commit $(Build.SourceVersion) \
        --branch $(Build.SourceBranchName)
```

**Tipos de Scan Suportados**:

- `sast`: SonarCloud reports
- `sca`: Trivy reports
- `dast`: OWASP ZAP reports

### Verificação de Vulnerabilidades

**Script**: `pipelines/scripts/defectDojo-check.sh`

**Uso no Pipeline**:

```yaml
- task: Bash@3
  inputs:
    targetType: 'inline'
    script: |
      bash pipelines/scripts/defectdojo-check.sh \
        --url $(DEFECTDOJO_URL) \
        --api-key $(DEFECTDOJO_API_KEY) \
        --branch $(Build.SourceBranchName) \
        --severity-critical \
        --severity-high
```

**Gate de Bloqueio**: Pipeline falha se encontrar vulnerabilidades críticas/altas.

## Processo de Triagem

### Fluxo de Triagem

1. **Scan Executado** → Relatório enviado para DefectDojo
2. **DefectDojo Processa** → Deduplicação automática
3. **AppSec/QA Analisa** → Novos findings no DefectDojo
4. **Decisão**:
   - False Positive → Marcar como tal
   - True Positive → Push to Azure DevOps

### Triagem de Finding

#### Acessar Finding

1. DefectDojo → Findings
2. Filtrar por:
   - Engagement: `nCommand-Lite-develop`
   - Status: Active
   - Severity: Critical, High

#### Marcar False Positive

1. Abrir finding
2. Status → False Positive
3. Adicionar comentário explicando:
   - Por que é false positive
   - Contexto técnico
4. Save

#### Push to Azure DevOps

1. Abrir finding (True Positive)
2. Clicar em "Push to Azure DevOps"
3. Selecionar projeto: `nCommand-Lite`
4. DefectDojo cria Bug automaticamente:
   - Título: [Título da vulnerabilidade]
   - Descrição: Detalhes técnicos
   - Severity: Mapeada do DefectDojo
   - Vinculado ao commit/branch onde foi encontrado

## Gestão de Vulnerabilidades

### Classificação de Severidade

| Severidade DefectDojo | CVSS Score | SLA Correção |
|----------------------|------------|--------------|
| Critical | 9.0 - 10.0 | 24 horas |
| High | 7.0 - 8.9 | 7 dias |
| Medium | 4.0 - 6.9 | 30 dias |
| Low | 0.1 - 3.9 | Próxima release |

### Ciclo de Vida

1. **New**: Vulnerabilidade recém descoberta
2. **Active**: Em análise/correção
3. **Verified**: Corrigida e verificada
4. **Mitigated**: Mitigação implementada
5. **False Positive**: Não é vulnerabilidade real
6. **Out of Scope**: Fora do escopo
7. **Risk Accepted**: Risco aceito documentadamente

### Auto-Close

Quando o desenvolvedor corrige o código:

1. Pipeline executa novo scan
2. Relatório enviado para DefectDojo
3. DefectDojo compara com finding antigo
4. Se corrigido → Status muda para "Mitigated" automaticamente

## Dashboard e Relatórios

### Dashboard Principal

**Métricas Visíveis**:
- Vulnerabilidades ativas por severidade
- Vulnerabilidades por tipo de scan
- Tendências ao longo do tempo
- Engagements ativos

### Relatórios Disponíveis

1. **Executive Summary**: Resumo para gestão
2. **Security Testing**: Detalhes de testes de segurança
3. **Product Type Report**: Por tipo de produto
4. **Metrics**: Métricas detalhadas

### Certificado de Segurança

**Geração**: Durante FASE 4 (Release)

**Conteúdo**:
- Total de vulnerabilidades
- Vulnerabilidades críticas/altas: 0
- Último scan completo
- Status: Aprovado

**Uso**: Incluído no DHF

## Configurações Específicas do Projeto

### Engagements Configurados

| Engagement | Tipo | Uso |
|------------|------|-----|
| `nCommand-Lite-develop` | CI/CD | Scans durante desenvolvimento |
| `nCommand-Lite-release` | CI/CD | Scans pré-release |
| `nCommand-Lite-production` | CI/CD | Scans diários de produção |

### Notificações

**Configurar**:
1. User → Notifications
2. Configurar alertas para:
   - Novos findings críticos/altos
   - Findings próximos ao SLA
   - Engagements finalizados

## Integrações

### Com Azure DevOps

**Configuração**:

1. DefectDojo → Configuration → Tool Configurations
2. Adicionar Azure DevOps:
   - URL: `https://dev.azure.com/ionic-health`
   - Token: Personal Access Token (PAT) do Azure DevOps
   - Project: `nCommand-Lite`

**Funcionalidade**: Push to Azure DevOps cria bugs automaticamente.

### Com Scanners

**SonarCloud**:
- Scan Type: SonarQube
- Formato: JSON

**Trivy**:
- Scan Type: Trivy Scan
- Formato: JSON

**OWASP ZAP**:
- Scan Type: ZAP Scan
- Formato: JSON

## Troubleshooting

### Problema: Ingestão falha

**Solução**:
- Verificar API Key
- Verificar formato do relatório
- Verificar URL do DefectDojo
- Ver logs do pipeline

### Problema: Findings não são deduplicados

**Solução**:
- Verificar configuração de deduplicação no Engagement
- Verificar se CVE/CWE está presente
- Verificar branch/commit hash

### Problema: Push to Azure DevOps não funciona

**Solução**:
- Verificar configuração da integração
- Verificar PAT do Azure DevOps
- Verificar permissões do PAT

## Boas Práticas

1. **Triar findings rapidamente** (dentro de 24h para críticos)
2. **Documentar false positives** com justificativa clara
3. **Usar Push to Azure DevOps** para criar rastreabilidade
4. **Revisar engagements** periodicamente
5. **Monitorar SLAs** através do dashboard

## API Reference

### Endpoints Principais

**Importar Scan**:
```
POST /api/v2/import-scan/
```

**Listar Findings**:
```
GET /api/v2/findings/?engagement={id}&active=true
```

**Push to Azure DevOps**:
```
POST /api/v2/findings/{id}/push_to_azure_devops/
```

**Documentação Completa**: [DefectDojo API Docs](https://defectdojo.github.io/django-DefectDojo/integrations/api-v2-docs/)

## Referências

- [Documentação Oficial DefectDojo](https://documentation.defectdojo.com/)
- [DefectDojo API Docs](https://defectdojo.github.io/django-DefectDojo/integrations/api-v2-docs/)
- Processo no projeto: `docs/PROCESS.md`
- SOP-003: `docs/sop/SOP-003-Vulnerability-Management.md`

---

**Última Atualização**: 2024  
**Responsável**: AppSec Team


# Guia de Início Rápido - nCommand Lite

Este guia fornece instruções para começar a trabalhar no projeto nCommand Lite seguindo o processo regulatório estabelecido.

## Pré-requisitos

### Ferramentas Necessárias

- **Git**: Versionamento de código
- **Terraform** (>= 1.5.0): Infrastructure as Code
- **Node.js** (>= 18.x) ou **.NET SDK**: Depende da stack escolhida
- **Docker**: Para testes locais e scans de segurança
- **Azure CLI**: Para gerenciamento de infraestrutura (se necessário)

### Acesso Necessário

- **Azure DevOps**: Conta com acesso ao projeto nCommand Lite
- **DefectDojo**: Credenciais de API (fornecidas pelo AppSec)
- **SharePoint Online**: Acesso para DHF (fornecido pelo QA Leader)
- **Azure Subscription**: Para infraestrutura (gerenciado por DevOps)

## Configuração Inicial

### 1. Clonar o Repositório

```bash
git clone <repository-url>
cd Ionic.Health-PQ44
```

### 2. Configurar Pre-commit Hooks

```bash
# Instalar pre-commit
pip install pre-commit

# Instalar hooks
pre-commit install

# (Opcional) Executar em todos os arquivos
pre-commit run --all-files
```

### 3. Configurar Variáveis de Ambiente

Criar arquivo `.env.local` (não versionado):

```bash
# Azure DevOps
ADO_PAT=<personal-access-token>
ADO_ORG=<organization>
ADO_PROJECT=<project-name>

# DefectDojo
DEFECTDOJO_URL=https://defectdojo.example.com
DEFECTDOJO_API_KEY=<api-key>

# Azure (para Terraform)
ARM_CLIENT_ID=<service-principal-id>
ARM_CLIENT_SECRET=<service-principal-secret>
ARM_SUBSCRIPTION_ID=<subscription-id>
ARM_TENANT_ID=<tenant-id>
```

## Fluxo de Trabalho

### Iniciando uma Nova Feature

1. **Criar Work Item no Azure DevOps**
   - Tipo: User Story ou Feature
   - Definir Perfil de Usuário e Tarefas Principais (PO/UX)
   - Análise de Risco (conforme SOP-002)

2. **Criar Branch**

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feat/WORKITEM-123-description
   ```

3. **Desenvolvimento**

   - Desenvolver código seguindo padrões do projeto
   - Commits devem referenciar Work Item: `[WORKITEM-123] Description`
   - Pre-commit hooks validam automaticamente

4. **Pull Request**

   - Abrir PR para `develop`
   - **Obrigatório**: Work Item vinculado
   - Pipeline executa automaticamente
   - **Gate**: Mínimo 2 aprovações de código

### Processo de Release

Conforme **FASE 4** (Validação e Liberação):

1. **Merge em `main`**
   - Apenas após aprovação do QA Leader
   - Criar tag: `git tag -a v1.0.0 -m "Release 1.0.0"`

2. **Geração do DHF**

   ```bash
   cd pipelines/scripts
   ./generate-dhf.sh \
     --version 1.0.0 \
     --defectdojo-url $DEFECTDOJO_URL \
     --defectdojo-api-key $DEFECTDOJO_API_KEY \
     --output-dir ../../docs/dhf/releases/v1.0.0
   ```

3. **Armazenamento no SharePoint**
   - QA Leader salva PDF assinado
   - Estrutura: `/DHF/Version/v1.0.0/`

## Integrações

### Azure DevOps

- **Boards**: Gestão de requisitos e riscos
- **Repos**: Versionamento Git
- **Pipelines**: CI/CD automatizado
- **Test Plans**: Testes funcionais e usabilidade

### DefectDojo

- **API**: Integração automática via pipeline
- **Web UI**: Triagem manual de vulnerabilidades
- **Push to ADO**: Criação automática de bugs

### SharePoint Online

- **DHF**: Documentos regulatórios imutáveis
- **Acesso**: Via navegador ou API
- **Estrutura**: `/DHF/Version/v{VERSION}/`

## Troubleshooting

### Pipeline Falhando

1. **Verificar logs**: Azure DevOps → Pipelines → Build logs
2. **Vulnerabilidades**: Verificar DefectDojo
3. **Testes**: Verificar cobertura e pass rate
4. **Qualidade**: Verificar SonarCloud Quality Gate

### Pre-commit Hooks Falhando

```bash
# Executar hooks manualmente
pre-commit run --all-files

# Pular hooks (não recomendado)
git commit --no-verify
```

### Terraform Apply Falhando

1. **Verificar estado**: `terraform state list`
2. **Validar configuração**: `terraform validate`
3. **Planejar mudanças**: `terraform plan`
4. **Consultar DevOps**: Para questões de infraestrutura

## Recursos Adicionais

### Documentação

- **Processo Integrado**: `docs/PROCESS.md`
- **SOPs**: `docs/sop/`
- **IaC**: `infrastructure/azure/README.md`

### Contatos

- **QA Leader**: [email] (Aprovações e questões regulatórias)
- **AppSec/DevOps**: [email] (Segurança e infraestrutura)
- **PO/UX**: [email] (Requisitos e usabilidade)

## Próximos Passos

1. Ler `docs/PROCESS.md` para entender o processo completo
2. Revisar SOPs relevantes para sua função
3. Configurar IDE com linting e formatação
4. Participar de treinamento regulatório (conforme agendamento)

---

**Importante**: Este processo é **mandatório** para todos os colaboradores. Em caso de dúvidas, consulte o QA Leader antes de prosseguir.


# Infrastructure as Code (IaC) - nCommand Lite

Infraestrutura Azure gerenciada via Terraform conforme **SOP-005: Controle de Mudança e Configuração**.

## Princípios Fundamentais

⚠️ **PROIBIÇÃO**: Alterações manuais no Portal Azure são **proibidas**.

Toda infraestrutura deve ser:
- Definida em código (Terraform)
- Versionada no Git
- Aplicada via Pipeline
- Rastreada e auditável

## Estrutura

```
infrastructure/
├── azure/
│   ├── main.tf           # Recursos principais
│   ├── variables.tf      # Variáveis
│   ├── outputs.tf        # Outputs
│   └── README.md         # Esta documentação
```

## Uso

### Inicialização

```bash
cd infrastructure/azure
terraform init
```

### Planejamento

```bash
terraform plan -var="environment=staging"
```

### Aplicação

```bash
terraform apply -var="environment=staging"
```

## Variáveis de Ambiente

- `ARM_CLIENT_ID`: Service Principal Client ID
- `ARM_CLIENT_SECRET`: Service Principal Secret
- `ARM_SUBSCRIPTION_ID`: Azure Subscription ID
- `ARM_TENANT_ID`: Azure Tenant ID

## Processo de Mudança

Conforme SOP-005:

1. Criar Work Item "Infrastructure Change"
2. Análise de Risco (SOP-002)
3. Alterar código Terraform
4. PR com aprovação de DevOps
5. Pipeline aplica via Terraform
6. Validação do estado

## Ambientes

- **dev**: Desenvolvimento
- **staging**: Staging (pré-produção)
- **prod**: Produção

## Backend do Estado

O estado do Terraform é armazenado no Azure Storage para:
- Colaboração entre desenvolvedores
- State locking (evitar conflitos)
- Histórico de mudanças


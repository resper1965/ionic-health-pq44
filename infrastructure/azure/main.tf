# Infrastructure as Code (IaC) - nCommand Lite
# Azure Cloud - Gerenciado via Terraform
# SOP-005: Controle de Mudança e Configuração

terraform {
  required_version = ">= 1.5.0"
  
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  # Backend para armazenar estado (Azure Storage)
  backend "azurerm" {
    # Configuração via variáveis de ambiente ou backend config
    # resource_group_name  = "terraform-state-rg"
    # storage_account_name = "ncommandterrastate"
    # container_name       = "terraform-state"
    # key                  = "ncommand-lite.terraform.tfstate"
  }
}

provider "azurerm" {
  features {
    resource_group {
      prevent_deletion_if_contains_resources = false
    }
  }
}

# Variáveis
variable "environment" {
  description = "Ambiente de deploy (dev, staging, prod)"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment deve ser: dev, staging ou prod."
  }
}

variable "project_name" {
  description = "Nome do projeto"
  type        = string
  default     = "ncommand-lite"
}

variable "location" {
  description = "Região do Azure"
  type        = string
  default     = "brazilsouth"
}

# Resource Group
resource "azurerm_resource_group" "main" {
  name     = "${var.project_name}-${var.environment}-rg"
  location = var.location

  tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "Terraform"
    Compliance  = "ISO-13485-IEC-62304"
  }
}

# App Service Plan (exemplo - ajustar conforme necessidade)
resource "azurerm_service_plan" "main" {
  name                = "${var.project_name}-${var.environment}-asp"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  os_type             = "Linux"
  sku_name            = var.environment == "prod" ? "P1v3" : "B1"

  tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "Terraform"
  }
}

# Storage Account para logs e artefatos
resource "azurerm_storage_account" "logs" {
  name                     = "${replace(var.project_name, "-", "")}${var.environment}logs"
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = var.environment == "prod" ? "GRS" : "LRS"

  # Compliance e segurança
  enable_https_traffic_only = true
  min_tls_version           = "TLS1_2"

  tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "Terraform"
    Compliance  = "ISO-27001"
  }
}

# Key Vault para secrets (compliance ISO 27001)
resource "azurerm_key_vault" "main" {
  name                = "${replace(var.project_name, "-", "")}-${var.environment}-kv"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  tenant_id           = data.azurerm_client_config.current.tenant_id
  sku_name            = "standard"

  enabled_for_deployment          = true
  enabled_for_template_deployment = true
  enabled_for_disk_encryption     = true

  # Políticas de retenção e purge protection
  purge_protection_enabled = var.environment == "prod"

  tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "Terraform"
    Compliance  = "ISO-27001"
  }
}

# Log Analytics Workspace (para monitoramento e SIEM)
resource "azurerm_log_analytics_workspace" "main" {
  name                = "${var.project_name}-${var.environment}-law"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "PerGB2018"
  retention_in_days   = var.environment == "prod" ? 365 : 30

  tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "Terraform"
  }
}

# Azure Sentinel (SIEM) - apenas produção
resource "azurerm_sentinel_data_connector_azure_active_directory" "main" {
  count                      = var.environment == "prod" ? 1 : 0
  name                       = "AzureActiveDirectory"
  log_analytics_workspace_id = azurerm_log_analytics_workspace.main.id
}

# Data source para configuração atual do Azure
data "azurerm_client_config" "current" {}

# Outputs
output "resource_group_name" {
  description = "Nome do Resource Group"
  value       = azurerm_resource_group.main.name
}

output "key_vault_name" {
  description = "Nome do Key Vault"
  value       = azurerm_key_vault.main.name
}

output "log_analytics_workspace_id" {
  description = "ID do Log Analytics Workspace"
  value       = azurerm_log_analytics_workspace.main.id
}


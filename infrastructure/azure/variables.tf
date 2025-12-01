# Variáveis do Terraform - nCommand Lite

variable "environment" {
  description = "Ambiente de deploy (dev, staging, prod)"
  type        = string
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

variable "tags" {
  description = "Tags padrão para recursos"
  type        = map(string)
  default = {
    ManagedBy  = "Terraform"
    Compliance = "ISO-13485-IEC-62304"
  }
}


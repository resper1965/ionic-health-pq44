#!/bin/bash
# Validador de Especificações - Spec-Kit
# Valida estrutura e conteúdo de especificações

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contadores
ERRORS=0
WARNINGS=0

# Função de ajuda
usage() {
    echo "Uso: $0 [opções] <arquivo-spec.md>"
    echo ""
    echo "Opções:"
    echo "  --strict              Modo estrito (erros são bloqueantes)"
    echo "  --help                Mostrar esta ajuda"
    echo ""
    exit 1
}

# Função para reportar erro
report_error() {
    echo -e "${RED}✗ ERRO: $1${NC}"
    ((ERRORS++))
}

# Função para reportar warning
report_warning() {
    echo -e "${YELLOW}⚠ AVISO: $1${NC}"
    ((WARNINGS++))
}

# Função para reportar sucesso
report_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# Validar estrutura básica
validate_structure() {
    local file=$1
    local content=$(cat "$file")
    
    # Verificar se é um arquivo Markdown
    if [[ ! "$file" =~ \.md$ ]]; then
        report_error "Arquivo deve ter extensão .md"
        return 1
    fi
    
    # Verificar cabeçalho
    if ! grep -q "^# " "$file"; then
        report_error "Arquivo deve ter um cabeçalho principal (# Título)"
        return 1
    fi
    
    # Verificar campos obrigatórios
    local required_fields=(
        "Work Item"
        "Data de Criação"
        "Autor"
        "Status"
    )
    
    for field in "${required_fields[@]}"; do
        if ! grep -qi "\*\*${field}\*\*" "$file"; then
            report_error "Campo obrigatório ausente: ${field}"
        fi
    done
    
    report_success "Estrutura básica válida"
    return 0
}

# Validar Work Item ID
validate_work_item() {
    local file=$1
    
    if grep -qE '\*\*Work Item\*\*:\s*\[[A-Z]+-\d+\]' "$file"; then
        local wi_id=$(grep -oE '\[[A-Z]+-\d+\]' "$file" | head -1 | tr -d '[]')
        report_success "Work Item ID encontrado: $wi_id"
    else
        report_warning "Work Item ID não encontrado ou formato inválido"
    fi
}

# Validar se campos não estão vazios
validate_fields_filled() {
    local file=$1
    
    # Verificar se há campos com [PLACEHOLDER]
    local placeholders=$(grep -oE '\[[A-Z_]+\]' "$file" | sort -u)
    
    if [ -n "$placeholders" ]; then
        echo -e "${YELLOW}Campos não preenchidos encontrados:${NC}"
        echo "$placeholders" | sed 's/^/  - /'
        report_warning "Alguns campos ainda contêm placeholders"
    else
        report_success "Todos os campos preenchidos"
    fi
}

# Validar seções obrigatórias
validate_sections() {
    local file=$1
    local spec_type=""
    
    # Determinar tipo de spec
    if [[ "$file" =~ feature-spec ]]; then
        spec_type="feature"
    elif [[ "$file" =~ api-spec ]]; then
        spec_type="api"
    elif [[ "$file" =~ infrastructure-spec ]]; then
        spec_type="infrastructure"
    elif [[ "$file" =~ usability-spec ]]; then
        spec_type="usability"
    fi
    
    # Seções obrigatórias comuns
    local common_sections=(
        "Visão Geral"
        "Rastreabilidade"
    )
    
    # Seções específicas por tipo
    case "$spec_type" in
        feature)
            local sections=(
                "Requisitos Funcionais"
                "Análise de Riscos"
            )
            ;;
        api)
            local sections=(
                "Especificação Técnica"
                "Segurança"
            )
            ;;
        infrastructure)
            local sections=(
                "Especificação Terraform"
                "Análise de Riscos"
            )
            ;;
        usability)
            local sections=(
                "Análise de Usuário"
                "Tarefas Principais"
                "Análise de Erro de Uso"
            )
            ;;
        *)
            local sections=()
            ;;
    esac
    
    all_sections=("${common_sections[@]}" "${sections[@]}")
    
    for section in "${all_sections[@]}"; do
        if grep -qi "^##.*${section}" "$file"; then
            report_success "Seção encontrada: ${section}"
        else
            report_warning "Seção recomendada ausente: ${section}"
        fi
    done
}

# Validar conformidade regulatória
validate_regulatory() {
    local file=$1
    
    # Verificar se menciona conformidade
    if grep -qiE "(IEC 62304|ISO 13485|IEC 62366)" "$file"; then
        report_success "Conformidade regulatória mencionada"
    else
        report_warning "Conformidade regulatória não mencionada"
    fi
}

# Função principal de validação
validate_specification() {
    local file=$1
    
    if [ ! -f "$file" ]; then
        report_error "Arquivo não encontrado: $file"
        return 1
    fi
    
    echo -e "${YELLOW}Validando especificação: $file${NC}"
    echo ""
    
    # Executar validações
    validate_structure "$file"
    validate_work_item "$file"
    validate_fields_filled "$file"
    validate_sections "$file"
    validate_regulatory "$file"
    
    echo ""
    echo "---"
    echo "Resumo da Validação:"
    echo "  Erros: $ERRORS"
    echo "  Avisos: $WARNINGS"
    
    if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
        echo -e "${GREEN}✓ Especificação válida!${NC}"
        return 0
    elif [ $ERRORS -eq 0 ]; then
        echo -e "${YELLOW}⚠ Especificação válida com avisos${NC}"
        return 0
    else
        echo -e "${RED}✗ Especificação inválida${NC}"
        if [ "$STRICT_MODE" = "true" ]; then
            return 1
        fi
        return 0
    fi
}

# Parse de argumentos
STRICT_MODE=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --strict)
            STRICT_MODE=true
            shift
            ;;
        --help)
            usage
            ;;
        -*)
            echo -e "${RED}Opção desconhecida: $1${NC}"
            usage
            ;;
        *)
            SPEC_FILE=$1
            shift
            ;;
    esac
done

# Validar arquivo fornecido
if [ -z "$SPEC_FILE" ]; then
    echo -e "${RED}Erro: Arquivo de especificação não fornecido${NC}"
    usage
fi

# Executar validação
validate_specification "$SPEC_FILE"

exit_code=0
if [ $ERRORS -gt 0 ] && [ "$STRICT_MODE" = "true" ]; then
    exit_code=1
fi

exit $exit_code


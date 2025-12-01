#!/bin/bash
# Gerador de Especificações - Spec-Kit
# Gera especificações baseadas em templates

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Diretórios
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SPEC_KIT_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATES_DIR="$SPEC_KIT_DIR/templates"
SPECS_DIR="$SPEC_KIT_DIR/specs"

# Função de ajuda
usage() {
    echo "Uso: $0 [opções]"
    echo ""
    echo "Opções:"
    echo "  --type TYPE              Tipo de especificação (feature|api|infrastructure|usability)"
    echo "  --workitem ID            ID do Work Item do Azure DevOps"
    echo "  --title TITLE            Título da especificação"
    echo "  --author AUTHOR          Autor da especificação"
    echo "  --output-dir DIR         Diretório de saída (padrão: specs/)"
    echo "  --template FILE          Template customizado (opcional)"
    echo "  --help                   Mostrar esta ajuda"
    echo ""
    echo "Exemplos:"
    echo "  $0 --type feature --workitem USER-123 --title 'Autenticação' --author 'João Silva'"
    echo "  $0 --type api --workitem USER-124 --title 'API de Pacientes' --author 'Maria Santos'"
    echo ""
    exit 1
}

# Função para validar parâmetros
validate_params() {
    if [ -z "$SPEC_TYPE" ] || [ -z "$WORKITEM_ID" ] || [ -z "$TITLE" ] || [ -z "$AUTHOR" ]; then
        echo -e "${RED}Erro: Parâmetros obrigatórios faltando${NC}"
        usage
    fi

    # Validar tipo de especificação
    case "$SPEC_TYPE" in
        feature|api|infrastructure|usability)
            ;;
        *)
            echo -e "${RED}Erro: Tipo inválido: $SPEC_TYPE${NC}"
            echo "Tipos válidos: feature, api, infrastructure, usability"
            exit 1
            ;;
    esac
}

# Função para obter template
get_template() {
    local template_file="$TEMPLATES_DIR/${SPEC_TYPE}-spec.md"
    
    if [ ! -f "$template_file" ]; then
        echo -e "${RED}Erro: Template não encontrado: $template_file${NC}"
        exit 1
    fi
    
    echo "$template_file"
}

# Função para gerar especificação
generate_spec() {
    local template=$(get_template)
    local workitem_id="${WORKITEM_ID}"
    local feature_id="${workitem_id}"
    local title="${TITLE}"
    local author="${AUTHOR}"
    local date=$(date +"%Y-%m-%d")
    
    # Determinar diretório de saída
    case "$SPEC_TYPE" in
        feature)
            local output_subdir="features"
            ;;
        api)
            local output_subdir="api"
            ;;
        infrastructure)
            local output_subdir="infrastructure"
            ;;
        usability)
            local output_subdir="usability"
            ;;
    esac
    
    local output_dir="${OUTPUT_DIR:-$SPECS_DIR}/$output_subdir"
    mkdir -p "$output_dir"
    
    # Nome do arquivo
    local filename="${workitem_id}-${SPEC_TYPE}-spec.md"
    local output_file="$output_dir/$filename"
    
    echo -e "${YELLOW}Gerando especificação...${NC}"
    echo "  Tipo: $SPEC_TYPE"
    echo "  Work Item: $workitem_id"
    echo "  Título: $title"
    echo "  Autor: $author"
    echo "  Saída: $output_file"
    
    # Copiar template e substituir variáveis
    sed \
        -e "s/\[FEATURE-ID\]/$feature_id/g" \
        -e "s/\[WORKITEM-ID\]/$workitem_id/g" \
        -e "s/\[Título da Feature\]/$title/g" \
        -e "s/\[DATE\]/$date/g" \
        -e "s/\[AUTHOR\]/$author/g" \
        "$template" > "$output_file"
    
    # Adicionar informações adicionais no cabeçalho
    echo "" >> "$output_file"
    echo "**Arquivo**: \`$output_file\`" >> "$output_file"
    echo "**Template**: \`$template\`" >> "$output_file"
    
    echo -e "${GREEN}✓ Especificação gerada com sucesso${NC}"
    echo ""
    echo "Próximos passos:"
    echo "1. Revisar e preencher a especificação: $output_file"
    echo "2. Sincronizar com Azure DevOps: ./tools/sync-ado.py --workitem $workitem_id --spec $output_file"
    echo "3. Validar especificação: ./scripts/validate-spec.sh $output_file"
    
    # Abrir editor (opcional)
    if [ -n "$EDITOR" ]; then
        read -p "Deseja abrir no editor? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            $EDITOR "$output_file"
        fi
    fi
}

# Parse de argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        --type)
            SPEC_TYPE="$2"
            shift 2
            ;;
        --workitem)
            WORKITEM_ID="$2"
            shift 2
            ;;
        --title)
            TITLE="$2"
            shift 2
            ;;
        --author)
            AUTHOR="$2"
            shift 2
            ;;
        --output-dir)
            OUTPUT_DIR="$2"
            shift 2
            ;;
        --template)
            TEMPLATE="$2"
            shift 2
            ;;
        --help)
            usage
            ;;
        *)
            echo -e "${RED}Opção desconhecida: $1${NC}"
            usage
            ;;
    esac
}

# Validar e executar
if [ -z "$SPEC_TYPE" ] || [ -z "$WORKITEM_ID" ] || [ -z "$TITLE" ] || [ -z "$AUTHOR" ]; then
    usage
fi

validate_params
generate_spec

exit 0


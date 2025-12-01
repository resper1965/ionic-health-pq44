#!/bin/bash
# Script de Ingestão de Relatórios de Segurança no DefectDojo
# FASE 3: Verificação Automatizada e Ingestão de Segurança

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função de ajuda
usage() {
    echo "Uso: $0 [opções]"
    echo ""
    echo "Opções:"
    echo "  --type TYPE          Tipo de scan (sast|sca|dast)"
    echo "  --file FILE          Caminho do arquivo de relatório (JSON/XML)"
    echo "  --url URL            URL do DefectDojo"
    echo "  --api-key KEY        API Key do DefectDojo"
    echo "  --commit SHA         Commit SHA"
    echo "  --branch BRANCH      Nome da branch"
    echo "  --build-id ID        ID do build (opcional)"
    echo "  --help               Mostrar esta ajuda"
    echo ""
    exit 1
}

# Validação de parâmetros obrigatórios
validate_params() {
    if [ -z "$SCAN_TYPE" ] || [ -z "$FILE" ] || [ -z "$DEFECTDOJO_URL" ] || [ -z "$API_KEY" ]; then
        echo -e "${RED}Erro: Parâmetros obrigatórios faltando${NC}"
        usage
    fi

    if [ ! -f "$FILE" ]; then
        echo -e "${RED}Erro: Arquivo não encontrado: $FILE${NC}"
        exit 1
    fi
}

# Mapeamento de tipos de scan para DefectDojo
get_scan_type() {
    case "$SCAN_TYPE" in
        sast)
            echo "SonarQube"
            ;;
        sca)
            echo "Trivy Scan"
            ;;
        dast)
            echo "ZAP Scan"
            ;;
        *)
            echo -e "${RED}Erro: Tipo de scan inválido: $SCAN_TYPE${NC}"
            echo "Tipos válidos: sast, sca, dast"
            exit 1
            ;;
    esac
}

# Função principal de ingestão
ingest_to_defectdojo() {
    local SCAN_TYPE_NAME=$(get_scan_type)
    local COMMIT_HASH=${COMMIT:-"unknown"}
    local BRANCH_NAME=${BRANCH:-"unknown"}
    local BUILD_ID=${BUILD_ID:-"unknown"}

    echo -e "${YELLOW}Ingerindo relatório no DefectDojo...${NC}"
    echo "  Tipo: $SCAN_TYPE_NAME"
    echo "  Arquivo: $FILE"
    echo "  Commit: $COMMIT_HASH"
    echo "  Branch: $BRANCH_NAME"

    # Criar engagement se não existir
    local ENGAGEMENT_NAME="nCommand-Lite-$(date +%Y-%m-%d)"
    local PRODUCT_NAME="nCommand-Lite"
    
    # Obter ou criar produto
    local PRODUCT_ID=$(get_or_create_product "$PRODUCT_NAME")
    
    # Obter ou criar engagement
    local ENGAGEMENT_ID=$(get_or_create_engagement "$PRODUCT_ID" "$ENGAGEMENT_NAME" "$BRANCH_NAME")

    # Fazer upload do relatório
    echo -e "${YELLOW}Enviando relatório para DefectDojo...${NC}"
    local UPLOAD_RESPONSE=$(curl -s -X POST \
        "$DEFECTDOJO_URL/api/v2/import-scan/" \
        -H "Authorization: Token $API_KEY" \
        -H "Content-Type: multipart/form-data" \
        -F "file=@$FILE" \
        -F "scan_type=$SCAN_TYPE_NAME" \
        -F "engagement=$ENGAGEMENT_ID" \
        -F "commit_hash=$COMMIT_HASH" \
        -F "branch_tag=$BRANCH_NAME" \
        -F "close_old_findings=true" \
        -F "deduplication_on_engagement=true")

    # Verificar resposta
    if echo "$UPLOAD_RESPONSE" | grep -q "id"; then
        echo -e "${GREEN}✓ Relatório ingerido com sucesso${NC}"
        local SCAN_ID=$(echo "$UPLOAD_RESPONSE" | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)
        echo "  Scan ID: $SCAN_ID"
        return 0
    else
        echo -e "${RED}✗ Erro ao ingerir relatório${NC}"
        echo "$UPLOAD_RESPONSE"
        return 1
    fi
}

# Obter ou criar produto
get_or_create_product() {
    local PRODUCT_NAME=$1
    
    local PRODUCT_RESPONSE=$(curl -s -X GET \
        "$DEFECTDOJO_URL/api/v2/products/?name=$PRODUCT_NAME" \
        -H "Authorization: Token $API_KEY")
    
    local PRODUCT_ID=$(echo "$PRODUCT_RESPONSE" | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)
    
    if [ -z "$PRODUCT_ID" ]; then
        # Criar produto
        echo -e "${YELLOW}Criando produto: $PRODUCT_NAME${NC}"
        local CREATE_RESPONSE=$(curl -s -X POST \
            "$DEFECTDOJO_URL/api/v2/products/" \
            -H "Authorization: Token $API_KEY" \
            -H "Content-Type: application/json" \
            -d "{
                \"name\": \"$PRODUCT_NAME\",
                \"description\": \"nCommand Lite - SaMD Platform\",
                \"prod_type\": 1
            }")
        PRODUCT_ID=$(echo "$CREATE_RESPONSE" | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)
    fi
    
    echo "$PRODUCT_ID"
}

# Obter ou criar engagement
get_or_create_engagement() {
    local PRODUCT_ID=$1
    local ENGAGEMENT_NAME=$2
    local BRANCH_NAME=$3
    
    local ENGAGEMENT_RESPONSE=$(curl -s -X GET \
        "$DEFECTDOJO_URL/api/v2/engagements/?product=$PRODUCT_ID&name=$ENGAGEMENT_NAME" \
        -H "Authorization: Token $API_KEY")
    
    local ENGAGEMENT_ID=$(echo "$ENGAGEMENT_RESPONSE" | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)
    
    if [ -z "$ENGAGEMENT_ID" ]; then
        # Criar engagement
        echo -e "${YELLOW}Criando engagement: $ENGAGEMENT_NAME${NC}"
        local CREATE_RESPONSE=$(curl -s -X POST \
            "$DEFECTDOJO_URL/api/v2/engagements/" \
            -H "Authorization: Token $API_KEY" \
            -H "Content-Type: application/json" \
            -d "{
                \"product\": $PRODUCT_ID,
                \"name\": \"$ENGAGEMENT_NAME\",
                \"target_start\": \"$(date +%Y-%m-%d)\",
                \"target_end\": \"$(date -d '+30 days' +%Y-%m-%d)\",
                \"branch_tag\": \"$BRANCH_NAME\",
                \"engagement_type\": \"CI/CD\"
            }")
        ENGAGEMENT_ID=$(echo "$CREATE_RESPONSE" | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)
    fi
    
    echo "$ENGAGEMENT_ID"
}

# Parse de argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        --type)
            SCAN_TYPE="$2"
            shift 2
            ;;
        --file)
            FILE="$2"
            shift 2
            ;;
        --url)
            DEFECTDOJO_URL="$2"
            shift 2
            ;;
        --api-key)
            API_KEY="$2"
            shift 2
            ;;
        --commit)
            COMMIT="$2"
            shift 2
            ;;
        --branch)
            BRANCH="$2"
            shift 2
            ;;
        --build-id)
            BUILD_ID="$2"
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
done

# Validar e executar
validate_params
ingest_to_defectdojo

exit $?


#!/bin/bash
# Script de Verificação de Vulnerabilidades no DefectDojo
# Valida se existem vulnerabilidades críticas/altas bloqueando o pipeline

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

usage() {
    echo "Uso: $0 [opções]"
    echo ""
    echo "Opções:"
    echo "  --url URL            URL do DefectDojo"
    echo "  --api-key KEY        API Key do DefectDojo"
    echo "  --branch BRANCH      Nome da branch"
    echo "  --severity-critical  Verificar vulnerabilidades críticas"
    echo "  --severity-high      Verificar vulnerabilidades altas"
    echo "  --help               Mostrar esta ajuda"
    echo ""
    exit 1
}

# Verificar vulnerabilidades
check_vulnerabilities() {
    local BRANCH_NAME=${BRANCH:-"unknown"}
    local SEVERITIES=""
    
    if [ "$CHECK_CRITICAL" = "true" ]; then
        SEVERITIES="Critical"
    fi
    
    if [ "$CHECK_HIGH" = "true" ]; then
        if [ -n "$SEVERITIES" ]; then
            SEVERITIES="$SEVERITIES,High"
        else
            SEVERITIES="High"
        fi
    fi

    echo -e "${YELLOW}Verificando vulnerabilidades no DefectDojo...${NC}"
    echo "  Branch: $BRANCH_NAME"
    echo "  Severidades: $SEVERITIES"

    # Buscar produto
    local PRODUCT_RESPONSE=$(curl -s -X GET \
        "$DEFECTDOJO_URL/api/v2/products/?name=nCommand-Lite" \
        -H "Authorization: Token $API_KEY")
    
    local PRODUCT_ID=$(echo "$PRODUCT_RESPONSE" | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)
    
    if [ -z "$PRODUCT_ID" ]; then
        echo -e "${GREEN}✓ Produto não encontrado. Nenhuma vulnerabilidade.${NC}"
        return 0
    fi

    # Buscar findings ativos
    local FINDINGS_URL="$DEFECTDOJO_URL/api/v2/findings/?product=$PRODUCT_ID&active=true&severity=$SEVERITIES&branch_tag=$BRANCH_NAME"
    
    local FINDINGS_RESPONSE=$(curl -s -X GET \
        "$FINDINGS_URL" \
        -H "Authorization: Token $API_KEY")
    
    local COUNT=$(echo "$FINDINGS_RESPONSE" | grep -o '"count":[0-9]*' | head -1 | cut -d':' -f2)
    
    if [ -z "$COUNT" ] || [ "$COUNT" = "0" ]; then
        echo -e "${GREEN}✓ Nenhuma vulnerabilidade crítica/alta encontrada${NC}"
        return 0
    else
        echo -e "${RED}✗ $COUNT vulnerabilidade(s) crítica(s)/alta(s) encontrada(s)${NC}"
        
        # Listar findings
        echo ""
        echo "Vulnerabilidades encontradas:"
        echo "$FINDINGS_RESPONSE" | grep -o '"title":"[^"]*"' | sed 's/"title":"//;s/"//' | while read -r title; do
            echo "  - $title"
        done
        
        echo ""
        echo -e "${RED}Pipeline bloqueado devido a vulnerabilidades de segurança.${NC}"
        return 1
    fi
}

# Parse de argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        --url)
            DEFECTDOJO_URL="$2"
            shift 2
            ;;
        --api-key)
            API_KEY="$2"
            shift 2
            ;;
        --branch)
            BRANCH="$2"
            shift 2
            ;;
        --severity-critical)
            CHECK_CRITICAL=true
            shift
            ;;
        --severity-high)
            CHECK_HIGH=true
            shift
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

# Validar parâmetros obrigatórios
if [ -z "$DEFECTDOJO_URL" ] || [ -z "$API_KEY" ]; then
    echo -e "${RED}Erro: --url e --api-key são obrigatórios${NC}"
    usage
fi

if [ "$CHECK_CRITICAL" != "true" ] && [ "$CHECK_HIGH" != "true" ]; then
    echo -e "${RED}Erro: Especifique pelo menos --severity-critical ou --severity-high${NC}"
    usage
fi

# Executar verificação
check_vulnerabilities

exit $?


#!/bin/bash
# Script para extrair texto do PQ.039

cd "$(dirname "$0")"
PDF_FILE="PQ.039_Project Control.pdf"
OUTPUT_FILE="PQ.039_Project Control.txt"

echo "📄 Extraindo texto do PQ.039..."

# Tentar pdftotext (poppler-utils)
if command -v pdftotext &> /dev/null; then
    echo "✅ Usando pdftotext..."
    pdftotext "$PDF_FILE" "$OUTPUT_FILE"
    echo "✅ Texto extraído para: $OUTPUT_FILE"
    exit 0
fi

# Tentar instalar poppler-utils
echo "⚠️  pdftotext não encontrado. Tentando instalar..."
if command -v apt-get &> /dev/null; then
    echo "Instalando poppler-utils..."
    sudo apt-get update && sudo apt-get install -y poppler-utils
    if [ $? -eq 0 ]; then
        pdftotext "$PDF_FILE" "$OUTPUT_FILE"
        echo "✅ Texto extraído para: $OUTPUT_FILE"
        exit 0
    fi
fi

# Tentar Python com pypdf
echo "⚠️  Tentando usar Python..."
python3 << PYEOF
try:
    import pypdf
    with open('$PDF_FILE', 'rb') as f:
        reader = pypdf.PdfReader(f)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n\n'
        with open('$OUTPUT_FILE', 'w', encoding='utf-8') as out:
            out.write(text)
        print('✅ Texto extraído usando Python (pypdf)')
except ImportError:
    print('❌ pypdf não instalado. Instalando...')
    import subprocess
    subprocess.check_call(['pip3', 'install', 'pypdf'])
    import pypdf
    with open('$PDF_FILE', 'rb') as f:
        reader = pypdf.PdfReader(f)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n\n'
        with open('$OUTPUT_FILE', 'w', encoding='utf-8') as out:
            out.write(text)
        print('✅ Texto extraído para: $OUTPUT_FILE')
except Exception as e:
    print(f'❌ Erro: {e}')
    print('\n📋 OPÇÕES MANUAIS:')
    print('1. Copiar e colar o texto do PDF aqui')
    print('2. Usar conversor online: https://pdftotext.com/')
    print('3. Instalar manualmente: sudo apt install poppler-utils')
PYEOF

if [ -f "$OUTPUT_FILE" ]; then
    echo "✅ Texto extraído com sucesso!"
    echo "📄 Arquivo: $OUTPUT_FILE"
else
    echo "❌ Não foi possível extrair automaticamente."
    echo "📋 Use uma das opções manuais acima."
fi


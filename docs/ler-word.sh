#!/bin/bash
# Script para extrair texto de arquivo Word (.docx)

cd "$(dirname "$0")"
WORD_FILE="PQ.039_Project Control.docx"

if [ ! -f "$WORD_FILE" ]; then
    echo "❌ Arquivo não encontrado: $WORD_FILE"
    echo "📋 Por favor, salve o arquivo Word na pasta docs/ como: PQ.039_Project Control.docx"
    exit 1
fi

echo "📄 Extraindo texto do arquivo Word..."

# .docx é um arquivo ZIP, podemos extrair o XML
python3 << PYEOF
import zipfile
import xml.etree.ElementTree as ET

docx_file = '$WORD_FILE'
output_file = 'PQ.039_Project Control.txt'

try:
    # Abrir o .docx como ZIP
    with zipfile.ZipFile(docx_file, 'r') as docx:
        # Extrair o documento principal (document.xml)
        xml_content = docx.read('word/document.xml')
    
    # Parsear XML
    root = ET.fromstring(xml_content)
    
    # Namespace do Office Open XML
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    # Extrair todo o texto
    text_parts = []
    for paragraph in root.findall('.//w:p', ns):
        para_text = []
        for run in paragraph.findall('.//w:t', ns):
            if run.text:
                para_text.append(run.text)
        if para_text:
            text_parts.append(''.join(para_text))
    
    # Juntar tudo
    full_text = '\n\n'.join(text_parts)
    
    # Salvar
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(full_text)
    
    print(f'✅ Texto extraído com sucesso!')
    print(f'📄 Arquivo criado: {output_file}')
    print(f'📊 Tamanho: {len(full_text)} caracteres')
    
except Exception as e:
    print(f'❌ Erro: {e}')
    import traceback
    traceback.print_exc()
PYEOF


# Resumo da Documentação Regulatória - nCommand Lite

Este documento fornece um resumo executivo da estrutura de documentação regulatória implementada.

## Status da Documentação

✅ **Estrutura Completa**: Todos os frameworks e regulamentos foram organizados e referenciados

### Documentos Organizados

| Framework/Regulamento | Status | Localização |
|----------------------|--------|-------------|
| ISO 13485:2016 | ✅ Documentado | `ISO-13485/` |
| IEC 62304:2006+A1:2015 | ✅ Documentado | `IEC-62304/` |
| IEC 62366-1:2015 | ✅ Documentado | `IEC-62366-1/` |
| ISO 14971:2019 | ✅ Documentado | `ISO-14971/` |
| ISO/IEC 27001:2022 | ✅ Documentado | `ISO-27001-27701/` |
| ISO/IEC 27701:2019 | ✅ Documentado | `ISO-27001-27701/` |
| RDC 657/2022 (ANVISA) | ✅ Documentado | `MARKET-REGULATIONS/` |
| FDA 21 CFR Part 820 | ✅ Documentado | `MARKET-REGULATIONS/` |
| CE Mark (MDR 2017/745) | ✅ Documentado | `CE-MARK/` |

## Estrutura de Diretórios

```
docs/regulatory/
├── README.md                    # Visão geral
├── ACCESS-GUIDE.md             # Guia de acesso aos documentos
├── COMPLIANCE-MATRIX.md        # Matriz de conformidade
├── SUMMARY.md                  # Este arquivo
│
├── ISO-13485/                  # Sistema de Gestão da Qualidade
│   └── README.md
│
├── IEC-62304/                  # Ciclo de Vida de Software Médico
│   └── README.md
│
├── IEC-62366-1/                # Engenharia de Usabilidade
│   └── README.md
│
├── ISO-14971/                  # Gestão de Riscos
│   └── README.md
│
├── ISO-27001-27701/            # Segurança da Informação
│   └── README.md
│
├── MARKET-REGULATIONS/         # RDC 657/2022 & FDA 21 CFR Part 820
│   └── README.md
│
└── CE-MARK/                    # Marcação CE (MDR 2017/745)
    └── README.md
```

## Conteúdo de Cada Diretório

Cada diretório contém um `README.md` com:

1. **Informações do Documento**
   - Código e versão
   - Data de publicação
   - Status
   - Links para acesso

2. **Referências no Projeto**
   - Localização no SharePoint
   - Responsável

3. **Estrutura e Requisitos**
   - Principais seções
   - Requisitos principais

4. **Mapeamento no nCommand Lite**
   - Como os requisitos são implementados
   - Referências aos SOPs e processos

5. **Checklists de Conformidade**
   - Lista de verificação
   - Status de implementação

## Documentos Protegidos por Direitos Autorais

⚠️ **IMPORTANTE**: Os documentos completos NÃO estão incluídos neste repositório.

### O que está incluído:
- ✅ Referências e links para acesso
- ✅ Resumos e estruturas
- ✅ Mapeamentos de requisitos
- ✅ Checklists de conformidade
- ✅ Guias de implementação

### O que NÃO está incluído:
- ❌ PDFs completos dos documentos normativos
- ❌ Textos completos das normas
- ❌ Documentos protegidos por copyright

## Como Obter os Documentos Completos

Consulte `ACCESS-GUIDE.md` para instruções detalhadas sobre como adquirir cada documento.

### Resumo Rápido:

**ISO/IEC Standards**: Adquirir através de:
- Site oficial ISO/IEC
- Portal ABNT (Brasil)
- Licenças institucionais

**Regulamentações Públicas**:
- RDC 657/2022: Download gratuito (ANVISA)
- FDA 21 CFR Part 820: Acesso gratuito online
- MDR 2017/745: Documentos públicos online

## Integração com Processo

Todos os frameworks estão integrados ao processo do projeto:

| Framework | Integração no Processo |
|-----------|------------------------|
| ISO 13485 | Sistema de gestão da qualidade (todos os SOPs) |
| IEC 62304 | SDLC (SOP-001) |
| IEC 62366-1 | Usability specs (Spec-Kit) |
| ISO 14971 | Gestão de riscos (SOP-002) |
| ISO 27001/27701 | Segurança (SOP-003) |
| RDC 657/2022 | Registro ANVISA |
| FDA 21 CFR Part 820 | Registro FDA |
| CE Mark | Certificação europeia |

## Próximos Passos

1. **Aquisição de Documentos**
   - Adquirir licenças para documentos ISO/IEC
   - Organizar acesso no SharePoint

2. **Treinamento**
   - Treinar equipe nos requisitos
   - Estabelecer conhecimento compartilhado

3. **Implementação**
   - Revisar conformidade atual
   - Implementar melhorias necessárias

4. **Auditoria**
   - Realizar auditorias internas
   - Preparar para auditorias externas

## Contatos

| Responsabilidade | Contato |
|------------------|---------|
| **Gestão de Licenças** | [Nome/Email] |
| **Questões Regulatórias** | QA Leader |
| **Acesso SharePoint** | [Nome/Email] |

## Links Úteis

- **ISO**: https://www.iso.org/
- **IEC**: https://www.iec.ch/
- **ABNT**: https://www.abnt.org.br/
- **ANVISA**: https://www.gov.br/anvisa/
- **FDA**: https://www.fda.gov/
- **European Commission**: https://ec.europa.eu/

---

**Última Atualização**: 2024  
**Responsável**: QA Leader  
**Revisão**: Anual ou quando houver mudanças regulatórias


# Guia de Acesso aos Documentos Regulatórios

Este guia fornece informações sobre como acessar e adquirir os documentos normativos e regulatórios necessários para o projeto nCommand Lite.

## ⚠️ Direitos Autorais

**IMPORTANTE**: Todos os documentos normativos são protegidos por direitos autorais e devem ser adquiridos através de canais oficiais. Não é permitido:

- ❌ Armazenar cópias dos documentos completos no repositório
- ❌ Compartilhar documentos sem licença adequada
- ❌ Fazer upload de PDFs dos documentos originais

## Documentos ISO e IEC

### Onde Adquirir

**ISO Standards** (ISO 13485, ISO 14971, ISO/IEC 27001, ISO/IEC 27701):
- Site oficial: https://www.iso.org/
- Portal ABNT (Brasil): https://www.abnt.org.br/
- Licenças institucionais disponíveis

**IEC Standards** (IEC 62304, IEC 62366-1):
- Site oficial: https://www.iec.ch/
- Portal ABNT (Brasil): https://www.abnt.org.br/
- Licenças institucionais disponíveis

### Recomendação

Para projetos regulatórios, recomenda-se adquirir:
- **Licenças multiusuário** para acesso da equipe
- **Versões em português** quando disponíveis (facilita implementação)
- **Manutenção de assinatura** para receber atualizações

### Custos Aproximados (2024)

| Documento | Preço Individual (USD) | Licença Institucional |
|-----------|------------------------|----------------------|
| ISO 13485:2016 | ~$150-200 | $500-1000/ano |
| IEC 62304 | ~$200-250 | $600-1200/ano |
| IEC 62366-1 | ~$200-250 | $600-1200/ano |
| ISO 14971:2019 | ~$150-200 | $500-1000/ano |
| ISO/IEC 27001:2022 | ~$200 | $600/ano |
| ISO/IEC 27701:2019 | ~$150 | $500/ano |

## Regulamentações de Mercado

### RDC 657/2022 (ANVISA)

**Acesso**: Gratuito (documento público)

- Site oficial ANVISA: https://www.gov.br/anvisa/
- Link direto: [Pesquisar "RDC 657/2022"]
- Disponível em: https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-657-de-10-de-marco-de-2022-386904366

**Formato**: PDF gratuito para download

### FDA 21 CFR Part 820

**Acesso**: Gratuito (documento público)

- Site oficial FDA: https://www.fda.gov/
- Link direto: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820
- Código de Regulamentação Federal (CFR) - acesso público

**Formato**: HTML e PDF gratuitos

## CE Mark

### Documentação

**Acesso**: Parcialmente gratuito

- Site oficial: https://ec.europa.eu/
- Directiva MDD/MDR: Documentos de referência disponíveis
- Guias de implementação: Disponíveis gratuitamente

**Regulamentação Aplicável**:
- MDR 2017/745 (Medical Device Regulation)
- Guias de implementação: https://ec.europa.eu/docsroom/documents/

### Normas Harmonizadas

As normas harmonizadas para CE Mark são geralmente as mesmas ISO/IEC mencionadas acima.

## Estrutura de Licenciamento Recomendada

### Para Empresas

1. **Licenças Institucionais ISO/IEC**
   - Acesso multiusuário
   - Atualizações automáticas
   - Melhor custo-benefício

2. **Assinatura Anual**
   - Renovação automática
   - Notificações de mudanças
   - Suporte técnico

3. **Biblioteca Digital**
   - Centralizar acesso
   - Controle de versões
   - Auditoria de uso

## Armazenamento Interno

### Local Recomendado

- **SharePoint Online**: Repositório centralizado
- **Estrutura**: `/Regulatory/Standards/{ISO-IEC-Number}/`
- **Controle de Versão**: Versão do documento no nome do arquivo

### Exemplo de Estrutura no SharePoint

```
/Regulatory/
├── ISO/
│   ├── ISO-13485-2016/
│   ├── ISO-14971-2019/
│   └── ISO-IEC-27001-2022/
├── IEC/
│   ├── IEC-62304-2006-A1-2015/
│   └── IEC-62366-1-2015/
├── Market-Regulations/
│   ├── RDC-657-2022-ANVISA/
│   └── FDA-21-CFR-Part-820/
└── CE-Mark/
    └── MDR-2017-745/
```

## Controle de Versões

### Checklist de Atualização

Ao receber uma nova versão:

- [ ] Verificar versão do documento
- [ ] Comparar com versão anterior
- [ ] Identificar mudanças significativas
- [ ] Atualizar checklists de conformidade
- [ ] Comunicar equipe sobre mudanças
- [ ] Atualizar processo se necessário

## Contatos Internos

| Responsabilidade | Contato |
|------------------|---------|
| **Gestão de Licenças** | [Nome/Email] |
| **Acesso SharePoint** | [Nome/Email] |
| **Questões Regulatórias** | QA Leader |

## Links Úteis

### Sites Oficiais

- ISO: https://www.iso.org/
- IEC: https://www.iec.ch/
- ABNT: https://www.abnt.org.br/
- ANVISA: https://www.gov.br/anvisa/
- FDA: https://www.fda.gov/
- European Commission: https://ec.europa.eu/

### Recursos Gratuitos

- Resumos e guias oficiais
- Checklists públicos
- Webinars e treinamentos
- Fóruns de discussão regulatória

---

**Última Atualização**: 2024  
**Responsável**: QA Leader  
**Revisão**: Anual ou quando houver mudanças regulatórias


# Template de Slides - Apresentação nCommand Lite

**Versão**: 1.0.0  
**Data**: 2024

## Diretrizes de Design

### Paleta de Cores

- **Primária**: #58595b (Cinza escuro) - Textos e headers
- **Destaque**: #54c4cd (Ciano) - Acentos, destaques, CTAs
- **Background**: Branco ou gradiente suave

### Tipografia

- **Títulos**: Montserrat Bold, 32-48pt
- **Subtítulos**: Montserrat Medium, 24-32pt
- **Corpo**: Inter Regular, 16-18pt
- **Legendas**: Inter Regular, 12-14pt

### Layout

- **Proporção**: 16:9 (1920x1080)
- **Margens**: Mínimo 40px
- **Espaçamento**: Generoso entre elementos
- **Hierarquia**: Clara com tamanhos e pesos diferentes

## Estrutura de Slides

### Slide de Abertura

```
┌─────────────────────────────────────────┐
│                                         │
│            [Logo Ionic Health]          │
│                                         │
│        nCommand Lite                    │
│        Plataforma de SaMD              │
│                                         │
│        Ciclo de Vida Completo          │
│        Desenvolvimento Regulatório     │
│                                         │
│        [Data] | [Versão]               │
└─────────────────────────────────────────┘
```

**Elementos**:
- Logo no topo
- Título principal grande
- Subtítulo
- Data e versão no rodapé

### Slide de Conteúdo Padrão

```
┌─────────────────────────────────────────┐
│ [Título da Seção]              [Ícone] │
├─────────────────────────────────────────┤
│                                         │
│  • Ponto 1                              │
│  • Ponto 2                              │
│  • Ponto 3                              │
│                                         │
│  [Diagrama/Imagem]                      │
│                                         │
└─────────────────────────────────────────┘
```

**Elementos**:
- Header com título e ícone
- Lista de pontos ou conteúdo
- Diagrama ou imagem quando necessário
- Footer opcional com página

### Slide de Processo (Fluxo)

```
┌─────────────────────────────────────────┐
│     [Título do Processo]                │
├─────────────────────────────────────────┤
│                                         │
│  [Diagrama Mermaid ou Fluxograma]      │
│                                         │
│  Legenda:                               │
│  🟦 Fase   🟩 Aprovação   🟨 Gate      │
│                                         │
└─────────────────────────────────────────┘
```

**Elementos**:
- Título do processo
- Diagrama central
- Legenda de cores
- Explicação breve

### Slide de Métricas

```
┌─────────────────────────────────────────┐
│          [Título das Métricas]          │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐           │
│  │ 95% │  │ 100%│  │  A  │           │
│  │Cover │  │Pass │  │Gate │           │
│  └─────┘  └─────┘  └─────┘           │
│                                         │
│  [Gráfico ou Tabela]                    │
│                                         │
└─────────────────────────────────────────┘
```

**Elementos**:
- Métricas destacadas
- Visualização gráfica
- Comparação quando aplicável

## Slides Principais

### 1. Slide de Abertura
- Logo Ionic Health
- Título: "nCommand Lite"
- Subtítulo: "Ciclo de Vida Completo de SaMD"
- Data e versão

### 2. Visão Geral
- Objetivo do projeto
- Escopo
- Público-alvo

### 3. Arquitetura de Ferramentas
- 4 pilares principais
- Conexões entre ferramentas
- Diagrama visual

### 4-42. Conteúdo Principal
- Seguir estrutura do `PRESENTATION-PLAN.md`
- Usar templates acima
- Manter consistência visual

### 43. Slide de Encerramento
- Resumo executivo
- Próximos passos
- Informações de contato

## Ícones e Imagens

### Ícones Sugeridos (Heroicons)

- ☁️ Cloud: Azure, Infraestrutura
- 🛠️ Tools: Ferramentas de desenvolvimento
- 🔒 Security: Segurança e compliance
- 📄 Documents: Documentação
- ✅ Check: Aprovação, sucesso
- ⚠️ Warning: Atenção, gate
- ❌ Error: Falha, bloqueio
- 📊 Charts: Métricas, dashboards
- 🔄 Process: Fluxo, ciclo

### Diagramas

- **Fluxos**: Mermaid flowcharts
- **Arquitetura**: Mermaid graphs
- **Processos**: Fluxogramas simples
- **Métricas**: Gráficos de barras, pizza

## Animações e Transições

### Transições Entre Slides

- **Padrão**: Fade (0.3s)
- **Seções**: Slide (0.5s)
- **Destaque**: Zoom (0.4s)

### Animações em Slides

- **Listas**: Aparecer uma por uma (0.2s delay)
- **Diagramas**: Fade in (0.5s)
- **Métricas**: Counter animation

## Exportação

### Formatos

1. **PowerPoint (.pptx)**: Edição
2. **PDF**: Distribuição
3. **HTML**: Apresentação interativa (opcional)

### Configurações

- **Resolução**: 1920x1080 (Full HD)
- **Formato**: 16:9
- **Qualidade**: Alta para impressão

## Checklist de Qualidade

- [ ] Todos os slides seguem paleta de cores
- [ ] Tipografia consistente
- [ ] Diagramas legíveis
- [ ] Ortografia revisada
- [ ] Links funcionando
- [ ] Demos testadas
- [ ] Tempo estimado dentro do limite

---

**Última Atualização**: 2024  
**Template Version**: 1.0.0


# Design System - nCommand Lite Demo

**Versão**: 1.0.0  
**Data**: 2024

## Paleta de Cores

### Cor Principal: Cinza Escuro (#58595b)

A cor principal #58595b (HSL: 220° 6% 35%) e suas variações mais escuras criam uma base sólida e profissional para a interface.

#### Escala de Cinzas

| Cor | Hex | HSL | Uso |
|-----|-----|-----|-----|
| Gray 50 | #F8F9FA | 220° 6% 98% | Backgrounds muito claros |
| Gray 100 | #F1F3F5 | 220° 6% 95% | Backgrounds claros |
| Gray 200 | #E9ECEF | 220° 6% 90% | Bordas sutis |
| Gray 300 | #DEE2E6 | 220° 6% 85% | Bordas |
| Gray 400 | #CED4DA | 220° 6% 70% | Texto desabilitado |
| Gray 500 | #ADB5BD | 220° 6% 55% | Texto secundário |
| Gray 600 | #868E96 | 220° 6% 45% | Texto secundário |
| **Gray 700** | **#58595B** | **220° 6% 35%** | **Texto principal, Headers** |
| Gray 800 | #3C3D3F | 220° 6% 25% | Texto escuro, Headers |
| Gray 900 | #212529 | 220° 6% 15% | Texto muito escuro |

### Cor de Destaque: Ciano (#54c4cd)

A cor #54c4cd (HSL: 185° 58% 56%) é usada estrategicamente para chamar atenção e indicar ações importantes.

#### Escala de Ciano

| Cor | Hex | HSL | Uso |
|-----|-----|-----|-----|
| Cyan 50 | #F0FDFE | 185° 58% 98% | Backgrounds muito claros |
| Cyan 100 | #CCFBF1 | 185° 58% 95% | Backgrounds de destaque |
| Cyan 200 | #99F6E4 | 185° 58% 90% | Backgrounds suaves |
| Cyan 300 | #5EEAD4 | 185° 58% 80% | Estados hover |
| Cyan 400 | #2DD4BF | 185° 58% 68% | Estados hover |
| **Cyan 500** | **#54C4CD** | **185° 58% 56%** | **Botões, Links, Destaques** |
| Cyan 600 | #0D9488 | 185° 58% 48% | Estados active |
| Cyan 700 | #0F766E | 185° 58% 40% | Texto sobre ciano |
| Cyan 800 | #115E59 | 185° 58% 32% | Elementos escuros |
| Cyan 900 | #134E4A | 185° 58% 24% | Elementos muito escuros |

## Princípios de Design

### 1. Hierarquia Visual Clara

- **Headers**: Gray 700 (#58595b) - Peso bold, tamanho grande
- **Texto Principal**: Gray 700 - Peso regular, tamanho base
- **Texto Secundário**: Gray 600 - Peso regular, tamanho menor
- **Destaques**: Cyan 500 (#54c4cd) - Para CTAs e elementos importantes

### 2. Uso Estratégico da Cor de Destaque

O ciano (#54c4cd) é usado apenas para:
- Botões primários e CTAs
- Links importantes
- Indicadores de status (sucesso, aprovação)
- Bordas de foco em elementos interativos
- Ícones e badges de destaque

### 3. Contraste e Acessibilidade

- **Texto sobre fundo claro**: Gray 700 (contraste WCAG AA+)
- **Texto sobre ciano**: Branco ou Gray 900 (contraste WCAG AA+)
- **Elementos interativos**: Contraste mínimo 4.5:1

### 4. Espaçamento Consistente

Sistema baseado em múltiplos de 4px:
- 4px: Espaçamento mínimo
- 8px: Espaçamento pequeno
- 16px: Espaçamento médio
- 24px: Espaçamento grande
- 32px: Espaçamento extra grande

### 5. Tipografia

- **Fonte Primária**: Inter (sans-serif)
- **Tamanhos**:
  - Hero: 48px (4xl)
  - H1: 36px (3xl)
  - H2: 30px (2xl)
  - H3: 24px (xl)
  - Body: 16px (base)
  - Small: 14px (sm)
  - Extra Small: 12px (xs)

### 6. Sombras e Profundidade

- **Shadow-sm**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Shadow**: `0 1px 3px 0 rgba(0, 0, 0, 0.1)`
- **Shadow-md**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Shadow-lg**: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- **Shadow-cyan**: `0 4px 14px 0 rgba(84, 196, 205, 0.15)`
- **Shadow-cyan-lg**: `0 10px 40px -10px rgba(84, 196, 205, 0.3)`

### 7. Bordas e Raios

- **Raio Padrão**: 0.75rem (12px)
- **Raio Pequeno**: 0.5rem (8px)
- **Raio Grande**: 1rem (16px)
- **Borda Ciano**: Usada em cards e elementos de destaque

## Componentes

### Cards

- **Background**: Branco (#FFFFFF)
- **Borda**: Gray 300 ou Ciano com opacidade 20%
- **Sombra**: shadow-lg padrão ou shadow-cyan para destaque
- **Hover**: Elevação de sombra e borda ciano

### Badges

- **Primary**: Ciano (#54c4cd) sobre branco
- **Secondary**: Gray 600 sobre branco
- **Success**: Verde sobre branco
- **Outline**: Borda com texto

### Botões

- **Primary**: Fundo ciano, texto branco
- **Hover**: Ciano mais escuro (Cyan 600)
- **Disabled**: Gray 300, texto Gray 400

### Links

- **Padrão**: Ciano (#54c4cd)
- **Hover**: Ciano mais escuro com underline
- **Visitado**: Ciano mais escuro

## Estados Visuais

### Status

- **Success/Completo**: Ciano (#54c4cd) com ícone de check
- **Aprovado**: Ciano com badge
- **Em Progresso**: Amarelo (#F59E0B)
- **Pendente**: Gray 400
- **Erro**: Vermelho (#EF4444)

### Interações

- **Hover**: Transição suave (300ms), elevação ou mudança de cor
- **Active**: Cor mais escura, sombra reduzida
- **Focus**: Anel ciano com opacidade 20%
- **Disabled**: Opacidade 50%, cursor not-allowed

## Gradientes

### Gradiente Primário

```css
background: linear-gradient(to right, #54c4cd, #48b3bb);
```

Usado em:
- Títulos principais
- Botões destacados
- Timeline indicators

### Gradiente de Fundo

```css
background: linear-gradient(to bottom right, #f8f9fa, #ffffff, #f8f9fa);
```

Cria profundidade sutil na página.

## Animações

### Transições Padrão

- **Duração**: 300ms
- **Easing**: ease-in-out
- **Propriedades**: all

### Animações Especiais

- **Fade In**: 500ms, ease-out
- **Slide In**: 300ms, ease-out
- **Scale**: Para feedback de interação

## Responsividade

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

### Adaptações Mobile

- Cards empilhados verticalmente
- Espaçamento reduzido
- Tipografia ligeiramente menor
- Timeline horizontal transformada em vertical

## Acessibilidade

### Contraste

Todos os textos atendem WCAG AA:
- Texto normal: Mínimo 4.5:1
- Texto grande: Mínimo 3:1

### Navegação por Teclado

- Todos os elementos interativos são focáveis
- Indicador de foco visível (anel ciano)
- Ordem de tabulação lógica

### Screen Readers

- Labels descritivos em todos os elementos
- ARIA attributes onde necessário
- Ícones com texto alternativo

## Exemplos de Uso

### Título Principal

```tsx
<h1 className="text-5xl font-bold text-gradient-primary">
  nCommand Lite
</h1>
```

### Card com Destaque

```tsx
<Card className="border-cyan shadow-cyan-lg">
  {/* conteúdo */}
</Card>
```

### Badge de Status

```tsx
<Badge variant="cyan" className="shadow-sm">
  Aprovado
</Badge>
```

### Botão Primário

```tsx
<button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-smooth shadow-cyan">
  Ação Principal
</button>
```

---

**Designer**: UX/UI Specialist  
**Última Atualização**: 2024  
**Versão**: 1.0.0


# Aplicação de Apresentação - Deploy na Vercel

**Projeto Vercel**: ihpq44  
**Status**: ⏳ Aguardando criação do projeto

## ⚠️ Importante

Esta é uma **aplicação de apresentação** que demonstra o processo de desenvolvimento do nCommand Lite. **NÃO é parte do produto nCommand Lite**.

## Configurações para Vercel

### Root Directory

⚠️ **CRÍTICO**: Ao criar o projeto na Vercel, configurar:
- **Root Directory**: `demo-app`

### Build Settings

A Vercel detectará automaticamente:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Dependências

Todas as dependências necessárias estão em `demo-app/package.json`:
- Next.js 14
- React 18
- Tailwind CSS
- Mermaid (para diagramas)
- shadcn/ui components

## Melhorias Implementadas

### 1. Mermaid com Carregamento Dinâmico

- Mermaid carrega apenas no cliente (evita problemas SSR)
- Loading state durante carregamento
- Tratamento de erros

### 2. Configuração Next.js

- Webpack config para Mermaid funcionar corretamente
- Otimizações para Vercel
- Imagens não otimizadas (não necessário para esta aplicação)

### 3. Componentes Otimizados

- Todos os componentes são Client Components (`'use client'`)
- Lazy loading onde apropriado
- Tratamento de erros

## Como Criar o Projeto na Vercel

Ver instruções detalhadas em: `docs/VERCEL-SETUP-INSTRUCOES.md`

### Resumo Rápido

1. Acessar: https://vercel.com/dashboard
2. Add New → Project
3. Importar: `resper1965/ionic-health-pq44`
4. Configurar:
   - Project Name: `ihpq44`
   - Root Directory: `demo-app` ⚠️
   - Framework: Next.js (auto-detect)
5. Deploy

## Verificação Pós-Deploy

Após o deploy, verificar:

- [ ] URL acessível
- [ ] Página carrega corretamente
- [ ] Diagramas Mermaid renderizam
- [ ] Estilos CSS aplicados
- [ ] Navegação funcionando
- [ ] Responsividade OK

## Troubleshooting

### Mermaid não renderiza

- Aguardar alguns segundos (carregamento dinâmico)
- Verificar console do navegador
- Recarregar a página

### Estilos não aplicam

- Limpar cache do navegador
- Verificar se Tailwind está compilando
- Verificar logs do build

---

**Última Atualização**: 2024  
**Status**: Pronto para deploy


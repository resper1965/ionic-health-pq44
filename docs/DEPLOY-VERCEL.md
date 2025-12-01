# Deploy na Vercel - nCommand Lite Demo

**Projeto Vercel**: ihpq44  
**Aplicação**: demo-app (Next.js)  
**Versão**: 1.0.0

## Visão Geral

Este documento descreve o processo de deploy da aplicação demonstrativa na Vercel.

## Estrutura do Projeto

A aplicação demo está localizada em `demo-app/` e é uma aplicação Next.js 14.

## Pré-requisitos

- ✅ Conta Vercel ativa
- ✅ Repositório GitHub conectado
- ✅ Node.js 18+ instalado localmente (para testes)

## Configuração do Projeto

### Arquivo vercel.json

O arquivo `demo-app/vercel.json` está configurado com:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["gru1"]
}
```

### Configurações Importantes

- **Framework**: Next.js (detectado automaticamente)
- **Região**: gru1 (São Paulo, Brasil)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## Deploy via Vercel CLI

### Passo 1: Instalar Vercel CLI

```bash
npm i -g vercel
```

### Passo 2: Login

```bash
vercel login
```

### Passo 3: Deploy

```bash
cd demo-app
vercel
```

Ou para produção:

```bash
vercel --prod
```

## Deploy via Dashboard Vercel

### Passo 1: Criar Projeto

1. Acessar: https://vercel.com/dashboard
2. Clicar em "Add New..." → "Project"
3. Importar repositório: `resper1965/ionic-health-pq44`
4. Configurar projeto:
   - **Project Name**: `ihpq44`
   - **Framework Preset**: Next.js
   - **Root Directory**: `demo-app`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### Passo 2: Configurar Variáveis de Ambiente

Se necessário, adicionar variáveis:

- `NODE_ENV`: `production`
- Outras variáveis específicas

### Passo 3: Deploy

1. Clicar em "Deploy"
2. Aguardar build e deploy
3. URL será gerada automaticamente

## Configuração de DNS (Opcional)

### Após Deploy, Configurar Domínio Customizado

1. Vercel Dashboard → Project → Settings → Domains
2. Adicionar domínio: `demo.ncommand-lite.com`
3. Seguir instruções para configurar DNS no Cloudflare
4. Adicionar registro CNAME no Cloudflare:
   - Nome: `demo`
   - Valor: `cname.vercel-dns.com`
   - Proxy: ✅ Proxied

## Verificação Pós-Deploy

### Checklist

- [ ] Build bem-sucedido
- [ ] Aplicação acessível na URL da Vercel
- [ ] Diagramas Mermaid renderizando corretamente
- [ ] Estilos CSS aplicados
- [ ] Navegação funcionando
- [ ] Responsividade testada

### Testes

```bash
# Verificar URL da Vercel
curl https://ihpq44.vercel.app

# Verificar build
# Deve retornar HTML válido
```

## Troubleshooting

### Problema: Build falha

**Soluções**:
- Verificar dependências no `package.json`
- Verificar erros de TypeScript
- Verificar logs do build na Vercel

### Problema: Diagramas Mermaid não renderizam

**Soluções**:
- Verificar se `mermaid` está em `dependencies` (não `devDependencies`)
- Verificar configuração do componente MermaidDiagram
- Verificar console do navegador para erros

### Problema: Estilos não carregam

**Soluções**:
- Verificar se Tailwind está configurado corretamente
- Verificar `postcss.config.js`
- Verificar `tailwind.config.js`

## Variáveis de Ambiente

### Produção

Atualmente não há variáveis de ambiente necessárias. Se futuramente necessário:

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Adicionar variáveis
3. Redeploy

## Deploy Automático

### GitHub Integration

Com a integração GitHub:

- ✅ Push para `main` → Deploy automático em produção
- ✅ Push para outras branches → Preview deployments

### Configurar

1. Vercel Dashboard → Project → Settings → Git
2. Verificar conexão com GitHub
3. Configurar branch de produção: `main`

## Monitoramento

### Analytics

- Vercel Analytics (se habilitado)
- Performance metrics
- Real User Monitoring

### Logs

- Vercel Dashboard → Project → Logs
- Function Logs
- Build Logs

## Referências

- [Documentação Vercel](https://vercel.com/docs)
- [Next.js na Vercel](https://vercel.com/docs/frameworks/nextjs)
- Manual Cloudflare DNS: `docs/manuals/cloudflare/DNS-MANAGEMENT.md`

---

**Última Atualização**: 2024  
**Responsável**: DevOps Team


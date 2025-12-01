# Setup e Deploy na Vercel - Projeto ihpq44

**Projeto**: ihpq44  
**Repositório**: https://github.com/resper1965/ionic-health-pq44  
**Diretório Root**: `demo-app`  
**Framework**: Next.js 14

## Criar Projeto na Vercel

### Opção 1: Via Dashboard (Recomendado)

1. **Acessar Vercel Dashboard**
   - URL: https://vercel.com/dashboard
   - Login com conta apropriada

2. **Importar Repositório**
   - Clicar em "Add New..." → "Project"
   - Se o repositório não aparecer, clicar em "Import Git Repository"
   - Selecionar: `resper1965/ionic-health-pq44`
   - Clicar em "Import"

3. **Configurar Projeto**
   - **Project Name**: `ihpq44`
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: `demo-app` ⚠️ **IMPORTANTE**
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `npm install` (padrão)

4. **Variáveis de Ambiente**
   - Nenhuma variável necessária por enquanto
   - Se necessário adicionar depois: Settings → Environment Variables

5. **Deploy**
   - Clicar em "Deploy"
   - Aguardar build e deploy
   - URL será gerada automaticamente: `https://ihpq44.vercel.app`

### Opção 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Navegar para o diretório da aplicação
cd demo-app

# Deploy (cria projeto automaticamente)
vercel

# Configurar durante deploy:
# - Set up and deploy: Y
# - Which scope: [Selecionar team/account]
# - Link to existing project: N
# - What's your project's name: ihpq44
# - In which directory is your code located: ./
# - Want to override settings: N

# Deploy para produção
vercel --prod
```

### Opção 3: Via Git Integration (Automático)

1. **Conectar Repositório**
   - Vercel Dashboard → Settings → Git
   - Conectar repositório GitHub: `resper1965/ionic-health-pq44`

2. **Configurar Auto-Deploy**
   - Production Branch: `main`
   - Root Directory: `demo-app`
   - Framework: Next.js

3. **Primeiro Deploy**
   - Push para `main` dispara deploy automático
   - OU clicar em "Deploy" manualmente

## Configurações Importantes

### Root Directory

⚠️ **CRÍTICO**: O projeto deve ter Root Directory como `demo-app`

**Por quê?**
- A aplicação Next.js está em `demo-app/`
- O repositório tem outros diretórios na raiz
- A Vercel precisa saber onde está o `package.json` da aplicação

### Build Settings

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "framework": "nextjs"
}
```

### Node.js Version

- Verificar `package.json`: `"node": ">=18.0.0"`
- Vercel detecta automaticamente
- Versão mínima: 18.x

## Verificação Pós-Deploy

### Checklist

- [ ] Build bem-sucedido
- [ ] URL acessível: `https://ihpq44.vercel.app`
- [ ] Página carrega corretamente
- [ ] Diagramas Mermaid renderizam
- [ ] Estilos CSS aplicados
- [ ] Console sem erros críticos

### Testes

```bash
# Verificar se está online
curl https://ihpq44.vercel.app

# Verificar headers
curl -I https://ihpq44.vercel.app

# Verificar build logs na Vercel Dashboard
```

## Configuração de Domínio Customizado (Opcional)

### Passo 1: Adicionar Domínio na Vercel

1. Vercel Dashboard → Project → Settings → Domains
2. Add Domain: `demo.ncommand-lite.com`
3. Vercel fornecerá instruções de DNS

### Passo 2: Configurar DNS no Cloudflare

1. Acessar Cloudflare Dashboard
2. DNS → Add Record
3. Tipo: `CNAME`
4. Nome: `demo`
5. Valor: [Valor fornecido pela Vercel]
6. Proxy: ✅ Proxied
7. Save

### Passo 3: Verificar

- Aguardar propagação DNS (1-5 minutos)
- Vercel validará automaticamente
- Domínio ficará ativo quando DNS propagar

## Troubleshooting

### Problema: Build falha com "Cannot find module"

**Solução**:
- Verificar se Root Directory está configurado como `demo-app`
- Verificar se `package.json` existe em `demo-app/`
- Verificar se dependências estão corretas

### Problema: "Framework not detected"

**Solução**:
- Verificar se `next.config.js` existe em `demo-app/`
- Verificar se `package.json` tem Next.js nas dependências
- Configurar Framework manualmente: Next.js

### Problema: Página em branco

**Soluções**:
- Verificar logs do build na Vercel
- Verificar console do navegador
- Verificar se componentes estão sendo importados corretamente
- Verificar se Mermaid está renderizando (pode levar alguns segundos)

### Problema: Estilos não carregam

**Soluções**:
- Verificar se Tailwind está configurado
- Verificar `globals.css` está importado
- Verificar `tailwind.config.js`
- Limpar cache e redeploy

## Deploy Automático

### Git Integration

Após configurar:

- ✅ Push para `main` → Deploy automático em produção
- ✅ Push para outras branches → Preview deployments
- ✅ Pull Requests → Preview deployments automáticos

### Webhooks

Se necessário configurar webhooks externos:

1. Settings → Git → Webhooks
2. Adicionar webhook URL
3. Configurar eventos

## Monitoramento

### Analytics

1. Project → Analytics
2. Habilitar Vercel Analytics (se disponível no plano)
3. Métricas: Views, Performance, etc.

### Logs

1. Project → Logs
2. Function Logs: Logs de API routes
3. Build Logs: Logs de build

### Alerts

1. Settings → Notifications
2. Configurar alertas para:
   - Deploy failures
   - Build errors
   - Domain issues

## URLs e Links

### Produção

- **URL Principal**: `https://ihpq44.vercel.app`
- **Preview URLs**: Geradas automaticamente para cada branch/PR

### Domínio Customizado (quando configurado)

- `https://demo.ncommand-lite.com`

## Comandos Úteis

### Vercel CLI

```bash
# Status do projeto
vercel ls

# Informações do projeto
vercel inspect

# Logs em tempo real
vercel logs ihpq44

# Remover projeto
vercel remove ihpq44
```

## Próximos Passos

1. ✅ Criar projeto na Vercel
2. ✅ Fazer primeiro deploy
3. ✅ Verificar funcionamento
4. ⏭️ Configurar domínio customizado (opcional)
5. ⏭️ Configurar analytics (opcional)
6. ⏭️ Configurar variáveis de ambiente (se necessário)

## Referências

- [Documentação Vercel](https://vercel.com/docs)
- [Next.js na Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI](https://vercel.com/docs/cli)
- Manual DNS: `docs/manuals/cloudflare/DNS-MANAGEMENT.md`

---

**Última Atualização**: 2024  
**Status**: ⏳ Aguardando criação do projeto  
**Responsável**: DevOps Team


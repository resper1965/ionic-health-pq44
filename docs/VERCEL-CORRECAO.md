# Correção do Projeto Vercel - ionic-health-pq44

**Data**: 1/12/2025  
**Projeto**: ionic-health-pq44  
**Problema**: Root Directory não está configurado para `demo-app`

## Problema Identificado

O projeto **ionic-health-pq44** já existe na Vercel, mas não está configurado com o **Root Directory** correto. A aplicação Next.js está em `demo-app/`, mas a Vercel está tentando fazer build na raiz do repositório.

## Solução: Configurar Root Directory

### Opção 1: Via Dashboard Vercel (Recomendado)

1. **Acessar o Projeto**
   - Vercel Dashboard: https://vercel.com/dashboard
   - Selecionar team: `nessbr-projects`
   - Abrir projeto: `ionic-health-pq44`

2. **Acessar Settings**
   - Clicar em **"Settings"**
   - Selecionar aba **"General"**

3. **Configurar Root Directory**
   - Scroll até **"Root Directory"**
   - Clicar em **"Edit"**
   - Alterar de: `.` (ou vazio)
   - Para: `demo-app`
   - Clicar em **"Save"**

4. **Fazer Novo Deploy**
   - Ir para aba **"Deployments"**
   - Clicar em **"Redeploy"** no último deployment
   - OU fazer push para `main` (se auto-deploy estiver ativo)

### Opção 2: Via Arquivo vercel.json

Já foi criado um arquivo `vercel.json` na raiz do repositório:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "framework": "nextjs",
  "rootDirectory": "demo-app"
}
```

**Próximo passo**: Fazer commit e push deste arquivo, e a Vercel deve reconhecer automaticamente.

## Verificação

Após corrigir, verificar:

1. **Deploy bem-sucedido**
   - Ir para Deployments
   - Último deployment deve ter status "Ready"

2. **Aplicação funcionando**
   - Acessar URL: https://ionic-health-pq44.vercel.app
   - Verificar se a página carrega corretamente
   - Verificar se diagramas Mermaid renderizam
   - Verificar se estilos CSS estão aplicados

3. **Logs do Build**
   - Verificar se não há erros de "Cannot find module"
   - Verificar se o build encontra o `package.json` em `demo-app/`

## Configurações Finais Esperadas

### Settings → General

- **Framework Preset**: Next.js
- **Root Directory**: `demo-app` ✅
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x ou 20.x

### Settings → Git

- **Production Branch**: `main`
- **Auto-Deploy**: Enabled
- **Preview Deployments**: Enabled

## Troubleshooting

### Problema: Deploy ainda falha após corrigir Root Directory

**Soluções**:
1. Limpar cache do build na Vercel
   - Settings → General → Clear Build Cache
2. Verificar se `demo-app/package.json` existe
3. Verificar logs do build para erros específicos

### Problema: Root Directory não salva

**Solução**:
- Verificar permissões do projeto
- Tentar editar via Settings → General novamente
- Se persistir, deletar e recriar projeto (último recurso)

## Status Atual

- ✅ Arquivo `vercel.json` criado na raiz
- ✅ Projeto existe na Vercel: `ionic-health-pq44`
- ⏳ Aguardando: Configurar Root Directory no Dashboard
- ⏳ Aguardando: Novo deploy com configuração correta

---

**Última Atualização**: 1/12/2025  
**Próximo Passo**: Configurar Root Directory no Dashboard Vercel


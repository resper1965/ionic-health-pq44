# Instruções para Corrigir Projeto Vercel - ionic-health-pq44

**Data**: 1/12/2025  
**Projeto**: ionic-health-pq44  
**Problema**: Root Directory não configurado corretamente para `demo-app`

## ⚠️ Problema Identificado

O projeto **ionic-health-pq44** já existe na Vercel, mas o **Root Directory** não está apontando para `demo-app`. Isso faz com que a Vercel tente fazer build na raiz do repositório ao invés da pasta `demo-app/` onde está a aplicação Next.js.

## ✅ Solução Passo a Passo

### Passo 1: Acessar o Projeto na Vercel

1. Acessar: https://vercel.com/dashboard
2. Selecionar team: **nessbr-projects**
3. Abrir o projeto: **ionic-health-pq44**

### Passo 2: Configurar Root Directory

1. No projeto, clicar em **"Settings"** (ícone de engrenagem)
2. No menu lateral, selecionar **"General"**
3. Scroll até encontrar a seção **"Root Directory"**
4. Clicar em **"Edit"**
5. **Alterar para**: `demo-app`
6. Clicar em **"Save"**

### Passo 3: Verificar Outras Configurações

Enquanto estiver em Settings → General, verificar:

- **Framework Preset**: Next.js ✅
- **Build Command**: `npm run build` (ou deixar padrão)
- **Output Directory**: `.next` (ou deixar padrão)
- **Install Command**: `npm install` (ou deixar padrão)
- **Node.js Version**: 18.x ou 20.x ✅

### Passo 4: Fazer Novo Deploy

Após salvar o Root Directory:

1. Ir para a aba **"Deployments"**
2. Encontrar o último deployment
3. Clicar nos três pontos (`...`) → **"Redeploy"**
4. OU simplesmente fazer push para `main` (se auto-deploy estiver ativo)

### Passo 5: Verificar Build

1. Acompanhar o build em tempo real
2. Verificar se não há erros de "Cannot find module"
3. Verificar se encontra o `package.json` em `demo-app/`
4. Aguardar conclusão

### Passo 6: Testar Aplicação

1. Após deploy concluído, acessar a URL:
   - **Production**: https://ionic-health-pq44.vercel.app
   - OU a URL do deployment específico

2. Verificar:
   - [ ] Página carrega corretamente
   - [ ] Estilos CSS aplicados
   - [ ] Diagramas Mermaid renderizam
   - [ ] Navegação funciona
   - [ ] Console sem erros críticos

## Arquivo vercel.json

Foi criado um arquivo `vercel.json` na raiz do repositório com:

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

**Importante**: Este arquivo ajuda, mas **o Root Directory ainda precisa ser configurado no Dashboard da Vercel** para garantir que funcione corretamente.

## Verificação de Configuração Correta

Após corrigir, o projeto deve ter:

### Settings → General

- ✅ Root Directory: `demo-app`
- ✅ Framework Preset: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

### Settings → Git

- ✅ Production Branch: `main`
- ✅ Auto-Deploy: Enabled

## Troubleshooting

### Se o Root Directory não salvar

1. Verificar permissões do projeto
2. Tentar via Settings → General novamente
3. Verificar se há conflitos com `vercel.json`

### Se o build ainda falhar

1. Ver logs do build na Vercel
2. Verificar se `demo-app/package.json` existe
3. Verificar se todas as dependências estão listadas
4. Verificar se há erros de TypeScript

### Se a aplicação não carregar

1. Verificar console do navegador
2. Verificar Network tab (recursos carregando?)
3. Verificar se Mermaid está carregando corretamente
4. Verificar logs da Vercel

## Status Atual

- ✅ Projeto existe: `ionic-health-pq44`
- ✅ Arquivo `vercel.json` criado na raiz
- ⏳ **Pendente**: Configurar Root Directory no Dashboard
- ⏳ **Pendente**: Novo deploy com configuração correta

## Próximos Passos

1. **URGENTE**: Configurar Root Directory = `demo-app` no Dashboard Vercel
2. Fazer novo deploy
3. Verificar se aplicação funciona
4. Documentar URL final da aplicação

---

**Última Atualização**: 1/12/2025  
**Ação Necessária**: Configurar Root Directory no Dashboard Vercel


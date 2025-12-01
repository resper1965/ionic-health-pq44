# Instruções para Criar Novo Projeto no Vercel

## Passo 1: Deletar Projeto Antigo

1. Acesse: https://vercel.com/nessbr-projects/ionic-health-pq44/settings
2. Role até a seção **"Danger Zone"**
3. Clique em **"Delete Project"**
4. Confirme a exclusão

## Passo 2: Criar Novo Projeto

### Via Dashboard (Recomendado):

1. Acesse: https://vercel.com/new
2. Clique em **"Import Git Repository"**
3. Selecione o repositório: `resper1965/ionic-health-pq44`
4. Configure o projeto:
   - **Project Name**: `ionic-health-pq44` (ou outro nome desejado)
   - **Framework Preset**: Next.js (será detectado automaticamente)
   - **Root Directory**: `demo-app` ⚠️ **MUITO IMPORTANTE!**
   - **Build Command**: `npm run build` (automático)
   - **Output Directory**: `.next` (automático)
   - **Install Command**: `npm install` (automático)
5. Clique em **"Deploy"**

### Via CLI (Alternativo):

```bash
cd demo-app
vercel login
vercel
# Quando perguntar:
# - Set up and deploy? Yes
# - Which scope? [sua organização/team]
# - Link to existing project? No
# - What's your project's name? ionic-health-pq44
# - In which directory is your code located? ./
# - Want to override the settings? No

# Para fazer deploy em produção:
vercel --prod
```

## Configurações Importantes

- ✅ **Root Directory**: Deve ser `demo-app`
- ✅ **Framework**: Next.js (detectado automaticamente)
- ✅ **Node Version**: 18.x ou superior (configurado em package.json)
- ✅ **Region**: gru1 (Brasil) - já configurado em vercel.json

## Após o Deploy

O Vercel criará automaticamente:
- URL de preview para cada commit
- URL de produção: `https://ionic-health-pq44.vercel.app` (ou nome que você escolher)

## Verificação

Após o deploy, verifique:
1. ✅ Build completou sem erros
2. ✅ Aplicação está acessível
3. ✅ Todas as páginas estão funcionando
4. ✅ Diagramas Mermaid estão renderizando

---

**Data**: 1/12/2025
**Repositório**: https://github.com/resper1965/ionic-health-pq44
**Diretório**: demo-app/


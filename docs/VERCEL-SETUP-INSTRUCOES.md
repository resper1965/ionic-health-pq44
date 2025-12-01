# Instruções para Criar Projeto na Vercel - ihpq44

**Status**: ⏳ A criar  
**Projeto Vercel**: ihpq44  
**Aplicação**: Aplicação de Apresentação do Processo nCommand Lite

## Método Recomendado: Via Dashboard Vercel

### Passo 1: Acessar Vercel Dashboard

1. Acessar: https://vercel.com/dashboard
2. Fazer login com sua conta
3. Selecionar o Team: `nessbr-projects` (ou o team apropriado)

### Passo 2: Importar Repositório GitHub

1. Clicar em **"Add New..."** → **"Project"**
2. Se o repositório já estiver conectado:
   - Procurar por: `resper1965/ionic-health-pq44`
   - Clicar em **"Import"**
3. Se o repositório não aparecer:
   - Clicar em **"Adjust GitHub App Permissions"**
   - Conceder permissão para acessar o repositório
   - Retornar e procurar novamente

### Passo 3: Configurar Projeto

**⚠️ ATENÇÃO: Configurações Importantes**

1. **Project Name**: `ihpq44`

2. **Framework Preset**: 
   - Deve detectar automaticamente: **Next.js**
   - Se não detectar, selecionar manualmente: **Next.js**

3. **Root Directory**: 
   - ⚠️ **IMPORTANTE**: Deve ser `demo-app`
   - Clicar em **"Edit"** ao lado de Root Directory
   - Alterar para: `demo-app`
   - Confirmar

4. **Build and Output Settings**:
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)
   - Install Command: `npm install` (padrão)

5. **Environment Variables**:
   - Por enquanto, nenhuma variável necessária
   - Deixar vazio

### Passo 4: Deploy

1. Revisar todas as configurações
2. Verificar especialmente que **Root Directory = demo-app**
3. Clicar em **"Deploy"**
4. Aguardar o build (pode levar 2-5 minutos)

### Passo 5: Verificar Deploy

1. Aguardar conclusão do build
2. URL será gerada automaticamente: `https://ihpq44.vercel.app` (ou similar)
3. Clicar na URL para verificar se a aplicação está funcionando

## Método Alternativo: Via Vercel CLI

Se preferir usar a CLI:

```bash
# Navegar para o diretório da aplicação
cd /home/resper/Ionic.Health-PQ44/demo-app

# Login (se não estiver logado)
vercel login

# Deploy interativo
vercel

# Durante o deploy, responder:
# - Set up and deploy? Y
# - Which scope? [Selecionar team_iz6jrPdYbt5I3BtGFHb6hY16 ou nessbr-projects]
# - Link to existing project? N
# - What's your project's name? ihpq44
# - In which directory is your code located? ./
# - Override settings? N

# Depois do primeiro deploy, para produção:
vercel --prod
```

## Checklist de Verificação

Após criar o projeto, verificar:

- [ ] Projeto criado com nome `ihpq44`
- [ ] Root Directory configurado como `demo-app`
- [ ] Build bem-sucedido
- [ ] URL acessível
- [ ] Aplicação carrega corretamente
- [ ] Diagramas Mermaid renderizam
- [ ] Estilos CSS aplicados

## Troubleshooting

### Problema: Build falha

**Possíveis causas**:
- Root Directory não está como `demo-app`
- Dependências faltando no `package.json`
- Erro de TypeScript ou lint

**Solução**:
- Verificar logs do build na Vercel
- Verificar se `demo-app/package.json` existe
- Verificar se todas as dependências estão listadas

### Problema: Página em branco

**Solução**:
- Verificar console do navegador
- Verificar logs da Vercel
- Verificar se componentes estão sendo importados corretamente

### Problema: Mermaid não renderiza

**Solução**:
- Verificar se `mermaid` está em `dependencies` (não `devDependencies`)
- Aguardar alguns segundos (Mermaid pode demorar para carregar)
- Verificar console para erros JavaScript

## Após o Deploy

### 1. Configurar Auto-Deploy (Opcional)

1. Vercel Dashboard → Project → Settings → Git
2. Production Branch: `main`
3. Deploy automático já estará habilitado

### 2. Configurar Domínio Customizado (Opcional)

1. Settings → Domains
2. Add Domain: `demo.ncommand-lite.com`
3. Configurar DNS no Cloudflare conforme `docs/manuals/cloudflare/DNS-MANAGEMENT.md`

### 3. Documentar URL

Após o deploy, documentar a URL em:
- `docs/PRESENTATION-APP.md`
- `docs/DEPLOY-VERCEL-SETUP.md`

## Links Úteis

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Projeto (após criar)**: https://vercel.com/[team]/ihpq44
- **Deploy URL**: https://ihpq44.vercel.app (ou similar)

## Status Atual

- ⏳ **Aguardando**: Criação do projeto na Vercel
- 📝 **Documentação**: Completa e pronta
- ✅ **Código**: Committado no GitHub
- ✅ **Configuração**: Arquivos prontos (`vercel.json`, etc.)

---

**Próximo Passo**: Criar projeto na Vercel seguindo as instruções acima

**Última Atualização**: 2024  
**Responsável**: DevOps Team


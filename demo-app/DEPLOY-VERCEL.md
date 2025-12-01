# Como Fazer Deploy no Vercel

## Método 1: Via Dashboard do Vercel (Recomendado)

1. Acesse: https://vercel.com/new
2. Conecte seu repositório GitHub: `resper1965/ionic-health-pq44`
3. Configure o projeto:
   - **Framework Preset**: Next.js (detecta automaticamente)
   - **Root Directory**: `demo-app`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
4. Clique em "Deploy"

## Método 2: Via CLI

```bash
cd demo-app
vercel login
vercel link
# Quando perguntar:
# - Set up and deploy? Y
# - Which scope? [sua organização]
# - Link to existing project? N
# - What's your project's name? ionic-health-pq44
# - In which directory is your code located? ./
# - Want to override the settings? N

vercel --prod
```

## Configurações Importantes

- **Root Directory**: `demo-app` (ou vazio se estiver dentro do diretório)
- **Framework**: Next.js
- **Node Version**: 18.x ou superior
- **Region**: gru1 (Brasil) - configurado em vercel.json


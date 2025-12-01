# Manual - Cloudflare

**Versão**: 1.0.0  
**Data**: 2024

## Visão Geral

Cloudflare gerencia o DNS e serviços de rede do projeto nCommand Lite, fornecendo DNS rápido, CDN, proteção DDoS e outros serviços de segurança e performance.

**Função no Processo**: Gerenciamento de DNS, SSL/TLS, CDN e proteção de segurança para aplicações web.

## Serviços Utilizados

### DNS Management

**Função**: Gerenciamento de registros DNS

#### Domínios Gerenciados

| Domínio | Tipo | Uso |
|---------|------|-----|
| `ncommand-lite.com` | Principal | Domínio de produção |
| `demo.ncommand-lite.com` | Subdomínio | Aplicação demonstrativa |
| `staging.ncommand-lite.com` | Subdomínio | Ambiente de staging |
| `api.ncommand-lite.com` | Subdomínio | APIs públicas |

#### Configuração de Registros DNS

**Registros A (IPv4)**:

```
Tipo    Nome              Valor              TTL     Proxy
A       @                 20.xxx.xxx.xxx      Auto    ✅ Proxied
A       demo              20.xxx.xxx.xxx      Auto    ✅ Proxied
A       staging           20.xxx.xxx.xxx      Auto    ✅ Proxied
```

**Registros AAAA (IPv6)**:

```
Tipo    Nome              Valor              TTL     Proxy
AAAA    @                 2001:xxx:xxx:xxx    Auto    ✅ Proxied
```

**Registros CNAME**:

```
Tipo    Nome              Valor                          TTL     Proxy
CNAME   api               ncommand-lite.azurewebsites.net Auto    ✅ Proxied
CNAME   www               ncommand-lite.com              Auto    ✅ Proxied
```

**Registros MX (Email)**:

```
Tipo    Nome    Prioridade    Valor                  TTL
MX      @       10            mail.example.com       Auto
```

**Registros TXT (Verificação)**:

```
Tipo    Nome    Valor                                        TTL
TXT     @       "v=spf1 include:_spf.example.com ~all"       Auto
TXT     _dmarc  "v=DMARC1; p=quarantine; rua=mailto:..."     Auto
```

### SSL/TLS

**Função**: Certificados SSL/TLS automáticos

#### Modo SSL/TLS

**Recomendado**: **Full (strict)**

**Configuração**:
1. SSL/TLS → Overview
2. Encryption mode: Full (strict)
3. Always Use HTTPS: ✅ On
4. Minimum TLS Version: 1.2

**Benefícios**:
- Certificados SSL automáticos e gratuitos
- Renovação automática
- Suporte a múltiplos domínios

### CDN e Performance

**Função**: Aceleração de conteúdo e cache

#### Cache Rules

**Configuração para nCommand Lite**:

1. Rules → Cache Rules → Create Rule
2. Rule Name: `ncommand-lite-static-assets`
3. When incoming requests match:
   - URI Path: `starts with /static/` OR `ends with .css/.js/.png/.jpg`
4. Then:
   - Cache Level: Standard
   - Edge Cache TTL: 1 month

**Arquivos Estáticos**:
- Cache automático
- Compression: ✅ Brotli, Gzip
- Minification: ✅ HTML, CSS, JS

### Security

**Função**: Proteção contra ameaças

#### WAF (Web Application Firewall)

**Regras Ativadas**:

1. **Cloudflare Managed Rules**:
   - ✅ OWASP Core Ruleset
   - ✅ Cloudflare Managed Ruleset

2. **Custom Rules**:
   - Bloquear tráfego de países específicos (se necessário)
   - Rate limiting para APIs

#### DDoS Protection

**Automático**: ✅ Ativo por padrão

**Configurações**:
- Rate Limiting: Configurado conforme necessidade
- Challenge Passage: 30 minutes
- Security Level: Medium (ajustável)

#### Bot Management

**Configuração**:

1. Security → Bots
2. Bot Fight Mode: ✅ On
3. Super Bot Fight Mode: Se necessário

### Page Rules

**Função**: Regras de comportamento por URL

#### Regras Configuradas

**Regra 1: Cache Static Assets**
```
URL: *ncommand-lite.com/static/*
Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month
  - Browser Cache TTL: 1 month
```

**Regra 2: API Rate Limiting**
```
URL: *ncommand-lite.com/api/*
Settings:
  - Security Level: High
  - Browser Integrity Check: On
  - Rate Limiting: 100 requests/min por IP
```

**Regra 3: Always HTTPS**
```
URL: *ncommand-lite.com/*
Settings:
  - Always Use HTTPS: On
  - Forwarding URL (301): https://ncommand-lite.com$1
```

## Configuração Inicial

### Passo 1: Adicionar Domínio

1. Cloudflare Dashboard → Add a Site
2. Inserir domínio: `ncommand-lite.com`
3. Escanear DNS existente
4. Cloudflare sugere registros
5. Revisar e continuar

### Passo 2: Atualizar Nameservers

1. Cloudflare fornece nameservers:
   ```
   nameserver1.cloudflare.com
   nameserver2.cloudflare.com
   ```

2. Atualizar no registrador do domínio:
   - Acessar registrador (ex: Registro.br, GoDaddy)
   - Alterar nameservers para os fornecidos pela Cloudflare
   - Aguardar propagação (até 48h, geralmente < 1h)

### Passo 3: Configurar SSL/TLS

1. SSL/TLS → Overview
2. Encryption mode: Full (strict)
3. Edge Certificates:
   - ✅ Always Use HTTPS
   - ✅ Automatic HTTPS Rewrites
   - Minimum TLS Version: 1.2

### Passo 4: Configurar DNS Records

1. DNS → Records
2. Adicionar registros conforme configuração acima
3. Verificar Proxy status (nuvem laranja = proxied)

### Passo 5: Configurar Security

1. Security → Settings
2. Security Level: Medium
3. Challenge Passage: 30 minutes
4. WAF: ✅ Enable

## Integração com Azure

### Azure App Service

**Configuração de Custom Domain**:

1. Azure Portal → App Service → Custom domains
2. Adicionar domínio: `ncommand-lite.com`
3. Verificar domínio (via TXT record no Cloudflare)
4. Azure fornece IP para registro A no Cloudflare
5. Criar registro A no Cloudflare apontando para IP do Azure

**Proxy através da Cloudflare**:

- ✅ Ativar Proxy (nuvem laranja)
- Benefícios: Proteção DDoS, CDN, SSL automático

### SSL Certificate

**Opções**:

1. **Cloudflare SSL** (Recomendado):
   - Certificado Origin CA da Cloudflare
   - Instalar no Azure App Service
   - Gratuito e renovação automática

2. **Azure App Service Certificate**:
   - Gerenciado pelo Azure
   - Compatível com Cloudflare Proxy

**Processo com Origin CA**:

1. Cloudflare → SSL/TLS → Origin Server
2. Create Certificate
3. Hostnames: `*.ncommand-lite.com`, `ncommand-lite.com`
4. Private Key Type: RSA (2048)
5. Certificate Validity: 15 years
6. Download certificate e private key
7. Instalar no Azure App Service

## Monitoramento e Analytics

### Analytics Dashboard

**Métricas Disponíveis**:

- Requests: Total de requisições
- Bandwidth: Tráfego de dados
- Threats Blocked: Ameaças bloqueadas
- SSL/TLS: Requisições HTTPS
- Cache Hit Ratio: Eficiência do cache

### Logs

**Cloudflare Logs**:

1. Logs → Logpush
2. Configurar para enviar logs para:
   - Azure Blob Storage
   - Azure Log Analytics
   - Outro endpoint

**Campos Úteis**:
- Timestamp
- Client IP
- Request Method
- Request URI
- Response Status
- Threat Score

## Troubleshooting

### Problema: Domínio não resolve

**Solução**:
1. Verificar nameservers no registrador
2. Verificar propagação DNS: `nslookup ncommand-lite.com`
3. Verificar registros DNS no Cloudflare
4. Verificar se Proxy está ativo (pode causar cache)

### Problema: SSL Certificate Error

**Solução**:
1. Verificar modo SSL/TLS (deve ser Full ou Full Strict)
2. Verificar certificado no servidor de origem
3. Verificar se Always Use HTTPS está ativo
4. Verificar certificado Origin CA se usando Cloudflare Proxy

### Problema: Site muito lento

**Solução**:
1. Verificar cache rules
2. Verificar se assets estão sendo cacheados
3. Ativar Auto Minify
4. Verificar performance no Analytics

### Problema: WAF bloqueando tráfego legítimo

**Solução**:
1. Security → Events → Filtrar por bloqueios
2. Analisar requisições bloqueadas
3. Criar WAF Custom Rule para permitir (se seguro)
4. Adicionar IPs a whitelist se necessário

## Boas Práticas

1. **Sempre usar Proxy** para domínios de produção (proteção DDoS)
2. **Configurar Always Use HTTPS** para forçar HTTPS
3. **Monitorar Analytics** regularmente para detectar anomalias
4. **Revisar WAF Rules** periodicamente
5. **Manter DNS records organizados** com documentação
6. **Usar Origin CA** para certificados entre Cloudflare e Azure

## Configurações Específicas do Projeto

### DNS Records do nCommand Lite

**Produção**:
```
A       @                 [Azure IP]     Auto    ✅ Proxied
A       demo              [Azure IP]     Auto    ✅ Proxied
A       staging           [Azure IP]     Auto    ✅ Proxied
CNAME   www               ncommand-lite.com      Auto    ✅ Proxied
CNAME   api               ncommand-lite.azurewebsites.net Auto ✅ Proxied
```

**SSL/TLS**:
- Mode: Full (strict)
- Always Use HTTPS: ✅ On
- Minimum TLS: 1.2

**Security**:
- Security Level: Medium
- WAF: ✅ Enabled
- Bot Fight Mode: ✅ On

## Referências

- [Documentação Oficial Cloudflare](https://developers.cloudflare.com/)
- [Cloudflare DNS Docs](https://developers.cloudflare.com/dns/)
- [Cloudflare SSL/TLS Docs](https://developers.cloudflare.com/ssl/)

---

**Última Atualização**: 2024  
**Responsável**: DevOps Team


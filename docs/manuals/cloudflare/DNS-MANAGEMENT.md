# Processo de Gerenciamento de DNS - Cloudflare

**Versão**: 1.0.0  
**Data**: 2024  
**Responsável**: DevOps Team

## Visão Geral

Este documento descreve o processo passo a passo para criar, modificar e gerenciar entradas DNS no Cloudflare para o projeto nCommand Lite.

## Pré-requisitos

### Acesso Necessário

- ✅ Conta Cloudflare ativa
- ✅ Domínio configurado no Cloudflare
- ✅ Permissões de edição no DNS do domínio
- ✅ Informações do destino (IP, CNAME, etc.)

### Informações Necessárias

Antes de criar uma entrada DNS, você precisa:

1. **Tipo de registro** (A, AAAA, CNAME, MX, TXT, etc.)
2. **Nome do registro** (subdomínio ou @ para raiz)
3. **Valor** (IP, domínio de destino, etc.)
4. **TTL** (Time To Live) ou usar Auto
5. **Proxy status** (Proxied ou DNS only)

## Tipos de Registros DNS Comuns

### Registro A (IPv4)

**Uso**: Apontar domínio/subdomínio para um endereço IPv4

**Exemplos**:
- `@` (raiz) → `20.xxx.xxx.xxx`
- `www` → `20.xxx.xxx.xxx`
- `api` → `20.xxx.xxx.xxx`

### Registro AAAA (IPv6)

**Uso**: Apontar domínio/subdomínio para um endereço IPv6

**Exemplos**:
- `@` (raiz) → `2001:xxx:xxx:xxx::`

### Registro CNAME

**Uso**: Apontar para outro nome de domínio

**Exemplos**:
- `www` → `ncommand-lite.com`
- `api` → `ncommand-lite.azurewebsites.net`
- `staging` → `ncommand-lite-staging.azurewebsites.net`

### Registro MX (Mail Exchange)

**Uso**: Configurar servidores de email

**Exemplos**:
- `@` → `mail.example.com` (Priority: 10)

### Registro TXT

**Uso**: Verificações, SPF, DKIM, DMARC

**Exemplos**:
- Verificação de domínio
- SPF records
- DMARC policy

## Processo Passo a Passo

### Passo 1: Acessar o Cloudflare Dashboard

1. Abrir navegador e acessar: https://dash.cloudflare.com
2. Fazer login com suas credenciais
3. Selecionar conta/organização: `ionic-health` (ou conforme configurado)

### Passo 2: Selecionar o Domínio

1. Na lista de sites, localizar e clicar em: `ncommand-lite.com`
2. O dashboard do domínio será exibido

### Passo 3: Navegar para DNS

1. No menu lateral, clicar em **"DNS"**
2. A seção de DNS Records será exibida
3. Você verá a lista atual de registros DNS

### Passo 4: Adicionar Nova Entrada DNS

1. Clicar no botão **"Add record"** (Adicionar registro)

2. **Preencher os campos**:

   **Tipo** (Type):
   - Selecionar o tipo de registro:
     - `A` para IPv4
     - `AAAA` para IPv6
     - `CNAME` para alias
     - `MX` para email
     - `TXT` para texto
     - Outros conforme necessário

   **Nome** (Name):
   - Para raiz do domínio: `@`
   - Para subdomínio: `subdominio` (ex: `www`, `api`, `demo`)
   - Não incluir o domínio completo (ex: usar `api` não `api.ncommand-lite.com`)

   **IPv4/IPv6/Destino** (Content/Value):
   - **Para A**: Inserir endereço IPv4 (ex: `20.185.xxx.xxx`)
   - **Para AAAA**: Inserir endereço IPv6 (ex: `2001:xxx::`)
   - **Para CNAME**: Inserir domínio de destino (ex: `ncommand-lite.azurewebsites.net`)
   - **Para MX**: Inserir servidor de email (ex: `mail.example.com`)
   - **Para TXT**: Inserir texto conforme necessário

   **TTL** (Time To Live):
   - Selecionar `Auto` (recomendado - usa 300 segundos se Proxied)
   - Ou definir manualmente:
     - `1 minute` (600 segundos)
     - `5 minutes` (300 segundos)
     - `30 minutes` (1800 segundos)
     - `1 hour` (3600 segundos)
     - `12 hours` (43200 segundos)
     - `1 day` (86400 segundos)

   **Proxy status** (Cloudflare Proxy):
   - ✅ **Proxied** (nuvem laranja):
     - CDN e proteção DDoS ativados
     - SSL automático
     - Ocultação do IP real
     - **Usar para**: Sites web, APIs públicas, produção
   
   - ⚠️ **DNS only** (nuvem cinza):
     - Apenas DNS, sem proxy
     - IP real visível
     - **Usar para**: Subdomínios de email, serviços que não podem ser proxied

   **Priority** (apenas para MX):
   - Número de prioridade (menor = maior prioridade)
   - Exemplo: `10`, `20`, `30`

### Passo 5: Salvar o Registro

1. Revisar todas as informações inseridas
2. Clicar no botão **"Save"** (Salvar)
3. O registro será adicionado à lista

### Passo 6: Verificar Propagação

1. Aguardar alguns minutos para propagação DNS
2. Verificar usando ferramentas:
   - **nslookup**: `nslookup api.ncommand-lite.com`
   - **dig**: `dig api.ncommand-lite.com`
   - **Online**: https://dnschecker.org/

## Casos de Uso Específicos

### Caso 1: Criar Subdomínio para Aplicação Azure

**Cenário**: Criar `demo.ncommand-lite.com` apontando para Azure App Service

**Passo a Passo**:

1. No Azure Portal, obter o IP do App Service ou o hostname
   - App Service → Overview → Properties → Outbound IP addresses
   - OU usar hostname: `ncommand-lite-demo.azurewebsites.net`

2. No Cloudflare:
   - Type: `A` (se usando IP) OU `CNAME` (se usando hostname)
   - Name: `demo`
   - Content:
     - Se A: Inserir IP do Azure (ex: `20.185.xxx.xxx`)
     - Se CNAME: Inserir hostname Azure (ex: `ncommand-lite-demo.azurewebsites.net`)
   - TTL: `Auto`
   - Proxy: ✅ Proxied
   - Save

3. **Nota**: Se usar CNAME com Azure, Cloudflare pode sugerir converter para A automaticamente.

### Caso 2: Configurar Subdomínio de API

**Cenário**: Criar `api.ncommand-lite.com` apontando para API Gateway

**Passo a Passo**:

1. Type: `CNAME`
2. Name: `api`
3. Content: `api-gateway.example.com` (ou IP se necessário)
4. TTL: `Auto`
5. Proxy: ✅ Proxied (para proteção)
6. Save

### Caso 3: Configurar DNS para Staging

**Cenário**: Criar `staging.ncommand-lite.com`

**Passo a Passo**:

1. Type: `CNAME`
2. Name: `staging`
3. Content: `ncommand-lite-staging.azurewebsites.net`
4. TTL: `Auto`
5. Proxy: ✅ Proxied
6. Save

### Caso 4: Configurar Registro MX (Email)

**Cenário**: Configurar email para `@ncommand-lite.com`

**Passo a Passo**:

1. Type: `MX`
2. Name: `@`
3. Mail server: `mail.example.com` (ou servidor de email configurado)
4. Priority: `10` (menor número = maior prioridade)
5. TTL: `Auto`
6. Proxy: ⚠️ **DNS only** (obrigatório para MX - não pode ser Proxied)
7. Save

**Nota**: Pode haver múltiplos registros MX com prioridades diferentes.

### Caso 5: Adicionar Registro TXT para Verificação

**Cenário**: Verificar domínio para serviço externo (ex: Google, Microsoft)

**Passo a Passo**:

1. Type: `TXT`
2. Name: `@` (ou subdomínio específico)
3. Content: Texto fornecido pelo serviço (ex: `google-site-verification=xxx`)
4. TTL: `Auto`
5. Proxy: ⚠️ **DNS only** (obrigatório para TXT)
6. Save

### Caso 6: Configurar SPF Record

**Cenário**: Configurar SPF para email

**Passo a Passo**:

1. Type: `TXT`
2. Name: `@`
3. Content: `"v=spf1 include:_spf.example.com ~all"`
4. TTL: `Auto`
5. Proxy: ⚠️ **DNS only**
6. Save

### Caso 7: Configurar DMARC

**Cenário**: Configurar política DMARC

**Passo a Passo**:

1. Type: `TXT`
2. Name: `_dmarc`
3. Content: `"v=DMARC1; p=quarantine; rua=mailto:admin@ncommand-lite.com"`
4. TTL: `Auto`
5. Proxy: ⚠️ **DNS only**
6. Save

## Editar Entrada DNS Existente

### Processo

1. Acessar Cloudflare Dashboard → DNS
2. Localizar o registro na lista
3. Clicar no ícone de **edição** (lápis) à direita do registro
4. Modificar os campos necessários
5. Clicar em **"Save"**

### Quando Editar

- ✅ Mudança de IP do servidor
- ✅ Alteração de destino CNAME
- ✅ Atualização de TTL
- ✅ Mudança de Proxy status
- ✅ Correção de erros

## Excluir Entrada DNS

### Processo

1. Acessar Cloudflare Dashboard → DNS
2. Localizar o registro na lista
3. Clicar no ícone de **exclusão** (lixeira) à direita
4. Confirmar a exclusão

### ⚠️ Atenção

- Excluir um registro DNS remove imediatamente o mapeamento
- Pode causar indisponibilidade do serviço
- Verificar dependências antes de excluir
- Considerar desativar temporariamente ao invés de excluir

## Checklist de Criação de Entrada DNS

Antes de criar uma nova entrada, verificar:

- [ ] Tipo de registro correto (A, CNAME, MX, TXT)?
- [ ] Nome do registro correto (sem domínio completo)?
- [ ] Valor/destino correto?
- [ ] Proxy status apropriado (Proxied para web, DNS only para email)?
- [ ] TTL configurado (Auto recomendado)?
- [ ] Não há conflitos com registros existentes?
- [ ] Documentação atualizada com a nova entrada?

## Verificação Pós-Criação

### 1. Verificação Imediata no Cloudflare

1. DNS → Records
2. Confirmar que o registro aparece na lista
3. Verificar se informações estão corretas

### 2. Verificação de Propagação

**Aguardar**: 1-5 minutos (geralmente instantâneo no Cloudflare)

**Ferramentas de Verificação**:

```bash
# nslookup
nslookup api.ncommand-lite.com

# dig
dig api.ncommand-lite.com +short

# Online
# https://dnschecker.org/
```

**Verificar**:
- Resposta correta do DNS
- IP correto (se A record)
- CNAME correto (se CNAME record)

### 3. Verificação Funcional

**Para Web Services**:
- Testar acesso via browser
- Verificar se SSL/TLS funciona
- Testar se proxy está ativo (verificar headers)

**Para APIs**:
- Testar endpoint
- Verificar conectividade

**Para Email**:
- Testar envio/recebimento
- Verificar registros MX com: `dig MX ncommand-lite.com`

## Troubleshooting

### Problema: Registro não aparece após criar

**Soluções**:
1. Recarregar a página do Cloudflare
2. Verificar se salvou corretamente
3. Verificar filtros/ordenação na lista
4. Limpar cache do navegador

### Problema: DNS não resolve

**Soluções**:
1. Aguardar propagação (até 5 minutos)
2. Verificar se registro está correto
3. Verificar se nameservers do domínio apontam para Cloudflare
4. Verificar com diferentes ferramentas DNS
5. Verificar cache DNS local: `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

### Problema: Subdomínio não carrega

**Soluções**:
1. Verificar se registro DNS está correto
2. Verificar se serviço de destino está online
3. Verificar firewall/security groups
4. Verificar SSL/TLS se usando Proxied
5. Verificar logs do Cloudflare (Analytics)

### Problema: Proxy não funciona

**Soluções**:
1. Verificar se Proxy está ativado (nuvem laranja)
2. Verificar se serviço de origem aceita conexões do Cloudflare
3. Verificar SSL/TLS mode (deve ser Full ou Full Strict)
4. Verificar certificado Origin CA no servidor

### Problema: Email não funciona após criar MX

**Soluções**:
1. Verificar se MX record está como DNS only (não Proxied)
2. Verificar prioridade do MX
3. Verificar se servidor de email está configurado corretamente
4. Verificar SPF, DKIM, DMARC records

## Boas Práticas

### 1. Nomenclatura Consistente

- Usar convenções claras (ex: `api`, `demo`, `staging`)
- Documentar todas as entradas DNS
- Manter lista atualizada

### 2. Proxy Status

- ✅ **Proxied** para:
  - Sites web
  - APIs públicas
  - Qualquer serviço que se beneficia de CDN/DDoS protection

- ⚠️ **DNS only** para:
  - Registros MX (email)
  - Registros TXT (verificações)
  - Serviços que não funcionam com proxy
  - IPs que precisam ser conhecidos diretamente

### 3. TTL

- **Auto**: Recomendado para maioria dos casos
- **Baixo (1-5 min)**: Se mudanças frequentes esperadas
- **Alto (12h-1d)**: Se raramente muda (reduz carga no DNS)

### 4. Documentação

- ✅ Documentar todas as entradas DNS criadas
- ✅ Manter registro de propósito de cada entrada
- ✅ Documentar mudanças e data
- ✅ Manter lista de dependências

### 5. Segurança

- ✅ Usar Proxy quando possível (proteção DDoS)
- ✅ Verificar que serviços de origem aceitam Cloudflare IPs
- ✅ Manter certificados SSL atualizados
- ✅ Revisar configurações periodicamente

## Registros DNS do Projeto nCommand Lite

### Produção

| Tipo | Nome | Valor | Proxy | Uso |
|------|------|-------|-------|-----|
| A | @ | [Azure IP] | ✅ | Domínio principal |
| CNAME | www | ncommand-lite.com | ✅ | WWW redirect |
| CNAME | api | ncommand-lite.azurewebsites.net | ✅ | API pública |

### Desenvolvimento/Staging

| Tipo | Nome | Valor | Proxy | Uso |
|------|------|-------|-------|-----|
| CNAME | demo | ncommand-lite-demo.azurewebsites.net | ✅ | Aplicação demo |
| CNAME | staging | ncommand-lite-staging.azurewebsites.net | ✅ | Ambiente staging |

### Email (se configurado)

| Tipo | Nome | Valor | Priority | Proxy | Uso |
|------|------|-------|----------|-------|-----|
| MX | @ | mail.example.com | 10 | ⚠️ DNS only | Email |

### Verificações/Segurança

| Tipo | Nome | Valor | Proxy | Uso |
|------|------|-------|-------|-----|
| TXT | @ | "v=spf1..." | ⚠️ DNS only | SPF |
| TXT | _dmarc | "v=DMARC1..." | ⚠️ DNS only | DMARC |

## Exemplos Visuais

### Interface Cloudflare - Adicionar Registro

```
┌─────────────────────────────────────────┐
│ Add DNS record                          │
├─────────────────────────────────────────┤
│ Type:     [A ▼]                         │
│ Name:     [api        ]                 │
│ IPv4:     [20.xxx.xxx.xxx]              │
│ Proxy:    [✅] Proxied                  │
│ TTL:      [Auto ▼]                      │
│                                          │
│           [Cancel]  [Save]              │
└─────────────────────────────────────────┘
```

### Lista de Registros DNS

```
Type    Name      Content                        Proxy    TTL      Actions
──────────────────────────────────────────────────────────────────────────
A       @         20.xxx.xxx.xxx                 ✅       Auto     [✏️ 🗑️]
CNAME   www       ncommand-lite.com              ✅       Auto     [✏️ 🗑️]
CNAME   api       ncommand-lite.azurewebsites... ✅       Auto     [✏️ 🗑️]
CNAME   demo      ncommand-lite-demo.azurew...   ✅       Auto     [✏️ 🗑️]
MX      @         mail.example.com              ⚠️       Auto     [✏️ 🗑️]
```

## Referências

- [Documentação Cloudflare DNS](https://developers.cloudflare.com/dns/)
- [Cloudflare DNS Records Guide](https://developers.cloudflare.com/dns/manage-dns-records/)
- Manual Cloudflare completo: `docs/manuals/cloudflare/README.md`

## Contato e Suporte

**Em caso de dúvidas ou problemas**:
- DevOps Team: [contato]
- Cloudflare Support: [suporte]
- Documentação: Ver manual completo em `docs/manuals/cloudflare/README.md`

---

**Última Atualização**: 2024  
**Versão**: 1.0.0  
**Responsável**: DevOps Team


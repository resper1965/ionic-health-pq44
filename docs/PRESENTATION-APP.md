# Aplicação de Apresentação - nCommand Lite

**Versão**: 1.0.0  
**Data**: 2024

## Visão Geral

A aplicação de apresentação (`demo-app/`) é uma ferramenta **educacional e demonstrativa** que visa:

- Visualizar o processo completo de desenvolvimento do nCommand Lite
- Demonstrar todas as 5 fases do ciclo de vida regulatório
- Apresentar diagramas e fluxos de forma interativa
- Servir como material de apresentação e treinamento

## ⚠️ Importante - Distinção

### O que NÃO é:

- ❌ **NÃO é parte do produto nCommand Lite**
- ❌ **NÃO é uma aplicação médica**
- ❌ **NÃO é usada em produção**
- ❌ **NÃO faz parte do processo regulatório do produto**

### O que É:

- ✅ **Ferramenta de apresentação/demonstração**
- ✅ **Material educacional**
- ✅ **Referência visual do processo**
- ✅ **Aplicação web para visualização interativa**

## Estrutura

```
demo-app/
├── README.md                    # Documentação
├── src/                         # Código da aplicação
│   ├── app/                     # Next.js App Router
│   ├── components/              # Componentes React
│   │   ├── LifecyclePhase.tsx  # Componente de fase
│   │   ├── FullLifecycleDiagram.tsx  # Diagrama completo
│   │   └── AssetsArchitectureDiagram.tsx  # Arquitetura
│   └── utils/                   # Utilitários
├── docs/                        # Documentação das fases
└── package.json                 # Dependências
```

## Funcionalidades

### 1. Visualização das 5 Fases

- **FASE 1**: Planejamento, Risco e Infraestrutura
- **FASE 2**: Desenvolvimento e Codificação
- **FASE 3**: Verificação Automatizada
- **FASE 4**: Validação e Liberação
- **FASE 5**: Monitoramento Pós-Mercado

### 2. Diagramas Mermaid

- Fluxo completo do ciclo de vida
- Fluxo detalhado de cada fase
- Arquitetura de ativos

### 3. Documentação Interativa

- Cards informativos por fase
- Links para documentação completa
- Navegação intuitiva

## Deploy na Vercel

**Projeto**: ihpq44  
**URL**: https://ihpq44.vercel.app (após deploy)

### Propósito do Deploy

O deploy na Vercel serve para:

- ✅ Disponibilizar a apresentação publicamente
- ✅ Facilitar acesso durante apresentações
- ✅ Permitir acesso remoto para stakeholders
- ✅ Demonstrar o processo de forma visual

## Uso

### Durante Apresentações

1. Acessar URL da Vercel
2. Navegar pelas 5 fases
3. Mostrar diagramas interativos
4. Explicar o processo passo a passo

### Para Treinamento

1. Compartilhar URL com equipe
2. Usar como referência visual
3. Demonstrar integração entre ferramentas
4. Explicar fluxos de processo

## Relação com o Projeto

### Onde se Encaja

```
Ionic.Health-PQ44/
├── docs/                    # Documentação do processo
├── pipelines/               # Pipelines do nCommand Lite
├── infrastructure/          # IaC do nCommand Lite
├── spec-kit/                # Kit de Gestão de Especificações (ferramenta da apresentação)
└── demo-app/                # ← Aplicação de apresentação
    └── (Esta aplicação)
```

### Dependências

A aplicação de apresentação:

- ✅ Lê e visualiza a documentação em `docs/`
- ✅ Mostra o processo documentado
- ❌ **NÃO** interfere no processo real
- ❌ **NÃO** é parte da pipeline
- ❌ **NÃO** gera artefatos regulatórios

## Tecnologias

- **Next.js 14**: Framework React
- **Tailwind CSS**: Estilização
- **shadcn/ui**: Componentes UI
- **Mermaid**: Diagramas
- **TypeScript**: Tipagem

## Manutenção

### Responsabilidade

- **Código**: Dev Team (quando necessário)
- **Conteúdo**: QA Leader
- **Deploy**: DevOps

### Atualização

A aplicação deve ser atualizada quando:

- ✅ Novas fases são adicionadas ao processo
- ✅ Diagramas precisam ser atualizados
- ✅ Documentação é atualizada (referências)
- ✅ Bugs ou melhorias são identificados

## Referências

- Processo completo: `docs/PROCESS.md`
- Documentação das fases: `demo-app/docs/`
- Deploy: `docs/DEPLOY-VERCEL-SETUP.md`

---

**Última Atualização**: 2024  
**Responsável**: QA Leader


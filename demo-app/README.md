# Aplicação de Apresentação - Processo nCommand Lite

**Aplicação**: Aplicação de Apresentação/Demonstração  
**Versão**: 1.0.0  
**Tipo**: Aplicação Web de Apresentação  
**Propósito**: Demonstrar o processo de desenvolvimento SaMD

## ⚠️ Importante

Esta é uma **aplicação de apresentação e demonstração** que visualiza e explica o processo completo de desenvolvimento do nCommand Lite. **NÃO é parte do produto nCommand Lite em si**, mas sim uma ferramenta educacional para demonstração do ciclo de vida regulatório.

## Objetivo

Esta aplicação demonstra visualmente o ciclo de vida completo do processo de desenvolvimento de software médico utilizado no nCommand Lite, seguindo todas as fases do processo regulatório estabelecido:

- ✅ **FASE 1**: Planejamento, Risco e Infraestrutura
- ✅ **FASE 2**: Desenvolvimento e Codificação
- ✅ **FASE 3**: Verificação Automatizada
- ✅ **FASE 4**: Validação e Liberação
- ✅ **FASE 5**: Monitoramento Pós-Mercado

## Funcionalidade

Aplicação web interativa que apresenta visualmente:

- **Visualização das 5 Fases** do ciclo de vida regulatório
- **Diagramas Mermaid** dos fluxos de processo
- **Arquitetura de Ativos** (ferramentas, clouds, plataformas)
- **Documentação Interativa** do processo completo

**Propósito**: Educacional e demonstrativo para apresentações, treinamentos e referência do processo.

## Estrutura

```
demo-app/
├── README.md                    # Este arquivo
├── src/                         # Código fonte
├── tests/                       # Testes automatizados
├── docs/                        # Documentação do ciclo de vida
│   ├── phase-1/                 # FASE 1: Planejamento
│   ├── phase-2/                 # FASE 2: Desenvolvimento
│   ├── phase-3/                 # FASE 3: Verificação
│   ├── phase-4/                 # FASE 4: Validação
│   └── phase-5/                 # FASE 5: Monitoramento
└── package.json                 # Dependências
```

## Tecnologias

- **Frontend**: Next.js 14 (React)
- **Backend**: Next.js API Routes
- **Database**: SQLite (demo) / PostgreSQL (produção)
- **Testes**: Jest, React Testing Library
- **Segurança**: SonarCloud, Trivy, OWASP ZAP

## Como Executar

### Desenvolvimento

```bash
cd demo-app
npm install
npm run dev
```

Acesse: http://localhost:3000

### Testes

```bash
npm test
npm run test:coverage
```

### Build

```bash
npm run build
npm start
```

## Documentação do Ciclo de Vida

Consulte a documentação completa em `docs/`:

- **FASE 1**: `docs/phase-1/` - Especificações, análise de riscos, usabilidade
- **FASE 2**: `docs/phase-2/` - Código, commits, PRs
- **FASE 3**: `docs/phase-3/` - Testes, pipelines, scans
- **FASE 4**: `docs/phase-4/` - Release, DHF, certificados
- **FASE 5**: `docs/phase-5/` - Monitoramento, pós-mercado

## Sobre Esta Aplicação

⚠️ **Esta é uma aplicação de apresentação/demonstração** do processo de desenvolvimento do nCommand Lite. 

- ✅ Visualiza o processo completo de desenvolvimento SaMD
- ✅ Serve como material educacional e de apresentação
- ❌ **NÃO é parte do produto nCommand Lite**
- ❌ **NÃO é uma aplicação médica**
- ❌ **NÃO é usada em produção**

Para informações sobre o produto nCommand Lite, consulte a documentação principal do projeto.

---

**Versão**: 1.0.0  
**Data**: 2024  
**Responsável**: QA Leader


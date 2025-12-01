# Aplicação Demonstrativa - nCommand Lite

**Aplicação**: Health Check Demo  
**Versão**: 1.0.0  
**Tipo**: SaMD - Software as a Medical Device  
**Classificação**: IEC 62304 Class B

## Objetivo

Esta aplicação demonstra o ciclo de vida completo do desenvolvimento de software médico, seguindo todas as fases do processo regulatório estabelecido:

- ✅ **FASE 1**: Planejamento, Risco e Infraestrutura
- ✅ **FASE 2**: Desenvolvimento e Codificação
- ✅ **FASE 3**: Verificação Automatizada
- ✅ **FASE 4**: Validação e Liberação
- ✅ **FASE 5**: Monitoramento Pós-Mercado

## Funcionalidade

Aplicação web simples que permite ao usuário registrar e visualizar informações básicas de saúde:

- **Calculadora de IMC** (Índice de Massa Corporal)
- **Registro de Sintomas** (diário simples)
- **Visualização de Histórico** (gráficos básicos)

**Nota**: Esta é uma aplicação de demonstração. **NÃO deve ser usada para diagnóstico médico real**.

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

## Aviso Legal

⚠️ **Esta é uma aplicação demonstrativa**. Não deve ser usada para fins médicos reais. Para uso em produção, consulte os requisitos regulatórios completos.

---

**Versão**: 1.0.0  
**Data**: 2024  
**Responsável**: QA Leader


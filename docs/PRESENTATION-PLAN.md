# Plano de Apresentação - nCommand Lite

**Projeto**: nCommand Lite - Ciclo de Vida Completo de SaMD  
**Versão**: 1.0.0  
**Data**: 2024

## Objetivo da Apresentação

Demonstrar o processo completo de desenvolvimento de software médico (SaMD) seguindo as normas regulatórias, desde o planejamento até o monitoramento pós-mercado.

## Público-Alvo

### Principais Audiências

1. **Reguladores e Auditores**
   - ANVISA
   - FDA
   - Certificadoras
   - Auditores ISO/IEC

2. **Stakeholders Internos**
   - Direção
   - QA/Regulatory Affairs
   - Desenvolvimento
   - Compliance

3. **Clientes e Parceiros**
   - Clínicas e hospitais
   - Integradores
   - Investidores

4. **Treinamento de Equipe**
   - Novos membros do time
   - Atualização de processos

## Estrutura da Apresentação

### 1. Abertura (5 minutos)

#### Slides 1-3: Introdução

- **Slide 1**: Título e Logotipo
  - nCommand Lite
  - Plataforma de SaMD
  - Classificação: IEC 62304 Class B

- **Slide 2**: Visão Geral
  - Objetivo do projeto
  - Escopo e propósito
  - Normas de conformidade aplicadas

- **Slide 3**: Arquitetura de Ferramentas
  - Azure DevOps (Fonte da Verdade de Execução)
  - DefectDojo (Fonte da Verdade de Segurança)
  - SharePoint (Repositório Legal)
  - Azure Cloud (Infraestrutura Imutável)

### 2. Contexto Regulatório (10 minutos)

#### Slides 4-7: Framework Regulatório

- **Slide 4**: Normas Aplicáveis
  - ISO 13485:2016 - Sistema de Gestão da Qualidade
  - IEC 62304:2006+A1:2015 - Ciclo de Vida de Software Médico
  - IEC 62366-1:2015 - Engenharia de Usabilidade
  - ISO 14971:2019 - Gestão de Riscos
  - ISO/IEC 27001 & 27701 - Segurança da Informação
  - RDC 657/2022 (ANVISA) & FDA 21 CFR Part 820

- **Slide 5**: Classificação e Escopo
  - IEC 62304 Class B (Risco Moderado)
  - Justificativa da classificação
  - Escopo do projeto

- **Slide 6**: Princípios Fundamentais
  - Compliance as Code
  - Gates automatizados
  - Rastreabilidade completa
  - Segregação de funções

- **Slide 7**: Arquitetura de Verdade
  - Azure DevOps → Execução
  - DefectDojo → Segurança
  - SharePoint → Documentação Legal
  - Azure Cloud → Infraestrutura

### 3. FASE 1: Planejamento (15 minutos)

#### Slides 8-12: Planejamento, Risco e Infraestrutura

- **Slide 8**: Objetivo da Fase
  - Garantir funcionalidades seguras, necessárias e usáveis
  - Fluxo visual (Mermaid)

- **Slide 9**: Gestão de Demanda
  - Azure Boards - Work Items
  - Spec-Kit - Especificações
  - Perfil de Usuário (IEC 62366)

- **Slide 10**: Análise de Riscos
  - ISO 14971 - Metodologia
  - Cálculo RPN (Severidade × Probabilidade × Detectabilidade)
  - Consulta ao DefectDojo
  - Registro de riscos

- **Slide 11**: Usabilidade
  - IEC 62366-1
  - Análise de erro de uso (uFMEA)
  - Tarefas principais
  - Testes formativos planejados

- **Slide 12**: Gate de Aprovação
  - Critérios de aprovação
  - QA Leader como aprovador
  - Evidências necessárias

**Demo**: Mostrar especificação gerada pelo Spec-Kit

### 4. FASE 2: Desenvolvimento (15 minutos)

#### Slides 13-17: Desenvolvimento e Codificação

- **Slide 13**: Objetivo da Fase
  - Produção controlada
  - Fluxo visual (Mermaid)

- **Slide 14**: Versionamento Gitflow
  - Estrutura de branches
  - Nomenclatura padronizada
  - Commits rastreados

- **Slide 15**: Desenvolvimento
  - Pre-commit hooks
  - Testes unitários
  - Testes formativos de usabilidade

- **Slide 16**: Pull Request (O Grande Filtro)
  - Pré-requisitos obrigatórios
  - Bloqueios automáticos
  - Code review (mínimo 2 aprovações)

- **Slide 17**: Infraestrutura como Código
  - Terraform
  - Proibição de alterações manuais
  - Versionamento de infraestrutura

**Demo**: Mostrar código, testes e PR process

### 5. FASE 3: Verificação (15 minutos)

#### Slides 18-22: Verificação Automatizada

- **Slide 18**: Objetivo da Fase
  - Validação técnica
  - Centralização de achados
  - Fluxo visual (Mermaid)

- **Slide 19**: Pipeline CI/CD
  - Build e Testes (100% pass)
  - SAST - SonarCloud (Quality Gate A)
  - SCA - Trivy (0 vulnerabilidades)
  - Integração com DefectDojo

- **Slide 20**: Ingestão Automática DefectDojo
  - Deduplicação automática
  - Auto-close de vulnerabilidades corrigidas
  - Bloqueio de pipeline

- **Slide 21**: Gates de Segurança
  - Critérios de bloqueio
  - SLAs de correção
  - Triagem de vulnerabilidades

- **Slide 22**: Resultados
  - Métricas de qualidade
  - Status de segurança
  - Relatórios gerados

**Demo**: Mostrar pipeline em execução e resultados

### 6. FASE 4: Validação e Release (15 minutos)

#### Slides 23-27: Validação e Liberação

- **Slide 23**: Objetivo da Fase
  - Congelamento da versão
  - Geração do DHF
  - Fluxo visual (Mermaid)

- **Slide 24**: Deploy e Testes
  - Deploy Staging
  - DAST - OWASP ZAP
  - Testes funcionais (Azure Test Plans)
  - Testes de usabilidade somativos

- **Slide 25**: Design History File (DHF)
  - Matriz de Rastreabilidade
  - Certificado de Segurança
  - Documentação completa
  - Geração automática

- **Slide 26**: Gate de Liberação
  - Critérios obrigatórios
  - Aprovação digital
  - Transferência para SharePoint

- **Slide 27**: Release
  - Tag Git v1.0.0
  - Deploy produção
  - Artefatos documentados

**Demo**: Mostrar DHF gerado e processo de aprovação

### 7. FASE 5: Monitoramento (10 minutos)

#### Slides 28-31: Monitoramento Pós-Mercado

- **Slide 28**: Objetivo da Fase
  - Tratativa contínua de riscos
  - Vigilância pós-mercado
  - Fluxo visual (Mermaid)

- **Slide 29**: Vigilância (SIEM)
  - Azure Sentinel
  - Monitoramento em tempo real
  - Detecção de incidentes

- **Slide 30**: Gestão de Vulnerabilidades
  - Scan diário (Trivy)
  - Triagem no DefectDojo
  - Push to Azure DevOps
  - SLAs de correção

- **Slide 31**: Reavaliação de Riscos
  - Revisão trimestral
  - Atualização de Work Items
  - Monitoramento contínuo

**Demo**: Mostrar dashboard de monitoramento

### 8. Rastreabilidade e Conformidade (10 minutos)

#### Slides 32-34: Rastreabilidade

- **Slide 32**: Matriz de Rastreabilidade
  - Requisitos → Código → Testes → Release
  - Geração automática
  - Visualização

- **Slide 33**: Conformidade Regulatória
  - Mapeamento de requisitos
  - Evidências por norma
  - Checklist de conformidade

- **Slide 34**: Documentação
  - Estrutura de documentos
  - Localização (SharePoint)
  - Acesso e versionamento

### 9. Métricas e Resultados (10 minutos)

#### Slides 35-37: Resultados do Processo

- **Slide 35**: Métricas de Qualidade
  - Cobertura de testes: 95%
  - Vulnerabilidades: 0 críticas/altas
  - Quality Gate: A
  - Taxa de pass: 100%

- **Slide 36**: Métricas de Processo
  - Tempo médio de ciclo
  - Taxa de retrabalho
  - Eficiência de gates
  - Conformidade regulatória

- **Slide 37**: Benefícios Alcançados
  - Compliance automatizado
  - Rastreabilidade completa
  - Segurança integrada
  - Documentação imutável

### 10. Demonstração Prática (15 minutos)

#### Slides 38-40: Demo Interativa

- **Slide 38**: Aplicação Demonstrativa
  - Health Check Demo
  - Todas as fases implementadas
  - Documentação completa

- **Slide 39**: Navegação
  - Interface web interativa
  - Diagramas Mermaid
  - Documentação acessível

- **Slide 40**: Q&A Preparado
  - Perguntas frequentes
  - Casos de uso
  - Próximos passos

**Demo**: Navegar pela aplicação demo mostrando todas as fases

### 11. Encerramento (5 minutos)

#### Slides 41-42: Conclusão

- **Slide 41**: Resumo Executivo
  - 5 fases completas
  - 100% de conformidade
  - Processo robusto e automatizado

- **Slide 42**: Próximos Passos
  - Expansão do processo
  - Melhorias contínuas
  - Certificações planejadas

## Tempo Total Estimado

- **Apresentação**: 75 minutos
- **Q&A**: 15 minutos
- **Total**: 90 minutos

## Materiais de Apoio

### Documentos Principais

1. **Apresentação PowerPoint/PDF**
   - Localização: `docs/presentation/`
   - Formato: PPTX + PDF
   - Versão: 1.0.0

2. **Documentação Completa**
   - Processo Integrado: `docs/PROCESS.md`
   - SOPs: `docs/sop/`
   - Demonstração: `demo-app/`

3. **Diagramas Mermaid**
   - Fluxo completo: `docs/FLOWS.md`
   - Por fase: Componentes React
   - Arquitetura: `docs/ASSETS.md`

### Repositório de Documentos

Ver `docs/REPOSITORY-STRUCTURE.md` para estrutura completa.

## Preparação da Apresentação

### Checklist Pré-Apresentação

- [ ] Revisar todos os slides
- [ ] Verificar links e demos
- [ ] Preparar ambiente de demonstração
- [ ] Testar aplicação demo
- [ ] Preparar respostas para Q&A comum
- [ ] Verificar acesso a ferramentas (Azure DevOps, DefectDojo, SharePoint)

### Equipamento Necessário

- Projetor/Tela grande
- Laptop com aplicação demo rodando
- Conexão à internet (para demos ao vivo)
- Backup offline (slides PDF + screenshots)

### Acesso às Ferramentas

- **Azure DevOps**: Conta de apresentação preparada
- **DefectDojo**: Ambiente de demo configurado
- **SharePoint**: Documentos organizados para acesso
- **Aplicação Demo**: Servidor local ou staging

## Adaptação por Audiência

### Para Reguladores/Auditores

**Foco**:
- Conformidade normativa
- Evidências e rastreabilidade
- Processos documentados

**Tempo**: 90 minutos
**Demos**: Foco em documentação e evidências

### Para Stakeholders Internos

**Foco**:
- Eficiência do processo
- ROI e benefícios
- Escalabilidade

**Tempo**: 60 minutos
**Demos**: Foco em automação e resultados

### Para Treinamento

**Foco**:
- Passo a passo detalhado
- Uso das ferramentas
- Exercícios práticos

**Tempo**: 120 minutos
**Demos**: Hands-on e exercícios

## Perguntas Frequentes (Q&A)

### Sobre Conformidade

**P**: Como garantimos conformidade contínua?
**R**: Através de gates automatizados no pipeline e revisões periódicas. O processo "Compliance as Code" impõe barreiras técnicas que não podem ser contornadas.

**P**: O que acontece se uma vulnerabilidade crítica for encontrada?
**R**: O pipeline bloqueia automaticamente. O SLA define correção em 24 horas para críticas, criando um bug no Azure DevOps automaticamente via DefectDojo.

### Sobre Processo

**P**: Como funciona a rastreabilidade?
**R**: Cada requisito está vinculado a código, testes e release através da matriz de rastreabilidade gerada automaticamente. Todos os artefatos estão versionados e acessíveis.

**P**: Quanto tempo leva para completar um ciclo completo?
**R**: Depende da complexidade. Para features simples: 2-4 semanas. O processo garante qualidade em todas as etapas, evitando retrabalho.

### Sobre Ferramentas

**P**: É possível usar outras ferramentas além das mencionadas?
**R**: O processo é flexível. O importante é manter os princípios: rastreabilidade, gates automatizados e documentação imutável. As ferramentas são meios, não fins.

## Métricas de Sucesso da Apresentação

- ✅ Audiência compreendeu o processo completo
- ✅ Todas as fases foram demonstradas
- ✅ Documentação acessível e organizada
- ✅ Perguntas respondidas adequadamente
- ✅ Interesse em implementação/expansão

---

**Última Atualização**: 2024  
**Versão**: 1.0.0  
**Responsável**: QA Leader


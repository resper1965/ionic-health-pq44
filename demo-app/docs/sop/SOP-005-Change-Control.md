# SOP-005: Controle de Mudança e Configuração

**Documento**: SOP-005  
**Título**: Controle de Mudança e Configuração  
**Versão**: 1.0  
**Data**: 2024  
**Aprovado por**: QA Leader  
**Classificação**: ISO 13485, IEC 62304

## 1. Objetivo

Este procedimento estabelece o controle de mudanças de software e configuração da infraestrutura, garantindo rastreabilidade, conformidade regulatória e gestão adequada de mudanças pós-mercado.

## 2. Escopo

Aplica-se a:
- Mudanças de código-fonte
- Mudanças de infraestrutura (IaC)
- Mudanças de configuração
- Mudanças pós-mercado (hotfixes, patches)
- Controle de versões e tags
- Letter to File (LTF) e submissões regulatórias

## 3. Versionamento e Controle de Configuração

### 3.1 Versionamento Semântico

**Formato**: `vMAJOR.MINOR.PATCH` (ex: `v1.2.3`)

- **MAJOR**: Mudanças incompatíveis de API ou arquitetura
- **MINOR**: Novas funcionalidades compatíveis
- **PATCH**: Correções de bugs ou segurança

### 3.2 Estrutura de Tags

```bash
v1.0.0          # Release inicial
v1.0.1          # Patch (bug fix)
v1.1.0          # Minor (nova feature)
v2.0.0          # Major (breaking change)
```

### 3.3 Artefatos Versionados

- Código-fonte (Git)
- Infraestrutura (Terraform)
- Pipelines (Azure DevOps YAML)
- Documentação técnica
- Configurações (exceto secrets)

## 4. Infraestrutura como Código (IaC)

### 4.1 Princípio Fundamental

**PROIBIÇÃO**: Alterações manuais no Portal Azure são **proibidas**.

Toda infraestrutura deve ser:
- Definida em código (Terraform)
- Versionada no Git
- Aplicada via Pipeline
- Rastreada e auditável

### 4.2 Processo de Mudança de Infraestrutura

1. **Proposta**: Criar Work Item "Infrastructure Change"
2. **Análise de Risco**: Conforme SOP-002
3. **Desenvolvimento**: Alterar código Terraform
4. **Review**: PR com aprovação de DevOps
5. **Aplicação**: Pipeline aplica via Terraform
6. **Validação**: Verificar estado da infraestrutura

### 4.3 Estado da Infraestrutura

- Estado do Terraform armazenado em Azure Storage (backend)
- Bloqueio de estado (state locking) para evitar conflitos
- Histórico de mudanças rastreado

## 5. Mudanças de Código

### 5.1 Mudanças em Desenvolvimento

Conforme SOP-001 (SDLC):
- Branch `feat/WORKITEM-ID`
- PR com revisão
- Pipeline de CI/CD
- Merge em `develop`

### 5.2 Mudanças em Produção

**Requer**: Change Request no Azure DevOps

**Processo**:
1. Criar Change Request (Work Item)
2. Análise de impacto e risco
3. Aprovação do QA Leader
4. Implementação via hotfix ou release
5. Validação pós-deploy
6. Documentação atualizada

## 6. Controle de Mudança Pós-Mercado

### 6.1 Tipos de Mudança

| Tipo | Descrição | Submissão Regulatória |
|------|-----------|----------------------|
| **Correção de Bug** | Correção de defeito não crítico | Letter to File (LTF) |
| **Hotfix de Segurança** | Correção crítica/alta (SLA 24h) | LTF ou Submissão |
| **Feature Nova** | Nova funcionalidade | Submissão completa |
| **Mudança Arquitetural** | Mudança significativa | Submissão completa |

### 6.2 Letter to File (LTF)

**Quando usar LTF**:
- Correções de bugs não críticos
- Melhorias de usabilidade menores
- Correções de segurança de baixa/média severidade

**Processo**:
1. QA Leader avalia necessidade de LTF
2. Documentação preparada (mudanças, justificativa, testes)
3. LTF submetido à autoridade regulatória
4. Resposta registrada no SharePoint

### 6.3 Submissão Regulatória

**Quando requer submissão completa**:
- Novas funcionalidades
- Mudanças que alteram uso pretendido
- Mudanças arquiteturais significativas

**Processo**:
1. QA Leader avalia necessidade
2. Pacote completo preparado (DHF, testes, documentação)
3. Submissão formal
4. Aprovação aguardada antes do deploy

## 7. Design History File (DHF)

### 7.1 Conteúdo do DHF

O DHF é gerado automaticamente e inclui:

- **Matriz de Rastreabilidade**: Requisitos → Código → Testes
- **Certificado de Segurança**: Resumo do DefectDojo
- **Release Notes**: Mudanças da versão
- **Resultados de Testes**: Unit, Integration, Functional, Usability
- **Análise de Riscos**: Riscos identificados e mitigados
- **Configuração de Infraestrutura**: Estado do Terraform

### 7.2 Geração Automática

Script localizado em: `pipelines/scripts/generate-dhf.sh`

**Execução**: Durante FASE 4 (Validação e Liberação)

**Saída**: PDF assinado digitalmente

### 7.3 Armazenamento

- **Repositório Legal**: SharePoint Online
- **Estrutura**: `/DHF/Version/v1.0.0/nCommand-Lite-DHF-v1.0.0.pdf`
- **Imutabilidade**: PDF assinado, não pode ser alterado

## 8. Mudanças de Emergência (Hotfix)

### 8.1 Critérios para Hotfix

- Vulnerabilidade crítica (CVSS ≥ 9.0)
- Bug que causa risco à segurança do paciente
- SLA: 24 horas

### 8.2 Processo Acelerado

1. **Identificação**: DefectDojo ou monitoramento
2. **Change Request**: Criado e aprovado imediatamente
3. **Desenvolvimento**: Branch `hotfix/WORKITEM-ID` a partir de `main`
4. **Testes**: Apenas críticos (smoke tests)
5. **PR**: Revisão acelerada (mínimo 1 aprovação)
6. **Deploy**: Merge direto em `main` + deploy imediato
7. **Documentação**: LTF preparado após o deploy

## 9. Matriz de Rastreabilidade

### 9.1 Componentes Rastreados

| Nível | Componente |
|-------|------------|
| **Requisito** | User Story / Feature |
| **Design** | Arquitetura / Design Document |
| **Código** | Commit SHA / Branch |
| **Teste** | Test Case ID / Test Run |
| **Release** | Tag / Version |
| **DHF** | Documento PDF no SharePoint |

### 9.2 Geração Automática

Script gera matriz vinculando:
- Requisitos (Azure DevOps)
- Código (Git commits)
- Testes (Azure Test Plans)
- Releases (Git tags)

## 10. Responsabilidades

| Atividade | Responsável |
|-----------|-------------|
| Proposta de mudança | Dev Team / PO |
| Análise de impacto | QA / Arquiteto |
| Implementação | Dev Team |
| Aplicação de IaC | DevOps |
| Decisão LTF vs Submissão | QA Leader |
| Aprovação de Change Request | QA Leader |
| Geração de DHF | Pipeline (automatizado) |
| Armazenamento no SharePoint | QA Leader |

## 11. Referências

- ISO 13485:2016 - Section 7.5.6: Control of changes
- IEC 62304:2006+A1:2015 - Section 7: Software maintenance process
- RDC 657/2022 (ANVISA) - Controle de mudanças
- FDA 21 CFR Part 820 - Quality system regulation
- SOP-001: SDLC
- SOP-002: Gestão de Riscos
- SOP-004: Verificação e Validação


# Análise: PQ.042 (GMUD) e Conexões com nCommand Lite

**Data**: 2024  
**Documento Base**: PQ.042 - CHANGE CONTROL (Revision 6)  
**Análise**: Conexões e Impactos no Modelo nCommand Lite

---

## 1. Resumo Executivo

O **PQ.042 (GMUD - Gestão de Mudanças)** estabelece o controle de mudanças em sistemas auxiliares, software, equipamentos, processos que podem influenciar a qualidade dos produtos. Este documento analisa as conexões e impactos deste procedimento no modelo nCommand Lite.

### Ponto Crítico de Exclusão

> **"Changes regarding IONIC Health products and/or projects must follow the guidelines according to PQ.039 – Project Control, and are not controlled by this procedure."**

**Implicação**: Mudanças no **produto nCommand Lite** (desenvolvimento de software médico) seguem o PQ.039 e **NÃO** são controladas pelo PQ.042.

---

## 2. Escopo e Aplicabilidade

### 2.1. O que NÃO se aplica ao nCommand Lite

- ❌ Mudanças no código-fonte do produto nCommand Lite
- ❌ Novas features do produto
- ❌ Correções de bugs no produto
- ❌ Mudanças arquiteturais do produto

**Razão**: Estes seguem **PQ.039 (Project Control)** e são controlados pelo **SOP-005** do nCommand Lite.

### 2.2. O que PODE se aplicar ao nCommand Lite

O PQ.042 **pode aplicar-se** quando há mudanças que impactam **sistemas auxiliares, infraestrutura ou processos**:

- ✅ Mudanças em sistemas auxiliares que suportam o nCommand Lite
- ✅ Mudanças de infraestrutura de TI (servidores, redes, banco de dados)
- ✅ Mudanças em processos organizacionais que impactam qualidade
- ✅ Mudanças em equipamentos de desenvolvimento/teste
- ✅ Mudanças em ferramentas de desenvolvimento (ex: atualização do Azure DevOps)
- ✅ Mudanças em processos de qualidade

---

## 3. Processo PQ.042 (GMUD) - Visão Geral

### 3.1. Fluxo Básico

```
1. Solicitação → Email para chamado@ionic.health
2. Primeiro Ticket → Número para registro no R042.001
3. Preenchimento → Formulário R042.001 (Change Control)
4. GMUD Ticket → Criado pelo analista, número GMUD gerado
5. Análise Multidisciplinar → Risco/benefício
6. Aprovação → QA/Regulatory + HEAD
7. Execução → Ações do plano de controle
8. Avaliação Pós-Mudança → R042.002 (Post-Change Evaluation)
9. Aprovação Final → Fechamento do GMUD
```

### 3.2. Tipos de Mudança

**Com Impacto Regulatório**:
- Mudanças em processos, sistemas (software), estrutura ou instalação
- Impacta conformidade regulatória
- Requer análise completa de risco/benefício

**Sem Impacto Regulatório**:
- Apenas documental
- Não afeta produto e processo de produção

### 3.3. Formulários

- **R042.001**: Change Control (GMUD)
- **R042.002**: Post-Change Evaluation
- **Armazenamento**: Docnix/SharePoint, 15 anos

---

## 4. Conexões com o nCommand Lite

### 4.1. Integração com SOP-005 (Controle de Mudança)

O **SOP-005** do nCommand Lite já estabelece controle de mudanças, mas foca em:
- Mudanças de código-fonte do produto
- Mudanças de infraestrutura (IaC)
- Change Requests no Azure DevOps
- Letter to File (LTF) e submissões regulatórias

**Ponto de Conexão**: Quando uma mudança de **infraestrutura** ou **sistema auxiliar** requer GMUD (PQ.042), ela pode estar relacionada ao nCommand Lite mas segue processo diferente.

### 4.2. Cenários de Integração

#### Cenário 1: Mudança de Infraestrutura Azure

**Situação**: Atualização do Azure DevOps, migração de banco de dados, mudança de servidores

**Processo**:
1. **PQ.042 (GMUD)**: Aplicável se impacto organizacional/regulatório
2. **SOP-005**: Controla a implementação técnica via IaC (Terraform)
3. **Integração**: GMUD documenta a decisão, SOP-005 controla execução

**Rastreabilidade**: GMUD número → Change Request no Azure DevOps

#### Cenário 2: Mudança em Sistema Auxiliar

**Situação**: Implementação de novo sistema de monitoramento, mudança de ferramenta de CI/CD

**Processo**:
1. **PQ.042 (GMUD)**: Obrigatório para análise de risco/benefício
2. **Impacto no nCommand Lite**: Se sistema suporta o produto
3. **Controle**: GMUD aprovado → Impacto documentado no SOP-005

#### Cenário 3: Mudança de Processo Organizacional

**Situação**: Nova política de segurança, mudança em processo de qualidade

**Processo**:
1. **PQ.042 (GMUD)**: Controla a mudança de processo
2. **Impacto**: Pode afetar como o nCommand Lite é desenvolvido
3. **Atualização**: SOPs do nCommand Lite podem precisar ser atualizados

### 4.3. Pontos de Atenção

1. **Dupla Rastreabilidade**: 
   - GMUD (PQ.042) para decisão organizacional
   - Change Request (SOP-005) para implementação técnica

2. **Aprovações Paralelas**:
   - GMUD: QA/Regulatory + HEAD
   - Change Request: QA Leader (do projeto)

3. **Evidências**:
   - GMUD armazena em Docnix/SharePoint
   - SOP-005 armazena em SharePoint (DHF)

---

## 5. Impactos no Modelo nCommand Lite

### 5.1. Impactos em Infraestrutura (IaC)

**Processo Atual (SOP-005)**:
- Mudanças via Terraform
- Change Request no Azure DevOps
- Aprovação do QA Leader

**Com GMUD (PQ.042)**:
- Se mudança impacta qualidade organizacional → Requer GMUD
- GMUD documenta decisão estratégica
- Change Request (SOP-005) documenta implementação técnica

**Recomendação**: Criar campo no Change Request para referenciar número GMUD quando aplicável.

### 5.2. Impactos em Sistemas Auxiliares

**Exemplos**:
- Azure DevOps, DefectDojo, SharePoint
- Sistemas de monitoramento (Sentinel)
- Ferramentas de teste

**Processo**:
1. GMUD para decisão de mudança
2. Impacto no nCommand Lite avaliado
3. Atualização de processos/documentação se necessário

### 5.3. Impactos em Processos de Qualidade

**Situação**: Mudança em processo de qualidade que afeta como o nCommand Lite é desenvolvido

**Exemplos**:
- Nova política de revisão de código
- Mudança em processo de aprovação
- Atualização de normas internas

**Ação**:
- GMUD controla mudança de processo
- SOPs do nCommand Lite atualizados
- Treinamento da equipe

---

## 6. Rastreabilidade e Documentação

### 6.1. Campos de Rastreabilidade

**Em Change Request (Azure DevOps)**:
- Campo customizado: "GMUD Number" (quando aplicável)
- Campo: "Change Type" (Product / Infrastructure / Process)

**Em GMUD (R042.001)**:
- Campo: "Impacted Systems" (mencionar nCommand Lite se aplicável)
- Campo: "Related Change Requests" (número do Change Request)

### 6.2. Documentação Cruzada

**GMUD → nCommand Lite**:
- Se GMUD impacta nCommand Lite, referenciar nos SOPs
- Atualizar documentação técnica se necessário

**nCommand Lite → GMUD**:
- Se mudança técnica requer aprovação organizacional, criar GMUD primeiro
- Referenciar GMUD no Change Request

---

## 7. Recomendações de Implementação

### 7.1. Critérios para Determinar se GMUD é Necessário

| Situação | Requer GMUD? | Processo |
|----------|--------------|----------|
| Mudança no código do produto | ❌ Não | SOP-005 (PQ.039) |
| Mudança de infraestrutura Azure (técnica) | ⚠️ Depende | Avaliar impacto organizacional |
| Mudança de sistema auxiliar (DefectDojo, etc) | ✅ Sim | PQ.042 (GMUD) |
| Mudança de processo organizacional | ✅ Sim | PQ.042 (GMUD) |
| Nova feature do produto | ❌ Não | SOP-001, SOP-005 |
| Hotfix de segurança | ❌ Não | SOP-005 (Change Request) |

### 7.2. Fluxo Integrado Recomendado

```
┌─────────────────────────────────────────────────────────────┐
│ 1. IDENTIFICAR TIPO DE MUDANÇA                              │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────────┐
        │  É mudança no PRODUTO?        │
        │  (nCommand Lite)               │
        └───────────────────────────────┘
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼ SIM                           ▼ NÃO
┌───────────────────┐         ┌───────────────────┐
│ SOP-005           │         │ GMUD (PQ.042)     │
│ (PQ.039)          │         │ Necessário?       │
│                   │         └───────────────────┘
│ • Change Request  │                    │
│ • Azure DevOps    │                    ▼
│ • Aprovação QA    │         ┌───────────────────┐
│                   │         │ Impacta qualidade │
│                   │         │ organizacional?   │
└───────────────────┘         └───────────────────┘
                                       │
                           ┌───────────┴───────────┐
                           │                       │
                      ▼ SIM                    ▼ NÃO
              ┌──────────────┐          ┌──────────────┐
              │ GMUD (PQ.042)│          │ Sem GMUD     │
              │              │          │ Necessário   │
              │ R042.001     │          │              │
              │ R042.002     │          │              │
              └──────────────┘          └──────────────┘
```

### 7.3. Campos Customizados no Azure DevOps

**Change Request Work Item Type**:

Adicionar campos:
- `GMUD Number`: Texto (número do GMUD quando aplicável)
- `Change Category`: Enum (Product / Infrastructure / Process / System)
- `Requires GMUD`: Boolean
- `GMUD Status`: Enum (Not Required / Pending / Approved / Rejected)

**Relacionamento**:
- Change Request → "Related to" → GMUD (quando existir)

---

## 8. Checklist de Integração

### 8.1. Para Mudanças de Infraestrutura

- [ ] Avaliar se mudança requer GMUD (PQ.042)
- [ ] Se sim: Criar GMUD primeiro
- [ ] Criar Change Request no Azure DevOps
- [ ] Referenciar número GMUD no Change Request
- [ ] Executar via Terraform (IaC)
- [ ] Documentar evidências no GMUD
- [ ] Atualizar documentação técnica

### 8.2. Para Mudanças em Sistemas Auxiliares

- [ ] Criar GMUD obrigatório (PQ.042)
- [ ] Analisar impacto no nCommand Lite
- [ ] Documentar impacto nos SOPs se necessário
- [ ] Executar mudança após aprovação GMUD
- [ ] Validar que nCommand Lite continua funcionando
- [ ] Atualizar documentação

### 8.3. Para Mudanças de Processo

- [ ] Criar GMUD obrigatório (PQ.042)
- [ ] Identificar SOPs afetados do nCommand Lite
- [ ] Atualizar SOPs após aprovação GMUD
- [ ] Treinar equipe nas mudanças
- [ ] Validar conformidade

---

## 9. Exemplos Práticos

### Exemplo 1: Atualização do Azure DevOps

**Situação**: Atualização de versão do Azure DevOps que pode impactar pipelines

**Processo**:
1. **GMUD (PQ.042)**:
   - Descrição: Atualização Azure DevOps v2.0 → v2.1
   - Análise de risco: Impacto em pipelines existentes
   - Aprovação: QA/Regulatory + HEAD
   
2. **Change Request (SOP-005)**:
   - Referência GMUD: GMUD-2024-001
   - Tipo: Infrastructure Change
   - Implementação: Atualização via Portal Azure (aprovado no GMUD)
   - Validação: Testar pipelines do nCommand Lite

3. **Rastreabilidade**:
   - GMUD-2024-001 → Change Request CR-001 → Pipeline atualizado

### Exemplo 2: Implementação de Novo Sistema de Monitoramento

**Situação**: Implementar novo SIEM que impacta FASE 5 do nCommand Lite

**Processo**:
1. **GMUD (PQ.042)**:
   - Descrição: Implementação SIEM Azure Sentinel
   - Análise de benefício: Melhor monitoramento pós-mercado
   - Impacto no nCommand Lite: FASE 5 (Monitoramento)

2. **Atualização de Processo (nCommand Lite)**:
   - Atualizar PROCESS.md (FASE 5)
   - Documentar integração com Sentinel
   - Atualizar SOP-003 se necessário

3. **Rastreabilidade**:
   - GMUD-2024-002 → PROCESS.md atualizado → SOP-003 atualizado

---

## 10. Conclusão

O **PQ.042 (GMUD)** e o **nCommand Lite (SOP-005)** operam em camadas diferentes:

- **PQ.042**: Controle organizacional de mudanças que impactam qualidade
- **SOP-005**: Controle técnico de mudanças no produto e infraestrutura

**Principais Conexões**:
1. Mudanças de infraestrutura podem requerer ambos os processos
2. Mudanças em sistemas auxiliares requerem GMUD
3. Mudanças de processo podem afetar SOPs do nCommand Lite

**Recomendação Principal**: Implementar rastreabilidade cruzada através de campos customizados no Azure DevOps para referenciar GMUDs quando aplicável.

---

**Última Atualização**: 2024  
**Responsável pela Análise**: QA Leader


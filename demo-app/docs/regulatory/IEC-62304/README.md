# IEC 62304:2006+A1:2015 - Ciclo de Vida de Software Médico

**Norma**: IEC 62304:2006+A1:2015  
**Título**: Medical device software — Software life cycle processes  
**Data de Publicação**: 2015 (Edição 1.1)  
**Status**: Ativo

## Informações do Documento

- **Código**: IEC 62304:2006+A1:2015
- **Versão**: Edição 1.1 (inclui corrigenda A1)
- **Páginas**: ~120 páginas
- **Idiomas**: Inglês, Português (ABNT)

## Referência no Projeto

**Localização**:
- SharePoint: `/Regulatory/IEC/IEC-62304-2006-A1-2015/`
- Versão física: Biblioteca QA

**Responsável**: QA Leader

## Escopo e Aplicabilidade

IEC 62304 estabelece processos de ciclo de vida para o desenvolvimento de software de dispositivos médicos. Define atividades e tarefas que são necessárias para o ciclo de vida completo do software.

## Classificação do Software

### Classe A (Sem Impacto ou Impacto Não Significativo)
- Software não envolvido em tratamento ou diagnóstico
- Riscos negligenciáveis

### Classe B (Risco Moderado) ⭐
- **nCommand Lite é Classificado como Classe B**
- Software envolvido em tratamento ou diagnóstico, mas não apresenta risco de morte ou lesão grave
- Requisitos completos da norma aplicáveis

### Classe C (Risco Elevado)
- Software envolvido em tratamento ou diagnóstico que pode causar morte ou lesão grave
- Requisitos completos + requisitos adicionais

## Estrutura da Norma

### Principais Processos

1. **Processos de Desenvolvimento de Software**
   - 5.1 Planejamento
   - 5.2 Análise de Requisitos
   - 5.3 Arquitetura de Software
   - 5.4 Projeto Detalhado
   - 5.5 Implementação e Testes Unitários
   - 5.6 Integração e Testes de Integração
   - 5.7 Testes do Sistema
   - 5.8 Liberação de Software

2. **Processos de Manutenção de Software**
   - 6.1 Planejamento
   - 6.2 Resolução de Problemas
   - 6.3 Modificação de Software
   - 6.4 Migração de Software
   - 6.5 Descontinuação de Software

3. **Processos de Gestão de Riscos**
   - 7.1 Análise de Riscos do Software
   - 7.2 Implementação de Controles de Risco
   - 7.3 Verificação de Controles de Risco

4. **Processos de Gestão de Configuração**
   - 8.1 Planejamento
   - 8.2 Identificação de Configuração
   - 8.3 Controle de Mudanças
   - 8.4 Auditoria de Configuração

5. **Processos de Resolução de Problemas**
   - 9.1 Planejamento
   - 9.2 Recebimento e Análise
   - 9.3 Investigação
   - 9.4 Correção
   - 9.5 Revisão de Correção

## Mapeamento no nCommand Lite

### Processos Implementados

| Requisito IEC 62304 | Implementação no Projeto | Referência |
|---------------------|--------------------------|------------|
| 5.1 Planejamento | FASE 1: Planejamento | docs/PROCESS.md |
| 5.2 Análise de Requisitos | Spec-Kit + Azure Boards | spec-kit/ |
| 5.3-5.4 Arquitetura e Projeto | Documentação técnica | docs/ |
| 5.5 Implementação | FASE 2: Desenvolvimento | SOP-001 |
| 5.6 Integração | CI/CD Pipeline | pipelines/ |
| 5.7 Testes do Sistema | FASE 3: Verificação | SOP-004 |
| 5.8 Liberação | FASE 4: Validação | SOP-004, SOP-005 |
| 6.2 Resolução de Problemas | DefectDojo + ADO | SOP-003 |
| 7.1-7.3 Gestão de Riscos | Análise de Riscos | SOP-002 |
| 8.1-8.4 Configuração | Git + Terraform | SOP-001, SOP-005 |

### Checklist de Conformidade (Classe B)

**Desenvolvimento**:
- [ ] Plano de Desenvolvimento de Software
- [ ] Análise de Requisitos de Software
- [ ] Arquitetura de Software documentada
- [ ] Projeto Detalhado
- [ ] Implementação com Testes Unitários
- [ ] Testes de Integração
- [ ] Testes do Sistema
- [ ] Documentação de Software
- [ ] Liberação Controlada

**Manutenção**:
- [ ] Plano de Manutenção
- [ ] Processo de Resolução de Problemas
- [ ] Processo de Modificação

**Gestão de Riscos**:
- [ ] Análise de Riscos do Software
- [ ] Implementação de Controles
- [ ] Verificação de Controles

**Configuração**:
- [ ] Controle de Versão (Git)
- [ ] Controle de Mudanças
- [ ] Identificação de Configuração

## Documentos Relacionados

- **SOP-001**: SDLC (conformidade com Seção 5)
- **SOP-002**: Gestão de Riscos (conformidade com Seção 7)
- **SOP-003**: Gestão de Vulnerabilidades (conformidade com Seção 6.2)
- **SOP-004**: Verificação e Validação (conformidade com Seção 5.6-5.7)
- **SOP-005**: Controle de Mudança (conformidade com Seção 8)

## Como Adquirir

Ver `../ACCESS-GUIDE.md` para instruções de aquisição.

**Links**:
- IEC: https://webstore.iec.ch/publication/3362
- ABNT: https://www.abnt.org.br/

## Classificação do nCommand Lite

**Classificação**: Classe B (Risco Moderado)

**Justificativa**: [A ser documentado pelo QA Leader após análise de risco completa]

## Atualizações e Revisões

- **2006**: Edição original
- **2015**: Edição 1.1 (inclui corrigenda A1)
- **Próxima revisão**: A ser determinado pela IEC

**Acompanhamento**: QA Leader monitora atualizações anualmente.

---

**Última Revisão**: 2024  
**Responsável**: QA Leader


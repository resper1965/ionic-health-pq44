# ISO 14971:2019 - Gestão de Riscos

**Norma**: ISO 14971:2019  
**Título**: Medical devices — Application of risk management to medical devices  
**Data de Publicação**: 2019  
**Status**: Ativo

## Informações do Documento

- **Código**: ISO 14971:2019
- **Versão**: 2019 (terceira edição)
- **Páginas**: ~100 páginas
- **Idiomas**: Inglês, Português (ABNT)

## Referência no Projeto

**Localização**:
- SharePoint: `/Regulatory/ISO/ISO-14971-2019/`
- Versão física: Biblioteca QA

**Responsável**: QA Leader

## Escopo e Aplicabilidade

ISO 14971 especifica termos, princípios e um processo de gestão de riscos para dispositivos médicos. O processo inclui identificação, análise, avaliação, controle e monitoramento de riscos.

## Estrutura da Norma

### Processo de Gestão de Riscos

1. **Análise de Riscos**
   - Identificação de perigos
   - Estimativa de riscos

2. **Avaliação de Riscos**
   - Determinação da aceitabilidade de riscos

3. **Controle de Riscos**
   - Opções de redução de risco
   - Implementação de controles
   - Verificação de eficácia
   - Riscos residuais

4. **Reavaliação de Riscos Residuais**
   - Análise de risco geral

5. **Revisão de Informações de Produção e Pós-Produção**
   - Coleta e análise de dados
   - Ações corretivas

## Mapeamento no nCommand Lite

### Processos Implementados

| Requisito ISO 14971 | Implementação no Projeto | Referência |
|---------------------|--------------------------|------------|
| Análise de Riscos | FASE 1: Análise de Risco | SOP-002 |
| Avaliação de Riscos | Cálculo RPN | SOP-002 |
| Controle de Riscos | Mitigação e Validação | SOP-002 |
| Reavaliação | Pós-mercado | SOP-002, SOP-003 |
| Informações Pós-Produção | Monitoramento | FASE 5 |

### Metodologia RPN

**Risk Priority Number = Severidade × Probabilidade × Detectabilidade**

- **Severidade (S)**: 1-5 (Catastrófico → Negligível)
- **Probabilidade (P)**: 1-5 (Muito provável → Improvável)
- **Detectabilidade (D)**: 1-5 (Não detectável → Detecção quase certa)

### Critérios de Aceitação

| RPN | Classificação | Ação |
|-----|---------------|------|
| > 50 | Crítico | Mitigação obrigatória antes do desenvolvimento |
| 20-50 | Alto | Mitigação obrigatória antes do release |
| 5-19 | Moderado | Mitigação recomendada |
| < 5 | Baixo | Aceito sem mitigação |

### Checklist de Conformidade

- [ ] Processo de gestão de riscos documentado
- [ ] Riscos identificados e registrados
- [ ] RPN calculado para cada risco
- [ ] Estratégias de mitigação definidas
- [ ] Eficácia de mitigação validada
- [ ] Riscos residuais aceitáveis
- [ ] Reavaliação periódica realizada
- [ ] Informações pós-mercado coletadas

## Documentos Relacionados

- **SOP-002**: Gestão de Riscos (implementação completa)
- **SOP-003**: Gestão de Vulnerabilidades (riscos de segurança)
- **Spec-Kit**: Templates incluem seção de análise de riscos

## Como Adquirir

Ver `../ACCESS-GUIDE.md` para instruções de aquisição.

**Links**:
- ISO: https://www.iso.org/standard/72704.html
- ABNT: https://www.abnt.org.br/

## Atualizações e Revisões

- **2007**: Edição anterior
- **2019**: Versão atual (terceira edição)
- **Próxima revisão**: A ser determinado pela ISO

---

**Última Revisão**: 2024  
**Responsável**: QA Leader


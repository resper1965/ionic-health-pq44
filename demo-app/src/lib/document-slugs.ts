/**
 * Mapeamento de paths de documentos para slugs de URL
 */
export const documentPathToSlug: Record<string, string> = {
  // SOPs
  'docs/sop/SOP-001-SDLC.md': 'sop-001-sdlc',
  'docs/sop/SOP-002-Risk-Management.md': 'sop-002-risk-management',
  'docs/sop/SOP-003-Vulnerability-Management.md': 'sop-003-vulnerability-management',
  'docs/sop/SOP-004-Verification-Validation.md': 'sop-004-verification-validation',
  'docs/sop/SOP-005-Change-Control.md': 'sop-005-change-control',
  
  // Processos
  'docs/PROCESS.md': 'process',
  'docs/RISK-ACCEPTANCE-PLAN.md': 'risk-acceptance-plan',
  'docs/AUDIT-EVIDENCES.md': 'audit-evidences',
  'docs/AUTOMATED-PROCESSES.md': 'automated-processes',
    'docs/ANALISE-E-PLANEJAMENTO-TESTES-AUTOMATIZADOS.md': 'analise-e-planejamento-testes-automatizados',
    'docs/PLANEJAMENTO-CONFORMIDADE-COMPLETA.md': 'planejamento-conformidade-completa',
  
  // Normas Regulatórias
  'docs/regulatory/ISO-13485/README.md': 'iso-13485',
  'docs/regulatory/IEC-62304/README.md': 'iec-62304',
  'docs/regulatory/IEC-62366-1/README.md': 'iec-62366-1',
  'docs/regulatory/ISO-14971/README.md': 'iso-14971',
  'docs/regulatory/ISO-27001-27701/README.md': 'iso-27001-27701',
  'docs/regulatory/MARKET-REGULATIONS/README.md': 'rdc-657-2022-fda-21-cfr-part-820',
  'docs/regulatory/CE-MARK/README.md': 'ce-mark',
  'docs/regulatory/COMPLIANCE-MATRIX.md': 'compliance-matrix',
  
  // Templates
  'docs/dhf/TEMPLATE.md': 'dhf-template',
  'docs/templates/RISK-ACCEPTANCE-FORM.md': 'risk-acceptance-form',
  
  // Manuais
  'docs/manuals/azure-devops/README.md': 'manual-azure-devops',
  'docs/manuals/defectdojo/README.md': 'manual-defectdojo',
  'docs/manuals/sharepoint/README.md': 'manual-sharepoint',
  'docs/manuals/sonarcloud/README.md': 'manual-sonarcloud',
  'docs/manuals/cloudflare/README.md': 'manual-cloudflare',
  'docs/manuals/cloudflare/DNS-MANAGEMENT.md': 'dns-management-cloudflare',
}

/**
 * Obtém o slug de um documento pelo path
 */
export function getSlugFromPath(docPath: string): string {
  return documentPathToSlug[docPath] || docPath
    .replace(/^docs\//, '')
    .replace(/\.md$/, '')
    .replace(/\.mdx$/, '')
    .replace(/\//g, '-')
    .toLowerCase()
}


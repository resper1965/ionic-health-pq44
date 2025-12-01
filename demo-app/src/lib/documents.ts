import fs from 'fs'
import path from 'path'

export interface Document {
  title: string
  path: string
  description: string
  type: 'sop' | 'regulatory' | 'process' | 'template' | 'other'
  category: string
}

// Mapeamento de paths para títulos (usado como fallback)
const documentTitles: Record<string, string> = {
  // SOPs
  'docs/sop/SOP-001-SDLC.md': 'SOP-001: SDLC - Ciclo de Vida de Desenvolvimento',
  'docs/sop/SOP-002-Risk-Management.md': 'SOP-002: Gestão de Riscos',
  'docs/sop/SOP-003-Vulnerability-Management.md': 'SOP-003: Gestão de Vulnerabilidades',
  'docs/sop/SOP-004-Verification-Validation.md': 'SOP-004: Verificação e Validação',
  'docs/sop/SOP-005-Change-Control.md': 'SOP-005: Controle de Mudança',
  
  // Processos
  'docs/PROCESS.md': 'PROCESS.md - Processo Integrado Completo',
  'docs/RISK-ACCEPTANCE-PLAN.md': 'Plano de Aceitação de Riscos',
  'docs/AUDIT-EVIDENCES.md': 'Evidências para Auditoria',
  'docs/AUTOMATED-PROCESSES.md': 'Processos Automatizados',
    'docs/ANALISE-E-PLANEJAMENTO-TESTES-AUTOMATIZADOS.md': 'Análise e Planejamento: Testes E2E (Playwright/Selenium)',
    'docs/PLANEJAMENTO-CONFORMIDADE-COMPLETA.md': 'Planejamento para Conformidade Total',
  
  // Normas Regulatórias
  'docs/regulatory/ISO-13485/README.md': 'ISO 13485:2016 - Sistema de Gestão da Qualidade',
  'docs/regulatory/IEC-62304/README.md': 'IEC 62304 - Ciclo de Vida de Software Médico',
  'docs/regulatory/IEC-62366-1/README.md': 'IEC 62366-1 - Engenharia de Usabilidade',
  'docs/regulatory/ISO-14971/README.md': 'ISO 14971:2019 - Gestão de Riscos',
  'docs/regulatory/ISO-27001-27701/README.md': 'ISO/IEC 27001 & 27701 - Segurança',
  'docs/regulatory/MARKET-REGULATIONS/README.md': 'RDC 657/2022 & FDA 21 CFR Part 820',
  'docs/regulatory/CE-MARK/README.md': 'CE Mark (MDR 2017/745)',
  'docs/regulatory/COMPLIANCE-MATRIX.md': 'Matriz de Conformidade',
  
  // Templates
  'docs/dhf/TEMPLATE.md': 'DHF Template',
  'docs/templates/RISK-ACCEPTANCE-FORM.md': 'Risk Acceptance Form',
  
  // Manuais
  'docs/manuals/azure-devops/README.md': 'Manual Azure DevOps',
  'docs/manuals/defectdojo/README.md': 'Manual DefectDojo',
  'docs/manuals/sharepoint/README.md': 'Manual SharePoint',
  'docs/manuals/sonarcloud/README.md': 'Manual SonarCloud',
  'docs/manuals/cloudflare/README.md': 'Manual Cloudflare',
  'docs/manuals/cloudflare/DNS-MANAGEMENT.md': 'DNS Management - Cloudflare',
}

/**
 * Lê um documento markdown do sistema de arquivos
 */
export async function getDocumentContent(docPath: string): Promise<string | null> {
  try {
    // process.cwd() no Next.js retorna o diretório do projeto (demo-app)
    const cwd = process.cwd()
    
    // Tentar caminho relativo a demo-app/docs (onde os documentos estão)
    const demoAppDocsPath = path.join(cwd, docPath)
    if (fs.existsSync(demoAppDocsPath)) {
      return fs.readFileSync(demoAppDocsPath, 'utf-8')
    }
    
    // Tentar caminho relativo ao diretório raiz do projeto (subindo um nível)
    const rootPath = path.join(cwd, '..', docPath)
    if (fs.existsSync(rootPath)) {
      return fs.readFileSync(rootPath, 'utf-8')
    }
    
    return null
  } catch (error) {
    console.error(`Erro ao ler documento ${docPath}:`, error)
    return null
  }
}

/**
 * Gera um slug a partir do path do documento
 */
export function getDocumentSlug(docPath: string): string {
  // Remover prefixo docs/ e extensão .md
  let slug = docPath
    .replace(/^docs\//, '')
    .replace(/\.md$/, '')
    .replace(/\.mdx$/, '')
  
  // Converter caminhos para slugs
  slug = slug
    .replace(/\//g, '-')
    .toLowerCase()
  
  // Mapeamentos especiais para slugs mais limpos
  const slugMappings: Record<string, string> = {
    'sop-sop-001-sdlc': 'sop-001-sdlc',
    'sop-sop-002-risk-management': 'sop-002-risk-management',
    'sop-sop-003-vulnerability-management': 'sop-003-vulnerability-management',
    'sop-sop-004-verification-validation': 'sop-004-verification-validation',
    'sop-sop-005-change-control': 'sop-005-change-control',
    'regulatory-iso-13485-readme': 'iso-13485',
    'regulatory-iec-62304-readme': 'iec-62304',
    'regulatory-iec-62366-1-readme': 'iec-62366-1',
    'regulatory-iso-14971-readme': 'iso-14971',
    'regulatory-iso-27001-27701-readme': 'iso-27001-27701',
    'regulatory-market-regulations-readme': 'rdc-657-2022-fda-21-cfr-part-820',
    'regulatory-ce-mark-readme': 'ce-mark',
    'regulatory-compliance-matrix': 'compliance-matrix',
    'manuals-azure-devops-readme': 'manual-azure-devops',
    'manuals-defectdojo-readme': 'manual-defectdojo',
    'manuals-sharepoint-readme': 'manual-sharepoint',
    'manuals-sonarcloud-readme': 'manual-sonarcloud',
    'manuals-cloudflare-readme': 'manual-cloudflare',
    'manuals-cloudflare-dns-management': 'dns-management-cloudflare',
    'dhf-template': 'dhf-template',
    'templates-risk-acceptance-form': 'risk-acceptance-form',
  }
  
  return slugMappings[slug] || slug
}

/**
 * Obtém o path do documento a partir do slug
 */
export function getDocumentPathFromSlug(slug: string): string {
  // Reverter o slug para o path original
  const path = slug
    .split('-')
    .join('/')
    .replace(/^sop\//, 'sop/')
  
  // Tentar encontrar o documento correto
  // Isso é uma aproximação - idealmente teríamos um mapeamento completo
  return `docs/${path}.md`
}

/**
 * Obtém informações de um documento pelo path
 */
export function getDocumentInfo(docPath: string): Document | null {
  const title = documentTitles[docPath] || docPath.split('/').pop()?.replace('.md', '') || 'Documento'
  
  // Determinar categoria e tipo baseado no path
  let category = 'Outros'
  let type: Document['type'] = 'other'
  
  if (docPath.includes('/sop/')) {
    category = 'Procedimentos Operacionais Padrão (SOPs)'
    type = 'sop'
  } else if (docPath.includes('/regulatory/')) {
    category = 'Normas Regulatórias'
    type = 'regulatory'
  } else if (docPath.includes('/templates/')) {
    category = 'Templates e Formulários'
    type = 'template'
  } else if (docPath.includes('/manuals/')) {
    category = 'Manuais de Ferramentas'
    type = 'other'
  } else if (docPath === 'docs/PROCESS.md' || docPath.includes('RISK-ACCEPTANCE') || docPath.includes('AUDIT') || docPath.includes('AUTOMATED')) {
    category = 'Processos e Procedimentos'
    type = 'process'
  }
  
  return {
    title,
    path: docPath,
    description: `Documento: ${title}`,
    type,
    category,
  }
}


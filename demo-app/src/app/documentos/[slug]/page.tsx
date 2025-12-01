import { notFound } from 'next/navigation'
import { getDocumentContent, getDocumentInfo } from '@/lib/documents'
import { MarkdownViewer } from '@/components/MarkdownViewer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'
import { documentPathToSlug } from '@/lib/document-slugs'

interface DocumentPageProps {
  params: {
    slug: string
  }
}

// Função reversa: obter path a partir do slug
function getPathFromSlug(slug: string): string | null {
  // Inverter o mapeamento
  const entries = Object.entries(documentPathToSlug)
  const entry = entries.find(([_path, pathSlug]) => pathSlug === slug)
  return entry ? entry[0] : null
}

// Mapeamento de slugs para paths reais dos documentos
const slugToPathMap: Record<string, string> = {
  // SOPs
  'sop-001-sdlc': 'docs/sop/SOP-001-SDLC.md',
  'sop-002-risk-management': 'docs/sop/SOP-002-Risk-Management.md',
  'sop-003-vulnerability-management': 'docs/sop/SOP-003-Vulnerability-Management.md',
  'sop-004-verification-validation': 'docs/sop/SOP-004-Verification-Validation.md',
  'sop-005-change-control': 'docs/sop/SOP-005-Change-Control.md',
  
  // Processos
  'process': 'docs/PROCESS.md',
  'risk-acceptance-plan': 'docs/RISK-ACCEPTANCE-PLAN.md',
  'audit-evidences': 'docs/AUDIT-EVIDENCES.md',
  'automated-processes': 'docs/AUTOMATED-PROCESSES.md',
  'analise-e-planejamento-testes-automatizados': 'docs/ANALISE-E-PLANEJAMENTO-TESTES-AUTOMATIZADOS.md',
  
  // Normas Regulatórias
  'iso-13485': 'docs/regulatory/ISO-13485/README.md',
  'iec-62304': 'docs/regulatory/IEC-62304/README.md',
  'iec-62366-1': 'docs/regulatory/IEC-62366-1/README.md',
  'iso-14971': 'docs/regulatory/ISO-14971/README.md',
  'iso-27001-27701': 'docs/regulatory/ISO-27001-27701/README.md',
  'rdc-657-2022-fda-21-cfr-part-820': 'docs/regulatory/MARKET-REGULATIONS/README.md',
  'ce-mark': 'docs/regulatory/CE-MARK/README.md',
  'compliance-matrix': 'docs/regulatory/COMPLIANCE-MATRIX.md',
  
  // Templates
  'dhf-template': 'docs/dhf/TEMPLATE.md',
  'risk-acceptance-form': 'docs/templates/RISK-ACCEPTANCE-FORM.md',
  
  // Manuais
  'manual-azure-devops': 'docs/manuals/azure-devops/README.md',
  'manual-defectdojo': 'docs/manuals/defectdojo/README.md',
  'manual-sharepoint': 'docs/manuals/sharepoint/README.md',
  'manual-sonarcloud': 'docs/manuals/sonarcloud/README.md',
  'manual-cloudflare': 'docs/manuals/cloudflare/README.md',
  'dns-management-cloudflare': 'docs/manuals/cloudflare/DNS-MANAGEMENT.md',
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { slug } = params
  
  // Obter o path do documento usando o mapeamento
  const docPath = slugToPathMap[slug] || getPathFromSlug(slug)
  
  if (!docPath) {
    notFound()
  }
  
  // Ler o conteúdo do documento
  const content = await getDocumentContent(docPath)
  
  if (!content) {
    notFound()
  }
  
  // Obter informações do documento
  const docInfo = getDocumentInfo(docPath)
  
  if (!docInfo) {
    notFound()
  }
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-6">
          <Link 
            href="/documentos"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-smooth mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para Documentos</span>
          </Link>
          
          <Card className="border-cyan shadow-lg mb-6">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl text-gray-800">
                      {docInfo.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant={docInfo.type === 'sop' ? 'cyan' : docInfo.type === 'regulatory' ? 'gray' : 'outline'}>
                      {docInfo.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        
        {/* Document Content */}
        <Card className="border-cyan shadow-lg">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <MarkdownViewer content={content} />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

// Gerar slugs estáticos para os documentos conhecidos
export async function generateStaticParams() {
  return Object.keys(slugToPathMap).map((slug) => ({
    slug,
  }))
}


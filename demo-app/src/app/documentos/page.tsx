'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, BookOpen, Shield, CheckCircle2, Settings } from 'lucide-react'
import Link from 'next/link'
import { getSlugFromPath } from '@/lib/document-slugs'

interface DocumentCategory {
  title: string
  icon: React.ReactNode
  documents: {
    title: string
    path: string
    description: string
    type: 'sop' | 'regulatory' | 'process' | 'template' | 'other'
  }[]
}

const documentCategories: DocumentCategory[] = [
  {
    title: 'Procedimentos Operacionais Padrão (SOPs)',
    icon: <FileText className="h-5 w-5 text-primary" />,
    documents: [
      {
        title: 'SOP-001: SDLC - Ciclo de Vida de Desenvolvimento',
        path: 'docs/sop/SOP-001-SDLC.md',
        description: 'Regras de Git, branching, pipelines e versionamento',
        type: 'sop'
      },
      {
        title: 'SOP-002: Gestão de Riscos',
        path: 'docs/sop/SOP-002-Risk-Management.md',
        description: 'Metodologia de análise e mitigação de riscos (ISO 14971)',
        type: 'sop'
      },
      {
        title: 'SOP-003: Gestão de Vulnerabilidades',
        path: 'docs/sop/SOP-003-Vulnerability-Management.md',
        description: 'Processo DefectDojo, SLAs e false positives',
        type: 'sop'
      },
      {
        title: 'SOP-004: Verificação e Validação',
        path: 'docs/sop/SOP-004-Verification-Validation.md',
        description: 'Estratégia de testes funcionais e usabilidade',
        type: 'sop'
      },
      {
        title: 'SOP-005: Controle de Mudança',
        path: 'docs/sop/SOP-005-Change-Control.md',
        description: 'Versionamento, LTF e controle de configuração',
        type: 'sop'
      }
    ]
  },
  {
    title: 'Processos e Procedimentos',
    icon: <Settings className="h-5 w-5 text-primary" />,
    documents: [
      {
        title: 'PROCESS.md - Processo Integrado Completo',
        path: 'docs/PROCESS.md',
        description: 'Especificação do processo end-to-end do ciclo de vida',
        type: 'process'
      },
      {
        title: 'Plano de Aceitação de Riscos',
        path: 'docs/RISK-ACCEPTANCE-PLAN.md',
        description: 'Processo formal de aceitação de riscos no ciclo',
        type: 'process'
      },
      {
        title: 'Evidências para Auditoria',
        path: 'docs/AUDIT-EVIDENCES.md',
        description: 'Mapeamento completo de evidências por fase',
        type: 'process'
      },
      {
        title: 'Processos Automatizados',
        path: 'docs/AUTOMATED-PROCESSES.md',
        description: 'Lista e documentação de todos os processos automatizados',
        type: 'process'
      },
      {
        title: 'Análise e Planejamento: Testes E2E (Playwright/Selenium)',
        path: 'docs/ANALISE-E-PLANEJAMENTO-TESTES-AUTOMATIZADOS.md',
        description: 'Planejamento completo de integração de testes E2E automatizados, incluindo Sanity Tests',
        type: 'process'
      },
      {
        title: 'Planejamento para Conformidade Total',
        path: 'docs/PLANEJAMENTO-CONFORMIDADE-COMPLETA.md',
        description: 'Análise de gaps e planejamento para total visibilidade e conformidade regulatória, riscos e segurança',
        type: 'process'
      },
      {
        title: 'Análise: Automação do MDS2 Form',
        path: 'docs/ANALISE-MDS2-AUTOMATIZACAO.md',
        description: 'Análise completa do potencial de automação do formulário MDS2 (Medical Device Software) com diagramas do processo',
        type: 'process'
      }
    ]
  },
  {
    title: 'Normas Regulatórias',
    icon: <Shield className="h-5 w-5 text-primary" />,
    documents: [
      {
        title: 'ISO 13485:2016 - Sistema de Gestão da Qualidade',
        path: 'docs/regulatory/ISO-13485/README.md',
        description: 'Referência e mapeamento de requisitos',
        type: 'regulatory'
      },
      {
        title: 'IEC 62304 - Ciclo de Vida de Software Médico',
        path: 'docs/regulatory/IEC-62304/README.md',
        description: 'Classificação Class B, processos implementados',
        type: 'regulatory'
      },
      {
        title: 'IEC 62366-1 - Engenharia de Usabilidade',
        path: 'docs/regulatory/IEC-62366-1/README.md',
        description: 'Processos de usabilidade e testes somativos',
        type: 'regulatory'
      },
      {
        title: 'ISO 14971:2019 - Gestão de Riscos',
        path: 'docs/regulatory/ISO-14971/README.md',
        description: 'Metodologia RPN e critérios de aceitação',
        type: 'regulatory'
      },
      {
        title: 'ISO/IEC 27001 & 27701 - Segurança',
        path: 'docs/regulatory/ISO-27001-27701/README.md',
        description: 'Gestão de segurança da informação e privacidade',
        type: 'regulatory'
      },
      {
        title: 'RDC 657/2022 & FDA 21 CFR Part 820',
        path: 'docs/regulatory/MARKET-REGULATIONS/README.md',
        description: 'Regulamentações de mercado (ANVISA e FDA)',
        type: 'regulatory'
      },
      {
        title: 'CE Mark (MDR 2017/745)',
        path: 'docs/regulatory/CE-MARK/README.md',
        description: 'Certificação europeia para dispositivos médicos',
        type: 'regulatory'
      },
      {
        title: 'Matriz de Conformidade',
        path: 'docs/regulatory/COMPLIANCE-MATRIX.md',
        description: 'Mapeamento completo de requisitos regulatórios',
        type: 'regulatory'
      }
    ]
  },
  {
    title: 'Templates e Formulários',
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    documents: [
      {
        title: 'DHF Template',
        path: 'docs/dhf/TEMPLATE.md',
        description: 'Template do Design History File',
        type: 'template'
      },
      {
        title: 'Risk Acceptance Form',
        path: 'docs/templates/RISK-ACCEPTANCE-FORM.md',
        description: 'Formulário de aceitação de riscos',
        type: 'template'
      }
    ]
  },
  {
    title: 'Manuais de Ferramentas',
    icon: <Settings className="h-5 w-5 text-primary" />,
    documents: [
      {
        title: 'Manual Azure DevOps',
        path: 'docs/manuals/azure-devops/README.md',
        description: 'Guia completo do Azure DevOps',
        type: 'other'
      },
      {
        title: 'Manual DefectDojo',
        path: 'docs/manuals/defectdojo/README.md',
        description: 'Guia completo do OWASP DefectDojo',
        type: 'other'
      },
      {
        title: 'Manual SharePoint',
        path: 'docs/manuals/sharepoint/README.md',
        description: 'Guia completo do SharePoint Online',
        type: 'other'
      },
      {
        title: 'Manual SonarCloud',
        path: 'docs/manuals/sonarcloud/README.md',
        description: 'Guia completo do SonarCloud',
        type: 'other'
      },
      {
        title: 'Manual Cloudflare',
        path: 'docs/manuals/cloudflare/README.md',
        description: 'Guia completo do Cloudflare',
        type: 'other'
      },
      {
        title: 'DNS Management - Cloudflare',
        path: 'docs/manuals/cloudflare/DNS-MANAGEMENT.md',
        description: 'Processo de criação de entradas DNS',
        type: 'other'
      }
    ]
  }
]

const getTypeBadge = (type: string) => {
  const badges = {
    sop: { label: 'SOP', variant: 'cyan' as const },
    regulatory: { label: 'Regulatório', variant: 'gray' as const },
    process: { label: 'Processo', variant: 'success' as const },
    template: { label: 'Template', variant: 'outline' as const },
    other: { label: 'Manual', variant: 'secondary' as const }
  }
  return badges[type as keyof typeof badges] || badges.other
}

export default function DocumentosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Documentação
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Documentação completa do processo, procedimentos e normas regulatórias
          </p>
        </div>

        {/* Document Categories */}
        <div className="space-y-8">
          {documentCategories.map((category, categoryIdx) => (
            <Card key={categoryIdx} className="border-cyan shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.documents.map((doc, docIdx) => {
                    const badge = getTypeBadge(doc.type)
                    const docSlug = getSlugFromPath(doc.path)
                    const docUrl = `/documentos/${docSlug}`
                    return (
                      <Card
                        key={docIdx}
                        className="border border-gray-200 hover:border-primary/50 hover:shadow-md transition-smooth"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-gray-800 flex-1">
                              {doc.title}
                            </h3>
                            <Badge variant={badge.variant} className="text-xs flex-shrink-0">
                              {badge.label}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {doc.description}
                          </p>
                          <Link
                            href={docUrl}
                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 hover:underline transition-smooth"
                          >
                            <span>Ver documento</span>
                            <FileText className="h-3 w-3" />
                          </Link>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="mt-12 border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Resumo da Documentação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">5</p>
                <p className="text-sm text-gray-600 mt-1">SOPs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">8</p>
                <p className="text-sm text-gray-600 mt-1">Normas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">4</p>
                <p className="text-sm text-gray-600 mt-1">Processos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">2</p>
                <p className="text-sm text-gray-600 mt-1">Templates</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">6</p>
                <p className="text-sm text-gray-600 mt-1">Manuais</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileCheck, AlertTriangle, CheckCircle2, User, Calendar, FileText } from 'lucide-react'
import Link from 'next/link'
import risksData from '@/data/risks.json'
import { MermaidDiagram } from '@/components/MermaidDiagram'

const acceptanceFlow = `flowchart TD
    A[Risco Identificado] --> B{RPN Calculado}
    B --> C{RPN < 5?}
    C -->|Sim| D[✅ Aceitação Automática<br/>QA Leader]
    C -->|Não| E{RPN 5-19?}
    E -->|Sim| F[Análise Benefício/Risco<br/>QA Leader + PO/Clínico]
    E -->|Não| G{RPN 20-50?}
    G -->|Sim| H[Análise Detalhada<br/>QA Leader + PO/Clínico + Diretor]
    G -->|Não| I{RPN > 50?}
    I -->|Sim| J[⚠️ Comitê de Riscos<br/>Análise Excepcional]
    F --> K[Risk Acceptance Form]
    H --> K
    J --> K
    D --> K
    K --> L[Documentação SharePoint]
    L --> M[Work Item Atualizado]
    M --> N[✅ Risco Aceito]
    
    style D fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style N fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style J fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style C fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style E fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style G fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style I fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff`

export default function AceitacaoRiscosPage() {
  const acceptedRisks = risksData.risks.filter(r => r.accepted)

  const getApprovalLevel = (rpn: number) => {
    if (rpn < 5) return 'QA Leader'
    if (rpn < 20) return 'QA Leader + PO/Clínico'
    if (rpn < 50) return 'QA Leader + PO/Clínico + Diretor Médico'
    return 'Comitê de Riscos'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FileCheck className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Aceitação de Riscos
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Processo formal de aceitação de riscos conforme ISO 14971:2019
          </p>
        </div>

        {/* Process Flow Diagram */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Fluxo de Aceitação de Riscos
            </CardTitle>
            <CardDescription>
              Processo de decisão baseado em RPN (Risk Priority Number)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram chart={acceptanceFlow} />
          </CardContent>
        </Card>

        {/* Approval Levels Matrix */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Níveis de Aprovação</CardTitle>
            <CardDescription>
              Aprovação necessária conforme RPN e tipo de risco
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">RPN</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Tipo</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Aprovação Necessária</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Documentação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><Badge className="bg-green-500 text-white">&lt; 5</Badge></td>
                    <td className="py-3 px-4">Qualquer</td>
                    <td className="py-3 px-4">QA Leader</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Risk Acceptance Form básico</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><Badge className="bg-yellow-500 text-white">5-19</Badge></td>
                    <td className="py-3 px-4">Safety</td>
                    <td className="py-3 px-4">QA Leader + PO/Clínico</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Risk Acceptance Form + Análise Benefício/Risco</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><Badge className="bg-orange-500 text-white">20-50</Badge></td>
                    <td className="py-3 px-4">Safety</td>
                    <td className="py-3 px-4">QA Leader + PO/Clínico + Diretor Médico</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Risk Acceptance Form + Análise Detalhada</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><Badge variant="destructive">&gt; 50</Badge></td>
                    <td className="py-3 px-4">Qualquer</td>
                    <td className="py-3 px-4">Comitê de Riscos</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Risk Acceptance Form + Análise Excepcional</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Accepted Risks */}
        <Card className="mb-8 border-2 border-yellow-300 shadow-lg bg-yellow-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-yellow-600" />
              Riscos Aceitos
            </CardTitle>
            <CardDescription>
              Lista completa de riscos formalmente aceitos com justificativas
            </CardDescription>
          </CardHeader>
          <CardContent>
            {acceptedRisks.length === 0 ? (
              <p className="text-gray-600 text-center py-8">
                Nenhum risco aceito no momento.
              </p>
            ) : (
              <div className="space-y-4">
                {acceptedRisks.map((risk) => (
                  <Card key={risk.id} className="bg-white">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{risk.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className="bg-red-100 text-red-800 border-red-300">
                              {risk.type.toUpperCase()}
                            </Badge>
                            <Badge variant="warning">RPN: {risk.rpn}</Badge>
                            <Badge variant="outline">ID: {risk.id}</Badge>
                          </div>
                        </div>
                        <Badge variant="warning" className="text-sm">
                          Aceito
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                          <p className="text-sm font-semibold text-gray-700 mb-1">Justificativa de Aceitação:</p>
                          <p className="text-sm text-gray-600">{risk.acceptanceJustification}</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">Aprovado por</p>
                              <p className="font-medium text-gray-800">{risk.acceptedBy}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">Data de Aceitação</p>
                              <p className="font-medium text-gray-800">
                                {new Date(risk.acceptanceDate!).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">Nível de Aprovação</p>
                              <p className="font-medium text-gray-800">{getApprovalLevel(risk.rpn)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">Documentação</p>
                              <Link href="/documentos/risk-acceptance-plan" className="text-primary hover:underline text-xs">
                                Ver formulário
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Links */}
        <Card className="border-2 border-primary/20 shadow-cyan-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Documentação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link
                href="/documentos/risk-acceptance-plan"
                className="flex items-center gap-2 text-primary hover:text-primary/80 hover:underline"
              >
                <FileText className="h-4 w-4" />
                Plano de Aceitação de Riscos
              </Link>
              <Link
                href="/documentos/templates/risk-acceptance-form"
                className="flex items-center gap-2 text-primary hover:text-primary/80 hover:underline"
              >
                <FileText className="h-4 w-4" />
                Template: Risk Acceptance Form
              </Link>
              <Link
                href="/documentos/sop-002-risk-management"
                className="flex items-center gap-2 text-primary hover:text-primary/80 hover:underline"
              >
                <FileText className="h-4 w-4" />
                SOP-002: Gestão de Riscos
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


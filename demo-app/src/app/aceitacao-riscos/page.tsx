'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileCheck, AlertTriangle, FileText, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { getSlugFromPath } from '@/lib/document-slugs'
import { MermaidDiagram } from '@/components/MermaidDiagram'

const acceptanceFlow = `flowchart TD
    A[Risco Identificado] --> B{RPN Calculado}
    B --> C{RPN < 5?}
    C -->|Sim| D[✅ Aceitação Automática<br/>QA Leader]
    C -->|Não| E{RPN 5-19?}
    E -->|Sim| F[Análise Benefício/Risco<br/>QA Leader + PO/Clínico]
    E -->|Não| G{RPN 20-50?}
    G -->|Sim| H[Análise Benefício/Risco<br/>QA Leader + PO/Clínico + Diretor Médico]
    G -->|Não| I{RPN > 50?}
    I -->|Sim| J[Mitigação Obrigatória<br/>NÃO PODE SER ACEITO]
    I -->|Não| K[Erro: RPN fora do range]

    D --> L(Risco Aceito)
    F --> M{Aceito?}
    H --> N{Aceito?}

    M -->|Sim| L
    M -->|Não| O[Revisar Mitigação]
    N -->|Sim| L
    N -->|Não| O

    L --> P[Monitoramento Contínuo]
    O --> B
`

export default function AceitacaoRiscosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FileCheck className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Processo de Aceitação de Riscos
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Detalhes sobre como os riscos residuais são avaliados e formalmente aceitos no ciclo de vida do nCommand Lite, 
            conforme ISO 14971:2019.
          </p>
        </div>

        {/* Acceptance Flow Diagram */}
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

        {/* Approval Levels */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Níveis de Aprovação</CardTitle>
            <CardDescription>
              Critérios de aprovação baseados no RPN residual após mitigação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RPN</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nível de Aprovação</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documentação</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">&lt; 5</td>
                    <td className="px-6 py-4 text-sm text-gray-600">QA Leader (Aceitação Automática)</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Risk Acceptance Form básico</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5-19</td>
                    <td className="px-6 py-4 text-sm text-gray-600">QA Leader + PO/Clínico</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Risk Acceptance Form completo + Análise Benefício/Risco</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20-50</td>
                    <td className="px-6 py-4 text-sm text-gray-600">QA Leader + PO/Clínico + Diretor Médico</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Risk Acceptance Form + Análise Detalhada + Justificativa Robusta</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">&gt; 50</td>
                    <td className="px-6 py-4 text-sm text-red-600 font-semibold">Não Pode Ser Aceito</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Mitigação obrigatória antes do desenvolvimento</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Process Details */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Processo Detalhado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">1. Identificação do Risco Residual</h3>
                <p className="text-sm text-gray-700">
                  Após implementação de medidas de mitigação, o RPN residual é calculado. Se o risco residual 
                  não puder ser eliminado completamente, o processo de aceitação é iniciado.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">2. Análise de Benefício/Risco</h3>
                <p className="text-sm text-gray-700">
                  Para riscos com RPN ≥ 5, uma análise formal de benefício/risco é realizada, documentando 
                  como os benefícios clínicos do software superam o risco residual.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">3. Documentação</h3>
                <p className="text-sm text-gray-700">
                  O Risk Acceptance Form é preenchido com justificativa, análise de benefício/risco (quando aplicável), 
                  e assinado pelos aprovadores conforme o nível de aprovação necessário.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">4. Armazenamento</h3>
                <p className="text-sm text-gray-700">
                  O formulário assinado é armazenado no SharePoint no diretório `/Risk Management/Risk Acceptance Forms/`, 
                  e o Work Item no Azure DevOps é atualizado com o status "Accepted" e link para o documento.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5. Monitoramento</h3>
                <p className="text-sm text-gray-700">
                  Riscos aceitos são monitorados continuamente. Se novas informações sobre o risco forem obtidas 
                  ou se o contexto mudar, o risco é reavaliado.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Documentos Relacionados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/documentos/risk-acceptance-plan"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">Plano de Aceitação de Riscos</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Documento completo detalhando todo o processo de aceitação de riscos, critérios e procedimentos.
                </p>
                <Badge variant="outline" className="text-xs">Plano</Badge>
              </Link>
              
              <Link 
                href="/documentos/sop-002-risk-management"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">SOP-002: Gestão de Riscos</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Procedimento completo de gestão de riscos incluindo o processo de aceitação.
                </p>
                <Badge variant="outline" className="text-xs">Procedimento Operacional</Badge>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

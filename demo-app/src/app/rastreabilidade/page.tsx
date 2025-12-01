'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GitBranch, FileText, TestTube, AlertTriangle, Link2, CheckCircle2, Circle } from 'lucide-react'
import Link from 'next/link'
import traceabilityData from '@/data/traceability.json'
import { MermaidDiagram } from '@/components/MermaidDiagram'

const traceabilityFlow = `flowchart LR
    A[Requisito<br/>REQ-001] -->|Implementado em| B[Código<br/>Commits/Branches]
    A -->|Validado por| C[Testes<br/>Unit/E2E]
    A -->|Vinculado a| D[Riscos<br/>RISK-001]
    B -->|Cobre| C
    C -->|Valida| D
    D -->|Mitigado por| B
    
    style A fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style B fill:#58595b,stroke:#4a4b4d,stroke-width:2px,color:#fff
    style C fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style D fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff`

export default function RastreabilidadePage() {
  const { summary, requirements } = traceabilityData

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Link2 className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Rastreabilidade
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Matriz completa de rastreabilidade: Requisitos → Código → Testes → Riscos
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total de Requisitos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{summary.totalRequirements}</div>
              <p className="text-sm text-gray-500 mt-1">Requisitos identificados</p>
            </CardContent>
          </Card>

          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Cobertura de Código</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{summary.coverage.code}%</div>
              <p className="text-sm text-gray-500 mt-1">{summary.withCode} de {summary.totalRequirements} requisitos</p>
            </CardContent>
          </Card>

          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Cobertura de Testes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{summary.coverage.tests.toFixed(1)}%</div>
              <p className="text-sm text-gray-500 mt-1">{summary.withTests} de {summary.totalRequirements} requisitos</p>
            </CardContent>
          </Card>

          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Cobertura de Riscos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{summary.coverage.risks.toFixed(1)}%</div>
              <p className="text-sm text-gray-500 mt-1">{summary.withRisks} de {summary.totalRequirements} requisitos</p>
            </CardContent>
          </Card>
        </div>

        {/* Traceability Flow Diagram */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Link2 className="h-6 w-6 text-primary" />
              Fluxo de Rastreabilidade
            </CardTitle>
            <CardDescription>
              Relacionamento entre Requisitos, Código, Testes e Riscos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram chart={traceabilityFlow} />
          </CardContent>
        </Card>

        {/* Requirements Traceability Matrix */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Matriz de Rastreabilidade
            </CardTitle>
            <CardDescription>
              Rastreabilidade completa de cada requisito
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Requisito</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Work Item</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Código</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Testes</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Riscos</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requirements.map((req) => (
                    <tr key={req.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-800">{req.title}</div>
                        <div className="text-xs text-gray-500 mt-1">ID: {req.id}</div>
                      </td>
                      <td className="py-4 px-4">
                        <Link
                          href={`https://dev.azure.com/ionic-health/nCommand-Lite/_workitems/edit/${req.workItemId.replace('ADO-', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          {req.workItemId}
                        </Link>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <GitBranch className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-700">{req.code.branches[0]}</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {req.code.commits.length} commit(s)
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-col gap-1">
                          {req.tests.map((test) => (
                            <div key={test.id} className="flex items-center gap-2">
                              <TestTube className="h-4 w-4 text-green-500" />
                              <Badge variant={test.status === 'Pass' ? 'success' : 'destructive'} className="text-xs">
                                {test.type}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-col gap-1">
                          {req.risks.map((risk) => (
                            <div key={risk.id} className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-orange-500" />
                              <Link
                                href={`/riscos?risk=${risk.id}`}
                                className="text-sm text-primary hover:underline"
                              >
                                {risk.id}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={req.status === 'Complete' ? 'success' : 'warning'}>
                          {req.status === 'Complete' ? (
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                          ) : (
                            <Circle className="h-3 w-3 mr-1" />
                          )}
                          {req.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Coverage Gaps */}
        {summary.coverage.tests < 100 || summary.coverage.risks < 100 ? (
          <Card className="border-2 border-yellow-300 shadow-lg bg-yellow-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                Gaps de Rastreabilidade Identificados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {summary.coverage.tests < 100 && (
                  <div className="flex items-center gap-2">
                    <Circle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm text-gray-700">
                      {summary.totalRequirements - summary.withTests} requisito(s) sem testes associados
                    </span>
                  </div>
                )}
                {summary.coverage.risks < 100 && (
                  <div className="flex items-center gap-2">
                    <Circle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm text-gray-700">
                      {summary.totalRequirements - summary.withRisks} requisito(s) sem análise de risco
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-green-300 shadow-lg bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                Rastreabilidade Completa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Todos os requisitos possuem código, testes e análise de riscos associados.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}


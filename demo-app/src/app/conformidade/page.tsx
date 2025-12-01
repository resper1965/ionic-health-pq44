'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, CheckCircle2, AlertTriangle, XCircle, ExternalLink, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import complianceData from '@/data/compliance.json'

export default function ConformidadePage() {
  const getStatusBadge = (status: string) => {
    const badges = {
      compliant: { label: 'Conforme', variant: 'success' as const, icon: CheckCircle2 },
      'partially-compliant': { label: 'Parcialmente Conforme', variant: 'warning' as const, icon: AlertTriangle },
      'non-compliant': { label: 'Não Conforme', variant: 'destructive' as const, icon: XCircle },
    }
    return badges[status as keyof typeof badges] || badges.compliant
  }

  const getComplianceColor = (percentage: number) => {
    if (percentage >= 95) return 'text-green-600'
    if (percentage >= 80) return 'text-yellow-600'
    return 'text-red-600'
  }

  const overallCompliance = complianceData.norms.reduce((acc, norm) => acc + norm.compliance, 0) / complianceData.norms.length

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Conformidade Regulatória
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Visão completa da conformidade do nCommand Lite com todas as normas regulatórias aplicáveis
          </p>
        </div>

        {/* Overall Compliance Card */}
        <Card className="mb-8 border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                Conformidade Geral
              </span>
              <Badge variant="success" className="text-lg px-4 py-2">
                {overallCompliance.toFixed(1)}%
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
              {complianceData.norms.map((norm) => (
                <div key={norm.id} className="text-center">
                  <p className={`text-3xl font-bold ${getComplianceColor(norm.compliance)}`}>
                    {norm.compliance}%
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{norm.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Norms Cards */}
        <div className="space-y-6">
          {complianceData.norms.map((norm) => {
            const statusBadge = getStatusBadge(norm.status)
            const StatusIcon = statusBadge.icon

            return (
              <Card key={norm.id} className="border-cyan shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{norm.name}</CardTitle>
                      <CardDescription className="text-base">
                        {norm.title} - Versão {norm.version}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={statusBadge.variant} className="text-sm">
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {statusBadge.label}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        {norm.compliance}% Conforme
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                    <span>Responsável: <strong>{norm.responsible}</strong></span>
                    <span>Última atualização: <strong>{new Date(norm.lastUpdate).toLocaleDateString('pt-BR')}</strong></span>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progresso de Conformidade</span>
                      <span>{norm.compliance}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          norm.compliance >= 95
                            ? 'bg-green-500'
                            : norm.compliance >= 80
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${norm.compliance}%` }}
                      />
                    </div>
                  </div>

                  {/* Requirements Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Requisito</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Implementação</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Evidência</th>
                        </tr>
                      </thead>
                      <tbody>
                        {norm.requirements.map((req) => (
                          <tr key={req.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="font-medium text-gray-800">{req.section}</div>
                              <div className="text-sm text-gray-500">{req.id}</div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge
                                variant={req.status === 'compliant' ? 'success' : 'warning'}
                                className="text-xs"
                              >
                                {req.status === 'compliant' ? 'Conforme' : 'Parcial'}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                              {req.implementation}
                            </td>
                            <td className="py-3 px-4">
                              {req.evidence.map((ev, idx) => (
                                <Link
                                  key={idx}
                                  href={ev.link}
                                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 hover:underline mb-1"
                                >
                                  {ev.description}
                                  <ExternalLink className="h-3 w-3" />
                                </Link>
                              ))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* View Full Details */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href={`/documentos/compliance-matrix`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 hover:underline text-sm font-medium"
                    >
                      Ver Matriz de Conformidade Completa
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Summary */}
        <Card className="mt-12 border-2 border-primary/20 shadow-cyan-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Resumo da Conformidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-3xl font-bold text-green-600">
                  {complianceData.norms.filter(n => n.status === 'compliant').length}
                </p>
                <p className="text-sm text-gray-600 mt-1">Normas Conformes</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <p className="text-3xl font-bold text-yellow-600">
                  {complianceData.norms.filter(n => n.status === 'partially-compliant').length}
                </p>
                <p className="text-sm text-gray-600 mt-1">Parcialmente Conformes</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">
                  {complianceData.norms.reduce((acc, n) => acc + n.requirements.length, 0)}
                </p>
                <p className="text-sm text-gray-600 mt-1">Requisitos Mapeados</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary">
                  {overallCompliance.toFixed(1)}%
                </p>
                <p className="text-sm text-gray-600 mt-1">Conformidade Geral</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


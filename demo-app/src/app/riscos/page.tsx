'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Shield, Activity, TrendingDown, CheckCircle2, XCircle } from 'lucide-react'
import Link from 'next/link'
import risksData from '@/data/risks.json'

export default function RiscosPage() {
  const getRiskTypeColor = (type: string) => {
    const colors = {
      safety: 'bg-red-100 text-red-800 border-red-300',
      security: 'bg-orange-100 text-orange-800 border-orange-300',
      usability: 'bg-blue-100 text-blue-800 border-blue-300',
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300'
  }

  const getRPNColor = (rpn: number) => {
    if (rpn >= 50) return 'text-red-600 font-bold'
    if (rpn >= 20) return 'text-orange-600 font-semibold'
    if (rpn >= 5) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getStatusBadge = (status: string) => {
    const badges = {
      mitigated: { label: 'Mitigado', variant: 'success' as const, icon: CheckCircle2 },
      accepted: { label: 'Aceito', variant: 'warning' as const, icon: AlertTriangle },
      active: { label: 'Ativo', variant: 'destructive' as const, icon: XCircle },
    }
    return badges[status as keyof typeof badges] || badges.active
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Gestão de Riscos
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Visão completa da gestão de riscos do nCommand Lite (Safety, Security, Usability)
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total de Riscos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{risksData.statistics.total}</div>
              <p className="text-sm text-gray-500 mt-1">Riscos identificados</p>
            </CardContent>
          </Card>

          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Riscos Críticos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${risksData.statistics.critical > 0 ? 'text-red-600' : 'text-green-600'}`}>
                {risksData.statistics.critical}
              </div>
              <p className="text-sm text-gray-500 mt-1">RPN {'>'} 50</p>
            </CardContent>
          </Card>

          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Mitigados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {risksData.statistics.byStatus.mitigated}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {Math.round((risksData.statistics.byStatus.mitigated / risksData.statistics.total) * 100)}% do total
              </p>
            </CardContent>
          </Card>

          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Aceitos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">
                {risksData.statistics.byStatus.accepted}
              </div>
              <p className="text-sm text-gray-500 mt-1">Riscos aceitos formalmente</p>
            </CardContent>
          </Card>
        </div>

        {/* Risk Matrix Visual */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Activity className="h-6 w-6 text-primary" />
              Matriz de Riscos (RPN)
            </CardTitle>
            <CardDescription>
              RPN = Severidade × Probabilidade × Detectabilidade
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Risco</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">RPN</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Tipo</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {risksData.risks.map((risk) => {
                    const statusBadge = getStatusBadge(risk.status)
                    const StatusIcon = statusBadge.icon
                    
                    return (
                      <tr key={risk.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-800">{risk.title}</div>
                          <div className="text-xs text-gray-500 mt-1">ID: {risk.id}</div>
                        </td>
                        <td className={`py-3 px-4 text-sm ${getRPNColor(risk.rpn)}`}>
                          <div className="font-bold">{risk.rpn}</div>
                          {risk.rpnResidual && risk.rpnResidual < risk.rpn && (
                            <div className="text-xs text-gray-500">
                              Residual: {risk.rpnResidual}
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={`text-xs ${getRiskTypeColor(risk.type)}`}>
                            {risk.type.toUpperCase()}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant={statusBadge.variant} className="text-xs">
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {statusBadge.label}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Link
                            href={`/aceitacao-riscos?risk=${risk.id}`}
                            className="text-xs text-primary hover:underline"
                          >
                            Ver detalhes
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Accepted Risks */}
        {risksData.risks.filter(r => r.accepted).length > 0 && (
          <Card className="mb-8 border-2 border-yellow-300 shadow-lg bg-yellow-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                Riscos Aceitos
              </CardTitle>
              <CardDescription>
                Riscos formalmente aceitos com justificativas documentadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {risksData.risks.filter(r => r.accepted).map((risk) => (
                  <div key={risk.id} className="p-4 bg-white rounded-lg border border-yellow-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{risk.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getRiskTypeColor(risk.type)}>
                            {risk.type.toUpperCase()}
                          </Badge>
                          <span className={`text-sm font-semibold ${getRPNColor(risk.rpn)}`}>
                            RPN: {risk.rpn}
                          </span>
                        </div>
                      </div>
                      <Badge variant="warning">Aceito</Badge>
                    </div>
                    <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-200">
                      <p className="text-sm font-medium text-gray-700 mb-1">Justificativa:</p>
                      <p className="text-sm text-gray-600">{risk.acceptanceJustification}</p>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Aceito por: {risk.acceptedBy} em {new Date(risk.acceptanceDate!).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Link to Risk Acceptance Process */}
        <Card className="border-2 border-primary/20 shadow-cyan-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Processo de Aceitação de Riscos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Para entender o processo completo de aceitação de riscos, consulte:
            </p>
            <Link
              href="/aceitacao-riscos"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 hover:underline font-medium"
            >
              Ver Processo de Aceitação de Riscos
              <TrendingDown className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


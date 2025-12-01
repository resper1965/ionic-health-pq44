'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileCheck, ExternalLink, CheckCircle2, Circle, AlertTriangle, Shield } from 'lucide-react'
import Link from 'next/link'
import auditData from '@/data/audit-evidences.json'
import { useState } from 'react'

export default function AuditoriaPage() {
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({})

  const togglePhase = (phaseId: string) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
    }))
  }

  const getStatusBadge = (status: string) => {
    if (status === 'Available') {
      return { variant: 'success' as const, icon: CheckCircle2, label: 'Disponível' }
    }
    return { variant: 'warning' as const, icon: Circle, label: 'Pendente' }
  }

  const completedChecklist = auditData.checklist.filter(item => item.status === 'Complete').length
  const totalChecklist = auditData.checklist.length

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FileCheck className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Evidências para Auditoria
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Guia completo de evidências organizadas por fase para auditorias regulatórias
          </p>
        </div>

        {/* Checklist Summary */}
        <Card className="mb-8 border-2 border-primary/20 shadow-cyan-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Checklist Pré-Auditoria
            </CardTitle>
            <CardDescription>
              Preparação para auditoria regulatória
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso</span>
                <span className="text-sm font-semibold text-gray-800">
                  {completedChecklist} de {totalChecklist} itens completos
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all"
                  style={{ width: `${(completedChecklist / totalChecklist) * 100}%` }}
                />
              </div>
            </div>
            <div className="space-y-2">
              {auditData.checklist.map((item, idx) => {
                const isComplete = item.status === 'Complete'
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      isComplete ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    {isComplete ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                    <span className={`text-sm flex-1 ${isComplete ? 'text-gray-800' : 'text-gray-600'}`}>
                      {item.item}
                    </span>
                    {item.evidence && (
                      <Link
                        href={`#${item.evidence}`}
                        className="text-xs text-primary hover:underline"
                      >
                        Ver evidência
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Evidences by Phase */}
        <div className="space-y-6 mb-8">
          {auditData.phases.map((phase) => (
            <Card key={phase.id} className="border-cyan shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-primary" />
                    {phase.name}
                  </CardTitle>
                  <button
                    onClick={() => togglePhase(phase.id)}
                    className="text-sm text-primary hover:underline"
                  >
                    {expandedPhases[phase.id] ? 'Recolher' : 'Expandir'}
                  </button>
                </div>
              </CardHeader>
              {expandedPhases[phase.id] && (
                <CardContent>
                  <div className="space-y-6">
                    {phase.evidenceCategories.map((category, catIdx) => (
                      <div key={catIdx}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          {category.category}
                        </h3>
                        <div className="space-y-4">
                          {category.evidences.map((evidence) => {
                            const statusBadge = getStatusBadge(evidence.status)
                            const StatusIcon = statusBadge.icon
                            return (
                              <Card key={evidence.id} id={evidence.id} className="bg-white border border-gray-200">
                                <CardHeader className="pb-3">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <CardTitle className="text-base mb-2">{evidence.title}</CardTitle>
                                      <CardDescription className="text-sm mb-2">
                                        {evidence.description}
                                      </CardDescription>
                                      <div className="flex items-center gap-4 text-xs text-gray-600">
                                        <span>
                                          <strong>Sistema:</strong> {evidence.system}
                                        </span>
                                        <span>
                                          <strong>Localização:</strong> {evidence.location}
                                        </span>
                                        <span>
                                          <strong>Responsável:</strong> {evidence.responsible}
                                        </span>
                                      </div>
                                    </div>
                                    <Badge variant={statusBadge.variant} className="flex-shrink-0">
                                      <StatusIcon className="h-3 w-3 mr-1" />
                                      {statusBadge.label}
                                    </Badge>
                                  </div>
                                </CardHeader>
                                {evidence.link && (
                                  <CardContent className="pt-0">
                                    <a
                                      href={evidence.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 hover:underline text-sm"
                                    >
                                      Acessar evidência
                                      <ExternalLink className="h-4 w-4" />
                                    </a>
                                  </CardContent>
                                )}
                              </Card>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Access Guide */}
        <Card className="border-2 border-blue-300 shadow-lg bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600" />
              Guia de Acesso para Auditores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Credenciais Temporárias</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Azure DevOps:</strong> Conta de leitura (Read-only)</li>
                  <li>• <strong>DefectDojo:</strong> Usuário com permissão de visualização</li>
                  <li>• <strong>SharePoint:</strong> Acesso de leitura ao diretório DHF</li>
                  <li>• <strong>SonarCloud:</strong> Acesso público ou conta de leitura</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Documentação para Auditores</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/documentos/audit-evidences"
                    className="text-sm text-primary hover:underline"
                  >
                    AUDIT-EVIDENCES.md
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link
                    href="/documentos/compliance-matrix"
                    className="text-sm text-primary hover:underline"
                  >
                    COMPLIANCE-MATRIX.md
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link
                    href="/documentos/process"
                    className="text-sm text-primary hover:underline"
                  >
                    PROCESS.md
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


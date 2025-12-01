'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, CheckCircle2, XCircle, AlertTriangle, TrendingDown, Clock, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import securityData from '@/data/security.json'

export default function SegurancaPage() {
  const totalVulnerabilities = Object.values(securityData.vulnerabilities).reduce((a, b) => a + b, 0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Segurança da Informação
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Visão completa da segurança do nCommand Lite, vulnerabilidades e certificado de segurança
          </p>
        </div>

        {/* Security Certificate Card */}
        <Card className={`mb-8 border-2 shadow-cyan-lg ${
          securityData.certificate.valid 
            ? 'border-green-300 bg-green-50/50' 
            : 'border-red-300 bg-red-50/50'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-3">
                {securityData.certificate.valid ? (
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600" />
                )}
                Certificado de Segurança
              </span>
              <Badge variant={securityData.certificate.valid ? 'success' : 'destructive'} className="text-lg px-4 py-2">
                {securityData.certificate.valid ? 'APROVADO' : 'REPROVADO'}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-red-600">{securityData.vulnerabilities.critical}</div>
                <div className="text-xs text-gray-600 mt-1">Críticas</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{securityData.vulnerabilities.high}</div>
                <div className="text-xs text-gray-600 mt-1">Altas</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{securityData.vulnerabilities.medium}</div>
                <div className="text-xs text-gray-600 mt-1">Médias</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{securityData.vulnerabilities.low}</div>
                <div className="text-xs text-gray-600 mt-1">Baixas</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p><strong>Emitido em:</strong> {new Date(securityData.certificate.issuedDate).toLocaleDateString('pt-BR')}</p>
              <p><strong>Válido até:</strong> {new Date(securityData.certificate.expiryDate).toLocaleDateString('pt-BR')}</p>
              <p><strong>Emitido por:</strong> {securityData.certificate.issuedBy}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-2">Critério de Aprovação:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className={securityData.vulnerabilities.critical === 0 ? 'text-green-600' : 'text-red-600'}>
                  {securityData.vulnerabilities.critical === 0 ? '✅' : '❌'} 0 vulnerabilidades críticas
                </li>
                <li className={securityData.vulnerabilities.high === 0 ? 'text-green-600' : 'text-red-600'}>
                  {securityData.vulnerabilities.high === 0 ? '✅' : '❌'} 0 vulnerabilidades altas
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total de Vulnerabilidades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{totalVulnerabilities}</div>
              <p className="text-sm text-gray-500 mt-1">Vulnerabilidades ativas</p>
            </CardContent>
          </Card>

          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Última Validação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold text-gray-800">
                {new Date(securityData.lastValidation).toLocaleDateString('pt-BR')}
              </div>
              <p className="text-sm text-gray-500 mt-1">Certificado atualizado</p>
            </CardContent>
          </Card>

          <Card className="border-cyan shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Tendência (30 dias)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-green-600" />
                <div className="text-lg font-semibold text-green-600">
                  -{Math.abs(securityData.trend.last30Days.net)}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {securityData.trend.last30Days.fixed} corrigidas, {securityData.trend.last30Days.new} novas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* SLA Status */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              SLA de Correção de Vulnerabilidades
            </CardTitle>
            <CardDescription>
              Tempo máximo para correção conforme severidade
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-red-800">Crítico</span>
                  <Badge variant="destructive">24h</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{securityData.sla.critical.current}</p>
                  <p className="text-xs">abertas</p>
                </div>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-orange-800">Alto</span>
                  <Badge variant="warning">7 dias</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{securityData.sla.high.current}</p>
                  <p className="text-xs">abertas</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-yellow-800">Médio</span>
                  <Badge className="bg-yellow-500 text-white">30 dias</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{securityData.sla.medium.current}</p>
                  <p className="text-xs">abertas</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-800">Baixo</span>
                  <Badge variant="secondary">Próxima Release</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{securityData.vulnerabilities.low}</p>
                  <p className="text-xs">identificadas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scan History */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Histórico de Scans
            </CardTitle>
            <CardDescription>
              Últimas execuções de scans de segurança
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="font-semibold text-gray-800 mb-1">SAST</div>
                <div className="text-sm text-gray-600">
                  Último: {new Date(securityData.scans.lastSAST).toLocaleDateString('pt-BR')}
                </div>
                <div className="text-xs text-gray-500 mt-1">SonarCloud</div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="font-semibold text-gray-800 mb-1">SCA</div>
                <div className="text-sm text-gray-600">
                  Último: {new Date(securityData.scans.lastSCA).toLocaleDateString('pt-BR')}
                </div>
                <div className="text-xs text-gray-500 mt-1">Trivy</div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="font-semibold text-gray-800 mb-1">DAST</div>
                <div className="text-sm text-gray-600">
                  Último: {new Date(securityData.scans.lastDAST).toLocaleDateString('pt-BR')}
                </div>
                <div className="text-xs text-gray-500 mt-1">OWASP ZAP</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Próximo scan agendado:</strong> {new Date(securityData.scans.nextScheduled).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Links */}
        <Card className="border-2 border-primary/20 shadow-cyan-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Gestão de Vulnerabilidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Para entender o processo completo de gestão de vulnerabilidades, consulte:
            </p>
            <div className="space-y-2">
              <Link
                href="/documentos/sop-003-vulnerability-management"
                className="flex items-center gap-2 text-primary hover:text-primary/80 hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                SOP-003: Gestão de Vulnerabilidades
              </Link>
              <Link
                href="/documentos/automated-processes"
                className="flex items-center gap-2 text-primary hover:text-primary/80 hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Processos Automatizados de Segurança
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


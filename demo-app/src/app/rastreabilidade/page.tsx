'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GitBranch, FileText, ExternalLink, Link as LinkIcon, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function RastreabilidadePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <GitBranch className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Rastreabilidade
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Matriz completa de rastreabilidade bidirecional: Requisitos → Código → Testes → Riscos. 
            Garantia de rastreabilidade completa em todas as fases do ciclo de vida.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8 border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <LinkIcon className="h-6 w-6 text-primary" />
              Rastreabilidade Bidirecional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              A rastreabilidade é fundamental para conformidade regulatória. Cada requisito deve estar vinculado ao código 
              implementado, aos testes que o validam e aos riscos identificados.
            </p>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Requisito → Código:</span>
                  <span className="text-gray-600">Work Item vinculado em commits e PRs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Requisito → Testes:</span>
                  <span className="text-gray-600">Work Item vinculado a Test Plans e Test Cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Requisito → Riscos:</span>
                  <span className="text-gray-600">Work Item de Risco vinculado via relação "Mitigates"</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Código → Requisito:</span>
                  <span className="text-gray-600">Commits contêm Work Item ID no formato [WORKITEM-ID]</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Traceability Matrix */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Matriz de Rastreabilidade</CardTitle>
            <CardDescription>
              Como os artefatos são vinculados em cada fase do ciclo de vida
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artefato</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sistema</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vinculação</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Como Rastrear</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Requisito</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Azure DevOps</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Work Item (Feature/User Story)</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Work Item ID único</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Código</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Azure Repos (Git)</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Commits com Work Item ID: [ADO-1234]</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Git log ou Azure DevOps → Links</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Testes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Azure DevOps</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Test Plan vinculado ao Work Item</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Work Item → Links → Test Plans</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Riscos</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Azure DevOps</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Work Item tipo "Risk" com relação "Mitigates"</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Work Item → Links → Related Work Items</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vulnerabilidades</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">DefectDojo</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Finding vinculado a Work Item via API</td>
                    <td className="px-6 py-4 text-sm text-gray-600">DefectDojo → JIRA/ADO Integration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Details */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Implementação da Rastreabilidade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">FASE 1: Requisito Criado</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                  <li>Work Item criado no Azure DevOps com ID único (ex: ADO-1234)</li>
                  <li>Campos preenchidos: Título, Descrição, Perfil de Usuário (IEC 62366), Tarefas Principais</li>
                  <li>Riscos identificados e vinculados via relação "Mitigates"</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">FASE 2: Código Desenvolvido</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                  <li>Commits incluem Work Item ID no formato: <code className="bg-gray-100 px-1 rounded">[ADO-1234] Descrição do commit</code></li>
                  <li>Pull Request vincula Work Item através da interface Azure DevOps</li>
                  <li>Branch Policy exige Work Item vinculado para aprovação de PR</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">FASE 3: Testes Executados</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                  <li>Test Plans e Test Cases vinculados ao Work Item no Azure DevOps</li>
                  <li>Resultados de testes (Unit, E2E) vinculados ao Work Item</li>
                  <li>Rastreabilidade através de Test Runs vinculados</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Rastreabilidade Reversa</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                  <li>De um commit: Buscar Work Item ID no commit message</li>
                  <li>De um teste: Ver Test Plan → Work Item vinculado</li>
                  <li>De um risco: Ver Work Item de Risco → Requisito relacionado via "Mitigates"</li>
                </ul>
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
                href="/documentos/process"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">Processo Integrado</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Processo completo detalhando rastreabilidade em todas as fases.
                </p>
                <Badge variant="outline" className="text-xs">Processo</Badge>
              </Link>
              
              <Link 
                href="/documentos/sop-001-sdlc"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">SOP-001: SDLC</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Procedimento de ciclo de vida com detalhes de rastreabilidade.
                </p>
                <Badge variant="outline" className="text-xs">Procedimento</Badge>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

'use client'

import { LifecyclePhase, PhaseStatus } from '@/components/LifecyclePhase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { FullLifecycleDiagram } from '@/components/FullLifecycleDiagram'
import { AssetsArchitectureDiagram } from '@/components/AssetsArchitectureDiagram'

const phases: PhaseStatus[] = [
  {
    id: 'phase-1',
    title: 'FASE 1: Planejamento, Risco e Infraestrutura',
    description: 'Garantir que funcionalidades são seguras, necessárias e usáveis',
    status: 'approved',
    artifacts: [
      'Especificação de Requisitos',
      'Análise de Riscos (ISO 14971)',
      'Especificação de Usabilidade (IEC 62366-1)',
      'Work Items no Azure DevOps',
      'Especificação de Infraestrutura (Terraform)'
    ],
    tools: [
      'Azure Boards',
      'Azure DevOps',
      'SharePoint Online'
    ],
    documents: [
      { title: 'SOP-002: Gestão de Riscos', path: 'docs/sop/SOP-002-Risk-Management.md', type: 'sop' },
      { title: 'ISO 14971: Gestão de Riscos', path: 'docs/regulatory/ISO-14971/README.md', type: 'regulatory' },
      { title: 'IEC 62366-1: Engenharia de Usabilidade', path: 'docs/regulatory/IEC-62366-1/README.md', type: 'regulatory' },
      { title: 'PROCESS.md: Processo Integrado', path: 'docs/PROCESS.md', type: 'process' }
    ],
    outputs: [
      'Especificações aprovadas',
      'Riscos identificados e mitigados',
      'Gate de aprovação liberado'
    ]
  },
  {
    id: 'phase-2',
    title: 'FASE 2: Desenvolvimento e Codificação',
    description: 'Produção controlada do código fonte',
    status: 'completed',
    artifacts: [
      'Código fonte (Git)',
      'Testes unitários (100% pass)',
      'Pull Request aprovado',
      'Commits rastreados',
      'Código Terraform (IaC)'
    ],
    tools: [
      'Azure DevOps Repos',
      'Pre-commit Hooks',
      'Terraform',
      'VS Code'
    ],
    documents: [
      { title: 'SOP-001: SDLC - Ciclo de Vida', path: 'docs/sop/SOP-001-SDLC.md', type: 'sop' },
      { title: 'Infrastructure as Code (Azure)', path: 'infrastructure/azure/README.md', type: 'process' },
      { title: 'PROCESS.md: Processo Integrado', path: 'docs/PROCESS.md', type: 'process' }
    ],
    outputs: [
      'Código desenvolvido e testado',
      'Branch merged em develop',
      'Infraestrutura como código'
    ]
  },
  {
    id: 'phase-3',
    title: 'FASE 3: Verificação Automatizada e Ingestão de Segurança',
    description: 'Validação técnica e centralização de achados',
    status: 'completed',
    artifacts: [
      'Relatório SonarCloud (Quality Gate A)',
      'Relatório Trivy (0 vulnerabilidades)',
      'Findings no DefectDojo',
      'Relatório de cobertura (95%)',
      'Pipeline CI/CD executado'
    ],
    tools: [
      'Azure DevOps Pipelines',
      'SonarCloud (SAST)',
      'Trivy (SCA)',
      'DefectDojo',
      'OWASP ZAP (DAST)'
    ],
    outputs: [
      'Código verificado',
      'Sem vulnerabilidades críticas/altas',
      'Pipeline aprovado'
    ],
    documents: [
      { title: 'SOP-003: Gestão de Vulnerabilidades', path: 'docs/sop/SOP-003-Vulnerability-Management.md', type: 'sop' },
      { title: 'Pipeline Azure DevOps', path: 'pipelines/azure-pipelines.yml', type: 'process' },
      { title: 'ISO 27001 & 27701: Segurança', path: 'docs/regulatory/ISO-27001-27701/README.md', type: 'regulatory' },
      { title: 'Manual DefectDojo', path: 'docs/manuals/defectdojo/README.md', type: 'process' }
    ]
  },
  {
    id: 'phase-4',
    title: 'FASE 4: Validação e Liberação (Release)',
    description: 'Congelamento da versão e geração do DHF',
    status: 'approved',
    artifacts: [
      'Design History File (DHF)',
      'Matriz de Rastreabilidade',
      'Certificado de Segurança',
      'Testes funcionais (100% pass)',
      'Testes de usabilidade somativos',
      'Release v1.0.0'
    ],
    tools: [
      'Azure Test Plans',
      'DefectDojo',
      'SharePoint Online',
      'Git Tags'
    ],
    outputs: [
      'Versão liberada',
      'DHF documentado e assinado',
      'Tag v1.0.0 criada'
    ],
    documents: [
      { title: 'SOP-004: Verificação e Validação', path: 'docs/sop/SOP-004-Verification-Validation.md', type: 'sop' },
      { title: 'SOP-005: Controle de Mudança', path: 'docs/sop/SOP-005-Change-Control.md', type: 'sop' },
      { title: 'DHF Template', path: 'docs/dhf/TEMPLATE.md', type: 'template' },
      { title: 'Manual SharePoint', path: 'docs/manuals/sharepoint/README.md', type: 'process' }
    ]
  },
  {
    id: 'phase-5',
    title: 'FASE 5: Monitoramento e Gestão de Vulnerabilidades',
    description: 'Tratativa contínua de riscos pós-mercado',
    status: 'completed',
    artifacts: [
      'Relatórios de monitoramento (SIEM)',
      'Scans diários (Trivy → DefectDojo)',
      'Reavaliação de riscos',
      'Análise pós-mercado',
      'Dashboards de métricas'
    ],
    tools: [
      'Azure Sentinel (SIEM)',
      'DefectDojo',
      'Trivy',
      'Azure Monitor',
      'Power BI'
    ],
    outputs: [
      'Sistema monitorado',
      'Vulnerabilidades gerenciadas',
      'Riscos reavaliados'
    ],
    documents: [
      { title: 'SOP-003: Gestão de Vulnerabilidades', path: 'docs/sop/SOP-003-Vulnerability-Management.md', type: 'sop' },
      { title: 'ASSETS.md: Arquitetura de Ativos', path: 'demo-app/docs/ASSETS.md', type: 'process' },
      { title: 'Manual Azure DevOps', path: 'docs/manuals/azure-devops/README.md', type: 'process' }
    ]
  }
]

export default function CicloDeVidaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient-primary">
            Ciclo de Vida Completo
          </h1>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Visualização detalhada das 5 fases do ciclo de vida regulatório do nCommand Lite
          </p>
        </div>

        {/* Arquitetura de Ativos */}
        <AssetsArchitectureDiagram />

        {/* Fluxo Completo do Ciclo de Vida */}
        <FullLifecycleDiagram />

        {/* Overview Card - Timeline Visual */}
        <Card className="mb-12 border-cyan shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-gray-800">Visão Geral do Processo</CardTitle>
            <CardDescription className="text-gray-600">
              Demonstração completa das 5 fases do ciclo de vida regulatório
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary hidden md:block"></div>
              
              {/* Phase Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
                {phases.map((phase, idx) => (
                  <div key={phase.id} className="flex flex-col items-center relative">
                    <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-bold text-lg mb-3 transition-smooth ${
                      phase.status === 'completed' || phase.status === 'approved'
                        ? 'bg-primary text-white shadow-cyan-lg scale-110'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {idx + 1}
                      {(phase.status === 'completed' || phase.status === 'approved') && (
                        <CheckCircle2 className="absolute -bottom-1 -right-1 h-5 w-5 text-primary-600 bg-white rounded-full" />
                      )}
                    </div>
                    <p className="text-xs text-center font-medium text-gray-700 leading-tight">
                      {phase.title.split(':')[0]}
                    </p>
                    {idx < phases.length - 1 && (
                      <ChevronRight className="hidden md:block absolute top-7 left-full w-6 h-6 text-primary/40 -translate-x-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phases */}
        <div className="space-y-8">
          {phases.map((phase, idx) => (
            <div key={phase.id} className="relative">
              <LifecyclePhase phase={phase} phaseNumber={idx + 1} />
              {idx < phases.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="flex items-center gap-2 text-primary/60">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60"></div>
                    <ArrowRight className="w-5 h-5" />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <Card className="mt-12 border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              Status do Ciclo Completo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <p className="text-sm font-medium text-gray-600 mb-2">Fases Completas</p>
                <p className="text-4xl font-bold text-gray-800">5/5</p>
                <p className="text-xs text-gray-500 mt-1">100% concluído</p>
              </div>
              <div className="text-center md:text-left border-x border-gray-200 px-8">
                <p className="text-sm font-medium text-gray-600 mb-2">Taxa de Sucesso</p>
                <p className="text-4xl font-bold text-primary">100%</p>
                <p className="text-xs text-gray-500 mt-1">Todos os gates aprovados</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm font-medium text-gray-600 mb-2">Versão Atual</p>
                <p className="text-4xl font-bold text-gray-800">v1.0.0</p>
                <p className="text-xs text-gray-500 mt-1">Release em produção</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


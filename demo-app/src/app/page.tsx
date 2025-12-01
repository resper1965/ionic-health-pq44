'use client'

import { LifecyclePhase, PhaseStatus } from '@/components/LifecyclePhase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle2, ChevronRight, FileText, Shield, AlertTriangle, Lock, Link2, FileCheck, CheckSquare, Settings, Home, BookOpen } from 'lucide-react'
import { FullLifecycleDiagram } from '@/components/FullLifecycleDiagram'
import { AssetsArchitectureDiagram } from '@/components/AssetsArchitectureDiagram'
import Link from 'next/link'

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

const pageIndex = [
  {
    name: 'Ciclo de Vida',
    href: '/',
    icon: Home,
    description: 'Visão geral completa do ciclo de vida com as 5 fases, diagramas interativos e status de cada etapa do processo regulatório.',
    whatToExpect: [
      'Diagrama completo do ciclo de vida em Mermaid',
      'Visão geral das 5 fases do processo',
      'Arquitetura de ativos e ferramentas',
      'Status e progresso de cada fase',
      'Artefatos, ferramentas e documentos de cada fase'
    ]
  },
  {
    name: 'Documentos',
    href: '/documentos',
    icon: FileText,
    description: 'Repositório centralizado de toda a documentação do projeto, incluindo SOPs, normas regulatórias, manuais e templates.',
    whatToExpect: [
      'Lista completa de documentos organizados por categoria',
      'SOPs (Standard Operating Procedures)',
      'Normas regulatórias (ISO, IEC, RDC, FDA)',
      'Manuais de ferramentas (Azure DevOps, DefectDojo, SharePoint, etc.)',
      'Templates e formulários',
      'Visualização de documentos em Markdown',
      'Fluxo de documentos explicado'
    ]
  },
  {
    name: 'Conformidade',
    href: '/conformidade',
    icon: Shield,
    description: 'Visão geral da conformidade regulatória, mostrando como cada norma é implementada no processo e onde encontrar evidências.',
    whatToExpect: [
      'Matriz de conformidade por norma regulatória',
      'Descrição de como cada norma é implementada',
      'Links para documentos e processos relacionados',
      'Evidências de conformidade por norma',
      'ISO 13485, IEC 62304, IEC 62366-1, ISO 14971, ISO/IEC 27001 & 27701, RDC 657/2022, FDA 21 CFR Part 820, CE Mark'
    ]
  },
  {
    name: 'Riscos',
    href: '/riscos',
    icon: AlertTriangle,
    description: 'Gestão de riscos conforme ISO 14971, incluindo cálculo de RPN, tipos de riscos, processo de aceitação e acompanhamento via FMEA.',
    whatToExpect: [
      'Processo completo de gestão de riscos',
      'Cálculo de RPN (Risk Priority Number)',
      'Tipos de riscos: Safety, Security, Usability',
      'Fluxo de aceitação de riscos',
      'Acompanhamento de riscos e FMEA',
      'Links para SOP-002 e documentos relacionados'
    ]
  },
  {
    name: 'Segurança',
    href: '/seguranca',
    icon: Lock,
    description: 'Gestão centralizada de vulnerabilidades usando OWASP DefectDojo, incluindo scans SAST/SCA/DAST, SLAs e processo completo.',
    whatToExpect: [
      'Diagrama Mermaid do fluxo de gestão de vulnerabilidades',
      'Arquitetura: DefectDojo como Fonte da Verdade',
      'Scans automatizados (SAST, SCA, DAST)',
      'Classificação de severidade e SLAs',
      'Processo completo: identificação → deduplicação → triagem → correção → auto-close',
      'Monitoramento contínuo',
      'Links para SOP-003 e processos automatizados'
    ]
  },
  {
    name: 'Rastreabilidade',
    href: '/rastreabilidade',
    icon: Link2,
    description: 'Rastreabilidade completa de requisitos, código, testes e releases, garantindo visibilidade total do ciclo de vida.',
    whatToExpect: [
      'Explicação do conceito de rastreabilidade',
      'Importância para conformidade regulatória',
      'Como a rastreabilidade é alcançada',
      'Ferramentas utilizadas (Azure DevOps, Git, SharePoint)',
      'Matriz de rastreabilidade',
      'Links para documentos relacionados'
    ]
  },
  {
    name: 'Auditoria',
    href: '/auditoria',
    icon: FileCheck,
    description: 'Evidências de auditoria organizadas por norma regulatória, mostrando onde encontrar cada tipo de evidência e como acessá-las.',
    whatToExpect: [
      'Evidências organizadas por norma regulatória',
      'Onde encontrar cada tipo de evidência',
      'Como acessar as evidências',
      'Checklist pré-auditoria',
      'Sistemas de armazenamento (Azure DevOps, DefectDojo, SharePoint, SonarCloud)',
      'Tipos de evidências por fase do ciclo de vida'
    ]
  },
  {
    name: 'QA & RA',
    href: '/qa-ra',
    icon: CheckSquare,
    description: 'Detalhamento do processo de Quality Assurance & Regulatory Affairs, do Gate de Segurança até a aprovação do DAST.',
    whatToExpect: [
      'Diagrama Mermaid detalhado: Gate de Segurança → DAST Aprovado',
      'Pontos de decisão críticos explicados',
      'Fluxo completo com todos os caminhos possíveis',
      'Integração com DefectDojo e Azure DevOps',
      'Testes E2E (Smoke, Sanity, Full E2E)',
      'Processo de DAST (OWASP ZAP)',
      'Links para SOPs relacionados'
    ]
  },
  {
    name: 'Automação',
    href: '/automacao',
    icon: Settings,
    description: 'Lista completa de processos automatizados, incluindo totalizadores dinâmicos, diagramas de fluxo e integrações.',
    whatToExpect: [
      'Totalizadores dinâmicos de processos automatizados',
      'Processos por trigger (automático, agendado, sob demanda)',
      'Diagrama Mermaid do pipeline CI/CD completo',
      'Diagrama de integrações automatizadas',
      'Lista detalhada de cada processo automatizado',
      'Evidências geradas por automação',
      'Links para documentação completa'
    ]
  },
  {
    name: 'Aceitação de Riscos',
    href: '/aceitacao-riscos',
    icon: AlertTriangle,
    description: 'Processo de aceitação de riscos residuais, incluindo fluxo, princípios e documentação necessária.',
    whatToExpect: [
      'Diagrama Mermaid do fluxo de aceitação de riscos',
      'Princípios de aceitação de riscos',
      'Níveis de aprovação',
      'Documentação necessária',
      'Processo de reavaliação',
      'Links para Risk Acceptance Plan e formulários'
    ]
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-block">
            <h1 className="text-5xl font-bold mb-3 text-gradient-primary">
              nCommand Lite
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Ciclo de Vida Completo de Desenvolvimento SaMD
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <Badge variant="gray" className="px-4 py-1.5">IEC 62304 Class B</Badge>
            <Badge variant="outline" className="px-4 py-1.5 border-gray-300">ISO 13485:2016</Badge>
            <Badge variant="outline" className="px-4 py-1.5 border-gray-300">ISO 14971:2019</Badge>
          </div>
        </div>

        {/* O que é o Ciclo de Vida */}
        <Card className="mb-12 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BookOpen className="h-8 w-8 text-primary" />
              O que é o Ciclo de Vida de Software Médico?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              O <strong>ciclo de vida de software médico (SaMD - Software as a Medical Device)</strong> é um processo estruturado 
              que garante que o software desenvolvido seja seguro, eficaz e esteja em conformidade com as normas regulatórias 
              aplicáveis. O nCommand Lite segue rigorosamente o padrão <strong>IEC 62304 Class B</strong>, que estabelece 
              requisitos para o ciclo de vida de software médico.
            </p>
            
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Princípio: Compliance as Code</h3>
              <p className="text-sm leading-relaxed">
                O nCommand Lite implementa <strong>"Compliance as Code"</strong>, onde todas as exigências regulatórias são 
                impostas por <strong>barreiras técnicas automatizadas (Gates)</strong> dentro da esteira de produção, garantindo 
                conformidade sem dependência de processos manuais. Isso significa que a conformidade é verificada automaticamente 
                em cada etapa do desenvolvimento.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">As 5 Fases do Ciclo de Vida</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>FASE 1 - Planejamento, Risco e Infraestrutura:</strong> Garantir que funcionalidades são seguras, necessárias e usáveis antes do desenvolvimento.</li>
                <li><strong>FASE 2 - Desenvolvimento e Codificação:</strong> Produção controlada do código fonte com validações automáticas.</li>
                <li><strong>FASE 3 - Verificação Automatizada e Ingestão de Segurança:</strong> Validação técnica e centralização de achados de segurança.</li>
                <li><strong>FASE 4 - Validação e Liberação (Release):</strong> Congelamento da versão e geração do Design History File (DHF).</li>
                <li><strong>FASE 5 - Monitoramento e Gestão de Vulnerabilidades:</strong> Tratativa contínua de riscos pós-mercado.</li>
              </ol>
            </div>

            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Ferramentas e Fontes da Verdade</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Azure DevOps:</strong> Fonte da Verdade de Execução (requisitos, código, testes)</li>
                <li><strong>OWASP DefectDojo:</strong> Fonte da Verdade de Segurança (vulnerabilidades centralizadas)</li>
                <li><strong>SharePoint Online:</strong> Repositório Legal (DHF e documentos imutáveis)</li>
                <li><strong>Azure Cloud (IaC):</strong> Infraestrutura Imutável gerenciada via Terraform</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Índice de Páginas */}
        <Card className="mb-12 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <FileText className="h-8 w-8 text-primary" />
              Índice de Páginas
            </CardTitle>
            <CardDescription>
              Navegue pelas páginas da aplicação para explorar cada aspecto do ciclo de vida
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageIndex.map((page) => {
                const Icon = page.icon
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-primary transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                          {page.description}
                        </p>
                        <div className="mt-4">
                          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">O que você encontrará:</p>
                          <ul className="space-y-1">
                            {page.whatToExpect.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                            {page.whatToExpect.length > 3 && (
                              <li className="text-xs text-primary font-medium mt-1">
                                + {page.whatToExpect.length - 3} itens adicionais...
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </CardContent>
        </Card>

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

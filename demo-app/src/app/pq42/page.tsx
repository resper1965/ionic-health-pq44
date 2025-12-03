'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RefreshCw, GitBranch, Zap, CheckCircle2, ArrowRight, TrendingUp, Clock, Shield, Activity, AlertTriangle, Workflow, Database, Cloud } from 'lucide-react'
import Link from 'next/link'
import { GMUDSDLCIntegrationDiagram } from '@/components/GMUDSDLCIntegrationDiagram'
import { GMUDAutomationFlowDiagram } from '@/components/GMUDAutomationFlowDiagram'
import { GMUDToolsIntegrationDiagram } from '@/components/GMUDToolsIntegrationDiagram'

const sdlcPhases = [
    {
        phase: 'FASE 1',
        name: 'Planejamento e Infraestrutura',
        applicability: '⭐⭐⭐ Muito Alta',
        color: 'green',
        gmudExamples: [
            {
                id: 'GMUD-2025-001',
                title: 'Setup Azure DevOps para nCommand Lite',
                description: 'Configuração inicial do projeto, Work Item Types customizados, Branch Policies',
                systems: ['Azure DevOps'],
                impact: 'Major',
                cycleTime: '2 semanas'
            },
            {
                id: 'GMUD-2025-005',
                title: 'Implementação DefectDojo v2.x',
                description: 'Deploy DefectDojo, integração com pipelines, importação de vulnerabilidades',
                systems: ['DefectDojo', 'Azure Pipelines'],
                impact: 'Major',
                cycleTime: '1.5 semanas'
            },
            {
                id: 'GMUD-2025-008',
                title: 'Configuração de Ambientes (Dev/Staging/Prod)',
                description: 'Setup de infraestrutura Azure via Terraform',
                systems: ['Azure Infrastructure', 'Terraform'],
                impact: 'Major',
                cycleTime: '2 semanas'
            }
        ],
        integrations: [
            'Azure Boards → Setup de projeto',
            'Terraform → Infraestrutura como código (IaC)',
            'DefectDojo → Sistema de gestão de vulnerabilidades'
        ]
    },
    {
        phase: 'FASE 2',
        name: 'Desenvolvimento e Codificação',
        applicability: '⭐ Baixa',
        color: 'gray',
        gmudExamples: [
            {
                id: 'GMUD-2025-010',
                title: 'Upgrade Terraform 1.5 → 1.7 (Breaking Changes)',
                description: 'Atualização de ferramenta com breaking changes que impactam IaC',
                systems: ['Terraform', 'Azure Pipelines'],
                impact: 'Minor',
                cycleTime: '1 semana'
            }
        ],
        integrations: [
            'Mudanças em ferramentas de desenvolvimento (raro)',
            'Upgrades de IDE corporativo (se organizacional)'
        ]
    },
    {
        phase: 'FASE 3',
        name: 'Verificação e Segurança',
        applicability: '⭐⭐⭐ Muito Alta',
        color: 'blue',
        gmudExamples: [
            {
                id: 'GMUD-2025-015',
                title: 'Upgrade DefectDojo 2.0 → 2.5',
                description: 'Atualização do sistema de gestão de vulnerabilidades',
                systems: ['DefectDojo'],
                impact: 'Major',
                cycleTime: '1 semana'
            },
            {
                id: 'GMUD-2025-018',
                title: 'Nova Política de Quality Gate (SonarCloud)',
                description: 'Mudança em critérios de aprovação de código',
                systems: ['SonarCloud', 'Azure Pipelines'],
                impact: 'Major',
                cycleTime: '1.5 semanas'
            },
            {
                id: 'GMUD-2025-020',
                title: 'Implementação OWASP ZAP para DAST',
                description: 'Integração de nova ferramenta de segurança dinâmica',
                systems: ['OWASP ZAP', 'Azure Pipelines', 'DefectDojo'],
                impact: 'Major',
                cycleTime: '2 semanas'
            }
        ],
        integrations: [
            'DefectDojo → Gestão centralizada de vulnerabilidades',
            'SonarCloud → SAST (análise estática)',
            'OWASP ZAP → DAST (análise dinâmica)',
            'Azure Pipelines → Integração de testes de segurança'
        ]
    },
    {
        phase: 'FASE 4',
        name: 'Validação e Liberação',
        applicability: '⭐⭐ Média',
        color: 'yellow',
        gmudExamples: [
            {
                id: 'GMUD-2025-022',
                title: 'Novos Critérios de Validação Organizacional',
                description: 'Mudança em processo de validação que afeta todos os projetos',
                systems: ['Azure Test Plans'],
                impact: 'Major',
                cycleTime: '1 semana'
            }
        ],
        integrations: [
            'Azure Test Plans → Validação de testes',
            'Mudanças em processo de validação (se organizacional)'
        ]
    },
    {
        phase: 'FASE 5',
        name: 'Monitoramento Pós-Mercado',
        applicability: '⭐⭐⭐⭐ Altíssima',
        color: 'purple',
        gmudExamples: [
            {
                id: 'GMUD-2025-025',
                title: 'Implementação Azure Sentinel (SIEM)',
                description: 'Deploy de sistema de monitoramento de segurança',
                systems: ['Azure Sentinel', 'Azure Monitor'],
                impact: 'Major',
                cycleTime: '3 semanas'
            },
            {
                id: 'GMUD-2025-030',
                title: 'Dashboards Power BI para Monitoramento',
                description: 'Criação de dashboards de monitoramento pós-mercado',
                systems: ['Power BI', 'Application Insights'],
                impact: 'Major',
                cycleTime: '2 semanas'
            },
            {
                id: 'GMUD-2025-035',
                title: 'Integração Application Insights',
                description: 'Monitoramento de telemetria e performance',
                systems: ['Application Insights', 'Azure Monitor'],
                impact: 'Major',
                cycleTime: '1.5 semanas'
            }
        ],
        integrations: [
            'Azure Sentinel → SIEM (Security Information and Event Management)',
            'Power BI → Dashboards e analytics',
            'Application Insights → Telemetria e monitoramento',
            'Azure Monitor → Alertas e logs'
        ]
    }
]

const tools = [
    {
        name: 'Azure Boards',
        icon: Database,
        role: 'Fonte da Verdade de Execução',
        description: 'Work Items GMUD, tracking, aprovações, sub-tasks',
        integration: 'Work Item Type "GMUD Request" com campos customizados',
        automation: 'Workflow automatizado, notificações, SLA tracking'
    },
    {
        name: 'SharePoint',
        icon: Cloud,
        role: 'Repositório Legal (DHF)',
        description: 'Armazenamento de R042.001/002 (PDFs assinados)',
        integration: 'SharePoint API para upload automático',
        automation: 'Geração automática de PDFs a partir do Work Item'
    },
    {
        name: 'Terraform',
        icon: GitBranch,
        role: 'Infraestrutura como Código (IaC)',
        description: 'Mudanças de infraestrutura versionadas e rastreáveis',
        integration: 'Azure Repos → Terraform → Azure Pipelines',
        automation: 'Apply automático após aprovação de GMUD'
    },
    {
        name: 'DefectDojo',
        icon: Shield,
        role: 'Gestão de Vulnerabilidades',
        description: 'Rastreamento de vulnerabilidades e evidências de segurança',
        integration: 'DefectDojo API integrada com Work Items',
        automation: 'Importação automática de vulnerabilidades, validação'
    },
    {
        name: 'Power Automate',
        icon: Workflow,
        role: 'Orquestração de Workflows',
        description: 'Notificações, aprovações, uploads automáticos',
        integration: 'Workflows conectando Azure Boards ↔ SharePoint ↔ Email',
        automation: 'Notificações automáticas, SLA alerts, arquivamento'
    },
    {
        name: 'Power BI',
        icon: TrendingUp,
        role: 'Dashboards e Analytics',
        description: 'Métricas em tempo real, KPIs, tendências',
        integration: 'Conecta com Azure Boards para dados de GMUDs',
        automation: 'Dashboard em tempo real, alertas de SLA, relatórios'
    }
]

const metrics = [
    {
        icon: Clock,
        label: 'Redução de Tempo',
        value: '50-60%',
        description: '3-5 semanas → 1-2 semanas',
        color: 'blue'
    },
    {
        icon: TrendingUp,
        label: 'Automação',
        value: '20% → 70%',
        description: '+50 pontos percentuais',
        color: 'green'
    },
    {
        icon: Activity,
        label: 'Rastreabilidade',
        value: '100%',
        description: 'De fragmentada para total',
        color: 'purple'
    },
    {
        icon: Shield,
        label: 'Conformidade',
        value: 'Garantida',
        description: 'Compliance as Code',
        color: 'orange'
    }
]

export default function PQ42Page() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-orange-300 bg-orange-50">
                        <RefreshCw className="h-4 w-4 inline mr-2" />
                        PQ.042 - Change Control (GMUD)
                    </Badge>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        GMUD Integrado ao SDLC
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        Como mudanças em <strong>infraestrutura, sistemas auxiliares e processos</strong> são controladas
                        e integradas com o ciclo de vida do nCommand Lite
                    </p>
                </div>

                {/* Overview Card */}
                <Card className="mb-12 border-2 border-orange-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <RefreshCw className="h-7 w-7 text-orange-600" />
                            PQ.042: Gestão de Mudanças (GMUD)
                        </CardTitle>
                        <CardDescription className="text-base">
                            Controle de mudanças que suportam o desenvolvimento do nCommand Lite
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            O <strong>PQ.042</strong> estabelece o controle de mudanças (GMUD) para <strong>sistemas auxiliares,
                            infraestrutura, equipamentos e processos</strong> que podem influenciar a qualidade dos produtos.
                            Este procedimento é essencial para garantir que mudanças que <strong>suportam o ciclo de desenvolvimento</strong> sejam
                            controladas, rastreadas e validadas.
                        </p>

                        <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                            <p className="text-sm text-red-900 font-semibold mb-2">
                                ⚠️ Diferença Crítica: PQ.042 vs PQ.039
                            </p>
                            <div className="text-sm text-red-900 space-y-1">
                                <p><strong>PQ.039 (Project Control):</strong> Controla o <strong>PRODUTO</strong> (nCommand Lite).
                                   Mudanças no código, features, bugs → use PQ.039 ou SOP-005.</p>
                                <p><strong>PQ.042 (Change Control):</strong> Controla <strong>INFRAESTRUTURA, SISTEMAS AUXILIARES e PROCESSOS</strong>.
                                   Mudanças em Azure DevOps, DefectDojo, processos organizacionais → use PQ.042.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-sm text-green-900 font-semibold mb-2">✅ Quando Usar PQ.042 (GMUD)</p>
                                <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                                    <li>Mudanças em infraestrutura Azure</li>
                                    <li>Upgrade de Azure DevOps, DefectDojo</li>
                                    <li>Implementação de novos sistemas (Sentinel, Power BI)</li>
                                    <li>Mudanças em processos organizacionais</li>
                                    <li>Mudanças em ferramentas de desenvolvimento</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-sm text-blue-900 font-semibold mb-2">🎯 Objetivo da Automação</p>
                                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                                    <li>Reduzir tempo de ciclo em 50-60%</li>
                                    <li>Aumentar automação de 20% para 70%</li>
                                    <li>Rastreabilidade total e em tempo real</li>
                                    <li>Dashboards e métricas automatizadas</li>
                                    <li>Integração completa com SDLC e ferramentas</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {metrics.map((metric) => {
                        const Icon = metric.icon
                        return (
                            <Card key={metric.label} className={`border-2 border-${metric.color}-200 bg-${metric.color}-50/50 hover:shadow-lg transition-shadow`}>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Icon className={`h-8 w-8 text-${metric.color}-600`} />
                                        <div className={`text-2xl font-bold text-${metric.color}-700`}>{metric.value}</div>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900 mb-1">{metric.label}</div>
                                    <div className="text-xs text-gray-600">{metric.description}</div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Diagrams */}
                <GMUDSDLCIntegrationDiagram />
                <GMUDAutomationFlowDiagram />
                <GMUDToolsIntegrationDiagram />

                {/* SDLC Phases with GMUD Examples */}
                <Card className="mb-12 border-2 border-primary/30 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">
                            GMUDs por Fase do SDLC: Exemplos Práticos
                        </CardTitle>
                        <CardDescription className="text-base">
                            Como cada fase do ciclo de vida interage com GMUDs, com exemplos concretos e integrações
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        {sdlcPhases.map((phase) => {
                            const colorClasses = {
                                green: 'border-green-300 bg-green-50',
                                gray: 'border-gray-300 bg-gray-50',
                                blue: 'border-blue-300 bg-blue-50',
                                yellow: 'border-yellow-300 bg-yellow-50',
                                purple: 'border-purple-300 bg-purple-50'
                            }
                            const badgeColors = {
                                green: 'bg-green-100 text-green-800 border-green-300',
                                gray: 'bg-gray-100 text-gray-800 border-gray-300',
                                blue: 'bg-blue-100 text-blue-800 border-blue-300',
                                yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
                                purple: 'bg-purple-100 text-purple-800 border-purple-300'
                            }

                            return (
                                <div key={phase.phase} className={`border-2 rounded-lg p-6 ${colorClasses[phase.color as keyof typeof colorClasses]}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <Badge className="text-lg px-3 py-1">{phase.phase}</Badge>
                                            <h3 className="text-xl font-bold text-gray-900">{phase.name}</h3>
                                        </div>
                                        <Badge className={`${badgeColors[phase.color as keyof typeof badgeColors]} border`}>
                                            {phase.applicability}
                                        </Badge>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                                            <div className="font-semibold text-gray-900 mb-2">🔗 Integrações com Ferramentas:</div>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                {phase.integrations.map((integration, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <ArrowRight className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
                                                        <span>{integration}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="font-semibold text-gray-900">📋 Exemplos de GMUDs:</div>
                                            {phase.gmudExamples.map((gmud) => (
                                                <div key={gmud.id} className="bg-white p-4 rounded-lg border-2 border-gray-300 hover:border-primary transition-colors">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <code className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">
                                                                {gmud.id}
                                                            </code>
                                                            <Badge variant={gmud.impact === 'Major' ? 'destructive' : 'secondary'} className="text-xs">
                                                                {gmud.impact}
                                                            </Badge>
                                                        </div>
                                                        <span className="text-xs text-gray-600">⏱️ {gmud.cycleTime}</span>
                                                    </div>
                                                    <div className="font-semibold text-gray-900 mb-1">{gmud.title}</div>
                                                    <p className="text-sm text-gray-700 mb-2">{gmud.description}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {gmud.systems.map((system, idx) => (
                                                            <span key={idx} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded border border-blue-200">
                                                                {system}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>

                {/* Tools Integration */}
                <Card className="mb-12 border-2 border-purple-200 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">
                            Ferramentas Integradas: Ecossistema GMUD
                        </CardTitle>
                        <CardDescription className="text-base">
                            Como cada ferramenta se integra com o processo GMUD automatizado
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tools.map((tool) => {
                                const Icon = tool.icon
                                return (
                                    <div key={tool.name} className="p-6 border-2 border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Icon className="h-8 w-8 text-primary" />
                                            <div>
                                                <div className="font-bold text-lg text-gray-900">{tool.name}</div>
                                                <div className="text-sm text-gray-600">{tool.role}</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div>
                                                <span className="font-semibold text-gray-700">Descrição: </span>
                                                <span className="text-gray-600">{tool.description}</span>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-700">Integração: </span>
                                                <span className="text-gray-600">{tool.integration}</span>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-700">Automação: </span>
                                                <span className="text-gray-600">{tool.automation}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Benefits */}
                <Card className="mb-12 border-2 border-green-200 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                            Benefícios da Integração GMUD ↔ SDLC
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">🚀 Eficiência Operacional</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span><strong>50-60% redução</strong> no tempo de ciclo GMUD (3-5 semanas → 1-2 semanas)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span><strong>+50 pontos percentuais</strong> de automação (20-30% → 70-75%)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span><strong>Visibilidade em tempo real</strong> de todos os GMUDs via dashboard</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span><strong>Aprovações 75% mais rápidas</strong> com workflow paralelo</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">✅ Conformidade e Rastreabilidade</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span><strong>Rastreabilidade 100%</strong> automática: GMUD → Ferramentas → SDLC</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span><strong>Compliance garantido</strong> via gates técnicos e checklists obrigatórios</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span><strong>Evidências estruturadas</strong> e organizadas por tipo no Work Item</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span><strong>Auditoria simplificada</strong> com histórico completo centralizado</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-2 border-primary shadow-xl bg-gradient-to-br from-primary/5 via-white to-primary/5">
                    <CardContent className="text-center py-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Explore Mais sobre o Ecossistema nCommand Lite
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Veja como o PQ.042 se integra com o ciclo de vida completo e compare com o PQ.039
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/ciclo-de-vida"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold shadow-lg"
                            >
                                <Workflow className="h-5 w-5" />
                                Ver Ciclo de Vida Completo
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/pq39"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                            >
                                Comparar com PQ.039
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/ferramentas"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                            >
                                Ver Todas as Ferramentas
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

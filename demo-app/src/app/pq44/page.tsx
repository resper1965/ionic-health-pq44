'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Zap, CheckCircle2, ArrowRight, TrendingUp, Clock, Shield, Activity } from 'lucide-react'
import Link from 'next/link'

const pq044Stages = [
    {
        stage: '6.2',
        name: 'Demand Entry',
        traditional: {
            process: 'Product Committee meetings with manual minutes and signatures',
            tools: 'Email, Word documents, Manual approval tracking',
            time: '~2-4 weeks for committee approval',
            records: 'Meeting minutes, Email threads'
        },
        automated: {
            process: 'Azure Boards with automated workflow and digital approvals',
            tools: 'Azure DevOps, Automated notifications, Digital signatures',
            time: '~2-5 days with automated routing',
            records: 'Work Items with full audit trail',
            improvement: '75% reduction in approval time'
        }
    },
    {
        stage: '6.3',
        name: 'Risk Management',
        traditional: {
            process: 'Manual risk analysis in spreadsheets, separate risk register',
            tools: 'Excel, Manual RPN calculation, PDF reports',
            time: '~1-2 weeks per analysis',
            records: 'Risk Management File (manual PDFs)'
        },
        automated: {
            process: 'Risk Work Items linked to Features, automated RPN calculation',
            tools: 'Azure DevOps Risk Items, DefectDojo integration, Automated dashboards',
            time: '~1-3 days with automated calculations',
            records: 'Digital Risk Items with bidirectional traceability',
            improvement: '60% faster risk analysis, 100% traceability'
        }
    },
    {
        stage: '6.4',
        name: 'Software Specification',
        traditional: {
            process: 'Manual SRS and SDS documents, email review cycles',
            tools: 'Word/Confluence, Manual versioning, Email reviews',
            time: '~3-6 weeks for spec + reviews',
            records: 'R044.001 (SRS), R044.002 (SDS) in Docnix'
        },
        automated: {
            process: 'Requirements as Azure DevOps User Stories with acceptance criteria',
            tools: 'Azure Boards, Inline comments, Digital approvals, Version control',
            time: '~1-2 weeks with collaborative editing',
            records: 'User Stories with complete history and linked prototypes',
            improvement: '50% faster specification process'
        }
    },
    {
        stage: '6.5',
        name: 'Planning',
        traditional: {
            process: 'Manual Software Development Plan (SDP) in Word/PDF',
            tools: 'Word, Excel for schedules, Email distribution',
            time: '~2-3 weeks to create and approve',
            records: 'R044.003 (SDP) in Docnix'
        },
        automated: {
            process: 'Integrated planning in Azure DevOps with automated tracking',
            tools: 'Azure Boards, Gantt charts, Automated burndown, Sprint planning',
            time: '~3-5 days with template-based planning',
            records: 'Digital Sprint Plans with real-time dashboards',
            improvement: '65% reduction in planning overhead'
        }
    },
    {
        stage: '6.6',
        name: 'Software Development',
        traditional: {
            process: 'Manual test planning, separate SOUP tracking, manual code reviews',
            tools: 'Excel for SOUP, Manual code review checklists, Word for Release Notes',
            time: 'Variable, high overhead for manual checks',
            records: 'R044.004-009, R044.015 (7 separate documents)'
        },
        automated: {
            process: 'Pre-commit hooks, automated unit/integration tests, SAST via SonarCloud',
            tools: 'Azure Repos, Jest/NUnit, SonarCloud, Trivy SCA, Automated SOUP detection',
            time: 'Continuous integration with instant feedback',
            records: 'Automated test reports, DefectDojo security scans, NuGet/NPM for SOUP',
            improvement: '90% reduction in manual verification, immediate quality gates'
        }
    },
    {
        stage: '6.7',
        name: 'Software Verification',
        traditional: {
            process: 'Manual system testing, security tests scheduled separately',
            tools: 'Manual test execution, Excel test sheets, Separate DAST scheduling',
            time: '~2-4 weeks for complete verification',
            records: 'R044.010 (STR), R044.011 (SCR) - manual reports in Docnix'
        },
        automated: {
            process: 'Automated E2E tests (Playwright), DAST triggered on deploy, DefectDojo centralization',
            tools: 'Playwright/Selenium, OWASP ZAP, DefectDojo for deduplication and auto-close',
            time: '~2-3 days with automated execution',
            records: 'Automated test reports in Azure Test Plans, Security results in DefectDojo',
            improvement: '80% faster verification, zero manual deduplication'
        }
    },
    {
        stage: '6.8',
        name: 'Software Validation',
        traditional: {
            process: 'Manual traceability matrix in Excel linking SRS → Code → Tests → Risks',
            tools: 'Excel with manual cell linking, manual updates',
            time: '~1-2 weeks to compile and verify',
            records: 'R044.012 (TMT) - Excel file in Docnix'
        },
        automated: {
            process: 'Automated traceability via Azure DevOps links and queries',
            tools: 'Azure Boards link types, automated query dashboards, visual traceability trees',
            time: 'Real-time, always up-to-date',
            records: 'Digital traceability matrix auto-generated from Work Item links',
            improvement: '95% reduction in manual matrix maintenance'
        }
    },
    {
        stage: '6.9',
        name: 'Software Release',
        traditional: {
            process: 'Manual SAR form, manual SHR updates, email notifications',
            tools: 'PDF forms with wet/digital signatures, manual SharePoint uploads',
            time: '~3-5 days for approval and release',
            records: 'R044.013 (SAR), R044.014 (SHR) in Docnix'
        },
        automated: {
            process: 'Digital approval gates in Azure DevOps, automated SHR generation',
            tools: 'Azure Pipelines release gates, automated Docnix upload, email automation',
            time: '~4-8 hours from approval to production',
            records: 'Digital SAR with audit trail, auto-generated SHR pushed to Docnix',
            improvement: '85% faster release process, zero manual file handling'
        }
    }
]

const metrics = [
    {
        icon: Clock,
        label: 'Time Savings',
        value: '~70%',
        description: 'Average reduction in process time',
        color: 'blue'
    },
    {
        icon: Shield,
        label: 'Compliance',
        value: '100%',
        description: 'Automated gates ensure compliance',
        color: 'green'
    },
    {
        icon: Activity,
        label: 'Traceability',
        value: 'Real-time',
        description: 'Live traceability vs manual updates',
        color: 'purple'
    },
    {
        icon: TrendingUp,
        label: 'Quality Gates',
        value: '12+',
        description: 'Automated quality checkpoints',
        color: 'orange'
    }
]

export default function PQ44Page() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-blue-300">
                        PQ.044 - Software Product Control
                    </Badge>
                    <h1 className="text-5xl font-bold text-gradient-primary">
                        Evolução do Processo Regulatório
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        De processos manuais e documentais para <strong>Compliance as Code</strong>:
                        Como o nCommand Lite automatizou o PQ.044
                    </p>
                </div>

                {/* Overview */}
                <Card className="mb-12 border-2 border-blue-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <FileText className="h-7 w-7 text-blue-600" />
                            Sobre o PQ.044
                        </CardTitle>
                        <CardDescription className="text-base">
                            Procedimento formal de controle de produto de software da IONIC Health
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            O <strong>PQ.044</strong> é o procedimento que estabelece o controle de produtos de software desde o início de seu desenvolvimento,
                            manutenção e evolução. Baseado na <strong>IEC 62304</strong> e na <strong>RDC 665</strong> da ANVISA, garante que todas as etapas
                            necessárias sejam documentadas e evidenciadas.
                        </p>
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-900">
                                <strong>Desafio:</strong> O processo tradicional envolvia múltiplos documentos manuais (15 registros obrigatórios em Docnix/SharePoint),
                                revisões via email, planilhas Excel para rastreabilidade, e aprovações que podiam levar semanas.
                            </p>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm text-green-900 flex items-start gap-2">
                                <Zap className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span><strong>Solução:</strong> O nCommand Lite implementa "Compliance as Code" através de gates automatizados,
                                    ferramentas integradas (Azure DevOps, DefectDojo, Terraform) e geração automática de evidências.</span>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {metrics.map((metric) => {
                        const Icon = metric.icon
                        return (
                            <Card key={metric.label} className={`border-2 border-${metric.color}-200 bg-${metric.color}-50/50`}>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Icon className={`h-8 w-8 text-${metric.color}-600`} />
                                        <div className={`text-3xl font-bold text-${metric.color}-700`}>{metric.value}</div>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900 mb-1">{metric.label}</div>
                                    <div className="text-xs text-gray-600">{metric.description}</div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Detailed Improvements Banner */}
                <Card className="mb-12 border-4 border-gradient-to-r from-green-500 to-blue-500 shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
                    <CardHeader className="relative z-10 text-center pb-8">
                        <div className="inline-block px-6 py-2 mb-4 bg-green-500/20 border border-green-400/50 rounded-full">
                            <span className="text-green-300 font-semibold text-sm">📊 IMPACTO QUANTIFICADO</span>
                        </div>
                        <CardTitle className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                            Ganhos por Etapa do PQ.044
                        </CardTitle>
                        <CardDescription className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Redução de tempo e automação implementada em cada fase do processo regulatório
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        {/* Main Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gradient-to-br from-blue-600/30 to-blue-700/20 border border-blue-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
                                <div className="text-5xl font-bold text-blue-300 mb-2">~70%</div>
                                <div className="text-sm text-blue-200 font-medium">Tempo Total Economizado</div>
                                <div className="text-xs text-gray-400 mt-2">Média geral do ciclo</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-600/30 to-green-700/20 border border-green-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
                                <div className="text-5xl font-bold text-green-300 mb-2">100%</div>
                                <div className="text-sm text-green-200 font-medium">Compliance Automatizada</div>
                                <div className="text-xs text-gray-400 mt-2">Gates técnicos obrigatórios</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-600/30 to-purple-700/20 border border-purple-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
                                <div className="text-5xl font-bold text-purple-300 mb-2">15</div>
                                <div className="text-sm text-purple-200 font-medium">Registros Automatizados</div>
                                <div className="text-xs text-gray-400 mt-2">Upload automático p/ Docnix</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-600/30 to-orange-700/20 border border-orange-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
                                <div className="text-5xl font-bold text-orange-300 mb-2">12+</div>
                                <div className="text-sm text-orange-200 font-medium">Quality Gates</div>
                                <div className="text-xs text-gray-400 mt-2">Checkpoints automatizados</div>
                            </div>
                        </div>

                        {/* Stage-by-Stage Improvements */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-center mb-8 text-white">Melhorias Detalhadas por Etapa</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Stage 6.2 */}
                                <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/20 rounded-xl p-5">
                                    <div className="text-xs font-semibold text-blue-400 mb-2">ETAPA 6.2</div>
                                    <div className="text-lg font-bold text-white mb-3">Demand Entry</div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-bold text-blue-300">75%</div>
                                        <TrendingUp className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div className="text-sm text-gray-300">redução em aprovações</div>
                                    <div className="text-xs text-gray-500 mt-2">2-4 sem → 2-5 dias</div>
                                </div>

                                {/* Stage 6.3 */}
                                <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-400/20 rounded-xl p-5">
                                    <div className="text-xs font-semibold text-green-400 mb-2">ETAPA 6.3</div>
                                    <div className="text-lg font-bold text-white mb-3">Risk Management</div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-bold text-green-300">60%</div>
                                        <TrendingUp className="h-5 w-5 text-green-400" />
                                    </div>
                                    <div className="text-sm text-gray-300">análise mais rápida</div>
                                    <div className="text-xs text-gray-500 mt-2">1-2 sem → 1-3 dias</div>
                                </div>

                                {/* Stage 6.4 */}
                                <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/20 rounded-xl p-5">
                                    <div className="text-xs font-semibold text-purple-400 mb-2">ETAPA 6.4</div>
                                    <div className="text-lg font-bold text-white mb-3">Specification</div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-bold text-purple-300">50%</div>
                                        <TrendingUp className="h-5 w-5 text-purple-400" />
                                    </div>
                                    <div className="text-sm text-gray-300">especificação acelerada</div>
                                    <div className="text-xs text-gray-500 mt-2">3-6 sem → 1-2 sem</div>
                                </div>

                                {/* Stage 6.5 */}
                                <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20 rounded-xl p-5">
                                    <div className="text-xs font-semibold text-orange-400 mb-2">ETAPA 6.5</div>
                                    <div className="text-lg font-bold text-white mb-3">Planning</div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-bold text-orange-300">65%</div>
                                        <TrendingUp className="h-5 w-5 text-orange-400" />
                                    </div>
                                    <div className="text-sm text-gray-300">redução em overhead</div>
                                    <div className="text-xs text-gray-500 mt-2">2-3 sem → 3-5 dias</div>
                                </div>

                                {/* Stage 6.6 */}
                                <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-400/20 rounded-xl p-5">
                                    <div className="text-xs font-semibold text-red-400 mb-2">ETAPA 6.6</div>
                                    <div className="text-lg font-bold text-white mb-3">Development</div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-bold text-red-300">90%</div>
                                        <TrendingUp className="h-5 w-5 text-red-400" />
                                    </div>
                                    <div className="text-sm text-gray-300">menos verificação manual</div>
                                    <div className="text-xs text-gray-500 mt-2">Feedback instantâneo</div>
                                </div>

                                {/* Stage 6.7 */}
                                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/20 rounded-xl p-5">
                                    <div className="text-xs font-semibold text-cyan-400 mb-2">ETAPA 6.7</div>
                                    <div className="text-lg font-bold text-white mb-3">Verification</div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-bold text-cyan-300">80%</div>
                                        <TrendingUp className="h-5 w-5 text-cyan-400" />
                                    </div>
                                    <div className="text-sm text-gray-300">verificação mais rápida</div>
                                    <div className="text-xs text-gray-500 mt-2">2-4 sem → 2-3 dias</div>
                                </div>

                                {/* Stage 6.8 */}
                                <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-400/20 rounded-xl p-5">
                                    <div className="text-xs font-semibold text-pink-400 mb-2">ETAPA 6.8</div>
                                    <div className="text-lg font-bold text-white mb-3">Validation</div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-bold text-pink-300">95%</div>
                                        <TrendingUp className="h-5 w-5 text-pink-400" />
                                    </div>
                                    <div className="text-sm text-gray-300">manutenção de matriz</div>
                                    <div className="text-xs text-gray-500 mt-2">1-2 sem → Tempo real</div>
                                </div>

                                {/* Stage 6.9 */}
                                <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-400/20 rounded-xl p-5">
                                    <div className="text-xs font-semibold text-yellow-400 mb-2">ETAPA 6.9</div>
                                    <div className="text-lg font-bold text-white mb-3">Release</div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-bold text-yellow-300">85%</div>
                                        <TrendingUp className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <div className="text-sm text-gray-300">processo acelerado</div>
                                    <div className="text-xs text-gray-500 mt-2">3-5 dias → 4-8 horas</div>
                                </div>
                            </div>

                            {/* Summary Bar */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <div className="flex flex-wrap justify-center gap-6 text-center">
                                    <div>
                                        <div className="text-3xl font-bold text-green-300 mb-1">6 semanas</div>
                                        <div className="text-sm text-gray-400">economizadas por release</div>
                                    </div>
                                    <div className="hidden md:block w-px bg-white/20"></div>
                                    <div>
                                        <div className="text-3xl font-bold text-blue-300 mb-1">Zero</div>
                                        <div className="text-sm text-gray-400">erros manuais</div>
                                    </div>
                                    <div className="hidden md:block w-px bg-white/20"></div>
                                    <div>
                                        <div className="text-3xl font-bold text-purple-300 mb-1">100%</div>
                                        <div className="text-sm text-gray-400">rastreabilidade</div>
                                    </div>
                                    <div className="hidden md:block w-px bg-white/20"></div>
                                    <div>
                                        <div className="text-3xl font-bold text-orange-300 mb-1">Instantâneo</div>
                                        <div className="text-sm text-gray-400">feedback de qualidade</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Comparison Tables */}
                <div className="space-y-8 mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Comparação Detalhada por Etapa</h2>
                        <p className="text-gray-600">Processo tradicional vs automação com Compliance as Code</p>
                    </div>

                    {pq044Stages.map((item) => (
                        <Card key={item.stage} className="border-2 border-gray-200 shadow-md overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-lg">
                                        {item.stage}
                                    </div>
                                    <div className="flex-1">{item.name}</div>
                                    {item.automated.improvement && (
                                        <Badge variant="default" className="bg-green-600 text-white">
                                            <TrendingUp className="h-3 w-3 mr-1" />
                                            {item.automated.improvement}
                                        </Badge>
                                    )}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    {/* Traditional Process */}
                                    <div className="p-6 border-r-2 border-gray-200 bg-red-50/30">
                                        <h3 className="font-semibold text-lg mb-4 text-red-800 flex items-center gap-2">
                                            <FileText className="h-5 w-5" />
                                            Processo Tradicional (PQ.044)
                                        </h3>
                                        <div className="space-y-3 text-sm">
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">Processo:</div>
                                                <div className="text-gray-600">{item.traditional.process}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">Ferramentas:</div>
                                                <div className="text-gray-600">{item.traditional.tools}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">Tempo Médio:</div>
                                                <div className="text-gray-600">{item.traditional.time}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">Registros:</div>
                                                <div className="text-gray-600">{item.traditional.records}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Automated Process */}
                                    <div className="p-6 bg-green-50/30">
                                        <h3 className="font-semibold text-lg mb-4 text-green-800 flex items-center gap-2">
                                            <Zap className="h-5 w-5" />
                                            Processo Automatizado (nCommand Lite)
                                        </h3>
                                        <div className="space-y-3 text-sm">
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">Processo:</div>
                                                <div className="text-gray-600">{item.automated.process}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">Ferramentas:</div>
                                                <div className="text-gray-600">{item.automated.tools}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">Tempo Médio:</div>
                                                <div className="text-gray-600 font-semibold">{item.automated.time}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700 mb-1">Registros:</div>
                                                <div className="text-gray-600">{item.automated.records}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Integration with Docnix */}
                <Card className="mb-12 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <CheckCircle2 className="h-7 w-7 text-purple-600" />
                            Integração com Docnix/SharePoint
                        </CardTitle>
                        <CardDescription className="text-base">
                            Persistência automatizada de todos os registros obrigatórios
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            O PQ.044 exige que <strong>15 registros obrigatórios</strong> sejam armazenados no Docnix/SharePoint com retenção de 15 anos
                            após o último lançamento do produto. O nCommand Lite automatiza esse processo através de:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Geração Automática:</strong> Scripts que geram documentos (TMT, SAR, SRN) diretamente das Work Items do Azure DevOps</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Upload Automatizado:</strong> Pipeline que faz upload dos registros para Docnix via API após aprovação do QA Leader</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Versionamento Imutável:</strong> PDFs assinados digitalmente com timestamp e hash para garantir integridade</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Auditoria Completa:</strong> Cada upload é registrado com autor, data/hora e versão do software linkada</span>
                            </li>
                        </ul>
                        <div className="p-4 bg-purple-100 border border-purple-300 rounded-lg mt-4">
                            <p className="text-sm text-purple-900 font-medium">
                                📋 Resultado: Zero intervenção manual no processo de arquivamento regulatório, mantendo 100% de compliance com PQ.044 seção 7.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Key Benefits */}
                <Card className="mb-12 border-2 border-primary/20 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl">Benefícios Principais</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Eficiência Operacional</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                        <span>Redução de ~70% no tempo total do ciclo</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                        <span>Eliminação de retrabalho por erros manuais</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                        <span>Feedback instantâneo via gates automatizados</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Conformidade Garantida</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Gates técnicos impedem desvios do processo</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Rastreabilidade 100% automatizada e em tempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Evidências geradas automaticamente para auditoria</span>
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
                            Explore o Processo Completo
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Veja como cada fase do ciclo de vida é implementada com gates automatizados e compliance por design
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/sobre"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold shadow-lg"
                            >
                                Ver Detalhamento das Fases
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/ciclo-de-vida"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                            >
                                Ver Fluxos do Ciclo de Vida
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

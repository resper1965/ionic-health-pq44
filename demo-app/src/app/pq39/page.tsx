'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Zap, CheckCircle2, ArrowRight, TrendingUp, Clock, Shield, Activity } from 'lucide-react'
import Link from 'next/link'

const pq039Stages = [
    {
        stage: 'NPJ',
        name: 'Project Request',
        form: 'R039.001',
        traditional: {
            process: 'Manual project request form submitted via email, reviewed in meetings',
            tools: 'Word documents, Email, Manual approval tracking, Meeting minutes',
            time: '~2-3 weeks for approval',
            records: 'R039.001 form in Docnix/SharePoint'
        },
        automated: {
            process: 'Epic/Feature created in Azure Boards with automated workflow',
            tools: 'Azure DevOps, Automated notifications, Digital approvals',
            time: '~1-3 days with automated routing',
            records: 'Work Items with full audit trail + R039.001 PDF reference',
            improvement: '75% reduction in approval time'
        }
    },
    {
        stage: 'OPJ',
        name: 'Project Charter',
        form: 'R039.002',
        traditional: {
            process: 'Manual charter document with wet signatures, email distribution',
            tools: 'Word, PDF, Manual signatures, Email',
            time: '~1-2 weeks for signatures',
            records: 'R039.002 signed PDF in Docnix/SharePoint'
        },
        automated: {
            process: 'Digital charter in SharePoint with digital signatures',
            tools: 'SharePoint, Digital signatures, Azure Boards integration',
            time: '~2-5 days with digital workflow',
            records: 'R039.002 signed PDF linked to Azure Boards project',
            improvement: '60% faster charter approval'
        }
    },
    {
        stage: 'CPJ',
        name: 'Project Plan',
        form: 'R039.003',
        traditional: {
            process: 'Manual project plan document with Gantt charts in Excel/Project',
            tools: 'Word, Excel, MS Project, Manual updates',
            time: '~3-5 weeks to create and approve',
            records: 'R039.003 in Docnix/SharePoint'
        },
        automated: {
            process: 'Sprint planning in Azure Boards integrated with project plan',
            tools: 'Azure Boards, Sprint planning, Automated burndown, Templates',
            time: '~1-2 weeks with template-based planning',
            records: 'R039.003 + Digital sprint plans with real-time tracking',
            improvement: '65% reduction in planning overhead'
        }
    },
    {
        stage: 'EPJ',
        name: 'Input Data',
        form: 'R039.004',
        traditional: {
            process: 'Manual input data document with requirements, manually tracked',
            tools: 'Word, Excel for tracking, Email reviews, Manual versioning',
            time: '~4-6 weeks for complete input data',
            records: 'R039.004 in Docnix/SharePoint'
        },
        automated: {
            process: 'Requirements as Azure DevOps Work Items with SRS versioned',
            tools: 'Azure Boards, Custom fields for regulatory data, SRS in Git',
            time: '~2-3 weeks with collaborative editing',
            records: 'Work Items + SRS + R039.004 consolidated PDF',
            improvement: '50% faster input data collection'
        }
    },
    {
        stage: 'SPJ',
        name: 'Output Data',
        form: 'R039.007',
        traditional: {
            process: 'Manual compilation of outputs: code, tests, docs separately tracked',
            tools: 'Manual code review, Excel for tracking, Word for reports',
            time: 'Continuous but fragmented tracking',
            records: 'R039.007 manually compiled in Docnix/SharePoint'
        },
        automated: {
            process: 'Automatic output generation: code versioned, tests automated, docs versioned',
            tools: 'Azure Repos, Azure Test Plans, Automated test reports, Version control',
            time: 'Real-time, automatically generated',
            records: 'All outputs automatically tracked + R039.007 consolidated PDF',
            improvement: '90% reduction in manual compilation'
        }
    },
    {
        stage: 'RPJ',
        name: 'Project Review',
        form: 'R039.008',
        traditional: {
            process: 'Manual review meetings, email-based code review, separate test reviews',
            tools: 'Email, Meeting minutes, Manual checklists, Word documents',
            time: '~2-3 weeks per review cycle',
            records: 'R039.008 manually compiled from meeting minutes'
        },
        automated: {
            process: 'Pull Request reviews, automated test reviews, integrated risk reviews',
            tools: 'Azure Repos PR, Azure Test Plans, DefectDojo, Automated dashboards',
            time: '~3-7 days with automated workflows',
            records: 'All reviews automatically tracked + R039.008 consolidated PDF',
            improvement: '70% faster review cycles'
        }
    },
    {
        stage: 'TPJ',
        name: 'Project Transfer',
        form: 'R039.005',
        traditional: {
            process: 'Manual deployment coordination, separate staging setup, manual validation',
            tools: 'Manual scripts, Email coordination, Manual checklists',
            time: '~1-2 weeks for transfer',
            records: 'R039.005 manually filled after transfer'
        },
        automated: {
            process: 'Automated deployment to staging, automated E2E tests, IaC validation',
            tools: 'Azure Pipelines, Terraform IaC, Playwright E2E, Automated gates',
            time: '~4-8 hours from approval to staging',
            records: 'Automated deployment logs + R039.005 with evidence links',
            improvement: '85% faster transfer process'
        }
    },
    {
        stage: 'VPJ',
        name: 'Project Validation',
        form: 'R039.006',
        traditional: {
            process: 'Manual validation testing, separate usability tests, manual traceability',
            tools: 'Manual test execution, Excel test sheets, Manual traceability matrix',
            time: '~3-5 weeks for complete validation',
            records: 'R039.006 manually compiled with test reports'
        },
        automated: {
            process: 'Automated E2E tests, automated security validation, automated traceability',
            tools: 'Playwright E2E, OWASP ZAP DAST, Azure Test Plans, Automated matrix',
            time: '~1-2 weeks (E2E automated, usability manual)',
            records: 'Automated test reports + Usability report + R039.006 consolidated',
            improvement: '60% faster validation (automated parts)'
        }
    },
    {
        stage: 'LPJ',
        name: 'Project Release',
        form: 'R039.009',
        traditional: {
            process: 'Manual release checklist, email approvals, manual tag creation',
            tools: 'PDF forms, Email, Manual Git tags, Manual SharePoint uploads',
            time: '~3-5 days for release approval',
            records: 'R039.009 manually filled and signed'
        },
        automated: {
            process: 'Automated release gates, digital approval workflow, automated tag creation',
            tools: 'Azure Pipelines gates, Automated Git tags, SharePoint API upload',
            time: '~4-8 hours from approval to production',
            records: 'Automated release logs + R039.009 with digital signature',
            improvement: '80% faster release process'
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
        label: 'Automation Level',
        value: '70-80%',
        description: 'Automated stages of design control',
        color: 'orange'
    }
]

export default function PQ39Page() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-blue-300">
                        PQ.039 - Project Control
                    </Badge>
                    <h1 className="text-5xl font-bold text-gradient-primary">
                        Evolução do Design Control
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        De processos manuais e documentais para <strong>Compliance as Code</strong>:
                        Como o nCommand Lite automatizou o PQ.039
                    </p>
                </div>

                {/* Overview */}
                <Card className="mb-12 border-2 border-blue-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <FileText className="h-7 w-7 text-blue-600" />
                            Sobre o PQ.039
                        </CardTitle>
                        <CardDescription className="text-base">
                            Procedimento formal de controle de projeto (Design Control) da IONIC Health
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            O <strong>PQ.039</strong> estabelece o procedimento de controle de projeto (design control) para garantir que todos os produtos
                            desenvolvidos pela IONIC Health sejam seguros, eficazes e atendam requisitos regulatórios durante seu ciclo de vida.
                            Baseado na <strong>ISO 13485</strong>, <strong>FDA 21 CFR Part 820</strong> e <strong>RDC 665</strong> da ANVISA.
                        </p>
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-900">
                                <strong>Desafio:</strong> O processo tradicional envolvia múltiplos formulários manuais (R039.001 a R039.027),
                                revisões via email, planilhas Excel para rastreabilidade, aprovações que podiam levar semanas, e rastreabilidade
                                manual entre requisitos, código e testes.
                            </p>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm text-green-900 flex items-start gap-2">
                                <Zap className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span><strong>Solução:</strong> O nCommand Lite implementa "Compliance as Code" através de gates automatizados,
                                    rastreabilidade automática (Requisitos → Código → Testes), ferramentas integradas (Azure DevOps, DefectDojo, Terraform)
                                    e geração automática de evidências para os formulários R039.XXX.</span>
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
                <Card className="mb-12 border-2 border-primary/20 shadow-xl bg-white overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
                    <CardHeader className="relative z-10 text-center pb-8">
                        <div className="inline-block px-6 py-2 mb-4 bg-green-100 border border-green-200 rounded-full">
                            <span className="text-green-700 font-semibold text-sm">📊 IMPACTO QUANTIFICADO</span>
                        </div>
                        <CardTitle className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
                            Ganhos por Etapa do PQ.039
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Redução de tempo e automação implementada em cada fase do Design Control
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        {/* Main Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-blue-600 mb-2">~70%</div>
                                <div className="text-sm text-blue-800 font-medium">Tempo Total Economizado</div>
                                <div className="text-xs text-blue-600/70 mt-2">Média geral do ciclo</div>
                            </div>
                            <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
                                <div className="text-sm text-green-800 font-medium">Compliance Automatizada</div>
                                <div className="text-xs text-green-600/70 mt-2">Gates técnicos obrigatórios</div>
                            </div>
                            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-purple-600 mb-2">Real-time</div>
                                <div className="text-sm text-purple-800 font-medium">Rastreabilidade</div>
                                <div className="text-xs text-purple-600/70 mt-2">Requisitos → Código → Testes</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-orange-600 mb-2">9</div>
                                <div className="text-sm text-orange-800 font-medium">Etapas Automatizadas</div>
                                <div className="text-xs text-orange-600/70 mt-2">NPJ → OPJ → CPJ → LPJ</div>
                            </div>
                        </div>

                        {/* Stage-by-Stage Improvements */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Melhorias Detalhadas por Etapa</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pq039Stages.map((stage) => (
                                    <div key={stage.stage} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-xs font-semibold text-blue-600 mb-2">ETAPA {stage.stage}</div>
                                        <div className="text-lg font-bold text-gray-900 mb-1">{stage.name}</div>
                                        <div className="text-xs text-gray-500 mb-3">{stage.form}</div>
                                        {stage.automated.improvement && (
                                            <div className="flex items-baseline gap-2 mb-2">
                                                <div className="text-4xl font-bold text-green-600">{stage.automated.improvement.split(' ')[0]}</div>
                                                <TrendingUp className="h-5 w-5 text-green-500" />
                                            </div>
                                        )}
                                        <div className="text-sm text-gray-600">
                                            {stage.traditional.time} → {stage.automated.time}
                                        </div>
                                    </div>
                                ))}
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

                    {pq039Stages.map((item) => (
                        <Card key={item.stage} className="border-2 border-gray-200 shadow-md overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-lg">
                                        {item.stage}
                                    </div>
                                    <div className="flex-1">
                                        <div>{item.name}</div>
                                        <div className="text-sm font-normal text-gray-500">{item.form}</div>
                                    </div>
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
                                            Processo Tradicional (PQ.039)
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

                {/* Design History File */}
                <Card className="mb-12 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <CheckCircle2 className="h-7 w-7 text-purple-600" />
                            Design History File (RHPJ) - R039.010
                        </CardTitle>
                        <CardDescription className="text-base">
                            Geração automatizada do DHF com rastreabilidade completa
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            O <strong>Design History File (RHPJ)</strong> é o conjunto de registros que comprova que o projeto foi desenvolvido
                            conforme os requisitos planejados. O nCommand Lite automatiza a geração do DHF através de:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Matriz de Rastreabilidade Automatizada:</strong> Gerada automaticamente a partir dos links entre Work Items (Requisitos), Commits (Código) e Test Plans (Testes)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Certificado de Segurança:</strong> Gerado automaticamente do DefectDojo mostrando "0 Vulnerabilidades Abertas"</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Consolidação Automatizada:</strong> Scripts que consolidam todos os artefatos digitais em um PDF para SharePoint (R039.010)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span><strong>Rastreabilidade Bidirecional:</strong> Links entre formulários R039.XXX no SharePoint e artefatos digitais no Azure DevOps</span>
                            </li>
                        </ul>
                        <div className="p-4 bg-purple-100 border border-purple-300 rounded-lg mt-4">
                            <p className="text-sm text-purple-900 font-medium">
                                📋 Resultado: DHF gerado automaticamente com 100% de rastreabilidade, mantendo compliance total com PQ.039 enquanto elimina trabalho manual.
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
                                        <span>Redução de ~70% no tempo total do Design Control</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                        <span>Rastreabilidade automática: Requisitos → Código → Testes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                        <span>Feedback instantâneo via gates automatizados</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                        <span>70-80% das etapas totalmente automatizadas</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Conformidade Garantida</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Gates técnicos impedem desvios do processo PQ.039</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Rastreabilidade 100% automatizada e em tempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Evidências geradas automaticamente para formulários R039.XXX</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>DHF gerado automaticamente com matriz de rastreabilidade</span>
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
                            Veja como cada fase do Design Control é implementada com gates automatizados e compliance por design
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/ciclo-de-vida"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold shadow-lg"
                            >
                                Ver Fluxos do Ciclo de Vida
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/sobre"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                            >
                                Ver Detalhamento das Fases
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}


'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Zap, CheckCircle2, ArrowRight, TrendingUp, Clock, Shield, Activity, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

const pq042Process = [
    {
        step: '1',
        name: 'Solicitação e Criação',
        form: 'R042.001',
        traditional: {
            process: 'Email manual para chamado@ionic.health, preenchimento de formulário Word',
            tools: 'Email, Word, Excel para tracking, Reuniões presenciais',
            time: '~1-2 semanas',
            records: 'R042.001 em Docnix/SharePoint'
        },
        automated: {
            process: 'Work Item "GMUD Request" no Azure Boards com campos customizados e templates',
            tools: 'Azure Boards, Formulário digital estruturado, Auto-geração de GMUD ID',
            time: '~1-2 dias',
            records: 'Work Item com full audit trail + R042.001 PDF auto-gerado',
            improvement: '85% reduction in request time'
        }
    },
    {
        step: '2',
        name: 'Análise de Risco',
        form: 'R042.001 (Risk Assessment)',
        traditional: {
            process: 'Reuniões manuais para brainstorm, análise em Word/Excel',
            tools: 'Reuniões presenciais, Word/Excel, Email para consolidação',
            time: '~1-2 semanas',
            records: 'Atas de reunião, planilhas de risco'
        },
        automated: {
            process: 'Checklist de risco automatizado com scoring e sugestões baseadas em histórico',
            tools: 'Azure Boards (checklist digital), Auto-scoring (Low/Medium/High), ML suggestions',
            time: '~3-5 dias',
            records: 'Risk assessment digital com rastreabilidade completa',
            improvement: '65% reduction in risk analysis time'
        }
    },
    {
        step: '3',
        name: 'Aprovação Inicial',
        form: 'R042.001 (Approvals)',
        traditional: {
            process: 'Aprovações sequenciais via email, espera por respostas, possíveis delays',
            tools: 'Email (sequencial), Manual tracking de aprovações',
            time: '~1-2 semanas',
            records: 'Emails de aprovação arquivados'
        },
        automated: {
            process: 'Workflow de aprovação paralela com notificações automáticas e SLA tracking',
            tools: 'Azure Boards workflow, Notificações automáticas, SLA alerts (3 dias), Dashboard de aprovações',
            time: '~2-3 dias',
            records: 'Aprovações digitais com timestamp e assinatura eletrônica',
            improvement: '75% faster approval process'
        }
    },
    {
        step: '4',
        name: 'Execução das Ações',
        form: 'R042.001 (Action Plan)',
        traditional: {
            process: 'Tracking manual via Excel, updates por email, sem visibilidade em tempo real',
            tools: 'Excel para tracking, Email updates, Reuniões de status',
            time: 'Variável (sem tracking automático)',
            records: 'Excel atualizado manualmente'
        },
        automated: {
            process: 'Sub-tasks no Azure Boards com progress tracking, alertas de atraso, upload estruturado de evidências',
            tools: 'Azure Boards (sub-tasks), Progress bar automático, Dashboard em tempo real, Alerts automáticos',
            time: 'Mesmo tempo de execução, mas visibilidade total',
            records: 'Progress tracking em tempo real + evidências estruturadas',
            improvement: '80% improvement in visibility and tracking'
        }
    },
    {
        step: '5',
        name: 'Avaliação Pós-Mudança',
        form: 'R042.002',
        traditional: {
            process: 'Preenchimento manual de formulário R042.002 em Word, envio por email',
            tools: 'Word (R042.002), Email, Manual validation',
            time: '~1 semana',
            records: 'R042.002 PDF em Docnix/SharePoint'
        },
        automated: {
            process: 'Checklist digital de validação com métricas automáticas e lições aprendidas catalogadas',
            tools: 'Azure Boards (checklist R042.002), Métricas auto-calculadas (cycle time, efficiency), Knowledge base',
            time: '~2-3 dias',
            records: 'Post-change evaluation digital + R042.002 PDF auto-gerado',
            improvement: '70% reduction in post-change evaluation time'
        }
    },
    {
        step: '6',
        name: 'Fechamento e Arquivamento',
        form: 'R042.002 (Final)',
        traditional: {
            process: 'Aprovação final via email, upload manual de documentos para SharePoint',
            tools: 'Email para aprovação, Upload manual SharePoint',
            time: '~3-5 dias',
            records: 'Documentos arquivados manualmente'
        },
        automated: {
            process: 'Aprovação digital, geração automática de PDFs, upload via API para SharePoint',
            tools: 'Aprovação digital workflow, PDF generation (R042.001 + R042.002), SharePoint API auto-upload',
            time: '~1 dia',
            records: 'Arquivamento automático + métricas completas do ciclo',
            improvement: '80% faster closure and archiving'
        }
    }
]

const metrics = [
    {
        icon: Clock,
        label: 'Time Savings',
        value: '~60%',
        description: 'Average reduction in GMUD cycle time',
        color: 'blue'
    },
    {
        icon: Shield,
        label: 'Automation Level',
        value: '70-75%',
        description: 'From 20-30% to 70-75% automation',
        color: 'green'
    },
    {
        icon: Activity,
        label: 'Traceability',
        value: 'Real-time',
        description: 'Full traceability vs manual tracking',
        color: 'purple'
    },
    {
        icon: TrendingUp,
        label: 'Visibility',
        value: '100%',
        description: 'Dashboard em tempo real de GMUDs',
        color: 'orange'
    }
]

const sdlcPhases = [
    {
        phase: 'FASE 1',
        name: 'Planejamento e Infraestrutura',
        applicability: 'Alta',
        applicabilityLevel: 'high',
        scenarios: [
            'Setup de infraestrutura Azure (DevOps, DefectDojo)',
            'Configuração de ambientes (Dev, Staging, Prod)',
            'Processos de planejamento organizacional'
        ],
        examples: [
            'GMUD-2025-001: Setup Azure DevOps para nCommand Lite',
            'GMUD-2025-005: Implementação DefectDojo v2.x'
        ]
    },
    {
        phase: 'FASE 2',
        name: 'Desenvolvimento e Codificação',
        applicability: 'Baixa',
        applicabilityLevel: 'low',
        scenarios: [
            'Mudança em ferramentas de desenvolvimento (raro)',
            'Upgrade de IDE corporativo',
            'Mudança em padrão de linting organizacional'
        ],
        examples: [
            'GMUD-2025-010: Upgrade Terraform 1.5 → 1.7 (se breaking changes)'
        ]
    },
    {
        phase: 'FASE 3',
        name: 'Verificação e Segurança',
        applicability: 'Alta',
        applicabilityLevel: 'high',
        scenarios: [
            'Mudanças no DefectDojo (upgrade, configuração)',
            'Atualização de ferramentas de segurança (OWASP ZAP, Trivy)',
            'Mudança em quality gates (SonarCloud)'
        ],
        examples: [
            'GMUD-2025-015: Upgrade DefectDojo 2.0 → 2.5',
            'GMUD-2025-018: Nova política de quality gate (SonarCloud)'
        ]
    },
    {
        phase: 'FASE 4',
        name: 'Validação e Liberação',
        applicability: 'Média',
        applicabilityLevel: 'medium',
        scenarios: [
            'Mudança em processo de validação',
            'Upgrade de ferramentas de teste (Playwright)',
            'Novos gates de liberação'
        ],
        examples: [
            'GMUD-2025-020: Novos critérios de validação organizacional'
        ]
    },
    {
        phase: 'FASE 5',
        name: 'Monitoramento Pós-Mercado',
        applicability: 'Muito Alta',
        applicabilityLevel: 'very-high',
        scenarios: [
            'Implementação Azure Sentinel (SIEM)',
            'Novos dashboards Power BI',
            'Mudança em processo de vigilância',
            'Application Insights e analytics'
        ],
        examples: [
            'GMUD-2025-025: Implementação Azure Sentinel',
            'GMUD-2025-030: Dashboards Power BI para monitoramento'
        ]
    }
]

const pq039vs042 = [
    {
        aspect: 'Escopo',
        pq039: 'Controle de projetos de produtos (nCommand Lite)',
        pq042: 'Controle de mudanças em sistemas auxiliares, infraestrutura e processos'
    },
    {
        aspect: 'Aplicação',
        pq039: 'Desenvolvimento do produto nCommand Lite',
        pq042: 'Infraestrutura, ferramentas, sistemas auxiliares, processos organizacionais'
    },
    {
        aspect: 'Quando Usar',
        pq039: 'Nova feature, bug fix, mudança no código do produto',
        pq042: 'Mudança em Azure DevOps, DefectDojo, infraestrutura, processos'
    },
    {
        aspect: 'Formulários',
        pq039: '12+ formulários (R039.001 a R039.012)',
        pq042: '2 formulários (R042.001 e R042.002)'
    },
    {
        aspect: 'Etapas',
        pq039: '9 etapas (NPJ → OPJ → CPJ → EPJ → SPJ → RPJ → TPJ → VPJ → LPJ)',
        pq042: '6 etapas (Solicitação → Análise → Aprovação → Execução → Avaliação → Fechamento)'
    },
    {
        aspect: 'Automação Atual',
        pq039: '70-80% automatizado',
        pq042: '20-30% automatizado (oportunidade de melhoria!)'
    }
]

export default function PQ42Page() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-orange-300">
                        PQ.042 - Change Control (GMUD)
                    </Badge>
                    <h1 className="text-5xl font-bold text-gradient-primary">
                        Gestão de Mudanças Automatizada
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        De processos manuais e fragmentados para <strong>GMUD Automatizado</strong>:
                        Como o nCommand Lite pode transformar o PQ.042
                    </p>
                </div>

                {/* Overview */}
                <Card className="mb-12 border-2 border-orange-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <FileText className="h-7 w-7 text-orange-600" />
                            Sobre o PQ.042
                        </CardTitle>
                        <CardDescription className="text-base">
                            Procedimento de Controle de Mudanças (GMUD) da IONIC Health
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            O <strong>PQ.042</strong> estabelece o procedimento de controle de mudanças (GMUD - Gestão de Mudanças) para controlar
                            mudanças em sistemas auxiliares, software, equipamentos e processos que podem influenciar a qualidade dos produtos.
                            Baseado na <strong>ISO 13485</strong>, <strong>ISO/IEC 27001</strong> e <strong>RDC 665</strong> da ANVISA.
                        </p>
                        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                            <p className="text-sm text-orange-900 font-semibold mb-2">
                                ⚠️ Ponto Crítico de Exclusão:
                            </p>
                            <p className="text-sm text-orange-900">
                                <em>"Changes regarding IONIC Health products and/or projects must follow the guidelines according to PQ.039 – Project Control,
                                and are not controlled by this procedure."</em>
                            </p>
                            <p className="text-sm text-orange-900 mt-2">
                                <strong>Implicação:</strong> Mudanças no <strong>produto nCommand Lite</strong> seguem PQ.039 e NÃO são controladas pelo PQ.042.
                                O PQ.042 controla mudanças em <strong>sistemas auxiliares, infraestrutura e processos</strong> que suportam o desenvolvimento.
                            </p>
                        </div>
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-900">
                                <strong>Desafio:</strong> O processo tradicional de GMUD envolve múltiplos emails, formulários Word manuais,
                                aprovações sequenciais que podem levar semanas, tracking manual em Excel, e rastreabilidade fragmentada.
                                Tempo total: <strong>3-5 semanas</strong>. Automação atual: <strong>~20-30%</strong>.
                            </p>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm text-green-900 flex items-start gap-2">
                                <Zap className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span><strong>Solução Proposta:</strong> Implementar Work Item Type "GMUD Request" no Azure Boards com workflow automatizado,
                                    checklist de risco digital, aprovações paralelas, progress tracking em tempo real, e geração automática de PDFs (R042.001 e R042.002).
                                    Tempo alvo: <strong>1-2 semanas</strong> (50-60% redução). Automação alvo: <strong>70-75%</strong>.</span>
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

                {/* PQ.039 vs PQ.042 Comparison */}
                <Card className="mb-12 border-2 border-purple-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <AlertTriangle className="h-7 w-7 text-purple-600" />
                            PQ.039 vs PQ.042: Quando Usar Cada Um?
                        </CardTitle>
                        <CardDescription className="text-base">
                            Diferenças fundamentais e matriz de decisão
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Aspecto</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PQ.039 (Project Control)</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PQ.042 (Change Control)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pq039vs042.map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{row.aspect}</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.pq039}</td>
                                            <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.pq042}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-sm text-yellow-900 font-semibold mb-2">
                                🔑 Regra de Ouro:
                            </p>
                            <ul className="text-sm text-yellow-900 space-y-1 list-disc list-inside">
                                <li><strong>É mudança no PRODUTO (nCommand Lite)?</strong> → Use PQ.039 ou SOP-005</li>
                                <li><strong>É mudança em INFRAESTRUTURA/SISTEMA AUXILIAR?</strong> → Use PQ.042 (GMUD)</li>
                                <li><strong>É mudança em PROCESSO ORGANIZACIONAL?</strong> → Use PQ.042 (GMUD)</li>
                                <li><strong>Mudanças em IaC podem requerer AMBOS</strong> → GMUD (decisão) + Change Request (implementação)</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* SDLC Integration */}
                <Card className="mb-12 border-2 border-indigo-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Activity className="h-7 w-7 text-indigo-600" />
                            Integração com SDLC (5 Fases do nCommand Lite)
                        </CardTitle>
                        <CardDescription className="text-base">
                            Onde o PQ.042 se aplica em cada fase do ciclo de vida
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {sdlcPhases.map((phase) => {
                            const applicabilityColors = {
                                'very-high': 'bg-green-100 border-green-300 text-green-800',
                                'high': 'bg-blue-100 border-blue-300 text-blue-800',
                                'medium': 'bg-yellow-100 border-yellow-300 text-yellow-800',
                                'low': 'bg-gray-100 border-gray-300 text-gray-800'
                            }
                            const applicabilityColor = applicabilityColors[phase.applicabilityLevel as keyof typeof applicabilityColors]

                            return (
                                <div key={phase.phase} className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="font-bold text-lg text-indigo-600">{phase.phase}</div>
                                            <div className="font-semibold text-gray-900">{phase.name}</div>
                                        </div>
                                        <Badge className={applicabilityColor}>
                                            Aplicabilidade: {phase.applicability}
                                        </Badge>
                                    </div>
                                    <div className="mb-3">
                                        <div className="text-sm font-semibold text-gray-700 mb-2">Cenários de Aplicação:</div>
                                        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                                            {phase.scenarios.map((scenario, idx) => (
                                                <li key={idx}>{scenario}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-700 mb-2">Exemplos de GMUD:</div>
                                        <div className="space-y-1">
                                            {phase.examples.map((example, idx) => (
                                                <div key={idx} className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded border border-gray-200">
                                                    {example}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>

                {/* Detailed Improvements Banner */}
                <Card className="mb-12 border-2 border-primary/20 shadow-xl bg-white overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
                    <CardHeader className="relative z-10 text-center pb-8">
                        <div className="inline-block px-6 py-2 mb-4 bg-orange-100 border border-orange-200 rounded-full">
                            <span className="text-orange-700 font-semibold text-sm">📊 GANHOS PROPOSTOS (ATUAL → FUTURO)</span>
                        </div>
                        <CardTitle className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
                            Transformação do Processo GMUD
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-lg max-w-3xl mx-auto">
                            De processo manual e fragmentado para automação inteligente
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        {/* Main Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-blue-600 mb-2">~60%</div>
                                <div className="text-sm text-blue-800 font-medium">Redução de Tempo Total</div>
                                <div className="text-xs text-blue-600/70 mt-2">3-5 semanas → 1-2 semanas</div>
                            </div>
                            <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-green-600 mb-2">+50pp</div>
                                <div className="text-sm text-green-800 font-medium">Ganho de Automação</div>
                                <div className="text-xs text-green-600/70 mt-2">20-30% → 70-75%</div>
                            </div>
                            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-purple-600 mb-2">100%</div>
                                <div className="text-sm text-purple-800 font-medium">Rastreabilidade</div>
                                <div className="text-xs text-purple-600/70 mt-2">De manual para automática</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-center">
                                <div className="text-5xl font-bold text-orange-600 mb-2">75%</div>
                                <div className="text-sm text-orange-800 font-medium">Aprovação Mais Rápida</div>
                                <div className="text-xs text-orange-600/70 mt-2">1-2 semanas → 2-3 dias</div>
                            </div>
                        </div>

                        {/* Stage-by-Stage Improvements */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Melhorias Detalhadas por Etapa</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pq042Process.map((stage) => (
                                    <div key={stage.step} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-xs font-semibold text-orange-600 mb-2">ETAPA {stage.step}</div>
                                        <div className="text-lg font-bold text-gray-900 mb-1">{stage.name}</div>
                                        <div className="text-xs text-gray-500 mb-3">{stage.form}</div>
                                        {stage.automated.improvement && (
                                            <div className="flex items-baseline gap-2 mb-2">
                                                <div className="text-3xl font-bold text-green-600">{stage.automated.improvement.split(' ')[0]}</div>
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
                        <p className="text-gray-600">Processo tradicional vs automação proposta</p>
                    </div>

                    {pq042Process.map((item) => (
                        <Card key={item.step} className="border-2 border-gray-200 shadow-md overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
                                        {item.step}
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
                                            Processo Tradicional (Manual)
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
                                            Processo Automatizado (Proposto)
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

                {/* Key Benefits */}
                <Card className="mb-12 border-2 border-primary/20 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl">Benefícios Principais da Automação</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Eficiência Operacional</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                                        <span>Redução de 50-60% no tempo total do ciclo GMUD</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                                        <span>Aprovações 75% mais rápidas (1-2 semanas → 2-3 dias)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                                        <span>Visibilidade em tempo real (dashboard de GMUDs)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                                        <span>70-75% de automação (vs 20-30% atual)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Conformidade e Qualidade</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Rastreabilidade 100% automática e em tempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Evidências estruturadas e organizadas por tipo</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Auditoria simplificada (tudo centralizado no Azure Boards)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Métricas e KPIs em tempo real (cycle time, eficiência, qualidade)</span>
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
                            Veja como o PQ.042 se integra com o SDLC completo do nCommand Lite e compare com o PQ.039
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
                                href="/pq39"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                            >
                                Comparar com PQ.039
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

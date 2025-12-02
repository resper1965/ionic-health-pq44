'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, Clock, Users, Settings, Link2Icon } from 'lucide-react'

const implementationSteps = [
    {
        step: 1,
        title: 'Criar Processo Herdado',
        duration: '15-20 min',
        profile: 'Project Collection Administrator',
        description: 'Não edite o processo padrão. Crie um específico para Ionic Health.',
        actions: [
            'Vá em Organization Settings > Boards > Process',
            'Escolha o processo base (Scrum ou Agile)',
            'Clique nos três pontos (...) > Create inherited process',
            'Nome: "Ionic Health SaMD Process"',
            'Descrição: "Processo customizado para conformidade com IEC 62304 e ISO 14971"',
            'Aplique este processo ao Projeto "nCommand Lite"'
        ]
    },
    {
        step: 2,
        title: 'Criar Work Item Types (WITs)',
        duration: '60-90 min',
        profile: 'Project Collection Administrator',
        description: 'Tipos de itens customizados que não existem no padrão.',
        sections: [
            {
                name: '2.1. Novo WIT: Risk (Para ISO 14971)',
                description: 'Substitui a planilha Excel de FMEA',
                config: {
                    name: 'Risk',
                    icon: '☢️',
                    color: 'Vermelho',
                    fields: [
                        { name: 'Hazard Description', type: 'Text - Multi-line' },
                        { name: 'Cause of Failure', type: 'Text - Multi-line' },
                        { name: 'Potential Harm', type: 'Text - Multi-line' },
                        { name: 'Severity (Pre-Mitigation)', type: 'Picklist: 5-Catastrophic, 4-Critical, 3-Serious, 2-Minor, 1-Negligible' },
                        { name: 'Probability (Pre-Mitigation)', type: 'Picklist: 5-Frequent, 4-Probable, 3-Occasional, 2-Remote, 1-Improbable' },
                        { name: 'Risk Level (Initial)', type: 'Picklist: High, Medium, Low' },
                        { name: 'Risk Control Measure', type: 'Text - Multi-line' },
                        { name: 'Severity (Residual)', type: 'Picklist: (igual acima)' },
                        { name: 'Probability (Residual)', type: 'Picklist: (igual acima)' },
                        { name: 'Risk Level (Residual)', type: 'Picklist: High, Medium, Low, Acceptable' }
                    ]
                }
            },
            {
                name: '2.2. Novo WIT: Change Request',
                description: 'Para controlar mudanças pós-release',
                config: {
                    name: 'Change Request',
                    icon: '⚡',
                    color: 'Laranja',
                    fields: [
                        { name: 'Reason for Change', type: 'Text' },
                        { name: 'Regulatory Impact Analysis', type: 'Picklist: None-Internal, Letter to File, New Submission' },
                        { name: 'Impacted Modules', type: 'Text' }
                    ]
                }
            },
            {
                name: '2.3. Customizar WIT: Product Backlog Item',
                description: 'Adicionar dados de Usabilidade e Regulação nos requisitos',
                config: {
                    name: 'Product Backlog Item',
                    fields: [
                        { name: 'Regulatory Requirement', type: 'Boolean - "Este item é exigido por norma?"' },
                        { name: 'Usability Impact', type: 'Boolean - "Afeta a interface do usuário?"' },
                        { name: 'User Profile', type: 'Picklist: Médico, Enfermeiro, TI, Admin (Para IEC 62366)' }
                    ]
                }
            }
        ]
    },
    {
        step: 3,
        title: 'Configurar Estados e Regras (Workflow)',
        duration: '30-40 min',
        profile: 'Project Collection Administrator',
        description: 'Implementar "Governança Forçada" com gates automatizados',
        workflows: [
            {
                wit: 'Product Backlog Item',
                rule: 'Gate de Aprovação',
                details: [
                    'Criar estado "Ready for Dev" (Categoria: Proposed/In Progress)',
                    'Criar campo booleano "Risk Analysis Done"',
                    'Regra: "Block Approval without Risk Assessment"',
                    'Condition: Se State muda para Ready for Dev',
                    'Action: Tornar "Risk Analysis Done" Required'
                ]
            },
            {
                wit: 'Risk',
                rule: 'Travas de Risco',
                details: [
                    'Regra: "Residual Risk Required"',
                    'Condition: Quando State = Closed',
                    'Action: Make required Severity (Residual) e Probability (Residual)',
                    'Motivo: Não pode fechar risco sem definir risco residual'
                ]
            }
        ]
    },
    {
        step: 4,
        title: 'Configurar Backlog e Boards',
        duration: '15-20 min',
        profile: 'Project Collection Administrator',
        description: 'Organizar níveis de backlog para visualização da equipe',
        actions: [
            'Vá em Backlog levels',
            'No nível Epics: adicione Change Request',
            'No Requirement backlog: confirme Product Backlog Item',
            'Crie Portfolio Backlog "Risk Management" com WIT Risk',
            'Resultado: Kanban Board exclusivo para gerenciar riscos'
        ]
    },
    {
        step: 5,
        title: 'Definir Tipos de Link (Rastreabilidade)',
        duration: '10-15 min',
        profile: 'Project Administrator',
        description: 'Regras semânticas para garantir rastreabilidade completa',
        linkingRules: [
            { from: 'User Need', relation: 'Parent', to: 'User Story' },
            { from: 'User Story', relation: 'Tests', to: 'Test Case' },
            { from: 'Risk', relation: 'Related', to: 'User Story', note: 'Aqui está a mitigação' }
        ],
        note: 'Documente no SOP-001 as regras de ouro. Use extensão "Risk Management" do Marketplace para link "Mitigates", ou use "Related" com tag [Mitigation].'
    },
    {
        step: 6,
        title: 'Criar Queries de Auditoria (Dashboard)',
        duration: '20-30 min',
        profile: 'Project Administrator',
        description: 'Não espere a auditoria. Mostre a "saúde" do processo em tempo real.',
        queries: [
            {
                name: 'Riscos sem Mitigação',
                criteria: 'Tipo: Risk, Estado: Active, Link Count (Related): = 0',
                objective: 'Se não estiver vazia, QA Leader não aprova release'
            },
            {
                name: 'Requisitos sem Teste',
                criteria: 'Tipo: Product Backlog Item, Estado: Done, Link Count (Tested By): = 0',
                objective: 'Funcionalidades codificadas sem testes'
            },
            {
                name: 'Traceability Matrix Source',
                criteria: 'Tree of Work Items: Epic → Feature → User Story → Test Case → Bug',
                objective: 'Rastreabilidade completa para auditoria'
            }
        ]
    }
]

export default function AzureDevOpsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-blue-300">
                        Ferramentas & Implementação
                    </Badge>
                    <h1 className="text-5xl font-bold text-gradient-primary">
                        Azure DevOps - Setup SaMD
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        Guia completo de implementação do Azure Boards customizado para conformidade IEC 62304 e ISO 14971
                    </p>
                </div>

                {/* Overview Card */}
                <Card className="mb-12 border-2 border-blue-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Settings className="h-7 w-7 text-blue-600" />
                            Visão Geral da Implementação
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <Users className="h-8 w-8 text-blue-600" />
                                <div>
                                    <div className="font-semibold text-gray-900">Perfil Necessário</div>
                                    <div className="text-sm text-gray-600">Project Collection Administrator</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <Clock className="h-8 w-8 text-green-600" />
                                <div>
                                    <div className="font-semibold text-gray-900">Tempo Estimado</div>
                                    <div className="text-sm text-gray-600">2 a 4 horas (total)</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <CheckCircle2 className="h-8 w-8 text-purple-600" />
                                <div>
                                    <div className="font-semibold text-gray-900">Resultado</div>
                                    <div className="text-sm text-gray-600">Processo completo automatizado</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                            <p className="text-sm text-yellow-900">
                                <strong>⚠️ Importante:</strong> Este setup transforma o Azure Boards em uma ferramenta de compliance.
                                Riscos, rastreabilidade e gates de aprovação ficam integrados ao workflow de desenvolvimento.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Implementation Steps */}
                <div className="space-y-8">
                    {implementationSteps.map((item) => (
                        <Card key={item.step} className="border-2 border-gray-200 shadow-md">
                            <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b-2 border-gray-200">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl">
                                            {item.step}
                                        </div>
                                        <div>
                                            <CardTitle className="text-2xl">{item.title}</CardTitle>
                                            <CardDescription className="text-base mt-1">{item.description}</CardDescription>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant="outline" className="mb-2">{item.duration}</Badge>
                                        <div className="text-xs text-gray-600 flex items-center gap-1">
                                            <Users className="h-3 w-3" />
                                            {item.profile}
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                {/* Simple Actions List */}
                                {item.actions && (
                                    <div className="space-y-2">
                                        {item.actions.map((action, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{action}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* WIT Sections */}
                                {item.sections && (
                                    <div className="space-y-6">
                                        {item.sections.map((section, idx) => (
                                            <div key={idx} className="border border-gray-200 rounded-lg p-5 bg-white">
                                                <h4 className="font-bold text-lg text-gray-900 mb-2">{section.name}</h4>
                                                <p className="text-sm text-gray-600 mb-4">{section.description}</p>
                                                <div className="bg-gray-50 rounded-lg p-4">
                                                    <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                                                        <div><strong>Nome:</strong> {section.config.name}</div>
                                                        <div><strong>Ícone:</strong> {section.config.icon}</div>
                                                        <div><strong>Cor:</strong> {section.config.color}</div>
                                                    </div>
                                                    <div>
                                                        <strong className="text-sm block mb-2">Campos Customizados:</strong>
                                                        <div className="space-y-2">
                                                            {section.config.fields.map((field, fIdx) => (
                                                                <div key={fIdx} className="flex items-start gap-2 text-sm">
                                                                    <span className="text-blue-600 font-mono">▸</span>
                                                                    <div>
                                                                        <strong>{field.name}</strong> - <span className="text-gray-600">{field.type}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Workflows */}
                                {item.workflows && (
                                    <div className="space-y-4">
                                        {item.workflows.map((workflow, idx) => (
                                            <div key={idx} className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <AlertCircle className="h-5 w-5 text-orange-600" />
                                                    <strong className="text-lg">{workflow.wit}: {workflow.rule}</strong>
                                                </div>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    {workflow.details.map((detail, dIdx) => (
                                                        <li key={dIdx} className="flex items-start gap-2">
                                                            <span className="text-orange-500 mt-1">•</span>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Linking Rules */}
                                {item.linkingRules && (
                                    <div>
                                        <div className="space-y-3 mb-4">
                                            {item.linkingRules.map((rule, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                                    <div className="font-semibold text-purple-900">{rule.from}</div>
                                                    <div className="flex items-center gap-2 text-purple-600">
                                                        <span>—</span>
                                                        <Badge variant="outline" className="border-purple-300">{rule.relation}</Badge>
                                                        <span>→</span>
                                                    </div>
                                                    <div className="font-semibold text-purple-900">{rule.to}</div>
                                                    {rule.note && <div className="text-xs text-purple-600 ml-auto">({rule.note})</div>}
                                                </div>
                                            ))}
                                        </div>
                                        {item.note && (
                                            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
                                                <strong>💡 Dica:</strong> {item.note}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Queries */}
                                {item.queries && (
                                    <div className="space-y-4">
                                        {item.queries.map((query, idx) => (
                                            <div key={idx} className="border border-green-200 bg-green-50 rounded-lg p-4">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h5 className="font-bold text-green-900">{query.name}</h5>
                                                    <Badge className="bg-green-600 text-white">Query</Badge>
                                                </div>
                                                <div className="text-sm space-y-2">
                                                    <div><strong>Critérios:</strong> <code className="bg-white px-2 py-1 rounded text-xs">{query.criteria}</code></div>
                                                    <div><strong>Objetivo:</strong> {query.objective}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Deliverables Summary */}
                <Card className="mt-12 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <CheckCircle2 className="h-7 w-7 text-green-600" />
                            Entrega Final: O que você terá
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Ferramentas Digitais</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Formulário de Risco digital substituindo Excel (WIT Risk)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Controle de mudança pós-release (WIT Change Request)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Requisitos com dados de usabilidade (IEC 62366)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Governança Automatizada</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Fluxo de aprovação com dados de usabilidade obrigatórios</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Dashboards mostrando buracos na rastreabilidade em tempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Queries de auditoria prontas para uso</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

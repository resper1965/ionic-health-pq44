'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, FileText, CheckCircle2, Search, AlertTriangle, PlayCircle } from 'lucide-react'
import Link from 'next/link'

export default function UsabilidadePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-pink-300 text-pink-700">
                        IEC 62366-1:2015
                    </Badge>
                    <h1 className="text-5xl font-bold text-gradient-primary">
                        Engenharia de Usabilidade
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        Processo centrado no usuário para garantir segurança e eficácia de uso
                    </p>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card className="border-2 border-pink-100 bg-pink-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-pink-900">
                                <Search className="h-6 w-6" />
                                Pesquisa & Análise
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                Definição de perfis de usuário, ambientes de uso e tarefas críticas.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-pink-600" />
                                    Perfil de Usuário
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-pink-600" />
                                    Análise de Tarefas
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-100 bg-purple-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-purple-900">
                                <PlayCircle className="h-6 w-6" />
                                Avaliação Formativa
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                Testes iterativos durante o desenvolvimento para guiar o design.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                                    Protótipos de Baixa/Alta
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                                    Feedback Contínuo
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-100 bg-blue-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-blue-900">
                                <FileText className="h-6 w-6" />
                                Avaliação Somativa
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                Validação final para provar que o uso é seguro e eficaz.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                    Teste com Usuários Reais
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                    Relatório de Usabilidade
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Process Flow */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fluxo de Engenharia de Usabilidade</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative flex items-center justify-between">
                                <div className="w-5/12 text-right pr-8">
                                    <h3 className="text-xl font-bold text-gray-900">1. Especificação de Uso</h3>
                                    <p className="text-gray-600 mt-2">
                                        Definição clara de para quem é o dispositivo (perfil), onde será usado (ambiente) e para quê (indicação de uso).
                                    </p>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-pink-500 border-4 border-white shadow" />
                                <div className="w-5/12 pl-8">
                                    <Card className="bg-gray-50">
                                        <CardContent className="p-4">
                                            <div className="font-mono text-xs text-gray-500 mb-1">Artifact</div>
                                            <div className="font-semibold">Use Specification Document</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-center justify-between flex-row-reverse">
                                <div className="w-5/12 text-left pl-8">
                                    <h3 className="text-xl font-bold text-gray-900">2. Identificação de Riscos de Uso</h3>
                                    <p className="text-gray-600 mt-2">
                                        Análise de tarefas para identificar onde o usuário pode errar e causar dano (uFMEA).
                                    </p>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 border-4 border-white shadow" />
                                <div className="w-5/12 text-right pr-8">
                                    <Card className="bg-gray-50">
                                        <CardContent className="p-4">
                                            <div className="font-mono text-xs text-gray-500 mb-1">Artifact</div>
                                            <div className="font-semibold">uFMEA / Risk Analysis</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex items-center justify-between">
                                <div className="w-5/12 text-right pr-8">
                                    <h3 className="text-xl font-bold text-gray-900">3. Avaliação Formativa</h3>
                                    <p className="text-gray-600 mt-2">
                                        Ciclos de design e teste para mitigar riscos identificados e melhorar a interface.
                                    </p>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-500 border-4 border-white shadow" />
                                <div className="w-5/12 pl-8">
                                    <Card className="bg-gray-50">
                                        <CardContent className="p-4">
                                            <div className="font-mono text-xs text-gray-500 mb-1">Artifact</div>
                                            <div className="font-semibold">Formative Evaluation Protocols & Reports</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative flex items-center justify-between flex-row-reverse">
                                <div className="w-5/12 text-left pl-8">
                                    <h3 className="text-xl font-bold text-gray-900">4. Avaliação Somativa</h3>
                                    <p className="text-gray-600 mt-2">
                                        Teste final com usuários representativos em ambiente simulado ou real para validar segurança.
                                    </p>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow" />
                                <div className="w-5/12 text-right pr-8">
                                    <Card className="bg-gray-50">
                                        <CardContent className="p-4">
                                            <div className="font-mono text-xs text-gray-500 mb-1">Artifact</div>
                                            <div className="font-semibold">Summative Evaluation Report</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Banner */}
                <Card className="border-2 border-gray-200 bg-gray-50">
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="h-8 w-8 text-orange-500 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Integração com Gestão de Riscos</h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    A Engenharia de Usabilidade (IEC 62366) alimenta diretamente o processo de Gestão de Riscos (ISO 14971).
                                    Erros de uso identificados devem ser tratados como riscos e mitigados através do design da interface,
                                    medidas de proteção ou informações de segurança.
                                </p>
                                <div className="flex gap-2">
                                    <Link href="/riscos">
                                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-200">Ver Gestão de Riscos</Badge>
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

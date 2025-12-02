'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Settings } from 'lucide-react'
import Link from 'next/link'

const tools = [
    {
        name: 'Azure DevOps',
        href: '/ferramentas/azure-devops',
        description: 'Setup completo do Azure Boards customizado para conformidade IEC 62304 e ISO 14971',
        status: 'Disponível',
        duration: '2-4 horas',
        highlights: [
            'Work Item Types customizados (Risk, Change Request)',
            'Workflow com gates automatizados',
            'Queries de auditoria prontas'
        ]
    },
    {
        name: 'OWASP DefectDojo',
        href: '/ferramentas/defectdojo',
        description: 'Configuração centralizada de vulnerabilidades como Fonte da Verdade de Segurança',
        status: 'Em breve',
        duration: '1-2 horas',
        highlights: [
            'Deduplicação automática de vulnerabilidades',
            'Integração com SAST/SCA/DAST',
            'Push automático para Azure DevOps'
        ]
    },
    {
        name: 'Terraform (IaC)',
        href: '/ferramentas/terraform',
        description: 'Infraestrutura como Código para ambientes Azure Cloud imutáveis',
        status: 'Em breve',
        duration: '3-5 horas',
        highlights: [
            'Templates para ambientes Dev/Test/Prod',
            'Configuração de rede e segurança',
            'Estado remoto no Azure Storage'
        ]
    },
    {
        name: 'Threat Modeling (PyTM)',
        href: '/ferramentas/threat-modeling',
        description: 'Modelagem de ameaças automatizada usando Python Threat Modeling',
        status: 'Em breve',
        duration: '2-3 horas',
        highlights: [
            'Arquitetura como código em Python',
            'Geração automática de DFD e STRIDE',
            'Integração com DefectDojo'
        ]
    }
]

export default function FerramentasPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-purple-300">
                        Guias de Implementação
                    </Badge>
                    <h1 className="text-5xl font-bold text-gradient-primary">
                        Ferramentas & Setup
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        Guias detalhados para configuração das ferramentas que compõem o <strong>nCommand Lite</strong>
                    </p>
                </div>

                {/* Overview */}
                <Card className="mb-12 border-2 border-purple-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Settings className="h-7 w-7 text-purple-600" />
                            Ferramentas do Ecossistema
                        </CardTitle>
                        <CardDescription className="text-base">
                            Cada ferramenta é uma "Fonte da Verdade" para um aspecto específico do compliance
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <strong className="text-blue-900">Azure DevOps</strong>
                                <p className="text-sm text-blue-700 mt-1">Fonte da Verdade de <strong>Execução</strong> (requisitos, código, testes)</p>
                            </div>
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <strong className="text-red-900">OWASP DefectDojo</strong>
                                <p className="text-sm text-red-700 mt-1">Fonte da Verdade de <strong>Segurança</strong> (vulnerabilidades centralizadas)</p>
                            </div>
                            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <strong className="text-purple-900">SharePoint/Docnix</strong>
                                <p className="text-sm text-purple-700 mt-1">Repositório <strong>Legal</strong> (DHF e documentos imutáveis)</p>
                            </div>
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <strong className="text-green-900">Azure Cloud (IaC)</strong>
                                <p className="text-sm text-green-700 mt-1">Infraestrutura <strong>Imutável</strong> gerenciada via Terraform</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tools.map((tool) => (
                        <Link key={tool.href} href={tool.href}>
                            <Card className={`border-2 transition-all h-full ${tool.status === 'Disponível'
                                    ? 'border-green-200 hover:border-green-400 hover:shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300 opacity-75'
                                }`}>
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <CardTitle className="text-2xl">{tool.name}</CardTitle>
                                        <Badge variant={tool.status === 'Disponível' ? 'default' : 'secondary'} className="bg-green-600 text-white">
                                            {tool.status}
                                        </Badge>
                                    </div>
                                    <CardDescription className="text-base">{tool.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <strong>Tempo de Setup:</strong> {tool.duration}
                                        </div>
                                        <div>
                                            <strong className="text-sm text-gray-900 block mb-2">Destaques:</strong>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                {tool.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">▸</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {tool.status === 'Disponível' && (
                                            <div className="flex items-center gap-2 text-primary font-medium mt-4">
                                                Ver Guia Completo
                                                <ArrowRight className="h-4 w-4" />
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Note */}
                <Card className="mt-12 border-2 border-blue-200 bg-blue-50">
                    <CardContent className="pt-6">
                        <p className="text-sm text-blue-900">
                            <strong>💡 Nota:</strong> Estes guias são passo-a-passo detalhados criados para facilitar a replicação do processo
                            nCommand Lite em outros projetos SaMD. Cada ferramenta foi escolhida estrategicamente para garantir conformidade por design.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle2, FileText, Shield, AlertTriangle, Lock, Link2, FileCheck, CheckSquare, Settings, BookOpen, Zap, PlayCircle, Workflow } from 'lucide-react'
import Link from 'next/link'

const pageIndex = [
  {
    name: 'Ciclo de Vida',
    href: '/ciclo-de-vida',
    icon: Workflow,
    description: 'Visualização completa das 5 fases do ciclo de vida regulatório com diagramas interativos e detalhamento de cada etapa.',
    color: 'primary'
  },
  {
    name: 'Documentos',
    href: '/documentos',
    icon: FileText,
    description: 'Repositório completo de SOPs, normas regulatórias, manuais e templates organizados por categoria.',
    color: 'gray'
  },
  {
    name: 'Conformidade',
    href: '/conformidade',
    icon: Shield,
    description: 'Matriz de conformidade regulatória mostrando como cada norma é implementada e onde encontrar evidências.',
    color: 'blue'
  },
  {
    name: 'Riscos',
    href: '/riscos',
    icon: AlertTriangle,
    description: 'Gestão de riscos conforme ISO 14971, incluindo cálculo de RPN, tipos de riscos e processo de aceitação.',
    color: 'orange'
  },
  {
    name: 'Segurança',
    href: '/seguranca',
    icon: Lock,
    description: 'Gestão centralizada de vulnerabilidades usando OWASP DefectDojo como Fonte da Verdade de Segurança.',
    color: 'red'
  },
  {
    name: 'Rastreabilidade',
    href: '/rastreabilidade',
    icon: Link2,
    description: 'Matriz de rastreabilidade conectando requisitos, código, testes e riscos para auditoria completa.',
    color: 'purple'
  },
  {
    name: 'Auditoria',
    href: '/auditoria',
    icon: FileCheck,
    description: 'Evidências de auditoria organizadas por norma regulatória com checklist pré-auditoria.',
    color: 'green'
  },
  {
    name: 'QA & RA',
    href: '/qa-ra',
    icon: CheckSquare,
    description: 'Processo detalhado de Quality Assurance e Regulatory Affairs do Gate de Segurança ao DAST.',
    color: 'cyan'
  },
  {
    name: 'Automação',
    href: '/automacao',
    icon: Settings,
    description: 'Processos automatizados com totalizadores dinâmicos, diagramas de fluxo e integrações.',
    color: 'indigo'
  },
  {
    name: 'Aceitação de Riscos',
    href: '/aceitacao-riscos',
    icon: AlertTriangle,
    description: 'Processo de aceitação de riscos residuais com fluxo completo, princípios e documentação.',
    color: 'yellow'
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-b-2 border-primary/20">
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center justify-center gap-4 mb-6">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/images/ionic-logo.png"
                  alt="Ionic Health"
                  width={200}
                  height={70}
                  className="h-16 w-auto object-contain"
                  priority
                />
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gradient-primary">
                nCommand Lite
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
              Ciclo de Vida Completo de Desenvolvimento SaMD
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Plataforma de apresentação demonstrando o processo regulatório completo de software médico, 
              desde o planejamento até o monitoramento pós-mercado, seguindo rigorosamente as normas IEC 62304 Class B.
            </p>
            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              <Badge variant="gray" className="px-4 py-2 text-sm">IEC 62304 Class B</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-300">ISO 13485:2016</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-300">ISO 14971:2019</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-300">Compliance as Code</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* O que é */}
        <section className="mb-16">
          <Card className="border-2 border-primary/20 shadow-lg bg-gradient-to-br from-white to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <BookOpen className="h-8 w-8 text-primary" />
                Sobre o Projeto
              </CardTitle>
              <CardDescription className="text-base">
                Uma visão geral do ciclo de vida de software médico
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                O <strong className="text-gray-900">nCommand Lite</strong> é uma plataforma SaMD (Software as a Medical Device) 
                que implementa um ciclo de vida completo de desenvolvimento regulatório, seguindo rigorosamente o padrão 
                <strong className="text-gray-900"> IEC 62304 Class B</strong>. Esta aplicação de apresentação demonstra 
                visualmente todo o processo, desde o planejamento inicial até o monitoramento pós-mercado.
              </p>
              
              <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-gray-900 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Princípio: Compliance as Code
                </h3>
                <p className="leading-relaxed">
                  Todas as exigências regulatórias são impostas por <strong>barreiras técnicas automatizadas (Gates)</strong> 
                  dentro da esteira de produção, garantindo conformidade sem dependência de processos manuais. 
                  A conformidade é verificada automaticamente em cada etapa do desenvolvimento através de integrações 
                  automatizadas e gates de segurança.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 bg-white border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">As 5 Fases do Ciclo de Vida</h3>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <span><strong>Planejamento, Risco e Infraestrutura</strong> - Garantir que funcionalidades são seguras, necessárias e usáveis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <span><strong>Desenvolvimento e Codificação</strong> - Produção controlada do código fonte.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <span><strong>Verificação Automatizada</strong> - Validação técnica e centralização de achados.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">4.</span>
                      <span><strong>Validação e Liberação</strong> - Congelamento da versão e geração do DHF.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">5.</span>
                      <span><strong>Monitoramento</strong> - Tratativa contínua de riscos pós-mercado.</span>
                    </li>
                  </ol>
                </div>

                <div className="p-5 bg-white border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Ferramentas e Fontes da Verdade</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Azure DevOps</strong> - Fonte da Verdade de Execução (requisitos, código, testes)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>OWASP DefectDojo</strong> - Fonte da Verdade de Segurança (vulnerabilidades centralizadas)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>SharePoint Online</strong> - Repositório Legal (DHF e documentos imutáveis)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Azure Cloud (IaC)</strong> - Infraestrutura Imutável gerenciada via Terraform
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Link para Ciclo de Vida */}
        <section className="mb-16">
          <Card className="border-2 border-primary shadow-xl bg-gradient-to-br from-primary/5 via-white to-primary/5">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Workflow className="h-8 w-8 text-primary" />
                Fluxo do Ciclo de Vida
              </CardTitle>
              <CardDescription className="text-base">
                Visualize o processo completo desde o planejamento até o monitoramento pós-mercado
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-8">
              <Link
                href="/ciclo-de-vida"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg shadow-lg"
              >
                Ver Fluxos do Ciclo de Vida
                <ArrowRight className="h-6 w-6" />
              </Link>
              <p className="text-sm text-gray-600 mt-4">
                Diagramas interativos do fluxo completo e arquitetura de ativos
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Navegação de Páginas */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore as Páginas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navegue pelas diferentes seções para entender cada aspecto do ciclo de vida regulatório
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageIndex.map((page) => {
              const Icon = page.icon
              const colorClasses = {
                primary: 'border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40',
                gray: 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300',
                blue: 'border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300',
                orange: 'border-orange-200 bg-orange-50 hover:bg-orange-100 hover:border-orange-300',
                red: 'border-red-200 bg-red-50 hover:bg-red-100 hover:border-red-300',
                purple: 'border-purple-200 bg-purple-50 hover:bg-purple-100 hover:border-purple-300',
                green: 'border-green-200 bg-green-50 hover:bg-green-100 hover:border-green-300',
                cyan: 'border-cyan-200 bg-cyan-50 hover:bg-cyan-100 hover:border-cyan-300',
                indigo: 'border-indigo-200 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-300',
                yellow: 'border-yellow-200 bg-yellow-50 hover:bg-yellow-100 hover:border-yellow-300'
              }
              
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`p-6 border-2 rounded-lg transition-all group ${colorClasses[page.color as keyof typeof colorClasses] || colorClasses.primary}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-white border-2 border-current transition-colors ${
                      page.color === 'primary' ? 'text-primary' : 
                      page.color === 'gray' ? 'text-gray-600' :
                      page.color === 'blue' ? 'text-blue-600' :
                      page.color === 'orange' ? 'text-orange-600' :
                      page.color === 'red' ? 'text-red-600' :
                      page.color === 'purple' ? 'text-purple-600' :
                      page.color === 'green' ? 'text-green-600' :
                      page.color === 'cyan' ? 'text-cyan-600' :
                      page.color === 'indigo' ? 'text-indigo-600' :
                      'text-yellow-600'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {page.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Acessar página
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Resumo e Destaques */}
        <section>
          <Card className="border-2 border-primary/20 shadow-lg bg-gradient-to-br from-gray-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <PlayCircle className="h-7 w-7 text-primary" />
                Como Utilizar Esta Aplicação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Explore os Fluxos</h3>
                  <p className="text-sm text-gray-600">
                    Comece pela página <Link href="/ciclo-de-vida" className="text-primary hover:underline font-medium">Ciclo de Vida</Link> para entender 
                    o fluxo completo com diagramas interativos.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Consulte Documentos</h3>
                  <p className="text-sm text-gray-600">
                    Acesse <Link href="/documentos" className="text-primary hover:underline font-medium">Documentos</Link> para 
                    SOPs, normas regulatórias e manuais organizados.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Navegue por Tema</h3>
                  <p className="text-sm text-gray-600">
                    Use o menu ou as páginas acima para explorar aspectos específicos como Riscos, Segurança ou Auditoria.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}


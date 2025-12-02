'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle2, FileText, Shield, AlertTriangle, Lock, Link2, FileCheck, CheckSquare, Settings, BookOpen, Zap, PlayCircle, Workflow, Users, TrendingUp } from 'lucide-react'
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
  },
  {
    name: 'Usabilidade',
    href: '/usabilidade',
    icon: Users,
    description: 'Engenharia de Usabilidade conforme IEC 62366, com testes formativos e somativos integrados ao design.',
    color: 'pink'
  },
  {
    name: 'Ferramentas',
    href: '/ferramentas',
    icon: Settings,
    description: 'Guias de configuração e uso das ferramentas do ecossistema (Azure DevOps, PyTM, etc).',
    color: 'gray'
  },
  {
    name: 'PQ.044 (Evolução)',
    href: '/pq44',
    icon: TrendingUp,
    description: 'Comparativo detalhado entre o processo tradicional e a automação nCommand Lite.',
    color: 'green'
  },
  {
    name: 'PQ.039 (Evolução)',
    href: '/pq39',
    icon: TrendingUp,
    description: 'Comparativo detalhado do Design Control: processo tradicional vs automação nCommand Lite.',
    color: 'blue'
  }
]

const phases = [
  {
    number: 1,
    title: 'Planejamento, Risco e Infraestrutura',
    objective: 'Garantir que funcionalidades são seguras, necessárias e usáveis',
    description: 'Features nascem no Azure Boards com análise completa de usabilidade (IEC 62366). O Arquiteto consulta o histórico do DefectDojo para evitar reintrodução de falhas antigas, realizando análise de erro de uso (uFMEA). Riscos viram Work Items vinculados aos requisitos.',
    activities: [
      'Gestão de demanda e definição de perfil de usuário',
      'Análise de risco (Safety, Security & Usability)',
      'Consulta histórica de vulnerabilidades no DefectDojo',
      'Registro de riscos como Work Items vinculados'
    ],
    gate: 'QA Leader aprova início apenas com riscos mitigados',
    color: 'blue'
  },
  {
    number: 2,
    title: 'Desenvolvimento e Codificação',
    objective: 'Produção controlada do código fonte',
    description: 'Branches feat/ID-Item no Azure Repos seguindo Gitflow. Dev codifica com Pre-commit hooks de segurança enquanto UX realiza testes formativos. Infraestrutura gerenciada via Terraform (IaC). Pull Requests com bloqueio automático sem Work Item, reviews, build ou sanity tests E2E.',
    activities: [
      'Versionamento via Azure Repos (Gitflow)',
      'Desenvolvimento com Pre-commit hooks de segurança',
      'UX realiza testes formativos em protótipos',
      'Código Terraform para infraestrutura (alteração manual no Portal Azure é proibida)'
    ],
    gate: 'PR rejeitado automaticamente se: sem Work Item, sem 2 reviews, build falhou ou sanity tests E2E falharam',
    color: 'green'
  },
  {
    number: 3,
    title: 'Verificação Automatizada',
    objective: 'Validação técnica e centralização de achados',
    description: 'Pipeline de CI executa Unit Tests (100% pass), SAST via SonarCloud (Quality Gate A) e SCA via Trivy. Deploy em staging seguido de Smoke, Sanity e E2E Tests automatizados. Relatórios enviados automaticamente para DefectDojo que deduplica e auto-fecha vulnerabilidades corrigidas.',
    activities: [
      'Execução de Unit Tests (Jest/NUnit) - Critério: 100% Pass',
      'SAST via SonarCloud - Critério: Quality Gate A',
      'SCA via Trivy (varredura de libs e OS)',
      'Deploy staging + Smoke/Sanity/E2E Tests (Playwright) - 100% Pass',
      'Ingestão automática de resultados no DefectDojo'
    ],
    gate: 'Build falha se DefectDojo registrar novas vulnerabilidades Críticas/Altas',
    color: 'orange'
  },
  {
    number: 4,
    title: 'Validação e Liberação',
    objective: 'Congelamento da versão e geração do DHF',
    description: 'OWASP ZAP executa DAST no ambiente staging. QA executa testes funcionais complexos e usabilidade somativa (IEC 62366) no Azure Test Plans. Script automatizado gera Matriz de Rastreabilidade e Certificado de Segurança do DefectDojo. QA Leader aprova digitalmente e artefatos são salvos no SharePoint.',
    activities: [
      'DAST via OWASP ZAP (relatório enviado ao DefectDojo)',
      'Testes manuais funcionais e usabilidade somativa',
      'E2E automatizados reduzem carga de testes manuais',
      'Geração automatizada do DHF (Matriz + Certificado de Segurança)',
      'Aprovação digital do QA Leader'
    ],
    gate: 'Transferência de artefatos ao SharePoint e criação de tag vX.X.X',
    color: 'purple'
  },
  {
    number: 5,
    title: 'Monitoramento Pós-Mercado',
    objective: 'Tratativa contínua de riscos em produção',
    description: 'Sentinel monitora incidentes em tempo real. Smoke Tests automatizados executam em produção após deploys. Trivy escaneia diariamente imagens em produção enviando para DefectDojo. AppSec/QA faz triagem, marca false positives e cria Bugs automaticamente no Azure DevOps via integração "Push to Azure".',
    activities: [
      'Vigilância via SIEM (Azure Sentinel)',
      'Monitoramento E2E contínuo (Smoke Tests em produção)',
      'Testes de regressão nightly (suíte completa E2E)',
      'Scan diário via Trivy nas imagens de produção',
      'Triagem de vulnerabilidades e criação automática de Bugs'
    ],
    gate: 'SLA de correção: Crítico 24h (Hotfix), Alto 7 dias. Change Requests obrigatórios com avaliação de LTF',
    color: 'red'
  }
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
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

                <div className="p-5 bg-white border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Referências Normativas</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div><strong>ISO 13485:2016</strong> - Sistema de Gestão da Qualidade</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div><strong>IEC 62304:2006+A1</strong> - Ciclo de Vida de Software Médico</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div><strong>IEC 62366-1:2015</strong> - Engenharia de Usabilidade</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div><strong>ISO 14971:2019</strong> - Gestão de Riscos</div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* As 5 Fases Detalhadas */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">As 5 Fases do Ciclo de Vida</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Processo completo desde o planejamento até o monitoramento pós-mercado
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((phase) => (
              <Card key={phase.number} className={`border-2 border-${phase.color}-200 bg-gradient-to-br from-${phase.color}-50/30 to-white shadow-md hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${phase.color}-600 text-white flex items-center justify-center text-xl font-bold`}>
                      {phase.number}
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900">{phase.title}</div>
                      <div className={`text-sm font-normal text-${phase.color}-700 mt-1`}>
                        <strong>Objetivo:</strong> {phase.objective}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-sm text-gray-900 mb-3">Atividades Principais:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className={`text-${phase.color}-600 mt-1`}>▸</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`p-4 bg-${phase.color}-100 border border-${phase.color}-300 rounded-lg`}>
                      <h4 className={`font-semibold text-sm text-${phase.color}-900 mb-2 flex items-center gap-2`}>
                        <Shield className="h-4 w-4" />
                        Gate de Passagem:
                      </h4>
                      <p className={`text-sm text-${phase.color}-800 leading-relaxed`}>
                        {phase.gate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-white border-2 border-current transition-colors ${page.color === 'primary' ? 'text-primary' :
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

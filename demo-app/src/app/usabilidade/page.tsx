'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/MermaidDiagram'
import { Users, FileText, ExternalLink, CheckCircle2, AlertTriangle, PlayCircle, Search, TrendingUp, Target, Shield } from 'lucide-react'
import Link from 'next/link'

const usabilityFlow = `flowchart TD
    Start([Início: Nova Feature]) --> Fase1[FASE 1: Planejamento]
    
    Fase1 --> UserAnalysis[Análise de Usuário<br/>PO define no Work Item]
    UserAnalysis --> UserProfile[Perfil de Usuário<br/>Categoria, Experiência, Contexto]
    UserProfile --> TaskAnalysis[Análise de Tarefas<br/>Tarefas Principais Identificadas]
    TaskAnalysis --> UFMEA[uFMEA: Análise de Erro de Uso<br/>UX realiza análise de riscos]
    
    UFMEA --> RiskRegister[Riscos de Usabilidade<br/>Registrados como Work Items]
    RiskRegister --> Mitigation[Estratégias de Mitigação<br/>Design da Interface]
    
    Mitigation --> Fase2[FASE 2: Desenvolvimento]
    Fase2 --> Formative[Testes Formativos<br/>UX realiza com 3-5 usuários]
    Formative --> Prototype{Protótipo<br/>Aprovado?}
    
    Prototype -->|Não| AdjustDesign[Ajustar Design<br/>Implementar Feedback]
    AdjustDesign --> Formative
    Prototype -->|Sim| Implementation[Implementação<br/>Código Final]
    
    Implementation --> Fase4[FASE 4: Validação]
    Fase4 --> Summative[Testes Somativos<br/>QA executa com 8-12 usuários]
    Summative --> Criteria{Critérios<br/>Atendidos?}
    
    Criteria -->|Não| Review[Revisar Interface<br/>Corrigir Problemas]
    Review --> Implementation
    Criteria -->|Sim| Report[Relatório de Usabilidade<br/>Gerado e Aprovado]
    
    Report --> Release[✅ Release Aprovado]
    Release --> Monitor[Monitoramento<br/>FASE 5: Pós-Mercado]
    
    style Start fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Fase1 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Fase2 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Fase4 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Formative fill:#a855f7,stroke:#9333ea,stroke-width:2px,color:#fff
    style Summative fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style Prototype fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Criteria fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Release fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Monitor fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`

export default function UsabilidadePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Users className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Engenharia de Usabilidade
            </h1>
          </div>
          <Badge variant="outline" className="px-4 py-2 text-sm border-pink-300 text-pink-700 mb-2">
            IEC 62366-1:2015
          </Badge>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Processo centrado no usuário para garantir segurança e eficácia de uso de dispositivos médicos
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-pink-200 bg-pink-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Search className="h-8 w-8 text-pink-600" />
                <div className="text-3xl font-bold text-pink-700">100%</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Features Analisadas</div>
              <div className="text-xs text-gray-600">Perfil de usuário documentado</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-purple-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <PlayCircle className="h-8 w-8 text-purple-600" />
                <div className="text-3xl font-bold text-purple-700">3-5</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Testes Formativos</div>
              <div className="text-xs text-gray-600">Usuários por teste</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-blue-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-8 w-8 text-blue-600" />
                <div className="text-3xl font-bold text-blue-700">≥90%</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Taxa de Conclusão</div>
              <div className="text-xs text-gray-600">Critério somativo</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
                <div className="text-3xl font-bold text-green-700">&lt;5%</div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Erros Críticos</div>
              <div className="text-xs text-gray-600">Máximo aceito</div>
            </CardContent>
          </Card>
        </div>

        {/* Process Overview */}
        <Card className="mb-8 border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Processo de Engenharia de Usabilidade (IEC 62366-1)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              A Engenharia de Usabilidade garante que o produto médico seja seguro e eficaz quando usado pelos 
              profissionais de saúde. O processo integra-se ao ciclo de vida completo do desenvolvimento:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-pink-50 border border-pink-200 rounded-lg">
                <h3 className="font-semibold text-pink-800 mb-2">FASE 1: Análise</h3>
                <p className="text-sm text-pink-700">
                  Perfil de usuário, tarefas principais e análise de erro de uso (uFMEA).
                </p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">FASE 2: Formativo</h3>
                <p className="text-sm text-purple-700">
                  Testes iterativos durante desenvolvimento para guiar o design.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">FASE 4: Somativo</h3>
                <p className="text-sm text-blue-700">
                  Validação final com usuários para aprovar o release.
                </p>
              </div>
            </div>
            <Link 
              href="/documentos/iec-62366-1"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium mt-4"
            >
              Ver Documentação IEC 62366-1 <ExternalLink className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        {/* Process Flow Diagram */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              Fluxo Completo de Engenharia de Usabilidade
            </CardTitle>
            <CardDescription>
              Processo completo desde o planejamento até o monitoramento pós-mercado, integrado ao ciclo de vida
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram 
              chart={usabilityFlow}
              className="min-h-[600px]"
            />
          </CardContent>
        </Card>

        {/* Test Types Comparison */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <PlayCircle className="h-6 w-6 text-primary" />
              Testes Formativos vs Somativos
            </CardTitle>
            <CardDescription>
              Comparação entre os dois tipos de avaliação de usabilidade conforme IEC 62366-1
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspecto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Testes Formativos</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Testes Somativos</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Quando</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Durante desenvolvimento (FASE 2)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Antes do release (FASE 4)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Objetivo</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ajustar design e melhorar interface</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Validar que produto atende critérios</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Responsável</td>
                    <td className="px-6 py-4 text-sm text-gray-700">UX/PO</td>
                    <td className="px-6 py-4 text-sm text-gray-700">QA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Participantes</td>
                    <td className="px-6 py-4 text-sm text-gray-700">3-5 usuários representativos</td>
                    <td className="px-6 py-4 text-sm text-gray-700">8-12 usuários representativos</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Material</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Protótipos (baixa/alta fidelidade)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Produto final funcional</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Critérios</td>
                    <td className="px-6 py-4 text-sm text-gray-700">≥80% conclusão de tarefas críticas</td>
                    <td className="px-6 py-4 text-sm text-gray-700">≥90% conclusão, &lt;5% erros críticos</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Resultado</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Feedback para ajustes de design</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Relatório de usabilidade aprovado</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Registro</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Azure Boards (Work Item)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Azure Test Plans + SharePoint</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Etapas Detalhadas do Processo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                <h3 className="font-semibold text-pink-800 mb-2 flex items-center gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold">1</span>
                  Análise de Usuário e Tarefas (FASE 1)
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  O PO define no Work Item do Azure DevOps: <strong>Perfil de Usuário</strong> (categoria, experiência, contexto) 
                  e <strong>Tarefas Principais</strong> (identificação, frequência, criticidade).
                </p>
                <div className="mt-2 text-xs text-gray-600">
                  <strong>Artefato:</strong> Work Item com campos customizados de usabilidade
                </div>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">2</span>
                  Análise de Erro de Uso (uFMEA) (FASE 1)
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  UX realiza análise de erro de uso identificando onde o usuário pode errar e causar dano. 
                  Riscos de usabilidade são registrados como Work Items tipo "Risk" vinculados ao requisito.
                </p>
                <div className="mt-2 text-xs text-gray-600">
                  <strong>Artefato:</strong> uFMEA documentado no Azure DevOps (Work Item com campos customizados)
                </div>
                <Link href="/riscos" className="mt-2 inline-block">
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-orange-100">
                    Ver Gestão de Riscos
                  </Badge>
                </Link>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">3</span>
                  Testes Formativos (FASE 2)
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  UX realiza testes iterativos durante o desenvolvimento com 3-5 usuários representativos usando protótipos. 
                  Feedback é registrado no Azure Boards e ajustes são implementados antes da codificação final.
                </p>
                <div className="mt-2 text-xs text-gray-600">
                  <strong>Critério:</strong> ≥80% de conclusão de tarefas críticas
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">4</span>
                  Testes Somativos (FASE 4)
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  QA executa testes com 8-12 usuários representativos usando o produto final. Cenários baseados em tarefas principais. 
                  Resultados registrados no Azure Test Plans e relatório gerado para aprovação.
                </p>
                <div className="mt-2 text-xs text-gray-600">
                  <strong>Critérios:</strong> ≥90% conclusão, &lt;5% erros críticos, satisfação ≥70 (SUS)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration with Risk Management */}
        <Card className="mb-8 border-2 border-orange-200 bg-orange-50/30">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Integração com Gestão de Riscos</h3>
                <p className="text-sm text-gray-700 mb-3">
                  A Engenharia de Usabilidade (IEC 62366-1) alimenta diretamente o processo de Gestão de Riscos (ISO 14971:2019). 
                  Erros de uso identificados no uFMEA são tratados como <strong>Riscos de Usabilidade</strong> e devem ser mitigados 
                  através do design da interface, medidas de proteção ou informações de segurança.
                </p>
                <div className="flex gap-2">
                  <Link href="/riscos">
                    <Badge variant="outline" className="cursor-pointer hover:bg-orange-100">Ver Gestão de Riscos</Badge>
                  </Link>
                  <Link href="/documentos/sop-002-risk-management">
                    <Badge variant="outline" className="cursor-pointer hover:bg-orange-100">Ver SOP-002</Badge>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Documentos Relacionados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/documentos/iec-62366-1"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">IEC 62366-1:2015 - Engenharia de Usabilidade</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Norma completa de aplicação de engenharia de usabilidade a dispositivos médicos.
                </p>
                <Badge variant="outline" className="text-xs">Norma Regulatória</Badge>
              </Link>
              
              <Link 
                href="/documentos/sop-004-verification-validation"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">SOP-004: Verificação e Validação</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Procedimento de testes de usabilidade (formativos e somativos) integrado ao processo de V&V.
                </p>
                <Badge variant="outline" className="text-xs">Procedimento Operacional</Badge>
              </Link>

              <Link 
                href="/documentos/sop-002-risk-management"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">SOP-002: Gestão de Riscos</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Inclui gestão de riscos de usabilidade e integração com uFMEA.
                </p>
                <Badge variant="outline" className="text-xs">Procedimento Operacional</Badge>
              </Link>

              <Link 
                href="/ferramentas/azure-devops"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">Azure DevOps - Campos Customizados</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Work Items customizados no Azure DevOps com campos para Perfil de Usuário e Tarefas Principais (IEC 62366).
                </p>
                <Badge variant="outline" className="text-xs">Ferramenta</Badge>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Key Principles */}
        <Card className="border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Princípios da Engenharia de Usabilidade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Usuário no Centro
                </h3>
                <p className="text-sm text-gray-600">
                  Todo o processo é orientado pelas necessidades, características e limitações dos usuários reais do dispositivo médico.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Iteração e Melhoria
                </h3>
                <p className="text-sm text-gray-600">
                  Testes formativos permitem ajustes contínuos durante o desenvolvimento, evitando problemas no produto final.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Segurança por Design
                </h3>
                <p className="text-sm text-gray-600">
                  Riscos de erro de uso são identificados e mitigados através do design, não apenas através de treinamento ou documentação.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Evidência de Conformidade
                </h3>
                <p className="text-sm text-gray-600">
                  Todo o processo é documentado e rastreável, gerando evidências para auditorias regulatórias.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

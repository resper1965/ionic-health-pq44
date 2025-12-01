'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, FileText, ExternalLink, Shield, GitBranch } from 'lucide-react'
import Link from 'next/link'
import { getSlugFromPath } from '@/lib/document-slugs'
import { MermaidDiagram } from '@/components/MermaidDiagram'

const riskAcceptanceFlow = `flowchart TD
    A[Risco Identificado] --> B{RPN Calculado}
    B --> C{RPN < 5?}
    C -->|Sim| D[✅ Aceitação Automática<br/>QA Leader]
    C -->|Não| E{RPN 5-19?}
    E -->|Sim| F[Análise Benefício/Risco<br/>QA Leader + PO/Clínico]
    E -->|Não| G{RPN 20-50?}
    G -->|Sim| H[Análise Benefício/Risco<br/>QA Leader + PO/Clínico + Diretor Médico]
    G -->|Não| I{RPN > 50?}
    I -->|Sim| J[Mitigação Obrigatória<br/>NÃO PODE SER ACEITO]
    I -->|Não| K[Erro: RPN fora do range]

    D --> L(Risco Aceito)
    F --> M{Aceito?}
    H --> N{Aceito?}

    M -->|Sim| L
    M -->|Não| O[Revisar Mitigação]
    N -->|Sim| L
    N -->|Não| O

    L --> P[Monitoramento Contínuo]
    O --> B
`

export default function RiscosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Gestão de Riscos
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Processo completo de identificação, análise, mitigação e aceitação de riscos (Safety, Security, Usability) conforme ISO 14971:2019.
          </p>
        </div>

        {/* Process Overview */}
        <Card className="mb-8 border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Processo de Gestão de Riscos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              A gestão de riscos é realizada durante a <strong>FASE 1 (Planejamento)</strong>, onde cada requisito é analisado 
              quanto a três tipos de riscos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Safety Risks</h3>
                <p className="text-sm text-red-700">Riscos de segurança do paciente (dano físico, morte).</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Security Risks</h3>
                <p className="text-sm text-blue-700">Riscos de segurança da informação (acesso não autorizado, perda de dados).</p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Usability Risks</h3>
                <p className="text-sm text-purple-700">Riscos de erro de uso (interface confusa, feedback insuficiente).</p>
              </div>
            </div>
            <Link 
              href="/documentos/sop-002-risk-management"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium mt-4"
            >
              Ver SOP-002: Gestão de Riscos <ExternalLink className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        {/* Risk Acceptance Flow */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-primary" />
              Fluxo de Aceitação de Riscos
            </CardTitle>
            <CardDescription>
              Processo de decisão baseado em RPN (Risk Priority Number) conforme ISO 14971:2019
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 mb-2">
                <strong>RPN (Risk Priority Number)</strong> = Severidade × Probabilidade × Detectabilidade
              </p>
              <p className="text-xs text-gray-600">
                Escala de 1-5 para cada fator. RPN máximo = 125 (5 × 5 × 5)
              </p>
            </div>
            <MermaidDiagram chart={riskAcceptanceFlow} />
          </CardContent>
        </Card>

        {/* RPN Calculation */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Cálculo do RPN</CardTitle>
            <CardDescription>Escalas de avaliação para cada fator do RPN</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Severidade (S) - Impacto do Dano</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                  {[
                    { level: 5, label: 'Catastrófico', desc: 'Morte ou dano permanente' },
                    { level: 4, label: 'Crítico', desc: 'Lesão grave' },
                    { level: 3, label: 'Moderado', desc: 'Lesão temporária' },
                    { level: 2, label: 'Menor', desc: 'Desconforto' },
                    { level: 1, label: 'Negligível', desc: 'Sem impacto' }
                  ].map((item) => (
                    <div key={item.level} className="p-3 border border-gray-200 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{item.level}</div>
                      <div className="text-xs font-semibold text-gray-700 mt-1">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Probabilidade (P) - Frequência de Ocorrência</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                  {[
                    { level: 5, label: 'Muito Provável', desc: 'Ocorrerá frequentemente' },
                    { level: 4, label: 'Provável', desc: 'Ocorrerá ocasionalmente' },
                    { level: 3, label: 'Possível', desc: 'Pode ocorrer' },
                    { level: 2, label: 'Improvável', desc: 'Pouco provável' },
                    { level: 1, label: 'Remoto', desc: 'Muito improvável' }
                  ].map((item) => (
                    <div key={item.level} className="p-3 border border-gray-200 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{item.level}</div>
                      <div className="text-xs font-semibold text-gray-700 mt-1">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Detectabilidade (D) - Facilidade de Detecção</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                  {[
                    { level: 5, label: 'Não Detectável', desc: 'Quase impossível detectar' },
                    { level: 4, label: 'Baixa', desc: 'Difícil de detectar' },
                    { level: 3, label: 'Média', desc: 'Possível detectar' },
                    { level: 2, label: 'Alta', desc: 'Fácil de detectar' },
                    { level: 1, label: 'Quase Certa', desc: 'Sempre detectado' }
                  ].map((item) => (
                    <div key={item.level} className="p-3 border border-gray-200 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{item.level}</div>
                      <div className="text-xs font-semibold text-gray-700 mt-1">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  ))}
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
                href="/documentos/sop-002-risk-management"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">SOP-002: Gestão de Riscos</h3>
                <p className="text-sm text-gray-600 mb-2">Procedimento completo de gestão de riscos conforme ISO 14971:2019.</p>
                <Badge variant="outline" className="text-xs">Procedimento Operacional</Badge>
              </Link>
              
              <Link 
                href="/documentos/risk-acceptance-plan"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">Plano de Aceitação de Riscos</h3>
                <p className="text-sm text-gray-600 mb-2">Processo formal de aceitação de riscos residuais, critérios e aprovações.</p>
                <Badge variant="outline" className="text-xs">Plano</Badge>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Integration */}
        <Card className="border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Integração com o Processo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Os riscos são gerenciados através de <strong>Work Items no Azure DevOps</strong>, vinculados aos requisitos 
              através da relação "Mitigates". Todo o processo é rastreável e documentado.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Riscos são criados como Work Items tipo "Risk" no Azure DevOps</li>
              <li>Cada risco é vinculado ao requisito que mitiga através da relação "Mitigates"</li>
              <li>RPN e estratégias de mitigação são documentadas nos campos customizados do Work Item</li>
              <li>Riscos aceitos são documentados no SharePoint com justificativas e aprovações</li>
              <li>Rastreabilidade completa: Requisito → Risco → Mitigação → Aceitação</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

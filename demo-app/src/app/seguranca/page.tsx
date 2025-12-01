'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/MermaidDiagram'
import { Shield, FileText, ExternalLink, Lock, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function SegurancaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Lock className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Gestão de Segurança
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Processo centralizado de gestão de vulnerabilidades usando OWASP DefectDojo como Fonte da Verdade de Segurança, 
            conforme ISO/IEC 27001:2022 e ISO/IEC 27701:2019.
          </p>
        </div>

        {/* Architecture Overview */}
        <Card className="mb-8 border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Arquitetura: DefectDojo como Fonte da Verdade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              O <strong>OWASP DefectDojo</strong> é a única fonte de verdade para vulnerabilidades, centralizando todos 
              os achados de segurança, deduplicando automaticamente e gerenciando o ciclo de vida completo.
            </p>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 font-mono text-sm">
              <div className="space-y-2">
                <div>Pipeline CI/CD → Scanners (SAST/SCA/DAST) → DefectDojo API</div>
                <div className="pl-8">↓</div>
                <div className="pl-8">Deduplicação Automática</div>
                <div className="pl-8">↓</div>
                <div className="pl-8">Gestão de Ciclo de Vida</div>
                <div className="pl-8">↓</div>
                <div>Azure DevOps ← Work Items ← DefectDojo</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Scans */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Scans de Segurança Automatizados
            </CardTitle>
            <CardDescription>
              Executados durante a FASE 3 (Verificação Automatizada)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">SAST</Badge>
                  <span className="font-semibold text-gray-800">SonarCloud</span>
                </div>
                <p className="text-sm text-gray-600">
                  Static Application Security Testing. Análise estática do código-fonte para identificar vulnerabilidades.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">SCA</Badge>
                  <span className="font-semibold text-gray-800">Trivy</span>
                </div>
                <p className="text-sm text-gray-600">
                  Software Composition Analysis. Varredura de bibliotecas e dependências para identificar CVEs conhecidas.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">DAST</Badge>
                  <span className="font-semibold text-gray-800">OWASP ZAP</span>
                </div>
                <p className="text-sm text-gray-600">
                  Dynamic Application Security Testing. Testes de segurança em aplicação em execução.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Severity Levels */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Classificação de Severidade e SLAs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severidade</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CVSS Score</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SLA de Correção</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bloqueio de Pipeline</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-red-500 text-white">Crítico</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">9.0 - 10.0</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">24 horas (Hotfix)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">SIM - Pipeline FALHA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-orange-500 text-white">Alto</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">7.0 - 8.9</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">7 dias</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">SIM - Pipeline FALHA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-yellow-500 text-gray-900">Médio</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">4.0 - 6.9</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">30 dias</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Não</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className="bg-green-500 text-white">Baixo</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">0.1 - 3.9</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Próxima release</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Não</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Process Flow Diagram */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Fluxo de Gestão de Vulnerabilidades
            </CardTitle>
            <CardDescription>
              Diagrama completo do processo de gestão de vulnerabilidades desde a identificação até o monitoramento contínuo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram 
              chart={`flowchart TD
    Start([Início do Processo]) --> Identify[Identificação<br/>FASE 3: Pipeline CI/CD]
    
    Identify --> Scan1[SAST: SonarCloud<br/>Análise Estática]
    Identify --> Scan2[SCA: Trivy<br/>Bibliotecas e Dependências]
    Identify --> Scan3[DAST: OWASP ZAP<br/>Aplicação em Runtime]
    
    Scan1 --> Ingest1[Ingestão DefectDojo<br/>Script defectdojo-ingest.sh]
    Scan2 --> Ingest1
    Scan3 --> Ingest1
    
    Ingest1 --> Dedup[Deduplicação Automática<br/>DefectDojo identifica duplicatas]
    Dedup --> Classify[Classificação<br/>Por Severidade CVSS]
    
    Classify --> Critical{Vulnerabilidade<br/>Crítica/Alta?}
    
    Critical -->|Sim| Block[❌ Pipeline Bloqueado<br/>Exit Code 1]
    Block --> CreateBug[DefectDojo → Azure DevOps<br/>Bug Criado Automaticamente]
    CreateBug --> Assign[Atribuído ao<br/>Desenvolvedor]
    
    Critical -->|Não| Continue[✅ Pipeline Continua]
    
    Classify --> Triage[Triagem<br/>AppSec/QA]
    Triage --> Decision{True Positive<br/>ou False Positive?}
    
    Decision -->|False Positive| MarkFP[Marcar False Positive<br/>Não Impacta Métricas]
    Decision -->|True Positive| PushADO[Push para Azure DevOps<br/>Criar Bug Work Item]
    
    PushADO --> Assign
    Assign --> Fix[Desenvolvedor Corrige<br/>Código]
    Fix --> Commit[Commit com Referência<br/>ao Work Item]
    Commit --> NewScan[Novo Scan Executado]
    NewScan --> AutoClose[Auto-Close<br/>DefectDojo fecha como Mitigated]
    
    Continue --> Monitor[Monitoramento Contínuo<br/>FASE 5]
    AutoClose --> Monitor
    
    Monitor --> DailyScan[Scan Diário<br/>Trivy em Imagens Produção]
    DailyScan --> DailyIngest[Ingestão Diária<br/>DefectDojo]
    DailyIngest --> Triage
    
    style Start fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Identify fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Block fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style Continue fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style AutoClose fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Critical fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Decision fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Dedup fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff
    style Monitor fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`}
              className="min-h-[600px]"
            />
          </CardContent>
        </Card>

        {/* Process Steps */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Processo de Gestão de Vulnerabilidades - Etapas Detalhadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">1. Identificação (FASE 3)</h3>
                <p className="text-sm text-gray-700">
                  Pipeline executa scans (SAST/SCA/DAST) e envia resultados via API para DefectDojo.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">2. Deduplicação Automática</h3>
                <p className="text-sm text-gray-700">
                  DefectDojo identifica automaticamente se a vulnerabilidade é nova ou recorrente (mesma CVE/CWE).
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">3. Triagem e Classificação</h3>
                <p className="text-sm text-gray-700">
                  Vulnerabilidades são classificadas por severidade e vinculadas a Work Items no Azure DevOps.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">4. Correção</h3>
                <p className="text-sm text-gray-700">
                  Desenvolvedor corrige o código e commit é feito com referência ao Work Item.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">5. Auto-Close (Mitigated)</h3>
                <p className="text-sm text-gray-700">
                  Pipeline detecta correção, envia novo scan para DefectDojo, que fecha automaticamente o finding como "Mitigated".
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">6. Monitoramento Contínuo</h3>
                <p className="text-sm text-gray-700">
                  Scan diário de imagens de produção (Trivy) para detectar vulnerabilidades em runtime.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Documentos Relacionados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/documentos/sop-003-vulnerability-management"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">SOP-003: Gestão de Vulnerabilidades</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Procedimento completo de gestão centralizada de vulnerabilidades usando DefectDojo.
                </p>
                <Badge variant="outline" className="text-xs">Procedimento Operacional</Badge>
              </Link>
              
              <Link 
                href="/documentos/automated-processes"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">Processos Automatizados</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Lista completa de processos automatizados, incluindo scans de segurança e integrações.
                </p>
                <Badge variant="outline" className="text-xs">Processos</Badge>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

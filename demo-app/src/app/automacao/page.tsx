'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/MermaidDiagram'
import { Settings, Play, AlertCircle, Clock, Zap, Shield, GitBranch, FileCheck } from 'lucide-react'

interface AutomatedProcess {
  id: string
  title: string
  phase: string
  description: string
  trigger: string
  evidence: string
  status: 'active' | 'scheduled' | 'on-demand'
  icon: React.ReactNode
  flowDiagram?: string
}

const automatedProcesses: AutomatedProcess[] = [
  {
    id: 'pre-commit',
    title: 'Pre-commit Hooks',
    phase: 'FASE 2',
    description: 'Validações automáticas antes do commit (linting, formatação, detecção de secrets, validação Terraform)',
    trigger: 'git commit (local)',
    evidence: 'Commits aceitos = código validado',
    status: 'active',
    icon: <GitBranch className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart LR
    A[Git Commit] --> B{Pre-commit<br/>Hooks}
    B -->|Pass| C[✅ Commit<br/>Aceito]
    B -->|Fail| D[❌ Commit<br/>Rejeitado]
    D --> E[Corrigir<br/>Issues]
    E --> A`
  },
  {
    id: 'pr-validation',
    title: 'Validação Automática de Pull Request',
    phase: 'FASE 2',
    description: 'Bloqueio automático se Work Item não vinculado, sem 2 reviews ou build falhou',
    trigger: 'Criação/atualização de PR',
    evidence: 'Azure DevOps → PR → Checks',
    status: 'active',
    icon: <FileCheck className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart TD
    A[Pull Request<br/>Criado] --> B{Work Item<br/>Vinculado?}
    B -->|Não| C[❌ PR Bloqueado]
    B -->|Sim| D{2 Reviews<br/>Aprovados?}
    D -->|Não| C
    D -->|Sim| E{Build<br/>Passou?}
    E -->|Não| C
    E -->|Sim| F[✅ PR Aprovado]
    F --> G[Merge em develop]`
  },
  {
    id: 'pipeline-cicd',
    title: 'Pipeline CI/CD Completo',
    phase: 'FASE 3',
    description: 'Pipeline automatizado com 6 stages: Build, SAST, SCA, Security Validation, Deploy Staging, DAST',
    trigger: 'Push para develop/release ou Pull Request',
    evidence: 'Azure DevOps → Pipelines → Runs',
    status: 'active',
    icon: <Play className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart TD
    A[Push/PR] --> B[Stage 1:<br/>Build & Testes]
    B --> C[Stage 2:<br/>SAST SonarCloud]
    C --> D[Stage 3:<br/>SCA Trivy]
    D --> E[Stage 4:<br/>Security Gate]
    E -->|Pass| F[Stage 5:<br/>Deploy Staging]
    E -->|Fail| G[❌ Pipeline<br/>Bloqueado]
    F --> H[Stage 6:<br/>DAST OWASP ZAP]
    H --> I[✅ Pipeline<br/>Completo]`
  },
  {
    id: 'defectdojo-ingest',
    title: 'Ingestão Automática no DefectDojo',
    phase: 'FASE 3',
    description: 'Script envia relatórios SAST/SCA/DAST para DefectDojo API, com deduplicação e auto-close automático',
    trigger: 'Após cada scan no pipeline',
    evidence: 'DefectDojo → Engagements → Findings',
    status: 'active',
    icon: <Shield className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart LR
    A[Scan<br/>Completo] --> B[Script<br/>defectdojo-ingest.sh]
    B --> C[DefectDojo<br/>API]
    C --> D{Deduplicação<br/>Automática}
    D --> E{Nova<br/>Vulnerabilidade?}
    E -->|Sim| F[Novo Finding<br/>Criado]
    E -->|Não| G[Duplicado<br/>Marcado]
    D --> H{Corrigida?}
    H -->|Sim| I[Auto-Close<br/>Mitigated]
    H -->|Não| J[Finding<br/>Ativo]`
  },
  {
    id: 'security-gate',
    title: 'Gate de Segurança e Bloqueio de Pipeline',
    phase: 'FASE 3',
    description: 'Script verifica DefectDojo para vulnerabilidades críticas/altas e bloqueia pipeline automaticamente',
    trigger: 'Stage SecurityValidation do pipeline',
    evidence: 'Azure DevOps → Pipeline → Stage SecurityValidation → Logs',
    status: 'active',
    icon: <AlertCircle className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart TD
    A[Security<br/>Validation] --> B[Script<br/>defectdojo-check.sh]
    B --> C{Consultar<br/>DefectDojo}
    C --> D{Vulnerabilidades<br/>Críticas/Altas?}
    D -->|0 vulns| E[✅ Pipeline<br/>Continua]
    D -->|1+ vulns| F[❌ Pipeline<br/>Bloqueado]
    F --> G[Corrigir<br/>Vulnerabilidades]
    G --> A`
  },
  {
    id: 'daily-scan',
    title: 'Scan Diário Automatizado',
    phase: 'FASE 5',
    description: 'Pipeline agendado executa Trivy scan diariamente nas imagens de produção e envia para DefectDojo',
    trigger: 'Scheduled (diariamente às 02:00 UTC)',
    evidence: 'DefectDojo → Findings → Source = Daily Scan',
    status: 'scheduled',
    icon: <Clock className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart LR
    A[Cron Schedule<br/>02:00 UTC] --> B[Pipeline<br/>Triggered]
    B --> C[Trivy Scan<br/>Produção]
    C --> D[Relatório<br/>Gerado]
    D --> E[Ingestão<br/>DefectDojo]
    E --> F[Findings<br/>Disponíveis]
    F --> G[Triagem<br/>AppSec/QA]`
  },
  {
    id: 'sentinel-monitoring',
    title: 'Monitoramento SIEM (Azure Sentinel)',
    phase: 'FASE 5',
    description: 'Monitoramento contínuo 24/7 de incidentes, alertas automáticos e criação de incidentes',
    trigger: 'Contínuo (24/7)',
    evidence: 'Azure Sentinel → Incidents / Alerts',
    status: 'active',
    icon: <Zap className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart TD
    A[Monitoramento<br/>24/7] --> B{Detecção<br/>de Incidente}
    B -->|Sim| C[Alerta<br/>Gerado]
    B -->|Não| A
    C --> D[Incidente<br/>Criado]
    D --> E[Análise<br/>Automática]
    E --> F[Notificação<br/>AppSec]`
  },
  {
    id: 'dhf-generation',
    title: 'Geração Automática do DHF',
    phase: 'FASE 4',
    description: 'Script gera Matriz de Rastreabilidade, Certificado de Segurança e DHF completo automaticamente',
    trigger: 'Execução manual antes do release',
    evidence: 'Diretório de saída com arquivos Markdown',
    status: 'on-demand',
    icon: <FileCheck className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart TD
    A[Script<br/>generate-dhf.sh] --> B[Gerar Matriz<br/>Rastreabilidade]
    B --> C[Consultar<br/>DefectDojo API]
    C --> D[Gerar Certificado<br/>Segurança]
    D --> E{Vulns<br/>Críticas/Altas?}
    E -->|Sim| F[❌ Script<br/>Falha]
    E -->|Não| G[✅ Certificado<br/>Aprovado]
    G --> H[Gerar DHF<br/>Completo]
    H --> I[Arquivos<br/>Markdown]`
  },
  {
    id: 'mds2-generation',
    title: 'Geração Automática do MDS2 Form',
    phase: 'FASE 4',
    description: 'Script gera MDS2 Form (Medical Device Software) automaticamente a partir de dados do Azure DevOps via APIs',
    trigger: 'Pipeline FASE 4 - Após validações',
    evidence: 'SharePoint → DHF → R54.1-MDS2-vX.Y.Z.xlsx',
    status: 'on-demand',
    icon: <FileCheck className="h-5 w-5 text-primary" />,
    flowDiagram: `flowchart TD
    A[Pipeline FASE 4<br/>Após Testes] --> B[Script Geração<br/>MDS2]
    B --> C[Coletar Dados<br/>via APIs]
    C --> D[Azure Repos API<br/>Info Produto, Dependências]
    C --> E[Azure Boards API<br/>Riscos, Requisitos]
    C --> F[Azure Test Plans API<br/>Resultados Testes]
    C --> G[DefectDojo API<br/>Vulnerabilidades]
    C --> H[SharePoint API<br/>Documentação]
    D --> I[Consolidar Dados]
    E --> I
    F --> I
    G --> I
    H --> I
    I --> J[Preencher Template<br/>Excel MDS2]
    J --> K[QA Leader<br/>Revisa]
    K --> L{Aprovado?}
    L -->|Não| M[Ajustes Manuais]
    M --> K
    L -->|Sim| N[Upload Automático<br/>SharePoint]
    N --> O[✅ MDS2 Parte<br/>do DHF]`
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge variant="success">Ativo</Badge>
    case 'scheduled':
      return <Badge variant="warning">Agendado</Badge>
    case 'on-demand':
      return <Badge variant="secondary">Sob Demanda</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function AutomacaoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Settings className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Processos Automatizados
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Compliance as Code: Barreiras técnicas automatizadas garantindo conformidade regulatória
          </p>
        </div>

        {/* Summary Card */}
        <Card className="mb-12 border-cyan shadow-lg">
          <CardContent className="p-6">
            {(() => {
              const total = automatedProcesses.length
              const triggerBased = automatedProcesses.filter(p => 
                p.trigger.toLowerCase().includes('trigger') || 
                p.trigger.toLowerCase().includes('push') || 
                p.trigger.toLowerCase().includes('pr') || 
                p.trigger.toLowerCase().includes('commit') || 
                p.trigger.toLowerCase().includes('scheduled') || 
                p.trigger.toLowerCase().includes('cron') ||
                p.trigger.toLowerCase().includes('contínuo') ||
                p.trigger.toLowerCase().includes('24/7') ||
                p.trigger.toLowerCase().includes('diariamente')
              ).length
              const humanDemand = automatedProcesses.filter(p => 
                p.trigger.toLowerCase().includes('manual') || 
                p.trigger.toLowerCase().includes('execução manual') ||
                p.trigger.toLowerCase().includes('sob demanda') ||
                p.status === 'on-demand'
              ).length

              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{total}</div>
                    <div className="text-sm text-gray-600">Total de Processos Automatizados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{triggerBased}</div>
                    <div className="text-sm text-gray-600">Iniciam Sob Trigger Automático</div>
                    <div className="text-xs text-gray-500 mt-1">
                      (Push, PR, Commit, Scheduled, Contínuo)
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{humanDemand}</div>
                    <div className="text-sm text-gray-600">Iniciam por Demanda Humana</div>
                    <div className="text-xs text-gray-500 mt-1">
                      (Execução manual, sob demanda)
                    </div>
                  </div>
                </div>
              )
            })()}
          </CardContent>
        </Card>

        {/* Processes by Phase */}
        <div className="space-y-12">
          {['FASE 1', 'FASE 2', 'FASE 3', 'FASE 4', 'FASE 5'].map((phase) => {
            const phaseProcesses = automatedProcesses.filter(p => p.phase === phase)
            if (phaseProcesses.length === 0) return null

            return (
              <div key={phase}>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
                    {phase.split(' ')[1]}
                  </div>
                  {phase}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {phaseProcesses.map((process) => (
                    <Card key={process.id} className="border-cyan shadow-lg hover:shadow-xl transition-smooth">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                              {process.icon}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-1">{process.title}</CardTitle>
                              <CardDescription>{process.description}</CardDescription>
                            </div>
                          </div>
                          {getStatusBadge(process.status)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-gray-700 mb-1">Trigger:</div>
                            <div className="text-gray-600">{process.trigger}</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700 mb-1">Evidência:</div>
                            <div className="text-gray-600">{process.evidence}</div>
                          </div>
                        </div>

                        {process.flowDiagram && (
                          <div className="mt-4">
                            <div className="text-sm font-semibold text-gray-700 mb-2">Fluxo do Processo:</div>
                            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                              <MermaidDiagram chart={process.flowDiagram} />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Pipeline Flow - Full */}
        <Card className="mt-12 border-2 border-primary/20 shadow-cyan-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Pipeline CI/CD Completo - Fluxo Detalhado</CardTitle>
            <CardDescription>
              Visualização end-to-end de todos os stages e gates do pipeline automatizado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram 
              chart={`flowchart TD
    Start([Push/PR Criado]) --> Stage1[Stage 1: Build & Testes Unitários]
    Stage1 --> TestGate{100%<br/>Pass Rate?}
    TestGate -->|Não| Fail1[❌ Pipeline Falha]
    TestGate -->|Sim| Stage2[Stage 2: SAST SonarCloud]
    Stage2 --> SastGate{Quality<br/>Gate A?}
    SastGate -->|Não| Fail1
    SastGate -->|Sim| Stage3[Stage 3: SCA Trivy]
    Stage3 --> Ingest1[Ingestão<br/>DefectDojo SCA]
    Ingest1 --> Stage4[Stage 4: Security Gate]
    Stage4 --> CheckDefectDojo{Consultar<br/>DefectDojo}
    CheckDefectDojo --> VulnGate{Vulns<br/>Críticas/Altas?}
    VulnGate -->|Sim| Fail1
    VulnGate -->|Não| Stage5[Stage 5: Deploy Staging]
    Stage5 --> Stage6[Stage 6: DAST OWASP ZAP]
    Stage6 --> Ingest2[Ingestão<br/>DefectDojo DAST]
    Ingest2 --> FinalCheck{DAST<br/>Vulns?}
    FinalCheck -->|Sim| Fail1
    FinalCheck -->|Não| Success[✅ Pipeline Pass<br/>Pronto para Release]
    
    style Stage1 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Stage2 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Stage3 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Stage4 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Stage5 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Stage6 fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style Success fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Fail1 fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style TestGate fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style SastGate fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style VulnGate fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style FinalCheck fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff`}
              className="min-h-[600px]"
            />
          </CardContent>
        </Card>

        {/* Integration Diagram */}
        <Card className="mt-12 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Integrações Automatizadas</CardTitle>
            <CardDescription>
              Fluxo de dados entre ferramentas automatizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram 
              chart={`graph TB
    subgraph Dev["👨‍💻 DESENVOLVIMENTO"]
        A[Git Commit<br/>Pre-commit Hooks]
        B[Pull Request]
    end
    
    subgraph Pipeline["⚙️ PIPELINE CI/CD"]
        C[Build & Testes]
        D[SAST SonarCloud]
        E[SCA Trivy]
        F[DAST OWASP ZAP]
    end
    
    subgraph Security["🔒 DEFECTDOJO"]
        G[Ingestão<br/>Automática]
        H[Deduplicação]
        I[Auto-Close]
        J[Security Gate]
    end
    
    subgraph Monitor["📊 MONITORAMENTO"]
        K[Scan Diário<br/>Trivy]
        L[Azure Sentinel<br/>SIEM]
    end
    
    A --> B
    B --> C
    C --> D
    D --> E
    E --> G
    F --> G
    G --> H
    H --> I
    H --> J
    J -->|Bloqueio| B
    K --> G
    L --> M[Alertas<br/>Automáticos]
    
    style A fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style G fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style J fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff`}
              className="min-h-[500px]"
            />
          </CardContent>
        </Card>

        {/* Reference Link */}
        <Card className="mt-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Documentação Completa
                </h3>
                <p className="text-sm text-gray-600">
                  Para detalhes completos de todos os processos automatizados, consulte a documentação técnica.
                </p>
              </div>
              <a
                href="https://github.com/resper1965/ionic-health-pq44/blob/main/docs/AUTOMATED-PROCESSES.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-smooth shadow-cyan"
              >
                Ver Documentação
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


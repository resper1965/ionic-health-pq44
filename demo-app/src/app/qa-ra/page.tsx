'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/MermaidDiagram'
import { FileCheck, Shield, AlertCircle, ExternalLink, FileText, GitBranch, CheckCircle2, XCircle, Link2 } from 'lucide-react'
import Link from 'next/link'

const securityGateToDastFlow = `flowchart TD
    Start[Gate de Segurança<br/>Após SCA/SAST] --> CheckDefectDojo[Script defectdojo-check.sh<br/>Consulta DefectDojo API]
    CheckDefectDojo --> QueryVulns{Buscar Vulnerabilidades<br/>Críticas/Altas Ativas}
    QueryVulns --> FilterBranch[Filtrar por Branch Atual<br/>develop/release/main]
    FilterBranch --> CountVulns[Contar Findings Ativos<br/>Severidade: Critical + High]
    CountVulns --> Decision1{Vulnerabilidades<br/>Críticas/Altas?}
    
    Decision1 -->|Sim: 1+ vulns| Block[❌ Pipeline Bloqueado<br/>Exit Code: 1]
    Block --> NotifyDev[Notificação Dev Team<br/>Azure DevOps]
    NotifyDev --> CreateBug[DefectDojo → ADO<br/>Bug Criado Automaticamente]
    CreateBug --> DevFixes[Dev Team Corrige<br/>Vulnerabilidades]
    DevFixes --> NewPR[Nova Pull Request<br/>com Correções]
    NewPR --> Start
    
    Decision1 -->|Não: 0 vulns| PassGate[✅ Gate de Segurança<br/>APROVADO]
    PassGate --> DeployStaging[Deploy para Staging<br/>Ambiente de Testes]
    DeployStaging --> SmokeTests[Smoke Tests E2E<br/>Playwright]
    SmokeTests --> SmokeDecision{100% Pass?}
    
    SmokeDecision -->|Não| SmokeFail[❌ Pipeline Bloqueado]
    SmokeFail --> DevFixes
    
    SmokeDecision -->|Sim| SanityTests[Sanity Tests E2E<br/>Playwright]
    SanityTests --> SanityDecision{100% Pass?}
    
    SanityDecision -->|Não| SanityFail[❌ Pipeline Bloqueado]
    SanityFail --> DevFixes
    
    SanityDecision -->|Sim| E2ETests[E2E Tests<br/>Fluxos Críticos<br/>Playwright]
    E2ETests --> E2EDecision{100% Pass<br/>Fluxos Críticos?}
    
    E2EDecision -->|Não| E2EWarn[⚠️ Aviso Registrado<br/>Pipeline Continua]
    E2EWarn --> DASTStart
    E2EDecision -->|Sim| DASTStart[DAST: OWASP ZAP<br/>Dynamic Scan Iniciado]
    
    DASTStart --> ZAPScan[ZAP Baseline Scan<br/>Container Docker]
    ZAPScan --> ZAPReport[Relatório ZAP Gerado<br/>zap-report.json]
    ZAPReport --> IngestDAST[Script defectdojo-ingest.sh<br/>Ingestão DAST]
    IngestDAST --> DefectDojoAPI[DefectDojo API<br/>Recebe Relatório DAST]
    DefectDojoAPI --> ProcessDAST[Processamento<br/>Deduplicação Automática]
    ProcessDAST --> DASTFindings[Findings DAST<br/>Criados/Atualizados]
    DASTFindings --> DASTGate[Security Gate Check<br/>Consulta DefectDojo]
    DASTGate --> QueryDASTVulns{Buscar Vulnerabilidades<br/>DAST Críticas/Altas}
    QueryDASTVulns --> DASTDecision{Vulnerabilidades<br/>Críticas/Altas<br/>DAST?}
    
    DASTDecision -->|Sim: 1+ vulns| DASTBlock[❌ Pipeline Bloqueado<br/>Exit Code: 1]
    DASTBlock --> NotifyDev
    DASTDecision -->|Não: 0 vulns| DASTPass[✅ DAST APROVADO<br/>Pipeline Pass]
    DASTPass --> ReadyRelease[Pronto para Release<br/>FASE 4]
    
    style Start fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style PassGate fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style DASTPass fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style ReadyRelease fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Block fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style DASTBlock fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style SmokeFail fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style SanityFail fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style Decision1 fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style DASTDecision fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style SmokeDecision fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style SanityDecision fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style E2EDecision fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style E2EWarn fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style DefectDojoAPI fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff
    style ProcessDAST fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff`

const changeManagementFlow = `flowchart TD
    ChangeReq[Change Request<br/>Necessário?] --> ChangeType{Tipo de<br/>Mudança?}
    
    ChangeType -->|Desenvolvimento<br/>FASE 2| DevFlow[Fluxo Normal<br/>Branch feat/ + PR]
    DevFlow --> NoChangeReq[❌ Não Requer<br/>Change Request]
    
    ChangeType -->|Produção<br/>Hotfix/Security| ProdFlow[Change Request<br/>Work Item ADO]
    ChangeType -->|Produção<br/>Feature Nova| ProdFlow
    ChangeType -->|Infraestrutura| ProdFlow
    
    ProdFlow --> AnalyzeImpact[Análise de Impacto<br/>QA Leader + Arquiteto]
    AnalyzeImpact --> RiskAnalysis[Análise de Risco<br/>SOP-002]
    RiskAnalysis --> RegAssessment{Avaliação<br/>Regulatória}
    
    RegAssessment -->|Bug/Segurança<br/>Não Crítico| LTF[Letter to File<br/>LTF Preparado]
    RegAssessment -->|Hotfix Crítico<br/>SLA 24h| EmergencyChange[Change Request<br/>Aprovação Emergencial]
    RegAssessment -->|Feature Nova<br/>Mudança Arquitetural| FullSubmission[Submissão<br/>Regulatória Completa]
    
    LTF --> ApproveLTF[QA Leader<br/>Aprova LTF]
    EmergencyChange --> ApproveEmergency[QA Leader<br/>Aprovação Imediata]
    FullSubmission --> WaitApproval[Aguardar Aprovação<br/>Regulatória]
    
    ApproveLTF --> ImplementChange[Implementação<br/>via Hotfix/Release]
    ApproveEmergency --> ImplementChange
    WaitApproval -->|Aprovado| ImplementChange
    
    ImplementChange --> DeployValidation[Deploy + Validação<br/>Pós-Deploy]
    DeployValidation --> UpdateDocs[Atualizar Documentação<br/>DHF/SharePoint]
    UpdateDocs --> ChangeComplete[✅ Mudança<br/>Completa]
    
    style ChangeReq fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style ChangeComplete fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style NoChangeReq fill:#6b7280,stroke:#4b5563,stroke-width:2px,color:#fff
    style LTF fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style EmergencyChange fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style FullSubmission fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`

export default function QARAPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FileCheck className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              QA & RA
            </h1>
            <Badge variant="secondary" className="text-lg px-3 py-1">Quality Assurance & Regulatory Affairs</Badge>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Detalhamento do processo de verificação entre o Gate de Segurança e a Aprovação do DAST, incluindo gestão de mudanças (GMUD).
          </p>
        </div>

        {/* Security Gate to DAST Flow */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Shield className="h-6 w-6 text-primary" />
              Processo Detalhado: Gate de Segurança → DAST Aprovado
            </CardTitle>
            <CardDescription>
              Fluxo completo com todos os pontos de decisão e caminhos possíveis entre o Gate de Segurança (após SCA/SAST) até a aprovação do DAST.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram chart={securityGateToDastFlow} />
          </CardContent>
        </Card>

        {/* Key Decision Points */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-primary" />
              Pontos de Decisão Críticos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                Gate de Segurança (SCA/SAST) - BLOQUEIO AUTOMÁTICO
              </h3>
              <p className="mb-2">
                Após os scans de SAST (SonarCloud) e SCA (Trivy), o script <code className="bg-gray-100 px-2 py-1 rounded">defectdojo-check.sh</code> consulta o DefectDojo para verificar vulnerabilidades críticas/altas ativas na branch atual.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1">
                <li><strong>Critério:</strong> 0 vulnerabilidades Críticas ou Altas</li>
                <li><strong>Se 1+ vulns encontradas:</strong> Pipeline bloqueado (Exit Code 1), notificação ao Dev Team, Bug criado automaticamente no Azure DevOps</li>
                <li><strong>Se 0 vulns:</strong> Gate aprovado, pipeline continua para Deploy Staging</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Testes E2E em Staging - VALIDAÇÃO CRÍTICA
              </h3>
              <p className="mb-2">
                Após deploy em staging, três níveis de testes E2E são executados sequencialmente:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1">
                <li><strong>Smoke Tests:</strong> Validação básica de sistema (< 2 min). <strong>Bloqueio:</strong> Se falhar, pipeline bloqueado</li>
                <li><strong>Sanity Tests:</strong> Funcionalidades críticas básicas (< 5 min). <strong>Bloqueio:</strong> Se falhar, pipeline bloqueado</li>
                <li><strong>E2E Tests:</strong> Fluxos críticos completos (10-30 min). <strong>Aviso:</strong> Falhas geram notificação mas não bloqueiam pipeline</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                DAST (OWASP ZAP) - VALIDAÇÃO FINAL DE SEGURANÇA
              </h3>
              <p className="mb-2">
                Após todos os testes E2E, o OWASP ZAP executa um scan dinâmico na aplicação em staging:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1">
                <li><strong>Execução:</strong> Container Docker executa <code className="bg-gray-100 px-2 py-1 rounded">zap-baseline.py</code></li>
                <li><strong>Ingestão:</strong> Relatório JSON enviado para DefectDojo via script <code className="bg-gray-100 px-2 py-1 rounded">defectdojo-ingest.sh</code></li>
                <li><strong>Processamento:</strong> DefectDojo deduplica, classifica e cria/atualiza findings</li>
                <li><strong>Gate Final:</strong> Consulta DefectDojo para vulnerabilidades críticas/altas. Se encontrar → Pipeline bloqueado. Se não → DAST Aprovado</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Change Management (GMUD) */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-primary" />
              Gestão de Mudanças (GMUD) - Onde se Encaixa no Processo?
            </CardTitle>
            <CardDescription>
              O processo de Change Management (GMUD) está integrado ao ciclo de vida e ocorre em diferentes momentos dependendo do tipo de mudança.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram chart={changeManagementFlow} />
            
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Mudanças em Desenvolvimento (FASE 2)</h3>
                <p className="text-sm">
                  <strong>Não requer Change Request.</strong> Mudanças normais de desenvolvimento seguem o fluxo padrão: Branch <code className="bg-white px-2 py-1 rounded">feat/WORKITEM-ID</code> → Pull Request → Review → Merge. O controle é feito via PR e histórico Git.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Mudanças em Produção (FASE 5)</h3>
                <p className="text-sm mb-2">
                  <strong>Requer Change Request obrigatório.</strong> Qualquer mudança em produção (hotfix, feature nova, mudança de infraestrutura) deve passar por:
                </p>
                <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                  <li>Change Request criado no Azure DevOps (Work Item)</li>
                  <li>Análise de impacto (QA Leader + Arquiteto)</li>
                  <li>Análise de risco conforme SOP-002</li>
                  <li>Avaliação regulatória (LTF, Submissão completa, ou aprovação emergencial)</li>
                  <li>Aprovação formal do QA Leader</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Tipos de Mudança e Exigências Regulatórias</h3>
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left border-b">Tipo de Mudança</th>
                        <th className="px-4 py-2 text-left border-b">Change Request</th>
                        <th className="px-4 py-2 text-left border-b">Exigência Regulatória</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b">Bug não crítico</td>
                        <td className="px-4 py-2 border-b">Sim (Produção)</td>
                        <td className="px-4 py-2 border-b">Letter to File (LTF)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Hotfix de Segurança (SLA 24h)</td>
                        <td className="px-4 py-2 border-b">Sim (Emergencial)</td>
                        <td className="px-4 py-2 border-b">LTF ou Submissão</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Feature Nova</td>
                        <td className="px-4 py-2 border-b">Sim</td>
                        <td className="px-4 py-2 border-b">Submissão Completa</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">Mudança Arquitetural</td>
                        <td className="px-4 py-2 border-b">Sim</td>
                        <td className="px-4 py-2 border-b">Submissão Completa</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Infraestrutura (IaC)</td>
                        <td className="px-4 py-2">Sim (via Work Item)</td>
                        <td className="px-4 py-2">Conforme tipo de mudança</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Points */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Link2 className="h-6 w-6 text-primary" />
              Pontos de Integração com Outros Processos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Integração com DefectDojo</h3>
              <p className="text-sm mb-2">
                O DefectDojo é a fonte única da verdade para segurança. Ambos os gates (pós-SCA/SAST e pós-DAST) consultam o DefectDojo para verificar vulnerabilidades ativas.
              </p>
              <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                <li>Ingestão automática de relatórios SAST, SCA e DAST</li>
                <li>Deduplicação automática de findings</li>
                <li>Auto-close de vulnerabilidades corrigidas</li>
                <li>Bloqueio de pipeline se vulnerabilidades críticas/altas encontradas</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Integração com Azure DevOps</h3>
              <p className="text-sm mb-2">
                Todo o processo de QA&RA está integrado ao Azure DevOps:
              </p>
              <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                <li>Pipelines executam todos os stages de verificação</li>
                <li>Bugs criados automaticamente quando vulnerabilidades bloqueiam pipeline</li>
                <li>Work Items de Change Request para mudanças em produção</li>
                <li>Test Cases vinculados aos requisitos e resultados de E2E</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Integração com Processo de Release (FASE 4)</h3>
              <p className="text-sm mb-2">
                Apenas após DAST aprovado, o processo segue para FASE 4:
              </p>
              <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                <li>Testes funcionais manuais (Azure Test Plans)</li>
                <li>Testes de usabilidade somativos (IEC 62366)</li>
                <li>Geração automática do DHF</li>
                <li>Aprovação do QA Leader para release</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Links to Related Documents */}
        <Card className="border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Documentação Relacionada
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link
              href="/documentos/sop-003-vulnerability-management"
              className="flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              SOP-003: Gestão de Vulnerabilidades
            </Link>
            <Link
              href="/documentos/sop-005-change-control"
              className="flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              SOP-005: Controle de Mudança (GMUD)
            </Link>
            <Link
              href="/documentos/sop-004-verification-validation"
              className="flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              SOP-004: Verificação e Validação
            </Link>
            <Link
              href="/automacao"
              className="flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              Processos Automatizados
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


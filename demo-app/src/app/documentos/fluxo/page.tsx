'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, ExternalLink, GitBranch, Cloud, Shield, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { MermaidDiagram } from '@/components/MermaidDiagram'

const documentFlow = `flowchart TD
    Start([Documento Criado]) --> Type{Tipo de Documento?}
    
    Type -->|SOP/Processo| Git[Git Repository<br/>docs/sop/]
    Type -->|Especificação| Spec[Spec-Kit<br/>spec-kit/specs/]
    Type -->|DHF/Regulatório| SharePoint[SharePoint<br/>Repositório Legal]
    Type -->|Work Item| ADO[Azure DevOps<br/>Work Items]
    Type -->|Vulnerabilidade| DefectDojo[DefectDojo<br/>Findings]
    
    Git --> GitDev[Desenvolvimento<br/>Branch feat/doc]
    GitDev --> GitPR[Pull Request]
    GitPR --> GitReview{Code Review<br/>2 Aprovações}
    GitReview -->|Aprovado| GitMerge[✅ Merge main]
    GitReview -->|Rejeitado| GitDev
    
    Spec --> SpecDev[Edição Local<br/>Markdown]
    SpecDev --> SpecValidate{Validação<br/>Script}
    SpecValidate -->|Válido| SpecCommit[Commit Git]
    SpecValidate -->|Inválido| SpecDev
    SpecCommit --> SpecSync[Sync Azure DevOps<br/>Work Item Link]
    
    SharePoint --> ShareCreate[Criação Word/PDF<br/>Template]
    ShareCreate --> ShareReview{Revisão<br/>QA Leader}
    ShareReview -->|Aprovado| ShareSign[Assinatura Digital<br/>PDF]
    ShareReview -->|Rejeitado| ShareCreate
    ShareSign --> ShareStore[✅ Armazenamento<br/>Imutável]
    
    ADO --> ADOCreate[Work Item Criado<br/>Azure Boards]
    ADOCreate --> ADODev[Desenvolvimento<br/>Campos Preenchidos]
    ADODev --> ADOApprove{Approval Gate<br/>QA Leader}
    ADOApprove -->|Aprovado| ADODone[✅ State: Approved]
    ADOApprove -->|Rejeitado| ADODev
    
    DefectDojo --> DDScan[Scan Automático<br/>Pipeline CI/CD]
    DDScan --> DDDedup[Deduplicação<br/>Automática]
    DDDedup --> DDTriage{Severidade<br/>Triagem}
    DDTriage -->|Crítica/Alta| DDBlock[❌ Bloqueio Pipeline]
    DDTriage -->|Média/Baixa| DDCreate[Finding Criado]
    DDCreate --> DDFix[Correção Código]
    DDFix --> DDScan
    DDCreate --> DDAccept{Aceitação<br/>Risco?}
    DDAccept -->|Sim| DDAccepted[✅ Status: Risk Accepted]
    DDAccept -->|Não| DDFix
    
    GitMerge --> GitTag[Tag Versionamento<br/>v1.0.0]
    ShareStore --> ShareVersion[Versionamento<br/>Nome Arquivo]
    
    GitTag --> End([Documento Versionado<br/>Rastreável])
    ShareVersion --> End
    ADODone --> End
    SpecSync --> End
    DDAccepted --> End
    
    style SharePoint fill:#0078d4,stroke:#005a9e,stroke-width:3px,color:#fff
    style Git fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff
    style ADO fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff
    style DefectDojo fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff
    
    style GitMerge fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style ShareStore fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style ADODone fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style DDAccepted fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style End fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    
    style DDBlock fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style GitReview fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style ShareReview fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style ADOApprove fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style DDTriage fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style DDAccept fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
`

const documentTypes = [
  {
    type: 'SOPs e Processos',
    location: 'Git Repository',
    path: 'docs/sop/',
    approval: 'Pull Request (2 reviews)',
    versioning: 'Git tags semânticas',
    immutable: false,
    description: 'Standard Operating Procedures e documentação de processos. Versionados no Git.',
    icon: GitBranch
  },
  {
    type: 'Especificações',
    location: 'Spec-Kit',
    path: 'spec-kit/specs/',
    approval: 'Validação automática + Sync ADO',
    versioning: 'Git commits',
    immutable: false,
    description: 'Especificações de features, APIs, infraestrutura e usabilidade. Sincronizadas com Azure DevOps.',
    icon: FileText
  },
  {
    type: 'DHF e Documentos Regulatórios',
    location: 'SharePoint Online',
    path: '/DHF/Version/v1.0.0/',
    approval: 'Assinatura Digital (QA Leader)',
    versioning: 'Versionamento no nome do arquivo',
    immutable: true,
    description: 'Design History File, certificados assinados e documentos regulatórios completos. Imutáveis após aprovação.',
    icon: Cloud
  },
  {
    type: 'Work Items',
    location: 'Azure DevOps',
    path: 'Azure Boards',
    approval: 'Gate de Aprovação (QA Leader)',
    versioning: 'Histórico automático',
    immutable: false,
    description: 'Requisitos, features, bugs e riscos. Rastreabilidade completa e histórico de mudanças.',
    icon: ExternalLink
  },
  {
    type: 'Vulnerabilidades',
    location: 'DefectDojo',
    path: 'Products/nCommand-Lite/Findings/',
    approval: 'Triagem AppSec + Aceitação de Risco',
    versioning: 'Status do finding',
    immutable: false,
    description: 'Findings de segurança (SAST/SCA/DAST). Deduplicação automática e gestão de ciclo de vida.',
    icon: Shield
  }
]

export default function FluxoDocumentosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Fluxo de Documentos
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Como os documentos são criados, aprovados, versionados e armazenados ao longo do ciclo de vida do nCommand Lite.
          </p>
        </div>

        {/* Flow Diagram */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-primary" />
              Fluxo Completo de Documentos
            </CardTitle>
            <CardDescription>
              Diagrama mostrando o caminho de cada tipo de documento desde a criação até o armazenamento final
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MermaidDiagram chart={documentFlow} />
          </CardContent>
        </Card>

        {/* Document Types */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Tipos de Documentos e Seus Fluxos</CardTitle>
            <CardDescription>
              Detalhes sobre onde cada tipo de documento é armazenado e como é aprovado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {documentTypes.map((docType, idx) => {
                const Icon = docType.icon
                return (
                  <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">{docType.type}</h3>
                          {docType.immutable && (
                            <Badge variant="outline" className="bg-yellow-50 border-yellow-300 text-yellow-800">
                              Imutável
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{docType.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-gray-700">Localização:</span>
                            <span className="ml-2 text-gray-600">{docType.location}</span>
                            <div className="font-mono text-xs text-gray-500 mt-1">{docType.path}</div>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700">Aprovação:</span>
                            <span className="ml-2 text-gray-600">{docType.approval}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700">Versionamento:</span>
                            <span className="ml-2 text-gray-600">{docType.versioning}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Document Lifecycle by Phase */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle>Documentos por Fase do Ciclo de Vida</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">FASE 1: Planejamento</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
                  <li><strong>Work Items:</strong> Criados no Azure DevOps (Features, User Stories)</li>
                  <li><strong>Especificações:</strong> Geradas via Spec-Kit, sincronizadas com ADO</li>
                  <li><strong>Análise de Riscos:</strong> Work Items tipo "Risk" vinculados aos requisitos</li>
                  <li><strong>Risk Acceptance Forms:</strong> Criados e armazenados no SharePoint após aprovação</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">FASE 2: Desenvolvimento</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
                  <li><strong>Código:</strong> Commits no Git com Work Item ID no formato [ADO-1234]</li>
                  <li><strong>Pull Requests:</strong> Vinculados a Work Items, aprovados via Code Review</li>
                  <li><strong>SOPs:</strong> Documentos de processo versionados no Git</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">FASE 3: Verificação</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
                  <li><strong>Relatórios SAST/SCA:</strong> Enviados automaticamente para DefectDojo</li>
                  <li><strong>Findings:</strong> Criados no DefectDojo após deduplicação</li>
                  <li><strong>Work Items de Bug:</strong> Criados no ADO para vulnerabilidades críticas/altas</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">FASE 4: Validação e Release</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
                  <li><strong>DHF:</strong> Gerado automaticamente via script, assinado e armazenado no SharePoint</li>
                  <li><strong>Matriz de Rastreabilidade:</strong> Gerada e incluída no DHF</li>
                  <li><strong>Certificado de Segurança:</strong> Gerado do DefectDojo, incluído no DHF</li>
                  <li><strong>Release Notes:</strong> Documento no SharePoint</li>
                  <li><strong>Git Tag:</strong> Versão semântica (v1.0.0) para o release</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">FASE 5: Monitoramento</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
                  <li><strong>Relatórios de Scan:</strong> Scans diários enviados para DefectDojo</li>
                  <li><strong>Logs SIEM:</strong> Armazenados no Azure Sentinel</li>
                  <li><strong>Incidentes:</strong> Work Items no Azure DevOps para problemas identificados</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage and Access */}
        <Card className="border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Armazenamento e Acesso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Repositórios Públicos/Internos</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ <strong>Git:</strong> SOPs, processos, especificações, código</li>
                  <li>✅ <strong>Azure DevOps:</strong> Work Items, Test Plans, Pipelines</li>
                  <li>✅ <strong>DefectDojo:</strong> Vulnerabilidades e findings</li>
                </ul>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Repositórios Confidenciais</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>🔒 <strong>SharePoint:</strong> DHF completos, documentos assinados, certificados</li>
                  <li>🔒 <strong>SharePoint:</strong> Documentos regulatórios completos (PDFs protegidos)</li>
                  <li>🔒 <strong>SharePoint:</strong> Risk Acceptance Forms com assinaturas</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>Nota:</strong> Documentos no SharePoint são imutáveis após assinatura. 
                O versionamento é feito através do nome do arquivo (ex: <code className="bg-white px-1 rounded">nCommand-Lite-DHF-v1.0.0.pdf</code>).
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


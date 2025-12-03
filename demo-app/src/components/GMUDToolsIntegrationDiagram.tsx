'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MermaidDiagram } from '@/components/MermaidDiagram'

export function GMUDToolsIntegrationDiagram() {
  const diagram = `
graph TB
    subgraph GMUD["<b>GMUD Work Item (Azure Boards)</b>"]
        GW["🎫 GMUD-2025-XXX<br/>Work Item Type:<br/>'GMUD Request'"]
        GF["📝 Campos Customizados:<br/>• Descrição<br/>• Categoria<br/>• Impacto<br/>• Risco<br/>• Aprovadores"]
        GST["📋 Sub-tasks:<br/>• Ações do plano<br/>• Progress tracking<br/>• Evidências"]
    end

    subgraph Azure["<b>Ecossistema Azure</b>"]
        AB["Azure Boards<br/>(Tracking)"]
        AR["Azure Repos<br/>(IaC - Terraform)"]
        AP["Azure Pipelines<br/>(CI/CD)"]
        AS["Azure Storage<br/>(Evidências)"]
        AI["Application Insights<br/>(Monitoramento)"]
    end

    subgraph External["<b>Sistemas Externos</b>"]
        SP["SharePoint<br/>(DHF)<br/>R042.001/002 PDFs"]
        DD["DefectDojo<br/>(Vulnerabilidades)"]
        PBI["Power BI<br/>(Dashboards)"]
        PA["Power Automate<br/>(Workflows)"]
    end

    subgraph Output["<b>Saídas Automatizadas</b>"]
        PDF1["📄 R042.001 PDF<br/>(auto-gerado)"]
        PDF2["📄 R042.002 PDF<br/>(auto-gerado)"]
        DASH["📊 Dashboard<br/>GMUDs em tempo real"]
        METR["📈 Métricas:<br/>• Cycle time<br/>• Eficiência<br/>• Qualidade"]
    end

    %% Conexões GMUD
    GW --> GF
    GW --> GST

    %% Conexões Azure
    GW --> AB
    GST --> AB
    AB --> AR
    AR --> AP
    AP --> AS
    AI --> DASH

    %% Conexões Externas
    AB --> SP
    AB --> DD
    AB --> PBI
    AB --> PA

    %% Conexões para IaC
    GST -->|"Se mudança<br/>infraestrutura"| AR
    AR -->|"Terraform<br/>apply"| AP

    %% Geração de saídas
    AB --> PDF1
    AB --> PDF2
    PDF1 --> SP
    PDF2 --> SP
    AB --> DASH
    AB --> METR
    METR --> PBI

    %% Power Automate workflows
    PA -->|"Notificações<br/>automáticas"| GW
    PA -->|"Upload<br/>automático"| SP

    %% DefectDojo integration
    GST -->|"Se mudança<br/>segurança"| DD
    DD -->|"Validação<br/>vulnerabilidades"| GST

    %% Estilos
    classDef gmudStyle fill:#fff3e0,stroke:#f57c00,stroke-width:3px,color:#000
    classDef azureStyle fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    classDef externalStyle fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#000
    classDef outputStyle fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000

    class GW,GF,GST gmudStyle
    class AB,AR,AP,AS,AI azureStyle
    class SP,DD,PBI,PA externalStyle
    class PDF1,PDF2,DASH,METR outputStyle
  `

  return (
    <Card className="mb-12 border-2 border-blue-200 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">
          Ecossistema de Ferramentas: Integrações GMUD
        </CardTitle>
        <CardDescription className="text-base">
          Como o Work Item GMUD se integra com todas as ferramentas do nCommand Lite
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <MermaidDiagram chart={diagram} />
        </div>
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 border-2 border-orange-200 rounded-lg">
              <div className="font-semibold text-orange-900 mb-2">🎫 GMUD Work Item (Fonte da Verdade)</div>
              <div className="text-sm text-orange-800">
                <strong>Azure Boards:</strong> Centralizasolicitation, tracking, aprovações e evidências.
                Campos customizados garantem conformidade com PQ.042.
              </div>
            </div>
            <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <div className="font-semibold text-blue-900 mb-2">☁️ Ecossistema Azure (Integrado)</div>
              <div className="text-sm text-blue-800">
                <strong>Azure:</strong> Boards (tracking), Repos (IaC), Pipelines (CI/CD),
                Storage (evidências), Application Insights (monitoramento).
              </div>
            </div>
            <div className="p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
              <div className="font-semibold text-purple-900 mb-2">🔗 Sistemas Externos (APIs)</div>
              <div className="text-sm text-purple-800">
                <strong>Integrações:</strong> SharePoint (DHF), DefectDojo (vulnerabilidades),
                Power BI (dashboards), Power Automate (workflows automáticos).
              </div>
            </div>
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <div className="font-semibold text-green-900 mb-2">📊 Saídas Automatizadas</div>
              <div className="text-sm text-green-800">
                <strong>Geração Automática:</strong> PDFs R042.001/002, dashboards em tempo real,
                métricas (cycle time, eficiência, qualidade).
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary/30 rounded-lg">
            <div className="font-semibold text-gray-900 mb-3 text-lg">🔄 Exemplo de Fluxo Integrado:</div>
            <div className="text-sm text-gray-800 space-y-2">
              <div><strong>1.</strong> Usuário cria <code className="bg-white px-2 py-1 rounded border">GMUD-2025-025</code> no Azure Boards (Implementar Azure Sentinel)</div>
              <div><strong>2.</strong> Power Automate notifica aprovadores (QA Leader + HEAD Security)</div>
              <div><strong>3.</strong> Após aprovação, sub-tasks são executadas (deploy Sentinel via Terraform)</div>
              <div><strong>4.</strong> Azure Pipelines executa <code className="bg-white px-2 py-1 rounded border">terraform apply</code> (IaC)</div>
              <div><strong>5.</strong> Evidências (logs, screenshots) são anexadas no Work Item</div>
              <div><strong>6.</strong> Sistema gera automaticamente PDFs R042.001 e R042.002</div>
              <div><strong>7.</strong> Power Automate faz upload para SharePoint via API</div>
              <div><strong>8.</strong> Dashboard Power BI atualiza métricas em tempo real</div>
              <div><strong>9.</strong> GMUD fechado automaticamente, com rastreabilidade completa</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

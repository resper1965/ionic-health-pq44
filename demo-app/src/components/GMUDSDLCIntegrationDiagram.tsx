'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MermaidDiagram } from '@/components/MermaidDiagram'

export function GMUDSDLCIntegrationDiagram() {
  const diagram = `
graph TB
    subgraph SDLC["<b>SDLC nCommand Lite (5 Fases)</b>"]
        F1["<b>FASE 1</b><br/>Planejamento &<br/>Infraestrutura"]
        F2["<b>FASE 2</b><br/>Desenvolvimento &<br/>Codificação"]
        F3["<b>FASE 3</b><br/>Verificação &<br/>Segurança"]
        F4["<b>FASE 4</b><br/>Validação &<br/>Liberação"]
        F5["<b>FASE 5</b><br/>Monitoramento<br/>Pós-Mercado"]
    end

    subgraph GMUD["<b>PQ.042 - GMUD (Gestão de Mudanças)</b>"]
        G1["🎫 Solicitação<br/>(R042.001)"]
        G2["🔍 Análise<br/>de Risco"]
        G3["✅ Aprovação<br/>Inicial"]
        G4["⚙️ Execução<br/>das Ações"]
        G5["📋 Avaliação<br/>Pós-Mudança"]
        G6["🔒 Fechamento<br/>(R042.002)"]
    end

    subgraph Tools["<b>Ferramentas & Automação</b>"]
        AB["Azure Boards<br/>(GMUD Work Items)"]
        SP["SharePoint<br/>(DHF/Documentos)"]
        DD["DefectDojo<br/>(Vulnerabilidades)"]
        TF["Terraform<br/>(IaC)"]
        AZ["Azure DevOps<br/>(Pipelines)"]
    end

    %% Conexões FASE 1 - Alta aplicabilidade
    F1 -->|"Setup infraestrutura<br/>Alta aplicabilidade"| G1
    G1 --> AB
    AB -->|"GMUD-2025-001<br/>Setup Azure DevOps"| F1
    AB -->|"GMUD-2025-005<br/>Implementar DefectDojo"| F1

    %% Conexões FASE 2 - Baixa aplicabilidade
    F2 -.->|"Mudanças em ferramentas<br/>Baixa aplicabilidade"| G1

    %% Conexões FASE 3 - Alta aplicabilidade
    F3 -->|"Mudanças em segurança<br/>Alta aplicabilidade"| G1
    DD -->|"Upgrade DefectDojo"| G1
    G4 -->|"Integração validada"| F3

    %% Conexões FASE 4 - Média aplicabilidade
    F4 -.->|"Mudanças em validação<br/>Média aplicabilidade"| G1

    %% Conexões FASE 5 - Muito Alta aplicabilidade
    F5 -->|"Novos sistemas<br/>Muito Alta aplicabilidade"| G1
    G4 -->|"GMUD-2025-025<br/>Azure Sentinel"| F5

    %% Fluxo GMUD
    G1 --> G2
    G2 --> G3
    G3 --> G4
    G4 --> G5
    G5 --> G6

    %% Integração com ferramentas
    G1 --> AB
    G3 --> AB
    G4 --> TF
    G4 --> AZ
    G6 --> SP

    %% Estilos
    classDef phaseStyle fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    classDef gmudStyle fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    classDef toolStyle fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#000
    classDef highApplicability fill:#c8e6c9,stroke:#388e3c,stroke-width:3px,color:#000
    classDef lowApplicability fill:#ffccbc,stroke:#d84315,stroke-width:1px,stroke-dasharray: 5 5,color:#000

    class F1,F3,F5 highApplicability
    class F2,F4 lowApplicability
    class F1,F2,F3,F4,F5 phaseStyle
    class G1,G2,G3,G4,G5,G6 gmudStyle
    class AB,SP,DD,TF,AZ toolStyle
  `

  return (
    <Card className="mb-12 border-2 border-primary/30 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">
          Integração: PQ.042 (GMUD) ↔ SDLC ↔ Ferramentas
        </CardTitle>
        <CardDescription className="text-base">
          Como GMUDs se integram com cada fase do ciclo de vida e ferramentas de automação
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <MermaidDiagram diagram={diagram} />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
            <div className="font-semibold text-green-900 mb-2">✅ Alta Aplicabilidade</div>
            <div className="text-sm text-green-800">FASES 1, 3 e 5: GMUDs frequentes para infraestrutura, segurança e monitoramento</div>
          </div>
          <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
            <div className="font-semibold text-yellow-900 mb-2">⚠️ Média/Baixa Aplicabilidade</div>
            <div className="text-sm text-yellow-800">FASES 2 e 4: GMUDs raros, apenas para mudanças organizacionais</div>
          </div>
          <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <div className="font-semibold text-purple-900 mb-2">🔧 Ferramentas Integradas</div>
            <div className="text-sm text-purple-800">Azure Boards, SharePoint, DefectDojo, Terraform, Azure DevOps</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

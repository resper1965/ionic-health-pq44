'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MermaidDiagram } from '@/components/MermaidDiagram'

export function GMUDAutomationFlowDiagram() {
  const diagram = `
graph LR
    subgraph Manual["<b>❌ Processo Manual (Atual 20-30%)</b>"]
        M1["📧 Email<br/>chamado@ionic.health"]
        M2["📝 Word<br/>R042.001"]
        M3["📧 Email<br/>Aprovação"]
        M4["📊 Excel<br/>Tracking"]
        M5["📧 Evidências<br/>via Email"]
        M6["📝 Word<br/>R042.002"]
        M7["📤 Upload<br/>Manual SharePoint"]
    end

    subgraph Auto["<b>✅ Processo Automatizado (Proposto 70-75%)</b>"]
        A1["🎫 Work Item<br/>GMUD Request"]
        A2["📋 Formulário Digital<br/>Campos Customizados"]
        A3["🔄 Workflow<br/>Aprovação Paralela"]
        A4["📊 Dashboard<br/>Real-time"]
        A5["📸 Upload<br/>Estruturado"]
        A6["✅ Checklist<br/>Digital R042.002"]
        A7["🤖 Auto-upload<br/>SharePoint API"]
    end

    subgraph Tools["<b>Ferramentas Integradas</b>"]
        T1["Azure Boards"]
        T2["Azure Pipelines"]
        T3["SharePoint API"]
        T4["Power Automate"]
        T5["DefectDojo API"]
    end

    %% Fluxo Manual
    M1 --> M2 --> M3 --> M4 --> M5 --> M6 --> M7

    %% Fluxo Automatizado
    A1 --> A2 --> A3 --> A4 --> A5 --> A6 --> A7

    %% Integração com ferramentas
    A1 --> T1
    A3 --> T1
    A4 --> T1
    A5 --> T1
    A7 --> T3
    A3 --> T4
    A5 --> T5

    %% Tempo
    M7 -->|"⏱️ 3-5 semanas"| End1[/"📁 Arquivado"/]
    A7 -->|"⏱️ 1-2 semanas<br/>(50-60% redução)"| End2[/"📁 Arquivado"/]

    %% Estilos
    classDef manualStyle fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#000
    classDef autoStyle fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#000
    classDef toolStyle fill:#e1f5fe,stroke:#0277bd,stroke-width:2px,color:#000
    classDef endStyle fill:#fff9c4,stroke:#f57f17,stroke-width:2px,color:#000

    class M1,M2,M3,M4,M5,M6,M7 manualStyle
    class A1,A2,A3,A4,A5,A6,A7 autoStyle
    class T1,T2,T3,T4,T5 toolStyle
    class End1,End2 endStyle
  `

  return (
    <Card className="mb-12 border-2 border-green-200 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">
          Automação do Processo GMUD: Manual → Automatizado
        </CardTitle>
        <CardDescription className="text-base">
          Comparação do fluxo manual atual vs proposta de automação com Azure Boards
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <MermaidDiagram diagram={diagram} />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
            <div className="font-semibold text-red-900 mb-2">❌ Processo Manual</div>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• Tempo: 3-5 semanas</li>
              <li>• Automação: 20-30%</li>
              <li>• Rastreabilidade: Fragmentada</li>
              <li>• Visibilidade: Baixa</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
            <div className="font-semibold text-green-900 mb-2">✅ Processo Automatizado</div>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Tempo: 1-2 semanas (50-60% ↓)</li>
              <li>• Automação: 70-75% (+50pp)</li>
              <li>• Rastreabilidade: Total</li>
              <li>• Visibilidade: Real-time</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <div className="font-semibold text-blue-900 mb-2">🔧 Ferramentas Chave</div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Azure Boards (Work Items)</li>
              <li>• SharePoint API (DHF)</li>
              <li>• Power Automate (Workflow)</li>
              <li>• DefectDojo API (Evidências)</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

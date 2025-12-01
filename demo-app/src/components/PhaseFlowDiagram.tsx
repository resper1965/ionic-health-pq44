'use client'

import { MermaidDiagram } from './MermaidDiagram'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface PhaseFlowDiagramProps {
  phaseNumber: number
  phaseTitle: string
}

const phaseFlows = {
  1: `flowchart TD
    A[Azure Boards<br/>Work Item Criado] --> B[PO/UX Define<br/>Perfil de Usuário]
    B --> D[Análise de Riscos<br/>ISO 14971]
    D --> E[Consultar DefectDojo<br/>Histórico de Vulnerabilidades]
    E --> F[uFMEA<br/>Análise de Erro de Uso]
    F --> G[Registrar Riscos<br/>Work Items no ADO]
    G --> H{QA Leader<br/>Aprova?}
    H -->|Sim| I[✅ Gate Aprovado<br/>Iniciar Desenvolvimento]
    H -->|Não| J[Revisar Riscos<br/>Ajustar Mitigações]
    J --> D
    
    style A fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style I fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style H fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff`,

  2: `flowchart TD
    A[Especificação Aprovada] --> B[Criar Branch<br/>feat/WORKITEM-ID]
    B --> C[Desenvolvimento<br/>Código Fonte]
    C --> D[Pre-commit Hooks<br/>Validação]
    D --> E[Testes Unitários<br/>100% Pass]
    E --> F[UX Testes Formativos<br/>Protótipos]
    F --> G[Criar Pull Request]
    G --> H{PR Checks}
    H -->|Work Item?| I[✅ Vinculado]
    H -->|2 Reviews?| J[✅ Aprovado]
    H -->|Build Pass?| K[✅ Sucesso]
    I --> L{Todos Checks OK?}
    J --> L
    K --> L
    L -->|Sim| M[✅ Merge em develop]
    L -->|Não| N[❌ PR Rejeitado]
    N --> C
    
    style A fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style M fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style N fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff`,

  3: `flowchart TD
    A[Pull Request Merged] --> B[Pipeline CI/CD<br/>Triggered]
    B --> C[Build & Testes<br/>Unitários]
    C --> D{100% Pass?}
    D -->|Não| E[❌ Pipeline Falha]
    D -->|Sim| F[SAST: SonarCloud<br/>Quality Gate A]
    F --> G{Quality Gate<br/>A?}
    G -->|Não| E
    G -->|Sim| H[SCA: Trivy<br/>Scan Dependencies]
    H --> I[Script Ingestão<br/>defectdojo-ingest.sh]
    I --> I1[Enviar Relatórios<br/>SAST + SCA para API]
    I1 --> I2[DefectDojo<br/>Recebe Dados]
    I2 --> I3[Deduplicação<br/>Automática]
    I3 --> I4{Findings<br/>Novos ou<br/>Recorrentes?}
    I4 -->|Novos| I5[Criar Findings<br/>Novos]
    I4 -->|Recorrentes| I6[Atualizar Findings<br/>Existentes]
    I5 --> I7[Security Gate Check]
    I6 --> I7
    I7 --> I8[Script defectdojo-check.sh<br/>Consulta DefectDojo]
    I8 --> J{Vulnerabilidades<br/>Críticas/Altas<br/>Ativas?}
    J -->|Sim| E
    J -->|Não| K[Deploy Staging]
    K --> K1[Smoke Tests E2E<br/>Playwright]
    K1 --> K2[Sanity Tests E2E<br/>Playwright]
    K2 --> K3[E2E Tests<br/>Fluxos Críticos]
    K3 --> L[DAST: OWASP ZAP<br/>Dynamic Scan]
    L --> M1[Script Ingestão<br/>defectdojo-ingest.sh]
    M1 --> M2[Enviar Relatório<br/>DAST para API]
    M2 --> M3[DefectDojo<br/>Processa DAST]
    M3 --> M4[Deduplicação<br/>Automática]
    M4 --> M5[Security Gate Check<br/>DefectDojo]
    M5 --> N{Vulnerabilidades<br/>Críticas/Altas<br/>DAST?}
    N -->|Sim| E
    N -->|Não| O[✅ Pipeline Pass<br/>Pronto para Release]
    
    style A fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style O fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style E fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style I2 fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff
    style I3 fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff
    style M3 fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff
    style M4 fill:#0078d4,stroke:#005a9e,stroke-width:2px,color:#fff`,

  4: `flowchart TD
    A[Pipeline Passed] --> B[Deploy Staging<br/>Ambiente de Testes]
    B --> C[Testes Funcionais<br/>Azure Test Plans]
    C --> D{100% Pass?}
    D -->|Não| E[Corrigir Issues]
    E --> C
    D -->|Sim| F[Testes Usabilidade<br/>Somativos IEC 62366]
    F --> G{Critérios<br/>Atingidos?}
    G -->|Não| E
    G -->|Sim| H[Gerar DHF<br/>Automated Script]
    H --> I[Matriz de Rastreabilidade]
    I --> J[Certificado de Segurança<br/>0 Vulns Críticas/Altas]
    J --> K[QA Leader<br/>Aprova Release]
    K --> L{Aprovação<br/>Digital?}
    L -->|Não| M[Revisar Artefatos]
    M --> H
    L -->|Sim| N[Transferir para SharePoint<br/>DHF PDF Assinado]
    N --> O[Criar Tag Git<br/>v1.0.0]
    O --> P[✅ Release Completo]
    
    style A fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style P fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff`,

  5: `flowchart TD
    A[Release v1.0.0<br/>Em Produção] --> B[Azure Sentinel<br/>SIEM Monitoramento]
    B --> C[Scan Diário<br/>Trivy → DefectDojo]
    C --> D{Novas<br/>Vulnerabilidades?}
    D -->|Sim| E[AppSec/QA<br/>Triagem]
    E --> F{True Positive?}
    F -->|Não| G[Marcar False Positive]
    F -->|Sim| H[Push to Azure DevOps<br/>Criar Bug]
    H --> I{Severidade?}
    I -->|Crítico| J[SLA: 24h<br/>Hotfix]
    I -->|Alto| K[SLA: 7 dias]
    I -->|Médio| L[SLA: 30 dias]
    I -->|Baixo| M[Próxima Release]
    J --> N[Change Request]
    N --> O[Correção]
    O --> P[Validação]
    P --> Q[Deploy]
    K --> N
    L --> N
    M --> R[Planejamento]
    D -->|Não| S[Reavaliação Trimestral<br/>de Riscos]
    S --> T[Atualizar Work Items]
    T --> U[✅ Monitoramento Contínuo]
    
    style A fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff
    style U fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style J fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff`
}

export function PhaseFlowDiagram({ phaseNumber, phaseTitle }: PhaseFlowDiagramProps) {
  const flowChart = phaseFlows[phaseNumber as keyof typeof phaseFlows]

  if (!flowChart) {
    return null
  }

  return (
    <Card className="mt-6 border-cyan">
      <CardHeader>
        <CardTitle className="text-lg text-gray-800">Fluxo Detalhado - {phaseTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <MermaidDiagram chart={flowChart} />
      </CardContent>
    </Card>
  )
}


'use client'

import { MermaidDiagram } from './MermaidDiagram'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const assetsArchitecture = `graph TB
    subgraph Cloud["☁️ CLOUD & INFRAESTRUTURA"]
        Azure[Azure Cloud]
        Azure --> AppService[App Services<br/>Hospedagem]
        Azure --> KeyVault[Key Vault<br/>Secrets]
        Azure --> Storage[Storage Accounts<br/>Artefatos]
        Azure --> LogAnalytics[Log Analytics<br/>Logs]
        Azure --> Sentinel[Azure Sentinel<br/>SIEM]
    end
    
    subgraph DevTools["🛠️ FERRAMENTAS DE DESENVOLVIMENTO"]
        ADO[Azure DevOps]
        ADO --> Boards[Boards<br/>Work Items]
        ADO --> Repos[Repos<br/>Git]
        ADO --> Pipelines[Pipelines<br/>CI/CD]
        ADO --> TestPlans[Test Plans<br/>Testes]
    end
    
    subgraph Security["🔒 SEGURANÇA & QUALIDADE"]
        DefectDojo[DefectDojo<br/>Gestão Vulnerabilidades]
        SonarCloud[SonarCloud<br/>SAST]
        Trivy[Trivy<br/>SCA]
        ZAP[OWASP ZAP<br/>DAST]
        Playwright[Playwright<br/>E2E Tests]
        Selenium[Selenium<br/>E2E Tests]
    end
    
    subgraph Docs["📄 DOCUMENTAÇÃO & COMPLIANCE"]
        SharePoint[SharePoint Online<br/>DHF Repositório Legal]
        SpecKit[Spec-Kit<br/>Gestão Especificações]
    end
    
    DevTools --> Security
    Security --> DefectDojo
    DevTools --> Cloud
    DevTools --> Docs
    Cloud --> Sentinel
    Security --> SharePoint
    
    style Azure fill:#54c4cd,stroke:#48b3bb,stroke-width:3px,color:#fff
    style ADO fill:#54c4cd,stroke:#48b3bb,stroke-width:3px,color:#fff
    style DefectDojo fill:#54c4cd,stroke:#48b3bb,stroke-width:3px,color:#fff
    style SharePoint fill:#54c4cd,stroke:#48b3bb,stroke-width:3px,color:#fff
    style Sentinel fill:#54c4cd,stroke:#48b3bb,stroke-width:2px,color:#fff`

export function AssetsArchitectureDiagram() {
  return (
    <Card className="mb-8 border-cyan">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">Arquitetura de Ativos</CardTitle>
        <p className="text-sm text-gray-600 mt-2">
          Visualização dos ativos (clouds, softwares, plataformas) envolvidos no processo
        </p>
      </CardHeader>
      <CardContent>
        <MermaidDiagram chart={assetsArchitecture} />
      </CardContent>
    </Card>
  )
}


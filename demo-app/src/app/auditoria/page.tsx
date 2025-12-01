'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileCheck, ExternalLink, Info, FileText, Shield, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { getSlugFromPath } from '@/lib/document-slugs'

interface RegulatoryEvidence {
  norm: string
  normCode: string
  evidences: {
    category: string
    items: {
      evidence: string
      where: string
      howToAccess: string
      system: string
    }[]
  }[]
}

const regulatoryEvidences: RegulatoryEvidence[] = [
  {
    norm: 'ISO 13485:2016',
    normCode: 'iso-13485',
    evidences: [
      {
        category: 'Sistema de Gestão da Qualidade',
        items: [
          {
            evidence: 'SOPs documentados (SOP-001 a SOP-005)',
            where: 'Azure Repos → docs/sop/',
            howToAccess: 'Arquivos Markdown versionados no Git',
            system: 'Azure Repos'
          },
          {
            evidence: 'PROCESS.md - Processo Integrado Completo',
            where: 'Azure Repos → docs/PROCESS.md',
            howToAccess: 'Documento principal do processo',
            system: 'Azure Repos'
          },
          {
            evidence: 'Histórico de versionamento de documentos',
            where: 'Azure Repos → Git History',
            howToAccess: 'Histórico de commits e mudanças',
            system: 'Azure Repos'
          }
        ]
      },
      {
        category: 'Controle de Documentação',
        items: [
          {
            evidence: 'Work Items (Requisitos)',
            where: 'Azure DevOps → Boards',
            howToAccess: 'Work Items vinculados, aprovados e rastreados',
            system: 'Azure DevOps'
          },
          {
            evidence: 'DHF (Design History File)',
            where: 'SharePoint → /DHF/Version/v1.0.0/',
            howToAccess: 'PDF assinado digitalmente, imutável',
            system: 'SharePoint'
          },
          {
            evidence: 'Matriz de Rastreabilidade',
            where: 'SharePoint → DHF → Seção Traceability',
            howToAccess: 'Documento gerado automaticamente',
            system: 'SharePoint'
          }
        ]
      },
      {
        category: 'Controle de Produto',
        items: [
          {
            evidence: 'Pipeline CI/CD configurado',
            where: 'Azure Repos → pipelines/azure-pipelines.yml',
            howToAccess: 'Definição do pipeline no código',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Execução de Pipelines',
            where: 'Azure DevOps → Pipelines → Runs',
            howToAccess: 'Histórico de execuções e logs',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Gates de Pipeline',
            where: 'Azure DevOps → Pipeline → Gates',
            howToAccess: 'Configuração de gates e verificações',
            system: 'Azure DevOps'
          }
        ]
      },
      {
        category: 'Verificação e Validação',
        items: [
          {
            evidence: 'Relatórios de Testes Unitários',
            where: 'Azure DevOps → Pipelines → Test Results',
            howToAccess: 'Relatórios com 100% pass rate',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Testes Funcionais',
            where: 'Azure DevOps → Test Plans',
            howToAccess: 'Test Cases e resultados',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Testes E2E Automatizados',
            where: 'Azure DevOps → Pipeline → Artifacts',
            howToAccess: 'Relatórios Playwright com screenshots/vídeos',
            system: 'Azure DevOps'
          }
        ]
      }
    ]
  },
  {
    norm: 'IEC 62304:2006+A1:2015',
    normCode: 'iec-62304',
    evidences: [
      {
        category: 'Processo de Desenvolvimento',
        items: [
          {
            evidence: 'SOP-001: SDLC - Ciclo de Vida de Desenvolvimento',
            where: 'Azure Repos → docs/sop/SOP-001-SDLC.md',
            howToAccess: 'Documento do processo SDLC',
            system: 'Azure Repos'
          },
          {
            evidence: 'Work Items (Requisitos)',
            where: 'Azure DevOps → Boards',
            howToAccess: 'Requisitos vinculados e aprovados',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Commits com Work Item ID',
            where: 'Azure Repos → Commits',
            howToAccess: 'Commits no formato [WORKITEM-ID]',
            system: 'Azure Repos'
          }
        ]
      },
      {
        category: 'Controle de Configuração',
        items: [
          {
            evidence: 'Estrutura de Branches (Gitflow)',
            where: 'Azure Repos → Branches',
            howToAccess: 'Branches main/develop/feat/*',
            system: 'Azure Repos'
          },
          {
            evidence: 'Histórico de Commits',
            where: 'Azure Repos → History',
            howToAccess: 'Histórico completo de mudanças',
            system: 'Azure Repos'
          },
          {
            evidence: 'Tags de Release',
            where: 'Azure Repos → Tags',
            howToAccess: 'Tags semânticas (v1.0.0, v1.1.0)',
            system: 'Azure Repos'
          },
          {
            evidence: 'Infraestrutura como Código (Terraform)',
            where: 'Azure Repos → infrastructure/azure/',
            howToAccess: 'Arquivos .tf versionados',
            system: 'Azure Repos'
          }
        ]
      },
      {
        category: 'Resolução de Problemas',
        items: [
          {
            evidence: 'Work Items de Bug',
            where: 'Azure DevOps → Boards → Bugs',
            howToAccess: 'Bugs vinculados e rastreados',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Findings no DefectDojo',
            where: 'DefectDojo → Findings',
            howToAccess: 'Vulnerabilidades identificadas e tratadas',
            system: 'DefectDojo'
          },
          {
            evidence: 'Histórico de Correções',
            where: 'Azure DevOps → Work Item → History',
            howToAccess: 'Timeline de correções',
            system: 'Azure DevOps'
          }
        ]
      },
      {
        category: 'Testes de Software',
        items: [
          {
            evidence: 'Testes Unitários (100% Pass)',
            where: 'Azure DevOps → Pipelines → Test Results',
            howToAccess: 'Relatórios de execução',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Testes E2E (Sanity, Smoke, Regression)',
            where: 'Azure DevOps → Pipeline → Artifacts',
            howToAccess: 'Relatórios Playwright',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Código de Testes',
            where: 'Azure Repos → tests/',
            howToAccess: 'Arquivos de teste no repositório',
            system: 'Azure Repos'
          }
        ]
      }
    ]
  },
  {
    norm: 'ISO 14971:2019',
    normCode: 'iso-14971',
    evidences: [
      {
        category: 'Análise de Riscos',
        items: [
          {
            evidence: 'Work Items de Risco',
            where: 'Azure DevOps → Boards → Tipo "Risk"',
            howToAccess: 'Filtro: Work Item Type = Risk',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Análise de Risco (RPN)',
            where: 'Azure DevOps → Work Item → Campos customizados',
            howToAccess: 'Campos: Severidade, Probabilidade, Detectabilidade, RPN',
            system: 'Azure DevOps'
          },
          {
            evidence: 'uFMEA (Análise de Erro de Uso)',
            where: 'Azure DevOps → Work Item → Attachments',
            howToAccess: 'Anexos e comentários',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Relacionamento Risco → Requisito',
            where: 'Azure DevOps → Work Item → Links',
            howToAccess: 'Relação "Mitigates"',
            system: 'Azure DevOps'
          }
        ]
      },
      {
        category: 'Avaliação e Controle de Riscos',
        items: [
          {
            evidence: 'Risk Acceptance Forms',
            where: 'SharePoint → /Risk Management/Risk Acceptance Forms/',
            howToAccess: 'PDFs assinados digitalmente',
            system: 'SharePoint'
          },
          {
            evidence: 'Risk Acceptance Register',
            where: 'SharePoint → /Risk Management/Risk Acceptance Register/',
            howToAccess: 'Lista completa de riscos aceitos',
            system: 'SharePoint'
          },
          {
            evidence: 'Análise de Benefício/Risco',
            where: 'SharePoint → /Risk Management/Risk Analysis/',
            howToAccess: 'Documentos Word/PDF',
            system: 'SharePoint'
          },
          {
            evidence: 'Status de Aceitação no ADO',
            where: 'Azure DevOps → Work Item → Campo customizado',
            howToAccess: 'Campo "Risk Acceptance Status"',
            system: 'Azure DevOps'
          }
        ]
      },
      {
        category: 'Reavaliação de Riscos',
        items: [
          {
            evidence: 'Reavaliação Trimestral',
            where: 'SharePoint → /Risk Management/Reassessment/',
            howToAccess: 'Relatórios trimestrais',
            system: 'SharePoint'
          },
          {
            evidence: 'Work Items Atualizados',
            where: 'Azure DevOps → Boards → Risk → Updated Date',
            howToAccess: 'Filtro por data de atualização',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Novos Riscos Identificados',
            where: 'Azure DevOps → Boards → Risk → Created Date',
            howToAccess: 'Riscos criados no período',
            system: 'Azure DevOps'
          }
        ]
      },
      {
        category: 'Monitoramento Pós-Mercado',
        items: [
          {
            evidence: 'Incidentes de Segurança',
            where: 'Azure Sentinel → Incidents',
            howToAccess: 'Lista de incidentes detectados',
            system: 'Azure Sentinel'
          },
          {
            evidence: 'Vulnerabilidades Identificadas',
            where: 'DefectDojo → Findings',
            howToAccess: 'Findings ativos e mitigados',
            system: 'DefectDojo'
          },
          {
            evidence: 'Scans Diários',
            where: 'DefectDojo → Findings → Source = "Daily Scan"',
            howToAccess: 'Findings de scans diários',
            system: 'DefectDojo'
          }
        ]
      }
    ]
  },
  {
    norm: 'IEC 62366-1:2015',
    normCode: 'iec-62366-1',
    evidences: [
      {
        category: 'Perfil de Usuário',
        items: [
          {
            evidence: 'Perfil de Usuário (IEC 62366)',
            where: 'Azure DevOps → Work Item → Campo customizado',
            howToAccess: 'Campo "Perfil de Usuário"',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Tarefas Principais (IEC 62366)',
            where: 'Azure DevOps → Work Item → Campo customizado',
            howToAccess: 'Campo "Tarefas Principais"',
            system: 'Azure DevOps'
          }
        ]
      },
      {
        category: 'Análise de Erro de Uso (uFMEA)',
        items: [
          {
            evidence: 'uFMEA Documentado',
            where: 'Azure DevOps → Work Item → Attachments',
            howToAccess: 'Anexos e análises de erro de uso',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Work Items de Risco de Usabilidade',
            where: 'Azure DevOps → Boards → Risk → Tipo "Usability"',
            howToAccess: 'Filtro: Tipo = Usability',
            system: 'Azure DevOps'
          }
        ]
      },
      {
        category: 'Testes de Usabilidade',
        items: [
          {
            evidence: 'Testes Formativos (Protótipos)',
            where: 'Azure DevOps → Work Item → Comentários',
            howToAccess: 'Registros de testes formativos',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Testes Somativos (IEC 62366)',
            where: 'Azure DevOps → Test Plans → Suite "Usability"',
            howToAccess: 'Test Suite específica de usabilidade',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Resultados de Testes de Usabilidade',
            where: 'Azure DevOps → Test Plans → Results',
            howToAccess: 'Test Run com resultados somativos',
            system: 'Azure DevOps'
          }
        ]
      }
    ]
  },
  {
    norm: 'ISO/IEC 27001:2022',
    normCode: 'iso-27001',
    evidences: [
      {
        category: 'Gestão de Vulnerabilidades',
        items: [
          {
            evidence: 'SOP-003: Gestão de Vulnerabilidades',
            where: 'Azure Repos → docs/sop/SOP-003-Vulnerability-Management.md',
            howToAccess: 'Procedimento documentado',
            system: 'Azure Repos'
          },
          {
            evidence: 'Findings no DefectDojo',
            where: 'DefectDojo → Findings',
            howToAccess: 'Findings de SAST/SCA/DAST',
            system: 'DefectDojo'
          },
          {
            evidence: 'Relatórios de Scan (SAST)',
            where: 'SonarCloud → Project Dashboard',
            howToAccess: 'Quality Gate e métricas',
            system: 'SonarCloud'
          },
          {
            evidence: 'Relatórios de Scan (SCA)',
            where: 'DefectDojo → Findings → Tipo "SCA"',
            howToAccess: 'Filtro: Test Type = Trivy',
            system: 'DefectDojo'
          },
          {
            evidence: 'Relatórios de Scan (DAST)',
            where: 'DefectDojo → Findings → Tipo "DAST"',
            howToAccess: 'Filtro: Test Type = ZAP',
            system: 'DefectDojo'
          }
        ]
      },
      {
        category: 'Triagem e Gestão',
        items: [
          {
            evidence: 'Triagem de Vulnerabilidades',
            where: 'DefectDojo → Findings → Status',
            howToAccess: 'Status: Triaged, False Positive, etc.',
            system: 'DefectDojo'
          },
          {
            evidence: 'Comentários de Triagem',
            where: 'DefectDojo → Findings → Comments',
            howToAccess: 'Análise do AppSec/QA',
            system: 'DefectDojo'
          },
          {
            evidence: 'Deduplicação Automática',
            where: 'DefectDojo → Findings → "Duplicate"',
            howToAccess: 'Status do finding',
            system: 'DefectDojo'
          },
          {
            evidence: 'Auto-Close de Vulnerabilidades',
            where: 'DefectDojo → Findings → Status = "Mitigated"',
            howToAccess: 'Histórico de mudanças',
            system: 'DefectDojo'
          }
        ]
      },
      {
        category: 'Monitoramento Contínuo',
        items: [
          {
            evidence: 'Scans Diários',
            where: 'DefectDojo → Findings → Source = "Daily Scan"',
            howToAccess: 'Findings de scans agendados',
            system: 'DefectDojo'
          },
          {
            evidence: 'Logs de Monitoramento',
            where: 'Azure Sentinel → Logs',
            howToAccess: 'Queries KQL',
            system: 'Azure Sentinel'
          },
          {
            evidence: 'Dashboard de Monitoramento',
            where: 'Azure Sentinel → Workbooks',
            howToAccess: 'Visualizações de segurança',
            system: 'Azure Sentinel'
          },
          {
            evidence: 'Certificado de Segurança',
            where: 'SharePoint → /DHF/Version/v1.0.0/security-certificate-v1.0.0.pdf',
            howToAccess: 'PDF exportado do DefectDojo',
            system: 'SharePoint'
          }
        ]
      },
      {
        category: 'SLA e Controle',
        items: [
          {
            evidence: 'SLA de Correção',
            where: 'Azure DevOps → Bug → Custom Field "SLA"',
            howToAccess: 'Campo customizado de SLA',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Data de Criação vs. Resolução',
            where: 'Azure DevOps → Bug → Dates',
            howToAccess: 'Lead time de correção',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Pipeline Bloqueado por Vulnerabilidades',
            where: 'Azure DevOps → Pipeline → Failed Runs',
            howToAccess: 'Runs falhados por gate de segurança',
            system: 'Azure DevOps'
          }
        ]
      }
    ]
  },
  {
    norm: 'RDC 657/2022 (ANVISA)',
    normCode: 'rdc-657',
    evidences: [
      {
        category: 'Documentação Técnica',
        items: [
          {
            evidence: 'DHF Completo',
            where: 'SharePoint → /DHF/Version/v1.0.0/',
            howToAccess: 'PDF assinado digitalmente',
            system: 'SharePoint'
          },
          {
            evidence: 'Matriz de Rastreabilidade',
            where: 'SharePoint → DHF → Seção Traceability',
            howToAccess: 'Mapeamento completo Requisito → Código → Testes',
            system: 'SharePoint'
          },
          {
            evidence: 'Especificações Técnicas',
            where: 'Azure Repos → spec-kit/specs/',
            howToAccess: 'Especificações versionadas',
            system: 'Azure Repos'
          }
        ]
      },
      {
        category: 'Controle de Mudanças',
        items: [
          {
            evidence: 'SOP-005: Controle de Mudança',
            where: 'Azure Repos → docs/sop/SOP-005-Change-Control.md',
            howToAccess: 'Procedimento documentado',
            system: 'Azure Repos'
          },
          {
            evidence: 'Change Requests',
            where: 'Azure DevOps → Boards → Work Item Type "Change Request"',
            howToAccess: 'Work Items de mudança',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Histórico de Versões',
            where: 'Azure Repos → Tags',
            howToAccess: 'Tags semânticas de releases',
            system: 'Azure Repos'
          }
        ]
      }
    ]
  },
  {
    norm: 'FDA 21 CFR Part 820',
    normCode: 'fda-820',
    evidences: [
      {
        category: 'Quality System Regulation',
        items: [
          {
            evidence: 'Sistema de Gestão da Qualidade',
            where: 'Azure Repos → docs/PROCESS.md + docs/sop/',
            howToAccess: 'Documentação completa de processos',
            system: 'Azure Repos'
          },
          {
            evidence: 'DHF (Design History File)',
            where: 'SharePoint → /DHF/Version/v1.0.0/',
            howToAccess: 'PDF assinado, imutável',
            system: 'SharePoint'
          },
          {
            evidence: 'Controle de Documentação',
            where: 'Azure DevOps + SharePoint',
            howToAccess: 'Versionamento e imutabilidade',
            system: 'Azure DevOps + SharePoint'
          }
        ]
      },
      {
        category: 'Design Controls',
        items: [
          {
            evidence: 'Requisitos de Design',
            where: 'Azure DevOps → Boards → Work Items',
            howToAccess: 'Requisitos rastreados',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Validação de Design',
            where: 'Azure DevOps → Test Plans',
            howToAccess: 'Testes de validação',
            system: 'Azure DevOps'
          },
          {
            evidence: 'Transferência de Design',
            where: 'SharePoint → /DHF/Version/v1.0.0/',
            howToAccess: 'DHF assinado no release',
            system: 'SharePoint'
          }
        ]
      }
    ]
  }
]

export default function AuditoriaPage() {
  const [expandedNorms, setExpandedNorms] = useState<Record<string, boolean>>({})

  const toggleNorm = (normCode: string) => {
    setExpandedNorms((prev) => ({
      ...prev,
      [normCode]: !prev[normCode],
    }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FileCheck className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Evidências para Auditoria
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Organização das evidências por norma regulatória. Encontre rapidamente o que pode ser auditado em cada norma.
          </p>
        </div>

        {/* Systems Overview */}
        <Card className="mb-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Info className="h-6 w-6 text-primary" />
              Sistemas de Armazenamento de Evidências
            </CardTitle>
            <CardDescription>
              Visão geral dos sistemas onde as evidências são geradas e armazenadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Azure DevOps</h3>
                <p className="text-sm text-gray-600">Work Items, Test Plans, Pipelines, Commits</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">SharePoint</h3>
                <p className="text-sm text-gray-600">DHF, Documentos Assinados, Imutáveis</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">DefectDojo</h3>
                <p className="text-sm text-gray-600">Vulnerabilidades, Scans, Triagem</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Azure Repos</h3>
                <p className="text-sm text-gray-600">Código, Commits, Versionamento Git</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">SonarCloud</h3>
                <p className="text-sm text-gray-600">Relatórios SAST, Métricas</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Azure Sentinel</h3>
                <p className="text-sm text-gray-600">Logs, Incidentes SIEM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Evidences by Regulatory Norm */}
        <div className="space-y-6">
          {regulatoryEvidences.map((regulatory) => (
            <Card key={regulatory.normCode} className="border-cyan shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-semibold text-gray-800">{regulatory.norm}</CardTitle>
                    <CardDescription className="mt-1">
                      Evidências disponíveis para auditoria desta norma
                    </CardDescription>
                  </div>
                  <button
                    onClick={() => toggleNorm(regulatory.normCode)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {expandedNorms[regulatory.normCode] ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </div>
              </CardHeader>
              {expandedNorms[regulatory.normCode] && (
                <CardContent>
                  <div className="space-y-6">
                    {regulatory.evidences.map((category, catIdx) => (
                      <div key={catIdx} className="border-l-4 border-primary pl-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">{category.category}</h3>
                        <div className="space-y-3">
                          {category.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <h4 className="font-semibold text-gray-800 flex-1">{item.evidence}</h4>
                                <Badge variant="outline" className="text-xs flex-shrink-0">
                                  {item.system}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <span className="font-medium text-gray-700">Onde está:</span>
                                  <p className="text-gray-600 mt-1">{item.where}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Como acessar:</span>
                                  <p className="text-gray-600 mt-1">{item.howToAccess}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Document Reference */}
        <Card className="mt-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Documento Completo de Evidências
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Para acesso detalhado a todas as evidências, incluindo localização exata por fase do ciclo de vida, 
              instruções de acesso detalhadas e responsáveis, consulte o documento completo de mapeamento de evidências.
            </p>
            <Link 
              href="/documentos/audit-evidences"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Ver Documento Completo de Evidências <ExternalLink className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

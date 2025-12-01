'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, ExternalLink, FileText, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { getSlugFromPath } from '@/lib/document-slugs'

const norms = [
  {
    id: 'iso-13485',
    name: 'ISO 13485:2016',
    title: 'Sistema de Gestão da Qualidade',
    description: 'Sistema de gestão da qualidade para dispositivos médicos. Define os requisitos para um sistema de gestão da qualidade abrangente.',
    implementation: 'Implementado através dos SOPs (Standard Operating Procedures) e processos documentados em todo o ciclo de vida.',
    documents: [
      { name: 'Processo Integrado', path: 'docs/PROCESS.md' },
      { name: 'Documentação Regulatória', path: 'docs/regulatory/ISO-13485/README.md' }
    ],
    link: '/documentos/process'
  },
  {
    id: 'iec-62304',
    name: 'IEC 62304:2006+A1:2015',
    title: 'Ciclo de Vida de Software Médico',
    description: 'Processos do ciclo de vida de software para dispositivos médicos. Define as atividades necessárias para desenvolver software médico seguro.',
    implementation: 'Implementado através do SDLC documentado no SOP-001, com fases claramente definidas e rastreabilidade completa.',
    documents: [
      { name: 'SOP-001: SDLC', path: 'docs/sop/SOP-001-SDLC.md' },
      { name: 'Documentação Regulatória', path: 'docs/regulatory/IEC-62304/README.md' }
    ],
    link: '/documentos/sop-001-sdlc'
  },
  {
    id: 'iec-62366-1',
    name: 'IEC 62366-1:2015',
    title: 'Engenharia de Usabilidade',
    description: 'Aplicação da engenharia de usabilidade a dispositivos médicos. Garante que o software seja seguro e eficaz para uso.',
    implementation: 'Implementado durante a FASE 1, com perfil de usuário, tarefas principais e testes formativos/somativos documentados.',
    documents: [
      { name: 'Documentação Regulatória', path: 'docs/regulatory/IEC-62366-1/README.md' }
    ],
    link: '/documentos/process'
  },
  {
    id: 'iso-14971',
    name: 'ISO 14971:2019',
    title: 'Gestão de Riscos',
    description: 'Aplicação da gestão de riscos a dispositivos médicos. Define o processo de identificação, análise e mitigação de riscos.',
    implementation: 'Implementado através do SOP-002 e processo de análise de riscos (Safety, Security, Usability) documentado.',
    documents: [
      { name: 'SOP-002: Gestão de Riscos', path: 'docs/sop/SOP-002-Risk-Management.md' },
      { name: 'Plano de Aceitação de Riscos', path: 'docs/RISK-ACCEPTANCE-PLAN.md' },
      { name: 'Documentação Regulatória', path: 'docs/regulatory/ISO-14971/README.md' }
    ],
    link: '/documentos/sop-002-risk-management'
  },
  {
    id: 'iso-27001',
    name: 'ISO/IEC 27001:2022',
    title: 'Segurança da Informação',
    description: 'Sistema de gestão de segurança da informação. Define requisitos para estabelecer, implementar e manter um SGSI.',
    implementation: 'Implementado através do SOP-003, gestão centralizada de vulnerabilidades via DefectDojo e monitoramento contínuo.',
    documents: [
      { name: 'SOP-003: Gestão de Vulnerabilidades', path: 'docs/sop/SOP-003-Vulnerability-Management.md' },
      { name: 'Documentação Regulatória', path: 'docs/regulatory/ISO-27001-27701/README.md' }
    ],
    link: '/documentos/sop-003-vulnerability-management'
  },
  {
    id: 'iso-27701',
    name: 'ISO/IEC 27701:2019',
    title: 'Sistema de Gestão de Privacidade',
    description: 'Extensão da ISO 27001 para gestão de privacidade. Suporta conformidade com LGPD/GDPR.',
    implementation: 'Implementado em conjunto com ISO 27001, através de controles de privacidade e proteção de dados de pacientes.',
    documents: [
      { name: 'Documentação Regulatória', path: 'docs/regulatory/ISO-27001-27701/README.md' }
    ],
    link: '/documentos/process'
  },
  {
    id: 'rdc-657',
    name: 'RDC 657/2022 (ANVISA)',
    title: 'Regulamentação ANVISA',
    description: 'Regulamentação brasileira para Software como Dispositivo Médico (SaMD). Define requisitos para registro na ANVISA.',
    implementation: 'Conformidade garantida através do DHF (Design History File) e documentação técnica armazenada no SharePoint.',
    documents: [
      { name: 'Documentação Regulatória', path: 'docs/regulatory/MARKET-REGULATIONS/README.md' }
    ],
    link: '/documentos/process'
  },
  {
    id: 'fda-820',
    name: 'FDA 21 CFR Part 820',
    title: 'Quality System Regulation',
    description: 'Regulamentação da FDA para sistemas de qualidade. Define requisitos para dispositivos médicos comercializados nos EUA.',
    implementation: 'Conformidade através do DHF e processos documentados que atendem aos requisitos do QSR.',
    documents: [
      { name: 'Documentação Regulatória', path: 'docs/regulatory/MARKET-REGULATIONS/README.md' }
    ],
    link: '/documentos/process'
  },
  {
    id: 'ce-mark',
    name: 'CE Mark',
    title: 'Conformidade Europeia',
    description: 'Marcação CE para dispositivos médicos comercializados na União Europeia. Conformidade com MDR 2017/745.',
    implementation: 'Processo de certificação documentado e evidências de conformidade armazenadas no DHF.',
    documents: [
      { name: 'Documentação Regulatória', path: 'docs/regulatory/CE-MARK/README.md' }
    ],
    link: '/documentos/process'
  }
]

export default function ConformidadePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">
              Conformidade Regulatória
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Visão completa das normas e regulamentações aplicáveis ao nCommand Lite e como são implementadas através do processo &quot;Compliance as Code&quot;.
          </p>
        </div>

        {/* Info Card */}
        <Card className="mb-8 border-2 border-primary/20 shadow-cyan-lg bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Metodologia &quot;Compliance as Code&quot;
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              A conformidade regulatória é garantida através de barreiras técnicas automatizadas (Gates) dentro da esteira de CI/CD, 
              onde os requisitos regulatórios são impostas automaticamente pelo processo. Isso elimina a necessidade de verificações 
              manuais pós-desenvolvimento e garante conformidade contínua.
            </p>
            <Link href="/documentos/process" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
              Ver Processo Integrado Completo <ExternalLink className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        {/* Norms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {norms.map((norm) => (
            <Card key={norm.id} className="border-cyan shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-800">{norm.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">Regulatório</Badge>
                </div>
                <CardDescription className="text-base font-medium text-gray-700">
                  {norm.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {norm.description}
                </p>
                
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Como é Implementado:</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {norm.implementation}
                  </p>
                </div>

                {norm.documents && norm.documents.length > 0 && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Documentos Relacionados:</p>
                    <ul className="space-y-1">
                      {norm.documents.map((doc, idx) => (
                        <li key={idx}>
                          <Link 
                            href={`/documentos/${getSlugFromPath(doc.path)}`}
                            className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                          >
                            <FileText className="h-3 w-3" />
                            {doc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-3">
                  <Link 
                    href={norm.link}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                  >
                    Ver Detalhes <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card className="mt-8 border-cyan shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Recursos Adicionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/documentos/compliance-matrix"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">Matriz de Conformidade</h3>
                <p className="text-sm text-gray-600">Mapeamento detalhado de requisitos regulatórios para implementação.</p>
              </Link>
              <Link 
                href="/documentos/regulatory-access-guide"
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-800 mb-2">Guia de Acesso aos Documentos</h3>
                <p className="text-sm text-gray-600">Como adquirir e acessar os documentos normativos completos.</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

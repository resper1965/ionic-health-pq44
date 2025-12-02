'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Code, FileText, Shield, AlertTriangle, Users, Clock } from 'lucide-react'

export default function ThreatModelingSetupPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-red-300">
                        Ferramentas & Implementação
                    </Badge>
                    <h1 className="text-5xl font-bold text-gradient-primary">
                        Threat Modeling com PyTM
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        Modelagem de ameaças automatizada usando Python - Arquitetura como Código
                    </p>
                </div>

                {/* Overview */}
                <Card className="mb-12 border-2 border-red-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Shield className="h-7 w-7 text-red-600" />
                            O que é Threat Modeling?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Threat Modeling</strong> é o processo de identificar, documentar e mitigar ameaças de segurança
                            durante a fase de design do software. Para SaMD (Software as a Medical Device), é <strong>obrigatório</strong>
                            conforme <strong>IEC 62304</strong> e análises de risco de segurança.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    <strong className="text-blue-900">Quando?</strong>
                                </div>
                                <p className="text-sm text-blue-700">Etapa 6.4 do PQ.044 - Durante especificação (SDS), ANTES de codificar</p>
                            </div>
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="h-5 w-5 text-green-600" />
                                    <strong className="text-green-900">Quem?</strong>
                                </div>
                                <p className="text-sm text-green-700">Arquiteto + CISO (revisão) + QA Leader (valida mitigações)</p>
                            </div>
                            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <FileText className="h-5 w-5 text-purple-600" />
                                    <strong className="text-purple-900">Output?</strong>
                                </div>
                                <p className="text-sm text-purple-700">DFD + Lista STRIDE + Mitigações → DefectDojo + Docnix</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* PyTM Introduction */}
                <Card className="mb-12 border-2 border-gray-200 shadow-md">
                    <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Code className="h-7 w-7 text-gray-700" />
                            PyTM - Python Threat Modeling
                        </CardTitle>
                        <CardDescription className="text-base">
                            Biblioteca que define arquitetura como código Python e gera STRIDE threats automaticamente
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                            <div className="text-gray-400"># Instalação</div>
                            <div>pip install pytm</div>
                            <br />
                            <div className="text-gray-400"># Exemplo: pytm/ncommand_lite_model.py</div>
                            <div><span className="text-blue-400">from</span> pytm <span className="text-blue-400">import</span> TM, Server, Datastore, Dataflow, Boundary, Actor</div>
                            <br />
                            <div className="text-gray-400"># 1. Definir o modelo</div>
                            <div>tm = TM(<span className="text-green-400">"nCommand Lite"</span>)</div>
                            <div>tm.description = <span className="text-green-400">"Healthcare SaMD Platform - Threat Model"</span></div>
                            <br />
                            <div className="text-gray-400"># 2. Definir componentes</div>
                            <div>internet = Boundary(<span className="text-green-400">"Internet"</span>)</div>
                            <div>azure_cloud = Boundary(<span className="text-green-400">"Azure Cloud"</span>)</div>
                            <br />
                            <div>user = Actor(<span className="text-green-400">"Healthcare Professional"</span>)</div>
                            <div>web_app = Server(<span className="text-green-400">"Next.js Web App"</span>)</div>
                            <div>api_server = Server(<span className="text-green-400">"API Gateway"</span>)</div>
                            <div>database = Datastore(<span className="text-green-400">"PostgreSQL Database"</span>)</div>
                            <br />
                            <div className="text-gray-400"># 3. Definir fluxos de dados</div>
                            <div>login_flow = Dataflow(user, web_app, <span className="text-green-400">"HTTPS Login"</span>)</div>
                            <div>login_flow.protocol = <span className="text-green-400">"HTTPS"</span></div>
                            <div>login_flow.isEncrypted = <span className="text-blue-400">True</span></div>
                            <br />
                            <div>db_query = Dataflow(api_server, database, <span className="text-green-400">"SQL Query"</span>)</div>
                            <div>db_query.protocol = <span className="text-green-400">"PostgreSQL"</span></div>
                            <div>db_query.isEncrypted = <span className="text-blue-400">True</span></div>
                            <br />
                            <div className="text-gray-400"># 4. Gerar outputs</div>
                            <div>tm.process()</div>
                        </div>
                        <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                            <p className="text-sm text-yellow-900">
                                <strong>💡 Benefício:</strong> Ao definir a arquitetura como código, o modelo vive no Git,
                                tem versionamento, e é auditável. Mudanças na arquitetura = atualização do modelo = novas threats identificadas.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Outputs Generated */}
                <Card className="mb-12 border-2 border-green-200 shadow-md">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                        <CardTitle className="text-2xl">Outputs Gerados Automaticamente</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                                <h3 className="font-bold text-lg text-blue-900 mb-2">1. DFD (Data Flow Diagram) - dfd.png</h3>
                                <ul className="space-y-1 text-sm text-blue-800">
                                    <li>• Diagrama visual da arquitetura</li>
                                    <li>• Mostra boundaries, atores, servidores, datastores</li>
                                    <li>• Fluxos de dados com protocolo e criptografia</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                                <h3 className="font-bold text-lg text-orange-900 mb-2">2. Threat Report - threats.md</h3>
                                <div className="bg-white p-3 rounded border border-orange-200 font-mono text-xs">
                                    <div className="font-bold">## STRIDE Threats Identified</div>
                                    <br />
                                    <div>### T001 - Spoofing: User credentials could be intercepted</div>
                                    <div>- **Component:** Login Flow</div>
                                    <div>- **Category:** Spoofing</div>
                                    <div>- **Severity:** High</div>
                                    <div>- **Mitigation:** HTTPS + MFA implementation</div>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
                                <h3 className="font-bold text-lg text-purple-900 mb-2">3. JSON Export - threats.json</h3>
                                <div className="bg-white p-3 rounded border border-purple-200 font-mono text-xs">
                                    {`{
  "threats": [
    {
      "id": "T001",
      "category": "Spoofing",
      "component": "Login Flow",
      "severity": "High",
      "mitigation": "HTTPS + MFA"
    }
  ]
}`}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Pipeline Integration */}
                <Card className="mb-12 border-2 border-purple-200 shadow-md">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                        <CardTitle className="text-2xl">Integração no Pipeline CI/CD</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                        <p className="text-gray-700">
                            O threat modeling deve ser executado automaticamente no pipeline sempre que houver mudanças na arquitetura:
                        </p>
                        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                            <div className="text-gray-400"># Azure Pipeline - azure-pipelines.yml</div>
                            <div><span className="text-blue-400">-</span> task: Bash@3</div>
                            <div>  displayName: <span className="text-green-400">'Run Threat Modeling'</span></div>
                            <div>  inputs:</div>
                            <div>    script: |</div>
                            <div>      cd pytm</div>
                            <div>      python ncommand_lite_model.py --report --dfd</div>
                            <div>      <span className="text-gray-400"># Gera: dfd.png, threats.md, threats.json</span></div>
                            <br />
                            <div><span className="text-blue-400">-</span> task: PublishBuildArtifacts@1</div>
                            <div>  inputs:</div>
                            <div>    PathtoPublish: <span className="text-green-400">'pytm/output'</span></div>
                            <div>    ArtifactName: <span className="text-green-400">'ThreatModel'</span></div>
                            <br />
                            <div><span className="text-blue-400">-</span> task: Bash@3</div>
                            <div>  displayName: <span className="text-green-400">'Upload to DefectDojo'</span></div>
                            <div>  inputs:</div>
                            <div>    script: |</div>
                            <div>      <span className="text-gray-400"># Push threats para DefectDojo como "Design Flaws"</span></div>
                            <div>      curl -X POST https://defectdojo.ionic.health/api/v2/import-scan/ \</div>
                            <div>        -H <span className="text-green-400">"Authorization: Token $DD_TOKEN"</span> \</div>
                            <div>        -F <span className="text-green-400">"file=@threats.json"</span> \</div>
                            <div>        -F <span className="text-green-400">"scan_type=Generic Findings"</span> \</div>
                            <div>        -F <span className="text-green-400">"product_name=nCommand Lite"</span></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Deliverables */}
                <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <CheckCircle2 className="h-7 w-7 text-green-600" />
                            Entrega Final: O que você terá
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Artefatos Gerados</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Modelo da arquitetura versionado em Git</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>DFD visual (PNG/SVG) para documentação</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Lista completa de ameaças STRIDE</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Upload automático para Docnix/SharePoint</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg text-gray-900">Integração com Ferramentas</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>DefectDojo rastreia cada ameaça como Finding</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Azure DevOps cria Work Items para mitigações</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Dashboard de ameaças em tempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Auditoria: prova de threat modeling realizado</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

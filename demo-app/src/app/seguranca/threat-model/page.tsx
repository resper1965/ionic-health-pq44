'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, AlertCircle, CheckCircle2, Clock, FileText } from 'lucide-react'
import Link from 'next/link'

// Inline threat data
const threatsData = {
    "metadata": {
        "model": "nCommand Lite - Healthcare SaMD Platform",
        "version": "1.0.0",
        "generated": "2024-12-01T10:00:00Z",
        "tool": "PyTM v1.3.0"
    },
    "threats": [
        {
            "id": "T001",
            "category": "Spoofing",
            "component": "Login Flow",
            "description": "User credentials could be intercepted during authentication",
            "severity": "High",
            "likelihood": "Medium",
            "risk": "High",
            "mitigation": "HTTPS enforcement + MFA implementation + Strong password policy",
            "status": "Mitigated",
            "owner": "Security Team",
            "references": ["OWASP A07:2021", "CWE-287"]
        },
        {
            "id": "T002",
            "category": "Tampering",
            "component": "API Gateway",
            "description": "SQL Injection in database queries via API endpoints",
            "severity": "Critical",
            "likelihood": "Medium",
            "risk": "Critical",
            "mitigation": "Parameterized queries + ORM usage + Input validation + WAF rules",
            "status": "Mitigated",
            "owner": "Development Team",
            "references": ["OWASP A03:2021", "CWE-89"]
        },
        {
            "id": "T003",
            "category": "Repudiation",
            "component": "Audit Log",
            "description": "User actions could be performed without proper audit trail",
            "severity": "Medium",
            "likelihood": "Low",
            "risk": "Medium",
            "mitigation": "Comprehensive audit logging + Immutable log storage in Azure Monitor",
            "status": "Mitigated",
            "owner": "Infrastructure Team",
            "references": ["ISO 27001 A.12.4.1"]
        },
        {
            "id": "T004",
            "category": "Information Disclosure",
            "component": "Database",
            "description": "PHI/PII exposure through database backup files",
            "severity": "Critical",
            "likelihood": "Medium",
            "risk": "Critical",
            "mitigation": "Encryption at rest (TDE) + Access control on backups + Azure Key Vault",
            "status": "Mitigated",
            "owner": "Infrastructure Team",
            "references": ["HIPAA 164.312(a)(2)(iv)", "GDPR Art. 32"]
        },
        {
            "id": "T005",
            "category": "Information Disclosure",
            "component": "API Responses",
            "description": "Verbose error messages could leak system information",
            "severity": "Medium",
            "likelihood": "High",
            "risk": "Medium",
            "mitigation": "Generic error messages + Detailed logging server-side only",
            "status": "Mitigated",
            "owner": "Development Team",
            "references": ["OWASP A05:2021", "CWE-209"]
        },
        {
            "id": "T006",
            "category": "Denial of Service",
            "component": "Web Server",
            "description": "Resource exhaustion through unbounded API requests",
            "severity": "Medium",
            "likelihood": "High",
            "risk": "Medium",
            "mitigation": "Rate limiting + API throttling + Azure WAF + Auto-scaling",
            "status": "Mitigated",
            "owner": "Infrastructure Team",
            "references": ["OWASP A04:2021"]
        },
        {
            "id": "T007",
            "category": "Elevation of Privilege",
            "component": "Authorization Module",
            "description": "Horizontal privilege escalation - accessing other users' data",
            "severity": "High",
            "likelihood": "Medium",
            "risk": "High",
            "mitigation": "Row-Level Security (RLS) in PostgreSQL + Object-level permissions + Unit tests",
            "status": "Mitigated",
            "owner": "Development Team",
            "references": ["OWASP A01:2021", "CWE-639"]
        },
        {
            "id": "T008",
            "category": "Spoofing",
            "component": "Session Management",
            "description": "Session hijacking through XSS or session fixation",
            "severity": "High",
            "likelihood": "Medium",
            "risk": "High",
            "mitigation": "HTTPOnly + Secure + SameSite cookies + Short session timeout + CSRF tokens",
            "status": "Mitigated",
            "owner": "Development Team",
            "references": ["OWASP A02:2021", "CWE-384"]
        },
        {
            "id": "T009",
            "category": "Tampering",
            "component": "Data in Transit",
            "description": "Man-in-the-middle attacks on API communications",
            "severity": "Critical",
            "likelihood": "Low",
            "risk": "High",
            "mitigation": "TLS 1.3 only + Certificate pinning + HSTS headers",
            "status": "Mitigated",
            "owner": "Infrastructure Team",
            "references": ["OWASP A02:2021", "CWE-300"]
        },
        {
            "id": "T010",
            "category": "Information Disclosure",
            "component": "Third-party Libraries (SOUP)",
            "description": "Known vulnerabilities in dependencies",
            "severity": "Variable",
            "likelihood": "High",
            "risk": "Variable",
            "mitigation": "Trivy SCA scans + Automated dependency updates + DefectDojo tracking",
            "status": "In Progress",
            "owner": "Security Team",
            "references": ["OWASP A06:2021", "IEC 62304 5.3.4"]
        },
        {
            "id": "T011",
            "category": "Denial of Service",
            "component": "File Upload",
            "description": "Storage exhaustion through unlimited file uploads",
            "severity": "Medium",
            "likelihood": "Medium",
            "risk": "Medium",
            "mitigation": "File size limits + Quota enforcement + Virus scanning",
            "status": "Open",
            "owner": "Development Team",
            "references": ["OWASP A04:2021"]
        },
        {
            "id": "T012",
            "category": "Elevation of Privilege",
            "component": "Admin Panel",
            "description": "Vertical privilege escalation to admin role",
            "severity": "Critical",
            "likelihood": "Low",
            "risk": "High",
            "mitigation": "Role-based access control (RBAC) + Admin actions audit + MFA for admin",
            "status": "Mitigated",
            "owner": "Development Team",
            "references": ["OWASP A01:2021", "CWE-269"]
        }
    ],
    "summary": {
        "total_threats": 12,
        "by_status": {
            "Mitigated": 9,
            "In Progress": 1,
            "Open": 2
        },
        "by_category": {
            "Spoofing": 2,
            "Tampering": 2,
            "Repudiation": 1,
            "Information Disclosure": 4,
            "Denial of Service": 2,
            "Elevation of Privilege": 2
        },
        "by_severity": {
            "Critical": 4,
            "High": 5,
            "Medium": 5
        }
    }
}

// Explicit mapping for Tailwind classes to ensure they are included in the build
const severityStyles: Record<string, { badge: string, border: string, dot: string }> = {
    Critical: {
        badge: 'bg-red-100 text-red-900',
        border: 'border-red-500',
        dot: 'bg-red-500'
    },
    High: {
        badge: 'bg-orange-100 text-orange-900',
        border: 'border-orange-500',
        dot: 'bg-orange-500'
    },
    Medium: {
        badge: 'bg-yellow-100 text-yellow-900',
        border: 'border-yellow-500',
        dot: 'bg-yellow-500'
    },
    Variable: {
        badge: 'bg-gray-100 text-gray-900',
        border: 'border-gray-500',
        dot: 'bg-gray-500'
    }
}

const statusStyles: Record<string, { icon: any, color: string, bg: string, label: string }> = {
    Mitigated: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100', label: 'Mitigado' },
    'In Progress': { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100', label: 'Em Progresso' },
    Open: { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-100', label: 'Aberto' }
}

const strideStyles: Record<string, string> = {
    Spoofing: 'bg-purple-100 text-purple-900 border-purple-300',
    Tampering: 'bg-blue-100 text-blue-900 border-blue-300',
    Repudiation: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    'Information Disclosure': 'bg-red-100 text-red-900 border-red-300',
    'Denial of Service': 'bg-orange-100 text-orange-900 border-orange-300',
    'Elevation of Privilege': 'bg-pink-100 text-pink-900 border-pink-300'
}

export default function ThreatModelDemoPage() {
    const { threats, summary, metadata } = threatsData

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center space-y-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm border-red-300">
                        Segurança - Threat Model
                    </Badge>
                    <h1 className="text-5xl font-bold text-gradient-primary">
                        Threat Model do nCommand Lite
                    </h1>
                    <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
                        Ameaças identificadas via STRIDE usando <strong>PyTM</strong> - Arquitetura como Código
                    </p>
                </div>

                {/* Metadata Card */}
                <Card className="mb-12 border-2 border-blue-200 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <FileText className="h-7 w-7 text-blue-600" />
                            Informações do Modelo
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <div className="text-sm text-gray-600">Modelo</div>
                                <div className="font-semibold">{metadata.model}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Versão</div>
                                <div className="font-semibold">{metadata.version}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Gerado em</div>
                                <div className="font-semibold">{new Date(metadata.generated).toLocaleDateString('pt-BR')}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Ferramenta</div>
                                <div className="font-semibold">{metadata.tool}</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Summary Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* By Status */}
                    <Card className="border-2 border-green-200">
                        <CardHeader>
                            <CardTitle className="text-lg">Status das Ameaças</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {Object.entries(summary.by_status).map(([status, count]) => {
                                    const style = statusStyles[status] || statusStyles['Open']
                                    const Icon = style.icon
                                    return (
                                        <div key={status} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center gap-2">
                                                <Icon className={`h-5 w-5 ${style.color}`} />
                                                <span className="font-medium">{style.label}</span>
                                            </div>
                                            <Badge className={style.bg}>{count}</Badge>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* By Category (STRIDE) */}
                    <Card className="border-2 border-purple-200">
                        <CardHeader>
                            <CardTitle className="text-lg">Por Categoria STRIDE</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {Object.entries(summary.by_category).map(([category, count]) => (
                                    <div key={category} className="flex items-center justify-between text-sm">
                                        <span className="font-medium">{category}</span>
                                        <Badge variant="outline">{count}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* By Severity */}
                    <Card className="border-2 border-red-200">
                        <CardHeader>
                            <CardTitle className="text-lg">Por Severidade</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {Object.entries(summary.by_severity).map(([severity, count]) => {
                                    const style = severityStyles[severity] || severityStyles['Variable']
                                    return (
                                        <div key={severity} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-3 h-3 rounded-full ${style.dot}`}></div>
                                                <span className="font-medium">{severity}</span>
                                            </div>
                                            <Badge className={style.badge}>{count}</Badge>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Threats List */}
                <div className="space-y-6 mb-12">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-gray-900">Ameaças Identificadas ({summary.total_threats})</h2>
                        <Link href="/ferramentas/threat-modeling">
                            <Badge className="bg-purple-600 text-white cursor-pointer hover:bg-purple-700">
                                Ver Guia de Setup
                            </Badge>
                        </Link>
                    </div>

                    {threats.map((threat) => {
                        const statusStyle = statusStyles[threat.status] || statusStyles['Open']
                        const severityStyle = severityStyles[threat.severity] || severityStyles['Variable']
                        const strideClass = strideStyles[threat.category] || 'bg-gray-100 text-gray-900'
                        const StatusIcon = statusStyle.icon

                        return (
                            <Card key={threat.id} className={`border-l-4 ${severityStyle.border} shadow-md`}>
                                <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Badge variant="outline" className="font-mono">{threat.id}</Badge>
                                                <Badge className={`${strideClass} border`}>
                                                    {threat.category}
                                                </Badge>
                                                <Badge className={severityStyle.badge}>
                                                    {threat.severity}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-xl mb-1">{threat.description}</CardTitle>
                                            <CardDescription className="text-base">
                                                <strong>Componente:</strong> {threat.component}
                                            </CardDescription>
                                        </div>
                                        <div className={`px-4 py-2 rounded-lg ${statusStyle.bg}`}>
                                            <div className="flex items-center gap-2">
                                                <StatusIcon className={`h-5 w-5 ${statusStyle.color}`} />
                                                <span className="font-semibold text-sm">{statusStyle.label}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-sm text-gray-700 mb-2">Mitigação Implementada</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">{threat.mitigation}</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="font-semibold text-sm text-gray-700 mb-1">Responsável</h4>
                                                <Badge variant="outline">{threat.owner}</Badge>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm text-gray-700 mb-1">Referências</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {threat.references.map((ref) => (
                                                        <Badge key={ref} variant="secondary" className="text-xs">{ref}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Info Banner */}
                <Card className="border-2 border-blue-200 bg-blue-50">
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                            <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-blue-900 mb-2">Integração com DefectDojo</h3>
                                <p className="text-sm text-blue-800 mb-3">
                                    Cada ameaça identificada é automaticamente registrada no DefectDojo como um <strong>Finding</strong>
                                    do tipo "Design Flaw". O status é sincronizado: quando a mitigação é implementada e verificada,
                                    o finding é marcado como <strong>Mitigated</strong>.
                                </p>
                                <div className="flex gap-2">
                                    <Badge className="bg-blue-600 text-white">DefectDojo Sync</Badge>
                                    <Badge variant="outline" className="border-blue-400">Azure DevOps Work Items</Badge>
                                    <Badge variant="outline" className="border-blue-400">Auto-uploaded to Docnix</Badge>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

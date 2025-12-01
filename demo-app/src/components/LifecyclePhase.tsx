'use client'

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, AlertCircle, Clock, FileText, Settings, Package, BookOpen, ExternalLink } from "lucide-react"
import { PhaseFlowDiagram } from "./PhaseFlowDiagram"

export interface DocumentLink {
  title: string
  path: string
  type?: 'sop' | 'regulatory' | 'process' | 'template'
}

export interface PhaseStatus {
  id: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'pending' | 'approved'
  artifacts: string[]
  tools: string[]
  outputs: string[]
  documents?: DocumentLink[]
}

interface LifecyclePhaseProps {
  phase: PhaseStatus
  phaseNumber: number
}

export function LifecyclePhase({ phase, phaseNumber }: LifecyclePhaseProps) {
  const getStatusIcon = () => {
    switch (phase.status) {
      case 'completed':
      case 'approved':
        return <CheckCircle2 className="h-6 w-6 text-primary" />
      case 'in-progress':
        return <Clock className="h-6 w-6 text-yellow-500" />
      case 'pending':
        return <Circle className="h-6 w-6 text-gray-400" />
      default:
        return <AlertCircle className="h-6 w-6 text-red-500" />
    }
  }

  const getStatusBadge = () => {
    switch (phase.status) {
      case 'completed':
        return <Badge variant="success" className="shadow-sm">Completo</Badge>
      case 'approved':
        return <Badge variant="cyan" className="shadow-sm">Aprovado</Badge>
      case 'in-progress':
        return <Badge variant="warning">Em Progresso</Badge>
      case 'pending':
        return <Badge variant="secondary">Pendente</Badge>
      default:
        return <Badge variant="destructive">Erro</Badge>
    }
  }

  return (
    <Card className="w-full border-cyan hover:shadow-xl transition-smooth overflow-hidden">
      {/* Header com gradiente */}
      <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 p-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 border-2 border-primary text-primary font-bold text-lg shadow-cyan">
              {phaseNumber}
            </div>
            <div className="flex-1">
              <CardTitle className="text-white text-xl mb-1 flex items-center gap-2">
                {phase.title}
                {getStatusIcon()}
              </CardTitle>
              <CardDescription className="text-gray-200 mt-1 text-sm">
                {phase.description}
              </CardDescription>
            </div>
          </div>
          {getStatusBadge()}
        </div>
      </div>

      <CardContent className="p-6 space-y-6 bg-white">
        {/* Artefatos */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <FileText className="h-4 w-4 text-primary" />
            <span>Artefatos Gerados</span>
          </div>
          <ul className="space-y-2 ml-6">
            {phase.artifacts.map((artifact, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{artifact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ferramentas */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Settings className="h-4 w-4 text-primary" />
            <span>Ferramentas e Plataformas</span>
          </div>
          <div className="flex flex-wrap gap-2 ml-6">
            {phase.tools.map((tool, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-primary/5 hover:border-primary/30 transition-smooth"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Saídas */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Package className="h-4 w-4 text-primary" />
            <span>Saídas da Fase</span>
          </div>
          <ul className="space-y-2 ml-6">
            {phase.outputs.map((output, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Documentos */}
        {phase.documents && phase.documents.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>Documentação Relacionada</span>
            </div>
            <ul className="space-y-2 ml-6">
              {phase.documents.map((doc, idx) => {
                const githubUrl = `https://github.com/resper1965/ionic-health-pq44/blob/main/${doc.path}`
                return (
                  <li key={idx} className="text-sm text-gray-600">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 hover:underline transition-smooth"
                    >
                      <FileText className="h-4 w-4 flex-shrink-0" />
                      <span>{doc.title}</span>
                      <ExternalLink className="h-3 w-3 flex-shrink-0" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </CardContent>
      
      {/* Diagrama de Fluxo */}
      <PhaseFlowDiagram 
        phaseNumber={phaseNumber} 
        phaseTitle={phase.title.split(':')[0]}
      />
    </Card>
  )
}

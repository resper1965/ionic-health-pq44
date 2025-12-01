'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FullLifecycleDiagram } from '@/components/FullLifecycleDiagram'
import { AssetsArchitectureDiagram } from '@/components/AssetsArchitectureDiagram'

export default function CicloDeVidaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient-primary">
            Fluxos do Ciclo de Vida
          </h1>
          <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
            Visualização dos fluxos completos do processo regulatório do nCommand Lite
          </p>
        </div>

        {/* Arquitetura de Ativos */}
        <AssetsArchitectureDiagram />

        {/* Fluxo Completo do Ciclo de Vida */}
        <FullLifecycleDiagram />
      </div>
    </main>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Image
                src="/images/ionic-logo.png"
                alt="Ionic Health"
                width={200}
                height={70}
                className="h-20 w-auto object-contain"
                priority
              />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gradient-primary">
              nCommand Lite
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
            Ciclo de Vida Completo de Desenvolvimento SaMD
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Plataforma de apresentação demonstrando o processo regulatório completo de software médico, 
            desde o planejamento até o monitoramento pós-mercado, seguindo rigorosamente as normas IEC 62304 Class B.
          </p>
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            <Badge variant="gray" className="px-4 py-2 text-sm">IEC 62304 Class B</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-gray-300">ISO 13485:2016</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-gray-300">ISO 14971:2019</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-gray-300">Compliance as Code</Badge>
          </div>
        </div>

        {/* Cards de Navegação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/home">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Sobre o Projeto</CardTitle>
                <CardDescription>
                  Descrição completa do projeto, sumários e navegação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Conheça o nCommand Lite, as 5 fases do ciclo de vida, ferramentas e fontes da verdade, 
                  e navegue por todas as páginas da aplicação.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Explorar Projeto
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/ciclo-de-vida">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Fluxos do Ciclo de Vida</CardTitle>
                <CardDescription>
                  Diagramas interativos dos fluxos e processos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Visualize os fluxos completos do ciclo de vida regulatório com diagramas Mermaid interativos 
                  e arquitetura de ativos.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Ver Fluxos
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}

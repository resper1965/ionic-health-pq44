'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
  title?: string
  className?: string
}

export function MermaidDiagram({ chart, title, className = '' }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mermaidRef.current) return

    // Configuração do Mermaid com tema personalizado
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      themeVariables: {
        primaryColor: '#54c4cd',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#48b3bb',
        lineColor: '#58595b',
        secondaryColor: '#f0fdfe',
        tertiaryColor: '#e9ecef',
        background: '#ffffff',
        mainBkgColor: '#ffffff',
        secondBkgColor: '#f8f9fa',
        textColor: '#58595b',
        border1: '#58595b',
        border2: '#868e96',
        arrowheadColor: '#54c4cd',
        fontFamily: 'Inter, sans-serif',
      },
      flowchart: {
        curve: 'basis',
        padding: 20,
        nodeSpacing: 50,
        rankSpacing: 80,
      },
    })

    // Renderizar diagrama
    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
    mermaidRef.current.id = id
    
    mermaid.render(id, chart).then((result) => {
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = result.svg
      }
    }).catch((error) => {
      console.error('Erro ao renderizar Mermaid:', error)
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = `<p class="text-red-500 text-sm">Erro ao renderizar diagrama</p>`
      }
    })
  }, [chart])

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      )}
      <div 
        ref={mermaidRef} 
        className="mermaid-diagram flex justify-center items-center bg-white rounded-lg p-6 border border-gray-200 overflow-x-auto"
      />
    </div>
  )
}


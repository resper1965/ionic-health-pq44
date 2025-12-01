'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Carregar Mermaid apenas no cliente
const loadMermaid = () => import('mermaid')

interface MermaidDiagramProps {
  chart: string
  title?: string
  className?: string
}

export function MermaidDiagram({ chart, title, className = '' }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!mermaidRef.current || !chart) return

    let isMounted = true

    const renderDiagram = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Limpar conteúdo anterior
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = ''
        }

        // Carregar Mermaid dinamicamente
        const mermaid = await loadMermaid()
        const mermaidModule = mermaid.default || mermaid

        // Inicializar Mermaid apenas uma vez
        if (typeof window !== 'undefined' && !(window as any).mermaidInitialized) {
          mermaidModule.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
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
          ;(window as any).mermaidInitialized = true
        }

        // Renderizar diagrama
        const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`
        
        if (isMounted && mermaidRef.current) {
          const result = await mermaidModule.render(id, chart)
          
          if (isMounted && mermaidRef.current) {
            mermaidRef.current.innerHTML = result.svg
            setIsLoading(false)
          }
        }
      } catch (err) {
        console.error('Erro ao renderizar Mermaid:', err)
        if (isMounted) {
          setError('Erro ao renderizar diagrama')
          setIsLoading(false)
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `
              <div class="text-red-500 text-sm p-4 text-center">
                <p>Erro ao renderizar diagrama</p>
                <p class="text-xs mt-2 text-gray-500">Por favor, recarregue a página</p>
              </div>
            `
          }
        }
      }
    }

    renderDiagram()

    return () => {
      isMounted = false
    }
  }, [chart])

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      )}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-sm text-gray-600 mt-2">Carregando diagrama...</p>
            </div>
          </div>
        )}
        <div 
          ref={mermaidRef} 
          className="mermaid-diagram flex justify-center items-center bg-white rounded-lg p-6 border border-gray-200 overflow-x-auto min-h-[200px]"
        />
        {error && !isLoading && (
          <div className="text-red-500 text-sm p-4 text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}

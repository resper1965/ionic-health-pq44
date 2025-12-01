import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nCommand Lite - Ciclo de Vida Regulatório',
  description: 'Aplicação de apresentação demonstrando o ciclo de vida completo de desenvolvimento de SaMD',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

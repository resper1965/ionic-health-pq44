'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import { Home, FileText, Settings, Menu, X, Shield, AlertTriangle, Lock } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  {
    name: 'Ciclo de Vida',
    href: '/',
    icon: Home,
  },
  {
    name: 'Documentos',
    href: '/documentos',
    icon: FileText,
  },
  {
    name: 'Conformidade',
    href: '/conformidade',
    icon: Shield,
  },
  {
    name: 'Riscos',
    href: '/riscos',
    icon: AlertTriangle,
  },
  {
    name: 'Segurança',
    href: '/seguranca',
    icon: Lock,
  },
  {
    name: 'Automação',
    href: '/automacao',
    icon: Settings,
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center gap-2 mr-8">
          <h1 className="text-xl font-bold text-gray-800">nCommand Lite</h1>
        </div>
        <div className="flex items-center gap-1">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth',
                  isActive
                    ? 'bg-primary text-white shadow-cyan'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold text-gray-800">nCommand Lite</h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 px-4 py-2 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth',
                    isActive
                      ? 'bg-primary text-white shadow-cyan'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </>
  )
}


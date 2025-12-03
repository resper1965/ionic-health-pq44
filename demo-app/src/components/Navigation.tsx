'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import { Home, FileText, Settings, Menu, X, Shield, AlertTriangle, Lock, Link2, FileCheck, CheckSquare, Workflow, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navigation = [
  {
    name: 'Sobre',
    href: '/sobre',
    icon: Home,
  },
  {
    name: 'PQ.044',
    href: '/pq44',
    icon: FileText,
  },
  {
    name: 'PQ.039',
    href: '/pq39',
    icon: FileText,
  },
  {
    name: 'PQ.042',
    href: '/pq42',
    icon: Settings,
  },
  {
    name: 'Ciclo de Vida',
    href: '/ciclo-de-vida',
    icon: Workflow,
  },
  {
    name: 'Documentos',
    href: '/documentos',
    icon: FileText,
  },
  {
    name: 'Ferramentas',
    href: '/ferramentas',
    icon: Settings,
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
    name: 'Rastreabilidade',
    href: '/rastreabilidade',
    icon: Link2,
  },
  {
    name: 'Auditoria',
    href: '/auditoria',
    icon: FileCheck,
  },
  {
    name: 'QA & RA',
    href: '/qa-ra',
    icon: CheckSquare,
  },
  {
    name: 'Automação',
    href: '/automacao',
    icon: Settings,
  },
]

// Itens principais que ficam visíveis (primeiros 5)
const mainNavigation = navigation.slice(0, 5)
// Itens secundários que vão para o menu "Mais"
const moreNavigation = navigation.slice(5)

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1 bg-white border-b border-gray-200 px-6 py-4 shadow-sm fixed top-0 left-0 right-0 z-50">
        <Link href="/" className="flex items-center gap-3 mr-8 hover:opacity-80 transition-opacity flex-shrink-0">
          <Image
            src="/images/ionic-logo.png"
            alt="Ionic Health"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
          <div className="h-8 w-px bg-gray-300"></div>
          <h1 className="text-xl font-bold text-gray-800">nCommand Lite</h1>
        </Link>
        <div className="flex items-center gap-1 flex-1 min-w-0">
          {mainNavigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth whitespace-nowrap flex-shrink-0',
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
          
          {moreNavigation.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth whitespace-nowrap flex-shrink-0 outline-none',
                  moreNavigation.some(item => pathname === item.href)
                    ? 'bg-primary text-white shadow-cyan'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                )}
              >
                <span>Mais</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {moreNavigation.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-2',
                          isActive && 'bg-gray-100 font-medium'
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/ionic-logo.png"
              alt="Ionic Health"
              width={80}
              height={30}
              className="h-8 w-auto object-contain"
              priority
            />
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-lg font-bold text-gray-800">nCommand Lite</h1>
          </Link>
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


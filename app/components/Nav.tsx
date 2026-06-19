'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const outrosLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Suporte IT em Aveiro', href: '/suporte-it-aveiro' },
  { label: 'Suporte IT Restaurantes', href: '/suporte-it-restaurantes-aveiro' },
  { label: 'Manutenção Informática', href: '/manutencao-informatica-aveiro' },
  { label: 'Cibersegurança PME', href: '/ciberseguranca-pme' },
  { label: 'Redes Wi-Fi Empresas', href: '/redes-wifi-empresas-aveiro' },
  { label: 'Criação Websites Aveiro', href: '/criacao-websites-aveiro' },
  { label: 'Website para Restaurante', href: '/websites-para-restaurantes' },
  { label: 'Chatbot WhatsApp', href: '/chatbots-ia-whatsapp' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileOutrosOpen, setMobileOutrosOpen] = useState(false)
  const [desktopOutrosOpen, setDesktopOutrosOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopOutrosOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function closeAll() {
    setMobileOpen(false)
    setMobileOutrosOpen(false)
    setDesktopOutrosOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,4vw,56px)] h-16 flex items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#F4F1EA] no-underline shrink-0"
          onClick={closeAll}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/zarix-z.png" alt="Zarix" className="w-7 h-7 block" />
          <span className="font-heading font-extrabold text-2xl tracking-[-0.02em]">
            Zari<span className="text-cyan">x</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#servicos" className="text-[#F4F1EA] opacity-60 hover:opacity-100 text-[0.92rem] font-medium transition-opacity">
            Serviços
          </Link>
          <Link href="/#trabalho" className="text-[#F4F1EA] opacity-60 hover:opacity-100 text-[0.92rem] font-medium transition-opacity">
            Trabalho
          </Link>
          <Link href="/#equipa" className="text-[#F4F1EA] opacity-60 hover:opacity-100 text-[0.92rem] font-medium transition-opacity">
            Equipa
          </Link>

          {/* Outros dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDesktopOutrosOpen(!desktopOutrosOpen)}
              className="flex items-center gap-1 text-[#F4F1EA] opacity-60 hover:opacity-100 text-[0.92rem] font-medium transition-opacity bg-transparent border-0 cursor-pointer"
            >
              Outros
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
                style={{ transition: 'transform 0.2s', transform: desktopOutrosOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {desktopOutrosOpen && (
              <div
                className="absolute top-full left-0 bg-[#0A1531] border border-white/[0.1] py-2 z-50"
                style={{ marginTop: 12, minWidth: 220, boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}
              >
                {outrosLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setDesktopOutrosOpen(false)}
                    className="block px-4 py-2.5 text-[0.88rem] text-[#9AA4B8] hover:text-[#F4F1EA] hover:bg-white/[0.04] transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/#contacto"
            className="hidden md:inline-block bg-paper text-navy text-[0.85rem] font-semibold px-[18px] py-[10px] hover:bg-cyan hover:text-white transition-colors"
          >
            Falar connosco
          </a>
          <button
            className="md:hidden p-2 text-[#F4F1EA]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/[0.07] px-6 py-6 flex flex-col gap-4">
          <Link href="/#servicos" className="text-[#F4F1EA] font-medium text-base" onClick={closeAll}>
            Serviços
          </Link>
          <Link href="/#trabalho" className="text-[#F4F1EA] font-medium text-base" onClick={closeAll}>
            Trabalho
          </Link>
          <Link href="/#equipa" className="text-[#F4F1EA] font-medium text-base" onClick={closeAll}>
            Equipa
          </Link>

          {/* Mobile Outros accordion */}
          <div>
            <button
              onClick={() => setMobileOutrosOpen(!mobileOutrosOpen)}
              className="flex items-center justify-between w-full text-[#F4F1EA] font-medium text-base bg-transparent border-0 cursor-pointer py-0"
            >
              Outros
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
                style={{ transition: 'transform 0.2s', transform: mobileOutrosOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileOutrosOpen && (
              <div className="flex flex-col gap-3 mt-3 pl-3 border-l border-white/[0.1]">
                {outrosLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeAll}
                    className="text-[0.88rem] text-[#9AA4B8] no-underline"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="/#contacto"
            className="bg-paper text-navy font-semibold px-6 py-3 text-center text-sm hover:bg-cyan hover:text-white transition-colors mt-1"
            onClick={closeAll}
          >
            Falar connosco
          </a>
        </div>
      )}
    </header>
  )
}

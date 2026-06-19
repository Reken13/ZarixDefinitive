'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,4vw,56px)] h-16 flex items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#F4F1EA] no-underline shrink-0"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/zarix-z.svg" alt="Zarix" className="w-7 h-7 block" />
          <span className="font-heading font-extrabold text-2xl tracking-[-0.02em]">
            Zari<span className="text-cyan">x</span>
          </span>
        </Link>

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
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-white/[0.07] px-6 py-6 flex flex-col gap-5">
          <Link href="/#servicos" className="text-[#F4F1EA] font-medium text-base" onClick={() => setOpen(false)}>
            Serviços
          </Link>
          <Link href="/#trabalho" className="text-[#F4F1EA] font-medium text-base" onClick={() => setOpen(false)}>
            Trabalho
          </Link>
          <Link href="/#equipa" className="text-[#F4F1EA] font-medium text-base" onClick={() => setOpen(false)}>
            Equipa
          </Link>
          <a
            href="/#contacto"
            className="bg-paper text-navy font-semibold px-6 py-3 text-center text-sm hover:bg-cyan hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Falar connosco
          </a>
        </div>
      )}
    </header>
  )
}

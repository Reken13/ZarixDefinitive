'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-black text-xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-navy">Zari</span><span className="text-cyan">x</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/criacao-websites-aveiro"
            className="text-gray-600 hover:text-navy text-sm font-medium transition-colors"
          >
            Websites
          </Link>
          <Link
            href="/suporte-it-restaurantes-aveiro"
            className="text-gray-600 hover:text-navy text-sm font-medium transition-colors"
          >
            Restaurantes
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-navy text-sm font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-gray-600 hover:text-navy text-sm font-medium transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/351967608772"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-navy text-white text-sm font-semibold px-5 py-2 hover:bg-[#1a2f6b] transition-colors"
          >
            WhatsApp
          </a>
          <button
            className="md:hidden p-2 text-navy"
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          <Link href="/criacao-websites-aveiro" className="text-gray-700 font-medium text-base" onClick={() => setOpen(false)}>
            Websites
          </Link>
          <Link href="/suporte-it-restaurantes-aveiro" className="text-gray-700 font-medium text-base" onClick={() => setOpen(false)}>
            Restaurantes
          </Link>
          <Link href="/blog" className="text-gray-700 font-medium text-base" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/#contact" className="text-gray-700 font-medium text-base" onClick={() => setOpen(false)}>
            Contacto
          </Link>
          <a href="https://wa.me/351967608772" target="_blank" rel="noopener noreferrer" className="bg-navy text-white font-semibold px-6 py-3 text-center" onClick={() => setOpen(false)}>
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}

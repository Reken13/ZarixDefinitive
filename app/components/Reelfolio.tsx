'use client'

import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'Restaurante Ria',
    category: 'Restaurante',
    description: 'Website com menu online, galeria de pratos e reservas por WhatsApp. Optimizado para pesquisa local em Aveiro.',
  },
  {
    title: 'Barbearia Moderna',
    category: 'Barbearia',
    description: 'Presença digital com agendamento online, galeria de trabalhos e contacto direto via WhatsApp.',
  },
  {
    title: 'Clínica Dental Sorriso',
    category: 'Clínica Dentária',
    description: 'Website profissional com apresentação de serviços, equipa e marcação de consultas online.',
  },
  {
    title: 'Padaria Artesanal',
    category: 'Comércio Local',
    description: 'Catálogo de produtos, horários atualizados e localização integrada com Google Maps.',
  },
  {
    title: 'Oficina Costa',
    category: 'Serviços Automóvel',
    description: 'Website com serviços, avaliações de clientes e formulário de marcação de revisões.',
  },
  {
    title: 'Hotel Ria de Aveiro',
    category: 'Hotelaria',
    description: 'Site com galeria de quartos, disponibilidade e integração com plataformas de reserva.',
  },
]

function DesktopMockup({ title, category }: { title: string; category: string }) {
  return (
    <div className="w-full rounded-t-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
      <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <div className="ml-3 flex-1 bg-white rounded h-4 px-2 flex items-center">
          <span className="text-[8px] text-gray-400 truncate">zarix.site/{title.toLowerCase().replace(/\s/g, '-')}</span>
        </div>
      </div>
      <div className="h-48 md:h-64 bg-[#F0F4F8] p-4 flex flex-col">
        <div className="w-20 h-3 bg-navy rounded mb-3" />
        <div className="w-full h-2 bg-gray-200 rounded mb-2" />
        <div className="w-3/4 h-2 bg-gray-200 rounded mb-6" />
        <div className="w-24 h-8 bg-navy rounded mb-4" />
        <div className="grid grid-cols-3 gap-2 flex-1">
          <div className="bg-white rounded border border-gray-100" />
          <div className="bg-white rounded border border-gray-100" />
          <div className="bg-white rounded border border-gray-100" />
        </div>
        <div className="mt-3 text-[10px] text-gray-400 text-center">{category}</div>
      </div>
    </div>
  )
}

function MobileMockup({ category }: { category: string }) {
  return (
    <div className="w-24 md:w-32 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-sm">
      <div className="bg-gray-950 h-4 flex items-center justify-center">
        <span className="w-8 h-1 bg-gray-700 rounded-full" />
      </div>
      <div className="bg-[#F0F4F8] p-2 min-h-[160px] md:min-h-[220px] flex flex-col">
        <div className="w-full h-2 bg-navy rounded mb-2" />
        <div className="w-full h-1.5 bg-gray-200 rounded mb-1" />
        <div className="w-2/3 h-1.5 bg-gray-200 rounded mb-3" />
        <div className="w-full h-16 md:h-24 bg-white rounded border border-gray-100 mb-2" />
        <div className="w-full h-6 bg-navy rounded mb-1" />
        <div className="text-[8px] text-gray-400 text-center mt-auto">{category}</div>
      </div>
    </div>
  )
}

export default function Reelfolio() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % projects.length)
        setVisible(true)
      }, 400)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const project = projects[current]

  return (
    <section id="reelfolio" className="bg-[#F7F7F7] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">
          O nosso trabalho
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 leading-tight">
          Websites criados pela Zarix
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-16 max-w-lg">
          Cada projeto é construído para atrair clientes e mostrar o que o seu negócio faz melhor.
        </p>

        <div
          className="transition-opacity duration-400"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end">
            <div className="flex-1 min-w-0">
              <DesktopMockup title={project.title} category={project.category} />
            </div>
            <div className="flex flex-col gap-6 md:gap-8 items-start">
              <MobileMockup category={project.category} />
              <div className="max-w-xs">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`block h-0.5 transition-all duration-300 ${
                i === current ? 'w-8 bg-navy' : 'w-4 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'Casa Lista',
    category: 'Negócio Local',
    description: 'Presença online para um negócio local — website rápido, moderno e optimizado para aparecer no Google.',
    desktop: '/portfolio-1.1.png',
    mobile: '/portfolio-1.2.png',
  },
  {
    title: 'LaRiaPet',
    category: 'Clínica Veterinária',
    description: 'Website profissional para clínica veterinária com apresentação de serviços e marcação de consultas online.',
    desktop: '/portfolio-2.1.png',
    mobile: '/portfolio-2.2.png',
  },
]

export default function Reelfolio() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % projects.length)
        setVisible(true)
      }, 380)
    }, 6000)
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
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease-in-out' }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end">
            {/* Desktop screenshot */}
            <div className="flex-1 min-w-0 rounded-t-lg border border-gray-200 shadow-sm bg-white overflow-hidden">
              <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                <div className="ml-3 flex-1 bg-white rounded h-4 px-2 flex items-center">
                  <span className="text-[8px] text-gray-400">zarix.site</span>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.desktop}
                alt={`${project.title} — desktop`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Mobile screenshot + description */}
            <div className="flex flex-col gap-6 md:gap-8 items-start">
              <div className="w-44 md:w-56 flex-shrink-0 rounded-[2.5rem] border-4 border-gray-800 shadow-xl bg-white overflow-hidden">
                <div className="bg-gray-800 h-7 flex items-center justify-center rounded-t-[1.8rem]">
                  <span className="w-14 h-1.5 bg-gray-600 rounded-full" />
                </div>
                <div style={{ aspectRatio: '9/16', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.mobile}
                    alt={`${project.title} — mobile`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  />
                </div>
              </div>
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
            <button
              key={i}
              onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true) }, 400) }}
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

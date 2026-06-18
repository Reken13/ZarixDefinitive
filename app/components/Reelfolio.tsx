'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Projecto 1',
    category: 'Website',
    description: 'Website desenvolvido pela Zarix — rápido, moderno e optimizado para Google.',
    desktop: '/portfolio-1.1.png',
    mobile: '/portfolio-1.2.png',
  },
  {
    title: 'Projecto 2',
    category: 'Website',
    description: 'Website desenvolvido pela Zarix — rápido, moderno e optimizado para Google.',
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
      }, 400)
    }, 4000)
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
            {/* Desktop screenshot */}
            <div className="flex-1 min-w-0 rounded-t-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                <div className="ml-3 flex-1 bg-white rounded h-4 px-2 flex items-center">
                  <span className="text-[8px] text-gray-400">zarix.site</span>
                </div>
              </div>
              <div className="relative w-full aspect-[16/10] bg-gray-100">
                <Image
                  src={project.desktop}
                  alt={`${project.title} — desktop`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>

            {/* Mobile screenshot + description */}
            <div className="flex flex-col gap-6 md:gap-8 items-start">
              <div className="w-24 md:w-32 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-sm bg-white">
                <div className="bg-gray-950 h-4 flex items-center justify-center">
                  <span className="w-8 h-1 bg-gray-700 rounded-full" />
                </div>
                <div className="relative w-full aspect-[9/16] bg-gray-100">
                  <Image
                    src={project.mobile}
                    alt={`${project.title} — mobile`}
                    fill
                    className="object-cover object-top"
                    sizes="128px"
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

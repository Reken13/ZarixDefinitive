'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Casa Lista',
    category: 'Comida caseira',
    description: 'Loja online de refeições com pedidos diretos. Página rápida, pensada para encomendar em poucos toques.',
    img: '/portfolio-1.1.png',
  },
  {
    title: 'LaRiaPet',
    category: 'Veterinária',
    description: 'Site de marcações para uma clínica veterinária, com agenda online e presença forte no Google.',
    img: '/portfolio-2.1.png',
  },
]

const allCards = [...projects, ...projects]

export default function Reelfolio() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const xRef = useRef(0)
  const halfRef = useRef(0)

  useEffect(() => {
    const mq = marqueeRef.current
    if (!mq) return
    let raf = 0
    let mounted = true

    function measure() {
      if (mq) halfRef.current = mq.scrollWidth / 2
    }
    measure()
    setTimeout(measure, 400)
    window.addEventListener('resize', measure)

    const vp = mq.parentNode as HTMLElement | null
    if (vp) {
      const onEnter = () => { pausedRef.current = true }
      const onLeave = () => { pausedRef.current = false }
      vp.addEventListener('mouseenter', onEnter)
      vp.addEventListener('mouseleave', onLeave)
    }

    function loop() {
      if (!mounted) return
      if (!pausedRef.current && halfRef.current > 0) {
        xRef.current -= 0.5
        if (-xRef.current >= halfRef.current) xRef.current += halfRef.current
        if (mq) mq.style.transform = `translateX(${xRef.current}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      mounted = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <section
      id="trabalho"
      style={{ background: '#F1EDE4', color: '#0D1B3E' }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{ padding: 'clamp(70px,9vh,118px) clamp(24px,4vw,56px)' }}
      >
        <div
          className="flex justify-between items-end flex-wrap gap-8"
          style={{ marginBottom: 'clamp(40px,5vh,60px)' }}
        >
          <h2
            className="font-heading m-0 max-w-[16ch]"
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.9rem,3.8vw,3.1rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: '#0D1B3E',
              textWrap: 'balance' as React.CSSProperties['textWrap'],
            }}
          >
            Trabalho recente.
          </h2>
          <a
            href="/#contacto"
            className="text-[0.95rem] font-semibold text-[#0D1B3E] no-underline inline-flex items-center gap-2 transition-colors hover:text-[#2E8FC9]"
            style={{ borderBottom: '1px solid rgba(13,27,62,0.3)', paddingBottom: 2 }}
          >
            Quero um site assim <span className="font-heading">→</span>
          </a>
        </div>
      </div>

      {/* Marquee viewport (full-bleed) */}
      <div
        style={{
          overflow: 'hidden',
          paddingBottom: 'clamp(70px,9vh,118px)',
        }}
      >
        <div
          ref={marqueeRef}
          style={{
            display: 'flex',
            gap: 'clamp(20px,2.4vw,32px)',
            width: 'max-content',
            willChange: 'transform',
            paddingLeft: 'clamp(24px,4vw,56px)',
          }}
        >
          {allCards.map((p, i) => (
            <div
              key={i}
              aria-hidden={i >= projects.length}
              style={{
                flex: 'none',
                width: 'clamp(340px,48vw,580px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  background: '#fff',
                  border: '1px solid rgba(13,27,62,0.1)',
                  overflow: 'hidden',
                  aspectRatio: '1920/877',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={i < projects.length ? p.title : ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
              </div>
              <div className="flex justify-between items-baseline gap-4 mt-[18px]">
                <h3
                  className="font-heading m-0"
                  style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.01em', color: '#0D1B3E' }}
                >
                  {p.title}
                </h3>
                <span
                  className="text-[0.82rem] font-semibold uppercase tracking-[0.04em] shrink-0"
                  style={{ color: '#7A8295' }}
                >
                  {p.category}
                </span>
              </div>
              <p className="text-[0.95rem] leading-[1.55] mt-2" style={{ color: '#565E6E' }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

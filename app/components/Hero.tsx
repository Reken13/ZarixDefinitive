'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const PROBLEMS = [
  'Impressora encravada',
  'PC lento',
  'WiFi a cair',
  'Email em baixo',
  'Sem backups',
  'Vírus no sistema',
  'Site offline',
  'Disco cheio',
  'Conta hackeada',
  'POS bloqueado',
]

const ACCENT = '#2E8FC9'
const OK = '#17B597'
const MAX_TOKENS = 6

interface Token {
  el: HTMLDivElement
  x: number
  y: number
  resolved: boolean
  wob: number
}

export default function Hero() {
  const layerRef = useRef<HTMLDivElement>(null)
  const fxRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const layer = layerRef.current
    const fx = fxRef.current
    const hub = hubRef.current
    const counter = counterRef.current
    if (!layer) return

    let mounted = true
    let raf = 0
    const tokens: Token[] = []
    let resolvedCount = 0
    let pIndex = 0
    let mouse: { x: number; y: number } | null = null

    function spawn(initial: boolean) {
      if (!layer) return
      const w = layer.clientWidth
      const h = layer.clientHeight
      const label = PROBLEMS[pIndex % PROBLEMS.length]
      pIndex++

      const el = document.createElement('div')
      el.textContent = label
      el.style.cssText =
        'position:absolute;left:0;top:0;white-space:nowrap;padding:7px 13px;' +
        "font-family:'Manrope',system-ui,sans-serif;font-size:12.5px;font-weight:600;" +
        'color:#C4CCDB;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.13);' +
        'border-radius:2px;cursor:pointer;will-change:transform,opacity;' +
        'transition:opacity .25s,border-color .2s,color .2s;transform:translate(-50%,-50%);'

      let x: number, y: number
      if (initial) {
        const m = 30
        x = m + Math.random() * Math.max(1, w - 2 * m)
        y = m + Math.random() * Math.max(1, h - 2 * m)
      } else {
        const side = Math.floor(Math.random() * 4)
        if (side === 0) { x = Math.random() * w; y = -22 }
        else if (side === 1) { x = w + 22; y = Math.random() * h }
        else if (side === 2) { x = Math.random() * w; y = h + 22 }
        else { x = -22; y = Math.random() * h }
      }

      const t: Token = { el, x, y, resolved: false, wob: Math.random() * 6.28 }

      el.addEventListener('click', () => resolve(t))
      el.addEventListener('mouseenter', () => {
        el.style.color = '#fff'
        el.style.borderColor = ACCENT
      })
      el.addEventListener('mouseleave', () => {
        el.style.color = '#C4CCDB'
        el.style.borderColor = 'rgba(255,255,255,0.13)'
      })

      layer.appendChild(el)
      el.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px)`
      tokens.push(t)
    }

    function resolve(t: Token) {
      if (t.resolved || !layer) return
      t.resolved = true
      const w = layer.clientWidth
      const h = layer.clientHeight
      t.el.style.transition = 'transform .3s cubic-bezier(.5,0,.2,1),opacity .3s'
      t.el.style.transform = `translate(-50%,-50%) translate(${w / 2}px,${h / 2}px) scale(0.2)`
      t.el.style.opacity = '0'

      burst()
      resolvedCount++
      if (counter) counter.textContent = String(resolvedCount)

      setTimeout(() => {
        if (t.el.parentNode) t.el.parentNode.removeChild(t.el)
        const i = tokens.indexOf(t)
        if (i >= 0) tokens.splice(i, 1)
        if (mounted) spawn(false)
      }, 310)
    }

    function burst() {
      if (hub) {
        hub.style.transform = 'translate(-50%,-50%) scale(1.09)'
        setTimeout(() => { if (hub) hub.style.transform = 'translate(-50%,-50%) scale(1)' }, 170)
      }
      if (!fx) return
      const w = fx.clientWidth
      const h = fx.clientHeight
      const c = document.createElement('div')
      c.textContent = '✓'
      c.style.cssText =
        `position:absolute;left:0;top:0;` +
        `transform:translate(-50%,-50%) translate(${w / 2}px,${h / 2}px) scale(0.6);` +
        `color:${OK};font-size:21px;font-weight:800;font-family:'Archivo',sans-serif;` +
        `pointer-events:none;transition:transform .55s ease-out,opacity .55s;opacity:1;`
      fx.appendChild(c)
      requestAnimationFrame(() => {
        c.style.transform = `translate(-50%,-50%) translate(${w / 2}px,${h / 2 - 38}px) scale(1)`
        c.style.opacity = '0'
      })
      setTimeout(() => { if (c.parentNode) c.parentNode.removeChild(c) }, 580)
    }

    let cooldown = false
    function absorbAll() {
      if (cooldown) return
      cooldown = true
      setTimeout(() => { cooldown = false }, 850)
      const list = tokens.filter((t) => !t.resolved)
      list.forEach((t, i) => setTimeout(() => resolve(t), i * 70))
    }

    function loop() {
      if (!mounted) return
      if (layer) {
        const w = layer.clientWidth
        const h = layer.clientHeight
        const cx = w / 2
        const cy = h / 2
        for (const t of tokens) {
          if (t.resolved) continue
          const dx = cx - t.x
          const dy = cy - t.y
          const dist = Math.hypot(dx, dy) || 1
          let sp = 0.0055
          if (mouse) {
            const md = Math.hypot(mouse.x - t.x, mouse.y - t.y)
            if (md < 95) sp += 0.05 * (1 - md / 95)
          }
          t.x += dx * sp
          t.y += dy * sp
          t.wob += 0.02
          const perpx = -dy / dist
          const perpy = dx / dist
          const wob = Math.sin(t.wob) * Math.min(13, dist * 0.11)
          const rx = t.x + perpx * wob
          const ry = t.y + perpy * wob
          const near = Math.max(0, Math.min(1, (dist - 42) / 170))
          t.el.style.opacity = String(Math.max(0.18, near))
          t.el.style.transform = `translate(-50%,-50%) translate(${rx}px,${ry}px) scale(${0.84 + 0.16 * near})`
          if (dist < 50) resolve(t)
        }
      }
      raf = requestAnimationFrame(loop)
    }

    for (let i = 0; i < MAX_TOKENS; i++) spawn(true)
    raf = requestAnimationFrame(loop)

    const onWheel = () => absorbAll()
    window.addEventListener('wheel', onWheel, { passive: true })

    const onMove = (e: MouseEvent) => {
      const r = layer.getBoundingClientRect()
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouse = null }
    layer.addEventListener('mousemove', onMove)
    layer.addEventListener('mouseleave', onLeave)

    return () => {
      mounted = false
      cancelAnimationFrame(raf)
      window.removeEventListener('wheel', onWheel)
      layer.removeEventListener('mousemove', onMove)
      layer.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section
      className="bg-navy"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <div
        className="max-w-[1200px] mx-auto w-full flex-1 flex flex-col"
        style={{ padding: 'clamp(26px,3.4vw,46px) clamp(24px,4vw,56px)' }}
      >
        {/* top spacing for fixed nav */}
        <div className="h-16 shrink-0" />

        <div
          className="flex-1 flex flex-wrap items-stretch"
          style={{ gap: 'clamp(40px,5vw,72px)', marginTop: 'clamp(40px,6vh,84px)', paddingBottom: 'clamp(24px,4vh,48px)' }}
        >
          {/* Left column */}
          <div
            className="flex flex-col justify-center min-w-[300px]"
            style={{ flex: '1 1 520px' }}
          >
            <div className="flex items-center gap-3 mb-[clamp(20px,3vh,30px)]">
              <span className="w-[30px] h-[3px] bg-cyan shrink-0 block" />
              <span className="text-[0.98rem] font-semibold text-[#F4F1EA]/90">
                O informático do seu negócio em Aveiro
              </span>
            </div>

            <h1
              className="font-heading text-[#F4F1EA] m-0"
              style={{
                fontWeight: 900,
                fontSize: 'clamp(2.7rem,6.4vw,5.3rem)',
                lineHeight: 0.94,
                letterSpacing: '-0.025em',
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}
            >
              Tudo a funcionar.<br />
              <span style={{ color: ACCENT }}>Sempre.</span>
            </h1>

            <p
              className="text-[#9AA4B8] max-w-[29rem]"
              style={{
                fontSize: 'clamp(1rem,1.4vw,1.16rem)',
                lineHeight: 1.55,
                margin: 'clamp(22px,3vh,32px) 0 0',
              }}
            >
              Tratamos de tudo para que nunca tenha de pensar nisso. Suporte, redes e websites para PMEs e restaurantes, com resposta em menos de 24 horas.
            </p>

            <div
              className="flex flex-wrap"
              style={{ gap: '14px', marginTop: 'clamp(26px,3.4vh,36px)' }}
            >
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2.5 bg-paper text-navy font-semibold text-base px-7 py-4 no-underline transition-colors hover:bg-cyan hover:text-white"
              >
                Pedir diagnóstico gratuito <span className="font-heading">→</span>
              </a>
              <a
                href="/#trabalho"
                className="inline-flex items-center bg-transparent text-[#F4F1EA] font-semibold text-base px-7 py-4 no-underline transition-colors"
                style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#F4F1EA')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
              >
                Ver o nosso trabalho
              </a>
            </div>
          </div>

          {/* Right column — interactive panel */}
          <div
            className="relative overflow-hidden"
            style={{
              flex: '1 1 350px',
              minWidth: '290px',
              background: '#0A1531',
              border: '1px solid rgba(255,255,255,0.07)',
              minHeight: 'clamp(400px,56vh,560px)',
            }}
          >
            {/* Panel header */}
            <div
              className="absolute z-[4] pointer-events-none"
              style={{ top: 'clamp(22px,3vw,30px)', left: 'clamp(24px,2.6vw,34px)', right: 'clamp(24px,2.6vw,34px)' }}
            >
              <span className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#8E99B0]">
                Tudo o que resolvemos
              </span>
            </div>

            {/* Token layer */}
            <div
              ref={layerRef}
              className="absolute z-[2] overflow-hidden"
              style={{ top: 52, left: 0, right: 0, bottom: 52 }}
            />

            {/* FX layer (✓ animations) */}
            <div
              ref={fxRef}
              className="absolute z-[6] pointer-events-none"
              style={{ top: 52, left: 0, right: 0, bottom: 52 }}
            />

            {/* Hub (Zarix logo center) */}
            <div
              ref={hubRef}
              className="absolute z-[3] flex flex-col items-center pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                gap: 12,
                transition: 'transform .18s ease',
              }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 118,
                  height: 118,
                  border: '1px solid rgba(46,143,201,0.5)',
                  borderRadius: '50%',
                  background: '#0A1531',
                }}
              >
                <div
                  className="absolute"
                  style={{ inset: 10, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)' }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/zarix-z.jpg" alt="Zarix" className="block rounded-full object-cover" style={{ width: 74, height: 74 }} />
              </div>
              <span className="font-heading font-extrabold text-[1.05rem] tracking-[-0.01em] text-[#F4F1EA]">
                Zarix
              </span>
            </div>

            {/* Panel footer */}
            <div
              className="absolute z-[4] flex items-center justify-between pointer-events-none"
              style={{
                bottom: 'clamp(20px,2.6vw,28px)',
                left: 'clamp(24px,2.6vw,34px)',
                right: 'clamp(24px,2.6vw,34px)',
                gap: 12,
              }}
            >
              <span className="text-[0.76rem] text-[#8E99B0]">Clique num problema</span>
              <span className="text-[0.76rem] text-[#8E99B0]">
                <b ref={counterRef} className="font-heading font-extrabold text-[0.95rem]" style={{ color: OK }}>0</b> resolvidos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

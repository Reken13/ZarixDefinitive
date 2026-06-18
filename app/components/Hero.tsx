'use client'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function trackCTA(label: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'contact',
      event_label: label,
    })
  }
}

function trackWhatsApp() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: 'whatsapp',
    })
    window.gtag('event', 'cta_click', {
      event_category: 'contact',
      event_label: 'Falar no WhatsApp',
    })
  }
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-10 md:mb-14">
          O informático do seu negócio em Aveiro.
        </p>

        <div className="mb-8">
          <p className="text-[clamp(3rem,10vw,7rem)] font-black text-gray-950 leading-[0.9] tracking-tight">
            O SEU NEGÓCIO
          </p>
          <p className="text-[clamp(3rem,10vw,7rem)] font-black text-gray-950 leading-[0.9] tracking-tight">
            NÃO PODE PARAR.
          </p>
        </div>

        <h1 className="text-lg md:text-xl font-semibold text-navy mb-4 max-w-lg">
          Zarix — Suporte IT e Websites para PMEs em Aveiro
        </h1>

        <p className="text-gray-500 text-base md:text-lg mb-12 max-w-md leading-relaxed">
          Websites, suporte IT e tecnologia para empresas em Aveiro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/351967608772"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsApp}
            className="inline-flex items-center justify-center bg-navy text-white font-semibold px-8 py-4 hover:bg-[#1a2f6b] transition-colors text-base"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#reelfolio"
            onClick={() => trackCTA('Ver serviços')}
            className="inline-flex items-center justify-center border-2 border-navy text-navy font-semibold px-8 py-4 hover:bg-navy hover:text-white transition-colors text-base"
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  )
}

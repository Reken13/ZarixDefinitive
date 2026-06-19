'use client'

const outros = [
  { label: 'Suporte IT em Aveiro', href: '/suporte-it-aveiro' },
  { label: 'Suporte IT Restaurantes', href: '/suporte-it-restaurantes-aveiro' },
  { label: 'Manutenção Informática', href: '/manutencao-informatica-aveiro' },
  { label: 'Cibersegurança para PMEs', href: '/ciberseguranca-pme' },
  { label: 'Redes Wi-Fi para Empresas', href: '/redes-wifi-empresas-aveiro' },
  { label: 'Criação de Websites Aveiro', href: '/criacao-websites-aveiro' },
  { label: 'Website para Restaurante', href: '/websites-para-restaurantes' },
  { label: 'Chatbot WhatsApp', href: '/chatbots-ia-whatsapp' },
]

export default function Footer() {
  function openPrivacy() {
    const event = new CustomEvent('open-privacy-modal')
    window.dispatchEvent(event)
  }

  return (
    <footer className="bg-navy" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div
        className="max-w-[1200px] mx-auto"
        style={{ padding: 'clamp(48px,6vh,72px) clamp(24px,4vw,56px) clamp(32px,4vh,48px)' }}
      >
        {/* Top grid */}
        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2.5 text-[#F4F1EA] no-underline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/zarix-z.png" alt="Zarix" className="block" width={26} height={26} style={{ width: 26, height: 26 }} />
              <span className="font-heading font-extrabold text-[1.2rem] text-[#F4F1EA]">
                Zari<span className="text-cyan">x</span>
              </span>
            </a>
            <p className="text-[0.85rem] text-[#9AA4B8] leading-relaxed" style={{ maxWidth: '22ch' }}>
              Suporte IT e websites para negócios em Aveiro.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {/* Instagram */}
              <a href="https://www.instagram.com/zarix_it/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#9AA4B8] hover:text-cyan transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61590085367925" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#9AA4B8] hover:text-cyan transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/zarixit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#9AA4B8] hover:text-cyan transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Main links */}
          <div className="flex flex-col gap-3">
            <span className="font-heading font-extrabold text-[0.72rem] text-[#9AA4B8] uppercase tracking-[0.1em]">
              Menu
            </span>
            {[
              { label: 'Serviços', href: '/#servicos' },
              { label: 'Trabalho', href: '/#trabalho' },
              { label: 'Equipa', href: '/#equipa' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contacto', href: '/#contacto' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.88rem] text-[#9AA4B8] hover:text-[#F4F1EA] transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Outros */}
          <div className="flex flex-col gap-3">
            <span className="font-heading font-extrabold text-[0.72rem] text-[#9AA4B8] uppercase tracking-[0.1em]">
              Outros
            </span>
            {outros.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.88rem] text-[#9AA4B8] hover:text-[#F4F1EA] transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex justify-between items-center flex-wrap gap-4"
          style={{ marginTop: 'clamp(32px,4vh,48px)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 'clamp(24px,3vh,32px)' }}
        >
          <span className="text-[0.8rem] text-[#9AA4B8]">
            © {new Date().getFullYear()} Zarix · Aveiro, Portugal
          </span>
          <button
            onClick={openPrivacy}
            className="text-[#9AA4B8] hover:text-[#9AA4B8] text-[0.8rem] transition-colors underline bg-transparent border-0 cursor-pointer"
          >
            Privacidade
          </button>
        </div>
      </div>
    </footer>
  )
}

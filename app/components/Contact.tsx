'use client'

import { useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function trackLead() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', { event_category: 'contact', event_label: 'form_submit' })
  }
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xaqvedjq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { trackLead(); setSubmitted(true) }
    } catch {
      form.submit()
    }
  }

  return (
    <section
      id="contacto"
      className="bg-navy"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{ padding: 'clamp(70px,9vh,118px) clamp(24px,4vw,56px)' }}
      >
        {/* Header */}
        <div
          className="max-w-[720px] mx-auto text-center"
          style={{ marginBottom: 'clamp(44px,6vh,64px)' }}
        >
          <div className="text-[0.74rem] font-bold tracking-[0.18em] uppercase text-cyan mb-[18px]">
            Contacto
          </div>
          <h2
            className="font-heading text-[#F4F1EA] m-0"
            style={{
              fontWeight: 900,
              fontSize: 'clamp(2rem,4.4vw,3.4rem)',
              lineHeight: 0.99,
              letterSpacing: '-0.025em',
              textWrap: 'balance' as React.CSSProperties['textWrap'],
            }}
          >
            Vamos pôr o seu negócio a trabalhar.
          </h2>
          <p
            className="text-[#9AA4B8] max-w-[36rem] mx-auto"
            style={{ fontSize: 'clamp(1.02rem,1.5vw,1.18rem)', lineHeight: 1.55, marginTop: 22 }}
          >
            Conte o que está a falhar. Respondemos em menos de 24 horas, com um diagnóstico gratuito e sem compromisso.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid items-start"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 'clamp(20px,2.4vw,32px)',
          }}
        >
          {/* Contact info */}
          <div className="flex flex-col gap-3.5">
            <a
              href="https://wa.me/351967608772"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 no-underline transition-opacity hover:opacity-90"
              style={{ background: '#2E8FC9', color: '#0D1B3E', padding: '22px 24px' }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l2.1-5.3A8.5 8.5 0 1 1 21 11.5z" />
              </svg>
              <span className="flex flex-col gap-0.5">
                <span className="font-heading font-extrabold text-[1.05rem]">WhatsApp</span>
                <span className="text-[0.92rem] font-medium">+351 967 608 772</span>
              </span>
            </a>

            <div
              className="flex items-center gap-4"
              style={{ background: '#13244E', border: '1px solid rgba(255,255,255,0.08)', borderTopColor: 'rgba(255,255,255,0.14)', padding: '20px 24px' }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2E8FC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <span className="flex flex-col gap-0.5">
                <span className="font-bold text-[0.98rem] text-[#F4F1EA]">Telefone</span>
                <span className="text-[0.92rem] text-[#9AA4B8]">+351 967 608 772</span>
              </span>
            </div>

            <div
              className="flex items-center gap-4"
              style={{ background: '#13244E', border: '1px solid rgba(255,255,255,0.08)', borderTopColor: 'rgba(255,255,255,0.14)', padding: '20px 24px' }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2E8FC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect x="3" y="5" width="18" height="14" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <span className="flex flex-col gap-0.5">
                <span className="font-bold text-[0.98rem] text-[#F4F1EA]">Email</span>
                <span className="text-[0.92rem] text-[#9AA4B8]">info@zarix.site</span>
              </span>
            </div>

            <div
              className="flex items-center gap-4"
              style={{ background: '#13244E', border: '1px solid rgba(255,255,255,0.08)', borderTopColor: 'rgba(255,255,255,0.14)', padding: '20px 24px' }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2E8FC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="flex flex-col gap-0.5">
                <span className="font-bold text-[0.98rem] text-[#F4F1EA]">Localização</span>
                <span className="text-[0.92rem] text-[#9AA4B8]">Aveiro, Portugal · Segunda a Sexta, 09h00 às 18h00</span>
              </span>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div
                className="text-center p-8"
                style={{ background: '#13244E', border: '1px solid rgba(255,255,255,0.08)', borderTopColor: 'rgba(255,255,255,0.14)' }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
                  style={{ background: '#17B597', borderRadius: '50%' }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h3 className="text-[#F4F1EA] font-bold text-xl mb-2">Mensagem enviada</h3>
                <p className="text-[#9AA4B8] text-sm">Recebemos o seu pedido. Respondemos em 24 horas úteis.</p>
              </div>
            ) : (
              <form
                id="cForm"
                action="https://formspree.io/f/xaqvedjq"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                style={{ background: '#fff', padding: 'clamp(26px,2.8vw,38px)' }}
              >
                <label className="flex flex-col gap-2">
                  <span className="text-[0.85rem] font-semibold text-navy">Nome <span className="text-cyan">*</span></span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="O seu nome"
                    className="w-full text-[0.95rem] text-navy font-sans focus:outline-none"
                    style={{ padding: '13px 15px', border: '1px solid rgba(13,27,62,0.18)', borderRadius: 0, background: '#fff' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#2E8FC9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(13,27,62,0.18)')}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[0.85rem] font-semibold text-navy">Email <span className="text-cyan">*</span></span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="email@empresa.pt"
                    className="w-full text-[0.95rem] text-navy font-sans focus:outline-none"
                    style={{ padding: '13px 15px', border: '1px solid rgba(13,27,62,0.18)', borderRadius: 0, background: '#fff' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#2E8FC9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(13,27,62,0.18)')}
                  />
                </label>

                <div className="flex gap-4 flex-wrap">
                  <label className="flex flex-col gap-2" style={{ flex: '1 1 140px' }}>
                    <span className="text-[0.85rem] font-semibold text-navy">Telefone</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+351 9XX XXX XXX"
                      className="w-full text-[0.95rem] text-navy font-sans focus:outline-none"
                      style={{ padding: '13px 15px', border: '1px solid rgba(13,27,62,0.18)', borderRadius: 0, background: '#fff' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#2E8FC9')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(13,27,62,0.18)')}
                    />
                  </label>
                  <label className="flex flex-col gap-2" style={{ flex: '1 1 140px' }}>
                    <span className="text-[0.85rem] font-semibold text-navy">Serviço</span>
                    <select
                      name="service"
                      className="w-full text-[0.95rem] text-navy font-sans focus:outline-none bg-white"
                      style={{ padding: '13px 15px', border: '1px solid rgba(13,27,62,0.18)', borderRadius: 0 }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#2E8FC9')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(13,27,62,0.18)')}
                    >
                      <option value="">Selecionar serviço</option>
                      <option>Diagnóstico IT gratuito</option>
                      <option>Suporte IT</option>
                      <option>Website</option>
                      <option>Redes e WiFi</option>
                      <option>Cibersegurança</option>
                      <option>Outro</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-[0.85rem] font-semibold text-navy">Mensagem <span className="text-cyan">*</span></span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Descreva o que precisa..."
                    className="w-full text-[0.95rem] text-navy font-sans focus:outline-none resize-vertical"
                    style={{ padding: '13px 15px', border: '1px solid rgba(13,27,62,0.18)', borderRadius: 0, background: '#fff' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#2E8FC9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(13,27,62,0.18)')}
                  />
                </label>

                <div className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gdpr"
                    required
                    className="mt-[3px] shrink-0"
                    style={{ width: 16, height: 16, accentColor: '#2E8FC9' }}
                  />
                  <span className="text-[0.82rem] leading-[1.45] text-[#565E6E]">
                    Concordo com o tratamento dos meus dados conforme a{' '}
                    <button
                      type="button"
                      onClick={() => setPrivacyOpen(true)}
                      className="text-navy font-semibold underline cursor-pointer bg-transparent border-0 p-0"
                    >
                      Política de Privacidade
                    </button>
                    . Não partilhamos os seus dados.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full font-sans font-semibold text-base py-[17px] text-[#F4F1EA] transition-colors cursor-pointer border-0"
                  style={{ background: '#0D1B3E', borderRadius: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#2E8FC9')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#0D1B3E')}
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div
            className="max-w-lg w-full max-h-[80vh] overflow-y-auto p-8"
            style={{ background: '#13244E' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#F4F1EA] text-lg">Política de Privacidade</h3>
              <button onClick={() => setPrivacyOpen(false)} className="text-[#9AA4B8] hover:text-[#F4F1EA] transition-colors bg-transparent border-0 cursor-pointer">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="text-[#9AA4B8] text-sm leading-relaxed space-y-4">
              <p><strong className="text-[#F4F1EA]">Responsável:</strong> Zarix · info@zarix.site · Aveiro, Portugal</p>
              <p><strong className="text-[#F4F1EA]">Dados recolhidos:</strong> Nome, email, telefone e mensagem submetidos através do formulário de contacto.</p>
              <p><strong className="text-[#F4F1EA]">Finalidade:</strong> Responder ao seu pedido de contacto e prestar os serviços solicitados.</p>
              <p><strong className="text-[#F4F1EA]">Base legal:</strong> Consentimento explícito (RGPD, Art. 6.º, n.º 1, al. a)).</p>
              <p><strong className="text-[#F4F1EA]">Conservação:</strong> Os dados são conservados pelo período necessário para responder ao pedido e, no máximo, 2 anos após o último contacto.</p>
              <p><strong className="text-[#F4F1EA]">Partilha:</strong> Os seus dados não são partilhados com terceiros, exceto quando necessário para a prestação do serviço.</p>
              <p><strong className="text-[#F4F1EA]">Direitos:</strong> Tem o direito de acesso, retificação, apagamento, portabilidade e oposição. Contacte-nos em info@zarix.site.</p>
            </div>
            <button
              onClick={() => setPrivacyOpen(false)}
              className="mt-6 w-full font-semibold py-3 transition-colors cursor-pointer border-0 text-[#F4F1EA]"
              style={{ background: '#2E8FC9', borderRadius: 0 }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

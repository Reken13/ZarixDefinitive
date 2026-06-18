'use client'

import { useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function trackWhatsApp() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: 'whatsapp',
    })
  }
}

function trackPhone() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'contact',
      event_label: 'tel_click',
    })
  }
}

function trackLead() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'contact',
      event_label: 'form_submit',
    })
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
      if (res.ok) {
        trackLead()
        setSubmitted(true)
      }
    } catch {
      // fallback: submit normally
      form.submit()
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">
          Contacto
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 leading-tight">
          Fale connosco
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-16 max-w-lg">
          Diagnóstico gratuito e sem compromisso. Resposta garantida em 24 horas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div className="flex flex-col gap-6">
            <a
              href="https://wa.me/351967608772"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsApp}
              className="flex items-center gap-5 bg-navy text-white p-6 hover:bg-[#1a2f6b] transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <p className="font-bold text-base">WhatsApp</p>
                <p className="text-gray-300 text-sm">+351 967 608 772</p>
              </div>
            </a>

            <a
              href="tel:+351967608772"
              onClick={trackPhone}
              className="flex items-center gap-5 bg-white border border-gray-200 text-navy p-6 hover:border-navy transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current shrink-0">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <div>
                <p className="font-bold text-base">Telefone</p>
                <p className="text-gray-500 text-sm">+351 967 608 772</p>
              </div>
            </a>

            <a
              href="mailto:info@zarix.site"
              className="flex items-center gap-5 bg-white border border-gray-200 text-navy p-6 hover:border-navy transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current shrink-0">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div>
                <p className="font-bold text-base">Email</p>
                <p className="text-gray-500 text-sm">info@zarix.site</p>
              </div>
            </a>

            <div className="flex items-start gap-5 bg-white border border-gray-200 p-6">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-navy shrink-0 mt-0.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <p className="font-bold text-navy text-base">Localização</p>
                <p className="text-gray-500 text-sm">Aveiro, Portugal</p>
                <p className="text-gray-400 text-xs mt-1">Segunda a Sexta · 09:00–18:00</p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white border border-gray-200 p-8 text-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h3 className="text-navy font-bold text-xl mb-2">Mensagem enviada</h3>
                <p className="text-gray-500 text-sm">
                  Recebemos o seu pedido. Respondemos em 24 horas úteis.
                </p>
              </div>
            ) : (
              <form
                id="cForm"
                action="https://formspree.io/f/xaqvedjq"
                method="POST"
                onSubmit={handleSubmit}
                className="bg-white p-8 flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1">
                    Nome <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-navy transition-colors"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-navy transition-colors"
                    placeholder="email@empresa.pt"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-navy transition-colors"
                    placeholder="+351 9XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-navy mb-1">
                    Serviço
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-navy transition-colors bg-white"
                  >
                    <option value="">-- Selecionar serviço --</option>
                    <option>Diagnóstico IT gratuito</option>
                    <option>Montagem e Upgrade de PCs</option>
                    <option>Manutenção e Reparação de Equipamentos</option>
                    <option>Redes e Wi-Fi para Negócios</option>
                    <option>Cibersegurança e Proteção de Dados (RGPD)</option>
                    <option>Chatbots e Automação com IA</option>
                    <option>Suporte IT Mensal (Subscrição)</option>
                    <option>Outro / Não sei ainda</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1">
                    Mensagem <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-navy transition-colors resize-none"
                    placeholder="Descreva o que precisa..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="gdpr"
                    type="checkbox"
                    name="gdpr"
                    required
                    className="mt-1 shrink-0 accent-navy"
                  />
                  <label htmlFor="gdpr" className="text-xs text-gray-500 leading-relaxed">
                    Concordo com o tratamento dos meus dados pessoais conforme a{' '}
                    <button
                      type="button"
                      onClick={() => setPrivacyOpen(true)}
                      className="underline text-navy hover:text-cyan transition-colors"
                    >
                      Política de Privacidade
                    </button>
                    . Não partilhamos os seus dados com terceiros.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-white font-semibold py-4 hover:bg-[#1a2f6b] transition-colors text-base mt-2"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white max-w-lg w-full max-h-[80vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-navy text-lg">Política de Privacidade</h3>
              <button onClick={() => setPrivacyOpen(false)} className="text-gray-400 hover:text-navy">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p><strong>Responsável:</strong> Zarix · info@zarix.site · Aveiro, Portugal</p>
              <p><strong>Dados recolhidos:</strong> Nome, email, telefone e mensagem submetidos através do formulário de contacto.</p>
              <p><strong>Finalidade:</strong> Responder ao seu pedido de contacto e prestar os serviços solicitados.</p>
              <p><strong>Base legal:</strong> Consentimento explícito (RGPD, Art. 6.º, n.º 1, al. a)).</p>
              <p><strong>Conservação:</strong> Os dados são conservados pelo período necessário para responder ao pedido e, no máximo, 2 anos após o último contacto.</p>
              <p><strong>Partilha:</strong> Os seus dados não são partilhados com terceiros, exceto quando necessário para a prestação do serviço.</p>
              <p><strong>Direitos:</strong> Tem o direito de acesso, retificação, apagamento, portabilidade e oposição ao tratamento dos seus dados. Contacte-nos em info@zarix.site.</p>
            </div>
            <button
              onClick={() => setPrivacyOpen(false)}
              className="mt-6 w-full bg-navy text-white font-semibold py-3 hover:bg-[#1a2f6b] transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

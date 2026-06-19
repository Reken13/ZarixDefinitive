'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

interface FAQ {
  q: string
  a: string
}

interface ServicePageProps {
  slug: string
  breadcrumbLabel: string
  h1: string
  subtitle: string
  intro: string
  features: string[]
  faqs: FAQ[]
  faqSchema: object
  breadcrumbSchema: object
}

function Accordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number>(-1)

  function toggle(i: number) {
    setOpen((prev) => (prev === i ? -1 : i))
  }

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <div key={faq.q} style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <button
            onClick={() => toggle(i)}
            className="w-full bg-transparent border-0 cursor-pointer flex items-center justify-between gap-5 text-left font-sans"
            style={{ padding: '22px 4px' }}
          >
            <span className="text-[1.02rem] font-semibold text-[#F4F1EA] leading-[1.35]">
              {faq.q}
            </span>
            <span
              className="font-heading font-bold shrink-0 text-cyan"
              style={{ fontSize: '1.4rem', lineHeight: 1 }}
            >
              {open === i ? '–' : '+'}
            </span>
          </button>
          {open === i && (
            <p
              className="text-[0.98rem] leading-[1.6] text-[#9AA4B8] m-0"
              style={{ padding: '0 40px 24px 4px' }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }} />
    </div>
  )
}

export default function ServicePage({
  breadcrumbLabel,
  h1,
  subtitle,
  intro,
  features,
  faqs,
  faqSchema,
  breadcrumbSchema,
}: ServicePageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main className="bg-navy">
        {/* Hero */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div
            className="max-w-[1200px] mx-auto"
            style={{ padding: 'clamp(48px,6vh,80px) clamp(24px,4vw,56px) clamp(60px,8vh,100px)' }}
          >
            {/* Breadcrumb */}
            <div
              className="flex items-center gap-2.5 text-[0.84rem] text-[#8E99B0]"
              style={{ marginBottom: 'clamp(32px,4vh,46px)' }}
            >
              <Link href="/" className="text-[#8E99B0] no-underline hover:text-[#F4F1EA] transition-colors">
                Início
              </Link>
              <span className="opacity-50">/</span>
              <span className="text-[#F4F1EA]">{breadcrumbLabel}</span>
            </div>

            {/* Two-column layout */}
            <div
              className="flex flex-wrap items-start"
              style={{ gap: 'clamp(40px,5vw,72px)' }}
            >
              {/* Left: content */}
              <div style={{ flex: '1 1 540px', minWidth: 300 }}>
                <div className="flex items-center gap-3 mb-[clamp(20px,3vh,28px)]">
                  <span className="w-[30px] h-[3px] bg-cyan shrink-0 block" />
                  <span className="text-[0.74rem] font-bold tracking-[0.18em] uppercase text-cyan">
                    {subtitle}
                  </span>
                </div>

                <h1
                  className="font-heading text-[#F4F1EA] m-0 max-w-[18ch]"
                  style={{
                    fontWeight: 900,
                    fontSize: 'clamp(2.3rem,5vw,4.1rem)',
                    lineHeight: 0.98,
                    letterSpacing: '-0.025em',
                    textWrap: 'balance' as React.CSSProperties['textWrap'],
                  }}
                >
                  {h1}
                </h1>

                <p
                  className="text-[#9AA4B8] max-w-[34rem]"
                  style={{
                    fontSize: 'clamp(1rem,1.4vw,1.16rem)',
                    lineHeight: 1.6,
                    margin: 'clamp(22px,3vh,30px) 0 0',
                    textWrap: 'pretty' as React.CSSProperties['textWrap'],
                  }}
                >
                  {intro}
                </p>

                <div className="flex flex-wrap gap-3.5" style={{ marginTop: 'clamp(28px,3.6vh,38px)' }}>
                  <a
                    href="https://wa.me/351967608772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-paper text-navy font-semibold text-base px-7 py-4 no-underline transition-colors hover:bg-cyan hover:text-white"
                  >
                    Diagnóstico gratuito <span className="font-heading">→</span>
                  </a>
                  <a
                    href="#incluido"
                    className="inline-flex items-center text-[#F4F1EA] font-semibold text-base px-7 py-4 no-underline transition-colors"
                    style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#F4F1EA')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
                  >
                    O que está incluído
                  </a>
                </div>
              </div>

              {/* Right: trust card */}
              <div
                style={{
                  flex: '0 1 320px',
                  minWidth: 260,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {[
                  { value: '24h', desc: 'Resposta garantida, em dias úteis.', accent: false },
                  { value: 'Presencial e remoto', desc: 'Em Aveiro e arredores, ou à distância.', accent: false },
                  { value: 'Sem compromisso', desc: 'O primeiro diagnóstico é gratuito.', accent: true },
                ].map((row) => (
                  <div
                    key={row.value}
                    className="flex flex-col gap-1"
                    style={{
                      background: '#13244E',
                      borderTop: '1px solid rgba(255,255,255,0.07)',
                      padding: '22px 26px',
                    }}
                  >
                    <span
                      className="font-heading font-extrabold text-[1.4rem]"
                      style={{ color: row.accent ? '#2E8FC9' : '#F4F1EA' }}
                    >
                      {row.value}
                    </span>
                    <span className="text-[0.88rem] text-[#9AA4B8]">{row.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features — paper section */}
        <section id="incluido" style={{ background: '#F1EDE4', color: '#0D1B3E' }}>
          <div
            className="max-w-[1200px] mx-auto"
            style={{ padding: 'clamp(70px,9vh,118px) clamp(24px,4vw,56px)' }}
          >
            <h2
              className="font-heading m-0"
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.9rem,3.6vw,2.9rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                color: '#0D1B3E',
                marginBottom: 'clamp(40px,5vh,60px)',
              }}
            >
              O que está incluído.
            </h2>
            <div
              className="grid"
              style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(14px,1.6vw,20px)' }}
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-4"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(13,27,62,0.1)',
                    padding: '22px 24px',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#2E8FC9"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-[1px]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[0.98rem] leading-[1.5] m-0" style={{ color: '#3A4252' }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div
            className="max-w-[1200px] mx-auto"
            style={{ padding: 'clamp(70px,9vh,118px) clamp(24px,4vw,56px)' }}
          >
            <div
              className="grid items-start"
              style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(36px,5vw,72px)' }}
            >
              <div>
                <div className="text-[0.74rem] font-bold tracking-[0.18em] uppercase text-cyan mb-[18px]">
                  Perguntas frequentes
                </div>
                <h2
                  className="font-heading text-[#F4F1EA] m-0"
                  style={{
                    fontWeight: 900,
                    fontSize: 'clamp(1.9rem,3.6vw,2.9rem)',
                    lineHeight: 1.04,
                    letterSpacing: '-0.02em',
                    textWrap: 'balance' as React.CSSProperties['textWrap'],
                  }}
                >
                  Ainda com dúvidas?
                </h2>
                <p className="text-[1rem] leading-[1.6] text-[#9AA4B8] max-w-[24rem]" style={{ marginTop: 20 }}>
                  Se a sua pergunta não está aqui, escreva-nos. Respondemos sempre.
                </p>
              </div>

              <Accordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#2E8FC9', color: '#0D1B3E' }}>
          <div
            className="max-w-[1200px] mx-auto flex flex-col items-center text-center"
            style={{ padding: 'clamp(64px,8vh,104px) clamp(24px,4vw,56px)' }}
          >
            <h2
              className="font-heading m-0 max-w-[18ch]"
              style={{
                fontWeight: 900,
                fontSize: 'clamp(2rem,4.6vw,3.6rem)',
                lineHeight: 0.99,
                letterSpacing: '-0.025em',
                color: '#0D1B3E',
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}
            >
              Conte-nos o que está a falhar.
            </h2>
            <p
              className="text-navy/80 max-w-[34rem]"
              style={{ fontSize: 'clamp(1.02rem,1.5vw,1.18rem)', lineHeight: 1.5, marginTop: 20 }}
            >
              Resposta em menos de 24 horas, com diagnóstico gratuito e sem compromisso.
            </p>
            <div className="flex flex-wrap gap-3.5 justify-center" style={{ marginTop: 'clamp(28px,4vh,38px)' }}>
              <a
                href="https://wa.me/351967608772"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-navy text-[#F4F1EA] font-semibold text-[1.05rem] px-8 py-[18px] no-underline transition-opacity hover:opacity-90"
              >
                Falar no WhatsApp <span className="font-heading">→</span>
              </a>
              <a
                href="mailto:info@zarix.site"
                className="inline-flex items-center text-navy font-semibold text-[1.05rem] px-8 py-[18px] no-underline transition-colors"
                style={{ border: '1.5px solid rgba(13,27,62,0.4)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#0D1B3E')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(13,27,62,0.4)')}
              >
                Enviar email
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

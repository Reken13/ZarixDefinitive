import type { Metadata } from 'next'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Reelfolio from './components/Reelfolio'
import Reviews from './components/Reviews'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Zarix — Suporte IT e Websites para PMEs em Aveiro',
  description:
    'Zarix — Suporte IT e criação de websites para restaurantes e PMEs em Aveiro. Redes Wi-Fi, cibersegurança, chatbots com IA. Diagnóstico gratuito.',
  alternates: {
    canonical: 'https://zarix.site/',
    languages: {
      'pt-PT': 'https://zarix.site/',
      'x-default': 'https://zarix.site/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://zarix.site/',
    title: 'Zarix — Suporte IT e Websites para PMEs em Aveiro',
    description:
      'Suporte IT e criação de websites para restaurantes e PMEs em Aveiro. Redes Wi-Fi, cibersegurança, chatbots com IA. Diagnóstico gratuito.',
    images: [{ url: 'https://zarix.site/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://zarix.site/og-image.jpg'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://zarix.site/',
  inLanguage: 'pt-PT',
  publisher: { '@id': 'https://zarix.site/#business' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que faz a Zarix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Zarix oferece suporte IT, criação de websites e tecnologia para restaurantes e PMEs em Aveiro. Isso inclui manutenção de computadores, instalação de redes Wi-Fi, cibersegurança e chatbots com IA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é o custo de um diagnóstico IT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O diagnóstico inicial é gratuito e sem compromisso. Entre em contacto por WhatsApp ou pelo formulário e agendamos uma visita.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é o tempo de resposta para suporte urgente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para situações urgentes, procuramos responder no próprio dia. Em casos não urgentes, a resposta é garantida em 24 horas úteis.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Zarix trabalha apenas em Aveiro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabalhamos principalmente em Aveiro e no distrito de Aveiro. Para suporte remoto, podemos ajudar em qualquer localidade de Portugal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como posso contactar a Zarix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode contactar-nos por WhatsApp (+351 967 608 772), por email (info@zarix.site) ou pelo formulário de contacto no nosso website. Respondemos rapidamente.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <Reelfolio />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import ServicePage from '../components/ServicePage'

export const metadata: Metadata = {
  title: 'Suporte IT em Aveiro | Empresas e PMEs | Zarix',
  description:
    'Suporte informático para empresas e PMEs em Aveiro. Manutenção, redes, segurança e assistência presencial. Resposta em 24h. Zarix IT.',
  alternates: {
    canonical: 'https://zarix.site/suporte-it-aveiro',
    languages: {
      'pt-PT': 'https://zarix.site/suporte-it-aveiro',
      'x-default': 'https://zarix.site/suporte-it-aveiro',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Suporte IT em Aveiro | Empresas e PMEs | Zarix',
    description: 'Suporte informático para empresas e PMEs em Aveiro. Manutenção, redes, segurança e assistência presencial. Resposta em 24h. Zarix IT.',
    images: [{ url: 'https://zarix.site/og-image.jpg' }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.jpg'] },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://zarix.site/' },
    { '@type': 'ListItem', position: 2, name: 'Suporte IT em Aveiro', item: 'https://zarix.site/suporte-it-aveiro' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Qual é o tempo de resposta para uma situação urgente?', acceptedAnswer: { '@type': 'Answer', text: 'Para situações urgentes, procuramos estar no local no próprio dia. Em casos normais, garantimos resposta em 24 horas úteis.' } },
    { '@type': 'Question', name: 'A Zarix faz suporte remoto?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Muitos problemas podem ser resolvidos remotamente em minutos, sem necessidade de deslocação.' } },
    { '@type': 'Question', name: 'Qual é o custo do suporte IT?', acceptedAnswer: { '@type': 'Answer', text: 'Temos planos mensais de suporte e serviço pontual. O diagnóstico inicial é sempre gratuito.' } },
    { '@type': 'Question', name: 'A Zarix trabalha com que tipo de equipamentos?', acceptedAnswer: { '@type': 'Answer', text: 'Trabalhamos com PCs, portáteis, impressoras, routers, switches e sistemas de gestão — Windows, macOS e Linux.' } },
    { '@type': 'Question', name: 'Fazem manutenção preventiva?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Recomendamos manutenção preventiva regular para evitar paragens inesperadas e prolongar a vida dos equipamentos.' } },
  ],
}

export default function Page() {
  return (
    <ServicePage
      slug="suporte-it-aveiro"
      breadcrumbLabel="Suporte IT em Aveiro"
      h1="Suporte Informático para Empresas em Aveiro"
      subtitle="Suporte IT"
      intro="O seu negócio não pode parar por causa de um problema informático. A Zarix oferece suporte IT rápido, presencial e remoto para empresas em Aveiro. Estamos aqui quando precisa."
      features={[
        'Assistência presencial em Aveiro e arredores',
        'Suporte remoto para resolução rápida sem deslocação',
        'Manutenção preventiva de computadores e servidores',
        'Diagnóstico e reparação de hardware',
        'Configuração e actualização de software',
        'Instalação de impressoras, scanners e periféricos',
        'Backup de dados e recuperação de ficheiros',
        'Planos mensais de suporte com prioridade garantida',
      ]}
      faqs={[
        { q: 'Qual é o tempo de resposta para uma situação urgente?', a: 'Para situações urgentes, procuramos estar no local no próprio dia. Em casos normais, garantimos resposta em 24 horas úteis.' },
        { q: 'A Zarix faz suporte remoto?', a: 'Sim. Muitos problemas podem ser resolvidos remotamente em minutos, sem necessidade de deslocação.' },
        { q: 'Qual é o custo do suporte IT?', a: 'Temos planos mensais de suporte e serviço pontual. O diagnóstico inicial é sempre gratuito.' },
        { q: 'A Zarix trabalha com que tipo de equipamentos?', a: 'Trabalhamos com PCs, portáteis, impressoras, routers, switches e sistemas de gestão: Windows, macOS e Linux.' },
        { q: 'Fazem manutenção preventiva?', a: 'Sim. Recomendamos manutenção preventiva regular para evitar paragens inesperadas e prolongar a vida dos equipamentos.' },
      ]}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}

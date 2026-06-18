import type { Metadata } from 'next'
import ServicePage from '../components/ServicePage'

export const metadata: Metadata = {
  title: 'Criação de Websites em Aveiro | Zarix',
  description:
    'Websites profissionais para restaurantes e PMEs em Aveiro. Rápidos, modernos e optimizados para Google. Orçamento gratuito — Zarix IT.',
  alternates: {
    canonical: 'https://zarix.site/criacao-websites-aveiro',
    languages: {
      'pt-PT': 'https://zarix.site/criacao-websites-aveiro',
      'x-default': 'https://zarix.site/criacao-websites-aveiro',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Criação de Websites em Aveiro | Zarix',
    description:
      'Websites profissionais para restaurantes e PMEs em Aveiro. Rápidos, modernos e optimizados para Google. Orçamento gratuito — Zarix IT.',
    images: [{ url: 'https://zarix.site/og-image.png' }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.png'] },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://zarix.site/' },
    { '@type': 'ListItem', position: 2, name: 'Criação de Websites em Aveiro', item: 'https://zarix.site/criacao-websites-aveiro' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quanto custa criar um website com a Zarix?', acceptedAnswer: { '@type': 'Answer', text: 'O preço depende do tipo de projeto. Entre em contacto para receber um orçamento gratuito adaptado ao seu negócio.' } },
    { '@type': 'Question', name: 'Quanto tempo demora a criar um website?', acceptedAnswer: { '@type': 'Answer', text: 'Em média, entre 2 a 4 semanas. Projetos mais simples podem ficar prontos em menos tempo.' } },
    { '@type': 'Question', name: 'O website fica optimizado para o Google?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Todos os websites da Zarix são criados com SEO técnico incluído: velocidade, meta tags, schema markup e estrutura correcta.' } },
    { '@type': 'Question', name: 'O website funciona bem no telemóvel?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, todos os projetos são mobile-first — desenhados primeiro para telemóvel e adaptados para desktop.' } },
    { '@type': 'Question', name: 'Posso actualizar o conteúdo do website depois?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Incluímos formação básica e suporte para que possa actualizar textos, imagens e menus sem depender de nós.' } },
  ],
}

export default function Page() {
  return (
    <ServicePage
      slug="criacao-websites-aveiro"
      breadcrumbLabel="Criação de Websites em Aveiro"
      h1="Criação de Websites Profissionais em Aveiro"
      subtitle="Websites"
      intro="Um website profissional é a primeira impressão que os seus clientes têm do seu negócio. Criamos websites rápidos, modernos e optimizados para Google, para que os seus clientes o encontrem quando procuram o que oferece."
      features={[
        'Design personalizado, adaptado à identidade do seu negócio',
        'Mobile-first: optimizado para telemóvel, tablet e desktop',
        'SEO técnico incluído: aparece no Google quando pesquisam pelo seu serviço',
        'Velocidade de carregamento optimizada',
        'Integração com WhatsApp, Google Maps e redes sociais',
        'Formulário de contacto e marcações online',
        'Domínio e alojamento incluídos no primeiro ano',
        'Suporte e actualizações após entrega',
      ]}
      faqs={[
        { q: 'Quanto custa criar um website com a Zarix?', a: 'O preço depende do tipo de projeto. Entre em contacto para receber um orçamento gratuito adaptado ao seu negócio.' },
        { q: 'Quanto tempo demora a criar um website?', a: 'Em média, entre 2 a 4 semanas. Projetos mais simples podem ficar prontos em menos tempo.' },
        { q: 'O website fica optimizado para o Google?', a: 'Sim. Todos os websites da Zarix são criados com SEO técnico incluído: velocidade, meta tags, schema markup e estrutura correcta.' },
        { q: 'O website funciona bem no telemóvel?', a: 'Sim, todos os projetos são mobile-first: desenhados primeiro para telemóvel e adaptados para desktop.' },
        { q: 'Posso actualizar o conteúdo do website depois?', a: 'Sim. Incluímos formação básica e suporte para que possa actualizar textos, imagens e menus sem depender de nós.' },
      ]}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}

import type { Metadata } from 'next'
import ServicePage from '../components/ServicePage'

export const metadata: Metadata = {
  title: 'Website para Restaurante | Aveiro e Portugal | Zarix',
  description:
    'Website profissional para o teu restaurante: menu online, reservas, Google Maps integrado e optimizado para pesquisas locais. Zarix — Aveiro.',
  alternates: {
    canonical: 'https://zarix.site/websites-para-restaurantes',
    languages: {
      'pt-PT': 'https://zarix.site/websites-para-restaurantes',
      'x-default': 'https://zarix.site/websites-para-restaurantes',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Website para Restaurante | Aveiro e Portugal | Zarix',
    description: 'Website profissional para o teu restaurante: menu online, reservas, Google Maps integrado e optimizado para pesquisas locais. Zarix — Aveiro.',
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
    { '@type': 'ListItem', position: 2, name: 'Website para Restaurante', item: 'https://zarix.site/websites-para-restaurantes' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'O meu restaurante precisa de um website se já tenho Instagram?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O Instagram não aparece no Google quando alguém pesquisa "restaurante em Aveiro". Um website aparece. São ferramentas complementares.' } },
    { '@type': 'Question', name: 'Posso mostrar o menu no website?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O menu pode ser integrado como PDF, imagem ou lista interactiva, com actualizações sempre que necessário.' } },
    { '@type': 'Question', name: 'Consigo receber reservas pelo website?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Integramos formulários de reserva, WhatsApp directo ou sistemas de marcação online.' } },
    { '@type': 'Question', name: 'O website aparece no Google Maps?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Optimizamos o seu perfil do Google Business e ligamos o website para máxima visibilidade em pesquisas locais.' } },
    { '@type': 'Question', name: 'Quanto tempo demora?', acceptedAnswer: { '@type': 'Answer', text: 'Entre 1 a 3 semanas, dependendo do conteúdo disponível. Tratamos de tudo para não perturbar o funcionamento do seu restaurante.' } },
  ],
}

export default function Page() {
  return (
    <ServicePage
      slug="websites-para-restaurantes"
      breadcrumbLabel="Website para Restaurante"
      h1="Website Profissional para o Teu Restaurante"
      subtitle="Restaurantes"
      intro="O seu restaurante merece um website que converta visitantes em clientes. Menu online, reservas, localização e fotos: tudo o que um cliente precisa para escolher o seu restaurante e aparecer à sua porta."
      features={[
        'Menu online actualizado e fácil de gerir',
        'Reservas por WhatsApp ou formulário integrado',
        'Galeria de pratos e ambiente do espaço',
        'Google Maps integrado com morada e horários',
        'Optimizado para "restaurante em Aveiro" e pesquisas locais',
        'Botão de chamada directa para telemóvel',
        'Design elegante que reflecte a identidade do seu espaço',
        'Integração com Instagram e redes sociais',
      ]}
      faqs={[
        { q: 'O meu restaurante precisa de um website se já tenho Instagram?', a: 'Sim. O Instagram não aparece no Google quando alguém pesquisa "restaurante em Aveiro". Um website aparece. São ferramentas complementares.' },
        { q: 'Posso mostrar o menu no website?', a: 'Sim. O menu pode ser integrado como PDF, imagem ou lista interactiva, com actualizações sempre que necessário.' },
        { q: 'Consigo receber reservas pelo website?', a: 'Sim. Integramos formulários de reserva, WhatsApp directo ou sistemas de marcação online.' },
        { q: 'O website aparece no Google Maps?', a: 'Sim. Optimizamos o seu perfil do Google Business e ligamos o website para máxima visibilidade em pesquisas locais.' },
        { q: 'Quanto tempo demora?', a: 'Entre 1 a 3 semanas, dependendo do conteúdo disponível. Tratamos de tudo para não perturbar o funcionamento do seu restaurante.' },
      ]}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}

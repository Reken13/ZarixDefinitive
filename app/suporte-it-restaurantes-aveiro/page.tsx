import type { Metadata } from 'next'
import ServicePage from '../components/ServicePage'

export const metadata: Metadata = {
  title: 'Suporte IT para Restaurantes em Aveiro | Zarix',
  description:
    'Suporte informático dedicado a restaurantes em Aveiro. Wi-Fi, TPAs, caixas, sistemas de gestão e backups. Resposta rápida. Zarix IT.',
  alternates: {
    canonical: 'https://zarix.site/suporte-it-restaurantes-aveiro',
    languages: {
      'pt-PT': 'https://zarix.site/suporte-it-restaurantes-aveiro',
      'x-default': 'https://zarix.site/suporte-it-restaurantes-aveiro',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Suporte IT para Restaurantes em Aveiro | Zarix',
    description: 'Suporte informático dedicado a restaurantes em Aveiro. Wi-Fi, TPAs, caixas, sistemas de gestão e backups. Resposta rápida. Zarix IT.',
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
    { '@type': 'ListItem', position: 2, name: 'Suporte IT para Restaurantes', item: 'https://zarix.site/suporte-it-restaurantes-aveiro' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'O que acontece se o sistema de caixa falhar durante o serviço?', acceptedAnswer: { '@type': 'Answer', text: 'Contacte-nos imediatamente por WhatsApp. Para clientes com plano de suporte, temos prioridade máxima em situações de urgência durante o serviço.' } },
    { '@type': 'Question', name: 'A Zarix configura sistemas de gestão de restaurante?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Instalamos e configuramos software de gestão, TPAs, impressoras de cozinha e sistemas de comanda.' } },
    { '@type': 'Question', name: 'Fazem Wi-Fi separado para clientes e staff?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. É uma das nossas recomendações base: rede separada para clientes (com password visível) e rede interna para equipamentos e staff.' } },
    { '@type': 'Question', name: 'Fazem backup dos dados do restaurante?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Configuramos backups automáticos para que nunca perca dados de vendas, clientes ou stock, mesmo em caso de avaria.' } },
    { '@type': 'Question', name: 'Qual é o custo do suporte mensal?', acceptedAnswer: { '@type': 'Answer', text: 'O suporte mensal para restaurantes tem um custo fixo e inclui prioridade de resposta, manutenção preventiva e diagnósticos sem custo extra.' } },
  ],
}

export default function Page() {
  return (
    <ServicePage
      slug="suporte-it-restaurantes-aveiro"
      breadcrumbLabel="Suporte IT para Restaurantes"
      h1="Suporte IT Especializado para Restaurantes em Aveiro"
      subtitle="Restaurantes"
      intro="Um restaurante tem desafios tecnológicos específicos: Wi-Fi que não pode falhar, caixas que têm de funcionar, TPAs e sistemas de gestão. A Zarix conhece este mundo e está disponível quando mais precisa."
      features={[
        'Suporte prioritário durante horário de serviço',
        'Configuração e manutenção de sistemas de caixa e gestão',
        'Wi-Fi profissional com redes separadas para clientes e staff',
        'Instalação e configuração de TPAs e impressoras de cozinha',
        'Backup automático de dados de vendas e stock',
        'Manutenção de computadores e tablets de comanda',
        'Câmeras de segurança e controlo de acessos',
        'Suporte remoto imediato por WhatsApp',
      ]}
      faqs={[
        { q: 'O que acontece se o sistema de caixa falhar durante o serviço?', a: 'Contacte-nos imediatamente por WhatsApp. Para clientes com plano de suporte, temos prioridade máxima em situações de urgência durante o serviço.' },
        { q: 'A Zarix configura sistemas de gestão de restaurante?', a: 'Sim. Instalamos e configuramos software de gestão, TPAs, impressoras de cozinha e sistemas de comanda.' },
        { q: 'Fazem Wi-Fi separado para clientes e staff?', a: 'Sim. É uma das nossas recomendações base: rede separada para clientes (com password visível) e rede interna para equipamentos e staff.' },
        { q: 'Fazem backup dos dados do restaurante?', a: 'Sim. Configuramos backups automáticos para que nunca perca dados de vendas, clientes ou stock, mesmo em caso de avaria.' },
        { q: 'Qual é o custo do suporte mensal?', a: 'O suporte mensal para restaurantes tem um custo fixo e inclui prioridade de resposta, manutenção preventiva e diagnósticos sem custo extra.' },
      ]}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}

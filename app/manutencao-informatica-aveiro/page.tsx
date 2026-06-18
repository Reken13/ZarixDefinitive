import type { Metadata } from 'next'
import ServicePage from '../components/ServicePage'

export const metadata: Metadata = {
  title: 'Manutenção Informática em Aveiro | Zarix',
  description:
    'Manutenção e reparação informática para empresas em Aveiro. Diagnóstico, reparação de PCs e portáteis, remoção de vírus e upgrades. Zarix IT.',
  alternates: {
    canonical: 'https://zarix.site/manutencao-informatica-aveiro',
    languages: {
      'pt-PT': 'https://zarix.site/manutencao-informatica-aveiro',
      'x-default': 'https://zarix.site/manutencao-informatica-aveiro',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Manutenção Informática em Aveiro | Zarix',
    description: 'Manutenção e reparação informática para empresas em Aveiro. Diagnóstico, reparação de PCs e portáteis, remoção de vírus e upgrades. Zarix IT.',
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
    { '@type': 'ListItem', position: 2, name: 'Manutenção Informática em Aveiro', item: 'https://zarix.site/manutencao-informatica-aveiro' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'O meu computador está muito lento. Vale a pena reparar?', acceptedAnswer: { '@type': 'Answer', text: 'Na maioria dos casos, sim. Um computador lento pode ficar como novo com uma limpeza, optimização do sistema ou upgrade de memória/disco. O diagnóstico é gratuito.' } },
    { '@type': 'Question', name: 'Fazem reparação de portáteis?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Reparamos portáteis de todas as marcas: ecrã, teclado, bateria, placa-mãe e problemas de software.' } },
    { '@type': 'Question', name: 'Consigo recuperar ficheiros de um computador avariado?', acceptedAnswer: { '@type': 'Answer', text: 'Muitas vezes sim. Temos equipamento para recuperação de dados de discos danificados ou formatados. O diagnóstico inicial é gratuito.' } },
    { '@type': 'Question', name: 'Quanto tempo demora a reparação?', acceptedAnswer: { '@type': 'Answer', text: 'A maioria das reparações fica pronta no mesmo dia ou em 24 horas. Para peças especiais, pode demorar mais — avisamos sempre antes.' } },
    { '@type': 'Question', name: 'Fazem upgrades de hardware?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Instalamos mais memória RAM, SSD, placas gráficas e outros componentes para dar nova vida ao seu equipamento.' } },
  ],
}

export default function Page() {
  return (
    <ServicePage
      slug="manutencao-informatica-aveiro"
      breadcrumbLabel="Manutenção Informática em Aveiro"
      h1="Manutenção e Reparação Informática em Aveiro"
      subtitle="Manutenção"
      intro="Computador lento, vírus, avaria ou simplesmente precisa de um upgrade? A Zarix resolve. Diagnóstico gratuito, preço transparente e maioria das reparações no próprio dia."
      features={[
        'Diagnóstico completo gratuito e sem compromisso',
        'Reparação de PCs e portáteis de todas as marcas',
        'Remoção de vírus, malware e ransomware',
        'Optimização e limpeza do sistema operativo',
        'Upgrade de memória RAM, SSD e outros componentes',
        'Recuperação de dados de discos danificados',
        'Instalação e configuração de software',
        'Formatação e reinstalação do sistema operativo',
      ]}
      faqs={[
        { q: 'O meu computador está muito lento. Vale a pena reparar?', a: 'Na maioria dos casos, sim. Um computador lento pode ficar como novo com uma limpeza, optimização do sistema ou upgrade de memória/disco. O diagnóstico é gratuito.' },
        { q: 'Fazem reparação de portáteis?', a: 'Sim. Reparamos portáteis de todas as marcas: ecrã, teclado, bateria, placa-mãe e problemas de software.' },
        { q: 'Consigo recuperar ficheiros de um computador avariado?', a: 'Muitas vezes sim. Temos equipamento para recuperação de dados de discos danificados ou formatados. O diagnóstico inicial é gratuito.' },
        { q: 'Quanto tempo demora a reparação?', a: 'A maioria das reparações fica pronta no mesmo dia ou em 24 horas. Para peças especiais, pode demorar mais. Avisamos sempre antes.' },
        { q: 'Fazem upgrades de hardware?', a: 'Sim. Instalamos mais memória RAM, SSD, placas gráficas e outros componentes para dar nova vida ao seu equipamento.' },
      ]}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}

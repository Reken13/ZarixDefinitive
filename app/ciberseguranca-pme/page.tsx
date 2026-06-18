import type { Metadata } from 'next'
import ServicePage from '../components/ServicePage'

export const metadata: Metadata = {
  title: 'Cibersegurança para PMEs | Portugal | Zarix',
  description:
    'Proteção cibernética para pequenas e médias empresas em Portugal. Antivírus gerido, backups, RGPD e formação de colaboradores. Zarix IT — Aveiro.',
  alternates: {
    canonical: 'https://zarix.site/ciberseguranca-pme',
    languages: {
      'pt-PT': 'https://zarix.site/ciberseguranca-pme',
      'x-default': 'https://zarix.site/ciberseguranca-pme',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Cibersegurança para PMEs | Portugal | Zarix',
    description: 'Proteção cibernética para pequenas e médias empresas em Portugal. Antivírus gerido, backups, RGPD e formação de colaboradores. Zarix IT — Aveiro.',
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
    { '@type': 'ListItem', position: 2, name: 'Cibersegurança para PMEs', item: 'https://zarix.site/ciberseguranca-pme' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'As PMEs são alvo de ataques informáticos?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A maioria dos ataques visa pequenas empresas porque têm menos protecção. Um ataque de ransomware pode paralisar completamente um negócio.' } },
    { '@type': 'Question', name: 'O que é o RGPD e como afecta o meu negócio?', acceptedAnswer: { '@type': 'Answer', text: 'O RGPD obriga as empresas a proteger os dados pessoais dos clientes. Multas por incumprimento podem ser elevadas. A Zarix ajuda a cumprir o RGPD de forma prática.' } },
    { '@type': 'Question', name: 'O antivírus que já tenho é suficiente?', acceptedAnswer: { '@type': 'Answer', text: 'Depende. Muitas soluções gratuitas não oferecem protecção adequada para uso empresarial. Instalamos soluções geridas com monitorização activa.' } },
    { '@type': 'Question', name: 'Fazem backup automático dos dados?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Configuramos backups automáticos, testados regularmente, para cloud e/ou local. Em caso de ataque ou avaria, os dados são recuperados.' } },
    { '@type': 'Question', name: 'O que fazer se suspeitar de um ataque?', acceptedAnswer: { '@type': 'Answer', text: 'Contacte-nos imediatamente por WhatsApp. Desligue os equipamentos afectados da rede e não apague nada. Respondemos com urgência.' } },
  ],
}

export default function Page() {
  return (
    <ServicePage
      slug="ciberseguranca-pme"
      breadcrumbLabel="Cibersegurança para PMEs"
      h1="Cibersegurança para Pequenas e Médias Empresas"
      subtitle="Segurança"
      intro="As PMEs são o alvo preferido dos ataques informáticos precisamente porque estão menos protegidas. A Zarix oferece protecção real, simples e acessível para o seu negócio — sem jargão técnico."
      features={[
        'Avaliação de riscos e auditoria de segurança',
        'Instalação e gestão de antivírus empresarial',
        'Backup automático de dados com recuperação garantida',
        'Conformidade RGPD para PMEs e comerciantes',
        'Protecção contra ransomware e phishing',
        'Formação de colaboradores em boas práticas',
        'Gestão de passwords e autenticação a dois factores',
        'Monitorização e alertas de segurança',
      ]}
      faqs={[
        { q: 'As PMEs são alvo de ataques informáticos?', a: 'Sim. A maioria dos ataques visa pequenas empresas porque têm menos protecção. Um ataque de ransomware pode paralisar completamente um negócio.' },
        { q: 'O que é o RGPD e como afecta o meu negócio?', a: 'O RGPD obriga as empresas a proteger os dados pessoais dos clientes. Multas por incumprimento podem ser elevadas. A Zarix ajuda a cumprir o RGPD de forma prática.' },
        { q: 'O antivírus que já tenho é suficiente?', a: 'Depende. Muitas soluções gratuitas não oferecem protecção adequada para uso empresarial. Instalamos soluções geridas com monitorização activa.' },
        { q: 'Fazem backup automático dos dados?', a: 'Sim. Configuramos backups automáticos, testados regularmente, para cloud e/ou local. Em caso de ataque ou avaria, os dados são recuperados.' },
        { q: 'O que fazer se suspeitar de um ataque?', a: 'Contacte-nos imediatamente por WhatsApp. Desligue os equipamentos afectados da rede e não apague nada. Respondemos com urgência.' },
      ]}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}

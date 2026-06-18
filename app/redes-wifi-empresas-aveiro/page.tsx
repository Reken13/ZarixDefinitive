import type { Metadata } from 'next'
import ServicePage from '../components/ServicePage'

export const metadata: Metadata = {
  title: 'Redes Wi-Fi para Empresas em Aveiro | Zarix',
  description:
    'Instalação e configuração de redes Wi-Fi profissionais para empresas em Aveiro. Rede separada para clientes e staff, VPN e monitorização. Zarix IT.',
  alternates: {
    canonical: 'https://zarix.site/redes-wifi-empresas-aveiro',
    languages: {
      'pt-PT': 'https://zarix.site/redes-wifi-empresas-aveiro',
      'x-default': 'https://zarix.site/redes-wifi-empresas-aveiro',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Redes Wi-Fi para Empresas em Aveiro | Zarix',
    description: 'Instalação e configuração de redes Wi-Fi profissionais para empresas em Aveiro. Rede separada para clientes e staff, VPN e monitorização. Zarix IT.',
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
    { '@type': 'ListItem', position: 2, name: 'Redes Wi-Fi para Empresas', item: 'https://zarix.site/redes-wifi-empresas-aveiro' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Porque devo ter uma rede separada para clientes?', acceptedAnswer: { '@type': 'Answer', text: 'Por segurança. Se um cliente ligar um dispositivo infectado à mesma rede dos seus computadores, pode comprometer o seu negócio. Redes separadas isolam este risco.' } },
    { '@type': 'Question', name: 'O Wi-Fi da operadora que tenho não chega?', acceptedAnswer: { '@type': 'Answer', text: 'O router das operadoras é básico. Para uso empresarial, instalamos equipamento profissional com melhor cobertura, estabilidade e controlo.' } },
    { '@type': 'Question', name: 'Consigo ter Wi-Fi em toda a área do negócio?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Analisamos o espaço e instalamos os access points necessários para cobertura total sem zonas mortas.' } },
    { '@type': 'Question', name: 'A Zarix faz manutenção da rede depois da instalação?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Monitorização remota da rede e suporte incluído para clientes com plano de manutenção.' } },
    { '@type': 'Question', name: 'Posso limitar a velocidade do Wi-Fi para clientes?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Configuramos limites de largura de banda para que os clientes não consumam os recursos da rede interna.' } },
  ],
}

export default function Page() {
  return (
    <ServicePage
      slug="redes-wifi-empresas-aveiro"
      breadcrumbLabel="Redes Wi-Fi para Empresas"
      h1="Instalação de Redes Wi-Fi para Empresas em Aveiro"
      subtitle="Redes"
      intro="Uma rede Wi-Fi lenta ou insegura custa dinheiro ao seu negócio. A Zarix instala redes profissionais, estáveis e seguras — com cobertura total, rede separada para clientes e gestão remota incluída."
      features={[
        'Análise e planeamento da rede para o seu espaço',
        'Instalação de routers e access points profissionais',
        'Rede separada para clientes e rede interna para staff/equipamentos',
        'Controlo de largura de banda e prioridade de tráfego',
        'Configuração de VPN para acesso remoto seguro',
        'Monitorização remota e alertas de falha',
        'Segurança Wi-Fi com autenticação e encriptação',
        'Suporte e manutenção incluídos',
      ]}
      faqs={[
        { q: 'Porque devo ter uma rede separada para clientes?', a: 'Por segurança. Se um cliente ligar um dispositivo infectado à mesma rede dos seus computadores, pode comprometer o seu negócio. Redes separadas isolam este risco.' },
        { q: 'O Wi-Fi da operadora que tenho não chega?', a: 'O router das operadoras é básico. Para uso empresarial, instalamos equipamento profissional com melhor cobertura, estabilidade e controlo.' },
        { q: 'Consigo ter Wi-Fi em toda a área do negócio?', a: 'Sim. Analisamos o espaço e instalamos os access points necessários para cobertura total sem zonas mortas.' },
        { q: 'A Zarix faz manutenção da rede depois da instalação?', a: 'Sim. Monitorização remota da rede e suporte incluído para clientes com plano de manutenção.' },
        { q: 'Posso limitar a velocidade do Wi-Fi para clientes?', a: 'Sim. Configuramos limites de largura de banda para que os clientes não consumam os recursos da rede interna.' },
      ]}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}

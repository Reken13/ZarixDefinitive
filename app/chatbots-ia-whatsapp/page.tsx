import type { Metadata } from 'next'
import ServicePage from '../components/ServicePage'

export const metadata: Metadata = {
  title: 'Chatbot WhatsApp para Restaurantes | Zarix',
  description:
    'Chatbot WhatsApp para restaurantes e PMEs: reservas automáticas, respostas 24h, menu digital integrado. Sem perder clientes fora de horário. Zarix IT.',
  alternates: {
    canonical: 'https://zarix.site/chatbots-ia-whatsapp',
    languages: {
      'pt-PT': 'https://zarix.site/chatbots-ia-whatsapp',
      'x-default': 'https://zarix.site/chatbots-ia-whatsapp',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Chatbot WhatsApp para Restaurantes | Zarix',
    description: 'Chatbot WhatsApp para restaurantes e PMEs: reservas automáticas, respostas 24h, menu digital integrado. Sem perder clientes fora de horário. Zarix IT.',
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
    { '@type': 'ListItem', position: 2, name: 'Chatbots e IA para WhatsApp', item: 'https://zarix.site/chatbots-ia-whatsapp' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'O chatbot substitui o atendimento humano?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O chatbot responde automaticamente a perguntas frequentes e pedidos de reserva. Conversas mais complexas são encaminhadas para si.' } },
    { '@type': 'Question', name: 'O chatbot funciona fora do horário de atendimento?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. É exatamente para isso que serve. Quando está fechado, o chatbot responde, recolhe pedidos e garante que não perde clientes.' } },
    { '@type': 'Question', name: 'Em quanto tempo fica o chatbot pronto?', acceptedAnswer: { '@type': 'Answer', text: 'Tipicamente entre 1 a 2 semanas, incluindo configuração, testes e ajustes finais.' } },
    { '@type': 'Question', name: 'O chatbot consegue mostrar o menu?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O chatbot pode enviar o menu em PDF, imagens ou lista de pratos directamente na conversa do WhatsApp.' } },
    { '@type': 'Question', name: 'Posso actualizar as respostas do chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Actualizamos as respostas sempre que necessário — por exemplo, quando muda o menu ou os horários.' } },
  ],
}

export default function Page() {
  return (
    <ServicePage
      slug="chatbots-ia-whatsapp"
      breadcrumbLabel="Chatbots e IA para WhatsApp"
      h1="Chatbots e Automação com IA para o Teu Negócio"
      subtitle="Automação"
      intro="Quantos clientes perde por não responder fora de horas? Um chatbot com IA no WhatsApp responde automaticamente, aceita reservas e envia o menu — 24 horas por dia, sem que precise de estar presente."
      features={[
        'Chatbot WhatsApp com respostas automáticas 24h',
        'Reservas automáticas sem intervenção manual',
        'Envio automático de menu, horários e localização',
        'Encaminhamento de conversas complexas para si',
        'Integração com sistema de gestão de reservas',
        'Relatórios de conversas e pedidos recebidos',
        'Actualizações de conteúdo sempre que necessário',
        'Suporte e monitorização incluídos',
      ]}
      faqs={[
        { q: 'O chatbot substitui o atendimento humano?', a: 'Não. O chatbot responde automaticamente a perguntas frequentes e pedidos de reserva. Conversas mais complexas são encaminhadas para si.' },
        { q: 'O chatbot funciona fora do horário de atendimento?', a: 'Sim. É exatamente para isso que serve. Quando está fechado, o chatbot responde, recolhe pedidos e garante que não perde clientes.' },
        { q: 'Em quanto tempo fica o chatbot pronto?', a: 'Tipicamente entre 1 a 2 semanas, incluindo configuração, testes e ajustes finais.' },
        { q: 'O chatbot consegue mostrar o menu?', a: 'Sim. O chatbot pode enviar o menu em PDF, imagens ou lista de pratos directamente na conversa do WhatsApp.' },
        { q: 'Posso actualizar as respostas do chatbot?', a: 'Sim. Actualizamos as respostas sempre que necessário — por exemplo, quando muda o menu ou os horários.' },
      ]}
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}

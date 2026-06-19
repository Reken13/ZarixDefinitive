import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Google Business Profile para Restaurantes em Aveiro: Guia Prático | Zarix Blog',
  description:
    'Como optimizar o Google Business Profile do teu restaurante em Aveiro para aparecer nas pesquisas locais e atrair mais clientes. Guia passo a passo.',
  alternates: {
    canonical: 'https://zarix.site/blog/google-business-profile-restaurantes-aveiro',
    languages: {
      'pt-PT': 'https://zarix.site/blog/google-business-profile-restaurantes-aveiro',
      'x-default': 'https://zarix.site/blog/google-business-profile-restaurantes-aveiro',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://zarix.site/blog/google-business-profile-restaurantes-aveiro',
    title: 'Google Business Profile para Restaurantes em Aveiro: Guia Prático | Zarix Blog',
    description: 'Como optimizar o Google Business Profile do teu restaurante em Aveiro para aparecer nas pesquisas locais e atrair mais clientes. Guia passo a passo.',
    images: [{ url: 'https://zarix.site/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.jpg'] },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Business Profile para Restaurantes em Aveiro: Guia Prático',
  description: 'Como optimizar o Google Business Profile do teu restaurante em Aveiro para aparecer nas pesquisas locais e atrair mais clientes. Guia passo a passo.',
  author: { '@type': 'Organization', name: 'Zarix', url: 'https://zarix.site' },
  publisher: {
    '@type': 'Organization',
    name: 'Zarix',
    logo: { '@type': 'ImageObject', url: 'https://zarix.site/favicon-192.png' },
  },
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
  url: 'https://zarix.site/blog/google-business-profile-restaurantes-aveiro',
  mainEntityOfPage: 'https://zarix.site/blog/google-business-profile-restaurantes-aveiro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://zarix.site/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zarix.site/blog' },
    { '@type': 'ListItem', position: 3, name: 'Google Business Profile para Restaurantes em Aveiro', item: 'https://zarix.site/blog/google-business-profile-restaurantes-aveiro' },
  ],
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main>
        <article style={{ background: '#F1EDE4', color: '#0D1B3E', paddingTop: 64 }}>
          <div
            className="max-w-[760px] mx-auto"
            style={{ padding: 'clamp(48px,6vh,72px) clamp(24px,4vw,56px) clamp(60px,8vh,96px)' }}
          >
            <nav className="flex items-center gap-2 text-[0.84rem] text-[#7A8295] mb-10">
              <Link href="/" className="text-[#7A8295] no-underline hover:text-[#0D1B3E] transition-colors">Início</Link>
              <span className="opacity-50">/</span>
              <Link href="/blog" className="text-[#7A8295] no-underline hover:text-[#0D1B3E] transition-colors">Blog</Link>
              <span className="opacity-50">/</span>
              <span style={{ color: '#565E6E' }}>Google Business Profile</span>
            </nav>

            <span className="text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#2E8FC9] block mb-4">
              Marketing Digital
            </span>

            <h1
              className="font-heading m-0 mb-5"
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.9rem,3.8vw,3.1rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                color: '#0D1B3E',
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}
            >
              Google Business Profile para Restaurantes em Aveiro: Guia Prático
            </h1>

            <div
              className="flex items-center gap-3 text-[0.88rem] pb-8"
              style={{ color: '#7A8295', borderBottom: '1px solid rgba(13,27,62,0.1)', marginBottom: 40 }}
            >
              <span>Zarix</span>
              <span>·</span>
              <time dateTime="2026-06-10">10 de Junho de 2026</time>
              <span>·</span>
              <span>7 min de leitura</span>
            </div>

            <div style={{ lineHeight: 1.72, fontSize: 'clamp(0.98rem,1.3vw,1.08rem)', color: '#3A4252' }}>
              <p style={{ marginBottom: '1.4em' }}>
                Quando alguém em Aveiro pesquisa &ldquo;restaurante perto de mim&rdquo; ou &ldquo;onde jantar em Aveiro&rdquo;, o que aparece primeiro não são os sites mais bonitos — são os <strong style={{ color: '#0D1B3E' }}>perfis do Google Business Profile melhor optimizados.</strong> E a maioria dos restaurantes locais está a deixar este canal completamente ao acaso.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                O Google Business Profile (antes chamado Google My Business) é gratuito. Não optimizá-lo é deixar visibilidade em cima da mesa.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                O que é o Google Business Profile e porque importa
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                É o painel que aparece no lado direito do Google quando pesquisas o nome de um negócio — com morada, horário, fotos, avaliações e contacto. Em pesquisas genéricas como &ldquo;restaurante Aveiro&rdquo;, os três primeiros resultados locais (o &ldquo;Local Pack&rdquo;) captam mais de 70% dos cliques.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                Se o teu perfil está incompleto, com fotos de má qualidade ou sem resposta a avaliações, estás a perder clientes para concorrentes que podem ter comida pior — mas um perfil melhor.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Passo 1: Reclama e verifica o teu perfil
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Vai a <strong style={{ color: '#0D1B3E' }}>business.google.com</strong> e pesquisa o nome do teu restaurante. Se já existe um perfil criado automaticamente pelo Google, reclama-o. Se não existe, cria um novo. A verificação é normalmente feita por código postal enviado para a morada do estabelecimento — demora alguns dias.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                Um perfil verificado tem muito mais peso nos resultados do que um não verificado.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Passo 2: Preenche toda a informação
              </h2>

              <p style={{ marginBottom: '0.8em' }}>O Google favorece perfis completos. Certifica-te de que tens:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Nome exacto do restaurante (sem palavras-chave artificiais no nome)',
                  'Categoria principal correcta (ex: "Restaurante") + categorias secundárias',
                  'Morada completa e pin no mapa no sítio certo',
                  'Horário de funcionamento actualizado (incluindo feriados)',
                  'Número de telefone com indicativo',
                  'Website do restaurante (se não tens, este artigo explica porque precisas)',
                  'Menu com preços actualizado',
                  'Atributos: aceita reservas, tem esplanada, Wi-Fi grátis, acessível a cadeiras de rodas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ marginBottom: '0.55em' }}>
                    <span className="shrink-0 mt-[0.45em]" style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E8FC9', display: 'block' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Passo 3: Fotos de qualidade — e muitas
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Perfis com mais de 100 fotos recebem em média 520% mais chamadas e 2.717% mais pedidos de direcções do que perfis sem fotos (dados Google). Não precisas de fotógrafo profissional — precisas de luz natural, pratos arrumados e consistência.
              </p>

              <p style={{ marginBottom: '0.8em' }}>Fotografa:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Os pratos mais pedidos e os mais fotogénicos',
                  'O exterior do restaurante (com e sem clientes)',
                  'O interior — ambiente, detalhes, balcão',
                  'A equipa (cria proximidade com os clientes)',
                  'Momentos especiais: eventos, pratos sazonais',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ marginBottom: '0.55em' }}>
                    <span className="shrink-0 mt-[0.45em]" style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E8FC9', display: 'block' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Passo 4: Avaliações — pede e responde
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                As avaliações são um factor de ranking directo no Google. Quanto mais avaliações positivas e recentes tiveres, mais alto apareces. E a taxa de resposta do negócio também conta.
              </p>

              <p style={{ marginBottom: '0.8em' }}>Como pedir avaliações sem ser intrusivo:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Coloca um QR code na mesa ou na conta que leva directamente ao formulário de avaliação',
                  'Pede verbalmente no momento da saída, quando o cliente está satisfeito',
                  'Envia o link por WhatsApp após encomendas para levar',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ marginBottom: '0.55em' }}>
                    <span className="shrink-0 mt-[0.45em]" style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E8FC9', display: 'block' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p style={{ marginBottom: '1.4em' }}>
                Responde a todas as avaliações — positivas e negativas. Uma resposta profissional a uma crítica negativa vale mais do que dez respostas a elogios. Mostra que te importas e que tomas a experiência do cliente a sério.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Passo 5: Publicações regulares no perfil
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                O Google Business Profile permite publicar actualizações — pratos do dia, eventos especiais, promoções. Estas publicações aparecem directamente no painel do Google quando alguém pesquisa o teu restaurante. Uma publicação por semana é suficiente para manter o perfil activo.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Website + Google Business: a combinação que funciona
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                O Google Business Profile dá visibilidade imediata nas pesquisas locais. O website dá credibilidade, detalhe e a possibilidade de aparecer também nas pesquisas orgânicas. Os restaurantes com ambos bem optimizados têm uma presença online que os concorrentes locais raramente conseguem igualar.
              </p>

              <p>
                Se precisas de ajuda a optimizar o perfil ou a criar um website que complemente a tua presença no Google, fala connosco.
              </p>
            </div>

            <div
              className="mt-12 p-8"
              style={{ background: '#0D1B3E' }}
            >
              <p className="font-heading font-extrabold text-[#F4F1EA] text-[1.15rem] mb-2">
                O teu restaurante aparece no Google?
              </p>
              <p className="text-[#9AA4B8] text-[0.95rem] leading-relaxed mb-5">
                A Zarix ajuda restaurantes em Aveiro a optimizar a presença online: website, Google Business e mais.
              </p>
              <a
                href="https://wa.me/351967608772"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[0.95rem] px-6 py-3 no-underline transition-colors hover:bg-navy bg-cyan text-white"
              >
                Falar no WhatsApp <span className="font-heading">→</span>
              </a>
            </div>
          </div>
        </article>

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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

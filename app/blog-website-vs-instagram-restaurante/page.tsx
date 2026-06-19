import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Website ou Instagram para o teu restaurante? | Zarix Blog',
  description:
    'Website vs Instagram restaurante: o que escolher? Descobre o que cada plataforma faz pelo teu negócio e por que a maioria dos restaurantes precisa das duas.',
  alternates: {
    canonical: 'https://zarix.site/blog-website-vs-instagram-restaurante',
    languages: {
      'pt-PT': 'https://zarix.site/blog-website-vs-instagram-restaurante',
      'x-default': 'https://zarix.site/blog-website-vs-instagram-restaurante',
    },
  },
  openGraph: {
    type: 'article',
    title: 'Website ou Instagram para o teu restaurante? | Zarix Blog',
    description: 'Website vs Instagram restaurante: o que escolher? Descobre o que cada plataforma faz pelo teu negócio e por que a maioria dos restaurantes precisa das duas.',
    images: [{ url: 'https://zarix.site/og-image.jpg' }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.jpg'] },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Website ou Instagram: o que faz mais sentido para o teu restaurante?',
  description: 'Website vs Instagram restaurante: o que escolher? Descobre o que cada plataforma faz pelo teu negócio e por que a maioria dos restaurantes precisa das duas.',
  author: { '@type': 'Organization', name: 'Zarix', url: 'https://zarix.site' },
  publisher: {
    '@type': 'Organization',
    name: 'Zarix',
    logo: { '@type': 'ImageObject', url: 'https://zarix.site/favicon-192.png' },
  },
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
  url: 'https://zarix.site/blog-website-vs-instagram-restaurante',
  mainEntityOfPage: 'https://zarix.site/blog-website-vs-instagram-restaurante',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://zarix.site/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zarix.site/blog' },
    { '@type': 'ListItem', position: 3, name: 'Website ou Instagram para o teu restaurante?', item: 'https://zarix.site/blog-website-vs-instagram-restaurante' },
  ],
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main>
        {/* Article — paper background */}
        <article style={{ background: '#F1EDE4', color: '#0D1B3E', paddingTop: 64 }}>
          <div
            className="max-w-[760px] mx-auto"
            style={{ padding: 'clamp(48px,6vh,72px) clamp(24px,4vw,56px) clamp(60px,8vh,96px)' }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[0.84rem] text-[#7A8295] mb-10">
              <Link href="/" className="text-[#7A8295] no-underline hover:text-[#0D1B3E] transition-colors">Início</Link>
              <span className="opacity-50">/</span>
              <Link href="/blog" className="text-[#7A8295] no-underline hover:text-[#0D1B3E] transition-colors">Blog</Link>
              <span className="opacity-50">/</span>
              <span style={{ color: '#565E6E' }}>Website ou Instagram</span>
            </nav>

            <span className="text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#2E8FC9] block mb-4">
              Websites
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
              Website ou Instagram: o que faz mais sentido para o teu restaurante?
            </h1>

            <div
              className="flex items-center gap-3 text-[0.88rem] pb-8"
              style={{ color: '#7A8295', borderBottom: '1px solid rgba(13,27,62,0.1)', marginBottom: 40 }}
            >
              <span>Zarix</span>
              <span>·</span>
              <time dateTime="2026-05-28">28 de Maio de 2026</time>
              <span>·</span>
              <span>5 min de leitura</span>
            </div>

            {/* Article body */}
            <div style={{ lineHeight: 1.72, fontSize: 'clamp(0.98rem,1.3vw,1.08rem)', color: '#3A4252' }}>
              <p style={{ marginBottom: '1.4em' }}>
                É uma pergunta que ouvimos frequentemente de donos de restaurante em Aveiro:
                <strong style={{ color: '#0D1B3E' }}> &ldquo;Já tenho Instagram. Preciso mesmo de um website?&rdquo;</strong>
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                A resposta curta é: sim. Mas não é porque o Instagram seja mau. É porque fazem coisas diferentes, e o seu negócio precisa das duas.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                O que o Instagram faz bem
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                O Instagram é uma ferramenta de descoberta. Quando um cliente já sabe que quer comer fora e está a explorar opções, pode encontrar o seu restaurante através de uma publicação bonita, uma história partilhada por um amigo ou um hashtag local.
              </p>

              <p style={{ marginBottom: '0.8em' }}>É excelente para:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {['Mostrar o ambiente e os pratos de forma visual', 'Criar uma comunidade de clientes habituais', 'Partilhar promoções e eventos especiais', 'Receber mensagens directas de clientes'].map((item) => (
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
                O que o Instagram não consegue fazer
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                O Instagram não aparece no Google. Quando alguém escreve <strong style={{ color: '#0D1B3E' }}>&ldquo;restaurante em Aveiro&rdquo;</strong> ou <strong style={{ color: '#0D1B3E' }}>&ldquo;onde comer peixe em Aveiro&rdquo;</strong>, os resultados que aparecem são websites, não perfis do Instagram.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                E essa é a diferença fundamental. O Instagram serve para manter clientes que já o conhecem. Um website serve para atrair clientes que ainda não o conhecem mas estão a procurar exactamente o que oferece.
              </p>

              <p style={{ marginBottom: '0.8em' }}>O Instagram também não consegue:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Mostrar o menu de forma organizada e pesquisável',
                  'Aceitar reservas de forma estruturada',
                  'Aparecer no Google Maps com informação detalhada',
                  'Transmitir credibilidade a clientes que pesquisam pela primeira vez',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ marginBottom: '0.55em' }}>
                    <span className="shrink-0 mt-[0.45em]" style={{ width: 7, height: 7, borderRadius: '50%', background: '#9AA4B8', display: 'block' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                O que um website faz que o Instagram não faz
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Um website profissional posiciona o seu restaurante nos resultados de pesquisa do Google. Quando alguém em Aveiro pesquisa pelo tipo de cozinha que serve, o seu restaurante aparece. Isso é visibilidade que o Instagram simplesmente não oferece.
              </p>

              <p style={{ marginBottom: '0.8em' }}>Além disso, um website:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Transmite profissionalismo e credibilidade imediata',
                  'Apresenta o menu de forma clara, com preços e descrições',
                  'Permite reservas online ou por WhatsApp directamente',
                  'Integra com o Google Maps e Google Business',
                  'Funciona 24 horas sem que precise de publicar conteúdo',
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
                A conclusão prática
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Use o Instagram para manter e envolver os clientes que já o conhecem. Use o website para atrair os clientes que ainda não o conhecem mas estão a procurar exactamente o que oferece.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                A maioria dos restaurantes que crescem online usa as duas ferramentas. Não é uma escolha: é uma estratégia.
              </p>

              <p>
                Se ainda não tem um website, ou se o que tem está desactualizado, fale connosco. O diagnóstico inicial é gratuito e sem compromisso.
              </p>
            </div>

            {/* In-article CTA */}
            <div
              className="mt-12 p-8"
              style={{ background: '#0D1B3E' }}
            >
              <p className="font-heading font-extrabold text-[#F4F1EA] text-[1.15rem] mb-2">
                Precisa de um website para o seu restaurante?
              </p>
              <p className="text-[#9AA4B8] text-[0.95rem] leading-relaxed mb-5">
                A Zarix cria websites profissionais para restaurantes em Aveiro. Menu online, reservas e optimizado para Google.
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

        {/* CTA section — cyan */}
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

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Wi-Fi Lento no Restaurante: Causas, Custos e Soluções | Zarix Blog',
  description:
    'Wi-Fi lento no restaurante afasta clientes e prejudica operações. Descobre as causas mais comuns, quanto custa realmente e como resolver de vez.',
  alternates: {
    canonical: 'https://zarix.site/blog/wifi-lento-restaurante-como-resolver',
    languages: {
      'pt-PT': 'https://zarix.site/blog/wifi-lento-restaurante-como-resolver',
      'x-default': 'https://zarix.site/blog/wifi-lento-restaurante-como-resolver',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://zarix.site/blog/wifi-lento-restaurante-como-resolver',
    title: 'Wi-Fi Lento no Restaurante: Causas, Custos e Soluções | Zarix Blog',
    description: 'Wi-Fi lento no restaurante afasta clientes e prejudica operações. Descobre as causas mais comuns, quanto custa realmente e como resolver de vez.',
    images: [{ url: 'https://zarix.site/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.jpg'] },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Wi-Fi Lento no Restaurante: Causas, Custos e Soluções',
  description: 'Wi-Fi lento no restaurante afasta clientes e prejudica operações. Descobre as causas mais comuns, quanto custa realmente e como resolver de vez.',
  author: { '@type': 'Organization', name: 'Zarix', url: 'https://zarix.site' },
  publisher: {
    '@type': 'Organization',
    name: 'Zarix',
    logo: { '@type': 'ImageObject', url: 'https://zarix.site/favicon-192.png' },
  },
  datePublished: '2026-06-14',
  dateModified: '2026-06-14',
  url: 'https://zarix.site/blog/wifi-lento-restaurante-como-resolver',
  mainEntityOfPage: 'https://zarix.site/blog/wifi-lento-restaurante-como-resolver',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://zarix.site/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zarix.site/blog' },
    { '@type': 'ListItem', position: 3, name: 'Wi-Fi Lento no Restaurante: Causas, Custos e Soluções', item: 'https://zarix.site/blog/wifi-lento-restaurante-como-resolver' },
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
              <span style={{ color: '#565E6E' }}>Wi-Fi Lento no Restaurante</span>
            </nav>

            <span className="text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#2E8FC9] block mb-4">
              Redes Wi-Fi
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
              Wi-Fi Lento no Restaurante: Causas, Custos e Soluções
            </h1>

            <div
              className="flex items-center gap-3 text-[0.88rem] pb-8"
              style={{ color: '#7A8295', borderBottom: '1px solid rgba(13,27,62,0.1)', marginBottom: 40 }}
            >
              <span>Zarix</span>
              <span>·</span>
              <time dateTime="2026-06-14">14 de Junho de 2026</time>
              <span>·</span>
              <span>6 min de leitura</span>
            </div>

            <div style={{ lineHeight: 1.72, fontSize: 'clamp(0.98rem,1.3vw,1.08rem)', color: '#3A4252' }}>
              <p style={{ marginBottom: '1.4em' }}>
                Um estudo da Cisco mostra que <strong style={{ color: '#0D1B3E' }}>70% dos clientes de restaurantes consideram o Wi-Fi grátis um factor importante na escolha do local.</strong> E quando o Wi-Fi é lento ou instável, não se queixam — simplesmente não voltam. No sector da restauração, onde as margens são apertadas, isto tem um custo real.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                O custo real do Wi-Fi lento
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                O problema do Wi-Fi vai além da experiência do cliente. Numa cozinha moderna, o Wi-Fi suporta sistemas de gestão de encomendas, impressoras de cozinha, sistemas de pagamento, câmaras de segurança e por vezes o próprio sistema de ponto de venda. Quando a rede falha, a operação para.
              </p>

              <p style={{ marginBottom: '0.8em' }}>O impacto directo inclui:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Pagamentos por MB-Way e cartão que falham ou demoram',
                  'Encomendas de delivery que não chegam à cozinha a tempo',
                  'Sistema de reservas online que não sincroniza',
                  'Funcionários que perdem tempo a resolver problemas de rede',
                  'Clientes que deixam avaliações negativas sobre o Wi-Fi',
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
                As causas mais comuns — e as mais ignoradas
              </h2>

              <p style={{ marginBottom: '0.8em' }}>Na maioria dos restaurantes que analisamos, o problema não é a velocidade do plano de internet contratado. É a infraestrutura interna:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Router doméstico a tentar cobrir um espaço comercial (para o qual não foi desenhado)',
                  'Um único ponto de acesso para toda a área — sala, cozinha, esplanada',
                  'Clientes e sistemas internos na mesma rede, a competir por largura de banda',
                  'Equipamento antigo que não suporta os standards Wi-Fi actuais (Wi-Fi 5 ou 6)',
                  'Interferência de redes vizinhas no mesmo canal de rádio',
                  'Router posicionado no sítio errado — escondido num armário ou atrás de paredes de betão',
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
                A solução certa para cada espaço
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Não existe uma solução única. Depende da área do espaço, do número de utilizadores simultâneos e do tipo de utilização.
              </p>

              <p style={{ marginBottom: '0.8em' }}>Para a maioria dos restaurantes em Aveiro, a solução ideal passa por:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Access points empresariais (Ubiquiti, TP-Link Omada) em vez de routers domésticos — são desenhados para múltiplos utilizadores simultâneos',
                  'Vários pontos de acesso estrategicamente posicionados para cobertura total sem zonas mortas',
                  'Separação de redes: uma rede para clientes, outra para sistemas internos',
                  'Controlo de largura de banda para clientes, garantindo que a rede operacional nunca fica comprometida',
                  'Switch gerido para ligações por cabo onde a fiabilidade é crítica (caixa, impressoras de cozinha)',
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
                Quanto custa resolver?
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Para um restaurante de tamanho médio em Aveiro, uma infraestrutura Wi-Fi profissional com dois ou três access points, separação de redes e instalação completa está tipicamente entre os 400€ e os 900€. Um investimento que se paga rapidamente quando comparado com o custo de sistemas que falham, clientes insatisfeitos e tempo da equipa desperdiçado a reiniciar routers.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                Muitos proprietários adiam esta decisão porque &ldquo;o Wi-Fi funciona&rdquo;. O problema é que funciona mal — e ninguém te avisa quando se vai embora por causa disso.
              </p>

              <p>
                Se queres perceber exactamente o que está a causar os problemas de rede no teu restaurante, fazemos uma análise no local sem qualquer custo.
              </p>
            </div>

            <div
              className="mt-12 p-8"
              style={{ background: '#0D1B3E' }}
            >
              <p className="font-heading font-extrabold text-[#F4F1EA] text-[1.15rem] mb-2">
                Wi-Fi lento a prejudicar o teu restaurante?
              </p>
              <p className="text-[#9AA4B8] text-[0.95rem] leading-relaxed mb-5">
                A Zarix instala redes Wi-Fi profissionais para restaurantes em Aveiro. Análise no local gratuita.
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

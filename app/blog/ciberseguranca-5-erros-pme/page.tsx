import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: '5 Erros de Cibersegurança que as PMEs Cometem (e Como Evitar) | Zarix Blog',
  description:
    'Os 5 erros de cibersegurança mais comuns nas PMEs portuguesas e como corrigi-los antes que causem danos reais ao teu negócio.',
  alternates: {
    canonical: 'https://zarix.site/blog/ciberseguranca-5-erros-pme',
    languages: {
      'pt-PT': 'https://zarix.site/blog/ciberseguranca-5-erros-pme',
      'x-default': 'https://zarix.site/blog/ciberseguranca-5-erros-pme',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://zarix.site/blog/ciberseguranca-5-erros-pme',
    title: '5 Erros de Cibersegurança que as PMEs Cometem (e Como Evitar) | Zarix Blog',
    description: 'Os 5 erros de cibersegurança mais comuns nas PMEs portuguesas e como corrigi-los antes que causem danos reais ao teu negócio.',
    images: [{ url: 'https://zarix.site/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.jpg'] },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '5 Erros de Cibersegurança que as PMEs Cometem (e Como Evitar)',
  description: 'Os 5 erros de cibersegurança mais comuns nas PMEs portuguesas e como corrigi-los antes que causem danos reais ao teu negócio.',
  author: { '@type': 'Organization', name: 'Zarix', url: 'https://zarix.site' },
  publisher: {
    '@type': 'Organization',
    name: 'Zarix',
    logo: { '@type': 'ImageObject', url: 'https://zarix.site/favicon-192.png' },
  },
  datePublished: '2026-06-05',
  dateModified: '2026-06-05',
  url: 'https://zarix.site/blog/ciberseguranca-5-erros-pme',
  mainEntityOfPage: 'https://zarix.site/blog/ciberseguranca-5-erros-pme',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://zarix.site/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zarix.site/blog' },
    { '@type': 'ListItem', position: 3, name: '5 Erros de Cibersegurança que as PMEs Cometem', item: 'https://zarix.site/blog/ciberseguranca-5-erros-pme' },
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
              <span style={{ color: '#565E6E' }}>5 Erros de Cibersegurança</span>
            </nav>

            <span className="text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#2E8FC9] block mb-4">
              Cibersegurança
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
              5 Erros de Cibersegurança que as PMEs Cometem (e Como Evitar)
            </h1>

            <div
              className="flex items-center gap-3 text-[0.88rem] pb-8"
              style={{ color: '#7A8295', borderBottom: '1px solid rgba(13,27,62,0.1)', marginBottom: 40 }}
            >
              <span>Zarix</span>
              <span>·</span>
              <time dateTime="2026-06-05">5 de Junho de 2026</time>
              <span>·</span>
              <span>6 min de leitura</span>
            </div>

            <div style={{ lineHeight: 1.72, fontSize: 'clamp(0.98rem,1.3vw,1.08rem)', color: '#3A4252' }}>
              <p style={{ marginBottom: '1.4em' }}>
                Em Portugal, <strong style={{ color: '#0D1B3E' }}>60% dos ciberataques têm como alvo pequenas e médias empresas.</strong> A maioria não acontece porque os atacantes são sofisticados — acontece porque as defesas básicas não estão no lugar. Aqui estão os cinco erros mais comuns, e o que podes fazer já hoje para os corrigir.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Erro 1: Passwords fracas e reutilizadas
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                &ldquo;zarix2024&rdquo; não é uma password. Nem &ldquo;admin123&rdquo;, nem o nome do restaurante seguido do ano. São as primeiras combinações que qualquer ferramenta de ataque testa automaticamente — em milissegundos.
              </p>

              <p style={{ marginBottom: '0.8em' }}>O que fazer:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Usar um gestor de passwords (Bitwarden, 1Password) para toda a equipa',
                  'Activar autenticação em dois factores (2FA) em todas as contas críticas',
                  'Nunca reutilizar a mesma password em mais de um serviço',
                  'Mudar passwords imediatamente após a saída de qualquer funcionário',
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
                Erro 2: Software desactualizado
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Cada actualização de software inclui correcções de segurança. Quando adiamos uma actualização por &ldquo;não ter tempo&rdquo;, estamos a deixar uma janela aberta que os atacantes conhecem tão bem como nós.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                O ransomware WannaCry — que paralisou hospitais e empresas em todo o mundo — explorava uma vulnerabilidade para a qual a Microsoft tinha lançado um patch dois meses antes. As empresas afectadas simplesmente não tinham actualizado.
              </p>

              <p style={{ marginBottom: '0.8em' }}>O que fazer:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Activar actualizações automáticas no Windows, macOS e aplicações críticas',
                  'Definir uma janela semanal para rever e aplicar actualizações pendentes',
                  'Incluir routers, impressoras e outros dispositivos de rede no processo',
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
                Erro 3: Sem backups — ou backups que nunca foram testados
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Muitas empresas têm backups. O problema é que nunca testaram se esses backups funcionam de facto. Descobrem que não funcionam exactamente quando mais precisam — depois de um ataque de ransomware ou falha de hardware.
              </p>

              <p style={{ marginBottom: '0.8em' }}>A regra 3-2-1:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  '3 cópias dos dados',
                  '2 suportes diferentes (ex: disco externo + cloud)',
                  '1 cópia offsite (fora das instalações físicas)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ marginBottom: '0.55em' }}>
                    <span className="shrink-0 mt-[0.45em]" style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E8FC9', display: 'block' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p style={{ marginBottom: '1.4em' }}>
                E testa o restore pelo menos uma vez por trimestre. Um backup que nunca foi testado é apenas esperança.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Erro 4: Wi-Fi sem segmentação de rede
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Em restaurantes e escritórios, é comum ter a mesma rede Wi-Fi para funcionários, clientes e sistemas internos (caixas, TPAs, computadores de gestão). Isto significa que qualquer pessoa ligada ao Wi-Fi de clientes pode potencialmente aceder aos sistemas internos.
              </p>

              <p style={{ marginBottom: '0.8em' }}>O que fazer:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Criar uma rede separada (VLAN ou SSID diferente) para clientes',
                  'Garantir que os sistemas de gestão e pagamento estão numa rede isolada',
                  'Proteger o painel de administração do router com password forte',
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
                Erro 5: Nenhuma formação da equipa em phishing
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                O elo mais fraco em qualquer sistema de segurança é humano. Um e-mail de phishing bem construído — que parece vir do banco, da AT ou de um fornecedor — pode enganar qualquer pessoa que não saiba o que procurar.
              </p>

              <p style={{ marginBottom: '0.8em' }}>Sinais de phishing que toda a equipa deve conhecer:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Endereço de e-mail do remetente diferente do domínio oficial',
                  'Urgência artificial ("a sua conta será encerrada em 24h")',
                  'Links que não correspondem ao texto visível',
                  'Pedidos de passwords ou dados bancários por e-mail',
                  'Anexos inesperados de remetentes conhecidos',
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
                A conclusão prática
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Estes cinco erros não exigem orçamentos grandes para serem corrigidos. Exigem atenção e um processo. Uma auditoria de segurança básica pode identificar os pontos críticos da tua empresa em poucas horas — e evitar prejuízos que podem chegar a dezenas de milhares de euros.
              </p>

              <p>
                Se queres perceber onde está a tua empresa neste momento, fala connosco. A análise inicial é gratuita.
              </p>
            </div>

            <div
              className="mt-12 p-8"
              style={{ background: '#0D1B3E' }}
            >
              <p className="font-heading font-extrabold text-[#F4F1EA] text-[1.15rem] mb-2">
                Preocupado com a segurança da tua empresa?
              </p>
              <p className="text-[#9AA4B8] text-[0.95rem] leading-relaxed mb-5">
                A Zarix faz auditorias de cibersegurança para PMEs em Aveiro. Identificamos vulnerabilidades antes que outros o façam.
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

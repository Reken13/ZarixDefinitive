import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Backup de Dados: O Que Nenhum Empresário Quer Descobrir Tarde Demais | Zarix Blog',
  description:
    'O que acontece quando uma empresa perde os seus dados — e como evitar que isso te aconteça. Guia prático de backup para PMEs em Aveiro.',
  alternates: {
    canonical: 'https://zarix.site/blog/backup-dados-empresas-guia',
    languages: {
      'pt-PT': 'https://zarix.site/blog/backup-dados-empresas-guia',
      'x-default': 'https://zarix.site/blog/backup-dados-empresas-guia',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://zarix.site/blog/backup-dados-empresas-guia',
    title: 'Backup de Dados: O Que Nenhum Empresário Quer Descobrir Tarde Demais | Zarix Blog',
    description: 'O que acontece quando uma empresa perde os seus dados — e como evitar que isso te aconteça. Guia prático de backup para PMEs em Aveiro.',
    images: [{ url: 'https://zarix.site/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.jpg'] },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Backup de Dados: O Que Nenhum Empresário Quer Descobrir Tarde Demais',
  description: 'O que acontece quando uma empresa perde os seus dados — e como evitar que isso te aconteça. Guia prático de backup para PMEs em Aveiro.',
  author: { '@type': 'Organization', name: 'Zarix', url: 'https://zarix.site' },
  publisher: {
    '@type': 'Organization',
    name: 'Zarix',
    logo: { '@type': 'ImageObject', url: 'https://zarix.site/favicon-192.png' },
  },
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  url: 'https://zarix.site/blog/backup-dados-empresas-guia',
  mainEntityOfPage: 'https://zarix.site/blog/backup-dados-empresas-guia',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://zarix.site/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zarix.site/blog' },
    { '@type': 'ListItem', position: 3, name: 'Backup de Dados: Guia para Empresas', item: 'https://zarix.site/blog/backup-dados-empresas-guia' },
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
              <span style={{ color: '#565E6E' }}>Backup de Dados para Empresas</span>
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
              Backup de Dados: O Que Nenhum Empresário Quer Descobrir Tarde Demais
            </h1>

            <div
              className="flex items-center gap-3 text-[0.88rem] pb-8"
              style={{ color: '#7A8295', borderBottom: '1px solid rgba(13,27,62,0.1)', marginBottom: 40 }}
            >
              <span>Zarix</span>
              <span>·</span>
              <time dateTime="2026-06-17">17 de Junho de 2026</time>
              <span>·</span>
              <span>6 min de leitura</span>
            </div>

            <div style={{ lineHeight: 1.72, fontSize: 'clamp(0.98rem,1.3vw,1.08rem)', color: '#3A4252' }}>
              <p style={{ marginBottom: '1.4em' }}>
                Era segunda-feira de manhã. O dono de uma pequena empresa de contabilidade em Aveiro chegou ao escritório, ligou o computador — e não havia nada. O disco tinha falhado durante o fim-de-semana. Cinco anos de ficheiros de clientes, facturas, declarações fiscais. Tudo.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                Tinha backups. Num disco externo. Que estava ligado ao mesmo computador. E que falhou ao mesmo tempo.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                <strong style={{ color: '#0D1B3E' }}>93% das empresas que perdem dados durante mais de 10 dias fecham dentro de um ano.</strong> Este número não é para assustar — é para contextualizar o que está em jogo quando ignoramos este tema.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Os cenários que ninguém antecipa
              </h2>

              <p style={{ marginBottom: '0.8em' }}>A perda de dados não acontece apenas com ataques informáticos. Os cenários mais comuns que encontramos em empresas locais:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Falha de hardware — o disco simplesmente morre sem aviso',
                  'Erro humano — ficheiro eliminado por engano, formatação acidental',
                  'Roubo do computador portátil ou do disco externo',
                  'Incêndio, inundação ou outro desastre físico',
                  'Ransomware — malware que encripta todos os ficheiros e pede resgate',
                  'Falha de energia que corrompe ficheiros durante uma gravação',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ marginBottom: '0.55em' }}>
                    <span className="shrink-0 mt-[0.45em]" style={{ width: 7, height: 7, borderRadius: '50%', background: '#9AA4B8', display: 'block' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p style={{ marginBottom: '1.4em' }}>
                Cada um destes cenários é prevenível com uma estratégia de backup adequada. O problema é que a maioria das PMEs só descobre que não tinha uma estratégia adequada depois de um destes eventos.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                A regra 3-2-1 (e por que funciona)
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                A regra 3-2-1 é o padrão da indústria para backup de dados e é simples de memorizar:
              </p>

              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  '3 cópias dos dados (o original + 2 backups)',
                  '2 tipos de suporte diferentes (ex: disco local + cloud)',
                  '1 cópia offsite — fisicamente separada do local de trabalho',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ marginBottom: '0.55em' }}>
                    <span className="shrink-0 mt-[0.45em]" style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E8FC9', display: 'block' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p style={{ marginBottom: '1.4em' }}>
                A parte mais importante é a cópia offsite. Se o backup está no mesmo local físico que o original, um incêndio ou inundação elimina os dois. A cloud resolve isto de forma elegante — os teus dados estão noutro datacenter, independentemente do que aconteça nas tuas instalações.
              </p>

              <h2
                className="font-heading"
                style={{ fontWeight: 800, fontSize: 'clamp(1.3rem,2.2vw,1.6rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#0D1B3E', margin: '2.4em 0 0.8em' }}
              >
                Backup automático vs. backup manual
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                O backup manual falha. Não porque as pessoas sejam negligentes — mas porque o dia-a-dia de uma empresa é imprevisível, e &ldquo;fazer o backup desta semana&rdquo; é exactamente o tipo de tarefa que se adia quando há uma urgência.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                Um sistema de backup automático corre sem intervenção humana — todos os dias, a uma hora definida, os dados são copiados para os locais configurados. Tu não tens de te lembrar. Acontece.
              </p>

              <p style={{ marginBottom: '0.8em' }}>Opções práticas para PMEs:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Windows Backup ou Time Machine (Mac) para backup local automático',
                  'OneDrive, Google Drive ou iCloud com sincronização contínua para ficheiros activos',
                  'Soluções dedicadas como Acronis ou Veeam para backups completos de sistema',
                  'NAS (Network Attached Storage) em rede local com replicação para cloud',
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
                O passo que quase ninguém dá: testar o restore
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Ter backups não é suficiente. Tens de saber que funcionam antes de precisares deles.
              </p>

              <p style={{ marginBottom: '1.4em' }}>
                Um backup corrompido é tão inútil como não ter backup nenhum. A diferença é que com um backup corrompido descobres o problema exactamente quando mais precisas de resolver outra coisa — depois de uma falha.
              </p>

              <p style={{ marginBottom: '0.8em' }}>O que testar regularmente:</p>
              <ul className="list-none p-0 m-0" style={{ marginBottom: '1.4em' }}>
                {[
                  'Recuperar um ficheiro específico de um backup da semana passada',
                  'Verificar que o backup mais recente foi concluído com sucesso',
                  'Simular um cenário de recuperação completa pelo menos uma vez por ano',
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
                O que fazer agora
              </h2>

              <p style={{ marginBottom: '1.4em' }}>
                Não esperes por um incidente para perceber se estás protegido. A pergunta que tens de te fazer hoje é: <strong style={{ color: '#0D1B3E' }}>se o teu computador principal deixasse de funcionar agora mesmo, quanto tempo levaria a recuperar tudo? E conseguirias recuperar tudo?</strong>
              </p>

              <p>
                Se a resposta te preocupa, fala connosco. Avaliamos a tua situação actual e implementamos uma solução de backup adequada ao teu negócio — sem complexidade desnecessária.
              </p>
            </div>

            <div
              className="mt-12 p-8"
              style={{ background: '#0D1B3E' }}
            >
              <p className="font-heading font-extrabold text-[#F4F1EA] text-[1.15rem] mb-2">
                Os teus dados estão protegidos?
              </p>
              <p className="text-[#9AA4B8] text-[0.95rem] leading-relaxed mb-5">
                A Zarix implementa soluções de backup para PMEs em Aveiro. Avaliação gratuita e sem compromisso.
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

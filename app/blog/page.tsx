import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Blog Zarix — Dicas de IT, Websites e Tecnologia para PMEs em Aveiro',
  description:
    'Artigos práticos sobre websites, suporte IT, cibersegurança e chatbots para restaurantes e PMEs em Aveiro. Publicados pela equipa Zarix.',
  alternates: {
    canonical: 'https://zarix.site/blog',
    languages: {
      'pt-PT': 'https://zarix.site/blog',
      'x-default': 'https://zarix.site/blog',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://zarix.site/blog',
    title: 'Blog Zarix — Dicas de IT e Tecnologia para PMEs',
    description: 'Artigos práticos sobre websites, suporte IT, cibersegurança e chatbots para restaurantes e PMEs em Aveiro.',
    images: [{ url: 'https://zarix.site/og-image.jpg' }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.jpg'] },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Zarix',
  url: 'https://zarix.site/blog',
  description: 'Dicas de IT, websites e tecnologia para PMEs em Aveiro',
  publisher: {
    '@type': 'Organization',
    name: 'Zarix',
    url: 'https://zarix.site',
    logo: { '@type': 'ImageObject', url: 'https://zarix.site/favicon-192.png' },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://zarix.site/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zarix.site/blog' },
  ],
}

const posts = [
  {
    slug: 'blog-website-vs-instagram-restaurante',
    title: 'Website ou Instagram: o que faz mais sentido para o teu restaurante?',
    description: 'Website vs Instagram restaurante: o que escolher? Descobre o que cada plataforma faz pelo teu negócio e por que a maioria dos restaurantes precisa das duas.',
    date: '28 de Maio de 2026',
    category: 'Websites',
    readTime: '5 min',
  },
]

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main className="bg-navy">
        {/* Header */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 64 }}>
          <div
            className="max-w-[1200px] mx-auto"
            style={{ padding: 'clamp(48px,6vh,80px) clamp(24px,4vw,56px) clamp(40px,5vh,64px)' }}
          >
            <div className="text-[0.74rem] font-bold tracking-[0.18em] uppercase text-cyan mb-[18px]">
              Blog
            </div>
            <h1
              className="font-heading text-[#F4F1EA] m-0 max-w-[22ch]"
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.9rem,3.8vw,3.1rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
              }}
            >
              Dicas de IT e tecnologia para a tua PME.
            </h1>
            <p
              className="text-[#9AA4B8] max-w-[38rem]"
              style={{ fontSize: 'clamp(1rem,1.4vw,1.16rem)', lineHeight: 1.55, marginTop: 20 }}
            >
              Artigos práticos sobre websites, suporte IT, cibersegurança e automação. Escritos para donos de negócio, não para técnicos.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section style={{ paddingBottom: 'clamp(70px,9vh,118px)' }}>
          <div
            className="max-w-[1200px] mx-auto"
            style={{ padding: '0 clamp(24px,4vw,56px)' }}
          >
            <div className="flex flex-col gap-5">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="no-underline group flex flex-col md:flex-row hover:border-cyan transition-colors"
                  style={{
                    background: '#13244E',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderTop: '1px solid rgba(255,255,255,0.14)',
                  }}
                >
                  {/* Text column */}
                  <div className="flex flex-col justify-center flex-1 p-8">
                    <span className="text-[0.82rem] font-bold uppercase tracking-[0.08em] text-cyan mb-3">
                      {post.category}
                    </span>
                    <h2
                      className="font-heading text-[#F4F1EA] m-0 mb-3"
                      style={{ fontWeight: 800, fontSize: 'clamp(1.2rem,2vw,1.5rem)', lineHeight: 1.15, letterSpacing: '-0.01em' }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-[0.96rem] leading-[1.55] text-[#9AA4B8] mb-6">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[0.82rem] text-[#7A8295]">{post.date} · {post.readTime} de leitura</span>
                      <span className="text-cyan text-[0.9rem] font-semibold inline-flex items-center gap-1.5">
                        Ler artigo <span className="font-heading">→</span>
                      </span>
                    </div>
                  </div>

                  {/* Visual panel */}
                  <div
                    className="hidden md:flex items-center justify-center shrink-0"
                    style={{
                      width: 200,
                      background: '#0A1531',
                      borderLeft: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/zarix-z.png" alt="" className="opacity-20" style={{ width: 56, height: 56 }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

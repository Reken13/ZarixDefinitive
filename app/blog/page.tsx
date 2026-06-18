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
      <main>
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-6">Blog</p>
          <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6">
            Dicas de IT e Tecnologia para a tua PME
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            Artigos práticos sobre websites, suporte IT, cibersegurança e automação. Escritos para donos de negócio, não para técnicos.
          </p>
        </section>

        <section className="pb-24 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group border border-gray-100 p-8 hover:border-navy transition-colors block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan">
                    {post.category}
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-400 text-xs">{post.readTime} de leitura</span>
                </div>
                <h2 className="text-xl font-black text-navy leading-tight mb-3 group-hover:text-[#1a2f6b] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <span className="text-navy text-sm font-semibold group-hover:underline">
                    Ler artigo
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

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
    images: [{ url: 'https://zarix.site/og-image.png' }],
    locale: 'pt_PT',
  },
  twitter: { card: 'summary_large_image', images: ['https://zarix.site/og-image.png'] },
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
        <article className="pt-32 pb-16 px-6 md:px-12 max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10">
            <Link href="/" className="hover:text-navy transition-colors">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-navy transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Website ou Instagram</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">Websites</p>
          <h1 className="text-3xl md:text-4xl font-black text-navy leading-tight mb-6">
            Website ou Instagram: o que faz mais sentido para o teu restaurante?
          </h1>

          <div className="flex items-center gap-4 text-gray-400 text-sm mb-12 pb-8 border-b border-gray-100">
            <span>Zarix</span>
            <span>·</span>
            <time dateTime="2026-05-28">28 de Maio de 2026</time>
            <span>·</span>
            <span>5 min de leitura</span>
          </div>

          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6 text-base md:text-lg">
            <p>
              É uma pergunta que ouvimos frequentemente de donos de restaurante em Aveiro:
              <strong> &ldquo;Já tenho Instagram. Preciso mesmo de um website?&rdquo;</strong>
            </p>

            <p>
              A resposta curta é: sim. Mas não é porque o Instagram seja mau. É porque fazem coisas diferentes — e o seu negócio precisa das duas.
            </p>

            <h2 className="text-2xl font-black text-navy mt-10 mb-4">O que o Instagram faz bem</h2>

            <p>
              O Instagram é uma ferramenta de descoberta. Quando um cliente já sabe que quer comer fora e está a explorar opções, pode encontrar o seu restaurante através de uma publicação bonita, uma história partilhada por um amigo ou um hashtag local.
            </p>

            <p>É excelente para:</p>
            <ul className="list-none space-y-2 pl-0">
              {['Mostrar o ambiente e os pratos de forma visual', 'Criar uma comunidade de clientes habituais', 'Partilhar promoções e eventos especiais', 'Receber mensagens directas de clientes'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-black text-navy mt-10 mb-4">O que o Instagram não consegue fazer</h2>

            <p>
              O Instagram não aparece no Google. Quando alguém escreve <strong>&ldquo;restaurante em Aveiro&rdquo;</strong> ou <strong>&ldquo;onde comer peixe em Aveiro&rdquo;</strong>, os resultados que aparecem são websites — não perfis do Instagram.
            </p>

            <p>
              E essa é a diferença fundamental. O Instagram serve para manter clientes que já o conhecem. Um website serve para atrair clientes que ainda não o conhecem mas estão a procurar exactamente o que oferece.
            </p>

            <p>O Instagram também não consegue:</p>
            <ul className="list-none space-y-2 pl-0">
              {[
                'Mostrar o menu de forma organizada e pesquisável',
                'Aceitar reservas de forma estruturada',
                'Aparecer no Google Maps com informação detalhada',
                'Transmitir credibilidade a clientes que pesquisam pela primeira vez',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-black text-navy mt-10 mb-4">O que um website faz que o Instagram não faz</h2>

            <p>
              Um website profissional posiciona o seu restaurante nos resultados de pesquisa do Google. Quando alguém em Aveiro pesquisa pelo tipo de cozinha que serve, o seu restaurante aparece. Isso é visibilidade que o Instagram simplesmente não oferece.
            </p>

            <p>Além disso, um website:</p>
            <ul className="list-none space-y-2 pl-0">
              {[
                'Transmite profissionalismo e credibilidade imediata',
                'Apresenta o menu de forma clara, com preços e descrições',
                'Permite reservas online ou por WhatsApp directamente',
                'Integra com o Google Maps e Google Business',
                'Funciona 24 horas sem que precise de publicar conteúdo',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-black text-navy mt-10 mb-4">A conclusão prática</h2>

            <p>
              Use o Instagram para manter e envolver os clientes que já o conhecem. Use o website para atrair os clientes que ainda não o conhecem mas estão a procurar exactamente o que oferece.
            </p>

            <p>
              A maioria dos restaurantes que crescem online usa as duas ferramentas. Não é uma escolha — é uma estratégia.
            </p>

            <p>
              Se ainda não tem um website, ou se o que tem está desactualizado, fale connosco. O diagnóstico inicial é gratuito e sem compromisso.
            </p>
          </div>

          <div className="mt-12 p-8 bg-[#F7F7F7] border-l-4 border-navy">
            <p className="font-bold text-navy mb-2">Precisa de um website para o seu restaurante?</p>
            <p className="text-gray-500 text-sm mb-4">
              A Zarix cria websites profissionais para restaurantes em Aveiro. Menu online, reservas e optimizado para Google.
            </p>
            <a
              href="https://wa.me/351967608772"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 hover:bg-[#1a2f6b] transition-colors text-sm"
            >
              Falar no WhatsApp
            </a>
          </div>
        </article>

        <Contact />
      </main>
      <Footer />
    </>
  )
}

import Nav from './Nav'
import Footer from './Footer'
import Contact from './Contact'

interface FAQ {
  q: string
  a: string
}

interface ServicePageProps {
  slug: string
  breadcrumbLabel: string
  h1: string
  subtitle: string
  intro: string
  features: string[]
  faqs: FAQ[]
  faqSchema: object
  breadcrumbSchema: object
}

export default function ServicePage({
  h1,
  subtitle,
  intro,
  features,
  faqs,
  faqSchema,
  breadcrumbSchema,
}: ServicePageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <section className="pt-32 pb-20 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-6">
            {subtitle}
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-6 max-w-3xl">
            {h1}
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {intro}
          </p>
          <a
            href="https://wa.me/351967608772"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-navy text-white font-semibold px-8 py-4 hover:bg-[#1a2f6b] transition-colors text-base"
          >
            Diagnóstico gratuito
          </a>
        </section>

        <section className="py-20 bg-[#F7F7F7]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-black text-navy mb-10">
              O que está incluído
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="bg-white p-6 border border-gray-100 flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-black text-navy mb-10">
              Perguntas frequentes
            </h2>
            <div className="flex flex-col gap-6 max-w-3xl">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-navy text-base mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}

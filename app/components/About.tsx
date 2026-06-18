import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-6">
              Quem somos
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
              A pessoa que vai resolver os seus problemas de tecnologia.
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Chamo-me Ricardo e sou o técnico IT de confiança de dezenas de negócios em Aveiro.
              Ajudo restaurantes, clínicas, barbearias e pequenas empresas a ter a tecnologia que precisam,
              sem complicações.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-10">
              Não falo em jargão técnico. Explico tudo de forma clara, apareço quando precisa e
              resolvo o problema. É simples assim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/351967608772"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-navy font-semibold px-8 py-4 hover:bg-gray-100 transition-colors text-base"
              >
                Falar com o Ricardo
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden">
              <Image
                src="/foto-ricardo.jpg"
                alt="Ricardo, fundador da Zarix"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

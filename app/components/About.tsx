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
            <div className="w-64 h-80 md:w-80 md:h-96 bg-[#1a2f6b] flex items-end justify-center overflow-hidden">
              <div className="w-full h-full flex flex-col items-center justify-end pb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#243a7a] mb-4 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-14 h-14 md:w-20 md:h-20 text-gray-400"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <p className="text-white font-bold text-lg">Ricardo</p>
                <p className="text-gray-400 text-sm">Fundador · Zarix</p>
                <p className="text-cyan text-xs mt-1 font-medium">Aveiro, Portugal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

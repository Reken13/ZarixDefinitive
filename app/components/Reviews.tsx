const reviews = [
  {
    name: 'José Arthur Emanuel Alves da Silva',
    text: 'Bom suporte ao conserto de PC',
    date: 'Há 3 semanas',
  },
  {
    name: 'Fábio Teixeira',
    text: 'Ótimo suporte',
    date: 'Há 2 semanas',
  },
  {
    name: 'Leandro Oliveira',
    text: 'Ótimo serviço!',
    date: 'Há 2 semanas',
  },
  {
    name: 'Valeria Mendoza',
    text: 'Tive uma excelente experiência com a Zarix.',
    date: 'Há 2 semanas',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">
          Avaliações Google
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight">
              O que dizem os nossos clientes
            </h2>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center">
              <p className="text-5xl font-black text-navy leading-none">5.0</p>
              <Stars />
              <a
                href="https://maps.app.goo.gl/nTW6ooXETwocbRws8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-xs mt-1 hover:text-cyan transition-colors underline underline-offset-2"
              >
                +10 avaliações
              </a>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 48 48" className="w-8 h-8">
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 15.1 19.1 12 24 12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2c-7.6 0-14.2 4.1-17.7 10.7z" />
                <path fill="#FBBC05" d="M24 46c5.8 0 10.7-1.9 14.3-5.2l-6.6-5.4C29.8 37 27 38 24 38c-6 0-11.1-3.9-13-9.3l-6.9 5.4C7.7 41.7 15.4 46 24 46z" />
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.7 2.3-2.1 4.3-3.9 5.8l6.6 5.4c-.4.3 6-4.4 6-13.7 0-1.3-.2-2.7-.5-4z" />
              </svg>
              <p className="text-[10px] text-gray-400 mt-0.5">Google</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="border border-gray-100 p-6">
              <Stars />
              <p className="text-gray-700 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-navy text-sm">{review.name}</p>
                <p className="text-gray-400 text-xs">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

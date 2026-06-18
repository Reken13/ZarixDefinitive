import Image from 'next/image'

const team = [
  {
    src: '/foto-ricardo.jpg',
    alt: 'Ricardo, co-founder da Zarix',
    name: 'Ricardo',
    role: 'Co-founder · Suporte IT',
    bio: 'O técnico IT de confiança de dezenas de negócios em Aveiro. Aparece quando precisa, resolve o problema e explica tudo de forma clara.',
    priority: true,
  },
  {
    src: '/foto-luis.jpg',
    alt: 'Luis Arias, co-founder da Zarix',
    name: 'Luis Arias',
    role: 'Co-founder · Desenvolvimento',
    bio: 'Especialista em programação e desenvolvimento web. Cria os websites e soluções digitais que fazem crescer o negócio dos nossos clientes.',
    priority: false,
  },
]

export default function About() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">
            Quem somos
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            As pessoas por trás da Zarix.
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Sem jargão técnico, sem intermediários. Falamos directamente com os nossos clientes e resolvemos os seus problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-3xl mx-auto">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-center text-center">
              <div className="relative w-52 h-64 md:w-60 md:h-72 overflow-hidden mb-6">
                <Image
                  src={person.src}
                  alt={person.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 208px, 240px"
                  priority={person.priority}
                />
              </div>
              <h3 className="text-xl font-black text-white mb-1">{person.name}</h3>
              <p className="text-cyan text-sm font-semibold mb-4">{person.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{person.bio}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href="https://wa.me/351967608772"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-navy font-semibold px-8 py-4 hover:bg-gray-100 transition-colors text-base"
          >
            Falar com a equipa
          </a>
        </div>
      </div>
    </section>
  )
}

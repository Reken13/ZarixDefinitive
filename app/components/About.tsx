const team = [
  {
    src: '/foto-ricardo.jpg',
    alt: 'Ricardo Betancourt, fundador da Zarix',
    name: 'Ricardo Betancourt',
    role: 'Fundador · Suporte IT',
    bio: 'O técnico IT de confiança de dezenas de negócios em Aveiro. Aparece quando precisa, resolve o problema e explica tudo de forma clara.',
  },
  {
    src: '/foto-luis.jpg',
    alt: 'Luis Arias, co-fundador da Zarix',
    name: 'Luis Arias',
    role: 'Co-fundador · Desenvolvimento',
    bio: 'Especialista em programação e desenvolvimento web. Cria os websites e soluções digitais que fazem crescer o negócio dos nossos clientes.',
  },
]

export default function About() {
  return (
    <section
      id="equipa"
      className="bg-navy"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{ padding: 'clamp(70px,9vh,118px) clamp(24px,4vw,56px)' }}
      >
        {/* Intro */}
        <div
          className="text-center max-w-[760px] mx-auto"
          style={{ marginBottom: 'clamp(48px,6vh,72px)' }}
        >
          <div className="text-[0.74rem] font-bold tracking-[0.18em] uppercase text-cyan mb-[18px]">
            Quem somos
          </div>
          <h2
            className="font-heading text-[#F4F1EA] m-0"
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.9rem,3.8vw,3.1rem)',
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              textWrap: 'balance' as React.CSSProperties['textWrap'],
            }}
          >
            As pessoas por trás da Zarix.
          </h2>
          <p
            className="text-[1.05rem] leading-[1.6] text-[#9AA4B8] max-w-[38rem] mx-auto"
            style={{ marginTop: 22 }}
          >
            Sem jargão técnico e sem intermediários. Quando nos liga, fala connosco, conhecemos o seu negócio pelo nome e resolvemos os seus problemas.
          </p>
        </div>

        {/* Team grid */}
        <div
          className="grid max-w-[880px] mx-auto"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 'clamp(36px,5vw,72px)',
          }}
        >
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.src}
                alt={person.alt}
                style={{
                  width: '100%',
                  height: 'clamp(360px,30vw,460px)',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              <h3
                className="font-heading text-[#F4F1EA] mt-6"
                style={{ fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
              >
                {person.name}
              </h3>
              <span className="text-[0.92rem] text-cyan font-semibold mt-1.5">
                {person.role}
              </span>
              <p
                className="text-[0.96rem] leading-[1.6] text-[#9AA4B8] max-w-[24rem]"
                style={{ marginTop: 16 }}
              >
                {person.bio}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center" style={{ marginTop: 'clamp(44px,6vh,68px)' }}>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2.5 bg-paper text-navy font-semibold text-base px-[30px] py-4 no-underline transition-colors hover:bg-cyan hover:text-white"
          >
            Falar com a equipa <span className="font-heading">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

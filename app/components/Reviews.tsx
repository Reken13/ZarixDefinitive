const reviews = [
  {
    text: 'Bom suporte ao conserto de PC',
    name: 'José Arthur Emanuel Alves da Silva',
    sub: 'Há 3 semanas',
  },
  {
    text: 'Tive uma excelente experiência com a Zarix. A equipa demonstrou profissionalismo, rapidez e um grande conhecimento técnico desde o primeiro contacto. O diagnóstico IT gratuito foi muito útil para identificar oportunidades de melhoria na nossa infraestrutura sem qualquer compromisso.',
    name: 'Valeria Mendoza',
    sub: 'Há 2 semanas',
  },
  {
    text: 'Tenho uma barbearia pequena e fizeram um sistema de reservas top, agradeço',
    name: 'Bernardo',
    sub: 'Há 2 semanas',
  },
]

export default function Reviews() {
  return (
    <section
      className="bg-navy"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{ padding: 'clamp(70px,9vh,118px) clamp(24px,4vw,56px)' }}
      >
        {/* Header */}
        <div
          className="flex items-center flex-wrap"
          style={{ gap: 'clamp(20px,3vw,40px)', marginBottom: 'clamp(40px,5vh,60px)' }}
        >
          <div className="flex items-center gap-3.5">
            <svg viewBox="0 0 48 48" width="42" height="42" className="block shrink-0" aria-label="Google">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            <div className="flex flex-col gap-0.5">
              <span className="font-heading font-bold text-[1.02rem] text-[#F4F1EA]">Avaliações Google</span>
              <span className="text-[#FBBC05] text-[0.95rem] tracking-[2px]" aria-label="5 estrelas">★★★★★</span>
            </div>
          </div>

          <span className="w-px h-10 block shrink-0" style={{ background: 'rgba(255,255,255,0.14)' }} />

          <div className="flex items-baseline gap-2.5">
            <span
              className="font-heading font-black text-[#F4F1EA] leading-none"
              style={{ fontSize: 'clamp(2.4rem,4vw,3.4rem)' }}
            >
              5.0
            </span>
            <span className="text-[0.9rem] text-[#9AA4B8]">de avaliação média</span>
          </div>

          <a
            href="https://maps.app.goo.gl/1HTBQUKQ56eqn3BG7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.82rem] text-[#7A8295] hover:text-cyan transition-colors underline underline-offset-2 ml-auto"
          >
            +10 avaliações
          </a>
        </div>

        {/* Cards */}
        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(20px,2.4vw,32px)' }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-[18px]"
              style={{
                background: '#13244E',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTopColor: 'rgba(255,255,255,0.14)',
                padding: 'clamp(26px,2.6vw,34px)',
              }}
            >
              <span className="text-cyan text-[0.92rem] tracking-[2px]" aria-label="5 estrelas">★★★★★</span>
              <p className="text-[1.02rem] leading-[1.6] text-[#E4E7EE] flex-1">{r.text}</p>
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-[#F4F1EA] text-[0.92rem]">{r.name}</span>
                <span className="text-[0.82rem] text-[#7A8295]">{r.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

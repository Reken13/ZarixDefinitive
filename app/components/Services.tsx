const services = [
  {
    label: 'Suporte IT',
    h3: 'Tudo a funcionar, todos os dias.',
    body: 'Computadores, impressoras e servidores sob controlo. Quando algo falha, resolvemos antes que pare o seu dia.',
    cta: 'Falar connosco',
    href: '/#contacto',
  },
  {
    label: 'Websites',
    h3: 'Sites que trazem clientes.',
    body: 'Páginas rápidas e claras, feitas para aparecer no Google e transformar visitas em pedidos e reservas.',
    cta: 'Ver exemplos',
    href: '/#trabalho',
  },
  {
    label: 'Cibersegurança',
    h3: 'Os seus dados em segurança.',
    body: 'Backups automáticos, proteção contra vírus e dados em conformidade com o RGPD. Dorme descansado, tratamos disso por si.',
    cta: 'Falar connosco',
    href: '/#contacto',
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-navy"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{ padding: 'clamp(70px,9vh,118px) clamp(24px,4vw,56px)' }}
      >
        <h2
          className="font-heading text-[#F4F1EA] m-0"
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.9rem,3.8vw,3.1rem)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            maxWidth: '16ch',
            marginBottom: 'clamp(46px,6vh,72px)',
          }}
        >
          Três formas de o manter a trabalhar.
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {services.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-3.5 bg-card hover:bg-[#1A2E5C] transition-colors"
              style={{ padding: 'clamp(30px,3vw,42px)', minHeight: 300 }}
            >
              <span className="font-heading font-extrabold text-[0.85rem] text-cyan tracking-[0.04em]">
                {s.label}
              </span>
              <h3
                className="font-heading text-[#F4F1EA] mt-2"
                style={{
                  fontWeight: 800,
                  fontSize: 'clamp(1.35rem,2.2vw,1.7rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.01em',
                }}
              >
                {s.h3}
              </h3>
              <p className="text-[0.96rem] leading-[1.55] text-[#9AA4B8] flex-1">{s.body}</p>
              <a
                href={s.href}
                className="text-[0.9rem] font-semibold text-[#F4F1EA] no-underline inline-flex items-center gap-2 hover:text-cyan transition-colors"
              >
                {s.cta} <span className="font-heading">→</span>
              </a>
            </div>
          ))}
        </div>

        <p className="text-[0.95rem] text-[#9AA4B8]" style={{ marginTop: 'clamp(30px,4vh,42px)' }}>
          Trabalhamos sobretudo com restaurantes e pequenas empresas de Aveiro.{' '}
          <a
            href="/#contacto"
            className="text-[#F4F1EA] font-semibold no-underline hover:text-cyan transition-colors"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.3)' }}
          >
            Precisa de outra coisa? Pergunte.
          </a>
        </p>
      </div>
    </section>
  )
}

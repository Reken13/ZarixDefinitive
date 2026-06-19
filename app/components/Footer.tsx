'use client'

export default function Footer() {
  function openPrivacy() {
    const event = new CustomEvent('open-privacy-modal')
    window.dispatchEvent(event)
  }

  return (
    <footer className="bg-navy" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div
        className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-6"
        style={{ padding: 'clamp(40px,5vh,56px) clamp(24px,4vw,56px)' }}
      >
        <a href="/" className="flex items-center gap-2.5 text-[#F4F1EA] no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/zarix-z.jpg" alt="Zarix" className="block rounded-full object-cover" style={{ width: 26, height: 26 }} />
          <span className="font-heading font-extrabold text-[1.2rem] text-[#F4F1EA]">
            Zari<span className="text-cyan">x</span>
          </span>
        </a>
        <div className="flex items-center gap-6 flex-wrap">
          <span className="text-[0.85rem] text-[#7A8295]">Aveiro, Portugal · zarix.site</span>
          <button
            onClick={openPrivacy}
            className="text-[#7A8295] hover:text-[#9AA4B8] text-[0.8rem] transition-colors underline bg-transparent border-0 cursor-pointer"
          >
            Privacidade
          </button>
        </div>
      </div>
    </footer>
  )
}

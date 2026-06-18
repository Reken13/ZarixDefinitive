'use client'

import { useState, useEffect } from 'react'

export default function PrivacyModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleOpen() {
      setOpen(true)
    }
    window.addEventListener('open-privacy-modal', handleOpen)
    return () => window.removeEventListener('open-privacy-modal', handleOpen)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white max-w-lg w-full max-h-[80vh] overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-black text-navy text-xl">Política de Privacidade</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-navy transition-colors"
            aria-label="Fechar"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        <div className="text-gray-600 text-sm leading-relaxed space-y-4">
          <div>
            <h3 className="font-semibold text-navy mb-1">1. Responsável pelo Tratamento</h3>
            <p>Zarix · info@zarix.site · Aveiro, Portugal</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-1">2. Dados Recolhidos</h3>
            <p>Nome, endereço de email, número de telefone e mensagem submetidos voluntariamente através do formulário de contacto.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-1">3. Finalidade do Tratamento</h3>
            <p>Os dados recolhidos destinam-se exclusivamente a responder ao pedido de contacto e a prestar os serviços solicitados.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-1">4. Base Legal</h3>
            <p>Consentimento explícito do titular dos dados, nos termos do Artigo 6.º, n.º 1, alínea a) do RGPD.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-1">5. Conservação dos Dados</h3>
            <p>Os dados serão conservados pelo período necessário para responder ao pedido e, no máximo, dois anos após o último contacto.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-1">6. Partilha de Dados</h3>
            <p>Os seus dados pessoais não são partilhados com terceiros, exceto quando tal seja estritamente necessário para a prestação do serviço solicitado.</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-1">7. Direitos do Titular</h3>
            <p>Tem o direito de aceder, retificar, apagar, exportar e opor-se ao tratamento dos seus dados pessoais. Para exercer os seus direitos, contacte-nos em info@zarix.site.</p>
          </div>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="mt-6 w-full bg-navy text-white font-semibold py-3 hover:bg-[#1a2f6b] transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

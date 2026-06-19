import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://zarix.site/blog/website-vs-instagram-restaurante',
  },
}

export default function Redirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/blog/website-vs-instagram-restaurante" />
      <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/blog/website-vs-instagram-restaurante')` }} />
      <a href="/blog/website-vs-instagram-restaurante">Redirecionar…</a>
    </>
  )
}

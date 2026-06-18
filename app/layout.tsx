import type { Metadata } from 'next'
import { Manrope, Barlow } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import WhatsAppFAB from './components/WhatsAppFAB'
import PrivacyModal from './components/PrivacyModal'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zarix.site'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://zarix.site/#business',
  name: 'Zarix',
  alternateName: 'Zarix — Suporte IT e Websites para Negócios',
  description:
    'Suporte IT e criação de websites para restaurantes e PMEs em Aveiro. Redes Wi-Fi, cibersegurança, chatbots com IA, manutenção informática e websites profissionais. Diagnóstico gratuito sem compromisso.',
  url: 'https://zarix.site/',
  logo: 'https://zarix.site/favicon-192.png',
  image: 'https://zarix.site/og-image.png',
  telephone: '+351967608772',
  email: 'info@zarix.site',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aveiro',
    addressRegion: 'Aveiro',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.6405,
    longitude: -8.6538,
  },
  areaServed: [
    { '@type': 'City', name: 'Aveiro' },
    { '@type': 'AdministrativeArea', name: 'Distrito de Aveiro' },
  ],
  priceRange: '€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '4',
    bestRating: '5',
    worstRating: '1',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/zarix_it/',
    'https://wa.me/351967608772',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${manrope.variable} ${barlow.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WL0GVH0WDH"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WL0GVH0WDH');
          `}
        </Script>
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r); t.async=1;
                t.src='https://www.clarity.ms/tag/'+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window,document,'clarity','script','x6dfcd3uz9');
            });
          `}
        </Script>
        {children}
        <WhatsAppFAB />
        <PrivacyModal />
      </body>
    </html>
  )
}

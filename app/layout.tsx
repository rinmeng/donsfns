import type { Metadata } from 'next';
import { Bebas_Neue, IBM_Plex_Mono, Lora, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import { Navbar } from '@/components/Navbar';
import { SiteFooter } from '@/components/SiteFooter';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { ToastProvider } from '@/contexts/ToastContext';

import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});
const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  style: ['normal', 'italic'],
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});
const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://donsfences.ca'),
  title: {
    default: "Don's Fences & Services | Fence Contractor Enderby BC",
    template: "%s | Don's Fences & Services",
  },
  description:
    'Professional fence installation in Enderby, BC. Serving the BC interior — Vernon, Armstrong, Lake Country, Kelowna, and Salmon Arm. Fencing since 2002.',
  keywords: [
    'fencing Enderby BC',
    'fence contractor BC interior',
    'fence installation Vernon BC',
    'fence installation Kelowna',
    'fence installation Salmon Arm',
    'fence installation Lake Country',
    'ranch fencing BC',
    'highway fencing BC',
    'custom gates Enderby',
    'wood milling Enderby',
    'cold storage rental BC interior',
    "Don's Fences",
    'fencing contractor BC',
  ],
  authors: [{ name: "Don's Fences & Services", url: 'https://donsfences.ca' }],
  creator: "Don's Fences & Services",
  publisher: "Don's Fences & Services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://donsfences.ca',
    siteName: "Don's Fences & Services",
    title: "Don's Fences & Services | Fence Contractor Enderby BC",
    description:
      'Professional fence installation in Enderby, BC. Since 2002 — highway, ranch, and residential fencing across the BC interior.',
    images: [
      {
        url: '/don_3.jpg',
        width: 1200,
        height: 630,
        alt: "Don's Fences & Services — fence installation in Enderby, BC",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Don's Fences & Services | Fence Contractor Enderby BC",
    description:
      'Professional fence installation in Enderby, BC. Since 2002 — highway, ranch, and residential fencing across the BC interior.',
    images: ['/don_3.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Don's Fences & Services",
  url: 'https://donsfences.ca',
  telephone: '+12503065064',
  email: 'doncookbc@yahoo.ca',
  description:
    'Professional fence installation and contractor services in Enderby, BC. Fencing since 2002 across the BC interior — Vernon, Armstrong, Lake Country, Kelowna, and Salmon Arm.',
  image: 'https://donsfences.ca/don_3.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Enderby',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.5497,
    longitude: -119.1392,
  },
  areaServed: [
    { '@type': 'City', name: 'Enderby' },
    { '@type': 'City', name: 'Vernon' },
    { '@type': 'City', name: 'Armstrong' },
    { '@type': 'City', name: 'Lake Country' },
    { '@type': 'City', name: 'Kelowna' },
    { '@type': 'City', name: 'Salmon Arm' },
    { '@type': 'AdministrativeArea', name: 'BC Interior' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fencing & Gates' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wood Milling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automotive' } },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Cold Storage Rental' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'BC Billboards' },
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${lora.variable} ${ibmPlexMono.variable}
          ${bebasNeue.variable} antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <ToastProvider>
            <Navbar />
            <main className='overflow-x-hidden'>{children}</main>
            <SiteFooter />
            <Toaster />
            <Analytics />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

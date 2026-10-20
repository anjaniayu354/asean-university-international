import type { Metadata } from 'next';
import { Fraunces, Karla } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--serif',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
});

const karla = Karla({
  subsets: ['latin'],
  variable: '--sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ASEAN University International (AUI) — Transformative Education, Unbelievable Impact',
  description:
    'Portal resmi ASEAN University International: program sarjana, magister, dan doktoral terakreditasi internasional dengan fleksibilitas kuliah online dari mana saja.',
  keywords: [
    'AUI University',
    'ASEAN University International',
    'study from anywhere',
    'online master degree',
    'phd programme',
    'kuliah internasional',
    'scholarship AUI',
  ],
  authors: [{ name: 'ASEAN University International' }],
  metadataBase: new URL('https://aui.university'),
  alternates: {
    canonical: 'https://aui.university/',
  },
  openGraph: {
    title: 'ASEAN University International (AUI) — Transformative Education',
    description:
      'Explore world-class accredited bachelor, master, and doctoral programmes at ASEAN University International. Study from anywhere with global impact.',
    url: 'https://aui.university/',
    siteName: 'ASEAN University International',
    images: [
      {
        url: '/img/Perayaan Wisuda di Bawah Menara Kota.png',
        width: 1200,
        height: 630,
        alt: 'ASEAN University International Commencement',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASEAN University International (AUI)',
    description: 'Transformative Education, Unbelievable Impact. Study from anywhere with global accreditation.',
    images: ['/img/Perayaan Wisuda di Bawah Menara Kota.png'],
  },
  icons: {
    icon: '/img/logo.png',
    apple: '/img/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollegeOrUniversity',
              name: 'ASEAN University International',
              alternateName: 'AUI',
              url: 'https://aui.university/',
              logo: 'https://aui.university/img/logo.png',
              slogan: 'Transformative Education, Unbelievable Impact',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'F-2-23, Jalan BG 3B/1 Bangi Gateway 3B, Seksyen 15',
                addressLocality: 'Bandar Baru Bangi',
                addressRegion: 'Selangor',
                postalCode: '43650',
                addressCountry: 'MY',
              },
              telephone: '+60-165-680-906',
              email: 'admin@aui.university',
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

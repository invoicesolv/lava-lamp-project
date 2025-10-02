import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tryck eget i Stockholm - T-shirt med eget tryck | Tryckeget',
  description: 'Beställ tryckta kläder i Stockholm! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Stockholm i Stockholmsregionen.',
  keywords: 'tryck eget stockholm, t-shirt med eget tryck stockholm, tryck på kläder stockholm, anpassade kläder stockholm, print on demand stockholm, stockholm, stockholmsregionen',
  authors: [{ name: "Tryckeget" }],
  publisher: "Tryckeget",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://tryckeget.se/stockholm",
  },
  openGraph: {
    title: 'Tryck eget i Stockholm - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Stockholm! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Stockholm i Stockholmsregionen.',
    type: 'website',
    locale: 'sv_SE',
    url: "https://tryckeget.se/stockholm",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tryck eget i Stockholm - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Stockholm! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Stockholm i Stockholmsregionen.',
  },
};

export default function StockholmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

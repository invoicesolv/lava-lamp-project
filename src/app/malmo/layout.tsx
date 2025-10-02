import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tryck eget i Malmö - T-shirt med eget tryck | Tryckeget',
  description: 'Beställ tryckta kläder i Malmö! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Malmö i Skåne.',
  keywords: 'tryck eget malmö, t-shirt med eget tryck malmö, tryck på kläder malmö, anpassade kläder malmö, print on demand malmö, malmö, skåne',
  openGraph: {
    title: 'Tryck eget i Malmö - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Malmö! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Malmö i Skåne.',
    type: 'website',
    locale: 'sv_SE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tryck eget i Malmö - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Malmö! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Malmö i Skåne.',
  },
};

export default function MalmoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

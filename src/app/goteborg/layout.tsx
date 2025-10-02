import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tryck eget i Göteborg - T-shirt med eget tryck | Tryckeget',
  description: 'Beställ tryckta kläder i Göteborg! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Göteborg i Göteborgsregionen.',
  keywords: 'tryck eget göteborg, t-shirt med eget tryck göteborg, tryck på kläder göteborg, anpassade kläder göteborg, print on demand göteborg, göteborg, göteborgsregionen',
  openGraph: {
    title: 'Tryck eget i Göteborg - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Göteborg! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Göteborg i Göteborgsregionen.',
    type: 'website',
    locale: 'sv_SE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tryck eget i Göteborg - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Göteborg! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Göteborg i Göteborgsregionen.',
  },
};

export default function GoteborgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

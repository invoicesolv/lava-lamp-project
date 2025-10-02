import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Produkter - Bulkbeställningar och stora volymer | Tryckeget",
  description: "Beställ tryckta kläder i stora volymer för företag, events och organisationer. T-shirt, hoodie, keps och accessoarer med eget tryck. Perfekt för bulkbeställningar.",
  keywords: "bulkbeställningar, stora volymer, företag, events, organisationer, t-shirt bulk, hoodie bulk, tryck eget bulk, print on demand bulk",
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
    canonical: "https://tryckeget.se/produkter",
  },
  openGraph: {
    title: "Produkter - Bulkbeställningar och stora volymer | Tryckeget",
    description: "Beställ tryckta kläder i stora volymer för företag, events och organisationer. T-shirt, hoodie, keps och accessoarer med eget tryck.",
    type: "website",
    locale: "sv_SE",
    url: "https://tryckeget.se/produkter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Produkter - Bulkbeställningar och stora volymer | Tryckeget",
    description: "Beställ tryckta kläder i stora volymer för företag, events och organisationer. T-shirt, hoodie, keps och accessoarer med eget tryck.",
  },
};

export default function ProdukterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

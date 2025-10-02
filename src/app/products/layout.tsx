import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Produkter - Tryck eget kläder och accessoarer | Tryckeget",
  description: "Upptäck vårt breda sortiment av kläder, accessoarer och produkter som du kan anpassa med dina egna designer. T-shirt, hoodie, keps, strumpor och mycket mer.",
  keywords: "produkter, kläder, accessoarer, t-shirt, hoodie, keps, strumpor, tryck eget, anpassade kläder, print on demand",
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
    canonical: "https://tryckeget.se/products",
  },
  openGraph: {
    title: "Produkter - Tryck eget kläder och accessoarer | Tryckeget",
    description: "Upptäck vårt breda sortiment av kläder, accessoarer och produkter som du kan anpassa med dina egna designer.",
    type: "website",
    locale: "sv_SE",
    url: "https://tryckeget.se/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Produkter - Tryck eget kläder och accessoarer | Tryckeget",
    description: "Upptäck vårt breda sortiment av kläder, accessoarer och produkter som du kan anpassa med dina egna designer.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

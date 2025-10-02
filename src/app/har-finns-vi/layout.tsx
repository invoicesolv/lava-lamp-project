import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Här finns vi - Leverans till alla svenska städer | Tryckeget",
  description: "Vi levererar tryckta kläder till alla svenska städer och orter. Stockholm, Göteborg, Malmö, Uppsala, Linköping och många fler. Hitta din stad och beställ idag!",
  keywords: "leverans, städer, orter, stockholm, göteborg, malmö, uppsala, linköping, tryck eget leverans, svenska städer",
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
    canonical: "https://tryckeget.se/har-finns-vi",
  },
  openGraph: {
    title: "Här finns vi - Leverans till alla svenska städer | Tryckeget",
    description: "Vi levererar tryckta kläder till alla svenska städer och orter. Stockholm, Göteborg, Malmö, Uppsala, Linköping och många fler.",
    type: "website",
    locale: "sv_SE",
    url: "https://tryckeget.se/har-finns-vi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Här finns vi - Leverans till alla svenska städer | Tryckeget",
    description: "Vi levererar tryckta kläder till alla svenska städer och orter. Stockholm, Göteborg, Malmö, Uppsala, Linköping och många fler.",
  },
};

export default function HarFinnsViLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

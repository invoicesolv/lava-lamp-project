import DemoOne from "@/components/demo";
import Sections from "@/components/sections";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryck eget - Tröja med eget tryck, T-shirt med eget tryck, Keps med eget tryck | Tryckeget",
  description: "Tryck egna kläder – snabbt, enkelt och professionellt. Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – direkt online. Tröja med eget tryck, keps med eget tryck, kalsonger med eget tryck.",
  keywords: "tryck eget, tröja med eget tryck, t shirt med eget tryck, keps med eget tryck, kalsonger med eget tryck, tryck på kläder, anpassade kläder, personliga kläder, print on demand, tryck på t-shirt, tryck på hoodie, tryck på keps, tryck på strumpor, tryck på accessoarer",
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
    canonical: "https://tryckeget.se/",
  },
  openGraph: {
    title: "Tryck eget - Tröja med eget tryck, T-shirt med eget tryck, Keps med eget tryck | Tryckeget",
    description: "Tryck egna kläder – snabbt, enkelt och professionellt. Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – direkt online.",
    type: "website",
    locale: "sv_SE",
    url: "https://tryckeget.se/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tryck eget - Tröja med eget tryck, T-shirt med eget tryck, Keps med eget tryck | Tryckeget",
    description: "Tryck egna kläder – snabbt, enkelt och professionellt. Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – direkt online.",
  },
};

export default function Home() {
  return (
    <>
      <DemoOne />
      <Sections />
      <Footer />
    </>
  );
}

import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Keps 5 Panel Snapback Rapper Keps Beechfield - B610 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Beechfield B610 5 Panel Snapback keps är tillverkad av högkvalitativ bomullstwill, vilket ger en robust men ändå bekväm känsla som är idealisk för både vardagsbruk och professionell användning. Denna keps är särskilt designad för att vara en perfekt bas för tryck och broderi, med en jämn yta som säkerställer att ditt märke eller design ser skarp och professionell ut. Den moderna 5-paneldesignen ger en stilren och trendig look som passar alla huvudformer, medan den justerbara snapback-stängningen garanterar en perfekt passform för alla användare. Kepsens material är noggrant utvalt för att säkerställa långvarig hållbarhet, vilket gör den till ett pålitligt val för både företag och individuella kunder. Denna keps kombinerar stil och funktionalitet, och är idealisk för dem som söker en högkvalitativ accessoar som kan anpassas efter deras specifika behov. Med snabb leverans och en professionell finish är Beechfield B610 5 Panel Snapback keps ett utmärkt val för alla dina profilkläder och kampanjer.",
  keywords: "keps 5 panel snapback rapper keps beechfield - b610, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Keps 5 Panel Snapback Rapper Keps Beechfield - B610 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ keps 5 panel snapback rapper keps beechfield - b610 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cap-5-panel-snapback-rapper-cap-beechfield-b610",
  name: "Keps 5 Panel Snapback Rapper Keps Beechfield - B610",
  description: "Högkvalitativ keps 5 panel snapback rapper keps beechfield - b610 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Beechfield B610 5 Panel Snapback keps är det perfekta valet för både tryck och broderi med sin mjuka struktur och moderna design.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/CB610_Classic-Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/CB610_Classic-Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/CB610_Classic-Red-glowne.jpg"
    ]
  },
  category: "Kepsar",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["keps 5 panel snapback rapper keps beechfield - b610", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Keps 5 Panel Snapback Rapper Keps Beechfield - B610 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ keps 5 panel snapback rapper keps beechfield - b610 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cap-5-panel-snapback-rapper-cap-beechfield/",
  specifications: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga",
    "Anpassningsbar tryckyta"
  ]
};

export default function BulkProductPage() {
  return (
    <>
      <ProductSchemaMarkup product={product} />
      <ProductDetail product={product} />
    </>
  );
}
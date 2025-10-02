import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barnens klassiska sweatshirt Stanley&Stella Mini Changer 2.0 - STSK181 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Mini Changer 2.0 - STSK181 är den perfekta tröjan för barn som kombinerar stil, komfort och hållbarhet. Tillverkad av högkvalitativ ekologisk bomull och återvunnen polyester, erbjuder denna sweatshirt en mjuk och skön känsla mot huden, vilket gör den idealisk för dagligt bruk. Dess robusta material gör den också optimal för tryck och broderi, vilket ger en personlig touch och gör den utmärkt för skoluniformer eller fritidsaktiviteter. Den klassiska designen är tidlös och passar alla tillfällen, samtidigt som den erbjuder en avslappnad passform som låter barnen röra sig fritt och leka utan begränsningar. Resår vid ärmslut och nederkant säkerställer att tröjan sitter på plats och ger extra värme under kyligare dagar. Med fokus på hållbarhet är Stanley&Stella Mini Changer 2.0 producerad med miljövänliga metoder, vilket inte bara skyddar vår planet utan också säkerställer att varje plagg är fritt från skadliga kemikalier. Den professionella finishen och det slitstarka materialet garanterar att denna sweatshirt behåller sin form och färg tvätt efter tvätt. Snabb leverans innebär att du kan få denna fantastiska tröja i dina händer på nolltid, redo att användas eller anpassas efter dina behov.",
  keywords: "barnens klassiska sweatshirt stanley&stella mini changer 2.0 - stsk181, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barnens klassiska sweatshirt Stanley&Stella Mini Changer 2.0 - STSK181 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barnens klassiska sweatshirt stanley&stella mini changer 2.0 - stsk181 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-classic-sweatshirt-stanleystella-mini-changer-20-stsk181",
  name: "Barnens klassiska sweatshirt Stanley&Stella Mini Changer 2.0 - STSK181",
  articleNumber: "BARNENS-KLASSISKA-SWEATSHIRT-STANLEYSTELLA-MINI-CHANGER-20---STSK181",
  description: "Högkvalitativ barnens klassiska sweatshirt stanley&stella mini changer 2.0 - stsk181 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barnens klassiska sweatshirt Stanley&Stella Mini Changer 2.0 är en hållbar och bekväm tröja, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Changer-2.0-_-Kids-premium-sweatshirt-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Changer-2.0-_-Kids-premium-sweatshirt-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Changer-2.0-_-Kids-premium-sweatshirt-_-Stanley_Stella-glowne.jpg"
    ]
  },
  category: "Tröjor",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["barnens klassiska sweatshirt stanley&stella mini changer 2.0 - stsk181", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barnens klassiska sweatshirt Stanley&Stella Mini Changer 2.0 - STSK181 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barnens klassiska sweatshirt stanley&stella mini changer 2.0 - stsk181 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-classic-sweatshirt-stanleystella-mini-changer-2-0/",
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
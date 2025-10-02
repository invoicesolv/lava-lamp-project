import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrar känguru King B&C - WU02K - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrkängurun King B&C - WU02K erbjuder en professionell finish med sin högkvalitativa bomulls- och polyestermix som ger en mjuk och slitstark yta. Denna känguruhoodie är speciellt designad för att passa perfekt för tryck och broderi, tack vare den jämna ytan som framhäver detaljer i designen. Passformen är både avslappnad och smickrande, vilket gör den till ett mångsidigt plagg för alla tillfällen. Materialet är noggrant utvalt för att säkerställa hållbarhet och komfort, vilket gör denna hoodie till ett långvarigt tillskott i din garderob. Ribbstickade muddar och nederkant bidrar till en stilren look och extra komfort. Den rymliga kängurufickan är både praktisk och dekorativ, och huvan med dragsko erbjuder extra skydd mot väder och vind. Dess robusta konstruktion gör att plagget behåller sin form och färg även efter många tvättar. Snabb leverans garanterar att du har din känguruhoodie i tid för nästa evenemang eller som en del av din dagliga klädsel. Oavsett om du letar efter en bas för att visa upp ditt företags logga eller ett personligt designat plagg, är King B&C - WU02K det optimala valet.",
  keywords: "herrar känguru king b&c - wu02k, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrar känguru King B&C - WU02K - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrar känguru king b&c - wu02k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-kangaroo-king-bc-wu02k",
  name: "Herrar känguru King B&C - WU02K",
  articleNumber: "HERRAR-KNGURU-KING-BC---WU02K",
  description: "Högkvalitativ herrar känguru king b&c - wu02k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrkängurun King B&C - WU02K är en perfekt blandning av stil och komfort, idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWU02K_Heather-Grey-glowna.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWU02K_Heather-Grey-glowna.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWU02K_Heather-Grey-glowna.jpg"
    ]
  },
  category: "Kläder",
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
  keywords: ["herrar känguru king b&c - wu02k", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrar känguru King B&C - WU02K - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrar känguru king b&c - wu02k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-kangaroo-king-bc/",
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
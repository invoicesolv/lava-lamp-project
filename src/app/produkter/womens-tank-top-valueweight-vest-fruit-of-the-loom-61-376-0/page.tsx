import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Women\'s Tank Top Viktvärde väst Fruit of the Loom - 61-376-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Women's Tank Top Viktvärde väst från Fruit of the Loom är skapad för att erbjuda både stil och funktionalitet. Tillverkad av högkvalitativ bomull garanterar den en mjuk och bekväm känsla mot huden, vilket gör den till ett utmärkt val för dagligt bruk eller för specialtillfällen. Den är särskilt designad för att vara ett perfekt underlag för tryck och broderi, vilket gör den idealisk för företag, event och team som vill profilera sig med egna logotyper eller budskap. Materialet i denna tank top är inte bara mjukt utan även slitstarkt, vilket säkerställer att plagget behåller sin form och färg även efter många tvättar. Denna hållbarhet, kombinerat med en snygg och kvinnlig passform, gör att den passar utmärkt för både avslappnade och mer formella sammanhang. Dess design är tidlös, vilket innebär att den kan användas säsong efter säsong utan att bli omodern. För dem som letar efter ett plagg som kombinerar komfort, stil och funktionalitet är denna tank top ett utmärkt val. Snabb leverans och en professionell finish gör den till ett populärt val för både små och stora beställningar.",
  keywords: "women\'s tank top viktvärde väst fruit of the loom - 61-376-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Women\'s Tank Top Viktvärde väst Fruit of the Loom - 61-376-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ women\'s tank top viktvärde väst fruit of the loom - 61-376-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-tank-top-valueweight-vest-fruit-of-the-loom-61-376-0",
  name: "Women\'s Tank Top Viktvärde väst Fruit of the Loom - 61-376-0",
  description: "Högkvalitativ women\'s tank top viktvärde väst fruit of the loom - 61-376-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna Women's Tank Top från Fruit of the Loom är perfekt för tryck och broderi, tillverkad av mjukt och hållbart material för optimal komfort.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/F262_Heather-Grey-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/F262_Heather-Grey-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/F262_Heather-Grey-glowne.jpg"
    ]
  },
  category: "T-shirts",
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
  keywords: ["women\'s tank top viktvärde väst fruit of the loom - 61-376-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Women\'s Tank Top Viktvärde väst Fruit of the Loom - 61-376-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ women\'s tank top viktvärde väst fruit of the loom - 61-376-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-tank-top-valueweight-vest-fruit-of-the-loom/",
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
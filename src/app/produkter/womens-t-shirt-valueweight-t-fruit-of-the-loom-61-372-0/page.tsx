import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Women\'s T-shirt Viktvärde T Fruit of the Loom - 61-372-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Women's T-shirt Viktvärde T från Fruit of the Loom är en idealisk produkt för alla som söker en t-shirt av hög kvalitet som fungerar utmärkt för både tryck och broderi. Tillverkad av 100% bomull, erbjuder denna t-shirt en mjuk och skön känsla mot huden, samtidigt som den är hållbar och lättskött. Med en vikt på 165 g/m² för vit och 180 g/m² för färgad, är tyget tillräckligt tjockt för att ge en bra bas för tryck, samtidigt som det är tillräckligt lätt för att bära bekvämt hela dagen. T-shirten har en klassisk passform som smickrar alla kroppstyper och ger stor rörelsefrihet. De dubbelsydda sömmarna vid axlar och ärmar säkerställer en professionell finish och ökad hållbarhet, vilket gör den idealisk för både dagligt bruk och som en del av en uniform eller en profilklädsel. Med sitt breda utbud av färger och storlekar, är Women's T-shirt Viktvärde T från Fruit of the Loom ett flexibelt val för företag, skolor eller eventarrangörer som vill skapa en enhetlig look. Snabb leverans och pålitlig kvalitet gör detta plagg till ett utmärkt val för alla behov av anpassade kläder.",
  keywords: "women\'s t-shirt viktvärde t fruit of the loom - 61-372-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Women\'s T-shirt Viktvärde T Fruit of the Loom - 61-372-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ women\'s t-shirt viktvärde t fruit of the loom - 61-372-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-valueweight-t-fruit-of-the-loom-61-372-0",
  name: "Women\'s T-shirt Viktvärde T Fruit of the Loom - 61-372-0",
  description: "Högkvalitativ women\'s t-shirt viktvärde t fruit of the loom - 61-372-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Women's T-shirt Viktvärde T från Fruit of the Loom är den perfekta basen för tryck och broderi, med högkvalitativt tyg och en bekväm passform.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/F288N_Kelly-Green-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/F288N_Kelly-Green-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/F288N_Kelly-Green-glowne.jpg"
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
  keywords: ["women\'s t-shirt viktvärde t fruit of the loom - 61-372-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Women\'s T-shirt Viktvärde T Fruit of the Loom - 61-372-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ women\'s t-shirt viktvärde t fruit of the loom - 61-372-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-valueweight-t-fruit-of-the-loom/",
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
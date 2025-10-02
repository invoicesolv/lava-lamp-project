import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Keps FLEXFIT Ullkammad Keps - 6277 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "keps flexfit ullkammad keps - 6277, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Keps FLEXFIT Ullkammad Keps - 6277 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ keps flexfit ullkammad keps - 6277 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cap-flexfit-wooly-combed-cap-6277",
  name: "Keps FLEXFIT Ullkammad Keps - 6277",
  articleNumber: "KEPS-FLEXFIT-ULLKAMMAD-KEPS---6277",
  description: "Högkvalitativ keps flexfit ullkammad keps - 6277 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/FX6277_Dark-Leaf-Green-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/FX6277_Dark-Leaf-Green-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/FX6277_Dark-Leaf-Green-glowne.jpg"
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
  keywords: ["keps flexfit ullkammad keps - 6277", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Keps FLEXFIT Ullkammad Keps - 6277 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ keps flexfit ullkammad keps - 6277 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cap-flexfit-wooly-combed-cap/",
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
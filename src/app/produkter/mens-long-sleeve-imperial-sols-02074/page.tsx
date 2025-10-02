import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr Långärmad Imperial SOL's - 02074 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "herr långärmad imperial sol's - 02074, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr Långärmad Imperial SOL's - 02074 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr långärmad imperial sol's - 02074 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-long-sleeve-imperial-sols-02074",
  name: "Herr Långärmad Imperial SOL's - 02074",
  articleNumber: "HERR-LNGRMAD-IMPERIAL-SOLS---02074",
  description: "Högkvalitativ herr långärmad imperial sol's - 02074 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L02074_Royal-Blue-241-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L02074_Royal-Blue-241-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L02074_Royal-Blue-241-glowne.jpg"
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
  keywords: ["herr långärmad imperial sol's - 02074", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr Långärmad Imperial SOL's - 02074 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr långärmad imperial sol's - 02074 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-long-sleeve-imperial-sols/",
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
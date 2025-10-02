import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Children\'s T-shirt Viktvärde T Fruit of the Loom - 61-033-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "children\'s t-shirt viktvärde t fruit of the loom - 61-033-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Children\'s T-shirt Viktvärde T Fruit of the Loom - 61-033-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ children\'s t-shirt viktvärde t fruit of the loom - 61-033-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-valueweight-t-fruit-of-the-loom-61-033-0",
  name: "Children\'s T-shirt Viktvärde T Fruit of the Loom - 61-033-0",
  description: "Högkvalitativ children\'s t-shirt viktvärde t fruit of the loom - 61-033-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/F140K_Kelly-Green-gowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/F140K_Kelly-Green-gowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/F140K_Kelly-Green-gowne.jpg"
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
  keywords: ["children\'s t-shirt viktvärde t fruit of the loom - 61-033-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Children\'s T-shirt Viktvärde T Fruit of the Loom - 61-033-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ children\'s t-shirt viktvärde t fruit of the loom - 61-033-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-valueweight-t-fruit-of-the-loom/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Women\'s T-shirt Iconic 195 T Fruit of the Loom - 61-424-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "women\'s t-shirt iconic 195 t fruit of the loom - 61-424-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Women\'s T-shirt Iconic 195 T Fruit of the Loom - 61-424-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ women\'s t-shirt iconic 195 t fruit of the loom - 61-424-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-iconic-195-t-fruit-of-the-loom-61-424-0",
  name: "Women\'s T-shirt Iconic 195 T Fruit of the Loom - 61-424-0",
  description: "Högkvalitativ women\'s t-shirt iconic 195 t fruit of the loom - 61-424-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/F186_Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/F186_Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/F186_Red-glowne.jpg"
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
  keywords: ["women\'s t-shirt iconic 195 t fruit of the loom - 61-424-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Women\'s T-shirt Iconic 195 T Fruit of the Loom - 61-424-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ women\'s t-shirt iconic 195 t fruit of the loom - 61-424-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-iconic-195-t-fruit-of-the-loom/",
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
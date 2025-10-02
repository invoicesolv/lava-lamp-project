import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Långärmad B&C - TU07T - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "herr t-shirt långärmad b&c - tu07t, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Långärmad B&C - TU07T - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt långärmad b&c - tu07t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-long-sleeve-bc-tu07t",
  name: "Herr T-shirt Långärmad B&C - TU07T",
  articleNumber: "HERR-T-SHIRT-LNGRMAD-BC---TU07T",
  description: "Högkvalitativ herr t-shirt långärmad b&c - tu07t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTU07T_Navy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTU07T_Navy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTU07T_Navy-glowne.jpg"
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
  keywords: ["herr t-shirt långärmad b&c - tu07t", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Långärmad B&C - TU07T - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt långärmad b&c - tu07t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-long-sleeve-bc/",
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
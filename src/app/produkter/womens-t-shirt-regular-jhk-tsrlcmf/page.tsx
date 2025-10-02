import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damt-shirt Regular JHK - TSRLCMF - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "damt-shirt regular jhk - tsrlcmf, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damt-shirt Regular JHK - TSRLCMF - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damt-shirt regular jhk - tsrlcmf perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-regular-jhk-tsrlcmf",
  name: "Damt-shirt Regular JHK - TSRLCMF",
  articleNumber: "DAMT-SHIRT-REGULAR-JHK---TSRLCMF",
  description: "Högkvalitativ damt-shirt regular jhk - tsrlcmf perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/JHK152_Royal-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK152_Royal-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK152_Royal-Blue-glowne.jpg"
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
  keywords: ["damt-shirt regular jhk - tsrlcmf", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damt-shirt Regular JHK - TSRLCMF - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damt-shirt regular jhk - tsrlcmf perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-regular-jhk/",
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
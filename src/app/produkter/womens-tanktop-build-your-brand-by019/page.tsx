import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damlinne Bygg ditt varumärke - BY019 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "damlinne bygg ditt varumärke - by019, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damlinne Bygg ditt varumärke - BY019 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damlinne bygg ditt varumärke - by019 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-tanktop-build-your-brand-by019",
  name: "Damlinne Bygg ditt varumärke - BY019",
  articleNumber: "DAMLINNE-BYGG-DITT-VARUMRKE---BY019",
  description: "Högkvalitativ damlinne bygg ditt varumärke - by019 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY019_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY019_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY019_Black-glowne.jpg"
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
  keywords: ["damlinne bygg ditt varumärke - by019", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damlinne Bygg ditt varumärke - BY019 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damlinne bygg ditt varumärke - by019 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-tanktop-byb/",
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
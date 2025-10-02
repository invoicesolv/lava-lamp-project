import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Stanley&Stella - Ella - STTW174 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "dam t-shirt stanley&stella - ella - sttw174, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Stanley&Stella - Ella - STTW174 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt stanley&stella - ella - sttw174 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-stanleystella-ella-sttw174",
  name: "Dam T-shirt Stanley&Stella - Ella - STTW174",
  articleNumber: "DAM-T-SHIRT-STANLEYSTELLA---ELLA---STTW174",
  description: "Högkvalitativ dam t-shirt stanley&stella - ella - sttw174 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Stella-Ella-_-Blank-womens-fitted-t-shirts-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Stella-Ella-_-Blank-womens-fitted-t-shirts-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Stella-Ella-_-Blank-womens-fitted-t-shirts-_-Stanley_Stella-glowne.jpg"
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
  keywords: ["dam t-shirt stanley&stella - ella - sttw174", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Stanley&Stella - Ella - STTW174 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt stanley&stella - ella - sttw174 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-stanleystella-ella/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Viper Malfini - 161 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "dam t-shirt viper malfini - 161, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Viper Malfini - 161 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt viper malfini - 161 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-viper-malfini-161",
  name: "Dam T-shirt Viper Malfini - 161",
  articleNumber: "DAM-T-SHIRT-VIPER-MALFINI---161",
  description: "Högkvalitativ dam t-shirt viper malfini - 161 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/161_16_A_xl-glowne-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/161_16_A_xl-glowne-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/161_16_A_xl-glowne-1620x1620.png"
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
  keywords: ["dam t-shirt viper malfini - 161", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Viper Malfini - 161 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt viper malfini - 161 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-viper-malfini/",
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
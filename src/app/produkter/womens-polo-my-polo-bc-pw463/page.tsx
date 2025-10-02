import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damers pikétröja My Polo B&C - PW463 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "damers pikétröja my polo b&c - pw463, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damers pikétröja My Polo B&C - PW463 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damers pikétröja my polo b&c - pw463 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-my-polo-bc-pw463",
  name: "Damers pikétröja My Polo B&C - PW463",
  articleNumber: "DAMERS-PIKTRJA-MY-POLO-BC---PW463",
  description: "Högkvalitativ damers pikétröja my polo b&c - pw463 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BCPW463_Nude-2.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BCPW463_Nude-2.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BCPW463_Nude-2.jpg"
    ]
  },
  category: "Tröjor",
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
  keywords: ["damers pikétröja my polo b&c - pw463", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damers pikétröja My Polo B&C - PW463 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damers pikétröja my polo b&c - pw463 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-my-polo/",
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
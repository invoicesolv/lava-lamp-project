import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Imperial SOL's - 11770 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "barn t-shirt imperial sol's - 11770, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Imperial SOL's - 11770 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt imperial sol's - 11770 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-imperial-sols-11770",
  name: "Barn T-shirt Imperial SOL's - 11770",
  articleNumber: "BARN-T-SHIRT-IMPERIAL-SOLS---11770",
  description: "Högkvalitativ barn t-shirt imperial sol's - 11770 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L190K_French-Navy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L190K_French-Navy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L190K_French-Navy-glowne.jpg"
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
  keywords: ["barn t-shirt imperial sol's - 11770", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Imperial SOL's - 11770 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt imperial sol's - 11770 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-imperial-sols/",
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
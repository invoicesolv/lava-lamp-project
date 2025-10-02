import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barnens uppknäppta sweatshirt Stanley&Stella Mini Cultivator 2.0 - STSK182 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "barnens uppknäppta sweatshirt stanley&stella mini cultivator 2.0 - stsk182, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barnens uppknäppta sweatshirt Stanley&Stella Mini Cultivator 2.0 - STSK182 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barnens uppknäppta sweatshirt stanley&stella mini cultivator 2.0 - stsk182 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-unzipped-sweatshirt-stanleystella-mini-cultivator-20-stsk182",
  name: "Barnens uppknäppta sweatshirt Stanley&Stella Mini Cultivator 2.0 - STSK182",
  articleNumber: "BARNENS-UPPKNPPTA-SWEATSHIRT-STANLEYSTELLA-MINI-CULTIVATOR-20---STSK182",
  description: "Högkvalitativ barnens uppknäppta sweatshirt stanley&stella mini cultivator 2.0 - stsk182 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Cultivator-2.0-_-Kids-zip-thru-hoodie-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Cultivator-2.0-_-Kids-zip-thru-hoodie-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Cultivator-2.0-_-Kids-zip-thru-hoodie-_-Stanley_Stella-glowne.jpg"
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
  keywords: ["barnens uppknäppta sweatshirt stanley&stella mini cultivator 2.0 - stsk182", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barnens uppknäppta sweatshirt Stanley&Stella Mini Cultivator 2.0 - STSK182 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barnens uppknäppta sweatshirt stanley&stella mini cultivator 2.0 - stsk182 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-unzipped-sweatshirt-stanleystella-mini-cultivator-2-0/",
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
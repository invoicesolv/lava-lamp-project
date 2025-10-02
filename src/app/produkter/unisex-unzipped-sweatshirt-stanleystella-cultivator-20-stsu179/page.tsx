import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Unisex dragkedjefri sweatshirt Stanley&Stella Cultivator 2.0 - STSU179 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Cultivator 2.0 är en unisex dragkedjefri sweatshirt som kombinerar stil och komfort med hållbarhet. Tillverkad av 85% ekologisk ringspunnen kammad bomull och 15% återvunnen polyester, erbjuder denna sweatshirt både mjukhet och slitstyrka. Den är designad för att vara den perfekta duken för alla dina tryck och broderiprojekt, tack vare dess släta yta och höga kvalitet. Sweatshirten har en klassisk passform som passar alla kroppstyper, vilket gör den till ett mångsidigt plagg i garderoben. Den ribbade kragen, ärmsluten och nederkanten ger en snygg och professionell finish. Cultivator 2.0 är dessutom certifierad av flera hållbarhetsmärkningar, vilket garanterar en ansvarsfull produktion och minskad miljöpåverkan. Perfekt för företag, skolor eller evenemang som vill ha en personlig touch på sina kläder. Dess hållbara material säkerställer att den motstår slitage och håller sig snygg tvätt efter tvätt. Med snabb leverans kan du snart börja använda denna stilrena och hållbara sweatshirt för dina kreativa projekt.",
  keywords: "unisex dragkedjefri sweatshirt stanley&stella cultivator 2.0 - stsu179, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Unisex dragkedjefri sweatshirt Stanley&Stella Cultivator 2.0 - STSU179 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ unisex dragkedjefri sweatshirt stanley&stella cultivator 2.0 - stsu179 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unisex-unzipped-sweatshirt-stanleystella-cultivator-20-stsu179",
  name: "Unisex dragkedjefri sweatshirt Stanley&Stella Cultivator 2.0 - STSU179",
  articleNumber: "UNISEX-DRAGKEDJEFRI-SWEATSHIRT-STANLEYSTELLA-CULTIVATOR-20---STSU179",
  description: "Högkvalitativ unisex dragkedjefri sweatshirt stanley&stella cultivator 2.0 - stsu179 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Unisex dragkedjefri sweatshirt i högkvalitativ ekologisk bomull, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Cultivator-2.0-_-Unisex-zip-thru-hoodie-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Cultivator-2.0-_-Unisex-zip-thru-hoodie-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Cultivator-2.0-_-Unisex-zip-thru-hoodie-_-Stanley_Stella-glowne.jpg"
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
  keywords: ["unisex dragkedjefri sweatshirt stanley&stella cultivator 2.0 - stsu179", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Unisex dragkedjefri sweatshirt Stanley&Stella Cultivator 2.0 - STSU179 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ unisex dragkedjefri sweatshirt stanley&stella cultivator 2.0 - stsu179 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unisex-unzipped-sweatshirt-stanleystella-cultivator-2-0/",
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
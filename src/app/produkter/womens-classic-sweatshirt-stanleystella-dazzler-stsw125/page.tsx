import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damklassisk sweatshirt Stanley&Stella Dazzler - STSW125 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Dazzler damklassisk sweatshirt är ett utmärkt val för dem som söker stil och funktionalitet i ett. Tillverkad av högkvalitativ ekologisk bomull och återvunnen polyester, erbjuder denna tröja en mjuk och hållbar känsla som är perfekt för daglig användning. Materialets höga kvalitet gör den idealisk för både tryck och broderi, vilket ger ett professionellt resultat varje gång. Sweatshirten har en modern passform som smickrar alla kroppstyper, med ribbade muddar och fållar som ger en ren finish. Den är designad för att behålla sin form och färg även efter många tvättar, vilket gör den till ett pålitligt tillägg till din garderob.  Dessutom är Stanley&Stella Dazzler ett miljömedvetet val, tack vare användningen av hållbara material och produktionstekniker. Med snabb leverans kan du snart njuta av denna klassiker som enkelt kombineras med andra plagg för en stilren vardagslook.",
  keywords: "damklassisk sweatshirt stanley&stella dazzler - stsw125, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damklassisk sweatshirt Stanley&Stella Dazzler - STSW125 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damklassisk sweatshirt stanley&stella dazzler - stsw125 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-classic-sweatshirt-stanleystella-dazzler-stsw125",
  name: "Damklassisk sweatshirt Stanley&Stella Dazzler - STSW125",
  articleNumber: "DAMKLASSISK-SWEATSHIRT-STANLEYSTELLA-DAZZLER---STSW125",
  description: "Högkvalitativ damklassisk sweatshirt stanley&stella dazzler - stsw125 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Den klassiska dam-sweatshirten Stanley&Stella Dazzler erbjuder en tidlös design med hög komfort och är perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Stella-Dazzler.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Stella-Dazzler.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Stella-Dazzler.jpg"
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
  keywords: ["damklassisk sweatshirt stanley&stella dazzler - stsw125", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damklassisk sweatshirt Stanley&Stella Dazzler - STSW125 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damklassisk sweatshirt stanley&stella dazzler - stsw125 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-classic-sweatshirt-stanleystella-dazzler/",
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
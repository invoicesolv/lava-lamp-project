import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barntröja Stanley&Stella Mini Cruiser 2.0 - STSK180 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Mini Cruiser 2.0 - STSK180 är den perfekta barntröjan för både vardag och speciella tillfällen. Tillverkad av 85% ekologisk ringspunnen kammad bomull och 15% återvunnen polyester, erbjuder denna tröja en exceptionell mjukhet och hållbarhet som är skonsam mot barns känsliga hud. Den är designad för att ge maximal komfort och rörelsefrihet, vilket gör den idealisk för lekfulla dagar. Tröjans yta är perfekt för tryck och broderi, vilket gör det enkelt att anpassa med skol- eller föreningsloggor, favoritkaraktärer eller personliga designs. Med en stadig och jämn yta blir varje design skarp och tydlig, vilket ger en professionell finish oavsett vilken metod du väljer. Denna barntröja har en modern passform med ribbade muddar i ärmslut och nederkant, vilket ger ett stilrent utseende samtidigt som det bidrar till plaggets hållbarhet. Dessutom är Mini Cruiser 2.0 tillverkad med miljövänliga metoder, vilket gör den till ett bra val för miljömedvetna föräldrar. Med snabb leverans kan du vara säker på att få denna högkvalitativa tröja i tid för alla tillfällen.",
  keywords: "barntröja stanley&stella mini cruiser 2.0 - stsk180, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barntröja Stanley&Stella Mini Cruiser 2.0 - STSK180 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barntröja stanley&stella mini cruiser 2.0 - stsk180 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-sweatshirt-stanleystella-mini-cruiser-20-stsk180",
  name: "Barntröja Stanley&Stella Mini Cruiser 2.0 - STSK180",
  articleNumber: "BARNTRJA-STANLEYSTELLA-MINI-CRUISER-20---STSK180",
  description: "Högkvalitativ barntröja stanley&stella mini cruiser 2.0 - stsk180 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Stanley&Stella Mini Cruiser 2.0 är en hållbar och mjuk barntröja, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Cruiser-2.0-_-Kids-hoodie-sweatshirt-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Cruiser-2.0-_-Kids-hoodie-sweatshirt-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Cruiser-2.0-_-Kids-hoodie-sweatshirt-_-Stanley_Stella-glowne.jpg"
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
  keywords: ["barntröja stanley&stella mini cruiser 2.0 - stsk180", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barntröja Stanley&Stella Mini Cruiser 2.0 - STSK180 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barntröja stanley&stella mini cruiser 2.0 - stsk180 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-sweatshirt-stanleystella-mini-cruiser-2-0/",
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
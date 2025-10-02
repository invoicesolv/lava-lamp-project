import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Unisex pikétröja Stanley&Stella Prepster - STPU331 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Unisex pikétröjan Stanley&Stella Prepster - STPU331 är en elegant och mångsidig pikétröja som passar perfekt för alla tillfällen. Tillverkad av 100% ekologisk och kammad ringspunnen bomull, erbjuder denna tröja både komfort och hållbarhet. Det mjuka materialet ger en fantastisk känsla mot huden och är idealiskt för att upprätthålla en snygg och professionell look. Denna pikétröja är särskilt utformad för att underlätta tryck och broderi, vilket gör den till ett utmärkt val för företag och föreningar som vill profilera sig med stil. Den släta ytan på tröjan säkerställer att tryckresultaten blir skarpa och tydliga, medan broderier får en professionell och elegant finish. Passformen är modern och unisex, vilket innebär att tröjan sitter bra på både män och kvinnor utan att kompromissa på komfort. Den ribbade kragen och ärmsluten ger extra stil och hållbarhet, vilket gör att tröjan behåller sin form även efter många tvättar. Med snabb leverans och hög kvalitet är Stanley&Stella Prepster - STPU331 det perfekta valet för alla som söker en pålitlig och stilren pikétröja för både vardagsbruk och professionella miljöer.",
  keywords: "unisex pikétröja stanley&stella prepster - stpu331, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Unisex pikétröja Stanley&Stella Prepster - STPU331 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ unisex pikétröja stanley&stella prepster - stpu331 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unisex-polo-stanleystella-prepster-stpu331",
  name: "Unisex pikétröja Stanley&Stella Prepster - STPU331",
  articleNumber: "UNISEX-PIKTRJA-STANLEYSTELLA-PREPSTER---STPU331",
  description: "Högkvalitativ unisex pikétröja stanley&stella prepster - stpu331 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Unisex pikétröjan Stanley&Stella Prepster är gjord av högkvalitativ ekologisk bomull och är perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Prepster-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Prepster-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Prepster-glowne.jpg"
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
  keywords: ["unisex pikétröja stanley&stella prepster - stpu331", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Unisex pikétröja Stanley&Stella Prepster - STPU331 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ unisex pikétröja stanley&stella prepster - stpu331 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unisex-polo-stanleystella-prepster/",
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
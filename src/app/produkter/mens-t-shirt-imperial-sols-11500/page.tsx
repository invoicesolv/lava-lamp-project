import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Imperial SOL’s - 11500 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Imperial SOL’s - 11500 är tillverkad av 100% ring-spunnen bomull, vilket ger en mjuk och slitstark yta som är perfekt för tryck och broderi. Det är en t-shirt som kombinerar kvalitet och komfort med sin moderna passform, vilket gör den till ett utmärkt val för både företagsprofilering och fritidskläder. Materialet är noga utvalt för att säkerställa att varje tryck eller broderi framhävs med tydlighet och precision. T-shirten är förtvättad för att minimera krympning och behålla sin form och färg även efter många tvättar. Med en professionell finish och förstärkta sömmar är denna t-shirt inte bara elegant, utan också hållbar. Den är ett pålitligt plagg i garderoben för alla tillfällen. Vi erbjuder snabb leverans för att möta dina behov i tid, oavsett om du beställer för ett event eller för att utöka din klädkollektion.",
  keywords: "herr t-shirt imperial sol’s - 11500, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Imperial SOL’s - 11500 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt imperial sol’s - 11500 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-imperial-sols-11500",
  name: "Herr T-shirt Imperial SOL’s - 11500",
  articleNumber: "HERR-T-SHIRT-IMPERIAL-SOLS---11500",
  description: "Högkvalitativ herr t-shirt imperial sol’s - 11500 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Imperial SOL’s - 11500 erbjuder högkvalitativ design med perfekt passform, idealisk för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L190_French-Navy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L190_French-Navy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L190_French-Navy-glowne.jpg"
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
  keywords: ["herr t-shirt imperial sol’s - 11500", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Imperial SOL’s - 11500 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt imperial sol’s - 11500 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-imperial-sols/",
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
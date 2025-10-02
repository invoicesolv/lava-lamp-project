import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Sport-T Stedman - ST8000 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Sport-T Stedman ST8000 är en högkvalitativ t-shirt designad för både komfort och stil. Tillverkad av 100% polyester, erbjuder denna t-shirt en lätt och andningsbar känsla, vilket gör den idealisk för både sportaktiviteter och vardagsbruk. Materialet är slitstarkt och håller formen även efter flera tvättar, vilket gör det till ett hållbart val för din garderob. Denna t-shirt är perfekt för tryck och broderi, med en slät yta som ger ett professionellt resultat varje gång. Oavsett om du vill anpassa den med ett företagslogotyp, ett personligt meddelande eller ett konstverk, säkerställer den jämna finishen att dina designidéer kommer till liv på bästa sätt. Passformen är modern och bekväm, vilket ger rörelsefrihet utan att kompromissa med stilen. Den är utformad för att passa olika kroppstyper och storlekar, vilket gör den till ett mångsidigt plagg för alla tillfällen. Med snabb leverans kan du få din Stedman ST8000 inom kort tid, redo att användas eller anpassas efter dina behov.",
  keywords: "herr t-shirt sport-t stedman - st8000, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Sport-T Stedman - ST8000 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt sport-t stedman - st8000 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-sports-t-stedman-st8000",
  name: "Herr T-shirt Sport-T Stedman - ST8000",
  articleNumber: "HERR-T-SHIRT-SPORT-T-STEDMAN---ST8000",
  description: "Högkvalitativ herr t-shirt sport-t stedman - st8000 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Sport-T Stedman ST8000 erbjuder exceptionell komfort med en professionell finish, perfekt för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/S8000_Crimson-Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/S8000_Crimson-Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/S8000_Crimson-Red-glowne.jpg"
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
  keywords: ["herr t-shirt sport-t stedman - st8000", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Sport-T Stedman - ST8000 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt sport-t stedman - st8000 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-sports-t/",
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
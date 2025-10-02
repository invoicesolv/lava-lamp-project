import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Tung Bomull Gildan - 5100P - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barn T-shirt Tung Bomull Gildan 5100P är en t-shirt av hög kvalitet, perfekt för barn som behöver en slitstark och bekväm tröja för både lek och vardag. Tillverkad av 100% tung bomull, erbjuder denna t-shirt en robust och mjuk känsla som är skonsam mot huden. Tyget är idealiskt för både tryck och broderi, vilket gör den till ett utmärkt val för skolor, idrottslag eller personliga projekt där anpassning är nyckeln. T-shirten har en klassisk passform som ger komfort och rörelsefrihet, vilket är viktigt för aktiva barn. Den är designad för att hålla sin form och färg även efter många tvättar, vilket gör den till ett hållbart alternativ för både föräldrar och barn. De dubbla sömmarna i krage och fållar säkerställer en professionell finish och ökar plaggets livslängd. Med snabb leverans kan du räkna med att få din beställning i tid, vilket gör det enkelt att hålla jämna steg med barnens ständigt växande garderob. Välj Barn T-shirt Tung Bomull Gildan 5100P för en kombination av kvalitet, komfort och anpassningsmöjligheter.",
  keywords: "barn t-shirt tung bomull gildan - 5100p, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Tung Bomull Gildan - 5100P - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt tung bomull gildan - 5100p perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-heavy-cotton-gildan-5100p",
  name: "Barn T-shirt Tung Bomull Gildan - 5100P",
  articleNumber: "BARN-T-SHIRT-TUNG-BOMULL-GILDAN---5100P",
  description: "Högkvalitativ barn t-shirt tung bomull gildan - 5100p perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barn T-shirt Tung Bomull Gildan 5100P är ett utmärkt val för tryck och broderi, tillverkad av hållbar och bekväm bomull.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/G5100P_Light-Pink-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/G5100P_Light-Pink-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/G5100P_Light-Pink-glowne.jpg"
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
  keywords: ["barn t-shirt tung bomull gildan - 5100p", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Tung Bomull Gildan - 5100P - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt tung bomull gildan - 5100p perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-heavy-cotton-gildan/",
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
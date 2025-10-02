import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Sportig SOL's - L198K - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barn T-shirt Sportig SOL's - L198K är tillverkad av högkvalitativ bomull som säkerställer både komfort och hållbarhet, vilket gör den idealisk för barnens aktiva dagar. T-shirten har en sportig design och är perfekt för att skapa personliga plagg med tryck och broderi. Den mjuka bomullen är skonsam mot känslig hud och tål många tvättar utan att förlora färg eller form. Med en bekväm passform som inte begränsar rörelsefriheten, kan barnen njuta av både lek och sportaktiviteter utan obehag. T-shirten är tillgänglig i flera färger, vilket gör den till ett utmärkt val för skolor, sportklubbar eller som en enhetlig del av klassens utflyktsklädsel. Designad för att garantera en professionell finish, är denna t-shirt perfekt för att anpassas med logotyper eller namn, vilket gör den till ett populärt val för evenemang eller företag. Vi erbjuder snabb leverans, så du kan få dina anpassade t-shirts i tid för det kommande evenemanget.",
  keywords: "barn t-shirt sportig sol's - l198k, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Sportig SOL's - L198K - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt sportig sol's - l198k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-sporty-sols-l198k",
  name: "Barn T-shirt Sportig SOL's - L198K",
  articleNumber: "BARN-T-SHIRT-SPORTIG-SOLS---L198K",
  description: "Högkvalitativ barn t-shirt sportig sol's - l198k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barn T-shirt Sportig SOL's - L198K erbjuder både komfort och stil, perfekt för aktiva dagar med möjlighet för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L198_Aqua-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L198_Aqua-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L198_Aqua-glowne.jpg"
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
  keywords: ["barn t-shirt sportig sol's - l198k", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Sportig SOL's - L198K - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt sportig sol's - l198k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-sporty/",
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
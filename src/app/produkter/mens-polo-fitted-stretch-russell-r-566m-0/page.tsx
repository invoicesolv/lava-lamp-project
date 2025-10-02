import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Men\'s Polo Sittande Stretch Russell - R-566M-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Men's Polo Sittande Stretch Russell - R-566M-0 erbjuder en optimal kombination av stil och funktionalitet. Tillverkad av ett stretchmaterial som ger en bekväm passform och fri rörlighet, är denna polo idealisk för både vardagsbruk och professionella miljöer. Materialets höga kvalitet säkerställer att plagget behåller sin form och färg tvätt efter tvätt, vilket gör det till ett hållbart val för garderoben. Denna polo är speciellt utformad för att anpassas med både tryck och broderi. Det släta tyget ger en utmärkt yta för att visa upp logotyper eller personliga designer med en skarp och tydlig finish. Med en professionell stil och en polerad look är denna polo ett utmärkt val för företag som vill stärka sin varumärkesprofil. Polo R-566M-0 är också designad med komfort i åtanke. Den stretchiga passformen ger användaren friheten att röra sig utan begränsningar, vilket är perfekt för en aktiv livsstil. Den klassiska kragen och knäppningen framtill bidrar till den eleganta och tidlösa designen, vilket gör detta plagg till en mångsidig del av alla klädstilar. Med snabb leverans och högkvalitativ finish, är detta plagg redo att bli en favorit i din garderob.",
  keywords: "men\'s polo sittande stretch russell - r-566m-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Men\'s Polo Sittande Stretch Russell - R-566M-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ men\'s polo sittande stretch russell - r-566m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-fitted-stretch-russell-r-566m-0",
  name: "Men\'s Polo Sittande Stretch Russell - R-566M-0",
  description: "Högkvalitativ men\'s polo sittande stretch russell - r-566m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Men's Polo Sittande Stretch Russell - R-566M-0 är en högkvalitativ polo designad för komfort och perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z566_Classic-Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z566_Classic-Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z566_Classic-Red-glowne.jpg"
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
  keywords: ["men\'s polo sittande stretch russell - r-566m-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Men\'s Polo Sittande Stretch Russell - R-566M-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ men\'s polo sittande stretch russell - r-566m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-fitted-stretch/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Imperial SOL’s - 11502 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Imperial SOL’s - 11502 erbjuder en perfekt kombination av stil och komfort, vilket gör den till ett utmärkt val för både vardagsbruk och professionella tillfällen. Tillverkad av 100% bomull, ger denna t-shirt en mjuk känsla mot huden och säkerställer att den behåller sin form och färg även efter flera tvättar, vilket bidrar till dess hållbarhet. Designad med en modern och figurnära passform, lyfter denna t-shirt fram den kvinnliga siluetten på ett smickrande sätt. Den är tillgänglig i en rad olika färger, vilket gör den idealisk för företag som vill profilera sig genom tryck eller broderi. Tack vare sin släta yta får broderier och tryck en professionell finish, vilket gör den till ett populärt val för företagskläder eller evenemang. T-shirten erbjuder inte bara stil utan också funktionalitet, med förstärkta dubbelsömmar för extra hållbarhet. Den är designad för att klara av daglig användning och passar perfekt för alla säsonger, vilket gör den till ett mångsidigt tillskott i garderoben. Med snabb leverans kan du förvänta dig att få din beställning i tid för alla dina behov.",
  keywords: "dam t-shirt imperial sol’s - 11502, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Imperial SOL’s - 11502 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt imperial sol’s - 11502 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-imperial-sols-11502",
  name: "Dam T-shirt Imperial SOL’s - 11502",
  articleNumber: "DAM-T-SHIRT-IMPERIAL-SOLS---11502",
  description: "Högkvalitativ dam t-shirt imperial sol’s - 11502 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Imperial SOL’s - 11502 är en elegant och bekväm t-shirt som är perfekt för tryck och broderi, tillverkad av högkvalitativ bomull för optimal komfort.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L191_French-Navy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L191_French-Navy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L191_French-Navy-glowne.jpg"
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
  keywords: ["dam t-shirt imperial sol’s - 11502", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Imperial SOL’s - 11502 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt imperial sol’s - 11502 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-imperial-sols/",
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
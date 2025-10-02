import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Regent SOL's - 11970 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Regent SOL's Barn T-shirt är ett utmärkt val för alla tillfällen, designad med både stil och funktion i åtanke. Tillverkad av 100 % ringspunnen bomull, erbjuder denna t-shirt en mjuk och behaglig känsla mot huden, vilket gör den idealisk för dagligt bruk. Den släta ytan gör den perfekt för tryck och broderi, vilket ger en professionell finish varje gång. Denna t-shirt har en klassisk och tidlös design med en rund hals och korta ärmar, vilket gör den till ett mångsidigt plagg i barnets garderob. Den är tillverkad för att klara av lek och rörelse, samtidigt som den behåller sin form och färg tvätt efter tvätt. Passformen är bekväm och avslappnad, vilket gör att barnet kan röra sig fritt utan att känna sig begränsat. Kvaliteten på denna t-shirt är oöverträffad, och den är noggrant konstruerad för att säkerställa hållbarhet. Den är också ett miljövänligt alternativ, vilket gör den till ett ansvarsfullt val för föräldrar som bryr sig om planeten. Snabb leverans gör det enkelt att få dina beställningar i tid, oavsett om du behöver dem för ett evenemang eller för vardagsbruk.",
  keywords: "barn t-shirt regent sol's - 11970, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Regent SOL's - 11970 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt regent sol's - 11970 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-regent-sols-11970",
  name: "Barn T-shirt Regent SOL's - 11970",
  articleNumber: "BARN-T-SHIRT-REGENT-SOLS---11970",
  description: "Högkvalitativ barn t-shirt regent sol's - 11970 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Regent SOL's Barn T-shirt är perfekt för tryck och broderi med högkvalitativ bomull och bekväm passform.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L150K_Orange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L150K_Orange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L150K_Orange-glowne.jpg"
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
  keywords: ["barn t-shirt regent sol's - 11970", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Regent SOL's - 11970 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt regent sol's - 11970 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-regent-sols/",
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
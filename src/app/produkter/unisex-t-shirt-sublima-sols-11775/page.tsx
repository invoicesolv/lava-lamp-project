import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Unisex T-shirt Sublima SOL's - 11775 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Unisex T-shirt Sublima SOL's - 11775 är en mångsidig t-shirt designad för både män och kvinnor, med fokus på kvalitet och stil. Den är tillverkad av 100% polyester som ger en mjuk och bekväm känsla mot huden, samtidigt som det är ett utmärkt material för sublimationstryck. Detta gör att tryck och broderier framstår skarpt och hållbart, vilket gör den idealisk för företag, evenemang eller personligt bruk. T-shirten har en modern passform som sitter smickrande på alla kroppstyper utan att kompromissa med komforten. Den ribbade kragen och dubbelsömmarna vid ärmar och nederkant bidrar till en professionell finish och ökad hållbarhet. Detta plagg bibehåller sin form och färg även efter många tvättar, vilket gör det till ett utmärkt långsiktigt tillägg till garderoben. Med snabb leverans och hög tillgänglighet är Unisex T-shirt Sublima SOL's ett pålitligt val för dem som söker en t-shirt som kombinerar stil, funktionalitet och möjligheten till personlig anpassning. Oavsett om du behöver en uniform för ditt team eller en unik present, är denna t-shirt ett perfekt val.",
  keywords: "unisex t-shirt sublima sol's - 11775, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Unisex T-shirt Sublima SOL's - 11775 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ unisex t-shirt sublima sol's - 11775 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unisex-t-shirt-sublima-sols-11775",
  name: "Unisex T-shirt Sublima SOL's - 11775",
  articleNumber: "UNISEX-T-SHIRT-SUBLIMA-SOLS---11775",
  description: "Högkvalitativ unisex t-shirt sublima sol's - 11775 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Unisex T-shirt Sublima SOL's är den perfekta t-shirten för tryck och broderi, tillverkad av högkvalitativt material för maximal komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L165_White-glowne-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L165_White-glowne-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L165_White-glowne-1.jpg"
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
  keywords: ["unisex t-shirt sublima sol's - 11775", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Unisex T-shirt Sublima SOL's - 11775 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ unisex t-shirt sublima sol's - 11775 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unisex-t-shirt-sublima-sols/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Basic Malfini - 134 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Basic Malfini - 134 kombinerar enkelhet med komfort och kvalitet. Tillverkad av högkvalitativ bomull som är mjuk mot huden, erbjuder denna t-shirt en fantastisk yta för både tryck och broderi. T-shirten har en modern och figurnära passform som följer kroppens naturliga linjer, vilket gör den till ett utmärkt val för både privat och professionellt bruk. Materialet i Malfini 134 är inte bara slitstarkt utan också färgbeständigt, vilket innebär att den behåller sin fräschhet och livfullhet även efter många tvättar. Den ribbade kragen ger extra hållbarhet och en stilren look som passar alla tillfällen, från avslappnade dagar hemma till mer formella företagsevenemang. Perfekt för företag som vill hålla sin personal enhetligt klädd och för evenemang där en personlig touch behövs. Tack vare den enkla designen är t-shirten lätt att anpassa med logotyper, slogans eller andra grafiska element, vilket gör den till en idealisk bas för tryck och broderi. Snabb leverans garanterar att du snabbt kan få dina skräddarsydda plagg i tid till ditt nästa event.",
  keywords: "dam t-shirt basic malfini - 134, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Basic Malfini - 134 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt basic malfini - 134 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-basic-malfini-134",
  name: "Dam T-shirt Basic Malfini - 134",
  articleNumber: "DAM-T-SHIRT-BASIC-MALFINI---134",
  description: "Högkvalitativ dam t-shirt basic malfini - 134 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Basic Malfini - 134 är en klassisk och bekväm t-shirt perfekt för både vardagsbruk och företagsprofilering.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/134_64_A-glowne-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/134_64_A-glowne-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/134_64_A-glowne-1620x1620.png"
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
  keywords: ["dam t-shirt basic malfini - 134", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Basic Malfini - 134 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt basic malfini - 134 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-basic-malfini/",
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
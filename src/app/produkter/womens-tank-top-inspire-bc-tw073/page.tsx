import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damlinne Inspire B&C - TW073 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damlinne Inspire B&C - TW073 kombinerar stil och komfort i ett linne som är både mångsidigt och hållbart. Tillverkat av 100% ekologisk ringspunnen bomull, erbjuder detta linne en mjuk och naturlig känsla mot huden. Den släta ytan gör det idealiskt för både tryck och broderi, vilket ger ett professionellt och elegant resultat varje gång. Linnet har en figurnära passform som smickrar alla kroppstyper, vilket gör det perfekt för både vardagsbruk och mer formella sammanhang. De breda axelbanden och den djupa ringningen ger en modern och feminin look. Dessutom är linnet designat för att hålla formen även efter många tvättar, vilket säkerställer dess långvariga användning. Med Damlinne Inspire B&C - TW073 får du inte bara ett plagg av hög kvalitet, utan också ett hållbart val. Den ekologiska bomullen är skonsam mot miljön, och produkten är certifierad enligt flera hållbarhetsstandarder. Välj detta linne för en snabb och effektiv leverans, och upplev kombinationen av stil, komfort och hållbarhet.",
  keywords: "damlinne inspire b&c - tw073, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damlinne Inspire B&C - TW073 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damlinne inspire b&c - tw073 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-tank-top-inspire-bc-tw073",
  name: "Damlinne Inspire B&C - TW073",
  articleNumber: "DAMLINNE-INSPIRE-BC---TW073",
  description: "Högkvalitativ damlinne inspire b&c - tw073 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damlinne Inspire B&C - TW073 är ett stilrent och bekvämt linne, perfekt för tryck och broderi med högkvalitativ finish.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW073_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW073_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW073_Black-glowne.jpg"
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
  keywords: ["damlinne inspire b&c - tw073", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damlinne Inspire B&C - TW073 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damlinne inspire b&c - tw073 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-tank-top-inspire-bc/",
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
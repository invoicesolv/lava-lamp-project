import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Exact 150 B&C - TU01T - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Exact 150 B&C - TU01T är en högkvalitativ t-shirt designad för både stil och funktionalitet. Tillverkad i 100% förkrympt ringpspunnen bomull, erbjuder den en mjuk och behaglig känsla mot huden, vilket gör den idealisk för dagligt bruk eller som en del av en arbetsuniform. Den släta ytan är perfekt för både digitalt och traditionellt tryck, samt broderi, vilket gör den till ett utmärkt val för företag och organisationer som vill anpassa sina kläder med logotyp eller budskap. T-shirten har en rak passform som passar de flesta kroppstyper och en rund halsringning som ger ett tidlöst utseende. Den dubbelsydda kragen och ärmsluten bidrar till plaggets hållbarhet, vilket säkerställer att det bibehåller sin form och färg även efter många tvättar. Det breda urvalet av färger gör det enkelt att matcha med andra plagg eller accessoarer, vilket ger en enhetlig och professionell look. B&C Exact 150 är också känd för sin motståndskraft mot krympning och vridning, vilket gör den till ett långvarigt tillskott i garderoben. Dess hållbara konstruktion och höga kvalitet säkerställer att den behåller sitt utseende och känsla över tid. Oavsett om du behöver en t-shirt för ett företagsevenemang, en sportaktivitet eller vardagsbruk, erbjuder denna modell både stil och funktionalitet. Med snabb leverans kan du förvänta dig att få dina anpassade t-shirts i tid för vilket tillfälle som helst.",
  keywords: "herr t-shirt exact 150 b&c - tu01t, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Exact 150 B&C - TU01T - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt exact 150 b&c - tu01t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-exact-150-bc-tu01t",
  name: "Herr T-shirt Exact 150 B&C - TU01T",
  articleNumber: "HERR-T-SHIRT-EXACT-150-BC---TU01T",
  description: "Högkvalitativ herr t-shirt exact 150 b&c - tu01t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Exact 150 B&C är en mångsidig och hållbar t-shirt perfekt för tryck och broderi, tillverkad i 100% bomull för maximal komfort.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTU01T_Azure-glowne-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTU01T_Azure-glowne-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTU01T_Azure-glowne-1.jpg"
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
  keywords: ["herr t-shirt exact 150 b&c - tu01t", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Exact 150 B&C - TU01T - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt exact 150 b&c - tu01t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-exact-150-bc/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "T-shirt Oversized Ärmlös Tee Bygg Ditt Varumärke - BY256 - Bulkprodukt för tryck eget | Tryckeget",
  description: "T-shirt Oversized Ärmlös Tee Bygg Ditt Varumärke - BY256 är det ultimata plagget för dem som vill skapa en personlig touch eller bygga sitt varumärke. Tillverkad av högkvalitativ bomull, erbjuder denna t-shirt en mjuk och skön känsla mot huden samtidigt som den är hållbar och lätt att underhålla. Den oversized designen ger en modern och avslappnad passform som passar perfekt för både vardagligt bruk och som en canvas för ditt kreativa uttryck. Med sitt ärmlösa snitt är den idealisk för sommardagar eller lager på lager under kallare månader. Materialet är optimerat för både tryck och broderi, vilket gör det lätt att lägga till din egen design eller logotyp med professionell finish. Färgerna håller sig fräscha och starka även efter flera tvättar, vilket säkerställer att ditt varumärke alltid ser sitt bästa ut. Oavsett om du är en ny entreprenör, ett etablerat varumärke eller bara någon som vill ha en personlig touch på sin garderob, erbjuder denna t-shirt både stil och funktionalitet. Med snabb leverans kan du snabbt komma igång med att visa upp ditt unika uttryck.",
  keywords: "t-shirt oversized ärmlös tee bygg ditt varumärke - by256, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "T-shirt Oversized Ärmlös Tee Bygg Ditt Varumärke - BY256 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ t-shirt oversized ärmlös tee bygg ditt varumärke - by256 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "t-shirt-oversized-sleeve-tee-build-your-brand-by256",
  name: "T-shirt Oversized Ärmlös Tee Bygg Ditt Varumärke - BY256",
  articleNumber: "T-SHIRT-OVERSIZED-RMLS-TEE-BYGG-DITT-VARUMRKE---BY256",
  description: "Högkvalitativ t-shirt oversized ärmlös tee bygg ditt varumärke - by256 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna oversized ärmlösa t-shirt är perfekt för att bygga ditt varumärke med tryck eller broderi. Komfortabel passform och högkvalitativt material garanterar hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/2435175-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/2435175-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/2435175-glowne.jpg"
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
  keywords: ["t-shirt oversized ärmlös tee bygg ditt varumärke - by256", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "T-shirt Oversized Ärmlös Tee Bygg Ditt Varumärke - BY256 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ t-shirt oversized ärmlös tee bygg ditt varumärke - by256 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/t-shirt-oversized-sleeve-tee/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Polo damskie Ren Ekologisk Russell - R-508F-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Polo damskie Ren Ekologisk Russell - R-508F-0 är en stilfull och hållbar pikétröja designad med miljön i åtanke. Tillverkad av 100% ekologisk bomull, erbjuder den en mjuk och bekväm känsla mot huden, samtidigt som den bidrar till en mer hållbar garderob. Denna polo är idealisk för tryck och broderi, vilket gör den perfekt för företag som vill profilera sig med en miljövänlig touch. Passformen är noga utformad för att ge en smickrande siluett utan att kompromissa med komforten. Kvaliteten på materialet säkerställer att polon behåller sin form och färg även efter många tvättar, vilket gör den till ett långvarigt tillskott i garderoben. Den professionella finishen, med subtila detaljer som ribbstickade muddar och krage, ger ett sofistikerat utseende som passar både till vardags och mer formella tillfällen. Snabb leverans gör det enkelt att få hem denna eleganta pikétröja, redo att användas eller anpassas efter dina behov.",
  keywords: "polo damskie ren ekologisk russell - r-508f-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Polo damskie Ren Ekologisk Russell - R-508F-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ polo damskie ren ekologisk russell - r-508f-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "polo-damskie-pure-organic-russell-r-508f-0",
  name: "Polo damskie Ren Ekologisk Russell - R-508F-0",
  description: "Högkvalitativ polo damskie ren ekologisk russell - r-508f-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Polo damskie Ren Ekologisk Russell är en elegant och miljövänlig pikétröja, perfekt för tryck och broderi.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z508F_Aqua-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z508F_Aqua-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z508F_Aqua-glowne.jpg"
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
  keywords: ["polo damskie ren ekologisk russell - r-508f-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Polo damskie Ren Ekologisk Russell - R-508F-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ polo damskie ren ekologisk russell - r-508f-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/polo-damskie-pure-organic/",
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
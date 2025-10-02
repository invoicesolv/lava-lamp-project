import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Oversize sweatshirt Bygg Ditt Varumärke - BY074 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Oversize sweatshirt BY074 från Bygg Ditt Varumärke är designad för dig som värdesätter både stil och komfort. Tillverkad av högkvalitativ bomull och polyesterblandning, erbjuder denna tröja en mjuk och behaglig känsla mot huden. Dess generösa passform gör den idealisk för en avslappnad look, samtidigt som den lämnar gott om utrymme för rörelsefrihet.  Denna sweatshirt är särskilt anpassad för tryck och broderi, vilket gör den till ett perfekt val för att bygga ditt varumärke. Den släta ytan säkerställer att dina logotyper och mönster ser skarpa och professionella ut. Denna tröja är inte bara ett plagg, utan en duk för din kreativitet och ditt budskap. Hållbarhet är en kärnfaktor i designen av BY074, vilket gör den till ett långsiktigt och pålitligt val. Den är tillverkad för att klara av många tvättar utan att tappa form eller färg, vilket garanterar att dina tryck och broderier behåller sin intensitet över tid. Med snabb leverans kan du börja anpassa din sweatshirt utan dröjsmål, vilket gör den till ett idealiskt val för event, företag eller personligt bruk.",
  keywords: "oversize sweatshirt bygg ditt varumärke - by074, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Oversize sweatshirt Bygg Ditt Varumärke - BY074 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ oversize sweatshirt bygg ditt varumärke - by074 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "oversize-sweatshirt-build-your-brand-by074",
  name: "Oversize sweatshirt Bygg Ditt Varumärke - BY074",
  articleNumber: "OVERSIZE-SWEATSHIRT-BYGG-DITT-VARUMRKE---BY074",
  description: "Högkvalitativ oversize sweatshirt bygg ditt varumärke - by074 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna oversize sweatshirt, BY074, från Bygg Ditt Varumärke erbjuder både stil och komfort. Perfekt för tryck och broderi, den är ett utmärkt val för att sätta din personliga prägel.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY074_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY074_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY074_Black-glowne.jpg"
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
  keywords: ["oversize sweatshirt bygg ditt varumärke - by074", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Oversize sweatshirt Bygg Ditt Varumärke - BY074 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ oversize sweatshirt bygg ditt varumärke - by074 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/oversize-sweatshirt/",
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
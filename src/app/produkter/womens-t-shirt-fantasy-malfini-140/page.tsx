import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Fantasy Malfini - 140 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Fantasy Malfini - 140 erbjuder en idealisk kombination av stil och komfort. Denna t-shirt är tillverkad av 100% högkvalitativ bomull, vilket garanterar en mjuk och bekväm känsla mot huden. Dessutom är materialet utmärkt för både tryck och broderi, vilket gör det enkelt att anpassa tröjan efter dina behov, vare sig det är för företagslogotyper, personliga motiv eller andra kreativa idéer. Passformen på denna t-shirt är designad för att smickra den kvinnliga figuren, med en lätt figursydd skärning som ger en elegant silhuett utan att kompromissa på rörelsefriheten. Sömmen är noggrant bearbetad för att säkerställa en professionell finish, vilket gör denna t-shirt lika lämplig för vardagsbruk som för mer formella tillfällen. Hållbarhet är i fokus med Dam T-shirt Fantasy Malfini - 140. Materialet är noggrant utvalt för att klara av både frekvent användning och upprepade tvättar utan att förlora sin form eller färg. Med snabb leverans kan du vara säker på att få din t-shirt i tid för ditt nästa event eller projekt. Oavsett om du bär den som den är eller anpassar den med ditt eget tryck, kommer denna t-shirt att bli ett uppskattat tillskott i din garderob.",
  keywords: "dam t-shirt fantasy malfini - 140, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Fantasy Malfini - 140 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt fantasy malfini - 140 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-fantasy-malfini-140",
  name: "Dam T-shirt Fantasy Malfini - 140",
  articleNumber: "DAM-T-SHIRT-FANTASY-MALFINI---140",
  description: "Högkvalitativ dam t-shirt fantasy malfini - 140 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Fantasy Malfini - 140 är en stilfull och bekväm t-shirt perfekt för tryck och broderi, tillverkad av högkvalitativ bomull för optimal komfort.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/140_91_a_xl-1.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/140_91_a_xl-1.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/140_91_a_xl-1.png"
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
  keywords: ["dam t-shirt fantasy malfini - 140", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Fantasy Malfini - 140 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt fantasy malfini - 140 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-fantasy/",
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
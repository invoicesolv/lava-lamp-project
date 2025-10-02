import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas piké i bomull Malfini - 213 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damernas piké i bomull Malfini - 213 är en kvalitetsprodukt designad för den moderna kvinnan som söker både stil och komfort. Tillverkad av högkvalitativ bomull, erbjuder denna piké en mjuk och behaglig känsla mot huden, vilket gör den perfekt för dagligt bruk. Den klassiska pikékragen och knappslån ger en tidlös och professionell look, vilket gör den lämplig för både formella och informella tillfällen. Materialet är särskilt utvalt för att säkerställa bästa möjliga resultat vid tryck och broderi. Oavsett om du vill lägga till en företagslogotyp eller ett personligt märke, kommer det släta bomullstyget att säkerställa en skarp och hållbar finish. Dessutom erbjuder pikén en utmärkt färgäkthet, vilket betyder att färgerna förblir levande även efter flera tvättar. Passformen är noggrant designad för att ge en feminin siluett samtidigt som den garanterar maximal rörelsefrihet. Den hållbara konstruktionen säkerställer att pikén behåller sin form och kvalitet över tid, vilket gör den till en långsiktig investering i din garderob. Med snabb leverans kan du snart njuta av denna stilrena och funktionella piké.",
  keywords: "damernas piké i bomull malfini - 213, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas piké i bomull Malfini - 213 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas piké i bomull malfini - 213 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-cotton-malfini-213",
  name: "Damernas piké i bomull Malfini - 213",
  articleNumber: "DAMERNAS-PIK-I-BOMULL-MALFINI---213",
  description: "Högkvalitativ damernas piké i bomull malfini - 213 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas piké i bomull Malfini - 213 erbjuder en perfekt kombination av stil och komfort, idealisk för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/213_12_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/213_12_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/213_12_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg"
    ]
  },
  category: "Kläder",
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
  keywords: ["damernas piké i bomull malfini - 213", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas piké i bomull Malfini - 213 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas piké i bomull malfini - 213 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-cotton/",
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
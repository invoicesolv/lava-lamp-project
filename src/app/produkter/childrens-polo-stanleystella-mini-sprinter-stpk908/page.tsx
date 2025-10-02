import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barnpolo Stanley&Stella Mini Sprinter - STPK908 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Mini Sprinter är en högkvalitativ barnpolo som kombinerar stil och funktionalitet. Tillverkad av 100% ekologisk bomull, erbjuder denna tröja en mjuk och hudvänlig känsla som är idealisk för barnens känsliga hud. Materialet är speciellt utformat för att hålla formen och färgen även efter många tvättar, vilket gör det till ett hållbart val för vardagsbruk. Denna polo är perfekt för anpassning med både tryck och broderi, vilket gör den till ett utmärkt val för skoluniformer, sportlag eller skräddarsydda presenter. Den släta ytan ger en perfekt bas för detaljerat tryck och skarpa broderier, vilket säkerställer en professionell finish varje gång. Passformen är noggrant designad för barn, med en bekväm krage och ribbade muddar som ger extra komfort och stil. Mini Sprinter är inte bara en tröja, det är en del av barnens garderob som är redo att bäras i alla sammanhang. Och med snabb leverans kan du räkna med att få din beställning i tid, varje gång.",
  keywords: "barnpolo stanley&stella mini sprinter - stpk908, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barnpolo Stanley&Stella Mini Sprinter - STPK908 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barnpolo stanley&stella mini sprinter - stpk908 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-polo-stanleystella-mini-sprinter-stpk908",
  name: "Barnpolo Stanley&Stella Mini Sprinter - STPK908",
  articleNumber: "BARNPOLO-STANLEYSTELLA-MINI-SPRINTER---STPK908",
  description: "Högkvalitativ barnpolo stanley&stella mini sprinter - stpk908 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barnpolo Stanley&Stella Mini Sprinter är en slitstark och bekväm tröja, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Mini-Sprinter.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Mini-Sprinter.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Mini-Sprinter.jpg"
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
  keywords: ["barnpolo stanley&stella mini sprinter - stpk908", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barnpolo Stanley&Stella Mini Sprinter - STPK908 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barnpolo stanley&stella mini sprinter - stpk908 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-polo-stanleystella-mini-sprinter/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barnpolo Pique Malfini - 222 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barnpolo Pique Malfini - 222 är tillverkad av högkvalitativt pique-tyg som kombinerar hållbarhet med en mjuk och behaglig känsla mot huden. Materialet är gjort av en blandning av bomull och polyester som inte bara ger en förstklassig känsla utan också säkerställer att tröjan håller formen och färgen tvätt efter tvätt. Detta gör den idealisk för både tryck och broderi, vilket gör den till ett utmärkt val för skoluniformer, lagkläder eller personliga uttryck. Denna pikétröja är designad för att ge en bekväm och avslappnad passform, vilket gör den perfekt för barnens aktiva livsstil. Den klassiska kragen och knappraden ger ett stilrent intryck, medan den ribbade avslutningen vid ärmarna bidrar till tröjans form och passform. Tröjan finns i flera färger, vilket ger möjligheten att välja efter smak eller för att matcha specifika färgteman vid tryck. Barnpolo Pique Malfini - 222 är skapad med tanke på långvarig användning och är en idealisk plattform för kreativa tryck och broderier. De högkvalitativa materialen och den professionella finishen garanterar att varje design ser skarp och levande ut. Leveransen är snabb och effektiv, så att du kan ha din personliga eller företagsbeställning redo på nolltid.",
  keywords: "barnpolo pique malfini - 222, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barnpolo Pique Malfini - 222 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barnpolo pique malfini - 222 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-polo-pique-malfini-222",
  name: "Barnpolo Pique Malfini - 222",
  articleNumber: "BARNPOLO-PIQUE-MALFINI---222",
  description: "Högkvalitativ barnpolo pique malfini - 222 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barnpolo Pique Malfini - 222 är en stilren och bekväm pikétröja för barn, perfekt för både vardag och tryck.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/222_01_a_xl_glowne-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/222_01_a_xl_glowne-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/222_01_a_xl_glowne-1620x1620.png"
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
  keywords: ["barnpolo pique malfini - 222", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barnpolo Pique Malfini - 222 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barnpolo pique malfini - 222 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-polo-pique/",
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
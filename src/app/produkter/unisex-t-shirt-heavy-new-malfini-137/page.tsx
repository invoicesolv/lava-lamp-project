import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Unisex T-shirt Heavy New Malfini - 137 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Unisex T-shirt Heavy New Malfini - 137 är designad för både stil och funktionalitet. Tillverkad av 100% bomull, erbjuder denna t-shirt en mjuk och behaglig känsla mot huden samtidigt som den är tillräckligt robust för att bibehålla formen genom många tvättar. Dess tjockare tyg gör den särskilt lämplig för både tryck och broderi, vilket ger en professionell finish som håller över tid. Denna t-shirt har en klassisk passform som passar de flesta kroppstyper, vilket gör den till ett mångsidigt plagg i garderoben. Den ribbade kragen och dubbelsömmarna på ärmar och fållar förstärker hållbarheten och ger t-shirten en stilren look som passar både vardagligt och professionellt bruk. För dem som söker en pålitlig baströja för företagsuniformer, evenemang eller personliga projekt, är Unisex T-shirt Heavy New Malfini ett utmärkt val. Dess högkvalitativa material och hållbara konstruktion garanterar att den behåller sitt utseende och känsla även efter frekvent användning. Dessutom erbjuder vi snabb leverans, så du kan få dina plagg i tid för ditt nästa projekt.",
  keywords: "unisex t-shirt heavy new malfini - 137, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Unisex T-shirt Heavy New Malfini - 137 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ unisex t-shirt heavy new malfini - 137 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unisex-t-shirt-heavy-new-malfini-137",
  name: "Unisex T-shirt Heavy New Malfini - 137",
  articleNumber: "UNISEX-T-SHIRT-HEAVY-NEW-MALFINI---137",
  description: "Högkvalitativ unisex t-shirt heavy new malfini - 137 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Unisex T-shirt Heavy New Malfini är en högkvalitativ t-shirt perfekt för tryck och broderi, tillverkad i slitstarkt material för långvarig komfort.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/137_01_a_xl-1-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/137_01_a_xl-1-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/137_01_a_xl-1-1620x1620.png"
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
  keywords: ["unisex t-shirt heavy new malfini - 137", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Unisex T-shirt Heavy New Malfini - 137 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ unisex t-shirt heavy new malfini - 137 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unisex-t-shirt-heavy-new-malfini/",
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
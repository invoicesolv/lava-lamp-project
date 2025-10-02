import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Basic Malfini - 129 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Basic Malfini - 129 är en mångsidig och stilren t-shirt som är idealisk för både vardagligt bruk och som bas för dina personliga tryck och broderier. Tillverkad av 100% bomull, erbjuder denna t-shirt en mjuk och behaglig känsla mot huden, vilket gör den perfekt för hela dagen användning. Denna t-shirt har en klassisk passform som ger en avslappnad look samtidigt som den ger gott om utrymme för rörelse. Den ribbade kragen och förstärkta axelsömmarna säkerställer en hållbar struktur som står emot tidens tand, även efter många tvättar. Dessutom gör den släta ytan den extra lämpad för både tryck och broderi, vilket ger en professionell finish varje gång. Perfekt för företag som vill profilera sitt varumärke eller för individuella kreatörer som söker en pålitlig bas för sina designer. Herr T-shirt Basic Malfini - 129 erbjuder snabb leverans och är ett utmärkt val för alla som värdesätter kvalitet och funktionalitet.",
  keywords: "herr t-shirt basic malfini - 129, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Basic Malfini - 129 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt basic malfini - 129 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-basic-malfini-129",
  name: "Herr T-shirt Basic Malfini - 129",
  articleNumber: "HERR-T-SHIRT-BASIC-MALFINI---129",
  description: "Högkvalitativ herr t-shirt basic malfini - 129 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Basic Malfini - 129 är den perfekta t-shirten för tryck och broderi, tillverkad av högkvalitativ bomull för maximal komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/Malfini_Basic_glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/Malfini_Basic_glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/Malfini_Basic_glowne.jpg"
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
  keywords: ["herr t-shirt basic malfini - 129", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Basic Malfini - 129 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt basic malfini - 129 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-basic-malfini/",
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
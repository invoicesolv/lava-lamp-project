import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Original 5 Panel Keps Beechfield - B10 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Beechfield Original 5 Panel Keps B10 är en stilren och mångsidig keps, perfekt för både vardagligt bruk och promotion. Tillverkad av 100% bomullstwill, erbjuder denna keps både komfort och hållbarhet samtidigt som den är lätt och andas. Den fempanelade designen ger en stor yta som är idealisk för tryck och broderi, vilket gör den till ett populärt val för företag, evenemang och merchandisekollektioner. Kepsens passform kan enkelt justeras med kardborrebandet i nacken, vilket säkerställer att den sitter bekvämt på alla huvudstorlekar. Kvaliteten på materialet gör att den bevarar sin form och färg även efter många tvättar, vilket garanterar långvarig användning och utmärkt hållbarhet. Med sin professionella finish och snabba leverans är Beechfield B10 ett optimalt val för dig som söker en keps som kombinerar stil, funktion och möjligheten till anpassning med tryck eller broderi. Oavsett om du vill använda den som en del av ditt företagsuniform eller som en personlig accessoar, kommer denna keps leva upp till dina förväntningar.",
  keywords: "original 5 panel keps beechfield - b10, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Original 5 Panel Keps Beechfield - B10 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ original 5 panel keps beechfield - b10 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cap-original-5-panel-cap-beechfield-b10",
  name: "Original 5 Panel Keps Beechfield - B10",
  articleNumber: "ORIGINAL-5-PANEL-KEPS-BEECHFIELD---B10",
  description: "Högkvalitativ original 5 panel keps beechfield - b10 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Original 5 Panel Keps Beechfield B10 är en perfekt keps för tryck och broderi, tillverkad i högkvalitativt material för en professionell finish.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/CB10_Light-Grey-dlowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/CB10_Light-Grey-dlowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/CB10_Light-Grey-dlowne.jpg"
    ]
  },
  category: "Kepsar",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["original 5 panel keps beechfield - b10", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Original 5 Panel Keps Beechfield - B10 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ original 5 panel keps beechfield - b10 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cap-original-5-panel-cap-beechfield/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Öppen, huvlös sweatshirt för män, Adventure Malfini - 407 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Adventure Malfini 407 erbjuder en öppen, huvlös sweatshirt designad för män som söker både stil och komfort. Tillverkad av högkvalitativt material, kombinerar denna tröja modern estetik med hållbarhet. Den är gjord av en blandning av bomull och polyester vilket ger en mjuk och behaglig känsla mot huden samtidigt som den är slitstark och lättskött. Den här sweatshirten är idealisk för både tryck och broderi, vilket gör den till ett utmärkt val för företag och föreningar som vill anpassa sina kläder med logotyper eller unika mönster. Den öppna designen utan huva ger en ren yta för kreativt uttryck och säkerställer att dina tryck eller broderier syns tydligt. Passformen är avslappnad och bekväm, vilket gör den perfekt för vardagsbruk eller som en del av en lager-på-lager look under kallare månader. Adventure Malfini 407 har en professionell finish och erbjuder både stil och funktionalitet. Dessutom är snabb leverans garanterad, så du kan njuta av din nya favorittröja utan dröjsmål.",
  keywords: "öppen, huvlös sweatshirt för män, adventure malfini - 407, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Öppen, huvlös sweatshirt för män, Adventure Malfini - 407 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ öppen, huvlös sweatshirt för män, adventure malfini - 407 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unbuttoned-hoodless-sweatshirt-for-men-adventure-malfini-407",
  name: "Öppen, huvlös sweatshirt för män, Adventure Malfini - 407",
  articleNumber: "PPEN-HUVLS-SWEATSHIRT-FR-MN-ADVENTURE-MALFINI---407",
  description: "Högkvalitativ öppen, huvlös sweatshirt för män, adventure malfini - 407 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Adventure Malfini 407 är en stilren och bekväm öppen, huvlös sweatshirt för män, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/407_02_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/407_02_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/407_02_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["öppen, huvlös sweatshirt för män, adventure malfini - 407", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Öppen, huvlös sweatshirt för män, Adventure Malfini - 407 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ öppen, huvlös sweatshirt för män, adventure malfini - 407 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unbuttoned-hoodless-sweatshirt-for-men-adventure-malfini/",
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
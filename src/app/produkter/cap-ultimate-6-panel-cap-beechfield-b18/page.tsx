import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Keps Ultimate 6 Panel Keps Beechfield - B18 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Beechfield's Ultimate 6 Panel Keps B18 är en tidlös klassiker inom kepskategorin, designad med precision och omsorg för detaljer. Tillverkad av slitstarkt bomullstwill, erbjuder denna keps både komfort och hållbarhet, vilket gör den idealisk för dagligt bruk. Den strukturerade 6-panelkonstruktionen ger en perfekt passform och form som behåller sin stil över tid.  Kepsen är särskilt utvecklad för att underlätta tryck och broderi, vilket ger en professionell finish som lyfter ditt varumärke eller personliga design. Den breda frontpanelen är perfekt för att visa upp logotyper eller personliga budskap med klarhet och stil. Justerbar rem på baksidan säkerställer en individuell passform för alla huvudstorlekar, vilket ökar komforten under hela dagen. Med sitt slitstarka material och förstärkta sömmar är Beechfield B18 en keps som är byggd för att hålla. Den står emot dagligt slitage och behåller sin form och färg även efter många tvättar. Oavsett om du söker en vardaglig accessoar eller ett professionellt reklamalternativ, erbjuder denna keps snabb leverans och kvalitet som lever upp till förväntningarna.",
  keywords: "keps ultimate 6 panel keps beechfield - b18, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Keps Ultimate 6 Panel Keps Beechfield - B18 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ keps ultimate 6 panel keps beechfield - b18 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cap-ultimate-6-panel-cap-beechfield-b18",
  name: "Keps Ultimate 6 Panel Keps Beechfield - B18",
  description: "Högkvalitativ keps ultimate 6 panel keps beechfield - b18 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Den ultimata 6-panelkepsen från Beechfield, perfekt för tryck och broderi med högkvalitativ finish.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/CB18_Bottle-Green-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/CB18_Bottle-Green-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/CB18_Bottle-Green-glowne.jpg"
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
  keywords: ["keps ultimate 6 panel keps beechfield - b18", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Keps Ultimate 6 Panel Keps Beechfield - B18 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ keps ultimate 6 panel keps beechfield - b18 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cap-ultimate-6-panel-cap-beechfield/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dragkedjetröja utan huva, herr Russell - Z267 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dragkedjetröjan Z267 från Russell är designad för att erbjuda både stil och funktionalitet. Tillverkad av en mjuk och slitstark bomulls- och polyestermix, ger denna tröja en perfekt yta för tryck och broderi, vilket gör den idealisk för företag och skolor som vill profilera sig. Med sin bekväma passform och klassiska design är tröjan lämplig för både avslappnade och professionella miljöer. Den kvalitativa konstruktionen säkerställer att plagget behåller sin form och färg även efter många tvättar, vilket gör den till ett hållbart val för dagligt bruk. Dragkedjan framtill ger enkel av- och påtagning, samt möjligheten att justera värme och ventilation efter behov. Den professionella finishen på tröjan återspeglas i de noggrant sydda sömmarna och det subtila märkets broderi som ger en diskret men elegant touch. Med snabb leverans kan denna tröja snabbt bli en del av din garderob eller ditt företags profilkläder.",
  keywords: "dragkedjetröja utan huva, herr russell - z267, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dragkedjetröja utan huva, herr Russell - Z267 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dragkedjetröja utan huva, herr russell - z267 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "zip-up-sweatshirt-hoodless-mens-russell-z267",
  name: "Dragkedjetröja utan huva, herr Russell - Z267",
  articleNumber: "DRAGKEDJETRJA-UTAN-HUVA-HERR-RUSSELL---Z267",
  description: "Högkvalitativ dragkedjetröja utan huva, herr russell - z267 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna dragkedjetröja utan huva för herrar från Russell är perfekt för tryck och broderi, med en bekväm passform och högkvalitativt material.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z267M_French-Navy-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z267M_French-Navy-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z267M_French-Navy-1.jpg"
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
  keywords: ["dragkedjetröja utan huva, herr russell - z267", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dragkedjetröja utan huva, herr Russell - Z267 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dragkedjetröja utan huva, herr russell - z267 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/zip-up-sweatshirt-hoodless-mens/",
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
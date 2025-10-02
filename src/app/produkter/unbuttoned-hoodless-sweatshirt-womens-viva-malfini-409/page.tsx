import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Ofodrad, huvlös sweatshirt, dam Viva Malfini - 409 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Viva Malfini 409 är en ofodrad, huvlös sweatshirt särskilt utformad för damer som söker stil och komfort i ett. Tillverkad av högkvalitativt material som är både mjukt och slitstarkt, ger denna sweatshirt en perfekt bas för att applicera tryck eller broderi. Dess enkla design gör den idealisk för anpassning, vilket gör den till ett populärt val för företag och organisationer som vill profilera sitt varumärke. Passformen är utformad för att smickra den kvinnliga figuren, vilket ger en bekväm och modern look. Materialet är noggrant utvalt för att garantera att plagget bibehåller sin form och färg även efter upprepad tvätt och användning. Den avskalade designen utan huva gör det enkelt att bära plagget under andra jackor eller ytterplagg, vilket gör den till ett mångsidigt tillskott i garderoben. Förutom dess estetiska fördelar är Viva Malfini 409 också ett hållbart alternativ. Plagget är tillverkat enligt höga standarder för att säkerställa minimal miljöpåverkan. Snabb leverans och professionell kundservice gör det enkelt att beställa denna sweatshirt för personlig eller företagsanvändning, vilket gör den till en favorit bland våra kunder.",
  keywords: "ofodrad, huvlös sweatshirt, dam viva malfini - 409, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Ofodrad, huvlös sweatshirt, dam Viva Malfini - 409 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ ofodrad, huvlös sweatshirt, dam viva malfini - 409 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unbuttoned-hoodless-sweatshirt-womens-viva-malfini-409",
  name: "Ofodrad, huvlös sweatshirt, dam Viva Malfini - 409",
  articleNumber: "OFODRAD-HUVLS-SWEATSHIRT-DAM-VIVA-MALFINI---409",
  description: "Högkvalitativ ofodrad, huvlös sweatshirt, dam viva malfini - 409 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Den ofodrade, huvlösa dam-sweatshirten Viva Malfini erbjuder en stilren design och hög komfort, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/409_02_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/409_02_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/409_02_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["ofodrad, huvlös sweatshirt, dam viva malfini - 409", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Ofodrad, huvlös sweatshirt, dam Viva Malfini - 409 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ ofodrad, huvlös sweatshirt, dam viva malfini - 409 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unbuttoned-hoodless-sweatshirt-womens-viva-malfini/",
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
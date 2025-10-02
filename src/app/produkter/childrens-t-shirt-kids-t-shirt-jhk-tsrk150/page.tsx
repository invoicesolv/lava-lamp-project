import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Kids´ T-Shirt JHK - TSRK150 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Kids´ T-Shirt JHK TSRK150 är en idealisk t-shirt för barn som kombinerar komfort och stil. Tillverkad av 100% högkvalitativ bomull, erbjuder denna t-shirt en mjuk och behaglig känsla som är skonsam mot barnens hud. Materialet är inte bara mjukt utan även slitstarkt, vilket gör den perfekt för daglig användning och lek. Denna t-shirt är utmärkt för tryck och broderi, tack vare dess släta yta och hållbara material. Oavsett om du vill anpassa den med färgglada tryck eller subtila broderier, kommer resultatet alltid att bli professionellt och långvarigt. Passformen är designad för att ge maximal rörelsefrihet, vilket gör den idealisk för aktiva barn. T-shirtens hållbarhet säkerställer att den behåller sin form och färg även efter flera tvättar. Dessutom är den lättskött och snabbtorkande, vilket gör den till ett praktiskt val för föräldrar. Med snabb leverans kan du få denna t-shirt i tid för alla tillfällen, oavsett om det är för skolaktiviteter, sportevenemang eller bara vardagsbruk.",
  keywords: "barn t-shirt kids´ t-shirt jhk - tsrk150, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Kids´ T-Shirt JHK - TSRK150 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt kids´ t-shirt jhk - tsrk150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-kids-t-shirt-jhk-tsrk150",
  name: "Barn T-shirt Kids´ T-Shirt JHK - TSRK150",
  articleNumber: "BARN-T-SHIRT-KIDS-T-SHIRT-JHK---TSRK150",
  description: "Högkvalitativ barn t-shirt kids´ t-shirt jhk - tsrk150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Kids´ T-Shirt JHK TSRK150 är en bekväm och hållbar t-shirt perfekt för tryck och broderi, tillverkad av högkvalitativ bomull.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/JHK150K_Royal-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK150K_Royal-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK150K_Royal-Blue-glowne.jpg"
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
  keywords: ["barn t-shirt kids´ t-shirt jhk - tsrk150", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Kids´ T-Shirt JHK - TSRK150 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt kids´ t-shirt jhk - tsrk150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-kids-t-shirt-jhk/",
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
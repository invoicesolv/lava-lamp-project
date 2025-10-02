import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas pikétröja Single J. Malfini - 223 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damernas pikétröja Single J. Malfini - 223 kombinerar stil och funktionalitet, vilket gör den till ett utmärkt val för både vardag och arbete. Tillverkad av högkvalitativ bomullspiké, erbjuder tröjan en mjuk och skön känsla mot huden, samtidigt som den är motståndskraftig mot slitage och deformation efter tvätt. Denna pikétröja är särskilt designad för att passa perfekt och framhäva en elegant siluett, vilket gör den både bekväm och smickrande. Med sin släta yta och robusta tyg är den idealisk för anpassning med tryck och broderi, vilket gör det enkelt att skapa en personlig eller företagsmässig look. Den professionella finishen säkerställer att alla detaljer ser skarpa och klara ut, vilket gör tröjan till ett utmärkt val för företag som vill profilera sitt varumärke. Pikétröjan är också slitstark och kommer att stå emot många tvättar utan att förlora sin form eller färg. Den är ett praktiskt val för dem som söker en kombination av stil, komfort och hållbarhet. Med snabb leverans kan du snabbt få denna stiliga och funktionella pikétröja i din garderob eller butik.",
  keywords: "damernas pikétröja single j. malfini - 223, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas pikétröja Single J. Malfini - 223 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas pikétröja single j. malfini - 223 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-single-j-malfini-223",
  name: "Damernas pikétröja Single J. Malfini - 223",
  articleNumber: "DAMERNAS-PIKTRJA-SINGLE-J-MALFINI---223",
  description: "Högkvalitativ damernas pikétröja single j. malfini - 223 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas pikétröja Single J. Malfini är en elegant och bekväm tröja, perfekt för både tryck och broderi. Dess hållbara material och professionella finish gör den idealisk för alla tillfällen.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/223_05_a_xl-glowne-2-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/223_05_a_xl-glowne-2-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/223_05_a_xl-glowne-2-1620x1620.png"
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
  keywords: ["damernas pikétröja single j. malfini - 223", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas pikétröja Single J. Malfini - 223 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas pikétröja single j. malfini - 223 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-single-j/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Keps Rap 5p Malfini - 301 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Keps Rap 5p Malfini - 301 är designad för både stil och funktionalitet. Den är tillverkad av bomull och polyester, vilket ger en mjuk och bekväm passform samtidigt som den erbjuder hållbarhet och andningsförmåga. Den fempanelsdesignen gör den idealisk för anpassade tryck och broderier, vilket ger en professionell finish som gör det möjligt att skräddarsy kepsen efter dina behov. Med en justerbar stängning baktill erbjuder denna keps en flexibel passform för alla huvudstorlekar, vilket säkerställer komfort hela dagen. Materialvalen gör den robust nog för daglig användning samtidigt som den bibehåller sitt snygga utseende. Denna keps är perfekt för företag som vill profilera sitt märke eller för evenemang där du vill erbjuda deltagarna en minnesvärd och personlig souvenir. Tack vare den snabba leveranstiden kan du snabbt och enkelt få dina anpassade kepsar, oavsett om det är för ett litet event eller en större kampanj.",
  keywords: "keps rap 5p malfini - 301, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Keps Rap 5p Malfini - 301 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ keps rap 5p malfini - 301 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cap-rap-5p-malfini-301",
  name: "Keps Rap 5p Malfini - 301",
  description: "Högkvalitativ keps rap 5p malfini - 301 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Keps Rap 5p Malfini - 301 är en stilren och bekväm keps, perfekt för tryck och broderi. Tillverkad av högkvalitativa material för optimal hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/301_09_c_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/301_09_c_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/301_09_c_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["keps rap 5p malfini - 301", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Keps Rap 5p Malfini - 301 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ keps rap 5p malfini - 301 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cap-rap-5p-malfini/",
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
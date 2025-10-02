import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Imperial v-ringning SOL's - 02941 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Denna Dam T-shirt Imperial med v-ringning från SOL's kombinerar stil och funktionalitet i ett plagg som är utmärkt för både vardagsbruk och speciella tillfällen. Tillverkad av mjuk och slitstark bomull, garanterar den både komfort och hållbarhet. Materialet är noggrant utvalt för att säkerställa att tryck och broderi fäster på ett professionellt och långvarigt sätt, vilket gör den idealisk för företag, föreningar eller personliga projekt. Designad med en modern v-ringning ger den en feminin touch samtidigt som den upprätthåller en klassisk och tidlös stil. Passformen är noggrant utformad för att ge en smickrande silhuett utan att kompromissa med rörelsefriheten, vilket gör den bekväm att bära hela dagen. Denna T-shirt är inte bara en modeartikel utan också en investering i kvalitet. Dess noggrant sydda sömmar och professionella finish säkerställer att den håller sig snygg tvätt efter tvätt. Med snabb leverans är det enkelt att få denna mångsidiga och anpassningsbara T-shirt direkt till din dörr, redo att anpassas efter din unika stil eller varumärkets behov.",
  keywords: "dam t-shirt imperial v-ringning sol's - 02941, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Imperial v-ringning SOL's - 02941 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt imperial v-ringning sol's - 02941 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-imperial-v-neck-sols-02941",
  name: "Dam T-shirt Imperial v-ringning SOL's - 02941",
  articleNumber: "DAM-T-SHIRT-IMPERIAL-V-RINGNING-SOLS---02941",
  description: "Högkvalitativ dam t-shirt imperial v-ringning sol's - 02941 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Imperial med v-ringning från SOL's är det perfekta valet för personlig anpassning genom tryck och broderi, tillverkad av högkvalitativt material för optimal komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L02941_Grey-Melange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L02941_Grey-Melange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L02941_Grey-Melange-glowne.jpg"
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
  keywords: ["dam t-shirt imperial v-ringning sol's - 02941", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Imperial v-ringning SOL's - 02941 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt imperial v-ringning sol's - 02941 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-imperial-v-neck-sols/",
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
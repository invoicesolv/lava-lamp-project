import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrpolo Pique Malfini - 203 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrpolo Pique Malfini - 203 är tillverkad av en premium blandning av bomull och polyester, vilket ger en bekväm och hållbar finish. Materialet är speciellt framtaget för att ge en mjuk känsla mot huden samtidigt som det bevarar formen och färgen även efter många tvättar. Med sin klassiska pikéstil och stilrena design är denna tröja ett utmärkt val för både fritid och mer formella tillfällen. Denna polo är idealisk för att anpassas med tryck eller broderi, vilket gör den till ett perfekt alternativ för företagsevenemang eller sportlag. Det högkvalitativa tyget säkerställer att dina anpassade mönster framträder klart och tydligt, med en professionell och stilren finish. Passformen är skräddarsydd för att ge komfort utan att kompromissa på stil. Den ribbstickade kragen och knappslån ger en klassisk touch, medan den andningsbara materialblandningen ser till att du håller dig sval och bekväm oavsett aktivitet. Med Herrpolo Pique Malfini - 203 får du en tröja som kombinerar funktionalitet med tidlös stil, och som levereras snabbt för att passa dina behov.",
  keywords: "herrpolo pique malfini - 203, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrpolo Pique Malfini - 203 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrpolo pique malfini - 203 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-pique-malfini-203",
  name: "Herrpolo Pique Malfini - 203",
  articleNumber: "HERRPOLO-PIQUE-MALFINI---203",
  description: "Högkvalitativ herrpolo pique malfini - 203 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrpolo Pique Malfini - 203 är en elegant och mångsidig pikétröja av hög kvalitet, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/203_01_a_xl-glowne-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/203_01_a_xl-glowne-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/203_01_a_xl-glowne-1620x1620.png"
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
  keywords: ["herrpolo pique malfini - 203", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrpolo Pique Malfini - 203 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrpolo pique malfini - 203 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-pique/",
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
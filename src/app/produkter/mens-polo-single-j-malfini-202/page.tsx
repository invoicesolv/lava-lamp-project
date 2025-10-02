import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrpolo Single J. Malfini - 202 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrpolo Single från J. Malfini är designad för att ge en elegant och professionell look. Tillverkad av högkvalitativ bomull som erbjuder en mjuk och bekväm känsla, är denna polo perfekt för alla tillfällen. Det slitstarka materialet garanterar att tröjan behåller sin form och färg även efter många tvättar, vilket gör den till ett hållbart val för din garderob. Denna polo är särskilt lämplig för tryck och broderi, vilket gör den idealisk för företagsprofilering eller personlig anpassning. Den släta ytan ger en utmärkt bas för tydliga och skarpa motiv, medan den klassiska designen säkerställer att din logotyp eller design verkligen står ut. Med en perfekt passform som varken är för snäv eller för lös, erbjuder Herrpolo Single både stil och komfort. De noggrant utformade detaljerna, såsom knapparna och kragen, ger en professionell finish som passar för både formella och informella sammanhang. Dessutom erbjuder vi snabb leverans för att säkerställa att du får din produkt i tid.",
  keywords: "herrpolo single j. malfini - 202, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrpolo Single J. Malfini - 202 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrpolo single j. malfini - 202 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-single-j-malfini-202",
  name: "Herrpolo Single J. Malfini - 202",
  articleNumber: "HERRPOLO-SINGLE-J-MALFINI---202",
  description: "Högkvalitativ herrpolo single j. malfini - 202 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrpolo Single från J. Malfini kombinerar stil med komfort, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/202_05_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/202_05_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/202_05_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["herrpolo single j. malfini - 202", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrpolo Single J. Malfini - 202 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrpolo single j. malfini - 202 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-single-j/",
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
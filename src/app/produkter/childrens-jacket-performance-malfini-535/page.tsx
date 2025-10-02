import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barnjacka Prestanda Malfini - 535 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barnjacka Prestanda Malfini 535 kombinerar funktionalitet och stil, vilket gör den till ett utmärkt val för aktiva barn. Tillverkad av högkvalitativt material, erbjuder denna jacka både hållbarhet och komfort, vilket gör den perfekt för daglig användning. Dess slitstarka yttre skyddar mot väder och vind, medan den mjuka insidan garanterar maximal komfort hela dagen. Denna jacka är designad med tanke på tryck och broderi, vilket gör den till ett utmärkt val för skolor, idrottslag eller speciella evenemang. Materialet ger en jämn och professionell yta för att säkerställa att ditt tryck eller broderi ser så bra ut som möjligt. Passformen är noggrant utformad för att ge barnen full rörelsefrihet, vilket gör den idealisk för lek och sportaktiviteter. Den robusta konstruktionen säkerställer att jackan håller sin form och funktion, även efter upprepad användning och tvätt. Med snabb leverans kan du vara säker på att få denna jacka i tid för dina behov.",
  keywords: "barnjacka prestanda malfini - 535, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barnjacka Prestanda Malfini - 535 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barnjacka prestanda malfini - 535 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-jacket-performance-malfini-535",
  name: "Barnjacka Prestanda Malfini - 535",
  articleNumber: "BARNJACKA-PRESTANDA-MALFINI---535",
  description: "Högkvalitativ barnjacka prestanda malfini - 535 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barnjacka Prestanda Malfini 535 är en slitstark och bekväm jacka, perfekt för barnens alla äventyr, och idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/535_36_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowny.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/535_36_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowny.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/535_36_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowny.jpg"
    ]
  },
  category: "Jackor",
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
  keywords: ["barnjacka prestanda malfini - 535", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barnjacka Prestanda Malfini - 535 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barnjacka prestanda malfini - 535 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-jacket-performance/",
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
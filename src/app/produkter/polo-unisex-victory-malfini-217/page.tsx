import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Unisex-pikétröja Victory Malfini - 217 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "unisex-pikétröja victory malfini - 217, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Unisex-pikétröja Victory Malfini - 217 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ unisex-pikétröja victory malfini - 217 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "polo-unisex-victory-malfini-217",
  name: "Unisex-pikétröja Victory Malfini - 217",
  articleNumber: "UNISEX-PIKTRJA-VICTORY-MALFINI---217",
  description: "Högkvalitativ unisex-pikétröja victory malfini - 217 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/217_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_10-glowne-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/217_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_10-glowne-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/217_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_10-glowne-1.jpg"
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
  keywords: ["unisex-pikétröja victory malfini - 217", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Unisex-pikétröja Victory Malfini - 217 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ unisex-pikétröja victory malfini - 217 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/polo-unisex-victory/",
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
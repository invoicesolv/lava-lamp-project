import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt V-ringad Malfini - 102 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt V-ringad Malfini är designad för att ge både stil och komfort. Tillverkad av 100% premium bomull, erbjuder denna t-shirt en mjuk och skön känsla mot huden. Den v-ringade halsringningen ger ett modernt utseende som passar både till vardags och mer formella tillfällen.  Denna t-shirt är idealisk för tryck och broderi, vilket gör den till ett utmärkt val för företag eller grupper som vill anpassa sina kläder med logotyper eller egna designer. Tack vare den släta ytan fäster tryck och broderier perfekt, vilket säkerställer en professionell och hållbar finish.  Passformen är noggrant utformad för att ge en smickrande siluett utan att kompromissa med rörelsefriheten. De förstärkta sömmarna bidrar till ökad hållbarhet, vilket gör att t-shirten behåller sin form och kvalitet även efter många tvättar. Dessutom erbjuder vi snabb leverans så att du kan få dina anpassade t-shirts utan dröjsmål.",
  keywords: "herr t-shirt v-ringad malfini - 102, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt V-ringad Malfini - 102 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt v-ringad malfini - 102 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-v-neck-malfini-102",
  name: "Herr T-shirt V-ringad Malfini - 102",
  articleNumber: "HERR-T-SHIRT-V-RINGAD-MALFINI---102",
  description: "Högkvalitativ herr t-shirt v-ringad malfini - 102 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt V-ringad Malfini är en stilren och bekväm t-shirt i högkvalitativ bomull, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/102_07_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/102_07_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/102_07_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-1.jpg"
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
  keywords: ["herr t-shirt v-ringad malfini - 102", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt V-ringad Malfini - 102 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt v-ringad malfini - 102 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-v-neck-malfini/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Formad Lång T-shirt Bygg Ditt Varumärke - BY028 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Formad Lång T-shirt BY028 är skapad för dig som vill bygga ett starkt varumärke med stil. Tillverkad av högkvalitativ bomull, erbjuder denna t-shirt en mjuk och skön känsla mot huden vilket gör den idealisk för dagligt bruk. Den moderna, långa passformen ger en stilren look som passar perfekt till både casual och formella tillfällen. Denna t-shirt är speciellt designad för att underlätta tryck och broderi, vilket gör den till ett utmärkt val för företag och organisationer som vill profilera sig. Det släta tyget ger en jämn yta för detaljerade logotyper och mönster, vilket bidrar till en professionell finish. Med fokus på hållbarhet och kvalitet är BY028 tillverkad för att hålla länge, även efter många tvättar. Den bevarar sin form och färg, vilket säkerställer att ditt varumärke alltid ser sitt bästa ut. Dessutom erbjuder vi snabb leverans så att du kan få dina produkter i tid för varje event eller kampanj.",
  keywords: "herr t-shirt formad lång t-shirt bygg ditt varumärke - by028, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Formad Lång T-shirt Bygg Ditt Varumärke - BY028 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt formad lång t-shirt bygg ditt varumärke - by028 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-shaped-long-tee-build-your-brand-by028",
  name: "Herr T-shirt Formad Lång T-shirt Bygg Ditt Varumärke - BY028",
  articleNumber: "HERR-T-SHIRT-FORMAD-LNG-T-SHIRT-BYGG-DITT-VARUMRKE---BY028",
  description: "Högkvalitativ herr t-shirt formad lång t-shirt bygg ditt varumärke - by028 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Formad Lång T-shirt BY028 är perfekt för att bygga ditt varumärke med tryck och broderi. Den erbjuder både komfort och en modern passform.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BY028_Olive_glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BY028_Olive_glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BY028_Olive_glowne.jpg"
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
  keywords: ["herr t-shirt formad lång t-shirt bygg ditt varumärke - by028", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Formad Lång T-shirt Bygg Ditt Varumärke - BY028 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt formad lång t-shirt bygg ditt varumärke - by028 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-shaped-long-tee/",
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
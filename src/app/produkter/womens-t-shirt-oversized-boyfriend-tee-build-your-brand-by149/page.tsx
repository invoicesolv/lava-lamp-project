import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Oversized Boyfriend Tee Bygg Ditt Varumärke - BY149 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Oversized Boyfriend Tee BY149 är den ultimata kombinationen av stil och funktionalitet. Tillverkad av 100% mjuk bomull, erbjuder denna t-shirt en fantastisk komfort hela dagen. Den oversized passformen skapar en modern och avslappnad look, vilket gör den idealisk för både vardaglig användning och mer kreativa sammanhang. T-shirten är speciellt designad för att ge en perfekt yta för både tryck och broderi, vilket gör den till ett utmärkt val för att bygga ditt varumärke. Med professionell finish och slät yta, säkerställer den att dina designidéer kommer till liv på ett imponerande sätt. Hållbarhet är en annan viktig aspekt av BY149. Den håller formen och färgen även efter många tvättar, vilket gör den till ett pålitligt tillskott i garderoben. Oavsett om du är ett företag som vill profilera ditt varumärke eller en modeentusiast, erbjuder denna t-shirt en snabb leverans för att möta dina behov.",
  keywords: "dam t-shirt oversized boyfriend tee bygg ditt varumärke - by149, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Oversized Boyfriend Tee Bygg Ditt Varumärke - BY149 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt oversized boyfriend tee bygg ditt varumärke - by149 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-oversized-boyfriend-tee-build-your-brand-by149",
  name: "Dam T-shirt Oversized Boyfriend Tee Bygg Ditt Varumärke - BY149",
  articleNumber: "DAM-T-SHIRT-OVERSIZED-BOYFRIEND-TEE-BYGG-DITT-VARUMRKE---BY149",
  description: "Högkvalitativ dam t-shirt oversized boyfriend tee bygg ditt varumärke - by149 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Oversized Boyfriend Tee BY149 är perfekt för tryck och broderi, med en lös passform och mjukt bomullsmaterial för maximal komfort.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/2441360-2.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/2441360-2.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/2441360-2.jpg"
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
  keywords: ["dam t-shirt oversized boyfriend tee bygg ditt varumärke - by149", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Oversized Boyfriend Tee Bygg Ditt Varumärke - BY149 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt oversized boyfriend tee bygg ditt varumärke - by149 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-oversized-boyfriend-tee/",
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
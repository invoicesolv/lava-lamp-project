import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Keps 6P Malfini - 305 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Keps 6P Malfini - 305 är en högkvalitativ keps designad för att möta både stil och funktionalitet. Tillverkad av slitstarkt material som ger en utmärkt bas för både tryck och broderi, denna keps är idealisk för varumärkesprofilering eller personlig design. Den strukturerade kronan och den förformade skärmen ger en modern och sportig look.  Materialet är noga utvalt för att säkerställa både hållbarhet och komfort. Kepsen har en justerbar stängning baktill, vilket gör att den passar de flesta huvudstorlekar och ger en bekväm och säker passform. Oavsett om du är ute efter att skapa en enhetlig look för ditt team eller önskar en personlig touch, erbjuder denna keps en perfekt yta för alla typer av design.  Med en professionell finish och en snabb leverans, är Keps 6P Malfini - 305 ett utmärkt val för både företag och privatpersoner som letar efter högkvalitativa accessoarer. Investera i en keps som kombinerar stil, kvalitet och funktionalitet i en och samma produkt.",
  keywords: "keps 6p malfini - 305, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Keps 6P Malfini - 305 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ keps 6p malfini - 305 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cap-6p-malfini-305",
  name: "Keps 6P Malfini - 305",
  description: "Högkvalitativ keps 6p malfini - 305 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Keps 6P Malfini - 305 är en stilren och bekväm keps, perfekt för både tryck och broderi med professionell finish.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/305_08_c_xl_preview_maxWidth_740_maxHeight_740_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/305_08_c_xl_preview_maxWidth_740_maxHeight_740_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/305_08_c_xl_preview_maxWidth_740_maxHeight_740_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["keps 6p malfini - 305", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Keps 6P Malfini - 305 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ keps 6p malfini - 305 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cap-6p-malfini/",
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
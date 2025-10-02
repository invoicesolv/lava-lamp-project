import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Exact 150 B&C - BCTK300 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barn T-shirt Exact 150 B&C är tillverkad av 100% förkrympt bomull, vilket säkerställer både en mjuk känsla och en hållbar passform. Med en vikt på 145 g/m² erbjuder denna t-shirt en perfekt balans mellan lätthet och hållbarhet, vilket gör den idealisk för daglig användning och lek.  Denna t-shirt är särskilt utformad för att ge en jämn yta för tryck och broderi, vilket gör den perfekt för skoluniformer, sportevenemang eller personliga projekt. Materialet är noggrant utvalt för att säkerställa att färger och mönster framhävs på bästa sätt, vilket ger en professionell finish. Passformen är klassisk och bekväm, med en tidlös design som passar alla tillfällen. Den dubbelsydda kragen och de förstärkta sömmarna bidrar till t-shirtens hållbarhet, vilket gör den perfekt för aktiva barn.  Vi erbjuder snabb leverans så att du kan få dina anpassade t-shirts i tid för alla evenemang och behov. Välj Barn T-shirt Exact 150 B&C för en pålitlig och stilren lösning för alla dina tryck- och broderiprojekt.",
  keywords: "barn t-shirt exact 150 b&c - bctk300, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Exact 150 B&C - BCTK300 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt exact 150 b&c - bctk300 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-exact-150-bc-bctk300",
  name: "Barn T-shirt Exact 150 B&C - BCTK300",
  articleNumber: "BARN-T-SHIRT-EXACT-150-BC---BCTK300",
  description: "Högkvalitativ barn t-shirt exact 150 b&c - bctk300 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barn T-shirt Exact 150 B&C är en bekväm och slitstark t-shirt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTK300_Azure-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTK300_Azure-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTK300_Azure-glowne.jpg"
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
  keywords: ["barn t-shirt exact 150 b&c - bctk300", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Exact 150 B&C - BCTK300 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt exact 150 b&c - bctk300 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-exact-150-bc/",
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
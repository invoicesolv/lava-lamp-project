import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Exact 190 B&C - TK301 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barn T-shirt Exact 190 B&C - TK301 är den ultimata t-shirten för barn som kombinerar komfort och stil. Tillverkad av 100% förkrympt bomull, erbjuder denna t-shirt en mjuk och behaglig känsla mot huden, vilket gör den idealisk för daglig användning. Med sin höga tygkvalitet på 190 g/m², är denna t-shirt både slitstark och hållbar, vilket garanterar långvarig användning även efter många tvättar. Designad för att ge en perfekt yta för tryck och broderi, har Barn T-shirt Exact 190 en jämn och tät väv som säkerställer skarpa och klara motiv. Den är perfekt för skoluniformer, idrottslag eller personliga presenter. Den klassiska passformen med rund hals och korta ärmar ger en avslappnad stil som passar barn i alla åldrar. Vi prioriterar snabb leverans och hög kvalitet, vilket gör denna t-shirt till ett utmärkt val för både små och stora beställningar. Dess professionella finish säkerställer att varje plagg ser ut och känns premiummässigt, redo att anpassas efter dina behov.",
  keywords: "barn t-shirt exact 190 b&c - tk301, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Exact 190 B&C - TK301 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt exact 190 b&c - tk301 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-exact-190-bc-tk301",
  name: "Barn T-shirt Exact 190 B&C - TK301",
  articleNumber: "BARN-T-SHIRT-EXACT-190-BC---TK301",
  description: "Högkvalitativ barn t-shirt exact 190 b&c - tk301 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barn T-shirt Exact 190 B&C är en högkvalitativ t-shirt i mjuk bomull, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTK301_Black-glowne-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTK301_Black-glowne-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTK301_Black-glowne-1.jpg"
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
  keywords: ["barn t-shirt exact 190 b&c - tk301", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Exact 190 B&C - TK301 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt exact 190 b&c - tk301 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-exact-190-bc/",
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
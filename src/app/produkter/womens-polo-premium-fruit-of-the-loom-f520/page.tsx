import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas pikétröja Premium Fruit of the Loom - F520 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damernas pikétröja Premium från Fruit of the Loom är tillverkad av högkvalitativ bomullspiké som säkerställer både komfort och hållbarhet. Denna pikétröja är designad för att ge en professionell och stilren look, vilket gör den idealisk för både arbetskläder och casual wear. Med sin klassiska krage och knappar erbjuder den en tidlös stil som aldrig blir omodern. Tröjan är perfekt för tryck och broderi, vilket ger företag och organisationer möjlighet att enkelt anpassa den med logotyper eller andra designelement. Det robusta tyget garanterar att trycken och broderierna håller sig skarpa och klara även efter flera tvättar. Passformen är noggrant utformad för att ge maximal komfort, med en lätt insvängd midja som framhäver figuren utan att kompromissa på rörelsefriheten. Materialet andas bra, vilket gör att du känner dig bekväm hela dagen. Oavsett om det är för en företagsevent eller bara en dag på kontoret, är denna pikétröja ett pålitligt val. Med en professionell finish och snabb leverans kan du lita på att få en produkt av högsta kvalitet när du beställer Damernas pikétröja Premium från Fruit of the Loom. Det är en investering i stil och funktionalitet för den moderna kvinnan.",
  keywords: "damernas pikétröja premium fruit of the loom - f520, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas pikétröja Premium Fruit of the Loom - F520 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas pikétröja premium fruit of the loom - f520 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-premium-fruit-of-the-loom-f520",
  name: "Damernas pikétröja Premium Fruit of the Loom - F520",
  articleNumber: "DAMERNAS-PIKTRJA-PREMIUM-FRUIT-OF-THE-LOOM---F520",
  description: "Högkvalitativ damernas pikétröja premium fruit of the loom - f520 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas pikétröja Premium från Fruit of the Loom kombinerar stil och komfort, perfekt för tryck och broderi.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/F520_Kelly-Green-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/F520_Kelly-Green-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/F520_Kelly-Green-glowne.jpg"
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
  keywords: ["damernas pikétröja premium fruit of the loom - f520", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas pikétröja Premium Fruit of the Loom - F520 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas pikétröja premium fruit of the loom - f520 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-premium/",
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
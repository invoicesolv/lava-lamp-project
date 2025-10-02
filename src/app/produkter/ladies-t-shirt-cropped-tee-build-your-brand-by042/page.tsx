import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damtopp Kortärmad T-shirt Bygg Ditt Varumärke - BY042 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damtopp Kortärmad T-shirt BY042 erbjuder en perfekt kombination av stil och funktionalitet, idealisk för alla som vill bygga sitt varumärke. Tillverkad av mjuk bomull och med en precisionssydd passform, ger denna t-shirt en skön känsla mot huden samtidigt som den har en utmärkt yta för tryck och broderi. Den släta ytan och de förstärkta sömmarna gör det enkelt att applicera din design, vilket garanterar en professionell finish som varar länge. Materialet, en högkvalitativ bomullsblandning, är både andningsbart och hållbart, vilket gör denna t-shirt till ett utmärkt val för dagligt bruk. Den kortärmade designen och den feminina passformen ger både komfort och stil, vilket gör den lämplig för olika evenemang och tillfällen. BY042 är inte bara praktisk utan också en miljövänlig produkt som fokuserar på hållbarhet. Med sin slitstarka konstruktion och färgbeständiga material, kan denna topp klara av många tvättar utan att förlora sin form eller färg. Snabb leverans säkerställs för att möta dina tidskänsliga behov, vilket gör detta till ett perfekt val för företag och individer som värdesätter kvalitet och effektivitet.",
  keywords: "damtopp kortärmad t-shirt bygg ditt varumärke - by042, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damtopp Kortärmad T-shirt Bygg Ditt Varumärke - BY042 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damtopp kortärmad t-shirt bygg ditt varumärke - by042 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "ladies-t-shirt-cropped-tee-build-your-brand-by042",
  name: "Damtopp Kortärmad T-shirt Bygg Ditt Varumärke - BY042",
  articleNumber: "DAMTOPP-KORTRMAD-T-SHIRT-BYGG-DITT-VARUMRKE---BY042",
  description: "Högkvalitativ damtopp kortärmad t-shirt bygg ditt varumärke - by042 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damtopp Kortärmad T-shirt BY042 är perfekt för dig som vill bygga ditt varumärke med stil och komfort. Den är designad för tryck och broderi med högkvalitativ finish.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BY042_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BY042_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BY042_Black-glowne.jpg"
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
  keywords: ["damtopp kortärmad t-shirt bygg ditt varumärke - by042", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damtopp Kortärmad T-shirt Bygg Ditt Varumärke - BY042 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damtopp kortärmad t-shirt bygg ditt varumärke - by042 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/ladies-t-shirt-cropped-tee/",
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
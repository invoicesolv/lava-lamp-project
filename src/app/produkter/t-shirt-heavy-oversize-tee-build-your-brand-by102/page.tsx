import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "T-shirt Tjock Oversize Tee Bygg Ditt Varumärke - BY102 - Bulkprodukt för tryck eget | Tryckeget",
  description: "T-shirt Tjock Oversize Tee BY102 är designad för dem som värdesätter både mode och funktionalitet. Tillverkad av högkvalitativ bomull, erbjuder denna t-shirt en tjock och hållbar känsla som är perfekt för dagligt bruk. Dess oversize-passform ger en avslappnad och modern look, vilket gör den till ett idealiskt plagg för att uttrycka ditt personliga varumärke. Materialet i BY102 är utmärkt för både tryck och broderi, vilket gör det enkelt att anpassa t-shirten med logotyper, slogans eller kreativa mönster. Den robusta strukturen hos tyget säkerställer att dina designval håller sig livfulla och skarpa, även efter flera tvättar. Komfort är nyckeln till denna t-shirt, med en mjuk känsla mot huden och en passform som tillåter rörelsefrihet. Idealisk för både vardagsbruk och speciella evenemang, erbjuder denna t-shirt en professionell finish som kompletterar både avslappnade och mer formella klädstilar. Med snabb leverans kan du snart börja bygga ditt varumärke med denna mångsidiga och stilrena t-shirt. Oavsett om du är ute efter att skapa en unik kollektion eller bara förnya din garderob, är BY102 det perfekta valet.",
  keywords: "t-shirt tjock oversize tee bygg ditt varumärke - by102, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "T-shirt Tjock Oversize Tee Bygg Ditt Varumärke - BY102 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ t-shirt tjock oversize tee bygg ditt varumärke - by102 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "t-shirt-heavy-oversize-tee-build-your-brand-by102",
  name: "T-shirt Tjock Oversize Tee Bygg Ditt Varumärke - BY102",
  articleNumber: "T-SHIRT-TJOCK-OVERSIZE-TEE-BYGG-DITT-VARUMRKE---BY102",
  description: "Högkvalitativ t-shirt tjock oversize tee bygg ditt varumärke - by102 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "T-shirt Tjock Oversize Tee BY102 är perfekt för dig som vill bygga ditt varumärke med stil och komfort. Dess tjocka material ger en robust känsla och är idealiskt för både tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY102_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY102_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY102_Black-glowne.jpg"
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
  keywords: ["t-shirt tjock oversize tee bygg ditt varumärke - by102", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "T-shirt Tjock Oversize Tee Bygg Ditt Varumärke - BY102 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ t-shirt tjock oversize tee bygg ditt varumärke - by102 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/t-shirt-heavy-oversize-tee/",
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
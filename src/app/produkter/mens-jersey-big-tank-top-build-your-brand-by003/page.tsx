import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrarnas Jersey Stort Linne Bygg Ditt Varumärke - BY003 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrarnas Jersey Stort Linne BY003 är speciellt designat för de som vill uttrycka sin stil och bygga sitt varumärke. Tillverkat av mjuk och slitstark bomull, erbjuder detta linne en bekväm passform som är idealisk för både casual och sportiga tillfällen. Det generösa utrymmet på ytan gör det till en perfekt duk för kreativa tryck och detaljerat broderi, vilket ger dig friheten att anpassa och göra linnet unikt ditt. Materialet är noggrant utvalt för att säkerställa långvarig hållbarhet och komfort. Jerseytyget andas väl, vilket gör det bekvämt att bära under varma dagar eller intensiva träningspass. Den professionella finishen gör att ditt tryck eller broderi ser skarpt och levande ut, vilket garanterar att ditt varumärke representeras på bästa sätt. Denna produkt är också lätt att underhålla, vilket innebär att den behåller sin form och färg även efter flera tvättar. Med snabb leverans kan du snart ha ditt eget anpassade linne redo att bäras eller distribueras, perfekt för event, företagsprofilering eller sportklubbar. Oavsett om du är en entreprenör eller idrottsklubb, är detta linne en fantastisk plattform för att visa upp ditt varumärke med stil.",
  keywords: "herrarnas jersey stort linne bygg ditt varumärke - by003, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrarnas Jersey Stort Linne Bygg Ditt Varumärke - BY003 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrarnas jersey stort linne bygg ditt varumärke - by003 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-jersey-big-tank-top-build-your-brand-by003",
  name: "Herrarnas Jersey Stort Linne Bygg Ditt Varumärke - BY003",
  articleNumber: "HERRARNAS-JERSEY-STORT-LINNE-BYGG-DITT-VARUMRKE---BY003",
  description: "Högkvalitativ herrarnas jersey stort linne bygg ditt varumärke - by003 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Skapa och bygg ditt varumärke med Herrarnas Jersey Stort Linne BY003, tillverkat av högkvalitativt material perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY003_Charcoal-Heather-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY003_Charcoal-Heather-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY003_Charcoal-Heather-glowne.jpg"
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
  keywords: ["herrarnas jersey stort linne bygg ditt varumärke - by003", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrarnas Jersey Stort Linne Bygg Ditt Varumärke - BY003 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrarnas jersey stort linne bygg ditt varumärke - by003 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-jersey-big-tank-top/",
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
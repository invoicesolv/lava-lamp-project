import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Regular JHK - TSRA150 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Regular JHK - TSRA150 är en mångsidig och tidlös t-shirt som passar utmärkt för både vardag och profilering. Den är tillverkad av 100% ringspunnen bomull, vilket ger en otroligt mjuk och bekväm känsla mot huden. Denna t-shirt är speciellt utformad för att ge en utmärkt yta för både tryck och broderi, vilket gör den idealisk för företag, föreningar eller skolor som vill ha en personlig touch. Passformen är regular, vilket innebär att den sitter bekvämt på kroppen utan att vara för tight eller för lös. Den andas väl och är perfekt för både inomhus- och utomhusaktiviteter. Tack vare den höga kvaliteten på materialet behåller den sin form och färg även efter många tvättar, vilket säkerställer att ditt tryck eller broderi ser bra ut under lång tid. JHK är kända för sin höga standard av hållbarhet och denna t-shirt är inget undantag. Den är designad för att klara av vardagsslitage samtidigt som den har en professionell finish. Dessutom erbjuder vi snabb leverans, så du kan vara säker på att få din beställning i tid för ditt nästa evenemang eller kampanj.",
  keywords: "herr t-shirt regular jhk - tsra150, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Regular JHK - TSRA150 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt regular jhk - tsra150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-regular-jhk-tsra150",
  name: "Herr T-shirt Regular JHK - TSRA150",
  articleNumber: "HERR-T-SHIRT-REGULAR-JHK---TSRA150",
  description: "Högkvalitativ herr t-shirt regular jhk - tsra150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Regular JHK - TSRA150 är en stilren och bekväm t-shirt perfekt för tryck och broderi. Tillverkad av högkvalitativ bomull för en mjuk och hållbar finish.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/JHK150_Royal-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK150_Royal-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK150_Royal-Blue-glowne.jpg"
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
  keywords: ["herr t-shirt regular jhk - tsra150", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Regular JHK - TSRA150 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt regular jhk - tsra150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-regular-jhk/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrarnas zip-up hoodie King B&C - WU03K - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrarnas zip-up hoodie King B&C - WU03K är tillverkad av ett högkvalitativt blandmaterial som består av 80% ringspunnen bomull och 20% polyester. Denna kombination ger en mjuk och behaglig känsla mot huden samtidigt som den säkerställer hållbarhet och formstabilitet över tid. Den borstad insidan ger extra komfort och värme, vilket gör den idealisk för kalla dagar. Denna hoodie är utformad med en rak passform som passar de flesta kroppstyper och har en hel dragkedja framtill för enkel på- och avtagning. Det finns även en känguruficka som är både praktisk och stilren. De ribbade muddarna och fållen bidrar till en snygg och professionell finish. För den som önskar personalisering erbjuder King B&C - WU03K en utmärkt yta för både tryck och broderi. Tack vare sin släta textur fäster tryck och broderier med precision, vilket gör den här hoodien perfekt för företagsprofilering eller personliga designprojekt. Dessutom säkerställs en snabb leverans så att du kan få dina anpassade kläder i tid för ditt evenemang eller försäljning.",
  keywords: "herrarnas zip-up hoodie king b&c - wu03k, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrarnas zip-up hoodie King B&C - WU03K - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrarnas zip-up hoodie king b&c - wu03k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-zip-up-hoodie-king-bc-wu03k",
  name: "Herrarnas zip-up hoodie King B&C - WU03K",
  articleNumber: "HERRARNAS-ZIP-UP-HOODIE-KING-BC---WU03K",
  description: "Högkvalitativ herrarnas zip-up hoodie king b&c - wu03k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrarnas zip-up hoodie King B&C - WU03K är den perfekta kombinationen av stil och komfort, utmärkt för tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWU03K_Heather-Mid-Grey-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWU03K_Heather-Mid-Grey-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWU03K_Heather-Mid-Grey-glowne.jpg"
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
  keywords: ["herrarnas zip-up hoodie king b&c - wu03k", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrarnas zip-up hoodie King B&C - WU03K - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrarnas zip-up hoodie king b&c - wu03k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-zip-up-hoodie-king-bc/",
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
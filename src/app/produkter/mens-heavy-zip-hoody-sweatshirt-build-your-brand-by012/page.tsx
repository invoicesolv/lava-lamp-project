import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrarnas Tjocka Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY012 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrarnas Tjocka Zip Hoodie Sweatshirt BY012 är den idealiska produkten för företag och organisationer som vill skapa en professionell och enhetlig look. Tillverkad av en mjuk och slitstark bomullsblandning, erbjuder denna hoodie både komfort och hållbarhet. Med en rymlig passform och justerbar huva, är den perfekt för alla väderförhållanden och tillfällen. Denna hoodie är speciellt designad med tanke på tryck och broderi, vilket gör den till ett utmärkt val för att visa upp ditt varumärke. Tyget är av hög kvalitet och ger en jämn yta för skarpa och tydliga tryck eller broderade logotyper, vilket gör det möjligt för ditt varumärke att sticka ut på bästa sätt. Utöver dess estetiska fördelar, är BY012 hoodie också extremt praktisk med en full dragkedja framtill och rymliga fickor. Denna mångsidiga tröja är ett måste för alla som söker en kombination av stil och funktionalitet. Med en professionell finish och snabb leverans är denna hoodie ett pålitligt val för att bygga och stärka ditt varumärke.",
  keywords: "herrarnas tjocka zip hoodie sweatshirt bygg ditt varumärke - by012, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrarnas Tjocka Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY012 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrarnas tjocka zip hoodie sweatshirt bygg ditt varumärke - by012 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-heavy-zip-hoody-sweatshirt-build-your-brand-by012",
  name: "Herrarnas Tjocka Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY012",
  articleNumber: "HERRARNAS-TJOCKA-ZIP-HOODIE-SWEATSHIRT-BYGG-DITT-VARUMRKE---BY012",
  description: "Högkvalitativ herrarnas tjocka zip hoodie sweatshirt bygg ditt varumärke - by012 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrarnas Tjocka Zip Hoodie Sweatshirt BY012 är perfekt för att bygga ditt varumärke med tryck och broderi, tillverkad av högkvalitativt material för maximal komfort och hållbarhet.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY012_Heather-Grey-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY012_Heather-Grey-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY012_Heather-Grey-glowne.jpg"
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
  keywords: ["herrarnas tjocka zip hoodie sweatshirt bygg ditt varumärke - by012", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrarnas Tjocka Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY012 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrarnas tjocka zip hoodie sweatshirt bygg ditt varumärke - by012 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-heavy-zip-hoody-sweatshirt/",
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
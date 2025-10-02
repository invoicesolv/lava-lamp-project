import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Stanley&Stella Crafter - STTU170 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Crafter T-shirt för herrar är tillverkad av 100% ekologisk ringspunnen bomull, vilket ger en mjuk och behaglig känsla mot huden. Denna T-shirt är designad för att erbjuda en perfekt balans mellan komfort och stil, med en normal passform som smickrar alla kroppstyper. Den är särskilt utformad för att fungera utmärkt med både tryck och broderi, vilket gör den till ett populärt val för företag, föreningar och event.  Crafter T-shirten är både hållbar och miljövänlig, tack vare användningen av ekologiska material och etiska produktionsmetoder. Dess höga kvalitet säkerställer en långvarig användning, och den är lätt att underhålla, vilket gör den idealisk för både daglig användning och speciella tillfällen.  Med fokus på professionell finish, har denna T-shirt förstärkta sömmar och en slitstark krage som håller formen tvätt efter tvätt. Den finns i ett brett utbud av färger och storlekar, vilket gör det enkelt att hitta den perfekta matchningen för dina behov. Beställ idag och dra nytta av snabb leverans för att få din Stanley&Stella Crafter T-shirt i tid för ditt nästa projekt eller event.",
  keywords: "herr t-shirt stanley&stella crafter - sttu170, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Stanley&Stella Crafter - STTU170 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt stanley&stella crafter - sttu170 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-stanleystella-crafter-sttu170",
  name: "Herr T-shirt Stanley&Stella Crafter - STTU170",
  articleNumber: "HERR-T-SHIRT-STANLEYSTELLA-CRAFTER---STTU170",
  description: "Högkvalitativ herr t-shirt stanley&stella crafter - sttu170 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Stanley&Stella Crafter T-shirt för herrar är en hållbar och bekväm baströja, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Crafter-_-Premium-blank-unisex-t-shirt-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Crafter-_-Premium-blank-unisex-t-shirt-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Crafter-_-Premium-blank-unisex-t-shirt-_-Stanley_Stella-glowne.jpg"
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
  keywords: ["herr t-shirt stanley&stella crafter - sttu170", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Stanley&Stella Crafter - STTU170 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt stanley&stella crafter - sttu170 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-stanleystella-crafter/",
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
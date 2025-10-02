import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damsweatshirt med känguruficka Russell - Z265F - Bulkprodukt för tryck eget | Tryckeget",
  description: "Russell Z265F damsweatshirt är den ultimata kombinationen av komfort, stil och funktionalitet. Tillverkad av en mjuk bomullsblandning, erbjuder denna sweatshirt en oöverträffad mjukhet och hållbarhet. Det klassiska snittet kompletteras med en praktisk känguruficka framtill, vilket gör den idealisk för både vardagsbruk och speciella tillfällen. Materialet är noggrant utvalt för att ge en perfekt yta för både tryck och broderi, vilket gör det enkelt att anpassa plagget med företagsloggor eller personliga motiv. Den höga kvaliteten på tyget säkerställer att alla tryck och broderier ser skarpa och professionella ut, även efter flera tvättar. Passformen är designad för att vara figursydd men ändå bekväm, vilket ger en smickrande silhuett samtidigt som rörelsefriheten bibehålls. Resår i muddar och fåll bidrar till en säker och bekväm passform. Med fokus på hållbarhet och en professionell finish är denna sweatshirt ett utmärkt val för både arbetskläder och avslappnade tillfällen. Med snabb leverans och tillgänglighet i flera färger, är Russell Z265F damsweatshirt ett pålitligt val för den som söker ett högkvalitativt och anpassningsbart plagg.",
  keywords: "damsweatshirt med känguruficka russell - z265f, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damsweatshirt med känguruficka Russell - Z265F - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damsweatshirt med känguruficka russell - z265f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-kangaroo-sweatshirt-russell-z265f",
  name: "Damsweatshirt med känguruficka Russell - Z265F",
  articleNumber: "DAMSWEATSHIRT-MED-KNGURUFICKA-RUSSELL---Z265F",
  description: "Högkvalitativ damsweatshirt med känguruficka russell - z265f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damsweatshirt Russell Z265F med känguruficka, perfekt för tryck och broderi. Komfort och stil i en hållbar design.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z265F_Black-gllowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z265F_Black-gllowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z265F_Black-gllowne.jpg"
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
  keywords: ["damsweatshirt med känguruficka russell - z265f", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damsweatshirt med känguruficka Russell - Z265F - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damsweatshirt med känguruficka russell - z265f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-kangaroo-sweatshirt-russell/",
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
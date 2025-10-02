import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damhoodie med dragkedja King B&C - WW03Q - Bulkprodukt för tryck eget | Tryckeget",
  description: "Denna damhoodie med dragkedja från King B&C, modell WW03Q, kombinerar stil och komfort på ett utmärkt sätt. Tillverkad av högkvalitativ bomullsblandning, erbjuder den en mjuk och behaglig känsla mot huden, vilket gör den idealisk för daglig användning. Hoodien är designad för att passa alla kroppstyper med en figurnära passform som inte kompromissar med rörelsefriheten. Perfekt för tryck och broderi, denna hoodie har en slät yta som säkerställer att ditt anpassade designarbete ser professionellt ut och håller sig intakt över tid. Tack vare den kraftiga dragkedjan och ribbade muddar, får plagget en hållbar struktur som står emot dagligt slitage. Hoodien är också lätt att underhålla och tvätta, vilket gör den till ett praktiskt tillägg i garderoben. Med sin tidlösa design och hållbara konstruktion är denna hoodie ett utmärkt val för både privata och professionella sammanhang, och den snabba leveranstiden säkerställer att du får ditt plagg utan onödig väntan.",
  keywords: "damhoodie med dragkedja king b&c - ww03q, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damhoodie med dragkedja King B&C - WW03Q - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damhoodie med dragkedja king b&c - ww03q perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-zip-up-hoodie-king-bc-ww03q",
  name: "Damhoodie med dragkedja King B&C - WW03Q",
  articleNumber: "DAMHOODIE-MED-DRAGKEDJA-KING-BC---WW03Q",
  description: "Högkvalitativ damhoodie med dragkedja king b&c - ww03q perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Bekväm och stilren damhoodie med dragkedja från King B&C, perfekt för tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWW03Q_Heather-Mid-Grey-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWW03Q_Heather-Mid-Grey-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWW03Q_Heather-Mid-Grey-glowne.jpg"
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
  keywords: ["damhoodie med dragkedja king b&c - ww03q", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damhoodie med dragkedja King B&C - WW03Q - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damhoodie med dragkedja king b&c - ww03q perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-zip-up-hoodie-king-bc/",
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
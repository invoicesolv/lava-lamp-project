import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Smart damers softshell Russell - Z040F - Bulkprodukt för tryck eget | Tryckeget",
  description: "Russell Z040F softshell är designad för den moderna kvinnan som söker en jacka som kombinerar stil, komfort och funktionalitet. Tillverkad av ett slitstarkt och vattenavvisande material, är denna softshell perfekt för varierande väderförhållanden. Materialets andningsförmåga säkerställer att du håller dig bekväm och torr även under intensiva aktiviteter. Jackan passar utmärkt för både tryck och broderi, vilket gör den idealisk för företag som vill profilera sig eller för individuella anpassningar. Med en mjuk insida av mikrofleece erbjuder den extra värme och komfort, medan den smidiga ytterytan ger en professionell och polerad look. Passformen är skräddarsydd för att smickra kvinnliga former samtidigt som den ger rörelsefrihet. Den smarta designen inkluderar praktiska fickor med dragkedjor för säker förvaring av dina ägodelar. Välj Russell Z040F för en jacka som inte bara ser bra ut, utan också håller över tid tack vare sin hållbara konstruktion och material av hög kvalitet. Snabb leverans erbjuds för att säkerställa att du har din jacka när du behöver den.",
  keywords: "smart damers softshell russell - z040f, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Smart damers softshell Russell - Z040F - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ smart damers softshell russell - z040f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "smart-womens-softshell-russell-z040f",
  name: "Smart damers softshell Russell - Z040F",
  articleNumber: "SMART-DAMERS-SOFTSHELL-RUSSELL---Z040F",
  description: "Högkvalitativ smart damers softshell russell - z040f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Smart damers softshell från Russell, Z040F, erbjuder både stil och funktionalitet med högkvalitativt material perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z040F_Classic-Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z040F_Classic-Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z040F_Classic-Red-glowne.jpg"
    ]
  },
  category: "Jackor",
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
  keywords: ["smart damers softshell russell - z040f", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Smart damers softshell Russell - Z040F - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ smart damers softshell russell - z040f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/smart-womens-softshell/",
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
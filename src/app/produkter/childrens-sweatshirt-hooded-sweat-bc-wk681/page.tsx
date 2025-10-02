import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barntröja med huva B&C - WK681 - Bulkprodukt för tryck eget | Tryckeget",
  description: "B&C:s Barntröja med huva, modell WK681, är skapad med barnens komfort i åtanke. Tillverkad av högkvalitativ bomullspolyesterblandning, erbjuder denna tröja en mjuk känsla mot huden samtidigt som den är slitstark för daglig användning. Huvan ger extra värme och stil, vilket gör den till ett idealiskt val för både skoldagar och fritid. Tröjan är särskilt utformad för att vara perfekt för tryck och broderi. Tack vare dess jämna och täta tygstruktur får du en professionell finish varje gång, oavsett om du väljer att trycka skolans logotyp, ett favoritmotiv eller ett personligt budskap. Passformen är avsedd att ge rörelsefrihet och komfort, vilket gör den till ett praktiskt plagg för aktiva barn. Den robusta sömnaden säkerställer att tröjan håller formen och utseendet tvätt efter tvätt. Med snabb leverans kan du säkerställa att barnen alltid går stiliga och bekväma, redo för alla äventyr som väntar.",
  keywords: "barntröja med huva b&c - wk681, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barntröja med huva B&C - WK681 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barntröja med huva b&c - wk681 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-sweatshirt-hooded-sweat-bc-wk681",
  name: "Barntröja med huva B&C - WK681",
  articleNumber: "BARNTRJA-MED-HUVA-BC---WK681",
  description: "Högkvalitativ barntröja med huva b&c - wk681 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barntröjan med huva från B&C erbjuder både stil och komfort, perfekt för anpassning med tryck eller broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWK681_Royal-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWK681_Royal-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWK681_Royal-Blue-glowne.jpg"
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
  keywords: ["barntröja med huva b&c - wk681", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barntröja med huva B&C - WK681 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barntröja med huva b&c - wk681 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-sweatshirt-hooded-sweat-bc/",
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
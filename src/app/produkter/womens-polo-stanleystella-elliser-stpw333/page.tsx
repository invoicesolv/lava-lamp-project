import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas piké Stanley&Stella Elliser - STPW333 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Elliser damernas piké är tillverkad av högkvalitativt bomullsmaterial som erbjuder en mjuk och bekväm känsla mot huden. Tröjan är designad med en figurnära passform som smickrar olika kroppstyper och ger en elegant siluett. Denna piké är idealisk för tryck och broderi, tack vare sitt släta tyg som ger en professionell finish till alla anpassningar. Den robusta konstruktionen och de förstärkta sömmarna garanterar att tröjan håller sin form och kvalitet även efter upprepad tvätt. Pikén har en klassisk krage och en knappslå med två knappar som ger en tidlös och stilren look. Perfekt för företag som vill profilera sin personal med loggor eller för individuella kunder som söker en personlig touch. Med Stanley&Stella Elliser får du en hållbar och mångsidig piké som är lika lämplig för arbetsplatsen som för en avslappnad helg. Snabb leverans och enkel beställningsprocess gör det enkelt att få denna kvalitetsprodukt direkt till dörren.",
  keywords: "damernas piké stanley&stella elliser - stpw333, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas piké Stanley&Stella Elliser - STPW333 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas piké stanley&stella elliser - stpw333 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-stanleystella-elliser-stpw333",
  name: "Damernas piké Stanley&Stella Elliser - STPW333",
  articleNumber: "DAMERNAS-PIK-STANLEYSTELLA-ELLISER---STPW333",
  description: "Högkvalitativ damernas piké stanley&stella elliser - stpw333 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas piké Stanley&Stella Elliser är en stilren och mångsidig tröja, perfekt för både vardagsbruk och för att applicera personliga tryck eller broderier.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Stella-Elliser.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Stella-Elliser.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Stella-Elliser.jpg"
    ]
  },
  category: "Kläder",
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
  keywords: ["damernas piké stanley&stella elliser - stpw333", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas piké Stanley&Stella Elliser - STPW333 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas piké stanley&stella elliser - stpw333 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-stanleystella-elliser/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damers softshell med huva B&C - JW937 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damers softshell med huva B&C - JW937 är en perfekt kombination av stil och funktionalitet. Tillverkad av högkvalitativt softshell-material, ger denna jacka dig inte bara ett slitstarkt skydd mot väder och vind, utan också en komfortabel passform som följer kroppens rörelser. Den integrerade huvan erbjuder extra skydd under blåsiga dagar, medan den justerbara fållen säkerställer att du kan anpassa passformen efter dina behov. Denna jacka är speciellt designad för att vara idealisk för tryck och broderi, vilket gör den till ett utmärkt val för företag och organisationer som vill profilera sig. Materialet är noggrant utvalt för att säkerställa att tryck och broderier fäster väl och behåller sin kvalitet även efter många tvättar. Softshell-materialet är både vatten- och vindtätt, vilket gör jackan till ett hållbart val för både vardagsbruk och utomhusaktiviteter. Den professionella finishen och de noggrant konstruerade sömmarna bidrar ytterligare till jackans långvariga hållbarhet och stil. Med B&C - JW937 kan du räkna med snabb leverans och en produkt som lever upp till dina förväntningar både vad gäller funktion och estetik. Oavsett om det är för arbete eller fritid, är denna softshell ett utmärkt tillskott till garderoben.",
  keywords: "damers softshell med huva b&c - jw937, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damers softshell med huva B&C - JW937 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damers softshell med huva b&c - jw937 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-softshell-with-hood-bc-jw937",
  name: "Damers softshell med huva B&C - JW937",
  articleNumber: "DAMERS-SOFTSHELL-MED-HUVA-BC---JW937",
  description: "Högkvalitativ damers softshell med huva b&c - jw937 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damers softshell med huva B&C - JW937 erbjuder optimal komfort och skydd med sin hållbara och flexibla design, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BCJW937_Dark-Grey-Solid-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BCJW937_Dark-Grey-Solid-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BCJW937_Dark-Grey-Solid-glowne.jpg"
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
  keywords: ["damers softshell med huva b&c - jw937", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damers softshell med huva B&C - JW937 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damers softshell med huva b&c - jw937 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-softshell-with-hood/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damlinne Sportig SOL's - L02117 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damlinne Sportig SOL's - L02117 är designat för att möta kraven hos den aktiva och stilmedvetna kvinnan. Tillverkat av ett lättviktsmaterial som andas, erbjuder detta linne fantastisk komfort och rörelsefrihet. Materialet är noggrant utvalt för att tåla intensiv träning, vilket gör det till en hållbar och pålitlig del av din garderob. Detta linne är inte bara funktionellt utan också stilrent, vilket gör det till en utmärkt bas för tryck och broderi. Den professionella finishen ser till att dina personliga eller företagslogotyper ser skarpa och attraktiva ut, oavsett om det är för ett sportlag, ett företagsevenemang eller personlig användning. Passformen är anpassad för att smickra kroppens form utan att begränsa rörelserna. Dessutom är linnet lätt att sköta, vilket innebär att det behåller sin form och färg tvätt efter tvätt. Med snabb leverans kan du snabbt få ditt nya favoritlinne redo för användning eller anpassning.",
  keywords: "damlinne sportig sol's - l02117, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damlinne Sportig SOL's - L02117 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damlinne sportig sol's - l02117 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-tank-top-sporty-sols-l02117",
  name: "Damlinne Sportig SOL's - L02117",
  articleNumber: "DAMLINNE-SPORTIG-SOLS---L02117",
  description: "Högkvalitativ damlinne sportig sol's - l02117 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damlinne Sportig SOL's är det perfekta valet för träning och aktivitet. Tillverkat av högkvalitativt material, är det idealiskt för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L02117_Neon-Yellow-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L02117_Neon-Yellow-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L02117_Neon-Yellow-glowne.jpg"
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
  keywords: ["damlinne sportig sol's - l02117", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damlinne Sportig SOL's - L02117 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damlinne sportig sol's - l02117 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-tank-top-sporty/",
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
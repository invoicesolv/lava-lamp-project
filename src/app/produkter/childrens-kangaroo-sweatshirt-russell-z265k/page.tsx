import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barns kängurutröja Russell - Z265K - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barns kängurutröja Russell - Z265K kombinerar komfort och stil, vilket gör den till ett utmärkt val för barnens garderob. Tillverkad av högkvalitativt material som är både slitstarkt och mjukt, erbjuder denna tröja en perfekt blandning av hållbarhet och komfort. Materialet är idealiskt för både tryck och broderi, vilket gör det enkelt att anpassa med egna designer eller logotyper. Tröjan har en klassisk känguruficka och ribbade muddar, vilket ger extra värme och en säker passform för aktiva barn. Den är utformad för att behålla formen efter tvätt och användning, vilket garanterar en långvarig användning och ett fräscht utseende.  Med en professionell finish och noggrant utformade detaljer är denna tröja inte bara funktionell utan också stilfull. Finns i flera färger, vilket ger möjlighet till kreativ anpassning. Dessutom erbjuder vi snabb leverans, så att du snabbt kan få dina specialanpassade tröjor.",
  keywords: "barns kängurutröja russell - z265k, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barns kängurutröja Russell - Z265K - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barns kängurutröja russell - z265k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-kangaroo-sweatshirt-russell-z265k",
  name: "Barns kängurutröja Russell - Z265K",
  articleNumber: "BARNS-KNGURUTRJA-RUSSELL---Z265K",
  description: "Högkvalitativ barns kängurutröja russell - z265k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barns kängurutröja Russell - Z265K är en mysig och hållbar tröja, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z265K_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z265K_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z265K_Black-glowne.jpg"
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
  keywords: ["barns kängurutröja russell - z265k", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barns kängurutröja Russell - Z265K - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barns kängurutröja russell - z265k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-kangaroo-sweatshirt/",
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
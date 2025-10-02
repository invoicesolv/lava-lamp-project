import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam Kangaroo King B&C - WW02Q - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam Kangaroo King B&C - WW02Q är en högkvalitativ hoodie designad för kvinnor som söker både stil och komfort. Tillverkad av en mjuk blandning av bomull och polyester, erbjuder denna hoodie en exceptionell komfort och hållbarhet. Den är idealisk för tryck och broderi, vilket gör den perfekt för anpassning och att skapa en unik look. Passformen är noggrant utformad för att följa kroppens linjer utan att begränsa rörelsefriheten, vilket gör den perfekt för både vardagligt bruk och fritidsaktiviteter. Med en professionell finish och tåligt material, är denna hoodie byggd för att hålla och behålla sin form och färg även efter många tvättar. Dessutom erbjuder vi snabb leverans för att möta dina behov i tid.",
  keywords: "dam kangaroo king b&c - ww02q, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam Kangaroo King B&C - WW02Q - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam kangaroo king b&c - ww02q perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-kangaroo-king-bc-ww02q",
  name: "Dam Kangaroo King B&C - WW02Q",
  articleNumber: "DAM-KANGAROO-KING-BC---WW02Q",
  description: "Högkvalitativ dam kangaroo king b&c - ww02q perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam Kangaroo King B&C - WW02Q är den perfekta hoodien för tryck och broderi, tillverkad av högkvalitativt material för en mjuk och bekväm passform.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWW02Q_Heather-Grey-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWW02Q_Heather-Grey-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWW02Q_Heather-Grey-glowne.jpg"
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
  keywords: ["dam kangaroo king b&c - ww02q", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam Kangaroo King B&C - WW02Q - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam kangaroo king b&c - ww02q perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-kangaroo-king-bc/",
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
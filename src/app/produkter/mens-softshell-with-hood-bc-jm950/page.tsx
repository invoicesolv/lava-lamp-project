import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr softshelljacka med huva B&C - JM950 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "herr softshelljacka med huva b&c - jm950, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr softshelljacka med huva B&C - JM950 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr softshelljacka med huva b&c - jm950 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-softshell-with-hood-bc-jm950",
  name: "Herr softshelljacka med huva B&C - JM950",
  articleNumber: "HERR-SOFTSHELLJACKA-MED-HUVA-BC---JM950",
  description: "Högkvalitativ herr softshelljacka med huva b&c - jm950 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BCJM950_Dark-Grey-Solid-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BCJM950_Dark-Grey-Solid-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BCJM950_Dark-Grey-Solid-glowne.jpg"
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
  keywords: ["herr softshelljacka med huva b&c - jm950", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr softshelljacka med huva B&C - JM950 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr softshelljacka med huva b&c - jm950 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-softshell-with-hood/",
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
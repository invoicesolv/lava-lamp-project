import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrarnas Klassiska Sweatshirt Set I B&C - WU01W - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrarnas Klassiska Sweatshirt Set i B&C - WU01W är det perfekta valet för dem som söker en bekväm och stilren tröja som enkelt kan anpassas med tryck eller broderi. Tillverkad av högkvalitativ bomull och polyesterblandning, ger denna sweatshirt en mjuk känsla mot huden, samtidigt som den erbjuder hållbarhet och långvarig användning. Designad för att ge en avslappnad passform, är denna sweatshirt idealisk för vardagsbruk eller som profilkläder för företag och evenemang. Det robusta tyget är speciellt utvalt för att säkerställa att tryck och broderi fäster väl och behåller sin kvalitet även efter många tvättar. Den ribbade kragen, ärmsluten och nederkanten bidrar till en professionell finish som gör att plagget ser lika snyggt ut på jobbet som på fritiden. Med en snabb leverans kan du få dina anpassade sweatshirts i tid för ditt nästa event eller kampanj.",
  keywords: "herrarnas klassiska sweatshirt set i b&c - wu01w, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrarnas Klassiska Sweatshirt Set I B&C - WU01W - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrarnas klassiska sweatshirt set i b&c - wu01w perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-classic-sweatshirt-set-in-bc-wu01w",
  name: "Herrarnas Klassiska Sweatshirt Set I B&C - WU01W",
  articleNumber: "HERRARNAS-KLASSISKA-SWEATSHIRT-SET-I-BC---WU01W",
  description: "Högkvalitativ herrarnas klassiska sweatshirt set i b&c - wu01w perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrarnas Klassiska Sweatshirt Set i B&C - WU01W erbjuder en perfekt kombination av komfort och stil, idealisk för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWU01W_Melon-Orange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWU01W_Melon-Orange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWU01W_Melon-Orange-glowne.jpg"
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
  keywords: ["herrarnas klassiska sweatshirt set i b&c - wu01w", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrarnas Klassiska Sweatshirt Set I B&C - WU01W - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrarnas klassiska sweatshirt set i b&c - wu01w perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-classic-sweatshirt-set-in-bc/",
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
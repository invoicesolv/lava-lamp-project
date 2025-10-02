import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas Klassiska Sweatshirt Set i B&C - WW02W - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damernas Klassiska Sweatshirt Set i B&C - WW02W är tillverkat av högkvalitativ bomullsblandning som ger en mjuk och bekväm känsla mot huden. Denna sweatshirt är designad för att erbjuda en skräddarsydd passform som smickrar alla kroppstyper, vilket gör den till ett mångsidigt plagg för vardagsbruk eller mer formella tillfällen. Sweatshirtens släta yta är idealisk för anpassade tryck och broderi, vilket gör den till ett utmärkt val för företag som vill profilera sina varumärken eller för personliga gåvor. Materialet är noggrant utvalt för att säkerställa att både tryck och broderi fäster väl och håller sig snygga även efter många tvättar. Denna tröja kombinerar hållbarhet med stil, vilket säkerställer att den behåller sin form och färg över tid. De ribbade muddarna och fållen ger en professionell finish som kompletterar den klassiska designen. Lägg till snabb leverans i ekvationen, och du har en produkt som möter både kvalitet och praktiska behov.",
  keywords: "damernas klassiska sweatshirt set i b&c - ww02w, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas Klassiska Sweatshirt Set i B&C - WW02W - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas klassiska sweatshirt set i b&c - ww02w perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-classic-sweatshirt-set-in-bc-ww02w",
  name: "Damernas Klassiska Sweatshirt Set i B&C - WW02W",
  articleNumber: "DAMERNAS-KLASSISKA-SWEATSHIRT-SET-I-BC---WW02W",
  description: "Högkvalitativ damernas klassiska sweatshirt set i b&c - ww02w perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas Klassiska Sweatshirt Set i B&C - WW02W erbjuder en bekväm och stilren passform, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWW02W_Melon-Orange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWW02W_Melon-Orange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWW02W_Melon-Orange-glowne.jpg"
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
  keywords: ["damernas klassiska sweatshirt set i b&c - ww02w", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas Klassiska Sweatshirt Set i B&C - WW02W - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas klassiska sweatshirt set i b&c - ww02w perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-classic-sweatshirt-set-in-bc/",
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
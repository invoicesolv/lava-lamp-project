import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrarnas öppna huvtröja B&C - WM646 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrarnas öppna huvtröja B&C - WM646 är designad med både stil och funktion i åtanke. Tillverkad av högkvalitativ bomulls- och polyestermix, kombinerar denna huvtröja slitstyrka med mjuk komfort. Den öppna designen med dragkedja gör den idealisk för lager på lager-styling, vilket gör den till ett mångsidigt plagg för alla säsonger. Huvtröjan erbjuder en perfekt yta för både tryck och broderi, vilket gör den till ett utmärkt val för företag eller event där anpassning är nyckeln. Dess klassiska passform säkerställer att den sitter bra på de flesta kroppstyper, samtidigt som den elastiska ribbningen vid ärmslut och nederkant ger en smidig och bekväm passform. Den professionella finishen och hållbara konstruktionen gör att denna huvtröja bibehåller sin form och färg även efter många tvättar. Med snabb leverans och en tidlös design är B&C - WM646 ett självklart val för dem som söker en pålitlig och stilren huvtröja.",
  keywords: "herrarnas öppna huvtröja b&c - wm646, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrarnas öppna huvtröja B&C - WM646 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrarnas öppna huvtröja b&c - wm646 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-unbuttoned-hooded-sweatshirt-bc-wm646",
  name: "Herrarnas öppna huvtröja B&C - WM646",
  articleNumber: "HERRARNAS-PPNA-HUVTRJA-BC---WM646",
  description: "Högkvalitativ herrarnas öppna huvtröja b&c - wm646 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrarnas öppna huvtröja B&C - WM646 är en stilren och bekväm huvtröja, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWM646_Navy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWM646_Navy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWM646_Navy-glowne.jpg"
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
  keywords: ["herrarnas öppna huvtröja b&c - wm646", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrarnas öppna huvtröja B&C - WM646 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrarnas öppna huvtröja b&c - wm646 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-unbuttoned-hooded-sweatshirt-bc/",
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
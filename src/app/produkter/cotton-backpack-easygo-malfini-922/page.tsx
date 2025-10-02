import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Bomullsryggsäck Easygo Malfini - 922 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Bomullsryggsäcken Easygo Malfini - 922 är en mångsidig och hållbar ryggsäck, tillverkad av 100% naturlig bomull. Denna ryggsäck erbjuder en perfekt yta för tryck och broderi, vilket gör den till ett utmärkt val för företag och evenemang som söker anpassade lösningar. Materialet är mjukt men slitstarkt, vilket garanterar långvarig användning och hållbarhet även vid daglig användning. Designen är både stilren och funktionell med rymliga fack som gör det enkelt att organisera och förvara dina tillhörigheter. Dess justerbara axelremmar erbjuder en bekväm passform för alla användare, vilket gör den idealisk för både barn och vuxna. Ryggsäckens lätta vikt gör den enkel att bära med sig överallt, från skolan till kontoret eller på resan. Denna ryggsäck är inte bara praktisk, utan också miljövänlig tack vare sitt naturliga bomullsmaterial. Dessutom säkerställer den professionella finishen att varje detalj är noggrant bearbetad för att möta högsta kvalitetsstandarder. Med snabb leverans kan du snart njuta av denna eleganta och funktionella ryggsäck, perfekt för personlig anpassning och daglig användning.",
  keywords: "bomullsryggsäck easygo malfini - 922, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Bomullsryggsäck Easygo Malfini - 922 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ bomullsryggsäck easygo malfini - 922 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cotton-backpack-easygo-malfini-922",
  name: "Bomullsryggsäck Easygo Malfini - 922",
  articleNumber: "BOMULLSRYGGSCK-EASYGO-MALFINI---922",
  description: "Högkvalitativ bomullsryggsäck easygo malfini - 922 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Bomullsryggsäcken Easygo Malfini är den perfekta följeslagaren, tillverkad av högkvalitativ bomull och idealisk för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/922_07_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/922_07_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/922_07_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
    ]
  },
  category: "Väskor",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["bomullsryggsäck easygo malfini - 922", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Bomullsryggsäck Easygo Malfini - 922 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ bomullsryggsäck easygo malfini - 922 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cotton-backpack-easygo-malfini/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrfleecejacka Malfini - 501 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrfleecejacka Malfini - 501 är tillverkad av högkvalitativ fleece som ger optimal värme och mjukhet, vilket gör den idealisk för kallare dagar. Materialet är noggrant utvalt för att säkerställa att jackan inte bara känns bekväm utan även håller sin form och färg över tid, även efter upprepade tvättar. Jackans design är både elegant och funktionell, vilket ger en stilren look samtidigt som den bibehåller maximal komfort. Denna jacka är perfekt för tryck och broderi, tack vare dess släta yta som ger en professionell finish. Oavsett om du vill anpassa den med ett företagslogotyp eller ett personligt motiv, kommer de detaljerade mönstren att framträda tydligt och hållbart. Passformen är noggrant utformad för att ge en skräddarsydd känsla utan att begränsa rörelsefriheten. De praktiska fickorna är strategiskt placerade för enkel åtkomst och extra funktionalitet. Med snabb leverans kan du snart njuta av denna mångsidiga jacka, perfekt för både vardagsbruk och mer formella tillfällen.",
  keywords: "herrfleecejacka malfini - 501, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrfleecejacka Malfini - 501 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrfleecejacka malfini - 501 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-fleece-jacket-malfini-501",
  name: "Herrfleecejacka Malfini - 501",
  articleNumber: "HERRFLEECEJACKA-MALFINI---501",
  description: "Högkvalitativ herrfleecejacka malfini - 501 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrfleecejacka Malfini - 501 erbjuder utmärkt värme och komfort med en perfekt yta för tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/501_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/501_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/501_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["herrfleecejacka malfini - 501", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrfleecejacka Malfini - 501 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrfleecejacka malfini - 501 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-fleece-jacket/",
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
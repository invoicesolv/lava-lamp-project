import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Fleecejacka HI-Q Malfini - 506 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Fleecejacka HI-Q Malfini - 506 kombinerar stil och funktionalitet med sin mjuka och varma fleecekonstruktion. Tillverkad av högkvalitativt material, denna jacka erbjuder både komfort och hållbarhet, vilket gör den idealisk för dagligt bruk eller som en del av din arbetsuniform. Jackans material är perfekt för både tryck och broderi, vilket ger en professionell finish som håller sig snygg tvätt efter tvätt. Denna fleecejacka har en modern passform som varken är för tajt eller för lös, vilket garanterar maximal rörelsefrihet och komfort under användning. Den är utrustad med praktiska fickor där du kan förvara dina personliga tillhörigheter, samt en dragkedja för enkel på- och avklädning. Med fokus på hållbarhet och kvalitet är fleecejacka HI-Q Malfini - 506 ett utmärkt val för företag som vill profilera sin personal med enhetliga kläder. Den snabba leveranstiden gör att du snabbt kan få dina nya jackor, redo att användas eller dekoreras med din logotyp.",
  keywords: "fleecejacka hi-q malfini - 506, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Fleecejacka HI-Q Malfini - 506 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ fleecejacka hi-q malfini - 506 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "fleece-jacket-hi-q-malfini-506",
  name: "Fleecejacka HI-Q Malfini - 506",
  articleNumber: "FLEECEJACKA-HI-Q-MALFINI---506",
  description: "Högkvalitativ fleecejacka hi-q malfini - 506 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Fleecejacka HI-Q Malfini - 506 är en högkvalitativ fleecejacka perfekt för tryck och broderi, designad för komfort och hållbarhet.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/506_02_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/506_02_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/506_02_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["fleecejacka hi-q malfini - 506", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Fleecejacka HI-Q Malfini - 506 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ fleecejacka hi-q malfini - 506 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/fleece-jacket-hi-q/",
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
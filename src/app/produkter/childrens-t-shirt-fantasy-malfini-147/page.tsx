import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Fantasy Malfini - 147 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barn T-shirt Fantasy Malfini - 147 erbjuder en enastående kvalitet med sin mjuka bomullsmaterial, vilket garanterar maximal komfort för barnens aktiva vardag. Materialet är slitstarkt och behåller sin form och färg även efter många tvättar, vilket gör den till ett hållbart val för föräldrar som söker långvarig användning. Den här t-shirten är utmärkt för tryck och broderi, vilket ger ett professionellt resultat som håller sig snyggt över tid. Passformen är designad för att ge barnen frihet att röra sig, oavsett om de är i skolan eller på lekplatsen. Med en klassisk och tidlös design är denna t-shirt lätt att kombinera med andra plagg för olika tillfällen. Dess neutrala färger passar perfekt som basplagg, vilket gör den till en favorit i barnens garderob. För företag och skolor som letar efter profilkläder, erbjuder denna t-shirt en perfekt yta för att lägga till logotyper eller andra designelement. Med snabba leveranstider och en professionell finish är Barn T-shirt Fantasy Malfini - 147 det självklara valet för alla som behöver pålitliga och stilrena t-shirts för barn.",
  keywords: "barn t-shirt fantasy malfini - 147, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Fantasy Malfini - 147 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt fantasy malfini - 147 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-fantasy-malfini-147",
  name: "Barn T-shirt Fantasy Malfini - 147",
  articleNumber: "BARN-T-SHIRT-FANTASY-MALFINI---147",
  description: "Högkvalitativ barn t-shirt fantasy malfini - 147 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barn T-shirt Fantasy Malfini - 147 är den perfekta kombinationen av komfort och stil, idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/147_91_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100_glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/147_91_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100_glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/147_91_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100_glowne.jpg"
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
  keywords: ["barn t-shirt fantasy malfini - 147", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Fantasy Malfini - 147 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt fantasy malfini - 147 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-fantasy/",
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
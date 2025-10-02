import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt V-ringad Dream Malfini - 128 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt V-ringad Dream Malfini - 128 är tillverkad av högkvalitativ bomull, vilket säkerställer en mjuk och behaglig känsla mot huden. Den V-ringade halslinningen ger en stilfull och feminin touch som passar perfekt för alla tillfällen. T-shirten är designad för att ge maximal komfort med en figursydd passform som bevarar sin form även efter flera tvättar. Denna t-shirt är speciellt framtagen för att vara en perfekt bas för både tryck och broderi. Det släta materialet ger en jämn yta som gör att tryck och broderier framträder tydligt och hållbart. Oavsett om du vill ha en logotyp, ett citat eller en illustration, kommer denna t-shirt att lyfta fram din design på bästa sätt. Med fokus på hållbarhet och en professionell finish, är Dream Malfini - 128 inte bara ett stilrent plagg utan även ett långsiktigt val i din garderob. Den är enkel att sköta med sin tvättbeständiga kvalitet och kommer snabbt att bli en favorit bland dina basplagg. Dessutom erbjuder vi snabb leverans, så du kan njuta av din nya t-shirt utan dröjsmål.",
  keywords: "dam t-shirt v-ringad dream malfini - 128, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt V-ringad Dream Malfini - 128 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt v-ringad dream malfini - 128 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-v-neck-dream-malfini-128",
  name: "Dam T-shirt V-ringad Dream Malfini - 128",
  articleNumber: "DAM-T-SHIRT-V-RINGAD-DREAM-MALFINI---128",
  description: "Högkvalitativ dam t-shirt v-ringad dream malfini - 128 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt V-ringad Dream Malfini - 128 är en elegant och bekväm t-shirt med en perfekt passform, idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/128_07_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/128_07_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/128_07_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["dam t-shirt v-ringad dream malfini - 128", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt V-ringad Dream Malfini - 128 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt v-ringad dream malfini - 128 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-v-neck-dream-malfini/",
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
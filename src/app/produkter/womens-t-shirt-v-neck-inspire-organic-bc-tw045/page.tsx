import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt v-ringad Inspire ekologisk B&C - TW045 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Denna dam T-shirt från B&C är en utmärkt kombination av stil, komfort och hållbarhet. Tillverkad av 100% ekologisk bomull, erbjuder denna v-ringade T-shirt en mjuk och naturlig känsla mot huden, vilket gör den idealisk för daglig användning. Den ekologiska bomullen säkerställer inte bara en högkvalitativ produkt utan bidrar även till en mer hållbar och miljövänlig produktion. Med sin klassiska v-ringning och moderna passform är denna T-shirt designad för att framhäva en feminin siluett, samtidigt som den är tillräckligt mångsidig för att passa olika typer av tryck och broderier. Det släta och jämna tyget gör den till en perfekt duk för alla dina kreativa projekt, oavsett om det är företagslogotyper, personliga motiv eller andra designidéer. Den professionella finishen på T-shirten säkerställer att den behåller sin form och färg efter tvätt, vilket gör den till ett pålitligt plagg i garderoben. B&C:s T-shirt erbjuder också snabb leverans, så att du kan få dina produkter i tid för eventuella evenemang eller kampanjer. Välj denna v-ringade T-shirt för en kombination av stil, komfort och hållbarhet som varar.",
  keywords: "dam t-shirt v-ringad inspire ekologisk b&c - tw045, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt v-ringad Inspire ekologisk B&C - TW045 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt v-ringad inspire ekologisk b&c - tw045 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-v-neck-inspire-organic-bc-tw045",
  name: "Dam T-shirt v-ringad Inspire ekologisk B&C - TW045",
  articleNumber: "DAM-T-SHIRT-V-RINGAD-INSPIRE-EKOLOGISK-BC---TW045",
  description: "Högkvalitativ dam t-shirt v-ringad inspire ekologisk b&c - tw045 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt v-ringad Inspire i ekologisk bomull från B&C, perfekt för tryck och broderi med en mjuk och bekväm passform.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW045_Khaki-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW045_Khaki-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW045_Khaki-glowne.jpg"
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
  keywords: ["dam t-shirt v-ringad inspire ekologisk b&c - tw045", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt v-ringad Inspire ekologisk B&C - TW045 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt v-ringad inspire ekologisk b&c - tw045 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-v-neck-inspire-organic-bc/",
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
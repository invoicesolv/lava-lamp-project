import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt v-ringad Inspire ekologisk B&C - TM044 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt v-ringad Inspire från B&C - TM044 är tillverkad av 100% ekologisk bomull, vilket garanterar både komfort och hållbarhet. Denna t-shirt är perfekt för dem som söker en miljövänlig lösning utan att kompromissa med stil och funktion. Den v-ringade designen ger en modern touch, vilket gör den idealisk för både vardagligt bruk och mer formella tillfällen. Materialet är speciellt utvalt för att vara mjukt mot huden och samtidigt hålla formen även efter många tvättar. Denna t-shirt är särskilt lämplig för tryck och broderi, vilket gör den till ett utmärkt val för företag som vill profilera sig eller för personliga anpassningar. Den jämna ytan säkerställer att trycket fäster perfekt och håller länge. Passformen är anpassad för att ge maximal komfort utan att kompromissa med stilen. Den är lätt och luftig, vilket gör den perfekt för varmare dagar eller som ett lager under en tröja eller jacka. Dessutom är den designad med hållbarhet i åtanke, vilket innebär att du kan njuta av din t-shirt under lång tid. Med snabb leverans kan du snart ha denna stiliga och funktionella t-shirt i din garderob.",
  keywords: "herr t-shirt v-ringad inspire ekologisk b&c - tm044, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt v-ringad Inspire ekologisk B&C - TM044 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt v-ringad inspire ekologisk b&c - tm044 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-v-neck-inspire-organic-bc-tm044",
  name: "Herr T-shirt v-ringad Inspire ekologisk B&C - TM044",
  articleNumber: "HERR-T-SHIRT-V-RINGAD-INSPIRE-EKOLOGISK-BC---TM044",
  description: "Högkvalitativ herr t-shirt v-ringad inspire ekologisk b&c - tm044 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt v-ringad Inspire från B&C är en ekologisk t-shirt som kombinerar komfort och stil, perfekt för tryck och broderi.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTM044_Khaki-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTM044_Khaki-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTM044_Khaki-glowne.jpg"
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
  keywords: ["herr t-shirt v-ringad inspire ekologisk b&c - tm044", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt v-ringad Inspire ekologisk B&C - TM044 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt v-ringad inspire ekologisk b&c - tm044 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-v-neck-inspire-organic-bc/",
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
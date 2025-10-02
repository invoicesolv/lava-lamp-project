import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Sportig SOL's - L198 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Sportig SOL's L198 erbjuder en perfekt balans mellan stil och funktionalitet, vilket gör den till ett utmärkt val för både vardagsbruk och sportaktiviteter. Tillverkad av högkvalitativt material, denna t-shirt är både mjuk och slitstark, vilket garanterar långvarig användning. Materialet andas väl och ger komfort även under intensiva aktiviteter, vilket gör den idealisk för sport och träning. Med en genomtänkt design och en bekväm passform, är SOL's L198 t-shirten lätt att bära hela dagen. Den är speciellt utformad för att ge en perfekt yta för tryck och broderi, vilket gör den till ett populärt val för företag och föreningar som vill profilera sig. T-shirten finns i flera storlekar för att passa alla kroppstyper och har en modern, sportig look som passar i många sammanhang. Denna t-shirt är inte bara stilren utan också hållbar, tack vare sitt slitstarka material som står emot slitage och tvätt. Den professionella finishen gör den lika lämplig för fritid som för mer formella tillfällen. Med snabb leverans, kan du lita på att få din SOL's L198 t-shirt i tid för ditt nästa event.",
  keywords: "herr t-shirt sportig sol's - l198, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Sportig SOL's - L198 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt sportig sol's - l198 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-sporty-sols-l198",
  name: "Herr T-shirt Sportig SOL's - L198",
  articleNumber: "HERR-T-SHIRT-SPORTIG-SOLS---L198",
  description: "Högkvalitativ herr t-shirt sportig sol's - l198 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Sportig SOL's L198 är den perfekta kombinationen av stil och komfort, idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L198K_Aqua-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L198K_Aqua-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L198K_Aqua-glowne.jpg"
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
  keywords: ["herr t-shirt sportig sol's - l198", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Sportig SOL's - L198 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt sportig sol's - l198 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-sporty/",
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
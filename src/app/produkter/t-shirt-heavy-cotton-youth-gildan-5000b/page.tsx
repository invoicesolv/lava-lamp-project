import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "T-shirt Tung Bomull Ungdom Gildan - 5000B - Bulkprodukt för tryck eget | Tryckeget",
  description: "Gildan 5000B T-shirt är tillverkad av 100% tung bomull vilket ger den en fantastisk styrka och hållbarhet, perfekt för ungdomar som alltid är i rörelse. Denna t-shirt är designad för att ge maximal komfort med en klassisk passform som inte bara känns bra utan också ser snygg ut. Dess höga kvalitet gör den idealisk för tryck och broderi, vilket innebär att du enkelt kan anpassa den med dina egna designer eller logotyper för en personlig touch. Den förstärkta kragen och dubbla sömmar garanterar en långvarig användning, medan de förkrympta materialen säkerställer att t-shirten behåller sin passform och storlek tvätt efter tvätt. Med Gildan 5000B kan du förvänta dig en snabb leverans och en professionell finish som gör den till ett utmärkt val för skolor, evenemang eller vardagsbruk.",
  keywords: "t-shirt tung bomull ungdom gildan - 5000b, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "T-shirt Tung Bomull Ungdom Gildan - 5000B - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ t-shirt tung bomull ungdom gildan - 5000b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "t-shirt-heavy-cotton-youth-gildan-5000b",
  name: "T-shirt Tung Bomull Ungdom Gildan - 5000B",
  articleNumber: "T-SHIRT-TUNG-BOMULL-UNGDOM-GILDAN---5000B",
  description: "Högkvalitativ t-shirt tung bomull ungdom gildan - 5000b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Gildan 5000B T-shirt är en robust och bekväm t-shirt i tung bomull, perfekt för ungdomar och idealisk för tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/G5000K_Lime-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/G5000K_Lime-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/G5000K_Lime-glowne.jpg"
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
  keywords: ["t-shirt tung bomull ungdom gildan - 5000b", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "T-shirt Tung Bomull Ungdom Gildan - 5000B - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ t-shirt tung bomull ungdom gildan - 5000b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/t-shirt-heavy-cotton-youth-gildan/",
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
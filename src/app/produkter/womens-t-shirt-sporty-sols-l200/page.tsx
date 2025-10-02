import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Sportig SOL's - L200 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Sportig SOL's - L200 är ett utmärkt val för både vardagsbruk och sportaktiviteter. Den är tillverkad av ett slitstarkt och mjukt bomullsblandat material som säkerställer både komfort och hållbarhet. Den sportiga designen gör den idealisk för ett aktivt liv, samtidigt som den är perfekt för att anpassas med tryck och broderi för en personlig touch eller företagsprofilering. T-shirten har en modern passform som smickrar figuren utan att kompromissa med rörelsefrihet. Det lätta och andningsbara materialet gör den behaglig att bära även under längre perioder, vilket gör den till ett utmärkt val för både inomhus- och utomhusaktiviteter. SOL's - L200 är designad med fokus på kvalitet och hållbarhet, vilket innebär att den behåller form och färg även efter upprepad tvätt. Den professionella finishen gör den lämplig för både casual och professionella sammanhang. Med snabb leverans kan du snabbt få denna t-shirt anpassad och klar för användning.",
  keywords: "dam t-shirt sportig sol's - l200, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Sportig SOL's - L200 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt sportig sol's - l200 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-sporty-sols-l200",
  name: "Dam T-shirt Sportig SOL's - L200",
  articleNumber: "DAM-T-SHIRT-SPORTIG-SOLS---L200",
  description: "Högkvalitativ dam t-shirt sportig sol's - l200 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Sportig SOL's - L200 är en mångsidig och bekväm t-shirt perfekt för tryck och broderi. Tillverkad av högkvalitativt material, erbjuder den både komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L200_Aqua-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L200_Aqua-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L200_Aqua-glowne.jpg"
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
  keywords: ["dam t-shirt sportig sol's - l200", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Sportig SOL's - L200 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt sportig sol's - l200 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-sporty/",
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
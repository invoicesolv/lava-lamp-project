import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Regent SOL's - 11380 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Regent SOL's är ett utmärkt val för både tryck och broderi. Tillverkad av 100% bomull, erbjuder denna t-shirt en mjuk och bekväm känsla vid varje användning. Dess högkvalitativa material gör den idealisk för att skapa anpassade tryck eller broderier som ser professionella ut och håller länge.  Designen är klassisk med en modern passform som gör den lämplig för alla kroppstyper. T-shirten har dubbelstickade sömmar för extra hållbarhet, vilket säkerställer att den behåller sin form och stil även efter många tvättar.  Med sin släta yta är denna t-shirt perfekt för detaljrika tryck, vilket gör den till ett populärt val för företag, evenemang och personliga projekt. Den är dessutom lätt att underhålla och erbjuder snabb leverans, vilket gör den till ett smidigt och pålitligt alternativ för alla dina tryckbehov.",
  keywords: "herr t-shirt regent sol's - 11380, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Regent SOL's - 11380 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt regent sol's - 11380 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-regent-sols-11380",
  name: "Herr T-shirt Regent SOL's - 11380",
  articleNumber: "HERR-T-SHIRT-REGENT-SOLS---11380",
  description: "Högkvalitativ herr t-shirt regent sol's - 11380 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Regent SOL's är perfekt för tryck och broderi med högkvalitativt bomullsmaterial som garanterar komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L150_Orange-glowne-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L150_Orange-glowne-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L150_Orange-glowne-1.jpg"
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
  keywords: ["herr t-shirt regent sol's - 11380", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Regent SOL's - 11380 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt regent sol's - 11380 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-regent-sols/",
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
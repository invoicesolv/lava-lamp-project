import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrtröja med ficka Inspire B&C - WU33B - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrtröjan Inspire B&C - WU33B är det ultimata valet för den som söker både stil och funktionalitet. Tillverkad av högkvalitativ bomull erbjuder denna tröja en mjuk och behaglig känsla mot huden, vilket gör den idealisk för både vardagsbruk och mer formella tillfällen. Tröjan har en modern passform som smickrar kroppens konturer utan att kompromissa med komforten. Den praktiska fickan på framsidan gör denna tröja unik och ger extra utrymme för små tillhörigheter, vilket är både funktionellt och stilrent. Inspire B&C - WU33B är särskilt utformad för att ge en jämn yta för tryck och broderi, vilket gör den perfekt för företag, skolor eller evenemang som vill anpassa sina kläder med logotyper eller namn. Tröjans hållbara material och förstärkta sömmar garanterar långvarig användning även efter upprepade tvättar, vilket försäkrar att den behåller sin form och färg. Dessutom erbjuder vi snabb leverans så att du kan få tillgång till dina personliga och professionella kläder utan dröjsmål. Välj Inspire B&C - WU33B för en stilren och funktionell tröja med oändliga anpassningsmöjligheter.",
  keywords: "herrtröja med ficka inspire b&c - wu33b, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrtröja med ficka Inspire B&C - WU33B - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrtröja med ficka inspire b&c - wu33b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-sweatshirt-with-pocket-inspire-bc-wu33b",
  name: "Herrtröja med ficka Inspire B&C - WU33B",
  articleNumber: "HERRTRJA-MED-FICKA-INSPIRE-BC---WU33B",
  description: "Högkvalitativ herrtröja med ficka inspire b&c - wu33b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrtröjan Inspire B&C - WU33B kombinerar komfort och stil med en praktisk ficka, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWU33B_Sage-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWU33B_Sage-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWU33B_Sage-glowne.jpg"
    ]
  },
  category: "Tröjor",
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
  keywords: ["herrtröja med ficka inspire b&c - wu33b", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrtröja med ficka Inspire B&C - WU33B - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrtröja med ficka inspire b&c - wu33b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-sweatshirt-with-pocket-inspire-bc/",
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
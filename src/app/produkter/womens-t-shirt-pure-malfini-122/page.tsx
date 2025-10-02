import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Pure Malfini - 122 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Pure Malfini - 122 är tillverkad av 100% bomull, vilket ger en mjuk och behaglig känsla mot huden. Denna T-shirt erbjuder en utmärkt yta för både tryck och broderi, vilket gör den till ett perfekt val för företag, event eller personliga designprojekt. Den klassiska passformen garanterar komfort hela dagen, samtidigt som den moderna designen ger ett professionellt intryck. Materialet är inte bara mjukt, utan också hållbart, vilket gör att T-shirten behåller sin form och färg även efter många tvättar. Den finns i flera färger och storlekar för att passa olika behov och preferenser. Denna T-shirt är idealisk för både vardagsbruk och som profilkläder. Med sin enkla men ändå eleganta design, kan Dam T-shirt Pure Malfini - 122 enkelt stylas för olika tillfällen. Oavsett om du bär den som den är eller som en del av en lager-på-lager-look, kommer du alltid att känna dig bekväm och se professionell ut. Dessutom erbjuder vi snabb leverans, så du kan få dina anpassade T-shirts i tid till ditt nästa event.",
  keywords: "dam t-shirt pure malfini - 122, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Pure Malfini - 122 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt pure malfini - 122 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-pure-malfini-122",
  name: "Dam T-shirt Pure Malfini - 122",
  articleNumber: "DAM-T-SHIRT-PURE-MALFINI---122",
  description: "Högkvalitativ dam t-shirt pure malfini - 122 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Pure Malfini - 122 är en stilren och bekväm T-shirt i högkvalitativt material, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/122_30_A-glowne-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/122_30_A-glowne-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/122_30_A-glowne-1620x1620.png"
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
  keywords: ["dam t-shirt pure malfini - 122", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Pure Malfini - 122 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt pure malfini - 122 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-pure-malfini/",
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
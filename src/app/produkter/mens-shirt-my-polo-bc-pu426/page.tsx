import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrskjorta My Polo B&C - PU426 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrskjorta My Polo B&C - PU426 kombinerar tidlös stil med modern komfort. Tillverkad av 100% ringspunnen bomull, erbjuder denna poloskjorta en mjuk och skön passform som andas väl, vilket gör den idealisk för både vardagsbruk och mer formella sammanhang. Den släta ytan på materialet gör den särskilt lämpad för tryck och broderi, vilket ger en professionell finish oavsett vilket motiv du väljer att applicera. Poloskjortan har en klassisk krage och en knappslå med tre knappar, vilket ger en stilren look som aldrig går ur modet. Passformen är modern och något figurnära, vilket ger en stilren siluett utan att kompromissa med rörelsefriheten. Den är designad för att hålla formen och färgen även efter upprepad tvätt, vilket gör den till ett hållbart val för din garderob. Perfekt för företag som söker profilkläder, eller för individuella projekt där personlig anpassning önskas. Med vår snabba leverans kan du få dina skräddarsydda skjortor i tid för alla evenemang eller kampanjer. Välj Herrskjorta My Polo B&C - PU426 för en pålitlig och elegant lösning för alla dina tryck- och broderibehov.",
  keywords: "herrskjorta my polo b&c - pu426, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrskjorta My Polo B&C - PU426 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrskjorta my polo b&c - pu426 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-shirt-my-polo-bc-pu426",
  name: "Herrskjorta My Polo B&C - PU426",
  articleNumber: "HERRSKJORTA-MY-POLO-BC---PU426",
  description: "Högkvalitativ herrskjorta my polo b&c - pu426 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrskjorta My Polo B&C - PU426 är en stilren och bekväm poloskjorta i högkvalitativ bomull, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BCPW463_Nude-2.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BCPW463_Nude-2.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BCPW463_Nude-2.jpg"
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
  keywords: ["herrskjorta my polo b&c - pu426", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrskjorta My Polo B&C - PU426 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrskjorta my polo b&c - pu426 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-my-polo/",
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
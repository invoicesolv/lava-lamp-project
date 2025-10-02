import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damers polo Lyx Tee Jays - TJ145 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damers polo Lyx Tee Jays - TJ145 är en tröja som definierar lyx och stil. Tillverkad av 100% kammad bomull, ger denna polo en mjuk och behaglig känsla mot huden. Den högkvalitativa bomullen gör den inte bara skön att bära, utan också idealisk för både tryck och broderi, vilket gör den till ett utmärkt val för företag och organisationer som vill framhäva sin logotyp med en professionell finish. Passformen är noggrant utformad för att smickra den kvinnliga figuren utan att kompromissa med komforten. Den klassiska designen med subtila detaljer i kragen och ärmarna ger ett sofistikerat utseende som är perfekt både för vardagligt och mer formellt bruk. Hållbarhet är i fokus med denna polo, då materialet behåller sin färg och form tvätt efter tvätt. Den är enkel att underhålla och behåller sin eleganta look även efter frekvent användning. Med snabb leverans kan du snabbt få denna tidlösa polo i din garderob, redo att bäras eller användas som en canvas för ditt unika tryck eller broderi.",
  keywords: "damers polo lyx tee jays - tj145, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damers polo Lyx Tee Jays - TJ145 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damers polo lyx tee jays - tj145 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-luxury-tee-jays-tj145",
  name: "Damers polo Lyx Tee Jays - TJ145",
  articleNumber: "DAMERS-POLO-LYX-TEE-JAYS---TJ145",
  description: "Högkvalitativ damers polo lyx tee jays - tj145 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damers polo Lyx Tee Jays - TJ145 erbjuder en kombination av elegant stil och komfort med högkvalitativ bomull och perfekt passform.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/TJ145_Light-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/TJ145_Light-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/TJ145_Light-Blue-glowne.jpg"
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
  keywords: ["damers polo lyx tee jays - tj145", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damers polo Lyx Tee Jays - TJ145 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damers polo lyx tee jays - tj145 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-luxury/",
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
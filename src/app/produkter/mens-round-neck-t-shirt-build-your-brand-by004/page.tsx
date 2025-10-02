import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr Rundhals T-shirt Bygg Ditt Varumärke - BY004 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr Rundhals T-shirt BY004 är den idealiska basen för att skapa en unik och personlig stil. Tillverkad av 100% högkvalitativ bomull, erbjuder denna t-shirt en mjuk och bekväm känsla mot huden, vilket gör den perfekt för vardagsbruk. Den rundade halsringningen ger en klassisk och tidlös look som passar alla tillfällen.  Denna t-shirt är särskilt populär för tryck och broderi, tack vare dess släta och jämna yta som ger en professionell finish varje gång. Oavsett om du vill trycka en företagslogga, ett kreativt mönster eller brodera ett subtilt monogram, kommer BY004 att leverera ett imponerande resultat.  T-shirten har en modern passform som är noggrant utformad för att sitta perfekt utan att kompromissa med komforten. Dess hållbara konstruktion gör den slitstark och långvarig, även vid regelbunden tvätt. Med snabb leverans kan du snart ha din perfekta t-shirt redo för användning och branding.",
  keywords: "herr rundhals t-shirt bygg ditt varumärke - by004, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr Rundhals T-shirt Bygg Ditt Varumärke - BY004 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr rundhals t-shirt bygg ditt varumärke - by004 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-round-neck-t-shirt-build-your-brand-by004",
  name: "Herr Rundhals T-shirt Bygg Ditt Varumärke - BY004",
  articleNumber: "HERR-RUNDHALS-T-SHIRT-BYGG-DITT-VARUMRKE---BY004",
  description: "Högkvalitativ herr rundhals t-shirt bygg ditt varumärke - by004 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr Rundhals T-shirt BY004 är perfekt för att bygga ditt varumärke med sin högkvalitativa bomull och professionella finish.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY004_Burgundy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY004_Burgundy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY004_Burgundy-glowne.jpg"
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
  keywords: ["herr rundhals t-shirt bygg ditt varumärke - by004", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr Rundhals T-shirt Bygg Ditt Varumärke - BY004 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr rundhals t-shirt bygg ditt varumärke - by004 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-round-neck-t-shirt/",
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
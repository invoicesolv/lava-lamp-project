import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas Terry Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY069 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damernas Terry Zip Hoodie Sweatshirt BY069 är det perfekta plagget för dig som vill kombinera komfort och stil med möjligheten att bygga ditt eget varumärke. Tillverkad av högkvalitativ terry bomull, erbjuder denna hoodie en mjuk och bekväm känsla mot huden, vilket gör den idealisk för dagligt bruk. Den är designad för att ge en avslappnad passform som passar perfekt för alla kroppsformer och rörelser. Denna hoodie är särskilt lämpad för tryck och broderi, vilket gör den till ett utmärkt val för företag som vill profilera sitt varumärke. Materialets hållbarhet säkerställer att alla tryck och broderier behåller sin skärpa och färg, även efter många tvättar. Detta gör den till ett långsiktigt investeringsplagg för både personligt och professionellt bruk. Med sin professionella finish och stilrena design är denna hoodie inte bara ett klädesplagg, utan också ett uttryck för kvalitet och noggrannhet. De högkvalitativa dragkedjorna och de förstärkta sömmarna garanterar långvarig hållbarhet, vilket gör hoodie'n till ett pålitligt val för alla dina behov, från sportaktiviteter till casual wear. Dessutom erbjuder vi snabb leverans för att du snabbt ska kunna ta del av denna fantastiska produkt.",
  keywords: "damernas terry zip hoodie sweatshirt bygg ditt varumärke - by069, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas Terry Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY069 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas terry zip hoodie sweatshirt bygg ditt varumärke - by069 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-terry-zip-hoody-sweatshirt-build-your-brand-by069",
  name: "Damernas Terry Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY069",
  articleNumber: "DAMERNAS-TERRY-ZIP-HOODIE-SWEATSHIRT-BYGG-DITT-VARUMRKE---BY069",
  description: "Högkvalitativ damernas terry zip hoodie sweatshirt bygg ditt varumärke - by069 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas Terry Zip Hoodie BY069 erbjuder en perfekt kombination av komfort och stil, idealisk för tryck och broderi för att bygga ditt varumärke.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY069_Charcoal-Heather-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY069_Charcoal-Heather-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY069_Charcoal-Heather-glowne.jpg"
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
  keywords: ["damernas terry zip hoodie sweatshirt bygg ditt varumärke - by069", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas Terry Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY069 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas terry zip hoodie sweatshirt bygg ditt varumärke - by069 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-terry-zip-hoody-sweatshirt/",
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
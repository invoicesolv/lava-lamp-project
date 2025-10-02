import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Exact 190 B&C - TU03T - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Exact 190 från B&C är en premiumt-shirt som kombinerar stil, komfort och funktionalitet. Tillverkad av 100% ringspunnen bomull, erbjuder denna t-shirt en mjuk och slät yta som är idealisk för både tryck och broderi. Med en gramvikt på 190 g/m², är denna t-shirt robust och håller formen tvätt efter tvätt, vilket säkerställer långvarig användning. Designad för en modern passform, har denna t-shirt en klassisk rund hals och korta ärmar, vilket gör den till ett mångsidigt plagg i vilken garderob som helst. Den finns tillgänglig i en rad olika färger, vilket gör det enkelt att välja en som passar just ditt behov eller företagets profil. Brett använd i professionella sammanhang, är Herr T-shirt Exact 190 ett populärt val för event, arbetskläder och promotion. Den professionella finishen och slitstarka konstruktionen gör den till en favorit bland företag som söker efter en pålitlig produkt för sina reklamkampanjer. Med snabb leverans och kvalitetsgaranti, är denna t-shirt redo att förse ditt företag med ett anpassningsbart och högkvalitativt plagg.",
  keywords: "herr t-shirt exact 190 b&c - tu03t, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Exact 190 B&C - TU03T - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt exact 190 b&c - tu03t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-exact-190-bc-tu03t",
  name: "Herr T-shirt Exact 190 B&C - TU03T",
  articleNumber: "HERR-T-SHIRT-EXACT-190-BC---TU03T",
  description: "Högkvalitativ herr t-shirt exact 190 b&c - tu03t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Exact 190 från B&C är det perfekta valet för tryck och broderi, tillverkad av högkvalitativ bomull för bästa komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTU03T_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTU03T_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTU03T_Black-glowne.jpg"
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
  keywords: ["herr t-shirt exact 190 b&c - tu03t", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Exact 190 B&C - TU03T - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt exact 190 b&c - tu03t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-exact-190-bc/",
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
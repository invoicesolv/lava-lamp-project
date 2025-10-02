import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barnfleece North SOL's - L742K - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barnfleece North SOL's - L742K är en utmärkt fleecejacka för barn, designad med både komfort och hållbarhet i åtanke. Tillverkad av högkvalitativt fleece-material, erbjuder denna jacka en mjuk och varm känsla, samtidigt som den är tillräckligt robust för att tåla barnens aktiva livsstil. Jackans material är särskilt anpassat för att ge en smidig yta för både tryck och broderi, vilket gör den idealisk för att anpassas med logotyper eller personliga motiv. Passformen är utformad för att ge maximal rörelsefrihet, vilket gör den perfekt för både lek och vardagsbruk. Den har en dragkedja framtill för enkel på- och avtagning, och elastiska muddar för att hålla kylan ute. Färgen och designen ger en stilren och modern look som passar alla tillfällen. Hållbarheten hos Barnfleece North SOL's - L742K gör den till ett utmärkt val för föräldrar som söker långvariga plagg för sina barn. Den är lätt att tvätta och behåller sin form och färg även efter många tvättar. Med snabb leverans kan denna fleecejacka nå kunden i tid för att möta alla behov av bekväma och anpassade barnkläder.",
  keywords: "barnfleece north sol's - l742k, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barnfleece North SOL's - L742K - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barnfleece north sol's - l742k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-fleece-north-sols-l742k",
  name: "Barnfleece North SOL's - L742K",
  articleNumber: "BARNFLEECE-NORTH-SOLS---L742K",
  description: "Högkvalitativ barnfleece north sol's - l742k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barnfleece North SOL's - L742K är en mjuk och slitstark fleecejacka perfekt för barn, idealisk för både tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L742K_Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L742K_Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L742K_Red-glowne.jpg"
    ]
  },
  category: "Jackor",
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
  keywords: ["barnfleece north sol's - l742k", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barnfleece North SOL's - L742K - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barnfleece north sol's - l742k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-fleece-north/",
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
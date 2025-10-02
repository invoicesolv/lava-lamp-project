import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn t-shirt Basic Malfini - 138 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barn t-shirt Basic Malfini - 138 är designad med barnens komfort i åtanke. Tillverkad av högkvalitativt bomullsmaterial som ger en mjuk och behaglig känsla mot huden, samtidigt som det är slitstarkt nog att klara av vardagens äventyr. Denna t-shirt erbjuder en neutral bas som är perfekt för både tryck och broderi, vilket gör den till ett utmärkt val för personliga anpassningar, skoluniformer eller företagsevenemang. Den har en klassisk passform som ger en avslappnad och bekväm känsla, vilket gör den perfekt för lek och rörelse. T-shirten finns i flera olika färger, vilket ger många valmöjligheter för att passa individens stil och preferenser. Ribbad krage och dubbelnålssömmar säkerställer en professionell finish och långvarig hållbarhet. Basic Malfini - 138 erbjuder inte bara stil och komfort, utan även snabb leverans för att möta dina behov i tid. Denna t-shirt är ett utmärkt val för dem som söker en pålitlig och mångsidig basplagg för barnens garderob.",
  keywords: "barn t-shirt basic malfini - 138, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn t-shirt Basic Malfini - 138 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt basic malfini - 138 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-basic-malfini-138",
  name: "Barn t-shirt Basic Malfini - 138",
  articleNumber: "BARN-T-SHIRT-BASIC-MALFINI---138",
  description: "Högkvalitativ barn t-shirt basic malfini - 138 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barn t-shirt Basic Malfini - 138 är en utmärkt kombination av komfort och hållbarhet, idealisk för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/138_64_a_xl-glowne-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/138_64_a_xl-glowne-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/138_64_a_xl-glowne-1620x1620.png"
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
  keywords: ["barn t-shirt basic malfini - 138", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn t-shirt Basic Malfini - 138 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt basic malfini - 138 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-basic-malfini/",
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
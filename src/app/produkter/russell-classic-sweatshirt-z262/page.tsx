import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Russell klassisk sweatshirt - Z262 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Russell klassisk sweatshirt Z262 är en tidlös tröja som kombinerar komfort och stil. Tillverkad av högkvalitativ bomulls- och polyestermix, erbjuder denna sweatshirt både mjukhet och hållbarhet, vilket gör den idealisk för dagligt bruk. Tygets täta väv är särskilt utformat för att ge en jämn och professionell yta för både tryck och broderi, vilket säkerställer att dina designidéer framhävs på bästa möjliga sätt. Sweatshirten har en klassisk passform som ger en avslappnad men ändå snygg silhuett, vilket gör den perfekt för både arbete och fritid. Den ribbstickade halsringningen, muddarna och nederkanten bidrar till en skön och följsam passform, medan den borstad insidan ger extra värme och komfort under kyligare dagar. Förutom att vara stilren är Russell Z262 också hållbar, med sin slitstarka tygkonstruktion som står emot dagligt slitage. Detta gör den till ett utmärkt val för företag som vill profilera sig genom personalplagg, eller för event där enhetliga kläder behövs. Med snabb leverans och högkvalitativ finish är denna sweatshirt ett pålitligt val för alla dina tryck- och broderiprojekt.",
  keywords: "russell klassisk sweatshirt - z262, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Russell klassisk sweatshirt - Z262 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ russell klassisk sweatshirt - z262 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "russell-classic-sweatshirt-z262",
  name: "Russell klassisk sweatshirt - Z262",
  articleNumber: "RUSSELL-KLASSISK-SWEATSHIRT---Z262",
  description: "Högkvalitativ russell klassisk sweatshirt - z262 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Russell klassisk sweatshirt Z262 är perfekt för tryck och broderi med sin hållbara kvalitet och bekväma passform.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z262N_Indigo-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z262N_Indigo-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z262N_Indigo-glowne.jpg"
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
  keywords: ["russell klassisk sweatshirt - z262", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Russell klassisk sweatshirt - Z262 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ russell klassisk sweatshirt - z262 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/russell-classic-sweatshirt/",
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
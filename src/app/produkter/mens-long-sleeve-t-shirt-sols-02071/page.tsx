import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr långärmad t-shirt SOL's - 02071 - Bulkprodukt för tryck eget | Tryckeget",
  description: "SOL's Herr långärmad t-shirt 02071 är tillverkad av högkvalitativ bomull som säkerställer en mjuk och bekväm känsla mot huden. Materialet är idealiskt för både tryck och broderi, vilket gör den till ett utmärkt val för företag eller event som vill profilera sig. Denna t-shirt har en modern passform som passar de flesta kroppstyper, och den långärmade designen ger extra värme och stil under kallare väderförhållanden.  T-shirten är konstruerad för att hålla, med robusta sömmar som står emot daglig användning. Dessutom är den lätt att tvätta och håller formen väl efter flera tvättar, vilket säkerställer ett långvarigt och fräscht utseende. Den professionella finishen ger ett snyggt intryck, medan de neutrala färgerna gör den lätt att matcha med andra plagg.  Med snabb leverans kan du vara säker på att SOL's Herr långärmad t-shirt 02071 når dig i tid för dina behov, oavsett om det är för ett evenemang eller som en del av din vardagsgarderob. Dess kombination av komfort, hållbarhet och mångsidighet gör den till ett utmärkt val för alla tillfällen.",
  keywords: "herr långärmad t-shirt sol's - 02071, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr långärmad t-shirt SOL's - 02071 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr långärmad t-shirt sol's - 02071 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-long-sleeve-t-shirt-sols-02071",
  name: "Herr långärmad t-shirt SOL's - 02071",
  articleNumber: "HERR-LNGRMAD-T-SHIRT-SOLS---02071",
  description: "Högkvalitativ herr långärmad t-shirt sol's - 02071 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "SOL's Herr långärmad t-shirt 02071 kombinerar stil med funktionalitet, perfekt för både tryck och broderi. Mjukt material ger komfort och en utmärkt passform.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L02071_White-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L02071_White-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L02071_White-1.jpg"
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
  keywords: ["herr långärmad t-shirt sol's - 02071", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr långärmad t-shirt SOL's - 02071 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr långärmad t-shirt sol's - 02071 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-long-sleeve-t-shirt/",
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
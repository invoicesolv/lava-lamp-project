import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damers Långärmad Imperial SOL’s - 02075 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damers Långärmad Imperial SOL’s - 02075 är tillverkad av högkvalitativt material som kombinerar både mjukhet och hållbarhet. Denna långärmade tröja är designad för att ge en smickrande passform som känns bekväm hela dagen. Materialet är särskilt utvalt för att ge en jämn yta, vilket gör den idealisk för både tryck och broderi, så att du enkelt kan personalisera den med din egen design eller ditt företags logotyp. Denna tröja är gjord för att hålla, med förstärkta sömmar och en professionell finish som säkerställer att den behåller sin form och färg även efter många tvättar. Den är perfekt för både vardagsbruk och som en del av en arbetsuniform, tack vare dess stilrena och tidlösa design. Oavsett om du vill använda den för personligt bruk eller som en del av ditt företags profilkläder, erbjuder Damers Långärmad Imperial SOL’s en snabb leveranstid och hög kvalitet, vilket gör den till ett utmärkt val för alla som söker en pålitlig och anpassningsbar plagg.",
  keywords: "damers långärmad imperial sol’s - 02075, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damers Långärmad Imperial SOL’s - 02075 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damers långärmad imperial sol’s - 02075 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-long-sleeve-imperial-sols-02075",
  name: "Damers Långärmad Imperial SOL’s - 02075",
  articleNumber: "DAMERS-LNGRMAD-IMPERIAL-SOLS---02075",
  description: "Högkvalitativ damers långärmad imperial sol’s - 02075 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damers Långärmad Imperial SOL’s - 02075 erbjuder en kombination av stil och komfort, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L02075_Royal-Blue-241-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L02075_Royal-Blue-241-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L02075_Royal-Blue-241-glowne.jpg"
    ]
  },
  category: "Kläder",
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
  keywords: ["damers långärmad imperial sol’s - 02075", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damers Långärmad Imperial SOL’s - 02075 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damers långärmad imperial sol’s - 02075 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-long-sleeve-imperial-sols/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Polyesterryggsäck Urban - 70600 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Urban polyesterryggsäck 70600 erbjuder en modern design med hållbar polyester som grundmaterial, vilket garanterar långvarig användning och slitstyrka. Väskans yta är särskilt lämpad för både tryck och broderi, vilket gör den till ett utmärkt val för företag och föreningar som vill profilera sig med en personlig touch.  Väskan är designad för att ge maximal komfort med justerbara axelremmar och en ergonomiskt utformad baksida. Den rymliga interiören gör den perfekt för både vardagsbruk och längre resor, medan flera fack erbjuder organiserad förvaring för alla dina tillhörigheter.  Kvaliteten på tyget i denna ryggsäck säkerställer att den står emot dagligt slitage, samtidigt som den behåller en professionell finish. Med snabb leverans kan du snabbt få den här mångsidiga ryggsäcken i dina händer och börja använda den för alla dina behov.",
  keywords: "polyesterryggsäck urban - 70600, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Polyesterryggsäck Urban - 70600 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ polyesterryggsäck urban - 70600 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "polyester-backpack-urban-70600",
  name: "Polyesterryggsäck Urban - 70600",
  articleNumber: "POLYESTERRYGGSCK-URBAN---70600",
  description: "Högkvalitativ polyesterryggsäck urban - 70600 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Urban polyesterryggsäck är den perfekta kombinationen av stil och funktionalitet, idealisk för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/LB70600_Flash-Pink-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/LB70600_Flash-Pink-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/LB70600_Flash-Pink-glowne.jpg"
    ]
  },
  category: "Väskor",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["polyesterryggsäck urban - 70600", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Polyesterryggsäck Urban - 70600 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ polyesterryggsäck urban - 70600 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/polyester-backpack-urban/",
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
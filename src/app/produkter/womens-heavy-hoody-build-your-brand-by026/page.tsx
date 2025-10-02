import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas Tjocka Hoodie Bygg Ditt Varumärke - BY026 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Upptäck den ultimata komforten med Damernas Tjocka Hoodie BY026, designad för att ge både stil och funktion. Denna hoodie är tillverkad av ett högkvalitativt bomulls- och polyesterblandning som inte bara känns mjuk mot huden utan också erbjuder robust hållbarhet för dagligt bruk. Den tjocka tyget gör den idealisk för kyligare dagar, medan den rymliga passformen säkerställer komfort och rörelsefrihet. Perfekt för tryck och broderi, BY026 är ett utmärkt val för att bygga ditt varumärke. Den släta ytan ger en professionell finish som gör att ditt företags logotyp eller design verkligen kan sticka ut. Oavsett om du väljer att trycka eller brodera, kommer resultaten att vara imponerande och långvariga. Hoodien är utrustad med en klassisk känguruficka och en justerbar huva med dragsko, vilket ger extra funktionalitet och stil. Med fokus på detaljer och en perfekt balans mellan mode och funktionalitet, är Damernas Tjocka Hoodie BY026 ett måste för alla som vill kombinera komfort med sitt varumärke. Snabb leverans säkerställer att du kan få din hoodie i tid för dina evenemang eller kampanjer.",
  keywords: "damernas tjocka hoodie bygg ditt varumärke - by026, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas Tjocka Hoodie Bygg Ditt Varumärke - BY026 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas tjocka hoodie bygg ditt varumärke - by026 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-heavy-hoody-build-your-brand-by026",
  name: "Damernas Tjocka Hoodie Bygg Ditt Varumärke - BY026",
  articleNumber: "DAMERNAS-TJOCKA-HOODIE-BYGG-DITT-VARUMRKE---BY026",
  description: "Högkvalitativ damernas tjocka hoodie bygg ditt varumärke - by026 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas Tjocka Hoodie BY026 är perfekt för varumärkesbyggande med högkvalitativt material som ger en bekväm och hållbar passform.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY026_Dusk-Rose-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY026_Dusk-Rose-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY026_Dusk-Rose-glowne.jpg"
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
  keywords: ["damernas tjocka hoodie bygg ditt varumärke - by026", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas Tjocka Hoodie Bygg Ditt Varumärke - BY026 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas tjocka hoodie bygg ditt varumärke - by026 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-heavy-hoody/",
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
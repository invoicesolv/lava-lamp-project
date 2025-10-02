import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Keps FLEXFIT Klassisk Snapback - 6089M - Bulkprodukt för tryck eget | Tryckeget",
  description: "Keps FLEXFIT Klassisk Snapback - 6089M är en tidlös accessoar som erbjuder både stil och komfort. Tillverkad av högkvalitativa material som kombinerar polyester och bomull, erbjuder denna keps en slitstark och bekväm passform. Snapback-designen gör att den enkelt kan justeras för att passa alla huvudstorlekar, vilket ger optimal komfort hela dagen. Denna keps är idealisk för både tryck och broderi, vilket gör den till ett utmärkt val för företag och organisationer som vill förmedla sitt varumärke med stil. Materialet är noggrant utvalt för att säkerställa att varje tryck eller broderi framträder med klarhet och precision. Med en robust konstruktion och en professionell finish, garanterar FLEXFIT Klassisk Snapback - 6089M långvarig hållbarhet. Den är perfekt för både vardagligt bruk och speciella tillfällen. Vi erbjuder snabb leverans på denna populära keps så att du kan få den i tid för dina evenemang eller lanseringar.",
  keywords: "keps flexfit klassisk snapback - 6089m, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Keps FLEXFIT Klassisk Snapback - 6089M - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ keps flexfit klassisk snapback - 6089m perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cap-flexfit-classic-snapback-6089m",
  name: "Keps FLEXFIT Klassisk Snapback - 6089M",
  description: "Högkvalitativ keps flexfit klassisk snapback - 6089m perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Keps FLEXFIT Klassisk Snapback - 6089M kombinerar stil och funktion, perfekt för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/FX6089M_Heather-Grey-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/FX6089M_Heather-Grey-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/FX6089M_Heather-Grey-glowne.jpg"
    ]
  },
  category: "Kepsar",
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
  keywords: ["keps flexfit klassisk snapback - 6089m", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Keps FLEXFIT Klassisk Snapback - 6089M - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ keps flexfit klassisk snapback - 6089m perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cap-flexfit-classic-snapback/",
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
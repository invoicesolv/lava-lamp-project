import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Polyesterpåse Icon Gymsac - BG110 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Polyesterpåse Icon Gymsac BG110 är designad med både stil och funktionalitet i åtanke. Tillverkad av högkvalitativ polyester, erbjuder denna gymsäck både hållbarhet och lätthet, vilket gör den enkel att bära med sig överallt. Materialet är perfekt anpassat för tryck och broderi, vilket ger en professionell finish som gör ditt märke eller din design rättvisa. Denna gymsäck har en bekväm passform med justerbara dragsnören som ger extra säkerhet och komfort vid användning. Den rymliga interiören gör den idealisk för att bära träningskläder, skor eller andra personliga tillhörigheter. Med sin robusta konstruktion och slitstarka material säkerställer BG110 att den klarar av både vardagligt bruk och de mer krävande äventyren. Förutom dess praktiska egenskaper, är BG110 också ett miljövänligt val, tack vare polyesterens återvinningsbara natur. Detta gör den inte bara till ett funktionellt tillskott till din vardag, utan också ett hållbart val som bidrar till en bättre miljö. Beställningar behandlas snabbt för att säkerställa snabb leverans, vilket gör detta till ett utmärkt val för både individuella och företagsbehov.",
  keywords: "polyesterpåse icon gymsac - bg110, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Polyesterpåse Icon Gymsac - BG110 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ polyesterpåse icon gymsac - bg110 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "polyester-bag-icon-gymsac-bg110",
  name: "Polyesterpåse Icon Gymsac - BG110",
  articleNumber: "POLYESTERPSE-ICON-GYMSAC---BG110",
  description: "Högkvalitativ polyesterpåse icon gymsac - bg110 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Polyesterpåse Icon Gymsac BG110 är en slitstark och lättviktig gymsäck perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/BG110_Black_Surf-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/BG110_Black_Surf-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/BG110_Black_Surf-Blue-glowne.jpg"
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
  keywords: ["polyesterpåse icon gymsac - bg110", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Polyesterpåse Icon Gymsac - BG110 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ polyesterpåse icon gymsac - bg110 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/polyester-bag-icon-gymsac/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Exact 190 B&C - TW04T - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Exact 190 från B&C är den ultimata kombinationen av stil och komfort. Tillverkad av 100% ringpspunnen bomull, erbjuder denna T-shirt en mjuk och skön känsla mot huden, vilket gör den idealisk för vardagligt bruk. Med en vikt på 190 g/m² är den robust och hållbar, vilket säkerställer att den håller formen även efter många tvättar. Denna T-shirt är speciellt designad med tryck och broderi i åtanke, tack vare dess släta yta som säkerställer en professionell finish. Den har en klassisk passform med en feminin siluett som smickrar alla kroppstyper och ger optimal komfort hela dagen. Halsringningen är förstärkt för extra hållbarhet och för att bibehålla T-shirtens form över tid. Perfekt för företag som vill profilera sig med logotyper eller för evenemang där enhetliga kläder krävs. Denna T-shirt levereras snabbt, vilket gör den till ett utmärkt val för både planerade och spontana beställningar. Välj Dam T-shirt Exact 190 B&C för en högkvalitativ produkt som står sig över tid, både i stil och funktion.",
  keywords: "dam t-shirt exact 190 b&c - tw04t, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Exact 190 B&C - TW04T - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt exact 190 b&c - tw04t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-exact-190-bc-tw04t",
  name: "Dam T-shirt Exact 190 B&C - TW04T",
  articleNumber: "DAM-T-SHIRT-EXACT-190-BC---TW04T",
  description: "Högkvalitativ dam t-shirt exact 190 b&c - tw04t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna dam T-shirt från B&C kombinerar stil och komfort med högkvalitativt material, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW04T_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW04T_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW04T_Black-glowne.jpg"
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
  keywords: ["dam t-shirt exact 190 b&c - tw04t", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Exact 190 B&C - TW04T - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt exact 190 b&c - tw04t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-exact-190-bc/",
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
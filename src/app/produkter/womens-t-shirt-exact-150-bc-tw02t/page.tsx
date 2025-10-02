import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Exact 150 B&C - TW02T - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Exact 150 från B&C (TW02T) är en perfekt kombination av stil och funktionalitet. Tillverkad av 100% ringspunnen bomull, erbjuder denna t-shirt en mjuk och bekväm känsla som är skonsam mot huden. Med en vikt på 150 g/m², är den både lätt och slitstark, vilket gör den idealisk för dagligt bruk.  Denna t-shirt är designad med tryck och broderi i åtanke, vilket gör den till ett utmärkt val för företag, event eller personliga projekt. Tack vare det släta och jämna tyget, är den perfekt för att fånga detaljerna i både tryck och broderade mönster.  Passformen är modern och figursydd för att framhäva den feminina silhuetten utan att kompromissa med komfort. T-shirtens sömmar är förstärkta för att säkerställa hållbarhet och långvarig användning, även efter flera tvättar.  Med sin professionella finish och ett brett färgutbud, är Dam T-shirt Exact 150 ett pålitligt val för de som söker kvalitet och stil. Vi erbjuder snabb leverans så att du kan få dina t-shirts i tid för ditt nästa projekt.",
  keywords: "dam t-shirt exact 150 b&c - tw02t, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Exact 150 B&C - TW02T - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt exact 150 b&c - tw02t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-exact-150-bc-tw02t",
  name: "Dam T-shirt Exact 150 B&C - TW02T",
  articleNumber: "DAM-T-SHIRT-EXACT-150-BC---TW02T",
  description: "Högkvalitativ dam t-shirt exact 150 b&c - tw02t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Exact 150 från B&C är en högkvalitativ t-shirt perfekt för tryck och broderi, tillverkad av mjuk bomull för optimal komfort.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW02T_Azure-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW02T_Azure-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW02T_Azure-glowne.jpg"
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
  keywords: ["dam t-shirt exact 150 b&c - tw02t", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Exact 150 B&C - TW02T - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt exact 150 b&c - tw02t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-exact-150-bc/",
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
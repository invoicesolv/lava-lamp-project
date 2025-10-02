import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barnens softshelljacka med huva B&C - JK969 - Bulkprodukt för tryck eget | Tryckeget",
  description: "B&C JK969 är den perfekta softshelljackan för barn som kombinerar stil, komfort och funktionalitet. Tillverkad av en högkvalitativ polyester och elastanblandning, erbjuder denna jacka exceptionell flexibilitet och hållbarhet. Den vattenavvisande ytan gör den idealisk för både lek och vardagsanvändning, oavsett väder. Jackan har en praktisk huva och flera fickor, vilket gör den både funktionell och trendig. Dess släta yta är perfekt anpassad för tryck och broderi, vilket gör det enkelt att anpassa med skolans logotyp eller andra personliga motiv. Den mjuka insidan säkerställer att barnen känner sig bekväma hela dagen. Denna softshelljacka är designad för att ge en skräddarsydd passform utan att begränsa rörelsefriheten. Den är lätt men ändå varm, vilket gör den till en fantastisk jacka för alla säsonger. Med sin professionella finish och fokus på hållbarhet, är B&C JK969 ett utmärkt val för både föräldrar och barn. Och med snabb leverans kan du vara säker på att få hem denna fantastiska produkt i tid till nästa äventyr.",
  keywords: "barnens softshelljacka med huva b&c - jk969, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barnens softshelljacka med huva B&C - JK969 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barnens softshelljacka med huva b&c - jk969 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-softshell-with-hood-bc-jk969",
  name: "Barnens softshelljacka med huva B&C - JK969",
  articleNumber: "BARNENS-SOFTSHELLJACKA-MED-HUVA-BC---JK969",
  description: "Högkvalitativ barnens softshelljacka med huva b&c - jk969 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barnens softshelljacka B&C JK969 kombinerar stil och funktionalitet, idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BCJK969_Azure-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BCJK969_Azure-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BCJK969_Azure-glowne.jpg"
    ]
  },
  category: "Jackor",
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
  keywords: ["barnens softshelljacka med huva b&c - jk969", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barnens softshelljacka med huva B&C - JK969 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barnens softshelljacka med huva b&c - jk969 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-softshell-with-hood/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Långärmad B&C - TW08T - Bulkprodukt för tryck eget | Tryckeget",
  description: "Denna långärmade dam t-shirt från B&C, modell TW08T, är ett utmärkt val för dem som söker både stil och komfort. Tillverkad av högkvalitativ bomull som känns mjuk mot huden och erbjuder utmärkt andningsförmåga, är denna t-shirt perfekt för alla årstider. Designad med en modern passform, ger den en smickrande siluett för alla kroppstyper. Dess släta yta gör den idealisk för tryck och broderi, vilket ger en professionell finish till alla personliga eller företagsrelaterade anpassningar. Materialets hållbarhet säkerställer att färger och mönster behåller sin livfullhet även efter flera tvättar. Denna t-shirt kombinerar stil och funktionalitet, vilket gör den till ett mångsidigt plagg i varje garderob. Oavsett om du klär upp eller ner, för arbete eller fritid, erbjuder den en sofistikerad touch till din outfit. Lägg till en personlig touch med ditt egna tryck eller broderi för en unik look. Vi erbjuder snabb leverans för att säkerställa att du får din produkt i tid.",
  keywords: "dam t-shirt långärmad b&c - tw08t, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Långärmad B&C - TW08T - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt långärmad b&c - tw08t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-long-sleeve-bc-tw08t",
  name: "Dam T-shirt Långärmad B&C - TW08T",
  articleNumber: "DAM-T-SHIRT-LNGRMAD-BC---TW08T",
  description: "Högkvalitativ dam t-shirt långärmad b&c - tw08t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Elegant och bekväm långärmad dam t-shirt från B&C, perfekt för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW08T_Navy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW08T_Navy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW08T_Navy-glowne.jpg"
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
  keywords: ["dam t-shirt långärmad b&c - tw08t", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Långärmad B&C - TW08T - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt långärmad b&c - tw08t perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-long-sleeve-bc/",
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
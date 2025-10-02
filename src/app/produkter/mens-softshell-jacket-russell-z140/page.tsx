import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr Softshelljacka Russell - Z140 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr Softshelljacka Russell - Z140 erbjuder både stil och praktisk funktionalitet, idealisk för företag och team som söker en enhetlig klädsel med möjlighet till anpassning. Tillverkad av högkvalitativt softshell-material, ger denna jacka både vind- och vattenavvisande egenskaper, vilket gör den perfekt för utomhusaktiviteter i varierande väderförhållanden. Materialet är speciellt utvalt för att möjliggöra tryck och broderi av hög standard, vilket gör den till ett utmärkt val för logotyper och personliga design. Dess trelagerskonstruktion med andningsförmåga säkerställer att du håller dig bekväm hela dagen, samtidigt som den slimmade passformen ger en modern siluett. Jackan är utrustad med praktiska funktioner såsom dragkedjeförsedda fickor för säker förvaring och justerbara ärmslut för en personlig passform. Den är designad för att klara av dagligt slitage, vilket gör den till ett hållbart alternativ för både arbetsrelaterade och fritidsaktiviteter. Med snabb leverans kan du få din anpassade jacka på nolltid, redo att användas med stil och komfort.",
  keywords: "herr softshelljacka russell - z140, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr Softshelljacka Russell - Z140 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr softshelljacka russell - z140 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-softshell-jacket-russell-z140",
  name: "Herr Softshelljacka Russell - Z140",
  articleNumber: "HERR-SOFTSHELLJACKA-RUSSELL---Z140",
  description: "Högkvalitativ herr softshelljacka russell - z140 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna Herr Softshelljacka från Russell levererar både stil och funktionalitet med sitt hållbara material och bekväma passform. Perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z140_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z140_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z140_Black-glowne.jpg"
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
  keywords: ["herr softshelljacka russell - z140", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr Softshelljacka Russell - Z140 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr softshelljacka russell - z140 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-softshell-jacket/",
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
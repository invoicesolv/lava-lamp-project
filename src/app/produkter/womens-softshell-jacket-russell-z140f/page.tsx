import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam Softshelljacka Russell - Z140F - Bulkprodukt för tryck eget | Tryckeget",
  description: "Russell's dam softshelljacka Z140F är den ultimata kombinationen av stil och funktionalitet. Tillverkad av ett slitstarkt och vattenavvisande material, är denna jacka designad för att motstå väder och vind. Dess lätta och töjbara tyg erbjuder utmärkt rörelsefrihet, vilket gör den idealisk för både vardag och fritidsaktiviteter. Jackans yta är perfekt för både tryck och broderi, vilket gör den till ett utmärkt val för företag som vill profilera sig eller för personliga anpassningar. De subtila sömmarna och den professionella finishen säkerställer att alla dekorationsmetoder ser skarpa och stilrena ut. Med en figurnära passform och justerbara ärmslut ger denna jacka både komfort och en smickrande siluett. Den inre fleecefodringen ger extra värme, medan andningsförmågan håller dig torr och bekväm under hela dagen. Tack vare dess hållbara konstruktion kan du räkna med att denna jacka håller i många säsonger framöver. Oavsett om du behöver ett ytterplagg för företagsbruk eller för personligt bruk, erbjuder Russell Z140F dam softshelljacka en snabb leverans och en professionell finish som möter de högsta kraven på kvalitet och stil.",
  keywords: "dam softshelljacka russell - z140f, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam Softshelljacka Russell - Z140F - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam softshelljacka russell - z140f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-softshell-jacket-russell-z140f",
  name: "Dam Softshelljacka Russell - Z140F",
  articleNumber: "DAM-SOFTSHELLJACKA-RUSSELL---Z140F",
  description: "Högkvalitativ dam softshelljacka russell - z140f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna dam softshelljacka från Russell är perfekt för både tryck och broderi, med högkvalitativt material och en bekväm passform.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z140F_Classic-Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z140F_Classic-Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z140F_Classic-Red-glowne.jpg"
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
  keywords: ["dam softshelljacka russell - z140f", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam Softshelljacka Russell - Z140F - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam softshelljacka russell - z140f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-softshell-jacket/",
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
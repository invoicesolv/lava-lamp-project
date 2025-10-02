import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Lyx Tee Jays - TJ5000 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Lyx Tee Jays - TJ5000 är tillverkad av premium bomull som ger en mjuk och lyxig känsla mot huden. Denna t-shirt är perfekt för både vardagligt bruk och professionella sammanhang där stil och komfort är viktiga. Med sin släta yta är den särskilt lämplig för tryck och broderi, vilket gör det lätt att anpassa efter dina behov eller företagsprofil. Passformen är designad för att sitta perfekt på kroppen utan att begränsa rörelsefriheten, vilket gör den idealisk för både arbete och fritid. Kvaliteten på materialet säkerställer att t-shirten behåller sin form och färg även efter många tvättar.  Dessutom är Herr T-shirt Lyx Tee Jays - TJ5000 skapad med hållbarhet i åtanke, vilket innebär att du kan njuta av dess fördelar under lång tid. Vi erbjuder snabb leverans så att du kan få din t-shirt när du behöver den. Oavsett om du köper för ett team, ett event, eller en personlig garderob, är detta ett utmärkt val för den som värdesätter kvalitet och stil.",
  keywords: "herr t-shirt lyx tee jays - tj5000, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Lyx Tee Jays - TJ5000 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt lyx tee jays - tj5000 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-luxury-tee-jays-tj5000",
  name: "Herr T-shirt Lyx Tee Jays - TJ5000",
  articleNumber: "HERR-T-SHIRT-LYX-TEE-JAYS---TJ5000",
  description: "Högkvalitativ herr t-shirt lyx tee jays - tj5000 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Lyx Tee Jays - TJ5000 är en elegant och bekväm t-shirt, perfekt för tryck och broderi med sin högkvalitativa bomullskonstruktion.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/TJ5000_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/TJ5000_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/TJ5000_Black-glowne.jpg"
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
  keywords: ["herr t-shirt lyx tee jays - tj5000", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Lyx Tee Jays - TJ5000 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt lyx tee jays - tj5000 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-luxury-tee-jays/",
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
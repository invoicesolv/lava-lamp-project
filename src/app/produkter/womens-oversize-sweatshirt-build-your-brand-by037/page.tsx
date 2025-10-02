import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dams oversize sweatshirt Build Your Brand - BY037 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "dams oversize sweatshirt build your brand - by037, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dams oversize sweatshirt Build Your Brand - BY037 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dams oversize sweatshirt build your brand - by037 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-oversize-sweatshirt-build-your-brand-by037",
  name: "Dams oversize sweatshirt Build Your Brand - BY037",
  articleNumber: "DAMS-OVERSIZE-SWEATSHIRT-BUILD-YOUR-BRAND---BY037",
  description: "Högkvalitativ dams oversize sweatshirt build your brand - by037 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY037_Charcoal-Heather-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY037_Charcoal-Heather-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY037_Charcoal-Heather-glowne.jpg"
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
  keywords: ["dams oversize sweatshirt build your brand - by037", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dams oversize sweatshirt Build Your Brand - BY037 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dams oversize sweatshirt build your brand - by037 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-oversize-sweatshirt/",
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
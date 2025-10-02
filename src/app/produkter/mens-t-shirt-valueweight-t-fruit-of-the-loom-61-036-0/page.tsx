import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Men\'s T-shirt Viktvärde T Fruit of the Loom - 61-036-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Fruit of the Loom Men's T-shirt Viktvärde T är tillverkad av 100% bomull, vilket ger en mjuk och bekväm känsla mot huden. Den är designad för att erbjuda en utmärkt yta för tryck och broderi, vilket gör den till ett idealiskt val för företag, event eller personliga projekt. T-shirten har en klassisk passform med en ribbad krage och dubbelsydda sömmar, vilket säkerställer både komfort och hållbarhet. Denna t-shirt är tillgänglig i flera färger och storlekar, vilket gör det enkelt att hitta det perfekta valet för dina behov. Materialet är förtvättat för att minimera krympning och bibehålla passformen efter tvätt. Viktvärde T erbjuder en professionell finish som ser lika bra ut efter flera tvättar, vilket garanterar långvarig användning. Med sin snabba leverans och höga kvalitet är Fruit of the Loom Men's T-shirt Viktvärde T ett pålitligt val för alla som söker en t-shirt som kombinerar komfort, stil och funktionalitet. Oavsett om du behöver t-shirts för ett lag, företag eller personligt bruk, är detta ett utmärkt alternativ som levererar på alla fronter.",
  keywords: "men\'s t-shirt viktvärde t fruit of the loom - 61-036-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Men\'s T-shirt Viktvärde T Fruit of the Loom - 61-036-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ men\'s t-shirt viktvärde t fruit of the loom - 61-036-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-valueweight-t-fruit-of-the-loom-61-036-0",
  name: "Men\'s T-shirt Viktvärde T Fruit of the Loom - 61-036-0",
  description: "Högkvalitativ men\'s t-shirt viktvärde t fruit of the loom - 61-036-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Fruit of the Loom Men's T-shirt Viktvärde T är en klassisk t-shirt i hög kvalitet, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/F140_Kelly-Green-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/F140_Kelly-Green-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/F140_Kelly-Green-glowne.jpg"
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
  keywords: ["men\'s t-shirt viktvärde t fruit of the loom - 61-036-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Men\'s T-shirt Viktvärde T Fruit of the Loom - 61-036-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ men\'s t-shirt viktvärde t fruit of the loom - 61-036-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-valueweight-t-fruit-of-the-loom/",
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
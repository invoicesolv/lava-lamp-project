import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Men\'s T-shirt Iconic 195 T Fruit of the Loom - 61-422-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Men's T-shirt Iconic 195 T från Fruit of the Loom är en tidlös klassiker, tillverkad av 100% bomull för en mjuk och bekväm känsla mot huden. Denna t-shirt erbjuder en perfekt yta för både tryck och broderi, vilket gör den till ett populärt val för företag, skolor och evenemang som vill profilera sitt varumärke eller budskap. Med en modern passform och förstärkta sömmar är denna t-shirt inte bara stilren utan också mycket slitstark, vilket garanterar långvarig användning utan att tappa formen. Den professionella finishen gör att t-shirten ser lika bra ut efter flera tvättar, och den finns i ett brett utbud av färger för att matcha alla behov. Dessutom erbjuder vi snabb leverans, vilket gör det enkelt för dig att få dina beställda produkter i tid.",
  keywords: "men\'s t-shirt iconic 195 t fruit of the loom - 61-422-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Men\'s T-shirt Iconic 195 T Fruit of the Loom - 61-422-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ men\'s t-shirt iconic 195 t fruit of the loom - 61-422-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-iconic-195-t-fruit-of-the-loom-61-422-0",
  name: "Men\'s T-shirt Iconic 195 T Fruit of the Loom - 61-422-0",
  description: "Högkvalitativ men\'s t-shirt iconic 195 t fruit of the loom - 61-422-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Men's T-shirt Iconic 195 T från Fruit of the Loom är tillverkad av högkvalitativt bomullsmaterial och utmärkt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/F185_Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/F185_Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/F185_Red-glowne.jpg"
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
  keywords: ["men\'s t-shirt iconic 195 t fruit of the loom - 61-422-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Men\'s T-shirt Iconic 195 T Fruit of the Loom - 61-422-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ men\'s t-shirt iconic 195 t fruit of the loom - 61-422-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-iconic-195-t-fruit-of-the-loom/",
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
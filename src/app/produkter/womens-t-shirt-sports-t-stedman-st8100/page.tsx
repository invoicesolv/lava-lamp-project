import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Sports-T Stedman - ST8100 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Sports-T Stedman ST8100 erbjuder optimal komfort och stil för alla tillfällen. Tillverkad av 100% aktiv-dry polyester, ger denna t-shirt en mjuk och luftig känsla som är idealisk för sport och fritidsaktiviteter. Materialet är utformat för att effektivt transportera bort fukt, vilket håller dig torr och fräsch hela dagen. Den här t-shirten är utmärkt för tryck och broderi, vilket gör den till ett perfekt val för företag, team eller evenemang som vill ha en professionell och personlig touch. Med en figurnära passform som smickrar alla kroppstyper, och en rund halsringning, kombinerar den stil och funktion perfekt. Stedman är kända för sin hållbarhet och kvalitet, och ST8100 är inget undantag. Den är lätt att underhålla och behåller sin form och färg även efter många tvättar. Med en snabb leverans kan du vara säker på att få din t-shirt i tid för ditt nästa event eller aktivitet.",
  keywords: "dam t-shirt sports-t stedman - st8100, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Sports-T Stedman - ST8100 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt sports-t stedman - st8100 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-sports-t-stedman-st8100",
  name: "Dam T-shirt Sports-T Stedman - ST8100",
  articleNumber: "DAM-T-SHIRT-SPORTS-T-STEDMAN---ST8100",
  description: "Högkvalitativ dam t-shirt sports-t stedman - st8100 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Sports-T Stedman ST8100 är en högkvalitativ t-shirt perfekt för både tryck och broderi, tillverkad i ett mjukt och hållbart material.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/S8100_Crimson-Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/S8100_Crimson-Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/S8100_Crimson-Red-glowne.jpg"
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
  keywords: ["dam t-shirt sports-t stedman - st8100", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Sports-T Stedman - ST8100 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt sports-t stedman - st8100 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-sports-t/",
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
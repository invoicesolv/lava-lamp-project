import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Bomullsshoppingväska - XT003 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Bomullsshoppingväska XT003 kombinerar stil och funktionalitet med sitt hållbara och miljövänliga bomullsmaterial. Denna väska erbjuder en perfekt yta för personlig anpassning genom tryck eller broderi, vilket gör den idealisk för företag som vill stärka sitt varumärke eller för personlig stil.  Med en rymlig interiör och starka handtag kan denna väska enkelt bära dina dagliga inköp, böcker, eller gymutrustning. Det naturliga bomullsmaterialet känns mjukt mot huden och är samtidigt robust nog att klara av vardagens påfrestningar.  XT003 är utformad för att hålla, med förstärkta sömmar som garanterar hållbarhet och en professionell finish. Den neutrala designen passar alla tillfällen och gör den till en mångsidig accessoar i din garderob. Dessutom erbjuder vi snabb leverans, så att du kan börja använda din nya favoritväska utan dröjsmål.",
  keywords: "bomullsshoppingväska - xt003, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Bomullsshoppingväska - XT003 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ bomullsshoppingväska - xt003 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cotton-shopping-bag-xt003",
  name: "Bomullsshoppingväska - XT003",
  articleNumber: "BOMULLSSHOPPINGVSKA---XT003",
  description: "Högkvalitativ bomullsshoppingväska - xt003 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Bomullsshoppingväska XT003 är den perfekta följeslagaren för daglig användning, tillverkad av hållbart material och idealisk för tryck eller broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/torba-bawelniana-kolor-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/torba-bawelniana-kolor-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/torba-bawelniana-kolor-glowne.jpg"
    ]
  },
  category: "Väskor",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["bomullsshoppingväska - xt003", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Bomullsshoppingväska - XT003 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ bomullsshoppingväska - xt003 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cotton-shopping-bag/",
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
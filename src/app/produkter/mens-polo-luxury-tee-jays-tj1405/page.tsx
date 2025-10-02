import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrpolo Luxury Tee Jays - TJ1405 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrpolo Luxury Tee Jays är en elegant och tidlös polo som tillverkas av finaste bomull för en mjuk och behaglig känsla mot huden. Tyget är både slitstarkt och andningsaktivt, vilket gör det idealiskt för dagligt bruk samt för professionella sammanhang. Dess klassiska design med ribbad krage och ärmslut ger en snygg och professionell finish som enkelt kan anpassas med broderi eller tryck för att reflektera ditt varumärke eller personliga stil. Denna polo har en modern passform som smickrar alla kroppstyper samtidigt som den erbjuder stor rörelsefrihet. Den är perfekt för företagspersonal eller som en stilren uniform, där hållbarheten säkerställer att plagget behåller sin form och färg tvätt efter tvätt. Herrpolo Luxury Tee Jays är tillgänglig i flera färger, vilket gör det enkelt att matcha med olika kläder och stilar. För dem som söker en långvarig och stilig lösning för sina klädbehov, erbjuder denna polo en oslagbar kombination av kvalitet och funktion. Med snabb leverans och enkel anpassning, är detta det perfekta valet för företag och individer som vill ha både stil och substans i sina kläder.",
  keywords: "herrpolo luxury tee jays - tj1405, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrpolo Luxury Tee Jays - TJ1405 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrpolo luxury tee jays - tj1405 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-luxury-tee-jays-tj1405",
  name: "Herrpolo Luxury Tee Jays - TJ1405",
  articleNumber: "HERRPOLO-LUXURY-TEE-JAYS---TJ1405",
  description: "Högkvalitativ herrpolo luxury tee jays - tj1405 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrpolo Luxury Tee Jays är en högkvalitativ polo som kombinerar stil och komfort, perfekt för både broderi och tryck.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/TJ1405_Light-Blue-glowna.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/TJ1405_Light-Blue-glowna.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/TJ1405_Light-Blue-glowna.jpg"
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
  keywords: ["herrpolo luxury tee jays - tj1405", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrpolo Luxury Tee Jays - TJ1405 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrpolo luxury tee jays - tj1405 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-luxury/",
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
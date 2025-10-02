import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Viper Malfini - 143 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Viper Malfini är tillverkad av högkvalitativ bomull som ger en exceptionell mjukhet och komfort för dagligt bruk. Denna t-shirt är speciellt utformad för att passa perfekt med din kropp och bibehålla sin form även efter flera tvättar. Ett utmärkt val för tryck och broderi, den släta ytan gör det möjligt att skapa skarpa och detaljerade designer som verkligen sticker ut. Med fokus på hållbarhet är denna t-shirt tillverkad för att stå emot tidens tand. Sömmarna är noggrant sydda för att ge en professionell finish, vilket säkerställer att plagget inte bara ser bra ut, utan också håller länge. Den klassiska designen gör den mångsidig och lämplig för alla tillfällen, från vardagligt slitage till mer formella evenemang. Med snabb leverans kan du enkelt få din Herr T-shirt Viper Malfini redo för att anpassas med ditt personliga tryck eller broderi. Oavsett om du är ute efter att skapa en unik företagsuniform eller en personlig gåva, är denna t-shirt ett utmärkt val för att uppnå ett professionellt och stilrent resultat.",
  keywords: "herr t-shirt viper malfini - 143, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Viper Malfini - 143 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt viper malfini - 143 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-viper-malfini-143",
  name: "Herr T-shirt Viper Malfini - 143",
  articleNumber: "HERR-T-SHIRT-VIPER-MALFINI---143",
  description: "Högkvalitativ herr t-shirt viper malfini - 143 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Viper Malfini är en högkvalitativ t-shirt perfekt för tryck och broderi, med en bekväm passform och hållbart material.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/143_16_A-glowne-1620x1620.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/143_16_A-glowne-1620x1620.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/143_16_A-glowne-1620x1620.png"
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
  keywords: ["herr t-shirt viper malfini - 143", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Viper Malfini - 143 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt viper malfini - 143 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-viper-malfini/",
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
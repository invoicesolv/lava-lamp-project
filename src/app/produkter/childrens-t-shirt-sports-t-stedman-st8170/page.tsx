import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Sports-T Stedman - ST8170 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stedman Barn T-shirt Sports-T ST8170 är designad med barnens komfort och rörelsefrihet i åtanke. Tillverkad av högkvalitativt material som är både mjukt och slitstarkt, erbjuder denna t-shirt optimal hållbarhet även vid intensiv användning. Det andningsbara tyget gör att barnen kan hålla sig svala och bekväma under lek och sportaktiviteter. Denna t-shirt är speciellt framtagen för att ge en perfekt yta för tryck och broderi, vilket gör den idealisk för skolor, fritidsaktiviteter och evenemang där personlig anpassning är ett plus. Med en enkel och klassisk design är den lätt att matcha med andra plagg, vilket gör den till ett mångsidigt tillskott i varje barns garderob. Passformen är noggrant utformad för att ge en bekväm känsla hela dagen. Den finns i flera storlekar för att passa barn i olika åldrar, vilket garanterar att varje barn kan hitta sin perfekta passform. Med en professionell finish och hållbart material är denna t-shirt ett utmärkt val för dem som söker både stil och funktion. Förutom hög kvalitet erbjuder Stedman snabb leverans, så att du snabbt kan få dina anpassade plagg redo för användning. Oavsett om det är för ett enstaka event eller som en del av en större kollektion, kommer denna barn-t-shirt att överträffa dina förväntningar när det gäller hållbarhet och stil.",
  keywords: "barn t-shirt sports-t stedman - st8170, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Sports-T Stedman - ST8170 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt sports-t stedman - st8170 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-sports-t-stedman-st8170",
  name: "Barn T-shirt Sports-T Stedman - ST8170",
  articleNumber: "BARN-T-SHIRT-SPORTS-T-STEDMAN---ST8170",
  description: "Högkvalitativ barn t-shirt sports-t stedman - st8170 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Stedman Barn T-shirt Sports-T ST8170 är perfekt för aktiva barn med sin hållbara kvalitet och bekväma passform, idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/S8170_Crimson-Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/S8170_Crimson-Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/S8170_Crimson-Red-glowne.jpg"
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
  keywords: ["barn t-shirt sports-t stedman - st8170", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Sports-T Stedman - ST8170 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt sports-t stedman - st8170 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-sports-t/",
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
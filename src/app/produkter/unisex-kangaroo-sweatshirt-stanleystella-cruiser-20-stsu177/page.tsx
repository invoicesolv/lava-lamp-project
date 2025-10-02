import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Unisex kängurutröja Stanley&Stella Cruiser 2.0 - STSU177 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Cruiser 2.0 kängurutröja är en mångsidig och stilren unisex tröja, perfekt för alla som värdesätter kvalitet och komfort. Tillverkad av 85% ekologisk ringspunnen kammad bomull och 15% återvunnen polyester, erbjuder den en mjuk och hållbar yta som är optimal för både tryck och broderi. Tröjan har en modern passform som sitter bekvämt på kroppen, med en känguruficka framtill som ger en praktisk och avslappnad look. Det högkvalitativa materialet säkerställer att tröjan behåller sin form och färg även efter flera tvättar, vilket gör den till ett långvarigt tillskott i garderoben. Den mjuka insidan ger extra komfort och värme, vilket gör den idealisk för både vardagsbruk och som ett stilfullt lager under kalla dagar. De ribbade muddarna och nederkanten bidrar till en professionell finish som gör att tröjan passar lika bra i informella som formella sammanhang. Perfekt för företag, skolor eller evenemang som vill skapa enhetliga kläder med sitt tryck eller logotyp. Stanley&Stella Cruiser 2.0 levereras snabbt och är redo för anpassning direkt vid leverans. Oavsett om den används som en del av en arbetsuniform eller som en personlig modeartikel, kommer denna kängurutröja att leverera både stil och funktion.",
  keywords: "unisex kängurutröja stanley&stella cruiser 2.0 - stsu177, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Unisex kängurutröja Stanley&Stella Cruiser 2.0 - STSU177 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ unisex kängurutröja stanley&stella cruiser 2.0 - stsu177 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unisex-kangaroo-sweatshirt-stanleystella-cruiser-20-stsu177",
  name: "Unisex kängurutröja Stanley&Stella Cruiser 2.0 - STSU177",
  articleNumber: "UNISEX-KNGURUTRJA-STANLEYSTELLA-CRUISER-20---STSU177",
  description: "Högkvalitativ unisex kängurutröja stanley&stella cruiser 2.0 - stsu177 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Unisex kängurutröja Stanley&Stella Cruiser 2.0 är den perfekta kombinationen av komfort och stil, idealisk för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Cruiser-2.0-_-Premium-blank-Unisex-hoodie-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Cruiser-2.0-_-Premium-blank-Unisex-hoodie-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Cruiser-2.0-_-Premium-blank-Unisex-hoodie-_-Stanley_Stella-glowne.jpg"
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
  keywords: ["unisex kängurutröja stanley&stella cruiser 2.0 - stsu177", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Unisex kängurutröja Stanley&Stella Cruiser 2.0 - STSU177 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ unisex kängurutröja stanley&stella cruiser 2.0 - stsu177 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unisex-kangaroo-sweatshirt-stanleystella-cruiser-2-0/",
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
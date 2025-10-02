import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Men\'s Polo Klassisk Russell - R-569M-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Men's Polo Klassisk Russell - R-569M-0 är en pikétröja som kombinerar klassisk design med moderna funktioner. Tillverkad av 100% ringpsunnen bomull, erbjuder den en mjuk och bekväm känsla mot huden. Denna tröja är inte bara stilren utan också utmärkt för broderi och tryck, vilket gör den idealisk för företag eller team som vill profilera sig med en personlig touch. Tröjans material är noggrant utvalt för att säkerställa hållbarhet och komfort. Den ringpsunna bomullen ger inte bara en tät och jämn yta för dekoration, utan säkerställer också att plagget behåller sin form och färg även efter flera tvättar. Den klassiska passformen ger en avslappnad men ändå professionell look som passar perfekt i både formella och informella sammanhang. Russell är känt för sin kvalitet och uppmärksamhet på detaljer, vilket märks i den fina finishen på denna polo. De förstärkta axelsömmarna och ribbade kragen och ärmarna förstärker plaggets livslängd och gör det till ett pålitligt val för dagligt bruk. Med snabb leverans kan du snart ha denna stiliga polo som en del av din garderob eller uniform.",
  keywords: "men\'s polo klassisk russell - r-569m-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Men\'s Polo Klassisk Russell - R-569M-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ men\'s polo klassisk russell - r-569m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-classic-russell-r-569m-0",
  name: "Men\'s Polo Klassisk Russell - R-569M-0",
  description: "Högkvalitativ men\'s polo klassisk russell - r-569m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Men's Polo Klassisk Russell - R-569M-0 är en tidlös pikétröja tillverkad av högkvalitativ bomull, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z569_Bright-Royal-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z569_Bright-Royal-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z569_Bright-Royal-glowne.jpg"
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
  keywords: ["men\'s polo klassisk russell - r-569m-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Men\'s Polo Klassisk Russell - R-569M-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ men\'s polo klassisk russell - r-569m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-classic/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Klassisk unisex sweatshirt Stanley&Stella Changer 2.0 - STSU178 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Changer 2.0 är en klassisk unisex sweatshirt som kombinerar tidlös design med högkvalitativa material. Tillverkad av 85% ekologisk ringspunnen kammad bomull och 15% återvunnen polyester, erbjuder denna sweatshirt en mjuk och hållbar känsla som är perfekt för både vardagsbruk och professionella sammanhang. Med en vikt på 350 gsm, ger den en robust känsla utan att kompromissa med komforten. Denna sweatshirt är speciellt utformad för att enkelt kunna anpassas med tryck och broderi, vilket gör den till ett utmärkt val för företag, skolor och föreningar som vill profilera sig med en personlig touch. Den släta ytan säkerställer att trycket fäster väl och att detaljerna i broderiet framhävs på bästa sätt. Passformen är avslappnad och erbjuder god rörelsefrihet, vilket gör den bekväm att bära under hela dagen. De ribbade muddarna vid ärmslut och nederkant bidrar till en snygg och professionell finish, medan den dolda sömmen i halsringningen ger extra komfort. Med sitt fokus på hållbarhet, stil och funktion är Stanley&Stella Changer 2.0 ett pålitligt val för alla garderober. Vi erbjuder snabb leverans för att säkerställa att du får din produkt i tid. Välj Stanley&Stella Changer 2.0 för en hållbar och stilren lösning för dina klädbehov.",
  keywords: "klassisk unisex sweatshirt stanley&stella changer 2.0 - stsu178, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Klassisk unisex sweatshirt Stanley&Stella Changer 2.0 - STSU178 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ klassisk unisex sweatshirt stanley&stella changer 2.0 - stsu178 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "classic-unisex-sweatshirt-stanleystella-changer-20-stsu178",
  name: "Klassisk unisex sweatshirt Stanley&Stella Changer 2.0 - STSU178",
  articleNumber: "KLASSISK-UNISEX-SWEATSHIRT-STANLEYSTELLA-CHANGER-20---STSU178",
  description: "Högkvalitativ klassisk unisex sweatshirt stanley&stella changer 2.0 - stsu178 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Klassisk unisex sweatshirt Stanley&Stella Changer 2.0 erbjuder en perfekt balans mellan stil och komfort, idealisk för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Changer-2.0-_-Blank-Unisex-sweatshirt-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Changer-2.0-_-Blank-Unisex-sweatshirt-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Changer-2.0-_-Blank-Unisex-sweatshirt-_-Stanley_Stella-glowne.jpg"
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
  keywords: ["klassisk unisex sweatshirt stanley&stella changer 2.0 - stsu178", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Klassisk unisex sweatshirt Stanley&Stella Changer 2.0 - STSU178 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ klassisk unisex sweatshirt stanley&stella changer 2.0 - stsu178 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/classic-unisex-sweatshirt-stanleystella-changer-2-0/",
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
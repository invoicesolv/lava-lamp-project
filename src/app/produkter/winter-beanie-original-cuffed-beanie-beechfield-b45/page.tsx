import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Vintermössa Original Cuffed Beanie Beechfield - B45 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Vintermössa Original Cuffed Beanie från Beechfield, modell B45, är en utmärkt kombination av stil och funktionalitet. Tillverkad av 100% mjuk akryl, erbjuder denna mössa både värme och komfort under de kallare månaderna. Det ribbade materialet ger en flexibel passform som sitter bekvämt på alla huvudstorlekar, vilket gör den till ett populärt val för både män och kvinnor. Den vikta kanten på mössan skapar en perfekt yta för personlig anpassning. Här kan du enkelt addera både tryck och broderier, vilket gör den idealisk för företag, skolor eller föreningar som vill skapa enhetliga och professionella accessoarer. Det släta materialet säkerställer att dina logotyper eller designer kommer till sin rätt och ger en skarp och tydlig finish. Denna mössa är inte bara praktisk, utan också hållbar och lätt att underhålla. Akrylmaterialet är resistent mot krympning och håller sig snyggt tvätt efter tvätt. Beechfield har designat denna mössa för att klara av de tuffa vintrarna, med en kvalitet som du kan lita på. Dessutom erbjuder vi snabb leverans, så du kan få dina mössor levererade i tid för alla dina evenemang och behov.",
  keywords: "vintermössa original cuffed beanie beechfield - b45, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Vintermössa Original Cuffed Beanie Beechfield - B45 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ vintermössa original cuffed beanie beechfield - b45 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "winter-beanie-original-cuffed-beanie-beechfield-b45",
  name: "Vintermössa Original Cuffed Beanie Beechfield - B45",
  description: "Högkvalitativ vintermössa original cuffed beanie beechfield - b45 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Vintermössa Original Cuffed Beanie från Beechfield erbjuder extra värme och en perfekt yta för tryck och broderi.",
  price: {
    base: 99,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/CB45_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/CB45_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/CB45_Black-glowne.jpg"
    ]
  },
  category: "Mössor",
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
  keywords: ["vintermössa original cuffed beanie beechfield - b45", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Vintermössa Original Cuffed Beanie Beechfield - B45 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ vintermössa original cuffed beanie beechfield - b45 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/winter-beanie-original-cuffed-beanie-beechfield/",
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
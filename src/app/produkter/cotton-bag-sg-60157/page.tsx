import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Bomull Påse SG - 601.57 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Bomull Påse SG - 601.57 är tillverkad av högkvalitativ bomull, vilket ger den en naturlig känsla och en exceptionell hållbarhet. Denna påse är det perfekta valet för alla som söker en miljövänlig och stilren lösning för sina transportbehov. Dess släta yta gör den idealisk för både tryck och broderi, vilket gör den till ett populärt val för företag och organisationer som vill profilera sina varumärken. Med en generös storlek och robusta handtag erbjuder Bomull Påse SG - 601.57 både komfort och funktionalitet. Den passar utmärkt för daglig användning, vare sig det gäller shopping, arbete eller fritid. Dess naturliga material gör den inte bara skonsam mot miljön, utan även behaglig att bära. Denna bomullspåse är utformad för att tåla dagligt slitage, vilket garanterar en lång livslängd. Tack vare den professionella finishen ser den alltid välpresenterad ut, oavsett hur du väljer att använda den. Med snabb leverans kan du snart ha denna praktiska och stilfulla accessoar i din ägo, redo att anpassas efter dina unika behov.",
  keywords: "bomull påse sg - 601.57, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Bomull Påse SG - 601.57 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ bomull påse sg - 601.57 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cotton-bag-sg-60157",
  name: "Bomull Påse SG - 601.57",
  description: "Högkvalitativ bomull påse sg - 601.57 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Bomull Påse SG - 601.57 är en hållbar och mångsidig bomullspåse perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/601_57_201_F-2022_01-glowne-1620x1620.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/601_57_201_F-2022_01-glowne-1620x1620.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/601_57_201_F-2022_01-glowne-1620x1620.jpg"
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
  keywords: ["bomull påse sg - 601.57", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Bomull Påse SG - 601.57 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ bomull påse sg - 601.57 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cotton-bag-sg/",
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
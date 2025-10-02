import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "T-shirt dam Utökad Axel T-shirt Bygg Ditt Varumärke - BY021 - Bulkprodukt för tryck eget | Tryckeget",
  description: "BY021 t-shirt för damer är designad med en modern utökad axel för en stilfull och avslappnad passform. Den är tillverkad av premium bomull, vilket säkerställer både komfort och hållbarhet. Den släta och jämna ytan gör den idealisk för tryck och broderi, vilket ger ditt varumärke en professionell och polerad look. Denna t-shirt är inte bara bekväm att bära, den är också utformad för att tåla frekvent användning och tvätt, vilket gör den till ett praktiskt val för både dagligt bruk och marknadsföringsevenemang. Med snabb leverans kan du enkelt få dina anpassade t-shirts i tid för alla tillfällen.",
  keywords: "t-shirt dam utökad axel t-shirt bygg ditt varumärke - by021, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "T-shirt dam Utökad Axel T-shirt Bygg Ditt Varumärke - BY021 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ t-shirt dam utökad axel t-shirt bygg ditt varumärke - by021 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "t-shirt-women-extended-shoulder-tee-build-your-brand-by021",
  name: "T-shirt dam Utökad Axel T-shirt Bygg Ditt Varumärke - BY021",
  articleNumber: "T-SHIRT-DAM-UTKAD-AXEL-T-SHIRT-BYGG-DITT-VARUMRKE---BY021",
  description: "Högkvalitativ t-shirt dam utökad axel t-shirt bygg ditt varumärke - by021 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna dam t-shirt med utökad axel är perfekt för att bygga ditt varumärke. Tillverkad av högkvalitativt material, erbjuder den en fantastisk yta för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BY021_Ocean-Blue_glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BY021_Ocean-Blue_glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BY021_Ocean-Blue_glowne.jpg"
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
  keywords: ["t-shirt dam utökad axel t-shirt bygg ditt varumärke - by021", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "T-shirt dam Utökad Axel T-shirt Bygg Ditt Varumärke - BY021 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ t-shirt dam utökad axel t-shirt bygg ditt varumärke - by021 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/t-shirt-women-extended-shoulder-tee/",
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
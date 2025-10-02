import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Inspire E150 ekologisk B&C - TW02B - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Inspire E150 från B&C är en hållbar och miljövänlig produkt, tillverkad av 100% ekologisk ringspunnen bomull. Denna T-shirt är speciellt designad för att erbjuda en mjuk och skön känsla mot huden, vilket gör den till ett idealiskt val för både vardagsbruk och som en bas för tryck och broderi. Med en medelvikt på 150 g/m² är den lätt men ändå robust nog för att bibehålla sin form och kvalitet även efter många tvättar. Denna T-shirt har en modern passform som smickrar alla kroppstyper och är försedd med en krage med ribbkant för att förbättra hållbarheten. Den släta ytan gör den till en perfekt canvas för alla typer av tryck och broderi, vilket gör det möjligt att anpassa den efter dina specifika behov, oavsett om det handlar om företagsprofilering eller personliga designprojekt. Kombinationen av högkvalitativt material, professionell finish och en snabb leveranstid gör Dam T-shirt Inspire E150 till ett utmärkt val för både privatpersoner och företag. Den ekologiska bomullen garanterar inte bara komfort utan också en miljövänlig produktionsprocess, vilket gör den till ett ansvarsfullt val för den medvetna konsumenten.",
  keywords: "dam t-shirt inspire e150 ekologisk b&c - tw02b, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Inspire E150 ekologisk B&C - TW02B - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt inspire e150 ekologisk b&c - tw02b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-inspire-e150-organic-bc-tw02b",
  name: "Dam T-shirt Inspire E150 ekologisk B&C - TW02B",
  articleNumber: "DAM-T-SHIRT-INSPIRE-E150-EKOLOGISK-BC---TW02B",
  description: "Högkvalitativ dam t-shirt inspire e150 ekologisk b&c - tw02b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Inspire E150 från B&C är tillverkad av ekologisk bomull och erbjuder perfekt kvalitet för tryck och broderi.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW02B_Sage-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW02B_Sage-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTW02B_Sage-glowne.jpg"
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
  keywords: ["dam t-shirt inspire e150 ekologisk b&c - tw02b", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Inspire E150 ekologisk B&C - TW02B - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt inspire e150 ekologisk b&c - tw02b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-inspire-e150-organic-bc/",
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
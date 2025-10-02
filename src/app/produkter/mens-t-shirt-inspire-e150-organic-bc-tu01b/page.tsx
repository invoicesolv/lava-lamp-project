import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Inspire E150 ekologisk B&C - TU01B - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Inspire E150 från B&C är tillverkad av 100% ekologisk bomull, vilket ger en mjuk och skön känsla mot huden. Denna t-shirt är ett utmärkt val för både tryck och broderi tack vare dess jämna yta och hållbara material. Med en modern passform som kombinerar stil och komfort är den idealisk för både vardagsbruk och professionella sammanhang. T-shirten är designad för att behålla sin form och färg även efter flera tvättar, vilket garanterar en lång livslängd. Med snabb leverans kan du snabbt få denna t-shirt i din garderob, redo att anpassas efter dina behov.",
  keywords: "herr t-shirt inspire e150 ekologisk b&c - tu01b, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Inspire E150 ekologisk B&C - TU01B - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt inspire e150 ekologisk b&c - tu01b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-inspire-e150-organic-bc-tu01b",
  name: "Herr T-shirt Inspire E150 ekologisk B&C - TU01B",
  articleNumber: "HERR-T-SHIRT-INSPIRE-E150-EKOLOGISK-BC---TU01B",
  description: "Högkvalitativ herr t-shirt inspire e150 ekologisk b&c - tu01b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Inspire E150 från B&C erbjuder en ekologisk och bekväm design, perfekt för tryck och broderi.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTU01B_Sage-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTU01B_Sage-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTU01B_Sage-glowne.jpg"
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
  keywords: ["herr t-shirt inspire e150 ekologisk b&c - tu01b", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Inspire E150 ekologisk B&C - TU01B - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt inspire e150 ekologisk b&c - tu01b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-inspire-e150-organic-bc/",
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
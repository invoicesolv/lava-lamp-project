import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Interlock Tee Jays - 580 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Interlock Tee Jays - 580 är tillverkad av ett högkvalitativt interlocktyg som ger en extra mjuk och slät yta, perfekt för både tryck och broderi. Materialet består av en blandning av bomull och elastan, vilket ger en skön stretch och en passform som behåller sin form även efter många tvättar. Denna T-shirt är designad med en klassisk, kvinnlig siluett som både är stilren och bekväm. Denna T-shirt är inte bara bekväm utan också mycket hållbar, vilket gör den till ett utmärkt val för både vardagsanvändning och som arbetskläder. Den professionella finishen gör att den ser lika bra ut med en logotyp eller ett personligt meddelande, vilket gör den till en favorit för företag och team.  Med snabb leverans och en design som är optimerad för att möta alla dina behov, erbjuder Dam T-shirt Interlock Tee Jays - 580 en kombination av stil och funktionalitet. Oavsett om du behöver en T-shirt för företagsevenemang, mässor eller som en del av din dagliga garderob, är denna T-shirt ett pålitligt val.",
  keywords: "dam t-shirt interlock tee jays - 580, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Interlock Tee Jays - 580 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt interlock tee jays - 580 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-interlock-tee-jays-580",
  name: "Dam T-shirt Interlock Tee Jays - 580",
  articleNumber: "DAM-T-SHIRT-INTERLOCK-TEE-JAYS---580",
  description: "Högkvalitativ dam t-shirt interlock tee jays - 580 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Interlock Tee Jays - 580 erbjuder hög kvalitet och en perfekt passform med ett mjukt och hållbart material som är idealiskt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/TJ580N_Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/TJ580N_Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/TJ580N_Red-glowne.jpg"
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
  keywords: ["dam t-shirt interlock tee jays - 580", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Interlock Tee Jays - 580 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt interlock tee jays - 580 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-interlock-tee-jays/",
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
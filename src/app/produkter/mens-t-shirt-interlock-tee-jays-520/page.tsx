import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Interlock Tee Jays - 520 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Interlock Tee Jays - 520 är den ultimata t-shirten för både vardagligt bruk och professionella sammanhang. Tillverkad av högkvalitativt interlockmaterial, erbjuder denna t-shirt en mjuk och följsam känsla mot huden. Materialet är en blandning av bomull och polyester, vilket ger en utmärkt balans mellan komfort och hållbarhet, och säkerställer att t-shirten behåller sin form och färg även efter många tvättar. Denna t-shirt är särskilt framtagen för att vara en perfekt bas för tryck och broderi. Den släta ytan gör det enkelt att applicera olika typer av design och logotyper, vilket gör den till ett utmärkt val för företag som vill profilera sig eller för evenemang där enhetliga tröjor är ett måste. Passformen är modern och något skräddarsydd, vilket ger ett stilrent intryck utan att kompromissa med rörelsefriheten. Komfort är en annan prioritet för denna t-shirt. Den andas väl och är lätt att bära, vilket gör den idealisk för både inomhus- och utomhusbruk. Den professionella finishen och den högkvalitativa sömnaden bidrar till en lång hållbarhet. Oavsett om du behöver en t-shirt för personligt bruk eller som en del av en kollektion för ditt företag, är Tee Jays Interlock t-shirt ett säkert val. Snabb leverans garanterar också att du får dina produkter i tid för dina behov.",
  keywords: "herr t-shirt interlock tee jays - 520, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Interlock Tee Jays - 520 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt interlock tee jays - 520 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-interlock-tee-jays-520",
  name: "Herr T-shirt Interlock Tee Jays - 520",
  articleNumber: "HERR-T-SHIRT-INTERLOCK-TEE-JAYS---520",
  description: "Högkvalitativ herr t-shirt interlock tee jays - 520 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna Herr T-shirt Interlock från Tee Jays erbjuder en perfekt kombination av stil och komfort, idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/TJ520_Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/TJ520_Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/TJ520_Red-glowne.jpg"
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
  keywords: ["herr t-shirt interlock tee jays - 520", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Interlock Tee Jays - 520 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt interlock tee jays - 520 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-interlock-tee-jays/",
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
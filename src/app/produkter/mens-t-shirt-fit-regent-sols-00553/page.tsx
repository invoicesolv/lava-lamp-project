import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt FIT Regent SOL’s - 00553 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt FIT Regent från SOL's är den perfekta kombinationen av stil och komfort. Tillverkad av 100% ringspunnen bomull, erbjuder denna t-shirt en mjuk och behaglig känsla mot huden. Den är utformad för att ge en modern passform som smickrar alla kroppstyper och gör den till ett utmärkt val för vardagsbruk eller som en del av en professionell uniform. T-shirten är speciellt designad för att passa perfekt för tryck och broderi, vilket gör den till ett populärt val för företag och organisationer som vill profilera sig. Materialets höga kvalitet säkerställer att tryck och broderade logotyper ser skarpa och professionella ut, även efter flera tvättar. Med sin hållbara konstruktion och förstärkta sömmar är denna t-shirt byggd för att hålla länge. Den finns tillgänglig i flera storlekar och färger, vilket ger flexibilitet för att matcha dina specifika behov. Snabb leverans säkerställer att du får dina produkter i tid, oavsett om du beställer för ett event eller en företagspresentation.",
  keywords: "herr t-shirt fit regent sol’s - 00553, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt FIT Regent SOL’s - 00553 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt fit regent sol’s - 00553 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-fit-regent-sols-00553",
  name: "Herr T-shirt FIT Regent SOL’s - 00553",
  articleNumber: "HERR-T-SHIRT-FIT-REGENT-SOLS---00553",
  description: "Högkvalitativ herr t-shirt fit regent sol’s - 00553 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt FIT Regent från SOL's erbjuder en perfekt balans mellan stil och komfort, idealisk för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L149_Heather-Khaki-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L149_Heather-Khaki-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L149_Heather-Khaki-glowne.jpg"
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
  keywords: ["herr t-shirt fit regent sol’s - 00553", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt FIT Regent SOL’s - 00553 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt fit regent sol’s - 00553 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-fit-regent-sols/",
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
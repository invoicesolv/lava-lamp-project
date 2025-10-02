import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Fantasy Malfini - 124 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Fantasy Malfini 124 erbjuder en enastående kombination av stil och funktionalitet, vilket gör den idealisk för både vardagsbruk och specialanpassad design genom tryck och broderi. Tillverkad av 100% bomull, känns denna t-shirt mjuk mot huden samtidigt som den erbjuder god andningsförmåga, vilket säkerställer komfort hela dagen. Den är utformad för att ha en modern passform som varken är för tight eller för lös, vilket gör den till ett utmärkt val för alla kroppstyper. Materialet har genomgått en särskild behandling för att säkerställa att det behåller sin form och färg även efter många tvättar, vilket gör denna t-shirt till ett hållbart alternativ för den medvetna konsumenten. Den släta ytan på tyget är perfekt för detaljerade tryck och broderier, vilket gör det enkelt att anpassa tröjan med företagsloggor, slogans eller kreativa mönster. Med högkvalitativa sömmar och en professionell finish är Herr T-shirt Fantasy Malfini 124 inte bara ett bekvämt plagg utan även ett stilfullt och pålitligt val för både privatpersoner och företag. Dessutom erbjuder vi snabb leverans för att säkerställa att du får din beställning i tid, oavsett om det är för ett evenemang eller en kampanj.",
  keywords: "herr t-shirt fantasy malfini - 124, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Fantasy Malfini - 124 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt fantasy malfini - 124 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-fantasy-malfini-124",
  name: "Herr T-shirt Fantasy Malfini - 124",
  articleNumber: "HERR-T-SHIRT-FANTASY-MALFINI---124",
  description: "Högkvalitativ herr t-shirt fantasy malfini - 124 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt Fantasy Malfini 124 är en högkvalitativ t-shirt perfekt för tryck och broderi, med en bekväm passform och hållbara material.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/124_91_A.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/124_91_A.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/124_91_A.png"
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
  keywords: ["herr t-shirt fantasy malfini - 124", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Fantasy Malfini - 124 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt fantasy malfini - 124 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-fantasy/",
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
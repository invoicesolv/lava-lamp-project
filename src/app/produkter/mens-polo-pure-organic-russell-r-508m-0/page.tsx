import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Men\'s Polo Ren Ekologisk Russell - R-508M-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Men's Polo Ren Ekologisk Russell - R-508M-0 erbjuder en perfekt kombination av stil och hållbarhet. Tillverkad av 100% ekologisk bomull, denna pikétröja är inte bara snäll mot miljön utan även otroligt mjuk mot huden, vilket säkerställer maximal komfort hela dagen. Den robusta stickningen gör det enkelt att anpassa tröjan med tryck eller broderi, vilket gör den idealisk för företagsloggor eller personliga motiv. Tröjan har en klassisk passform med en stilren krage och knappar som ger ett professionellt utseende. Den är designad för att hålla formen och färgen tvätt efter tvätt, vilket garanterar långvarig användning och en fräsch look. Den ekologiska bomullen är odlad utan kemikalier och pesticider, vilket gör denna pikétröja till ett hållbart val för den medvetne konsumenten. Med fokus på kvalitet och detaljer, erbjuder Men's Polo Ren Ekologisk Russell en finish som är både snygg och funktionell. Oavsett om du använder den för företagsevenemang, sportaktiviteter eller som del av en casual garderob, kommer denna pikétröja att levereras snabbt och leva upp till dina förväntningar. Den är en investering i både stil och miljöansvar.",
  keywords: "men\'s polo ren ekologisk russell - r-508m-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Men\'s Polo Ren Ekologisk Russell - R-508M-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ men\'s polo ren ekologisk russell - r-508m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-pure-organic-russell-r-508m-0",
  name: "Men\'s Polo Ren Ekologisk Russell - R-508M-0",
  description: "Högkvalitativ men\'s polo ren ekologisk russell - r-508m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Men's Polo Ren Ekologisk Russell - R-508M-0 är en högkvalitativ och hållbar pikétröja, perfekt för både tryck och broderi.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z508M_Aqua_glowe.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z508M_Aqua_glowe.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z508M_Aqua_glowe.jpg"
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
  keywords: ["men\'s polo ren ekologisk russell - r-508m-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Men\'s Polo Ren Ekologisk Russell - R-508M-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ men\'s polo ren ekologisk russell - r-508m-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-pure-organic/",
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
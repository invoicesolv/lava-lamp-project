import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barn T-shirt Baby T-shirt JHK - TSRB150 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barn T-shirt JHK - TSRB150 är designad med både barnens komfort och kreativitet i åtanke. Tillverkad av 100% mjuk bomull, erbjuder denna T-shirt en naturlig känsla mot huden, perfekt för daglig användning. Dess hållbara material gör den idealisk för både tryck och broderi, vilket ger ett professionellt och långvarigt resultat oavsett design. Med en klassisk passform ger denna T-shirt en bekväm och avslappnad känsla, vilket gör den idealisk för lek och äventyr. Den är lätt att tvätta och behåller sin form och färg även efter många tvättar, vilket garanterar att dina barns favoritmotiv håller sig fräscha och tydliga. JHK:s TSRB150 är också känd för sin hållbarhet och slitstyrka, vilket gör den till ett utmärkt val för aktiva barn. Snabb leverans och högkvalitativ finish säkerställer att denna T-shirt inte bara blir en favorit i garderoben utan också ett perfekt val för personlig anpassning.",
  keywords: "barn t-shirt baby t-shirt jhk - tsrb150, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barn T-shirt Baby T-shirt JHK - TSRB150 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barn t-shirt baby t-shirt jhk - tsrb150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-t-shirt-baby-t-shirt-jhk-tsrb150",
  name: "Barn T-shirt Baby T-shirt JHK - TSRB150",
  articleNumber: "BARN-T-SHIRT-BABY-T-SHIRT-JHK---TSRB150",
  description: "Högkvalitativ barn t-shirt baby t-shirt jhk - tsrb150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barn T-shirt JHK - TSRB150 är den perfekta basen för både tryck och broderi, tillverkad i högkvalitativt, mjukt bomullsmaterial för optimal komfort.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/JHK153K_Royal-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK153K_Royal-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK153K_Royal-Blue-glowne.jpg"
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
  keywords: ["barn t-shirt baby t-shirt jhk - tsrb150", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barn T-shirt Baby T-shirt JHK - TSRB150 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barn t-shirt baby t-shirt jhk - tsrb150 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-baby-t-shirt-jhk/",
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
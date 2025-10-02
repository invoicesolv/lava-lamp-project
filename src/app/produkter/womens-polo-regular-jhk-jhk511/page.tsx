import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas piké Regular JHK - JHK511 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damernas piké Regular JHK - JHK511 är en pikétröja designad för att erbjuda både stil och komfort. Tillverkad av högkvalitativ bomull, erbjuder denna piké en mjuk och behaglig känsla mot huden, vilket gör den idealisk för dagligt bruk. Materialet är slitstarkt och bevarar sin form och färg även efter flera tvättar, vilket säkerställer långvarig användning. Denna piké är speciellt framtagen för att ge en utmärkt yta för tryck och broderi. Dess släta och jämna textur gör att logotyper och design framträder klart och tydligt, vilket gör den till ett populärt val för företag och organisationer som vill profilera sig professionellt. Med en klassisk passform erbjuder damernas piké Regular JHK - JHK511 en bekväm och smickrande silhuett som passar alla kroppsformer. Tröjan har en traditionell krage och knappslå som ger en tidlös look, vilket gör den lämplig både för arbete och fritid. Snabb leverans garanterar att du kan få din piké i tid för alla evenemang och behov.",
  keywords: "damernas piké regular jhk - jhk511, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas piké Regular JHK - JHK511 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas piké regular jhk - jhk511 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-regular-jhk-jhk511",
  name: "Damernas piké Regular JHK - JHK511",
  articleNumber: "DAMERNAS-PIK-REGULAR-JHK---JHK511",
  description: "Högkvalitativ damernas piké regular jhk - jhk511 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas piké Regular JHK - JHK511 är en stilren och bekväm pikétröja, perfekt för tryck och broderi med högkvalitativt material.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/JHK511_Sand-glwne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/JHK511_Sand-glwne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/JHK511_Sand-glwne.jpg"
    ]
  },
  category: "Kläder",
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
  keywords: ["damernas piké regular jhk - jhk511", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas piké Regular JHK - JHK511 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas piké regular jhk - jhk511 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-regular/",
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
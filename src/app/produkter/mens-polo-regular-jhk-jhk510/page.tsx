import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrpolo Regular JHK - JHK510 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrpolo Regular JHK - JHK510 är en klassisk pikétröja tillverkad av högkvalitativ bomullspiqué, vilket ger en mjuk och bekväm känsla mot huden. Den är designad med en regular fit som ger en avslappnad passform, idealisk för dagligt bruk och för företag som önskar en professionell look med personifierade tryck eller broderier. Materialet är noggrant utvalt för att säkerställa både hållbarhet och komfort. Bomullspikén är andningsbar och slitstark, vilket gör tröjan perfekt för både inomhus- och utomhusaktiviteter. Den robusta kragen och de förstärkta sömmarna bidrar ytterligare till plaggets livslängd och hållbara kvalitet. Herrpolo Regular JHK - JHK510 är särskilt lämpad för broderi och tryck, med en jämn yta som ger en professionell finish oavsett val av anpassning. Oavsett om det är för företagsevenemang, personaluniformer eller som en del av en sportklubbens klädsel, erbjuder denna pikétröja en stilren och funktionell lösning. Dessutom kan du förvänta dig snabb leverans, så att du kan få dina personifierade plagg i tid.",
  keywords: "herrpolo regular jhk - jhk510, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrpolo Regular JHK - JHK510 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrpolo regular jhk - jhk510 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-regular-jhk-jhk510",
  name: "Herrpolo Regular JHK - JHK510",
  articleNumber: "HERRPOLO-REGULAR-JHK---JHK510",
  description: "Högkvalitativ herrpolo regular jhk - jhk510 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrpolo Regular JHK - JHK510 är en stilren och bekväm pikétröja, perfekt för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/JHK510_Sand-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/JHK510_Sand-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/JHK510_Sand-glowne.jpg"
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
  keywords: ["herrpolo regular jhk - jhk510", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrpolo Regular JHK - JHK510 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrpolo regular jhk - jhk510 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-regular/",
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
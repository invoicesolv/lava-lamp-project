import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damlinne Justin SOL's - 01826 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damlinne Justin från SOL's är designat med både stil och funktionalitet i åtanke. Detta linne är tillverkat av 100% kammad ringspunnen bomull, vilket ger en mjuk och behaglig känsla mot huden. Tygets fina struktur gör det idealiskt för både tryck och broderi, vilket ger en skarp och professionell finish som håller över tid.  Linnet har en figurnära passform som smickrar kroppens linjer utan att kompromissa med komforten. De förstärkta axelbanden och dubbla sömmar bidrar till dess hållbarhet, vilket gör det till ett utmärkt val för både vardagsbruk och mer formella tillfällen.  Med dess klassiska design och hållbara material är Damlinne Justin ett mångsidigt plagg i garderoben. Oavsett om du vill skapa tryck för ett event eller brodera för en mer personlig touch, kommer detta linne att leverera enastående resultat varje gång. Leveransen är snabb, vilket säkerställer att du kan njuta av ditt nya favoritplagg på nolltid.",
  keywords: "damlinne justin sol's - 01826, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damlinne Justin SOL's - 01826 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damlinne justin sol's - 01826 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-tank-top-justin-sols-01826",
  name: "Damlinne Justin SOL's - 01826",
  articleNumber: "DAMLINNE-JUSTIN-SOLS---01826",
  description: "Högkvalitativ damlinne justin sol's - 01826 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damlinne Justin från SOL's är det perfekta valet för tryck och broderi, tillverkat av högkvalitativt material som säkerställer både komfort och stil.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L01826_Grey-Melange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L01826_Grey-Melange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L01826_Grey-Melange-glowne.jpg"
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
  keywords: ["damlinne justin sol's - 01826", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damlinne Justin SOL's - 01826 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damlinne justin sol's - 01826 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-tank-top-justin-sols/",
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
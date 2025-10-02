import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damjacka Prestanda Malfini - 521 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damjacka Prestanda Malfini 521 är designad för att möta kraven hos moderna kvinnor som söker både stil och funktion. Tillverkad av högkvalitativt material, garanterar denna jacka både hållbarhet och komfort. Materialet är utformat för att stå emot olika väderförhållanden, vilket gör den till ett utmärkt val för både vardagsbruk och utomhusaktiviteter. Jackan är idealisk för tryck och broderi, vilket gör den till ett populärt val för företag och organisationer som vill sätta sin logotyp eller sitt budskap på en högkvalitativ yta. Den professionella finishen säkerställer att varje detalj framhävs med precision, vilket ger ett snyggt och enhetligt resultat. Passformen är noggrant utformad för att ge maximal rörelsefrihet och komfort hela dagen. De justerbara detaljerna ger en anpassningsbar passform som passar olika kroppsformer och storlekar, vilket gör den till ett mångsidigt tillskott i garderoben. Dessutom garanterar vår snabba leverans att du får din jacka precis när du behöver den, utan onödig väntan.",
  keywords: "damjacka prestanda malfini - 521, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damjacka Prestanda Malfini - 521 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damjacka prestanda malfini - 521 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-jacket-performance-malfini-521",
  name: "Damjacka Prestanda Malfini - 521",
  articleNumber: "DAMJACKA-PRESTANDA-MALFINI---521",
  description: "Högkvalitativ damjacka prestanda malfini - 521 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damjacka Prestanda Malfini 521 erbjuder en perfekt balans mellan stil och funktionalitet med sin hållbara design och bekväma passform.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/521_12_a_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/521_12_a_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/521_12_a_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
    ]
  },
  category: "Jackor",
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
  keywords: ["damjacka prestanda malfini - 521", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damjacka Prestanda Malfini - 521 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damjacka prestanda malfini - 521 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-jacket-performance/",
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
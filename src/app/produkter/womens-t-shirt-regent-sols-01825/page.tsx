import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Regent SOL's - 01825 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dam T-shirt Regent SOL's - 01825 är ett utmärkt val för alla som söker en kombination av komfort och stil. Tillverkad av 100% bomull, erbjuder denna t-shirt en mjuk och behaglig känsla mot huden. Dess släta yta gör den idealisk för både tryck och broderi, vilket ger möjligheter för personlig anpassning och företagsprofilering. T-shirtens passform är designad för att framhäva en feminin silhuett utan att kompromissa med komforten. Denna modell är lätt och andningsbar, vilket gör den perfekt för dagligt bruk eller som en del av en arbetsuniform. De förstärkta sömmarna bidrar till t-shirtens hållbarhet, vilket ger en långvarig och professionell finish. Oavsett om du behöver en t-shirt för ett event, en kampanj eller för personalens uniformer, levererar SOL's - 01825 en högkvalitativ bas som kan anpassas till dina behov. Med snabb leverans och möjlighet till bulkbeställningar är denna t-shirt ett smart val för både företag och privatpersoner som värdesätter kvalitet.",
  keywords: "dam t-shirt regent sol's - 01825, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Regent SOL's - 01825 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt regent sol's - 01825 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-regent-sols-01825",
  name: "Dam T-shirt Regent SOL's - 01825",
  articleNumber: "DAM-T-SHIRT-REGENT-SOLS---01825",
  description: "Högkvalitativ dam t-shirt regent sol's - 01825 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Regent SOL's är en stilren och bekväm t-shirt, perfekt för tryck och broderi med sin mjuka och hållbara bomullskvalitet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L01825_Orange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L01825_Orange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L01825_Orange-glowne.jpg"
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
  keywords: ["dam t-shirt regent sol's - 01825", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Regent SOL's - 01825 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt regent sol's - 01825 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-regent-sols/",
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
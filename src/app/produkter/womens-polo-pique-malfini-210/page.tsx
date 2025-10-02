import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damernas pikétröja Pique Malfini - 210 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damernas pikétröja Pique Malfini - 210 är tillverkad av högkvalitativ bomull och polyester, vilket ger en mjuk och hållbar känsla mot huden. Denna pikétröja är speciellt designad för att ge en professionell och elegant look, vilket gör den idealisk för både arbetsplatsen och mer avslappnade tillfällen.  Materialet är perfekt för tryck och broderi, vilket gör det enkelt att anpassa tröjan med logotyper eller personliga budskap. Den klassiska pikékragen och de snygga detaljerna ger ett sofistikerat utseende som håller över tid. Pikétröjan erbjuder en bekväm passform som säkerställer att du känner dig lika bra som du ser ut.  Dessa tröjor är inte bara stiliga utan också mycket hållbara, vilket innebär att de står emot frekvent användning och tvätt utan att förlora sin form eller färg. Med en snabb leveranstid kan du vara säker på att få dina anpassade tröjor i tid för vilket tillfälle som helst. Välj Damernas pikétröja Pique Malfini - 210 för en kombination av stil, komfort och anpassningsbarhet.",
  keywords: "damernas pikétröja pique malfini - 210, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damernas pikétröja Pique Malfini - 210 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damernas pikétröja pique malfini - 210 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-pique-malfini-210",
  name: "Damernas pikétröja Pique Malfini - 210",
  articleNumber: "DAMERNAS-PIKTRJA-PIQUE-MALFINI---210",
  description: "Högkvalitativ damernas pikétröja pique malfini - 210 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damernas pikétröja Pique Malfini - 210 är en stilren och bekväm tröja, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/210_01_a_xl.png",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/210_01_a_xl.png",
      "https://printexpress.pl/wp-content/uploads/2024/06/210_01_a_xl.png"
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
  keywords: ["damernas pikétröja pique malfini - 210", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damernas pikétröja Pique Malfini - 210 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damernas pikétröja pique malfini - 210 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-pique/",
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
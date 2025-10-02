import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrpolo Bomull Malfini - 212 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrpolo Bomull Malfini - 212 erbjuder en tidlös design med ett fokus på kvalitet och komfort. Tillverkad av 100% bomull, ger denna pikétröja en mjuk och andningsbar känsla som säkerställer bärkomfort under hela dagen. Dess slitstarka tyg gör den idealisk för tryck och broderi, vilket gör den till ett utmärkt val för företagsprofilering eller eventkläder. Passformen är noggrant utformad för att ge en smickrande silhuett utan att kompromissa på rörelsefrihet. Ribbstickad krage och ärmslut ger en professionell finish, medan de förstärkta sidosömmarna bidrar till plaggets hållbarhet. Denna polo är tillgänglig i flera färger, vilket ger möjlighet att matcha med olika företagsfärger eller personliga preferenser. Herrpolo Bomull Malfini - 212 kombinerar elegans och funktionalitet, vilket gör den till ett optimalt val för både vardagsbruk och professionella tillfällen. Vi erbjuder snabb leverans för att säkerställa att du får dina produkter i tid för dina evenemang eller kampanjer.",
  keywords: "herrpolo bomull malfini - 212, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrpolo Bomull Malfini - 212 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrpolo bomull malfini - 212 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-cotton-malfini-212",
  name: "Herrpolo Bomull Malfini - 212",
  articleNumber: "HERRPOLO-BOMULL-MALFINI---212",
  description: "Högkvalitativ herrpolo bomull malfini - 212 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrpolo Bomull Malfini - 212 är en klassisk pikétröja i högkvalitativ bomull, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/212_12_a_xl_preview_maxWidth_540_maxHeight_540_quality_100-glowne-1620x1620.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/212_12_a_xl_preview_maxWidth_540_maxHeight_540_quality_100-glowne-1620x1620.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/212_12_a_xl_preview_maxWidth_540_maxHeight_540_quality_100-glowne-1620x1620.jpg"
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
  keywords: ["herrpolo bomull malfini - 212", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrpolo Bomull Malfini - 212 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrpolo bomull malfini - 212 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-cotton/",
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
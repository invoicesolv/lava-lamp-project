import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Bomullsväska med sidor Carry Malfini - 901 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Bomullsväskan 'Carry Malfini - 901' är tillverkad av högkvalitativ bomull som erbjuder både hållbarhet och en professionell finish. Väskan har en enkel och stilren design med sidor, vilket gör den till ett utmärkt val för både vardaglig användning och som giveaways vid event eller kampanjer. Den generösa ytan på väskan gör den idealisk för att applicera tryck eller broderi, vilket ger företag och organisationer möjligheten att skapa personliga och minnesvärda produkter. Väskan är designad med komfort i åtanke, med robusta handtag som gör den enkel att bära även när den är fullpackad. Materialet är slitstarkt och tål daglig användning, vilket säkerställer att väskan behåller sitt utseende och funktion över tid. Dess hållbara konstruktion gör den till ett miljövänligt alternativ till engångsplastpåsar. Med snabb leverans kan du få denna mångsidiga väska i tid för ditt nästa event eller kampanj. Välj 'Carry Malfini - 901' för en kvalitativ och anpassningsbar lösning för dina bärbehov.",
  keywords: "bomullsväska med sidor carry malfini - 901, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Bomullsväska med sidor Carry Malfini - 901 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ bomullsväska med sidor carry malfini - 901 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cotton-bag-with-sides-carry-malfini-901",
  name: "Bomullsväska med sidor Carry Malfini - 901",
  articleNumber: "BOMULLSVSKA-MED-SIDOR-CARRY-MALFINI---901",
  description: "Högkvalitativ bomullsväska med sidor carry malfini - 901 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna bomullsväska från Malfini är perfekt för tryck och broderi, med robust design och god hållbarhet.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/901_10_c_xl_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/901_10_c_xl_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/901_10_c_xl_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
    ]
  },
  category: "Väskor",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["bomullsväska med sidor carry malfini - 901", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Bomullsväska med sidor Carry Malfini - 901 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ bomullsväska med sidor carry malfini - 901 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cotton-bag-with-sides-carry-malfini/",
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
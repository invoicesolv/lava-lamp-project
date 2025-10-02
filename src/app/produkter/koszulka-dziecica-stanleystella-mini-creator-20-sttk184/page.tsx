import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barntröja Stanley&Stella Mini Creator 2.0 - STTK184 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Mini Creator 2.0 är en underbar barntröja som kombinerar stil med komfort. Tillverkad av 100% ekologisk ringspunnen kammad bomull, erbjuder denna tröja en mjuk och skön känsla mot huden, vilket gör den idealisk för barnens känsliga hud. Tröjan har en modern snitt som ger en avslappnad och samtidigt trendig look, perfekt för alla tillfällen.  Med tanken på hållbarhet är denna tröja designad för att klara av både lek och tvätt, gång på gång, utan att förlora sin form eller färg. Den är särskilt utformad för att vara en utmärkt bas för tryck och broderi, vilket gör den till ett perfekt val för skoluniformer, fritidsaktiviteter eller personliga projekt.  Passformen är generös och tillåter enkel rörelse, vilket gör den idealisk för aktiva barn. Tröjan är noggrant sydd för att garantera en professionell finish, vilket säkerställer att den ser lika bra ut som den känns. Med snabb leverans kan du vara säker på att få denna kvalitetsprodukt i tid för alla speciella tillfällen.",
  keywords: "barntröja stanley&stella mini creator 2.0 - sttk184, bulkprodukt, tryck eget, kontorsartiklar, företagsprodukt, eventprodukt, tryck på kontorsartiklar, bulk beställning",
  openGraph: {
    title: "Barntröja Stanley&Stella Mini Creator 2.0 - STTK184 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barntröja stanley&stella mini creator 2.0 - sttk184 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "koszulka-dziecica-stanleystella-mini-creator-20-sttk184",
  name: "Barntröja Stanley&Stella Mini Creator 2.0 - STTK184",
  articleNumber: "BARNTRJA-STANLEYSTELLA-MINI-CREATOR-20---STTK184",
  description: "Högkvalitativ barntröja stanley&stella mini creator 2.0 - sttk184 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Barntröja Stanley&Stella Mini Creator 2.0 är perfekt för både vardagsbruk och speciella tillfällen med dess mjuka material och bekväma passform.",
  price: {
    base: 99,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Creator-2.0-_-Blank-kids-t-shirt-_-Stanley_Stellac145.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Creator-2.0-_-Blank-kids-t-shirt-_-Stanley_Stellac145.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Creator-2.0-_-Blank-kids-t-shirt-_-Stanley_Stellac145.jpg"
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
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["barntröja stanley&stella mini creator 2.0 - sttk184", "bulkprodukt", "tryck eget", "kontorsartiklar", "företagsprodukt"],
  seoTitle: "Barntröja Stanley&Stella Mini Creator 2.0 - STTK184 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barntröja stanley&stella mini creator 2.0 - sttk184 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/koszulka-dziecieca-stanleystella-mini-creator-2-0/",
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
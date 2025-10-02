import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dambyxa utan knappar Russell - Z266F - Bulkprodukt för tryck eget | Tryckeget",
  description: "Dambyxa utan knappar från Russell, modell Z266F, erbjuder en perfekt balans mellan stil och komfort. Tillverkad av högkvalitativt material som både andas och är slitstarkt, vilket gör dessa byxor till ett utmärkt val för dagligt bruk såväl som för mer formella tillfällen. Byxorna har en elegant design utan knappar, vilket gör dem smidiga att bära och lätt att styla med olika toppar och accessoarer. Materialet i Z266F består av en blandning av polyester och bomull, vilket ger både en mjuk känsla mot huden och en robust konstruktion som står emot slitage. Denna kombination gör byxorna idealiska för tryck och broderi, vilket ger företag och organisationer möjlighet att enkelt anpassa dem med logotyper eller andra designelement. Passformen är skräddarsydd för att förbättra komforten och ge en professionell look utan att kompromissa med rörlighet. Byxorna är utformade för att sitta bra på alla kroppsformer och ger en modern siluett som passar både för arbete och fritid. Med snabba leveransalternativ kan du få dessa mångsidiga byxor i tid för vilket evenemang eller projekt som helst. Oavsett om du behöver dem för ett team, ett event eller personligt bruk, erbjuder Russell Z266F en hållbar och stilren lösning.",
  keywords: "dambyxa utan knappar russell - z266f, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dambyxa utan knappar Russell - Z266F - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dambyxa utan knappar russell - z266f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-unbuttoned-sweatshirt-russell-z266f",
  name: "Dambyxa utan knappar Russell - Z266F",
  articleNumber: "DAMBYXA-UTAN-KNAPPAR-RUSSELL---Z266F",
  description: "Högkvalitativ dambyxa utan knappar russell - z266f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dambyxa utan knappar Russell Z266F kombinerar stil och komfort med sitt skräddarsydda snitt och högkvalitativa material.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z266F_Light-Oxford-Heather-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z266F_Light-Oxford-Heather-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z266F_Light-Oxford-Heather-glowne.jpg"
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
  keywords: ["dambyxa utan knappar russell - z266f", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dambyxa utan knappar Russell - Z266F - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dambyxa utan knappar russell - z266f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-unbuttoned-sweatshirt-russell/",
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
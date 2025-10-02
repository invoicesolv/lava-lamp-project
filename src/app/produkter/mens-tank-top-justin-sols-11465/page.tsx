import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrlinne Justin SOL's - 11465 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrlinne Justin från SOL's erbjuder en utmärkt bas för dina kreativa tryck och broderiprojekt. Tillverkat av 100% bomull, ger detta linne en mjuk och bekväm känsla mot huden, vilket gör det idealiskt för både vardagsbruk och speciella evenemang. Den lätta och andningsbara konstruktionen säkerställer att du håller dig sval och bekväm, oavsett aktivitet. Detta linne har en klassisk passform som ger en modern och stilren look, perfekt för både avslappnade och formella sammanhang. Det är utformat för att ge en jämn yta, vilket underlättar tryck och broderi med professionell kvalitet. Oavsett om du vill skapa ett unikt plagg för ditt företag, ett evenemang eller som en personlig present, är Justin-linnet ett pålitligt val. Hållbarhet är i fokus med detta linne, vilket säkerställer långvarig användning utan att kompromissa med kvaliteten. Den tåliga konstruktionen gör att linnet behåller sin form och färg efter många tvättar. Förutom de tekniska och estetiska fördelarna erbjuder vi snabb leverans för att möta dina tidskrav för alla projekt.",
  keywords: "herrlinne justin sol's - 11465, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrlinne Justin SOL's - 11465 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrlinne justin sol's - 11465 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-tank-top-justin-sols-11465",
  name: "Herrlinne Justin SOL's - 11465",
  articleNumber: "HERRLINNE-JUSTIN-SOLS---11465",
  description: "Högkvalitativ herrlinne justin sol's - 11465 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrlinne Justin från SOL's är det perfekta valet för tryck och broderi, tillverkat av högkvalitativ bomull för optimal komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L171_Grey-Melange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L171_Grey-Melange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L171_Grey-Melange-glowne.jpg"
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
  keywords: ["herrlinne justin sol's - 11465", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrlinne Justin SOL's - 11465 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrlinne justin sol's - 11465 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-tank-top-justin-sols/",
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
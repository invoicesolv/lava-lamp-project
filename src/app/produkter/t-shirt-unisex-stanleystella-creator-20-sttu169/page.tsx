import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "T-shirt unisex Stanley&Stella Creator 2.0 - STTU169 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Creator 2.0 - STTU169 är en unisex T-shirt designad med både stil och hållbarhet i åtanke. Tillverkad av 100% ekologisk ringspunnen kammad bomull, erbjuder denna T-shirt en oöverträffad mjukhet och komfort, vilket gör den idealisk för dagligt bruk eller som en del av din företagsuniform. Tygets vikt på 180 g/m² ger det en robust känsla utan att kompromissa med bekvämligheten, vilket gör det till ett utmärkt val för alla årstider. Denna T-shirt är speciellt anpassad för tryck och broderi, vilket ger en professionell finish som varar. Det släta tyget säkerställer att varje detalj av ditt tryck eller broderi framhävs perfekt, vilket gör det till ett utmärkt val för företagsloggor eller personliga motiv. Den moderna, något skräddarsydda passformen passar alla kroppstyper och gör den till ett mångsidigt plagg för både män och kvinnor. Stanley&Stella har ett starkt engagemang för hållbarhet, och Creator 2.0 T-shirten är inget undantag. Tillverkad med miljövänliga metoder, säkerställer den att du inte bara ser bra ut, utan också känner dig bra i ditt val av kläder. Med snabb leverans och enkel beställningsprocess är det enkelt att få denna högkvalitativa T-shirt i tid för ditt nästa evenemang eller marknadsföringskampanj.",
  keywords: "t-shirt unisex stanley&stella creator 2.0 - sttu169, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "T-shirt unisex Stanley&Stella Creator 2.0 - STTU169 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ t-shirt unisex stanley&stella creator 2.0 - sttu169 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "t-shirt-unisex-stanleystella-creator-20-sttu169",
  name: "T-shirt unisex Stanley&Stella Creator 2.0 - STTU169",
  articleNumber: "T-SHIRT-UNISEX-STANLEYSTELLA-CREATOR-20---STTU169",
  description: "Högkvalitativ t-shirt unisex stanley&stella creator 2.0 - sttu169 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Stanley&Stella Creator 2.0 är en unisex T-shirt av hög kvalitet, perfekt för tryck och broderi, med en mjuk och bekväm passform.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Creator-2.0-_-Premium-blank-unisex-t-shirt-_-Stanley_Stella-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Creator-2.0-_-Premium-blank-unisex-t-shirt-_-Stanley_Stella-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Creator-2.0-_-Premium-blank-unisex-t-shirt-_-Stanley_Stella-glowne.jpg"
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
  keywords: ["t-shirt unisex stanley&stella creator 2.0 - sttu169", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "T-shirt unisex Stanley&Stella Creator 2.0 - STTU169 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ t-shirt unisex stanley&stella creator 2.0 - sttu169 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/t-shirt-unisex-stanleystella-creator-2-0/",
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
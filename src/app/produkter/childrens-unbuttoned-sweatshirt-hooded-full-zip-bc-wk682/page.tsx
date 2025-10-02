import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barntröja med huva och dragkedja B&C - WK682 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Barntröjan med huva och dragkedja B&C - WK682 är designad för att möta både barnens och föräldrarnas behov av bekvämlighet och hållbarhet. Tillverkad av högkvalitativ bomullsblandning, erbjuder denna tröja en mjuk känsla mot huden samtidigt som den är tillräckligt slitstark för att tåla lek och äventyr. Den är idealisk för tryck och broderi, vilket gör den till ett utmärkt val för att skapa personliga design eller skoluniformer. Tröjan har en praktisk dragkedja framtill och en rymlig huva som skyddar mot väder och vind. Dess avslappnade passform säkerställer att barnen har full rörelsefrihet, medan de elastiska muddarna vid ärmslut och nederkant bidrar till en säker passform. Den finns i flera storlekar och färger, vilket gör det enkelt att hitta det perfekta alternativet för varje barn. Med fokus på hållbarhet och kvalitet, är tröjan konstruerad för att hålla över tid, även efter frekvent tvätt. Den professionella finishen och de noggrant utvalda materialen gör denna barntröja till ett utmärkt val för både vardagsbruk och speciella tillfällen. Vi erbjuder snabb leverans för att säkerställa att du får dina produkter i tid, oavsett om det är för en skolstart eller ett kommande evenemang.",
  keywords: "barntröja med huva och dragkedja b&c - wk682, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barntröja med huva och dragkedja B&C - WK682 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barntröja med huva och dragkedja b&c - wk682 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-unbuttoned-sweatshirt-hooded-full-zip-bc-wk682",
  name: "Barntröja med huva och dragkedja B&C - WK682",
  articleNumber: "BARNTRJA-MED-HUVA-OCH-DRAGKEDJA-BC---WK682",
  description: "Högkvalitativ barntröja med huva och dragkedja b&c - wk682 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna barntröja med huva och dragkedja från B&C är perfekt för både tryck och broderi. Tillverkad av mjukt och slitstarkt material, erbjuder den komfort och stil för alla tillfällen.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWK682_Royal-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWK682_Royal-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWK682_Royal-Blue-glowne.jpg"
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
  keywords: ["barntröja med huva och dragkedja b&c - wk682", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barntröja med huva och dragkedja B&C - WK682 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barntröja med huva och dragkedja b&c - wk682 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-unbuttoned-sweatshirt-hooded-full-zip-bc/",
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
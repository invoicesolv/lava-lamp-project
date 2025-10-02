import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Barntröja utan dragkedja Russell - Z266K - Bulkprodukt för tryck eget | Tryckeget",
  description: "Russell Z266K barntröja är designad med både stil och funktion i åtanke. Tillverkad av mjuk och slitstark bomull, erbjuder denna tröja exceptionell komfort för barn i alla åldrar. Materialet är noggrant utvalt för att tåla daglig användning och lek, vilket gör den till ett utmärkt val för skolor, sportlag och fritidsaktiviteter. Denna tröja är perfekt för tryck och broderi, vilket gör den idealisk för anpassning med skol- eller klubbemblem. Den släta ytan ger en professionell finish för alla typer av trycktekniker, medan de förstärkta sömmarna säkerställer att plagget håller formen även efter många tvättar. Passformen är avsedd att vara bekväm och rörelsevänlig för barn, vilket ger dem frihet att leka och röra sig utan begränsningar. Den tidlösa designen gör den lätt att matcha med andra plagg i barnens garderob. För föräldrar och skolor som söker kvalitet och hållbarhet i barnkläder, är Russell Z266K ett pålitligt val. Snabb leverans säkerställer att du får dina tröjor i tid för alla evenemang och aktiviteter.",
  keywords: "barntröja utan dragkedja russell - z266k, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Barntröja utan dragkedja Russell - Z266K - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ barntröja utan dragkedja russell - z266k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-unzipped-sweatshirt-russell-z266k",
  name: "Barntröja utan dragkedja Russell - Z266K",
  articleNumber: "BARNTRJA-UTAN-DRAGKEDJA-RUSSELL---Z266K",
  description: "Högkvalitativ barntröja utan dragkedja russell - z266k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Russell Z266K är en bekväm barntröja utan dragkedja, perfekt för tryck och broderi, med högkvalitativ bomull för långvarig användning.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z266K_Bright-Royal-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z266K_Bright-Royal-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z266K_Bright-Royal-glowne.jpg"
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
  keywords: ["barntröja utan dragkedja russell - z266k", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Barntröja utan dragkedja Russell - Z266K - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ barntröja utan dragkedja russell - z266k perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-unzipped-sweatshirt/",
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
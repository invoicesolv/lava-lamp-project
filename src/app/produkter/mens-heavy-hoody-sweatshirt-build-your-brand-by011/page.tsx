import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr Tung Hoodie Sweatshirt Bygg Ditt Varumärke - BY011 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ produkt tillverkad av premium material. Perfekt för tryck och broderi med professionell finish. Erbjuder komfort och hållbarhet för alla användningsområden. Snabb leverans och utmärkt kvalitet garanteras.",
  keywords: "herr tung hoodie sweatshirt bygg ditt varumärke - by011, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr Tung Hoodie Sweatshirt Bygg Ditt Varumärke - BY011 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr tung hoodie sweatshirt bygg ditt varumärke - by011 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-heavy-hoody-sweatshirt-build-your-brand-by011",
  name: "Herr Tung Hoodie Sweatshirt Bygg Ditt Varumärke - BY011",
  articleNumber: "HERR-TUNG-HOODIE-SWEATSHIRT-BYGG-DITT-VARUMARKE-BY011",
  description: "Högkvalitativ herr tung hoodie sweatshirt bygg ditt varumärke - by011 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ produkt perfekt för tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY011_Paradise-Orange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY011_Paradise-Orange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY011_Paradise-Orange-glowne.jpg"
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
  keywords: ["herr tung hoodie sweatshirt bygg ditt varumärke - by011", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr Tung Hoodie Sweatshirt Bygg Ditt Varumärke - BY011 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr tung hoodie sweatshirt bygg ditt varumärke - by011 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-heavy-hoody-sweatshirt/",
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
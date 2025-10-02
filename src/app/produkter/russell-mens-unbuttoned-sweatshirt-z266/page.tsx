import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Russell herrar oförknäppt sweatshirt - Z266 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Russell herrar oförknäppt sweatshirt Z266 är en perfekt kombination av stil och komfort. Tillverkad av högkvalitativ bomull och polyesterblandning, erbjuder denna tröja en mjuk och slitstark känsla, vilket gör den idealisk för dagligt bruk. Materialet är noggrant utvalt för att säkerställa en jämn och professionell finish, vilket gör den utmärkt för både tryck och broderi.  Sweatshirten är designad med enkelhet och funktionalitet i åtanke och har en klassisk, oförknäppt stil som passar perfekt i både avslappnade och mer formella miljöer. Passformen är noga konstruerad för att ge optimal komfort utan att kompromissa med stil, vilket gör den till en favorit för både arbete och fritid.  Hållbarheten hos Russell Z266 garanterar att den behåller sin form och färg även efter många tvättar, vilket gör den till ett långsiktigt tillskott i garderoben. Denna tröja kombinerar praktisk användning med en modern estetik, och den snabba leveranstiden gör det enkelt att få den i tid till alla evenemang eller kampanjer.",
  keywords: "russell herrar oförknäppt sweatshirt - z266, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Russell herrar oförknäppt sweatshirt - Z266 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ russell herrar oförknäppt sweatshirt - z266 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "russell-mens-unbuttoned-sweatshirt-z266",
  name: "Russell herrar oförknäppt sweatshirt - Z266",
  articleNumber: "RUSSELL-HERRAR-OFRKNPPT-SWEATSHIRT---Z266",
  description: "Högkvalitativ russell herrar oförknäppt sweatshirt - z266 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Russell herrar oförknäppt sweatshirt Z266 är en stilren och bekväm tröja, idealisk för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z266_Light-Oxford-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z266_Light-Oxford-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z266_Light-Oxford-glowne.jpg"
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
  keywords: ["russell herrar oförknäppt sweatshirt - z266", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Russell herrar oförknäppt sweatshirt - Z266 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ russell herrar oförknäppt sweatshirt - z266 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/russell-mens-unbuttoned-sweatshirt/",
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
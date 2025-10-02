import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrpolo Premium Fruit of the Loom - F511N - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrpolo Premium från Fruit of the Loom, modell F511N, erbjuder en perfekt kombination av stil och funktion. Tillverkad av 100% bomull, garanterar denna polo en mjuk och komfortabel känsla mot huden, samtidigt som den bibehåller en robust struktur som är idealisk för både tryck och broderi. Den tidlösa designen är utmärkt för såväl professionella miljöer som för vardagsbruk, vilket gör den till ett mångsidigt tillskott i garderoben. Denna polo är särskilt framtagen för att ge en professionell finish vid personalisering, med en jämn yta som säkerställer att varje detalj i ditt tryck eller broderi framträder klart och tydligt. Den klassiska passformen, kombinerad med en ribbad krage och knappslå med tre knappar, ger en stilren look som passar alla kroppsformer. Förutom sin eleganta estetik, är Herrpolo Premium också designad med hållbarhet i åtanke. De slitstarka sömmarna och det kvalitativa tyget gör att denna tröja behåller sin form och färg även efter många tvättar. Snabb leverans och högkvalitativ service garanterar att du får din produkt i tid, redo att användas eller dekoreras efter dina behov.",
  keywords: "herrpolo premium fruit of the loom - f511n, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrpolo Premium Fruit of the Loom - F511N - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrpolo premium fruit of the loom - f511n perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-polo-premium-fruit-of-the-loom-f511n",
  name: "Herrpolo Premium Fruit of the Loom - F511N",
  articleNumber: "HERRPOLO-PREMIUM-FRUIT-OF-THE-LOOM---F511N",
  description: "Högkvalitativ herrpolo premium fruit of the loom - f511n perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrpolo Premium från Fruit of the Loom är en högkvalitativ tröja perfekt för tryck och broderi med en bekväm passform och hållbar design.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/F511N_Kelly-Green-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/F511N_Kelly-Green-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/F511N_Kelly-Green-glowne.jpg"
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
  keywords: ["herrpolo premium fruit of the loom - f511n", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrpolo Premium Fruit of the Loom - F511N - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrpolo premium fruit of the loom - f511n perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-polo-premium/",
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
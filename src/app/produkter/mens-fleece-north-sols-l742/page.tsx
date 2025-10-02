import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrfleece North SOL's - L742 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrfleece North SOL's - L742 är en idealisk fleecejacka för den stilmedvetna mannen som värdesätter både komfort och funktion. Tillverkad av mjukt och slitstarkt material, erbjuder denna jacka en utmärkt bas för tryck och broderi, vilket gör den perfekt för företag som vill profilera sig eller för personliga anpassningar. Materialet är noggrant utvalt för att säkerställa hållbarhet, vilket gör att jackan håller formen och färgen även efter många tvättar. Passformen är designad för att ge maximal rörelsefrihet samtidigt som den sitter snyggt på kroppen. Detta gör den inte bara bekväm att bära under längre perioder, utan också stilig nog för både vardagsbruk och mer formella tillfällen. Fleecejackans design inkluderar även praktiska funktioner som dragkedjor och fickor för extra bekvämlighet. Denna jacka är inte bara funktionell utan också miljövänlig, vilket gör den till ett hållbart val för den medvetna konsumenten. Professionell finish och noggrann uppmärksamhet på detaljer säkerställer att varje jacka levereras med en hög standard. Med snabb leverans kan du snabbt få tillgång till denna kvalitetsprodukt, redo att anpassas efter dina behov.",
  keywords: "herrfleece north sol's - l742, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrfleece North SOL's - L742 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrfleece north sol's - l742 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-fleece-north-sols-l742",
  name: "Herrfleece North SOL's - L742",
  articleNumber: "HERRFLEECE-NORTH-SOLS---L742",
  description: "Högkvalitativ herrfleece north sol's - l742 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrfleece North SOL's - L742 är en högkvalitativ fleecejacka perfekt för tryck och broderi, med en bekväm passform och hållbar design.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L742_Navy-glowne-1.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L742_Navy-glowne-1.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L742_Navy-glowne-1.jpg"
    ]
  },
  category: "Jackor",
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
  keywords: ["herrfleece north sol's - l742", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrfleece North SOL's - L742 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrfleece north sol's - l742 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-fleece-north/",
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
import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damfleece North SOL's - L745 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damfleece North SOL's - L745 är tillverkad av högkvalitativt fleece-material som erbjuder både värme och komfort. Denna jacka är designad för att vara ett mångsidigt plagg, perfekt för vardagligt bruk eller som ett lager under kallare dagar. Materialet är noga utvalt för att ge optimal yta för både tryck och broderi, vilket gör det enkelt att anpassa jackan med logotyper eller andra designer.  Denna fleecejacka har en feminin passform som sitter smickrande på kroppen utan att kompromissa med rörelsefriheten. Den är utrustad med en hel dragkedja framtill för enkel på- och avtagning samt praktiska fickor för förvaring av småsaker. Jackans hållbara konstruktion säkerställer att den behåller sin form och funktion även efter upprepad användning och tvätt.  Med en professionell finish är Damfleece North SOL's - L745 inte bara funktionell utan även stilren. Den är idealisk för företag eller organisationer som vill ha en enhetlig look för sitt team. Dessutom erbjuder vi snabb leverans för att säkerställa att du får din anpassade jacka i tid för alla tillfällen.",
  keywords: "damfleece north sol's - l745, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damfleece North SOL's - L745 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damfleece north sol's - l745 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-fleece-north-sols-l745",
  name: "Damfleece North SOL's - L745",
  articleNumber: "DAMFLEECE-NORTH-SOLS---L745",
  description: "Högkvalitativ damfleece north sol's - l745 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damfleece North SOL's - L745 är en mjuk och bekväm fleecejacka perfekt för personligt tryck eller broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L745_Orange-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L745_Orange-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L745_Orange-glowne.jpg"
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
  keywords: ["damfleece north sol's - l745", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damfleece North SOL's - L745 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damfleece north sol's - l745 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-fleece-north/",
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
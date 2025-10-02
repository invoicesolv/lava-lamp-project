import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damers långärmad t-shirt Sportig SOL's - 02072 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damers långärmad t-shirt Sportig SOL's erbjuder en perfekt kombination av stil och funktion. Tillverkad av mjukt och slitstarkt bomullsmaterial, ger denna t-shirt en fantastisk komfort och hållbarhet, vilket gör den idealisk för både vardagligt bruk och sportaktiviteter. Materialets naturliga andningsförmåga säkerställer att du håller dig sval och bekväm hela dagen. Denna t-shirt är speciellt utformad för att vara en utmärkt bas för tryck och broderi. Den släta ytan och den professionella finishen gör det enkelt att lägga till personliga eller företagsrelaterade designelement, vilket gör den till ett populärt val för företagskläder eller laguniformer. Passformen är anpassad för damer, med en sportig silhuett som smickrar figuren utan att kompromissa på rörelsefrihet. De långa ärmarna ger extra täckning och värme under kyligare dagar. Med SOL's snabba leverans kan du vara säker på att få din t-shirt i tid för alla evenemang eller behov.",
  keywords: "damers långärmad t-shirt sportig sol's - 02072, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damers långärmad t-shirt Sportig SOL's - 02072 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damers långärmad t-shirt sportig sol's - 02072 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-long-sleeve-t-shirt-sporty-sols-02072",
  name: "Damers långärmad t-shirt Sportig SOL's - 02072",
  articleNumber: "DAMERS-LNGRMAD-T-SHIRT-SPORTIG-SOLS---02072",
  description: "Högkvalitativ damers långärmad t-shirt sportig sol's - 02072 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damers långärmad t-shirt Sportig SOL's är perfekt för både vardag och aktivitet med en bekväm passform och högkvalitativt material.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L02072_White-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L02072_White-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L02072_White-glowne.jpg"
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
  keywords: ["damers långärmad t-shirt sportig sol's - 02072", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damers långärmad t-shirt Sportig SOL's - 02072 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damers långärmad t-shirt sportig sol's - 02072 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-long-sleeve-t-shirt-sporty/",
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
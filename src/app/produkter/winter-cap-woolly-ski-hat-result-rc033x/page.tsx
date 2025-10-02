import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Vintermössa Ullig Skidmössa Result - RC033X - Bulkprodukt för tryck eget | Tryckeget",
  description: "Vintermössa Ullig Skidmössa Result RC033X erbjuder en oslagbar kombination av värme, stil och funktionalitet. Tillverkad av högkvalitativ ull, ger denna mössa en naturlig isolering som håller dig varm under de kallaste dagarna. Ullen är inte bara mjuk och bekväm att bära, utan den är också hållbar och motståndskraftig mot väder och vind. Mössans släta och enhetliga yta gör den till en idealisk kandidat för anpassning med tryck eller broderi. Du kan enkelt lägga till din företagslogotyp eller ett personligt motiv för att skapa en unik look. Den professionella finishen ger ett elegant intryck, vilket gör den passande både för vardagsbruk och mer formella utomhusevenemang. Passformen är noggrant designad för att säkerställa optimal komfort, med en elastisk kant som håller mössan säkert på plats utan att kännas för tight. Denna modell är ett hållbart val med lång livslängd, vilket säkerställer att du kan njuta av din mössa säsong efter säsong. Vi erbjuder snabb leverans, så du kan få din mössa i tid för den kommande vintersäsongen.",
  keywords: "vintermössa ullig skidmössa result - rc033x, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Vintermössa Ullig Skidmössa Result - RC033X - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ vintermössa ullig skidmössa result - rc033x perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "winter-cap-woolly-ski-hat-result-rc033x",
  name: "Vintermössa Ullig Skidmössa Result - RC033X",
  articleNumber: "VINTERMSSA-ULLIG-SKIDMSSA-RESULT---RC033X",
  description: "Högkvalitativ vintermössa ullig skidmössa result - rc033x perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Vintermössa Ullig Skidmössa Result RC033X är den perfekta vinteraccessoaren för både stil och värme. Tillverkad i högkvalitativ ull, idealisk för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/10/RC33_Navy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/10/RC33_Navy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/10/RC33_Navy-glowne.jpg"
    ]
  },
  category: "Mössor",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["vintermössa ullig skidmössa result - rc033x", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Vintermössa Ullig Skidmössa Result - RC033X - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ vintermössa ullig skidmössa result - rc033x perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/winter-cap-woolly-ski-hat-result/",
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
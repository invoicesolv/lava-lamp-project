import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Smart herr softshell Russell - Z040M - Bulkprodukt för tryck eget | Tryckeget",
  description: "Denna smarta herr softshelljacka från Russell kombinerar stil och funktionalitet, vilket gör den till ett utmärkt val för både professionella och fritidsändamål. Tillverkad av högkvalitativt softshell-material erbjuder jackan både vind- och vattenavvisande egenskaper, vilket säkerställer att du håller dig varm och torr under varierande väderförhållanden. Materialets flexibilitet och andningsförmåga gör den idealisk för aktiva aktiviteter samtidigt som den behåller en elegant siluett. Jackan är designad med tanke på anpassning och är exceptionellt lämpad för både tryck och broderi. Den släta ytan ger en perfekt bas för att lägga till logotyper, namn eller andra personliga detaljer, vilket gör den idealisk för företag eller evenemang som vill skapa en professionell look.  Passformen är noggrant utformad för att ge maximal komfort utan att kompromissa på rörelsefriheten. Jackans moderna snitt och sofistikerade detaljer ger ett polerat intryck, lämpligt för både formella och informella sammanhang. Med en hållbar konstruktion och en utmärkt finish är denna softshelljacka ett pålitligt val för dem som söker pålitlig prestanda och stil. Levereras snabbt och effektivt för att passa dina behov.",
  keywords: "smart herr softshell russell - z040m, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Smart herr softshell Russell - Z040M - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ smart herr softshell russell - z040m perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "smart-mens-softshell-russell-z040m",
  name: "Smart herr softshell Russell - Z040M",
  articleNumber: "SMART-HERR-SOFTSHELL-RUSSELL---Z040M",
  description: "Högkvalitativ smart herr softshell russell - z040m perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Smart och funktionell softshelljacka för herrar från Russell, perfekt för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z040M_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z040M_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z040M_Black-glowne.jpg"
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
  keywords: ["smart herr softshell russell - z040m", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Smart herr softshell Russell - Z040M - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ smart herr softshell russell - z040m perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/smart-mens-softshell/",
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
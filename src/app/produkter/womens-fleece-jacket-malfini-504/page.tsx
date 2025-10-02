import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damfleecejacka Malfini - 504 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damfleecejackan Malfini - 504 är det perfekta valet för dem som söker en jacka som förenar stil, komfort och funktionalitet. Tillverkad av högkvalitativt fleece-material, erbjuder denna jacka en mjuk och varm känsla, idealisk för kyligare dagar. Materialets natur gör det lätt att applicera både tryck och broderi, vilket gör den till en utmärkt bas för personlig anpassning eller företagsprofilering. Den skräddarsydda passformen är designad för att smickra kvinnliga former samtidigt som den erbjuder optimal rörelsefrihet. Den hållbara konstruktionen säkerställer att jackan håller formen och färgen, även efter upprepade tvättar. Dessutom har jackan en professionell finish med detaljer som dragkedja i kontrastfärg och praktiska fickor för extra funktionalitet. Perfekt för företag som vill erbjuda sina anställda stilrena och funktionella kläder, eller för event där profilkläder är ett måste. Snabb leverans säkerställer att du får dina produkter i tid, varje gång.",
  keywords: "damfleecejacka malfini - 504, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damfleecejacka Malfini - 504 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damfleecejacka malfini - 504 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-fleece-jacket-malfini-504",
  name: "Damfleecejacka Malfini - 504",
  articleNumber: "DAMFLEECEJACKA-MALFINI---504",
  description: "Högkvalitativ damfleecejacka malfini - 504 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna damfleecejacka från Malfini erbjuder både stil och funktionalitet, perfekt för tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/504_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/504_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/504_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["damfleecejacka malfini - 504", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damfleecejacka Malfini - 504 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damfleecejacka malfini - 504 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-fleece-jacket/",
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
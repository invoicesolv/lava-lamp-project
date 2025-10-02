import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt Premium JHK - TSRA190 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt Premium JHK - TSRA190 är en förstklassig t-shirt designad för optimal komfort och stil. Tillverkad av 100% högkvalitativ bomull erbjuder denna t-shirt en mjuk och skön känsla mot huden, vilket gör den idealisk för dagligt bruk. T-shirten har en modern passform som smickrar alla kroppstyper utan att kompromissa på rörelsefriheten. Denna t-shirt är särskilt lämpad för tryck och broderi tack vare dess släta yta och robusta material. Oavsett om du vill anpassa den med ett företagslogo, ett personligt budskap eller en kreativ design, garanterar TSRA190 en skarp och professionell finish. Materialets hållbarhet ser till att tryck och broderi håller sig snygga även efter många tvättar. Förutom dess estetiska och funktionella egenskaper är denna t-shirt även hållbar och miljövänlig, tillverkad med hänsyn till både kvalitet och miljö. Med snabb leverans och ett brett urval av storlekar är Herr T-shirt Premium JHK - TSRA190 ett pålitligt och stilrent val för alla tillfällen.",
  keywords: "herr t-shirt premium jhk - tsra190, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt Premium JHK - TSRA190 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt premium jhk - tsra190 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-premium-jhk-tsra190",
  name: "Herr T-shirt Premium JHK - TSRA190",
  articleNumber: "HERR-T-SHIRT-PREMIUM-JHK---TSRA190",
  description: "Högkvalitativ herr t-shirt premium jhk - tsra190 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Premium Herr T-shirt från JHK, perfekt för både tryck och broderi. Tillverkad av högkvalitativ bomull för bästa komfort och hållbarhet.",
  price: {
    base: 299,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/JHK190_Kelly-Green-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK190_Kelly-Green-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/JHK190_Kelly-Green-glowne.jpg"
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
  keywords: ["herr t-shirt premium jhk - tsra190", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt Premium JHK - TSRA190 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt premium jhk - tsra190 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-premium-jhk/",
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
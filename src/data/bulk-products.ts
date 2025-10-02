export interface BulkProduct {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: {
    base: number;
    currency: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  category: string;
  features: string[];
  sizes: string[];
  colors: string[];
  material: string;
  printArea: string;
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  minOrder: number;
  leadTime: string;
  bulkDiscount: string;
  pageUrl: string;
  specifications: string[];
}

// Create products from CSV data
const csvProducts = [
  {
    pageUrl: "https://printexpress.pl/en/product/winter-cap-original-patch-beanie-beechfield/",
    name: "Vintermössa Original Patch Beanie Beechfield - B445",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/CB445_Graphite-Grey-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "winter-cap-original-patch-beanie-beechfield-b445"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/polyester-bag-icon-gymsac/",
    name: "Polyesterpåse Icon Gymsac - BG110",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/BG110_Black_Surf-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "polyester-bag-icon-gymsac-bg110"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cap-flexfit-wooly-combed-cap/",
    name: "Keps FLEXFIT Ullkammad Keps - 6277",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/FX6277_Dark-Leaf-Green-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "cap-flexfit-wooly-combed-cap-6277"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/winter-beanie-original-cuffed-beanie-beechfield/",
    name: "Vintermössa Original Cuffed Beanie Beechfield - B45",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/CB45_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "winter-beanie-original-cuffed-beanie-beechfield-b45"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/winter-cap-woolly-ski-hat-result/",
    name: "Vintermössa Ullig Skidmössa Result - RC033X",
    image: "https://printexpress.pl/wp-content/uploads/2024/10/RC33_Navy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "winter-cap-woolly-ski-hat-result-rc033x"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mesh-cap-snapback-trucker-beechfield/",
    name: "Meshkeps Snapback Trucker Beechfield - B640",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/CB640_Black_White-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "mesh-cap-snapback-trucker-beechfield-b640"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cap-5-panel-snapback-rapper-cap-beechfield/",
    name: "Keps 5 Panel Snapback Rapper Keps Beechfield - B610",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/CB610_Classic-Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "cap-5-panel-snapback-rapper-cap-beechfield-b610"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cap-flexfit-classic-snapback/",
    name: "Keps FLEXFIT Klassisk Snapback - 6089M",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/FX6089M_Heather-Grey-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "cap-flexfit-classic-snapback-6089m"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cap-ultimate-6-panel-cap-beechfield/",
    name: "Keps Ultimate 6 Panel Keps Beechfield - B18",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/CB18_Bottle-Green-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "cap-ultimate-6-panel-cap-beechfield-b18"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cap-original-5-panel-cap-beechfield/",
    name: "Original 5 Panel Keps Beechfield - B10",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/CB10_Light-Grey-dlowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "cap-original-5-panel-cap-beechfield-b10"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cap-rap-5p-malfini/",
    name: "Keps Rap 5p Malfini - 301",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/301_09_c_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "cap-rap-5p-malfini-301"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cap-5p-malfini/",
    name: "Keps 5P Malfini - 307",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/307_14_a_xl_preview_maxWidth_740_maxHeight_740_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "cap-5p-malfini-307"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cap-6p-malfini/",
    name: "Keps 6P Malfini - 305",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/305_08_c_xl_preview_maxWidth_740_maxHeight_740_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 89,
    slug: "cap-6p-malfini-305"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-light-crew-sweatshirt/",
    name: "Herr Lätt Crew Sweatshirt Bygg Ditt Varumärke - BY010",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY010-violet-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-light-crew-sweatshirt-build-your-brand-by010"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-heavy-zip-hoody-sweatshirt/",
    name: "Herrarnas Tjocka Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY012",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY012_Heather-Grey-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-heavy-zip-hoody-sweatshirt-build-your-brand-by012"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-heavy-hoody-sweatshirt/",
    name: "Herr Tung Hoodie Sweatshirt Bygg Ditt Varumärke - BY011",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY011_Paradise-Orange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-heavy-hoody-sweatshirt-build-your-brand-by011"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-terry-zip-hoody-sweatshirt/",
    name: "Damernas Terry Zip Hoodie Sweatshirt Bygg Ditt Varumärke - BY069",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY069_Charcoal-Heather-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-terry-zip-hoody-sweatshirt-build-your-brand-by069"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-heavy-hoody/",
    name: "Damernas Tjocka Hoodie Bygg Ditt Varumärke - BY026",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY026_Dusk-Rose-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kontorsartiklar",
    price: 99,
    slug: "womens-heavy-hoody-build-your-brand-by026"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/oversize-sweatshirt/",
    name: "Oversize sweatshirt Bygg Ditt Varumärke - BY074",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY074_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "oversize-sweatshirt-build-your-brand-by074"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-oversize-sweatshirt/",
    name: "Dams oversize sweatshirt Build Your Brand - BY037",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY037_Charcoal-Heather-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-oversize-sweatshirt-build-your-brand-by037"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-softshell-with-hood/",
    name: "Damers softshell med huva B&C - JW937",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BCJW937_Dark-Grey-Solid-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "womens-softshell-with-hood-bc-jw937"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-softshell-with-hood/",
    name: "Herr softshelljacka med huva B&C - JM950",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BCJM950_Dark-Grey-Solid-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "mens-softshell-with-hood-bc-jm950"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cropp-crew-womens-sweatshirt/",
    name: "Cropp Crew damtröja Bygg ditt varumärke - BY131",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY131_Black.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "cropp-crew-womens-sweatshirt-build-your-brand-by131"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-softshell-with-hood/",
    name: "Barnens softshelljacka med huva B&C - JK969",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BCJK969_Azure-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "childrens-softshell-with-hood-bc-jk969"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-micro-fleece/",
    name: "Herrarnas mikrofleece Russell - R114X",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/RT114X_Navy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "mens-micro-fleece-russell-r114x"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-fleece-north/",
    name: "Damfleece North SOL's - L745",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L745_Orange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "womens-fleece-north-sols-l745"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-fleece-north/",
    name: "Barnfleece North SOL's - L742K",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L742K_Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "childrens-fleece-north-sols-l742k"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-fleece-north/",
    name: "Herrfleece North SOL's - L742",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L742_Navy-glowne-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "mens-fleece-north-sols-l742"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-fleece-jacket/",
    name: "Herrfleecejacka Malfini - 501",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/501_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "mens-fleece-jacket-malfini-501"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/fleece-jacket-hi-q/",
    name: "Fleecejacka HI-Q Malfini - 506",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/506_02_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "fleece-jacket-hi-q-malfini-506"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-fleece-jacket/",
    name: "Damfleecejacka Malfini - 504",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/504_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "womens-fleece-jacket-malfini-504"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-valueweight-t-fruit-of-the-loom/",
    name: "Barn T-shirt Valueweight T Fruit of the Loom - 61-033-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/F140K_Kelly-Green-gowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-valueweight-t-fruit-of-the-loom-61-033-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-iconic-195-t-fruit-of-the-loom/",
    name: "Herr T-shirt Ikonisk 195 T Fruit of the Loom - 61-422-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/F185_Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-iconic-195-t-fruit-of-the-loom-61-422-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-iconic-195-t-fruit-of-the-loom/",
    name: "Dam T-shirt Ikonisk 195 T Fruit of the Loom - 61-424-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/F186_Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-iconic-195-t-fruit-of-the-loom-61-424-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-iconic-195-t-fruit-of-the-loom/",
    name: "Barn T-shirt Ikonisk 195 T Fruit of the Loom - 61-363-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/F185K_Red-glowne-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-iconic-195-t-fruit-of-the-loom-61-363-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-valueweight-t-fruit-of-the-loom/",
    name: "Dam T-shirt Valueweight T Fruit of the Loom - 61-372-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/F288N_Kelly-Green-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-valueweight-t-fruit-of-the-loom-61-372-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/polyester-backpack-urban/",
    name: "Polyesterryggsäck Urban - 70600",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/LB70600_Flash-Pink-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "polyester-backpack-urban-70600"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-valueweight-t-fruit-of-the-loom/",
    name: "Herr T-shirt Valueweight T Fruit of the Loom - 61-036-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/F140_Kelly-Green-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-valueweight-t-fruit-of-the-loom-61-036-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/smart-womens-softshell/",
    name: "Smart damers softshell Russell - Z040F",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z040F_Classic-Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "smart-womens-softshell-russell-z040f"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/smart-mens-softshell/",
    name: "Smart herr softshell Russell - Z040M",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z040M_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "smart-mens-softshell-russell-z040m"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unbuttoned-hoodless-sweatshirt-for-men-adventure-malfini/",
    name: "Öppen, huvlös sweatshirt för män, Adventure Malfini - 407",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/407_02_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "unbuttoned-hoodless-sweatshirt-for-men-adventure-malfini-407"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unbuttoned-hoodless-sweatshirt-womens-viva-malfini/",
    name: "Ofodrad, huvlös sweatshirt, dam Viva Malfini - 409",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/409_02_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "unbuttoned-hoodless-sweatshirt-womens-viva-malfini-409"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unbuttoned-hooded-sweatshirt-womens-trendy-zipper-malfini/",
    name: "Oförknäppt, huvtröja, dam Trendig Dragkedja Malfini - 411",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/411_44_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "unbuttoned-hooded-sweatshirt-womens-trendy-zipper-malfini-411"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unbuttoned-hooded-sweatshirt-for-men-trendy-zipper/",
    name: "Trendig dragkedja Malfini - 410 herr luvtröja utan knappar",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/410_44_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "unbuttoned-hooded-sweatshirt-for-men-trendy-zipper-malfini-410"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-sweatshirt-kangaroo-cape-malfini/",
    name: "Damtröja, känguru, Cape Malfini - 414",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/414_16_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-sweatshirt-kangaroo-cape-malfini-414"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-sweatshirt-kangaroo-cape-malfini/",
    name: "Herrtröja, känguruficka Cape Malfini - 413",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/413_16_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-sweatshirt-kangaroo-cape-malfini-413"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-classic-sweatshirt-stanleystella-mini-changer-2-0/",
    name: "Barnens klassiska sweatshirt Stanley&Stella Mini Changer 2.0 - STSK181",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Changer-2.0-_-Kids-premium-sweatshirt-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "childrens-classic-sweatshirt-stanleystella-mini-changer-20-stsk181"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cotton-bag-gymsac/",
    name: "Bomullspåse Gymsac - W110",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/WM110_Sapphire-Blue_glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "cotton-bag-gymsac-w110"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-classic-sweatshirt-stanleystella-dazzler/",
    name: "Damklassisk sweatshirt Stanley&Stella Dazzler - STSW125",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Stella-Dazzler.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-classic-sweatshirt-stanleystella-dazzler-stsw125"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/classic-unisex-sweatshirt-stanleystella-changer-2-0/",
    name: "Klassisk unisex sweatshirt Stanley&Stella Changer 2.0 - STSU178",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Changer-2.0-_-Blank-Unisex-sweatshirt-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "classic-unisex-sweatshirt-stanleystella-changer-20-stsu178"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-unzipped-sweatshirt-stanleystella-mini-cultivator-2-0/",
    name: "Barnens uppknäppta sweatshirt Stanley&Stella Mini Cultivator 2.0 - STSK182",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Cultivator-2.0-_-Kids-zip-thru-hoodie-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "childrens-unzipped-sweatshirt-stanleystella-mini-cultivator-20-stsk182"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unisex-unzipped-sweatshirt-stanleystella-cultivator-2-0/",
    name: "Unisex dragkedjefri sweatshirt Stanley&Stella Cultivator 2.0 - STSU179",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Cultivator-2.0-_-Unisex-zip-thru-hoodie-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "unisex-unzipped-sweatshirt-stanleystella-cultivator-20-stsu179"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-softshell-jacket/",
    name: "Herr Softshelljacka Russell - Z140",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z140_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "mens-softshell-jacket-russell-z140"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unisex-kangaroo-sweatshirt-stanleystella-cruiser-2-0/",
    name: "Unisex kängurutröja Stanley&Stella Cruiser 2.0 - STSU177",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Cruiser-2.0-_-Premium-blank-Unisex-hoodie-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "unisex-kangaroo-sweatshirt-stanleystella-cruiser-20-stsu177"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-sweatshirt-stanleystella-mini-cruiser-2-0/",
    name: "Barntröja Stanley&Stella Mini Cruiser 2.0 - STSK180",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Cruiser-2.0-_-Kids-hoodie-sweatshirt-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "childrens-sweatshirt-stanleystella-mini-cruiser-20-stsk180"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-heavy-cotton-gildan/",
    name: "Barn T-shirt Tung Bomull Gildan - 5100P",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/G5100P_Light-Pink-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-heavy-cotton-gildan-5100p"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-softshell-jacket/",
    name: "Dam Softshelljacka Russell - Z140F",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z140F_Classic-Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "womens-softshell-jacket-russell-z140f"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/t-shirt-heavy-cotton-youth-gildan/",
    name: "T-shirt Tung Bomull Ungdom Gildan - 5000B",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/G5000K_Lime-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "t-shirt-heavy-cotton-youth-gildan-5000b"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-jersey-big-tank-top/",
    name: "Herrarnas Jersey Stort Linne Bygg Ditt Varumärke - BY003",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY003_Charcoal-Heather-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "mens-jersey-big-tank-top-build-your-brand-by003"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cotton-backpack-easygo-malfini/",
    name: "Bomullsryggsäck Easygo Malfini - 922",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/922_07_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "cotton-backpack-easygo-malfini-922"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-heavy-cotton-gildan/",
    name: "Dam T-shirt Tung Bomull Gildan - 5000L",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/G5000L_Daisy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-heavy-cotton-gildan-5000l"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-heavy-cotton-gildan/",
    name: "Herr T-shirt Tung Bomull Gildan - 5000",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/G5000_Lime-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-heavy-cotton-gildan-5000"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-tank-top-sporty/",
    name: "Herrlinne Sportig SOL's - L02073",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L02073_Neon-Yellow-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "mens-tank-top-sporty-sols-l02073"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-tank-top-sporty/",
    name: "Damlinne Sportig SOL's - L02117",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L02117_Neon-Yellow-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "womens-tank-top-sporty-sols-l02117"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-long-sleeve-t-shirt/",
    name: "Herr långärmad t-shirt SOL's - 02071",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L02071_White-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-long-sleeve-t-shirt-sols-02071"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-long-sleeve-t-shirt-sporty/",
    name: "Damers långärmad t-shirt Sportig SOL's - 02072",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L02072_White-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-long-sleeve-t-shirt-sporty-sols-02072"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-sporty/",
    name: "Barn T-shirt Sportig SOL's - L198K",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L198_Aqua-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-sporty-sols-l198k"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-sporty/",
    name: "Dam T-shirt Sportig SOL's - L200",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L200_Aqua-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-sporty-sols-l200"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-premium/",
    name: "Damernas pikétröja Premium Fruit of the Loom - F520",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/F520_Kelly-Green-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-premium-fruit-of-the-loom-f520"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-sports-t/",
    name: "Barn T-shirt Sports-T Stedman - ST8170",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/S8170_Crimson-Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-sports-t-stedman-st8170"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-sports-t/",
    name: "Dam T-shirt Sports-T Stedman - ST8100",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/S8100_Crimson-Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-sports-t-stedman-st8100"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-sports-t/",
    name: "Herr T-shirt Sport-T Stedman - ST8000",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/S8000_Crimson-Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-sports-t-stedman-st8000"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-sporty/",
    name: "Herr T-shirt Sportig SOL's - L198",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/L198K_Aqua-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-sporty-sols-l198"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-premium/",
    name: "Herrpolo Premium Fruit of the Loom - F511N",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/F511N_Kelly-Green-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-premium-fruit-of-the-loom-f511n"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-regular/",
    name: "Herrpolo Regular JHK - JHK510",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/JHK510_Sand-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-regular-jhk-jhk510"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-regular/",
    name: "Damernas piké Regular JHK - JHK511",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/JHK511_Sand-glwne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-regular-jhk-jhk511"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-kids-t-shirt-jhk/",
    name: "Barn T-shirt Kids´ T-Shirt JHK - TSRK150",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/JHK150K_Royal-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-kids-t-shirt-jhk-tsrk150"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-baby-t-shirt-jhk/",
    name: "Barn T-shirt Baby T-shirt JHK - TSRB150",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/JHK153K_Royal-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-baby-t-shirt-jhk-tsrb150"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-regular-jhk/",
    name: "Damt-shirt Regular JHK - TSRLCMF",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/JHK152_Royal-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-regular-jhk-tsrlcmf"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-regular-jhk/",
    name: "Herr T-shirt Regular JHK - TSRA150",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/JHK150_Royal-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-regular-jhk-tsra150"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-pure-organic/",
    name: "Herrpolo Pure Organic Russell - R-508M-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z508M_Aqua_glowe.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-pure-organic-russell-r-508m-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-premium-jhk/",
    name: "Dam t-shirt Premium JHK - TSRLPRM",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/JHK240_Kelly-Green-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-premium-jhk-tsrlprm"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-premium-jhk/",
    name: "Herr T-shirt Premium JHK - TSRA190",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/JHK190_Kelly-Green-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-premium-jhk-tsra190"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/polo-damskie-pure-organic/",
    name: "Pure Organic Russell Dam Polo - R-508F-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z508F_Aqua-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "polo-damskie-pure-organic-russell-r-508f-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-classic/",
    name: "Herrpolo Classic Russell - R-569M-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z569_Bright-Royal-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-classic-russell-r-569m-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-fitted-stretch/",
    name: "Damers pikétröja Fitted Stretch Russell - R-566F-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z566F_Classic-Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-fitted-stretch-russell-r-566f-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-fitted-stretch/",
    name: "Herrpolo Figursydd Stretch Russell - R-566M-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z566_Classic-Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-fitted-stretch-russell-r-566m-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/t-shirt-heavy-oversize-tee/",
    name: "T-shirt Tjock Oversize Tee Bygg Ditt Varumärke - BY102",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY102_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "t-shirt-heavy-oversize-tee-build-your-brand-by102"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-tanktop-byb/",
    name: "Damlinne Bygg ditt varumärke - BY019",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY019_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "womens-tanktop-build-your-brand-by019"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-sweatshirt-hooded-sweat-bc/",
    name: "Barntröja med huva B&C - WK681",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWK681_Royal-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "childrens-sweatshirt-hooded-sweat-bc-wk681"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-classic-sweatshirt-set-in-bc/",
    name: "Klassisk Barntröja Set I B&C - WK680",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWK680_Royal-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "childrens-classic-sweatshirt-set-in-bc-wk680"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-oversized-boyfriend-tee/",
    name: "Dam T-shirt Oversized Boyfriend Tee Bygg Ditt Varumärke - BY149",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/2441360-2.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-oversized-boyfriend-tee-build-your-brand-by149"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/t-shirt-oversized-sleeve-tee/",
    name: "T-shirt Oversized Ärmlös Tee Bygg Ditt Varumärke - BY256",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/2435175-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "t-shirt-oversized-sleeve-tee-build-your-brand-by256"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-unbuttoned-sweatshirt-hooded-full-zip-bc/",
    name: "Barntröja med huva och dragkedja B&C - WK682",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWK682_Royal-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "childrens-unbuttoned-sweatshirt-hooded-full-zip-bc-wk682"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-classic-sweatshirt-set-in-bc/",
    name: "Herrarnas Klassiska Sweatshirt Set I B&C - WU01W",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWU01W_Melon-Orange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-classic-sweatshirt-set-in-bc-wu01w"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-unbuttoned-hooded-sweatshirt-bc/",
    name: "Herrarnas öppna huvtröja B&C - WM646",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWM646_Navy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-unbuttoned-hooded-sweatshirt-bc-wm646"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-zip-up-hoodie-king-bc/",
    name: "Damhoodie med dragkedja King B&C - WW03Q",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWW03Q_Heather-Mid-Grey-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-zip-up-hoodie-king-bc-ww03q"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-zip-up-hoodie-king-bc/",
    name: "Herrarnas zip-up hoodie King B&C - WU03K",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWU03K_Heather-Mid-Grey-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-zip-up-hoodie-king-bc-wu03k"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-classic-sweatshirt-set-in-bc/",
    name: "Damernas Klassiska Sweatshirt Set i B&C - WW02W",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWW02W_Melon-Orange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-classic-sweatshirt-set-in-bc-ww02w"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-kangaroo-king-bc/",
    name: "Herrar känguru King B&C - WU02K",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWU02K_Heather-Grey-glowna.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kontorsartiklar",
    price: 99,
    slug: "mens-kangaroo-king-bc-wu02k"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-jacket-performance/",
    name: "Barnjacka Prestanda Malfini - 535",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/535_36_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowny.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "childrens-jacket-performance-malfini-535"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-kangaroo-king-bc/",
    name: "Dam Kangaroo King B&C - WW02Q",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWW02Q_Heather-Grey-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kontorsartiklar",
    price: 99,
    slug: "womens-kangaroo-king-bc-ww02q"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-jacket-performance/",
    name: "Damjacka Prestanda Malfini - 521",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/521_12_a_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "womens-jacket-performance-malfini-521"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-jacket-performance/",
    name: "Herrjacka Performance Malfini - 522",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/522_12_a_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 299,
    slug: "mens-jacket-performance-malfini-522"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/ladies-t-shirt-cropped-tee/",
    name: "Damtopp Kortärmad T-shirt Bygg Ditt Varumärke - BY042",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BY042_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "ladies-t-shirt-cropped-tee-build-your-brand-by042"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-sweatshirt-with-pocket-inspire-bc/",
    name: "Herrtröja med ficka Inspire B&C - WU33B",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWU33B_Sage-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-sweatshirt-with-pocket-inspire-bc-wu33b"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-sweatshirt-with-pocket-inspire-bc/",
    name: "Damtröja med ficka Inspire B&C - WW34B",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCWW34B_Sage-lowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-sweatshirt-with-pocket-inspire-bc-ww34b"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/russell-classic-sweatshirt/",
    name: "Russell klassisk sweatshirt - Z262",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z262N_Indigo-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "russell-classic-sweatshirt-z262"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-kangaroo-sweatshirt/",
    name: "Barns kängurutröja Russell - Z265K",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z265K_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "childrens-kangaroo-sweatshirt-russell-z265k"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-unzipped-sweatshirt/",
    name: "Barntröja utan dragkedja Russell - Z266K",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z266K_Bright-Royal-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "childrens-unzipped-sweatshirt-russell-z266k"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-unbuttoned-sweatshirt-russell/",
    name: "Dambyxa utan knappar Russell - Z266F",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z266F_Light-Oxford-Heather-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-unbuttoned-sweatshirt-russell-z266f"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/zippered-sweatshirt-hoodless-womens/",
    name: "Dragkedjetröja utan huva, dam Russell - z267f",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z267F_Convoy-Grey-Solid-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "zippered-sweatshirt-hoodless-womens-russell-z267f"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/russell-mens-unbuttoned-sweatshirt/",
    name: "Russell herrar oförknäppt sweatshirt - Z266",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z266_Light-Oxford-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "russell-mens-unbuttoned-sweatshirt-z266"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/zip-up-sweatshirt-hoodless-mens/",
    name: "Dragkedjetröja utan huva, herr Russell - Z267",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z267M_French-Navy-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "zip-up-sweatshirt-hoodless-mens-russell-z267"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-kangaroo-hoodie-russell/",
    name: "Herrkängurutröja Russell - Z265",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z265_Black-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "mens-kangaroo-hoodie-russell-z265"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-kangaroo-sweatshirt-russell/",
    name: "Damsweatshirt med känguruficka Russell - Z265F",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/Z265F_Black-gllowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 199,
    slug: "womens-kangaroo-sweatshirt-russell-z265f"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-round-neck-t-shirt/",
    name: "Herr Rundhals T-shirt Bygg Ditt Varumärke - BY004",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BY004_Burgundy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-round-neck-t-shirt-build-your-brand-by004"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-polo-stanleystella-mini-sprinter/",
    name: "Barnpolo Stanley&Stella Mini Sprinter - STPK908",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Mini-Sprinter.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-polo-stanleystella-mini-sprinter-stpk908"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-luxury/",
    name: "Damers polo Lyx Tee Jays - TJ145",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/TJ145_Light-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-luxury-tee-jays-tj145"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-luxury/",
    name: "Herrpolo Luxury Tee Jays - TJ1405",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/TJ1405_Light-Blue-glowna.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-luxury-tee-jays-tj1405"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unisex-polo-stanleystella-prepster/",
    name: "Unisex pikétröja Stanley&Stella Prepster - STPU331",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Prepster-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "unisex-polo-stanleystella-prepster-stpu331"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-stanleystella-elliser/",
    name: "Damernas piké Stanley&Stella Elliser - STPW333",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/glowne-Stella-Elliser.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-stanleystella-elliser-stpw333"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-my-polo/",
    name: "Herrskjorta My Polo B&C - PU426",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BCPW463_Nude-2.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-shirt-my-polo-bc-pu426"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-my-polo/",
    name: "Damers pikétröja My Polo B&C - PW463",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/BCPW463_Nude-2.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-my-polo-bc-pw463"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/polo-unisex-victory/",
    name: "Unisex-pikétröja Victory Malfini - 217",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/217_00_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_10-glowne-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "polo-unisex-victory-malfini-217"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/t-shirt-women-extended-shoulder-tee/",
    name: "T-shirt dam Utökad Axel T-shirt Bygg Ditt Varumärke - BY021",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BY021_Ocean-Blue_glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "t-shirt-women-extended-shoulder-tee-build-your-brand-by021"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-polo-pique/",
    name: "Barnpolo Pique Malfini - 222",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/222_01_a_xl_glowne-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-polo-pique-malfini-222"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-cotton/",
    name: "Damernas piké i bomull Malfini - 213",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/213_12_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-cotton-malfini-213"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-cotton/",
    name: "Herrpolo Bomull Malfini - 212",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/212_12_a_xl_preview_maxWidth_540_maxHeight_540_quality_100-glowne-1620x1620.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-cotton-malfini-212"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-pique/",
    name: "Damernas pikétröja Pique Malfini - 210",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/210_01_a_xl.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-pique-malfini-210"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-pique/",
    name: "Herrpolo Pique Malfini - 203",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/203_01_a_xl-glowne-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-pique-malfini-203"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-polo-single-j/",
    name: "Herrpolo Single J. Malfini - 202",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/202_05_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-polo-single-j-malfini-202"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-polo-single-j/",
    name: "Damernas pikétröja Single J. Malfini - 223",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/223_05_a_xl-glowne-2-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-polo-single-j-malfini-223"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-tank-top-valueweight-vest-fruit-of-the-loom/",
    name: "Damlinne Valueweight Linne Fruit of the Loom - 61-376-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/F262_Heather-Grey-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "womens-tank-top-valueweight-vest-fruit-of-the-loom-61-376-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-shaped-long-tee/",
    name: "Herr T-shirt Formad Lång T-shirt Bygg Ditt Varumärke - BY028",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BY028_Olive_glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-shaped-long-tee-build-your-brand-by028"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-fantasy/",
    name: "Barn T-shirt Fantasy Malfini - 147",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/147_91_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100_glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-fantasy-malfini-147"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-tank-top-valueweight-vest-fruit-of-the/",
    name: "Herrlinne Valueweight Väst Fruit of the - 61-098-0",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/F260_Heather-Grey-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "mens-tank-top-valueweight-vest-fruit-of-the-61-098-0"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-fantasy/",
    name: "Herr T-shirt Fantasy Malfini - 124",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/124_91_A.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-fantasy-malfini-124"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-fantasy/",
    name: "Dam T-shirt Fantasy Malfini - 140",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/140_91_a_xl-1.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-fantasy-malfini-140"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-tank-top-justin-sols/",
    name: "Herrlinne Justin SOL's - 11465",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L171_Grey-Melange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "mens-tank-top-justin-sols-11465"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-tank-top-inspire-bc/",
    name: "Damlinne Inspire B&C - TW073",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW073_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "womens-tank-top-inspire-bc-tw073"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-tank-top-inspire-bc/",
    name: "Herrlinne Inspire B&C - TM072",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTM072_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "mens-tank-top-inspire-bc-tm072"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-long-sleeve-imperial-sols/",
    name: "Herr Långärmad Imperial SOL's - 02074",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L02074_Royal-Blue-241-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "mens-long-sleeve-imperial-sols-02074"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-long-sleeve-bc/",
    name: "Dam T-shirt Långärmad B&C - TW08T",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW08T_Navy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-long-sleeve-bc-tw08t"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-long-sleeve-bc/",
    name: "Herr T-shirt Långärmad B&C - TU07T",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTU07T_Navy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-long-sleeve-bc-tu07t"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-tank-top-justin-sols/",
    name: "Damlinne Justin SOL's - 01826",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L01826_Grey-Melange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "womens-tank-top-justin-sols-01826"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-long-sleeve-imperial-sols/",
    name: "Damers Långärmad Imperial SOL’s - 02075",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L02075_Royal-Blue-241-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "womens-long-sleeve-imperial-sols-02075"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/infant-t-shirt-baby-t-babybugz/",
    name: "Spädbarn t-shirt Baby T BABYBUGZ - BZ02",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BZ02_Dusty-Blue-glowny.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "infant-t-shirt-baby-t-babybugz-bz02"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/long-sleeve-bodysuit-babybugz/",
    name: "Långärmad Body Babybugz - BZ30",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BZ30_Dusty-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "long-sleeve-bodysuit-babybugz-bz30"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/bodysuits-baby-bodysuit-babybugz/",
    name: "Bodysuits Baby Bodysuit Babybugz - BZ10",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BZ10_Dusty-Blue-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 99,
    slug: "bodysuits-baby-bodysuit-babybugz-bz10"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-stanleystella-crafter/",
    name: "Herr T-shirt Stanley&Stella Crafter - STTU170",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Crafter-_-Premium-blank-unisex-t-shirt-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-stanleystella-crafter-sttu170"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-stanleystella-stella-serena/",
    name: "Dam T-shirt Stanley&Stella - Stella Serena - STTW173",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Stella-Serena-_-Womens-scoop-neck-t-shirt-_-Stanley_Stella.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-stanleystella-stella-serena-sttw173"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/koszulka-dziecieca-stanleystella-mini-creator-2-0/",
    name: "Barntröja Stanley&Stella Mini Creator 2.0 - STTK184",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Mini-Creator-2.0-_-Blank-kids-t-shirt-_-Stanley_Stellac145.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kontorsartiklar",
    price: 99,
    slug: "koszulka-dziecica-stanleystella-mini-creator-20-sttk184"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/t-shirt-oversize-stanleystella-blaster/",
    name: "Oversize T-shirt Stanley&Stella Blaster - STTU815",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Blaster-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "t-shirt-oversize-stanleystella-blaster-sttu815"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-stanleystella-ella/",
    name: "Dam T-shirt Stanley&Stella - Ella - STTW174",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Stella-Ella-_-Blank-womens-fitted-t-shirts-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-stanleystella-ella-sttw174"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/t-shirt-unisex-stanleystella-creator-2-0/",
    name: "T-shirt unisex Stanley&Stella Creator 2.0 - STTU169",
    image: "https://printexpress.pl/wp-content/uploads/2024/07/Creator-2.0-_-Premium-blank-unisex-t-shirt-_-Stanley_Stella-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "t-shirt-unisex-stanleystella-creator-20-sttu169"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-interlock-tee-jays/",
    name: "Herr T-shirt Interlock Tee Jays - 520",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/TJ520_Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-interlock-tee-jays-520"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-interlock-tee-jays/",
    name: "Dam T-shirt Interlock Tee Jays - 580",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/TJ580N_Red-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-interlock-tee-jays-580"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-luxury-tee-jays/",
    name: "Herr T-shirt Lyx Tee Jays - TJ5000",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/TJ5000_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-luxury-tee-jays-tj5000"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-regent-sols/",
    name: "Barn T-shirt Regent SOL's - 11970",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L150K_Orange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-regent-sols-11970"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unisex-t-shirt-sublima-sols/",
    name: "Unisex T-shirt Sublima SOL's - 11775",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L165_White-glowne-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "unisex-t-shirt-sublima-sols-11775"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-imperial-v-neck-sols/",
    name: "Herr T-shirt Imperial v-ringning SOL's - 02940",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L02940_Grey-Melange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-imperial-v-neck-sols-02940"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-imperial-v-neck-sols/",
    name: "Dam T-shirt Imperial v-ringning SOL's - 02941",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L02941_Grey-Melange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-imperial-v-neck-sols-02941"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-regent-sols/",
    name: "Herr T-shirt Regent SOL's - 11380",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L150_Orange-glowne-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-regent-sols-11380"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-regent-sols/",
    name: "Dam T-shirt Regent SOL's - 01825",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L01825_Orange-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-regent-sols-01825"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-imperial-sols/",
    name: "Herr T-shirt Imperial SOL’s - 11500",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L190_French-Navy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-imperial-sols-11500"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-imperial-sols/",
    name: "Barn T-shirt Imperial SOL's - 11770",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L190K_French-Navy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-imperial-sols-11770"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-fit-regent-sols/",
    name: "Herr T-shirt FIT Regent SOL’s - 00553",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L149_Heather-Khaki-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-fit-regent-sols-00553"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-fit-imperial-sols/",
    name: "Herr T-shirt FIT Imperial SOL's - 00580",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L189_Dark-Grey-Solid-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-fit-imperial-sols-00580"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-v-neck-inspire-organic-bc/",
    name: "Herr T-shirt v-ringad Inspire ekologisk B&C - TM044",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTM044_Khaki-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-v-neck-inspire-organic-bc-tm044"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-imperial-sols/",
    name: "Dam T-shirt Imperial SOL’s - 11502",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/L191_French-Navy-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-imperial-sols-11502"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-inspire-e150-organic-bc/",
    name: "Dam T-shirt Inspire E150 ekologisk B&C - TW02B",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW02B_Sage-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-inspire-e150-organic-bc-tw02b"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-inspire-e150-organic-bc/",
    name: "Herr T-shirt Inspire E150 ekologisk B&C - TU01B",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTU01B_Sage-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-inspire-e150-organic-bc-tu01b"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-v-neck-inspire-organic-bc/",
    name: "Dam T-shirt v-ringad Inspire ekologisk B&C - TW045",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW045_Khaki-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-v-neck-inspire-organic-bc-tw045"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-exact-190-bc/",
    name: "Barn T-shirt Exact 190 B&C - TK301",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTK301_Black-glowne-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-exact-190-bc-tk301"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-exact-150-bc/",
    name: "Herr T-shirt Exact 150 B&C - TU01T",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTU01T_Azure-glowne-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-exact-150-bc-tu01t"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-exact-150-bc/",
    name: "Barn T-shirt Exact 150 B&C - BCTK300",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTK300_Azure-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-exact-150-bc-bctk300"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-exact-190-bc/",
    name: "Dam T-shirt Exact 190 B&C - TW04T",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW04T_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-exact-190-bc-tw04t"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-exact-190-bc/",
    name: "Herr T-shirt Exact 190 B&C - TU03T",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTU03T_Black-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-exact-190-bc-tu03t"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-exact-150-bc/",
    name: "Dam T-shirt Exact 150 B&C - TW02T",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/BCTW02T_Azure-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-exact-150-bc-tw02t"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/childrens-t-shirt-basic-malfini/",
    name: "Barn t-shirt Basic Malfini - 138",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/138_64_a_xl-glowne-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "childrens-t-shirt-basic-malfini-138"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-v-neck-dream-malfini/",
    name: "Dam T-shirt V-ringad Dream Malfini - 128",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/128_07_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-v-neck-dream-malfini-128"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-v-neck-malfini/",
    name: "Herr T-shirt V-ringad Malfini - 102",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/102_07_a_xl_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-1.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-v-neck-malfini-102"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-basic-malfini/",
    name: "Dam T-shirt Basic Malfini - 134",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/134_64_A-glowne-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-basic-malfini-134"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-basic-malfini/",
    name: "Herr T-shirt Basic Malfini - 129",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/Malfini_Basic_glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-basic-malfini-129"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-viper-malfini/",
    name: "Dam T-shirt Viper Malfini - 161",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/161_16_A_xl-glowne-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-viper-malfini-161"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-pure-malfini/",
    name: "Dam T-shirt Pure Malfini - 122",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/122_30_A-glowne-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "womens-t-shirt-pure-malfini-122"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unisex-t-shirt-heavy-malfini/",
    name: "Unisex T-shirt Heavy Malfini - 110",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/110_03_a_xl-glowne-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "unisex-t-shirt-heavy-malfini-110"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-viper-malfini/",
    name: "Herr T-shirt Viper Malfini - 143",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/143_16_A-glowne-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "mens-t-shirt-viper-malfini-143"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/unisex-t-shirt-heavy-new-malfini/",
    name: "Unisex T-shirt Heavy New Malfini - 137",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/137_01_a_xl-1-1620x1620.png",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Kläder",
    price: 129,
    slug: "unisex-t-shirt-heavy-new-malfini-137"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cotton-bag-with-sides-carry-malfini/",
    name: "Bomullsväska med sidor Carry Malfini - 901",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/901_10_c_xl_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "cotton-bag-with-sides-carry-malfini-901"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cotton-bag-sg/",
    name: "Bomullsväska SG - 601.57",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/601_57_201_F-2022_01-glowne-1620x1620.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "cotton-bag-sg-60157"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cotton-bag/",
    name: "Bomullsväska - XT004",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/torba-bawelniana-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "cotton-bag-xt004"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/cotton-shopping-bag/",
    name: "Bomullsshoppingväska - XT003",
    image: "https://printexpress.pl/wp-content/uploads/2024/04/torba-bawelniana-kolor-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "cotton-shopping-bag-xt003"
  },
  {
    pageUrl: "https://printexpress.pl/en/product/thick-cotton-bag-shopper-malfini/",
    name: "Tjock bomullsväska Shopper Malfini - 921",
    image: "https://printexpress.pl/wp-content/uploads/2024/06/921_01_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    features: ["Högkvalitativ material","Professionell finish","Perfekt för tryck","Snabb leverans","Bulkrabatter tillgängliga"],
    category: "Accessoarer",
    price: 149,
    slug: "thick-cotton-bag-shopper-malfini-921"
  },
];

// Convert to BulkProduct format
export const bulkProducts: BulkProduct[] = csvProducts.map((product) => {
  return {
    id: product.slug,
    name: product.name,
    description: "Högkvalitativ " + product.name.toLowerCase() + " perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    shortDescription: "Högkvalitativ " + product.name.toLowerCase() + " perfekt för tryck och broderi.",
    price: {
      base: product.price,
      currency: "SEK"
    },
    images: {
      main: product.image,
      gallery: [
        product.image,
        product.image
      ]
    },
    category: product.category,
    features: product.features,
    sizes: product.category === 'Kläder' ? ["S", "M", "L", "XL", "XXL"] : ["One size"],
    colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
    material: "Högkvalitativ material",
    printArea: "Anpassningsbar tryckyta",
    keywords: [product.name.toLowerCase(), "bulkprodukt", "tryck eget", product.category.toLowerCase()],
    seoTitle: product.name + " - Bulkprodukt för tryck eget | Tryckeget",
    seoDescription: "Högkvalitativ " + product.name.toLowerCase() + " perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    minOrder: product.category === 'Kläder' ? 25 : 30,
    leadTime: product.category === 'Kläder' ? "5-7 dagar" : "7-10 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar",
    pageUrl: product.pageUrl,
    specifications: product.features.slice(0, 6)
  };
});

const fs = require('fs');
const path = require('path');

// Translation mapping for common English to Swedish terms
const translations = {
  "Men's": "Herr",
  "Women's": "Dam",
  "Children's": "Barn",
  "Unisex": "Unisex",
  "T-shirt": "T-shirt",
  "Tank Top": "Tank Top",
  "Polo": "Polo",
  "Sweatshirt": "Sweatshirt",
  "Hoody": "Hoody",
  "Hoodie": "Hoodie",
  "Jacket": "Jacka",
  "Fleece": "Fleece",
  "Softshell": "Softshell",
  "Cap": "Keps",
  "Winter cap": "Vintermössa",
  "Winter beanie": "Vintermössa",
  "Mesh cap": "Nätkeps",
  "Snapback": "Snapback",
  "Trucker": "Trucker",
  "Rapper": "Rapper",
  "Panel": "Panel",
  "Ultimate": "Ultimate",
  "Original": "Original",
  "Classic": "Klassisk",
  "Heavy": "Tung",
  "Light": "Lätt",
  "Crew": "Crew",
  "Zip": "Dragkedja",
  "Hooded": "Med huva",
  "Hoodless": "Utan huva",
  "Unbuttoned": "Oknäppt",
  "Kangaroo": "Kangaroo",
  "Cape": "Cape",
  "Zipper": "Dragkedja",
  "Trendy": "Trendig",
  "Adventure": "Äventyr",
  "Viva": "Viva",
  "Build Your Brand": "Bygg Ditt Varumärke",
  "Cotton": "Bomull",
  "Polyester": "Polyester",
  "Bag": "Påse",
  "Backpack": "Ryggsäck",
  "Gymsac": "Gymsac",
  "Shopping bag": "Handleväska",
  "Shopper": "Shopper",
  "Carry": "Bär",
  "Thick": "Tjock",
  "with sides": "med sidor",
  "Long sleeve": "Långärmad",
  "Short sleeve": "Kortärmad",
  "V-neck": "V-ringning",
  "Round neck": "Rund hals",
  "Oversize": "Oversize",
  "Oversized": "Oversized",
  "Cropped": "Klippt",
  "Fitted": "Sittande",
  "Stretch": "Stretch",
  "Luxury": "Lyx",
  "Premium": "Premium",
  "Regular": "Regular",
  "Basic": "Basic",
  "Pure": "Ren",
  "Organic": "Ekologisk",
  "Imperial": "Imperial",
  "Regent": "Regent",
  "Sublima": "Sublima",
  "Sporty": "Sportig",
  "Sports-T": "Sports-T",
  "Valueweight": "Viktvärde",
  "Heavyweight": "Tungvikt",
  "Interlock": "Interlock",
  "Jersey": "Jersey",
  "Pique": "Pique",
  "Single": "Enkel",
  "Double": "Dubbel",
  "Fantasy": "Fantasy",
  "Dream": "Dröm",
  "Viper": "Viper",
  "Exact": "Exakt",
  "Inspire": "Inspirera",
  "Justin": "Justin",
  "North SOL's": "North SOL's",
  "Fruit of the Loom": "Fruit of the Loom",
  "Gildan": "Gildan",
  "Russell": "Russell",
  "B&C": "B&C",
  "Malfini": "Malfini",
  "Stanley&Stella": "Stanley&Stella",
  "JHK": "JHK",
  "Jays": "Jays",
  "Stedman": "Stedman",
  "BABYBUGZ": "BABYBUGZ",
  "Babybugz": "Babybugz",
  "Bodysuit": "Bodysuit",
  "Bodysuits": "Bodysuits",
  "Baby": "Baby",
  "Infant": "Spädbarn",
  "Youth": "Ungdom",
  "Kids": "Barn",
  "Mini": "Mini",
  "Changer": "Changer",
  "Cultivator": "Cultivator",
  "Cruiser": "Cruiser",
  "Dazzler": "Dazzler",
  "Creator": "Creator",
  "Crafter": "Crafter",
  "Blaster": "Blaster",
  "Ella": "Ella",
  "Serena": "Serena",
  "Prepster": "Prepster",
  "Elliser": "Elliser",
  "Sprinter": "Sprinter",
  "My Polo": "Min Polo",
  "Victory": "Seger",
  "Extended Shoulder": "Förlängd axel",
  "Shaped Long": "Formad lång",
  "Boyfriend": "Pojkvän",
  "Sleeve": "Ärm",
  "Tee": "Tee",
  "Vest": "Väst",
  "Performance": "Prestanda",
  "King": "Kung",
  "Pocket": "Ficka",
  "Full Zip": "Full dragkedja",
  "Set In": "Satt in",
  "Hooded Full Zip": "Med huva full dragkedja",
  "Kangaroo King": "Kangaroo Kung",
  "Zip-up": "Dragkedja upp",
  "Hoodless": "Utan huva",
  "Round Neck": "Rund hals",
  "Luxury Tee": "Lyx Tee",
  "Interlock Tee": "Interlock Tee",
  "Heavy Cotton": "Tung bomull",
  "Heavyweight Cotton": "Tungvikt bomull",
  "Valueweight Vest": "Viktvärde väst",
  "Shaped Long Tee": "Formad lång Tee",
  "Fantasy": "Fantasy",
  "Dream": "Dröm",
  "Viper": "Viper",
  "Pure": "Ren",
  "Heavy New": "Tung Ny",
  "with sides": "med sidor",
  "SG": "SG",
  "XT": "XT",
  "Urban": "Urban",
  "Easygo": "Easygo",
  "Carry": "Bär",
  "Shopper": "Shopper"
};

function translateProductName(englishName) {
  let swedishName = englishName;
  
  // Apply translations in order of specificity (longer phrases first)
  const sortedTranslations = Object.entries(translations)
    .sort((a, b) => b[0].length - a[0].length);
  
  for (const [english, swedish] of sortedTranslations) {
    const regex = new RegExp(english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    swedishName = swedishName.replace(regex, swedish);
  }
  
  return swedishName;
}

function updateProductPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the product name from the file
    const nameMatch = content.match(/name:\s*"([^"]+)"/);
    if (!nameMatch) return false;
    
    const englishName = nameMatch[1];
    const swedishName = translateProductName(englishName);
    
    if (englishName === swedishName) return false; // No translation needed
    
    console.log(`Updating: "${englishName}" → "${swedishName}"`);
    
    // Replace all occurrences of the English name with Swedish
    let updatedContent = content;
    
    // Replace in metadata
    updatedContent = updatedContent.replace(
      new RegExp(englishName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      swedishName
    );
    
    // Also replace in lowercase for descriptions
    const englishLower = englishName.toLowerCase();
    const swedishLower = swedishName.toLowerCase();
    updatedContent = updatedContent.replace(
      new RegExp(englishLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      swedishLower
    );
    
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
}

function updateAllProductPages() {
  const productsDir = path.join(__dirname, 'src', 'app', 'produkter');
  
  if (!fs.existsSync(productsDir)) {
    console.log('Products directory not found');
    return;
  }
  
  const productDirs = fs.readdirSync(productsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`Found ${productDirs.length} product directories`);
  
  let updatedCount = 0;
  
  for (const productDir of productDirs) {
    const pagePath = path.join(productsDir, productDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      if (updateProductPage(pagePath)) {
        updatedCount++;
      }
    }
  }
  
  console.log(`\n✅ Updated ${updatedCount} product pages`);
}

// Run the update
updateAllProductPages();

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of Swedish cities to generate pages for
const cities = [
  { slug: 'uppsala', name: 'Uppsala', area: 'Uppsalaområdet' },
  { slug: 'linkoping', name: 'Linköping', area: 'Linköpingsområdet' },
  { slug: 'orebro', name: 'Örebro', area: 'Örebroområdet' },
  { slug: 'vasteras', name: 'Västerås', area: 'Västeråsområdet' },
  { slug: 'helsingborg', name: 'Helsingborg', area: 'Helsingborgsområdet' },
  { slug: 'jönköping', name: 'Jönköping', area: 'Jönköpingsområdet' },
  { slug: 'norrköping', name: 'Norrköping', area: 'Norrköpingsområdet' },
  { slug: 'lund', name: 'Lund', area: 'Lundområdet' },
  { slug: 'umea', name: 'Umeå', area: 'Umeåområdet' },
  { slug: 'gavle', name: 'Gävle', area: 'Gävleområdet' },
  { slug: 'boras', name: 'Borås', area: 'Boråsområdet' },
  { slug: 'sodertalje', name: 'Södertälje', area: 'Södertäljeområdet' },
  { slug: 'eskilstuna', name: 'Eskilstuna', area: 'Eskilstunaområdet' },
  { slug: 'halmstad', name: 'Halmstad', area: 'Halmstadsområdet' },
  { slug: 'vaxjo', name: 'Växjö', area: 'Växjöområdet' },
  { slug: 'karlstad', name: 'Karlstad', area: 'Karlstadsområdet' },
  { slug: 'sundsvall', name: 'Sundsvall', area: 'Sundsvallområdet' },
  { slug: 'orebro', name: 'Örebro', area: 'Örebroområdet' },
  { slug: 'trollhattan', name: 'Trollhättan', area: 'Trollhättanområdet' },
  { slug: 'lulea', name: 'Luleå', area: 'Luleåområdet' }
];

// Read the current cityData from the page
const pagePath = path.join(__dirname, '../src/app/[slug]/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Extract current cityData
const cityDataMatch = pageContent.match(/const cityData = \{([\s\S]*?)\};/);
if (!cityDataMatch) {
  console.error('Could not find cityData in page.tsx');
  process.exit(1);
}

// Generate new cityData with all cities
let newCityData = 'const cityData = {\n';
cities.forEach((city, index) => {
  newCityData += `  '${city.slug}': {\n`;
  newCityData += `    name: '${city.name}',\n`;
  newCityData += `    title: 'Tryck eget i ${city.name} - T-shirt med eget tryck | Tryckeget',\n`;
  newCityData += `    description: 'Beställ tryckta kläder i ${city.name}! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',\n`;
  newCityData += `    keywords: 'tryck eget ${city.name.toLowerCase()}, t-shirt med eget tryck ${city.name.toLowerCase()}, tryck på kläder ${city.name.toLowerCase()}, anpassade kläder ${city.name.toLowerCase()}, print on demand ${city.name.toLowerCase()}',\n`;
  newCityData += `    deliveryTime: '5-7 dagar',\n`;
  newCityData += `    area: '${city.area}'\n`;
  newCityData += `  }${index < cities.length - 1 ? ',' : ''}\n`;
});
newCityData += '};';

// Replace cityData in the page
const updatedPageContent = pageContent.replace(
  /const cityData = \{[\s\S]*?\};/,
  newCityData
);

// Write the updated page
fs.writeFileSync(pagePath, updatedPageContent);

console.log(`✅ Generated ${cities.length} city landing pages:`);
cities.forEach(city => {
  console.log(`   - /${city.slug} (${city.name})`);
});

console.log('\n📝 Next steps:');
console.log('1. Update sitemap.ts to include all new cities');
console.log('2. Test the pages: npm run dev');
console.log('3. Deploy to production for SEO benefits');

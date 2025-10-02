const fs = require('fs');
const path = require('path');

// Get all city pages
function getAllCityPages() {
  const appDir = path.join(__dirname, '..', 'src', 'app');
  const cityPages = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Check if it's a city page (has page.tsx and is not a special directory)
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath) && !item.startsWith('[') && !item.includes('.')) {
          cityPages.push(item);
        }
        // Recursively scan subdirectories
        scanDirectory(fullPath);
      }
    }
  }
  
  scanDirectory(appDir);
  return cityPages;
}

// Define city relationships for smaller cities
const cityRelationships = {
  // Stockholm area cities
  'alvik': ['stockholm', 'bromma', 'solna', 'sundbyberg', 'vasastan', 'ostermalm'],
  'taby': ['stockholm', 'sollentuna', 'danderyd', 'vallentuna', 'sollentuna', 'jarla'],
  'nacka': ['stockholm', 'saltsjobaden', 'varmdo', 'tyreso', 'huddinge', 'haninge'],
  'vallentuna': ['stockholm', 'taby', 'sollentuna', 'danderyd', 'jarla', 'sollentuna'],
  'huddinge': ['stockholm', 'nacka', 'tyreso', 'huddinge', 'haninge', 'saltsjobaden'],
  'jarla': ['stockholm', 'taby', 'vallentuna', 'sollentuna', 'danderyd', 'sollentuna'],
  'sodertalje': ['stockholm', 'nynashamn', 'trosa', 'oxelosund', 'gnesta', 'strangnas'],
  'nynashamn': ['sodertalje', 'trosa', 'oxelosund', 'gnesta', 'strangnas', 'stockholm'],
  'trosa': ['sodertalje', 'nynashamn', 'oxelosund', 'gnesta', 'strangnas', 'stockholm'],
  'oxelosund': ['sodertalje', 'nynashamn', 'trosa', 'gnesta', 'strangnas', 'stockholm'],
  'gnesta': ['sodertalje', 'nynashamn', 'trosa', 'oxelosund', 'strangnas', 'stockholm'],
  'strangnas': ['sodertalje', 'nynashamn', 'trosa', 'oxelosund', 'gnesta', 'eskilstuna'],
  
  // Gothenburg area cities
  'molndal': ['goteborg', 'partille', 'kungsbacka', 'alingsas', 'lerum', 'kallered'],
  'partille': ['goteborg', 'molndal', 'kungsbacka', 'alingsas', 'lerum', 'kallered'],
  'kungsbacka': ['goteborg', 'molndal', 'partille', 'alingsas', 'lerum', 'kallered'],
  'alingsas': ['goteborg', 'molndal', 'partille', 'kungsbacka', 'lerum', 'kallered'],
  'lerum': ['goteborg', 'molndal', 'partille', 'kungsbacka', 'alingsas', 'kallered'],
  'kallered': ['goteborg', 'molndal', 'partille', 'kungsbacka', 'alingsas', 'lerum'],
  'uddevalla': ['trollhattan', 'vanersborg', 'alingsas', 'ale', 'lerum', 'boras'],
  'vanersborg': ['trollhattan', 'uddevalla', 'alingsas', 'ale', 'lerum', 'boras'],
  'ale': ['trollhattan', 'uddevalla', 'vanersborg', 'alingsas', 'lerum', 'boras'],
  
  // Malmö area cities
  'lund': ['malmo', 'helsingborg', 'landskrona', 'trelleborg', 'ystad', 'hassleholm'],
  'helsingborg': ['malmo', 'lund', 'landskrona', 'trelleborg', 'ystad', 'hassleholm'],
  'landskrona': ['malmo', 'lund', 'helsingborg', 'trelleborg', 'ystad', 'hassleholm'],
  'trelleborg': ['malmo', 'lund', 'helsingborg', 'landskrona', 'ystad', 'hassleholm'],
  'ystad': ['malmo', 'lund', 'helsingborg', 'landskrona', 'trelleborg', 'hassleholm'],
  'hassleholm': ['malmo', 'lund', 'helsingborg', 'landskrona', 'trelleborg', 'ystad'],
  'malmo-solhem': ['malmo', 'lund', 'helsingborg', 'landskrona', 'trelleborg', 'ystad'],
  'almlunda': ['malmo', 'lund', 'helsingborg', 'landskrona', 'trelleborg', 'ystad'],
  'vastra-frolunda': ['goteborg', 'molndal', 'partille', 'kungsbacka', 'alingsas', 'lerum'],
  
  // Other major cities
  'uppsala': ['enköping', 'knivsta', 'heby', 'tierp', 'älvkarleby', 'håbo'],
  'linkoping': ['norrkoping', 'motala', 'vadstena', 'mjolby', 'atvidaberg', 'kinda'],
  'norrkoping': ['linkoping', 'soderkoping', 'valdemarsvik', 'finspang', 'kisa', 'kindaberg'],
  'vasteras': ['koping', 'arboga', 'sala', 'heby', 'skinnskatteberg', 'fagersta'],
  'orebro': ['karlskoga', 'kumla', 'lindesberg', 'hallsberg', 'degerfors', 'hallefors'],
  'jonkoping': ['varnamo', 'tranas', 'nassjo', 'vaggeryd', 'habo', 'gislaved'],
  'umea': ['skelleftea', 'lycksele', 'robertsfors', 'nordmaling', 'vindeln', 'vannas'],
  'gavle': ['sandviken', 'hofors', 'ovansker', 'tierp', 'heby', 'sala'],
  'boras': ['ulricehamn', 'tranemo', 'svenljunga', 'alingsas', 'herrljunga', 'mark'],
  'eskilstuna': ['vasteras', 'strangnas', 'koping', 'arboga', 'malarhojden', 'torshalla'],
  'halmstad': ['varberg', 'falkenberg', 'laholm', 'hylte', 'hyltebruk', 'getinge'],
  'vaxjo': ['alvesta', 'lessebo', 'uppvidinge', 'tingsryd', 'alvesta', 'markaryd'],
  'karlstad': ['kristinehamn', 'filipstad', 'storfors', 'hammaro', 'munkfors', 'forshaga'],
  'sundsvall': ['harnosand', 'kramfors', 'solleftea', 'ragunda', 'bräcke', 'krokom'],
  'trollhattan': ['vanersborg', 'alingsas', 'ale', 'lerum', 'boras', 'ulricehamn'],
  'lulea': ['pitea', 'boden', 'kalix', 'overkalix', 'haparanda', 'ortviken']
};

// Function to add related cities section to a city page
function addRelatedCitiesToPage(citySlug, relatedCities) {
  const pagePath = path.join(__dirname, '..', 'src', 'app', `${citySlug}`, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`Page not found: ${pagePath}`);
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Check if related cities section already exists
  if (content.includes('Vi levererar också till andra städer')) {
    console.log(`Related cities section already exists in ${citySlug}`);
    return;
  }

  // Create the related cities section
  const relatedCitiesSection = `
      {/* Related Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vi levererar också till andra städer i regionen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
${relatedCities.map(city => `            <Link href="/${city}" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">${city.charAt(0).toUpperCase() + city.slice(1)}</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>`).join('\n')}
          </div>
          <div className="text-center mt-8">
            <Link href="/har-finns-vi" className="text-orange-500 hover:text-orange-600 font-medium">
              Se alla städer vi levererar till →
            </Link>
          </div>
        </div>
      </section>

      <Footer />`;

  // Replace the Footer with the new section + Footer
  content = content.replace(/      <Footer \/>/g, relatedCitiesSection);
  
  fs.writeFileSync(pagePath, content);
  console.log(`Added related cities section to ${citySlug}`);
}

// Get all city pages
const allCityPages = getAllCityPages();
console.log(`Found ${allCityPages.length} city pages:`);
allCityPages.forEach(city => console.log(`- ${city}`));

// Process all cities
allCityPages.forEach(citySlug => {
  const relatedCities = cityRelationships[citySlug] || [
    'stockholm', 'goteborg', 'malmo', 'uppsala', 'linkoping', 'orebro'
  ];
  addRelatedCitiesToPage(citySlug, relatedCities);
});

console.log('All city linking script completed!');

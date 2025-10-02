const fs = require('fs');
const path = require('path');

// Define city relationships
const cityRelationships = {
  'stockholm': ['taby', 'sodertalje', 'nacka', 'vallentuna', 'huddinge', 'jarla'],
  'goteborg': ['molndal', 'partille', 'lerum', 'kungsbacka', 'alingsas', 'uddevalla'],
  'malmo': ['lund', 'helsingborg', 'landskrona', 'trelleborg', 'ystad', 'hassleholm'],
  'uppsala': ['enköping', 'knivsta', 'heby', 'tierp', 'älvkarleby', 'håbo'],
  'linkoping': ['norrkoping', 'motala', 'vadstena', 'mjolby', 'atvidaberg', 'kinda'],
  'vasteras': ['koping', 'arboga', 'sala', 'heby', 'skinnskatteberg', 'fagersta'],
  'orebro': ['karlskoga', 'kumla', 'lindesberg', 'hallsberg', 'degerfors', 'hallefors'],
  'helsingborg': ['malmo', 'lund', 'landskrona', 'trelleborg', 'ystad', 'hassleholm'],
  'jonkoping': ['varnamo', 'tranas', 'nassjo', 'vaggeryd', 'habo', 'gislaved'],
  'norrkoping': ['linkoping', 'soderkoping', 'valdemarsvik', 'finspang', 'kisa', 'kindaberg'],
  'lund': ['malmo', 'helsingborg', 'landskrona', 'trelleborg', 'ystad', 'hassleholm'],
  'umea': ['skelleftea', 'lycksele', 'robertsfors', 'nordmaling', 'vindeln', 'vannas'],
  'gavle': ['sandviken', 'hofors', 'ovansker', 'tierp', 'heby', 'sala'],
  'boras': ['ulricehamn', 'tranemo', 'svenljunga', 'alingsas', 'herrljunga', 'mark'],
  'sodertalje': ['stockholm', 'nynashamn', 'trosa', 'oxelosund', 'gnesta', 'strangnas'],
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

// Process all cities
Object.entries(cityRelationships).forEach(([citySlug, relatedCities]) => {
  addRelatedCitiesToPage(citySlug, relatedCities);
});

console.log('City linking script completed!');

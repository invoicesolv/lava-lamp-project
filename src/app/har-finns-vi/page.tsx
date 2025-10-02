import { Metadata } from 'next';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Här finns vi - Leverans till hela Sverige | Tryckeget',
  description: 'Vi levererar tryckta kläder till hela Sverige. Hitta din stad och se leveranstider. Stockholm, Göteborg, Malmö och många fler städer.',
  keywords: 'leverans sverige, tryck kläder stockholm, göteborg malmö, hela sverige, leveranstider',
};

export default function HarFinnsViPage() {
  const stockholmAreas = [
    'Adelsö', 'Alvik', 'Arholma', 'Arlanda', 'Arlandastad', 'Aspvik',
    'Backby', 'Bagarmossen', 'Baggboda', 'Bandhagen', 'Bergendahl', 'Bergshamra',
    'Bergvik', 'Betsede', 'Björknäs', 'Björkö', 'Blidö', 'Blockhusudden',
    'Bogesund', 'Bollmora', 'Bollstanäs', 'Boo', 'Boston', 'Bro',
    'Bromma', 'Brottby', 'Bränningestrand', 'Bylehamn', 'Bålsta', 'Centrum-Fånäs-Nydal-Västerängen',
    'Dalarö', 'Danderyd', 'Djurhamn', 'Djursholm', 'Djursholms Ekeby', 'Droppsta',
    'Drottningholm', 'Dyvik', 'Dåntorp', 'Eckerö', 'Edsberg', 'Edsbro',
    'Ekeby', 'Ekerö', 'Ekerö Ö', 'Eklundshov', 'Ektorp', 'Eldtomta',
    'Ella park', 'Enebyberg', 'Engarn', 'Enhörna', 'Enskede', 'Enskededalen',
    'Fagerdala', 'Fagersjö', 'Farsta', 'Farsta strand', 'Farstanäset', 'Finnholmen',
    'Fiskeså', 'Fisksätra', 'Fittja', 'Furusund', 'Färentuna', 'Fågelbrolandet',
    'Galö', 'Gillbo', 'Gladö kvarn', 'Gnesta', 'Gottröra', 'Granlund',
    'Gribbylund', 'Grinda', 'Grisslehamn', 'Gräddö', 'Gräsö', 'Grödby',
    'Grödinge', 'Gudby', 'Gustavsberg', 'Gustavsvik', 'Gällnöby', 'Hallstavik',
    'Hammarland', 'Handen', 'Haninge', 'Harg', 'Hargshamn', 'Harö',
    'Hemmesta', 'Herresta', 'Herräng', 'Himmene', 'Hjorthagen', 'Huddinge',
    'Hustega', 'Huvudsta', 'Hägernäs', 'Hägersten', 'Häggeby', 'Härsby',
    'Hässelby', 'Hästhagen', 'Hästängsudd', 'Häverö', 'Hårsfjärden', 'Hölö',
    'Igelsta', 'Ingarö', 'Ingaröstrand', 'Ingmarsö', 'Inverness', 'Iselsta',
    'Islinge', 'Johannesberg', 'Johannesfred', 'Johanneshov', 'Jordbro', 'Järfälla',
    'Järna', 'Järva', 'Kapellskär', 'Karlsudd', 'Kimsta', 'Kista',
    'Klingsta', 'Knivsta', 'Knutby', 'Koludden', 'Kolvik', 'Kragsta',
    'Krogsta', 'Kulan', 'Kummelnäs', 'Kungens kurva', 'Kungsberga', 'Kungsdalen',
    'Kungshatt', 'Kungsängen', 'Kvarnholmen', 'Kyrkviken', 'Kyttinge', 'Kälvesta',
    'Kärrdal', 'Kättsta', 'Ladholmen', 'Laggarsvik', 'Landfjärden', 'Landsort',
    'Ledinge', 'Lidingö', 'Lilla Nyckelviken', 'Lindalen', 'Lindholmen', 'Lissma',
    'Ljusterö', 'Lännersta', 'Långgarn', 'Långvik', 'Mariefred', 'Mosebacke-Storsten',
    'Munsö', 'Muskö', 'Mälhamra', 'Märsta', 'Möja', 'Mölnbo',
    'Mörkö', 'Mörtnäs', 'Nacka', 'Nodsta', 'Nordrona', 'Norra Lagnö',
    'Norrby', 'Norrga', 'Norrskog', 'Norrsunda', 'Norrtälje', 'Norsborg',
    'Norrmalm', 'Nyfors', 'Nykvarn', 'Nynäshamn', 'Nämdö', 'Näsbypark',
    'Näshagen', 'Nåttarö', 'Odensala', 'Opp-Norrby', 'Orhem', 'Ornö',
    'Prästnibble', 'Raksta', 'Resarö', 'Ricksättra', 'Rimbo', 'Rolsta',
    'Rosersberg', 'Rotebro', 'Runmarö', 'Rånäs', 'Rönninge', 'Saltsjö-Duvnäs',
    'Saltsjöbaden', 'Sandhamn', 'Segeltorp', 'Segersäng', 'Sibble', 'Sigtuna',
    'Skarpnäck', 'Skebobruk', 'Skokloster', 'Skrubba', 'Skälby', 'Skälsmara',
    'Skälvik', 'Skärholmen', 'Skå', 'Sköndal', 'Slagsta', 'Slåsta',
    'Solbacken', 'Sollenkroka Ö', 'Sollentuna', 'Solna', 'Solsidan', 'Sorunda',
    'Spånga', 'Stavsnäs', 'Stavsudda', 'Stenhamra', 'Steningehöjden', 'Stockholm',
    'Stocksund', 'Stora Stava', 'Stora Vika', 'Storholmen', 'Strömma', 'Stugudden',
    'Stäket', 'Sundbyberg', 'Svalnäs', 'Svartsjö', 'Svartsö', 'Svedlandet',
    'Svärdsund', 'Sälna', 'Särsö', 'Södergarn', 'Söderholmen', 'Södertälje',
    'Tadhem', 'Tjustvik', 'Tomta', 'Torslunda', 'Tranholmen', 'Trosa',
    'Troxhammar', 'Trångsund', 'Tullinge', 'Tumba', 'Tungelsta', 'Tyktorp',
    'Tyresö', 'Tyresö Ö', 'Täby', 'Ubby', 'Undal', 'Upplands Väsby',
    'Utanbro', 'Uttran', 'Utö', 'Vadholma', 'Vagnhärad', 'Vallentuna',
    'Vaxholm', 'Vaxtuna', 'Vega', 'Velamsund', 'Vendelsö', 'Viby',
    'Vidbynäs', 'Vidja', 'Viggbyholm', 'Viksund', 'Vretarna', 'Väddö',
    'Vällingby', 'Värmdö', 'Västerhaninge', 'Vätö', 'Vårby', 'Vårsta',
    'Wira', 'Ytterbystrand', 'Yxlan', 'Älgö', 'Älgöö', 'Älmsta',
    'Älta', 'Älvsjö', 'Äppelviken', 'Åkersberga', 'Åkerö', 'Årsta',
    'Årsta Havsbad', 'Ölsta', 'Ösmo', 'Östermalm'
  ];

  const goteborgAreas = [
    'Agnesberg', 'Angered', 'Askim', 'Asperö', 'Backerud', 'Billdal',
    'Bohus', 'Brännö', 'Donsö', 'Fotö', 'Gatersered', 'Gråbo',
    'Gunnilse', 'Göteborg', 'Hakered', 'Harestad', 'Hisingen', 'Hisings Backa',
    'Hisings Kärra', 'Kullavik', 'Kungälv', 'Kållered', 'Köpstadsö', 'Lassby',
    'Lerum', 'Lilla Viken', 'Lindome', 'Linnarhult', 'Mölndal', 'Mölnlycke',
    'Nol', 'Nolvik', 'Näset', 'Nödinge-Nol', 'Olofstorp', 'Partille',
    'Skogome', 'Styrsö', 'Surte', 'Svindal', 'Särö', 'Säve',
    'Tagene', 'Tega', 'Torslanda', 'Vrångö', 'Västra Frölunda', 'Ytterby',
    'Ytterstad'
  ];

  const malmoAreas = [
    'Almlunda', 'Bunkeflo by', 'Bunkeflostrand', 'Fårabäck', 'Klagshamn', 'Kristineberg',
    'Krumby', 'Kvissle', 'Lockarp', 'Malmö', 'Malmö Solhem', 'Oxie',
    'Pile-Tygelsjö', 'Skumparp', 'Slättäng', 'Toarp', 'Tullstorp', 'Tygelsjö',
    'Vintrie', 'Västra Klagstorp', 'Östra Kattarp'
  ];

  // Combine all areas and remove duplicates
  const allAreas = [...stockholmAreas, ...goteborgAreas, ...malmoAreas];
  
  // Define other cities without duplicates
  const otherCities = [
    'Uppsala', 'Linköping', 'Örebro', 'Västerås', 'Norrköping', 'Jönköping',
    'Umeå', 'Gävle', 'Borås', 'Eskilstuna', 'Sundsvall', 'Trollhättan',
    'Luleå', 'Karlstad', 'Halmstad', 'Växjö', 'Östersund', 'Borlänge', 
    'Falun', 'Helsingborg', 'Kristianstad', 'Landskrona', 'Trelleborg', 
    'Ystad', 'Hässleholm', 'Kalmar', 'Eslöv', 'Höganäs', 'Klippan', 
    'Perstorp', 'Bjuv', 'Kävlinge', 'Lomma', 'Svedala', 'Skurup', 
    'Sjöbo', 'Tomelilla', 'Bromölla', 'Östra Göinge', 'Örkelljunga', 
    'Båstad', 'Ängelholm', 'Höör', 'Hörby', 'Mark', 'Ale', 'Ulricehamn', 
    'Tranemo', 'Svenljunga', 'Kungsbacka', 'Alingsås', 'Uddevalla', 
    'Vänersborg', 'Stenungsund', 'Kungälv', 'Partille', 'Lerum', 'Mölndal', 
    'Mölnlycke', 'Kållered', 'Askim', 'Angered', 'Billdal', 'Bohus', 
    'Brännö', 'Donsö', 'Fotö', 'Gatersered', 'Gråbo', 'Gunnilse', 
    'Hakered', 'Harestad', 'Hisingen', 'Hisings Backa', 'Hisings Kärra', 
    'Kullavik', 'Köpstadsö', 'Lassby', 'Lilla Viken', 'Lindome', 
    'Linnarhult', 'Nol', 'Nolvik', 'Näset', 'Nödinge-Nol', 'Olofstorp', 
    'Skogome', 'Styrsö', 'Surte', 'Svindal', 'Särö', 'Säve', 'Tagene', 
    'Tega', 'Torslanda', 'Vrångö', 'Västra Frölunda', 'Ytterby', 'Ytterstad'
  ];

  // Remove duplicates and areas already shown in other sections
  const uniqueOtherCities = otherCities.filter((city, index, self) => 
    self.indexOf(city) === index && !allAreas.includes(city)
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Här finns vi
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Vi levererar tryckta kläder till hela Sverige. Hitta din stad och se leveranstider.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-500 mr-2">✓</span>
                Leverans till hela Sverige
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-500 mr-2">✓</span>
                5-7 dagars leveranstid
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-500 mr-2">✓</span>
                Inga minimiordrar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stockholm Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stockholmsregionen
            </h2>
            <p className="text-lg text-gray-600">
              Vi levererar till hela Stockholmsområdet
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            <Link href="/stockholm" className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors border border-orange-200 hover:border-orange-300">
              <div className="font-bold text-orange-700">Stockholm</div>
              <div className="text-sm text-orange-600">Huvudstad</div>
            </Link>
            {stockholmAreas.map((area) => {
              const slug = area.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/å/g, 'a')
                .replace(/ä/g, 'a')
                .replace(/ö/g, 'o')
                .replace(/å/g, 'a')
                .replace(/é/g, 'e')
                .replace(/Å/g, 'a')
                .replace(/Ä/g, 'a')
                .replace(/Ö/g, 'o');
              return (
                <Link key={area} href={`/${slug}`} className="bg-gray-50 hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
                  <div className="font-medium text-gray-900">{area}</div>
                  <div className="text-sm text-gray-600">5-7 dagar</div>
                </Link>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link href="/stockholm" className="text-orange-500 hover:text-orange-600 font-medium">
              Se alla Stockholmsområden →
            </Link>
          </div>
        </div>
      </section>

      {/* Göteborg Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Göteborgsregionen
            </h2>
            <p className="text-lg text-gray-600">
              Vi levererar till hela Göteborgsområdet
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            <Link href="/goteborg" className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors border border-orange-200 hover:border-orange-300">
              <div className="font-bold text-orange-700">Göteborg</div>
              <div className="text-sm text-orange-600">Västra Götaland</div>
            </Link>
            {goteborgAreas.map((area) => {
              const slug = area.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/å/g, 'a')
                .replace(/ä/g, 'a')
                .replace(/ö/g, 'o')
                .replace(/å/g, 'a')
                .replace(/é/g, 'e')
                .replace(/Å/g, 'a')
                .replace(/Ä/g, 'a')
                .replace(/Ö/g, 'o');
              return (
                <Link key={area} href={`/${slug}`} className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
                  <div className="font-medium text-gray-900">{area}</div>
                  <div className="text-sm text-gray-600">5-7 dagar</div>
                </Link>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link href="/goteborg" className="text-orange-500 hover:text-orange-600 font-medium">
              Se alla Göteborgsområden →
            </Link>
          </div>
        </div>
      </section>

      {/* Malmö Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Skåne
            </h2>
            <p className="text-lg text-gray-600">
              Vi levererar till hela Skåne
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            <Link href="/malmo" className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors border border-orange-200 hover:border-orange-300">
              <div className="font-bold text-orange-700">Malmö</div>
              <div className="text-sm text-orange-600">Skåne</div>
            </Link>
            {malmoAreas.map((area) => {
              const slug = area.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/å/g, 'a')
                .replace(/ä/g, 'a')
                .replace(/ö/g, 'o')
                .replace(/å/g, 'a')
                .replace(/é/g, 'e')
                .replace(/Å/g, 'a')
                .replace(/Ä/g, 'a')
                .replace(/Ö/g, 'o');
              return (
                <Link key={area} href={`/${slug}`} className="bg-gray-50 hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
                  <div className="font-medium text-gray-900">{area}</div>
                  <div className="text-sm text-gray-600">5-7 dagar</div>
                </Link>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link href="/malmo" className="text-orange-500 hover:text-orange-600 font-medium">
              Se alla Skåneområden →
            </Link>
          </div>
        </div>
      </section>

      {/* Other Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Andra städer i Sverige
            </h2>
            <p className="text-lg text-gray-600">
              Vi levererar till alla större städer i Sverige
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {uniqueOtherCities.map((city) => {
              const slug = city.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/å/g, 'a')
                .replace(/ä/g, 'a')
                .replace(/ö/g, 'o')
                .replace(/å/g, 'a')
                .replace(/é/g, 'e')
                .replace(/Å/g, 'a')
                .replace(/Ä/g, 'a')
                .replace(/Ö/g, 'o');
              return (
                <Link key={city} href={`/${slug}`} className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
                  <div className="font-medium text-gray-900">{city}</div>
                  <div className="text-sm text-gray-600">5-7 dagar</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hittade du din stad?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Börja designa dina tryckta kläder idag och få dem levererade till din stad inom 5-7 dagar.
          </p>
          <Link 
            href="/design/upload?productId=unisex-jersey-tshirt&size=M&color=Vit&quantity=1"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            🎨 Börja designa nu
          </Link>
        </div>
      </section>


      {/* Related Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vi levererar också till andra städer i regionen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/stockholm" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Stockholm</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/goteborg" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Goteborg</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/malmo" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Malmo</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/uppsala" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Uppsala</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/linkoping" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Linkoping</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/orebro" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Orebro</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/har-finns-vi" className="text-orange-500 hover:text-orange-600 font-medium">
              Se alla städer vi levererar till →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import React from 'react';
import { GlareCard } from '@/components/ui/glare-card';

export default function Sections() {
  return (
    <div className="bg-white">
      {/* Main CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Print on Demand –<br />
            starta din online-verksamhet
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sälj anpassade tryckta produkter på beställning utan någon förskottsinvestering eller ansvar för orderhantering.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
            Börja designa
          </button>
          <p className="text-gray-500">100% Gratis · Lätt att använda · 1 300+ Produkter</p>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Alla kan vara chef med<br />
            Print on Demand
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Oavsett om du säljer till en eller tusentals, vi har dig täckt
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Creators */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skapare och designers</h3>
              <p className="text-gray-600">
                Börja tjäna pengar på din publik eller konst utan förskottsinvestering. Att sälja anpassad merchandise är det bästa sättet att hålla din kreativa passion vid liv.
              </p>
            </div>

            {/* Entrepreneurs */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-handelsföretagare</h3>
              <p className="text-gray-600">
                Var din egen chef utan förskottskostnader. Att lansera eller utveckla din e-handelsverksamhet är nu lättare än någonsin.
              </p>
            </div>

            {/* Brands */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Varumärken och företag</h3>
              <p className="text-gray-600">
                Lansera nya produkter, utöka din räckvidd eller flytta din befintliga merchandise till on-demand-produktion med bara några klick.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Kom igång gratis!
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <GlareCard className="flex flex-col items-center justify-end p-6">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop"
                alt="T-shirt"
              />
              <div className="relative z-10 text-center">
                <h3 className="font-bold text-white text-lg mb-2">Unisex Jersey T-shirt</h3>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Börja designa
                </button>
              </div>
            </GlareCard>
            
            <GlareCard className="flex flex-col items-center justify-end p-6">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop"
                alt="Hoodie"
              />
              <div className="relative z-10 text-center">
                <h3 className="font-bold text-white text-lg mb-2">Heavy Blend™ Hoodie</h3>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Börja designa
                </button>
              </div>
            </GlareCard>
            
            <GlareCard className="flex flex-col items-center justify-end p-6">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1000&auto=format&fit=crop"
                alt="Socks"
              />
              <div className="relative z-10 text-center">
                <h3 className="font-bold text-white text-lg mb-2">Premium Strumpor</h3>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Börja designa
                </button>
              </div>
            </GlareCard>
            
            <GlareCard className="flex flex-col items-center justify-center">
              <svg
                width="66"
                height="65"
                viewBox="0 0 66 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-white mb-4"
              >
                <path
                  d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeMiterlimit="3.86874"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="font-bold text-white text-lg mb-2">Telefonfodral</h3>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Börja designa
              </button>
            </GlareCard>
            
            <GlareCard className="flex flex-col items-start justify-end p-6">
              <h3 className="font-bold text-white text-xl mb-2">Canvas Prints</h3>
              <p className="font-normal text-base text-neutral-200 mb-4">
                Högkvalitativa canvas-tryck för hem och kontor. Perfekt för konst och fotografier.
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Börja designa
              </button>
            </GlareCard>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Anpassade print-on-demand produkter i 5 steg
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Få omedelbar tillgång till automatiserad teknik som ger dig print-on-demand dropshipping-uppfyllelse. Att skapa och sälja anpassade produkter är en snabb och enkel process.
          </p>
          
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              { step: '1', title: 'Välj', desc: 'Välj produkt' },
              { step: '2', title: 'Anpassa', desc: 'Lägg till design' },
              { step: '3', title: 'Förhandsvisa', desc: 'Eller beställ prov' },
              { step: '4', title: 'Publicera', desc: 'I din butik' },
              { step: '5', title: 'Slappna av', desc: 'Vi sköter resten' }
            ].map((item, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="font-bold text-gray-900 mb-2">100% gratis</h3>
              <p className="text-gray-600 text-sm">
                Använd vår produktskapare för att skapa produkter och publicera mockups med anpassade designer.
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">👕</div>
              <h3 className="font-bold text-gray-900 mb-2">1 300+ unika produkter</h3>
              <p className="text-gray-600 text-sm">
                T-shirts, hoodies, skor, väskor, strumpor, hattar, telefonfodral, muggar, klistermärken och mer.
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-gray-900 mb-2">Globalt nätverk</h3>
              <p className="text-gray-600 text-sm">
                Mer än 140 tryckfaciliteter i USA, Kanada, EU, Storbritannien, Australien och Kina.
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Snabb leverans</h3>
              <p className="text-gray-600 text-sm">
                Automatiserad orderhantering och snabb leverans direkt till dina kunder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is POD Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Vad är Print on Demand?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Print on Demand (POD) är en uppfyllelseprocess som dropshippar produkter till kunder först efter att en försäljning går igenom. Detta innebär att merchandise aldrig kommer att kräva hantering, lagring eller skydd.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Du kan trycka kvantiteter av anpassad merchandise utan lagerhantering genom att skicka den direkt till kunder. Denna uppfyllelsemodell tillåter en kund att köpa produkter i din butik och ordern går direkt till tryckprovidern. Detta eliminerar behovet av orderuppfyllelse och lagringsutrymme.
          </p>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Börja sälja
            </button>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Fördelar med Print On Demand
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">Fördelar</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Ingen risk.</strong> Ingen investering i merchandise du inte sålt än. Inga lokaler att hyra eller personal att anställa.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Nybörjarvänligt.</strong> Ingen erfarenhet behövs. Registrera dig gratis och börja designa produkter.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Inget lager.</strong> Inget krångel med att hålla lager av merchandise lagrade någonstans.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Global kundbas.</strong> Tilltala kunder över hela världen med unika designer och produkter.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong>Mångfald.</strong> Mångsidiga produkter och de bästa on-demand-tryckalternativen.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">Nackdelar</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">×</span>
                  <div>
                    <strong>Delat ansvar.</strong> Medan tryckproviders hanterar orderuppfyllelse, kommer kunder att vända sig till handlaren med problem och frågor.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Starta din egen print-on-demand verksamhet!
          </h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Börja designa
          </button>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Tryck eget i Knutby - T-shirt med eget tryck | Tryckeget',
  description: 'Beställ tryckta kläder i Knutby! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Knutby i Stockholmsregionen.',
  keywords: 'tryck eget knutby, t-shirt med eget tryck knutby, tryck på kläder knutby, anpassade kläder knutby, print on demand knutby, stockholm, stockholmsregionen',
  openGraph: {
    title: 'Tryck eget i Knutby - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Knutby! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Knutby i Stockholmsregionen.',
    type: 'website',
    locale: 'sv_SE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tryck eget i Knutby - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Knutby! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar till Knutby i Stockholmsregionen.',
  },
};

export default function KnutbyPage() {
  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-3 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
              Hem
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/har-finns-vi" className="text-gray-500 hover:text-gray-700 transition-colors">
              Här finns vi
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Knutby</span>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🚚 Leverans till Knutby
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tryck eget i <span className="text-orange-500">Knutby</span> –<br />
                snabbt, enkelt och professionellt
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Behöver ni profilkläder till företaget i Knutby, tröjor till ett event eller en unik present? Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – vi levererar direkt till Knutby i Stockholmsregionen.
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Leverans till Knutby inom 5-7 dagar
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Inga minimiordrar
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Enkelt designverktyg
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/design/upload?productId=unisex-jersey-tshirt&size=M&color=Vit&quantity=1"
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  🎨 Skapa ditt plagg nu
                </Link>
                <Link 
                  href="/products"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 transition-all duration-200"
                >
                  Se alla produkter
                </Link>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Featured Products */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img src={products[0].images.main} alt={products[0].name} className="w-full h-32 object-cover rounded-lg mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{products[0].name}</h3>
                    <p className="text-orange-500 font-bold">{products[0].price.base} {products[0].price.currency}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img src={products[1].images.main} alt={products[1].name} className="w-full h-32 object-cover rounded-lg mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{products[1].name}</h3>
                    <p className="text-orange-500 font-bold">{products[1].price.base} {products[1].price.currency}</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img src={products[2].images.main} alt={products[2].name} className="w-full h-32 object-cover rounded-lg mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{products[2].name}</h3>
                    <p className="text-orange-500 font-bold">{products[2].price.base} {products[2].price.currency}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img src={products[3].images.main} alt={products[3].name} className="w-full h-32 object-cover rounded-lg mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{products[3].name}</h3>
                    <p className="text-orange-500 font-bold">{products[3].price.base} {products[3].price.currency}</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Leverans till Knutby
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Varför välja Tryckeget för tryck i Knutby?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Snabb leverans till Knutby</h3>
                    <p className="text-gray-600">Vi levererar dina tryckta kläder direkt till Knutby inom 5-7 dagar.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lokal expertis</h3>
                    <p className="text-gray-600">Vi förstår behoven hos företag och privatpersoner i Knutby och Stockholmsregionen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hög kvalitet</h3>
                    <p className="text-gray-600">Professionella tryckresultat som håller länge, perfekt för Knutbys klimat och livsstil.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Populära produkter i Knutby</h3>
              <div className="space-y-3">
                {products.slice(0, 4).map((product) => (
                  <div key={product.id} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <div className="flex items-center">
                      <img src={product.images.main} alt={product.name} className="w-12 h-12 object-cover rounded mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-600">{product.shortDescription}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-500">{product.price.base} {product.price.currency}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Redo att börja trycka i Knutby?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Skapa dina egna tryckta kläder idag och få dem levererade till Knutby inom 5-7 dagar.
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
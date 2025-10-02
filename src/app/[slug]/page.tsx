import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GlobalNavbar } from '@/components/global-navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { products } from '@/data/products';

// Define supported cities with their SEO data
const cityData = {
  'uppsala': {
    name: 'Uppsala',
    title: 'Tryck eget i Uppsala - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Uppsala! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget uppsala, t-shirt med eget tryck uppsala, tryck på kläder uppsala, anpassade kläder uppsala, print on demand uppsala',
    deliveryTime: '5-7 dagar',
    area: 'Uppsalaområdet'
  },
  'linkoping': {
    name: 'Linköping',
    title: 'Tryck eget i Linköping - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Linköping! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget linköping, t-shirt med eget tryck linköping, tryck på kläder linköping, anpassade kläder linköping, print on demand linköping',
    deliveryTime: '5-7 dagar',
    area: 'Linköpingsområdet'
  },
  'vasteras': {
    name: 'Västerås',
    title: 'Tryck eget i Västerås - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Västerås! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget västerås, t-shirt med eget tryck västerås, tryck på kläder västerås, anpassade kläder västerås, print on demand västerås',
    deliveryTime: '5-7 dagar',
    area: 'Västeråsområdet'
  },
  'helsingborg': {
    name: 'Helsingborg',
    title: 'Tryck eget i Helsingborg - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Helsingborg! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget helsingborg, t-shirt med eget tryck helsingborg, tryck på kläder helsingborg, anpassade kläder helsingborg, print on demand helsingborg',
    deliveryTime: '5-7 dagar',
    area: 'Helsingborgsområdet'
  },
  'jönköping': {
    name: 'Jönköping',
    title: 'Tryck eget i Jönköping - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Jönköping! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget jönköping, t-shirt med eget tryck jönköping, tryck på kläder jönköping, anpassade kläder jönköping, print on demand jönköping',
    deliveryTime: '5-7 dagar',
    area: 'Jönköpingsområdet'
  },
  'norrköping': {
    name: 'Norrköping',
    title: 'Tryck eget i Norrköping - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Norrköping! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget norrköping, t-shirt med eget tryck norrköping, tryck på kläder norrköping, anpassade kläder norrköping, print on demand norrköping',
    deliveryTime: '5-7 dagar',
    area: 'Norrköpingsområdet'
  },
  'lund': {
    name: 'Lund',
    title: 'Tryck eget i Lund - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Lund! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget lund, t-shirt med eget tryck lund, tryck på kläder lund, anpassade kläder lund, print on demand lund',
    deliveryTime: '5-7 dagar',
    area: 'Lundområdet'
  },
  'umea': {
    name: 'Umeå',
    title: 'Tryck eget i Umeå - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Umeå! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget umeå, t-shirt med eget tryck umeå, tryck på kläder umeå, anpassade kläder umeå, print on demand umeå',
    deliveryTime: '5-7 dagar',
    area: 'Umeåområdet'
  },
  'gavle': {
    name: 'Gävle',
    title: 'Tryck eget i Gävle - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Gävle! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget gävle, t-shirt med eget tryck gävle, tryck på kläder gävle, anpassade kläder gävle, print on demand gävle',
    deliveryTime: '5-7 dagar',
    area: 'Gävleområdet'
  },
  'boras': {
    name: 'Borås',
    title: 'Tryck eget i Borås - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Borås! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget borås, t-shirt med eget tryck borås, tryck på kläder borås, anpassade kläder borås, print on demand borås',
    deliveryTime: '5-7 dagar',
    area: 'Boråsområdet'
  },
  'sodertalje': {
    name: 'Södertälje',
    title: 'Tryck eget i Södertälje - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Södertälje! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget södertälje, t-shirt med eget tryck södertälje, tryck på kläder södertälje, anpassade kläder södertälje, print on demand södertälje',
    deliveryTime: '5-7 dagar',
    area: 'Södertäljeområdet'
  },
  'eskilstuna': {
    name: 'Eskilstuna',
    title: 'Tryck eget i Eskilstuna - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Eskilstuna! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget eskilstuna, t-shirt med eget tryck eskilstuna, tryck på kläder eskilstuna, anpassade kläder eskilstuna, print on demand eskilstuna',
    deliveryTime: '5-7 dagar',
    area: 'Eskilstunaområdet'
  },
  'halmstad': {
    name: 'Halmstad',
    title: 'Tryck eget i Halmstad - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Halmstad! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget halmstad, t-shirt med eget tryck halmstad, tryck på kläder halmstad, anpassade kläder halmstad, print on demand halmstad',
    deliveryTime: '5-7 dagar',
    area: 'Halmstadsområdet'
  },
  'vaxjo': {
    name: 'Växjö',
    title: 'Tryck eget i Växjö - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Växjö! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget växjö, t-shirt med eget tryck växjö, tryck på kläder växjö, anpassade kläder växjö, print on demand växjö',
    deliveryTime: '5-7 dagar',
    area: 'Växjöområdet'
  },
  'karlstad': {
    name: 'Karlstad',
    title: 'Tryck eget i Karlstad - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Karlstad! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget karlstad, t-shirt med eget tryck karlstad, tryck på kläder karlstad, anpassade kläder karlstad, print on demand karlstad',
    deliveryTime: '5-7 dagar',
    area: 'Karlstadsområdet'
  },
  'sundsvall': {
    name: 'Sundsvall',
    title: 'Tryck eget i Sundsvall - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Sundsvall! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget sundsvall, t-shirt med eget tryck sundsvall, tryck på kläder sundsvall, anpassade kläder sundsvall, print on demand sundsvall',
    deliveryTime: '5-7 dagar',
    area: 'Sundsvallområdet'
  },
  'orebro': {
    name: 'Örebro',
    title: 'Tryck eget i Örebro - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Örebro! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget örebro, t-shirt med eget tryck örebro, tryck på kläder örebro, anpassade kläder örebro, print on demand örebro',
    deliveryTime: '5-7 dagar',
    area: 'Örebroområdet'
  },
  'trollhattan': {
    name: 'Trollhättan',
    title: 'Tryck eget i Trollhättan - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Trollhättan! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget trollhättan, t-shirt med eget tryck trollhättan, tryck på kläder trollhättan, anpassade kläder trollhättan, print on demand trollhättan',
    deliveryTime: '5-7 dagar',
    area: 'Trollhättanområdet'
  },
  'lulea': {
    name: 'Luleå',
    title: 'Tryck eget i Luleå - T-shirt med eget tryck | Tryckeget',
    description: 'Beställ tryckta kläder i Luleå! Vi levererar t-shirt med eget tryck, hoodie med eget tryck och keps med eget tryck direkt till din dörr. Snabb leverans inom 5-7 dagar.',
    keywords: 'tryck eget luleå, t-shirt med eget tryck luleå, tryck på kläder luleå, anpassade kläder luleå, print on demand luleå',
    deliveryTime: '5-7 dagar',
    area: 'Luleåområdet'
  },
  'stockholm': {
    name: 'Stockholm',
    title: 'Tryck eget i Stockholm - Snabb leverans till alla stadsdelar | Tryckeget',
    description: 'Tryck egna kläder i Stockholm med snabb leverans. Vi levererar till alla stadsdelar: Södermalm, Norrmalm, Östermalm, Vasastan, Kungsholmen och mer. Börja designa idag!',
    keywords: 'tryck eget stockholm, tryck kläder stockholm, t-shirt tryck stockholm, hoodie tryck stockholm, snabb leverans stockholm, tryck på kläder stockholm',
    deliveryTime: '5-7 dagar',
    area: 'Stockholmsområdet'
  },
  'goteborg': {
    name: 'Göteborg',
    title: 'Tryck eget i Göteborg - Snabb leverans till alla stadsdelar | Tryckeget',
    description: 'Tryck egna kläder i Göteborg med snabb leverans. Vi levererar till alla stadsdelar: Majorna, Haga, Linné, Örgryte och mer. Börja designa idag!',
    keywords: 'tryck eget göteborg, tryck kläder göteborg, t-shirt tryck göteborg, hoodie tryck göteborg, snabb leverans göteborg, tryck på kläder göteborg',
    deliveryTime: '5-7 dagar',
    area: 'Göteborgsområdet'
  },
  'malmo': {
    name: 'Malmö',
    title: 'Tryck eget i Malmö - Snabb leverans till alla stadsdelar | Tryckeget',
    description: 'Tryck egna kläder i Malmö med snabb leverans. Vi levererar till alla stadsdelar: Centrum, Limhamn, Hyllie, Rosengård och mer. Börja designa idag!',
    keywords: 'tryck eget malmö, tryck kläder malmö, t-shirt tryck malmö, hoodie tryck malmö, snabb leverans malmö, tryck på kläder malmö',
    deliveryTime: '5-7 dagar',
    area: 'Malmöområdet'
  }
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = cityData[slug as keyof typeof cityData];
  
  if (!city) {
    return {
      title: 'Sida hittades inte',
      description: 'Den sökta sidan kunde inte hittas.'
    };
  }

  return {
    title: city.title,
    description: city.description,
    keywords: city.keywords,
    authors: [{ name: "Tryckeget" }],
    publisher: "Tryckeget",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://tryckeget.se/${slug}`,
    },
    openGraph: {
      title: city.title,
      description: city.description,
      type: 'website',
      locale: 'sv_SE',
      url: `https://tryckeget.se/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: city.title,
      description: city.description,
    },
  };
}

export default async function CityLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const city = cityData[slug as keyof typeof cityData];
  
  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <GlobalNavbar />
      
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
                🚚 Leverans till {city.name}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tryck eget i <span className="text-orange-500">{city.name}</span> –<br />
                snabbt, enkelt och professionellt
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Behöver ni profilkläder till företaget i {city.name}, tröjor till ett event eller en unik present? Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – vi levererar direkt till {city.area}.
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Leverans till {city.name} inom {city.deliveryTime}
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
                Leverans till {city.name}
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
                Varför välja Tryckeget för tryck i {city.name}?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Snabb leverans till {city.name}</h3>
                    <p className="text-gray-600">Vi levererar dina tryckta kläder direkt till {city.area} inom {city.deliveryTime}.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lokal expertis</h3>
                    <p className="text-gray-600">Vi förstår behoven hos företag och privatpersoner i {city.name}.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hög kvalitet</h3>
                    <p className="text-gray-600">Professionella tryckresultat som håller länge, perfekt för {city.name}s klimat.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Populära produkter i {city.name}</h3>
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
            Redo att börja trycka i {city.name}?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Skapa dina egna tryckta kläder idag och få dem levererade till {city.area} inom {city.deliveryTime}.
          </p>
          <Link 
            href="/design/upload?productId=unisex-jersey-tshirt&size=M&color=Vit&quantity=1"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            🎨 Börja designa nu
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Generate static params for supported cities
export async function generateStaticParams() {
  return Object.keys(cityData).map((slug) => ({
    slug,
  }));
}

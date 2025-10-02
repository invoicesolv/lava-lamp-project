'use client';

import { Footer } from '@/components/footer';
import Link from 'next/link';
import { products } from '@/data/products';
import { useState } from 'react';
import { submitForm, FormData, validateEmail } from '@/lib/form-utils';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function MalmoPage() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Validate email
    if (!validateEmail(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Vänligen ange en giltig e-postadress.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const formSubmissionData: FormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        city: 'Malmö',
        form_type: 'city_contact',
        service_category: 'tryck_klader',
        location: 'malmo'
      };

      const result = await submitForm(formSubmissionData);
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message + (result.reference ? ` (Referens: ${result.reference})` : '')
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Ett fel uppstod. Försök igen.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Ett fel uppstod. Försök igen.' });
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <span className="text-gray-900 font-medium">Malmo</span>
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
                🚚 Leverans till Malmö
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tryck eget i <span className="text-orange-500">Malmö</span> –<br />
                snabbt, enkelt och professionellt
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Behöver ni profilkläder till företaget i Malmö, tröjor till ett event eller en unik present? Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – vi levererar direkt till Malmö i Skåne.
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Leverans till Malmö inom 5-7 dagar
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
                Leverans till Malmö
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vårt produktutbud i Malmö
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Från t-shirts och hoodies till kepsar och telefonfodral – vi har allt du behöver för att skapa unika tryckta kläder i Malmö.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.images.main}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                    REA
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-500">
                      {product.price.base} {product.price.currency}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.category}
                    </span>
                  </div>
                  <Link 
                    href={`/design/upload?productId=${product.id}&size=M&color=Vit&quantity=1`}
                    className="block w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-center font-medium transition-colors"
                  >
                    Designa nu
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vad våra kunder i Malmö säger
            </h2>
            <p className="text-lg text-gray-600">
              Läs vad andra i Skåne tycker om våra tryckta kläder
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Beställde profilkläder till vårt kontor i Malmö och blev väldigt nöjda. Snabb leverans och hög kvalitet på trycket.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Lars Persson</div>
              <div className="text-sm text-gray-500">Klagshamn, Malmö</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Perfekt för vårt event i Malmö! Designverktyget var enkelt att använda och resultatet blev fantastiskt.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Sofia Karlsson</div>
              <div className="text-sm text-gray-500">Oxie, Malmö</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Vi i föreningen tryckte tröjor till vår årsfest i Malmö. Alla blev supernöjda med kvaliteten!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Anders Larsson</div>
              <div className="text-sm text-gray-500">Tygelsjö, Malmö</div>
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
                Varför välja Tryckeget för tryck i Malmö?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Snabb leverans till Malmö</h3>
                    <p className="text-gray-600">Vi levererar dina tryckta kläder direkt till Malmö inom 5-7 dagar.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lokal expertis</h3>
                    <p className="text-gray-600">Vi förstår behoven hos företag och privatpersoner i Malmö och Skåne.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hög kvalitet</h3>
                    <p className="text-gray-600">Professionella tryckresultat som håller länge, perfekt för Malmös klimat och livsstil.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Populära produkter i Malmö</h3>
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

      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vi levererar till hela Skåne
            </h2>
            <p className="text-lg text-gray-600">
              Oavsett var du befinner dig i Skåne, levererar vi tryckta kläder till dig
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            <Link href="/lund" className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
              <div className="font-medium text-gray-900">Lund</div>
              <div className="text-sm text-gray-600">5-7 dagar</div>
            </Link>
            <Link href="/helsingborg" className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
              <div className="font-medium text-gray-900">Helsingborg</div>
              <div className="text-sm text-gray-600">5-7 dagar</div>
            </Link>
            <Link href="/kristianstad" className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
              <div className="font-medium text-gray-900">Kristianstad</div>
              <div className="text-sm text-gray-600">5-7 dagar</div>
            </Link>
            <Link href="/landskrona" className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
              <div className="font-medium text-gray-900">Landskrona</div>
              <div className="text-sm text-gray-600">5-7 dagar</div>
            </Link>
            <Link href="/trelleborg" className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
              <div className="font-medium text-gray-900">Trelleborg</div>
              <div className="text-sm text-gray-600">5-7 dagar</div>
            </Link>
            <Link href="/ystad" className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
              <div className="font-medium text-gray-900">Ystad</div>
              <div className="text-sm text-gray-600">5-7 dagar</div>
            </Link>
            <Link href="/hassleholm" className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
              <div className="font-medium text-gray-900">Hässleholm</div>
              <div className="text-sm text-gray-600">5-7 dagar</div>
            </Link>
            <Link href="/karlskrona" className="bg-white hover:bg-orange-50 p-4 rounded-lg text-center transition-colors border border-gray-200 hover:border-orange-300">
              <div className="font-medium text-gray-900">Karlskrona</div>
              <div className="text-sm text-gray-600">5-7 dagar</div>
            </Link>
          </div>
          
          <div className="text-center">
            <Link href="/produkter" className="text-orange-500 hover:text-orange-600 font-medium">
              Se alla områden vi levererar till →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kontakta oss i Malmö
            </h2>
            <p className="text-lg text-gray-600">
              Har du frågor om tryckta kläder i Malmö? Vi hjälper dig gärna!
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Ditt namn"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="din@email.se"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="070-123 45 67"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meddelande *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Berätta om dina tryckbehov i Malmö..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`p-3 rounded-lg flex items-center gap-2 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className="text-sm">{submitStatus.message}</span>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
              >
                {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
              </button>
            </form>
            
            <div className="mt-6 text-xs text-gray-500">
              <p>✓ Svar inom 24 timmar</p>
              <p>✓ Personlig kontaktperson i Malmö</p>
              <p>✓ Konkurrenskraftiga priser</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Redo att börja trycka i Malmö?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Skapa dina egna tryckta kläder idag och få dem levererade till Malmö inom 5-7 dagar.
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
            <Link href="/lund" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Lund</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/helsingborg" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Helsingborg</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/landskrona" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Landskrona</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/trelleborg" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Trelleborg</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/ystad" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Ystad</div>
              <div className="text-xs text-gray-500">5-7 dagar</div>
            </Link>
            <Link href="/hassleholm" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">Hassleholm</div>
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
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product, products } from '@/data/products';
import { bulkProducts } from '@/data/bulk-products';
import { ProductSchemaMarkup } from '@/components/schema-markup';
import { useCart } from '@/contexts/CartContext';
import { submitForm, FormData, validateEmail } from '@/lib/form-utils';
import { Footer } from '@/components/footer';
import { 
  Heart, 
  Share2, 
  Star, 
  Truck, 
  Shield, 
  CreditCard, 
  CheckCircle, 
  Minus, 
  Plus,
  ShoppingCart,
  Palette,
  Ruler,
  Package,
  Award,
  Clock,
  Users,
  ThumbsUp,
  MessageCircle,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  X,
  AlertCircle
} from 'lucide-react';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.images.main);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specifications');
  
  // Quote form state
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '25-50 st',
    message: ''
  });
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteStatus, setQuoteStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  // Quote form handlers
  const handleQuoteInputChange = (field: string, value: string) => {
    setQuoteFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingQuote(true);
    setQuoteStatus({ type: null, message: '' });

    // Validate email
    if (!validateEmail(quoteFormData.email)) {
      setQuoteStatus({ type: 'error', message: 'Vänligen ange en giltig e-postadress.' });
      setIsSubmittingQuote(false);
      return;
    }

    try {
      const formSubmissionData: FormData = {
        name: quoteFormData.name,
        email: quoteFormData.email,
        company: quoteFormData.company,
        message: `Offertförfrågan för ${product.name}\nAntal: ${quoteFormData.quantity}\nMeddelande: ${quoteFormData.message}`,
        productId: product.id,
        productName: product.name,
        quantity: quoteFormData.quantity,
        form_type: 'quote',
        service_category: 'tryck_klader'
      };

      const result = await submitForm(formSubmissionData);
      
      if (result.success) {
        setQuoteStatus({ 
          type: 'success', 
          message: result.message + (result.reference ? ` (Referens: ${result.reference})` : '')
        });
        setQuoteFormData({ name: '', email: '', company: '', quantity: '25-50 st', message: '' });
      } else {
        setQuoteStatus({ type: 'error', message: result.message || 'Ett fel uppstod. Försök igen.' });
      }
    } catch (error) {
      console.error('Quote form submission error:', error);
      setQuoteStatus({ type: 'error', message: 'Ett fel uppstod. Försök igen.' });
    } finally {
      setIsSubmittingQuote(false);
    }
  };

  // Get relevant products (same category, excluding current product)
  const relevantProducts = bulkProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Mock reviews data with rating distribution
  const reviews = [
    {
      id: 1,
      name: "Anna Lindqvist",
      location: "Stockholm",
      rating: 5,
      comment: "Fantastisk kvalitet! Beställde t-shirts till vårt företag och alla blev supernöjda. Snabb leverans och professionellt tryck.",
      date: "2024-01-15",
      verified: true
    },
    {
      id: 2,
      name: "Marcus Eriksson",
      location: "Göteborg",
      rating: 5,
      comment: "Perfekt för vårt event! Designverktyget var enkelt att använda och resultatet blev bättre än förväntat. Rekommenderar starkt!",
      date: "2024-01-10",
      verified: true
    },
    {
      id: 3,
      name: "Lisa Johansson",
      location: "Malmö",
      rating: 5,
      comment: "Vi i föreningen tryckte tröjor till vår årsfest. Alla blev supernöjda med kvaliteten och priset. Kommer beställa igen!",
      date: "2024-01-08",
      verified: false
    },
    {
      id: 4,
      name: "Erik Andersson",
      location: "Uppsala",
      rating: 4,
      comment: "Bra kvalitet och snabb leverans. Designverktyget kunde vara lite mer intuitivt, men överlag nöjd.",
      date: "2024-01-05",
      verified: true
    }
  ];

  const averageRating = 4.8;
  const totalReviews = 127;
  
  // Rating distribution
  const ratingDistribution = {
    5: 89,
    4: 8,
    3: 2,
    2: 1,
    1: 0
  };

  // Mock compatibility data
  const compatibleProducts = [
    "T-shirt med eget tryck",
    "Hoodie med eget tryck", 
    "Keps med eget tryck",
    "Strumpor med eget tryck",
    "Telefonfodral med eget tryck",
    "Kaffemugg med eget tryck",
    "Tyngre kasse med eget tryck"
  ];

  const originalPrice = Math.round(product.price.base * 1.2);
  const discount = Math.round(((originalPrice - product.price.base) / originalPrice) * 100);

  return (
    <>
      <ProductSchemaMarkup product={product} />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-transparent">
          <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700 font-medium">
                Hem
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/products" className="text-gray-500 hover:text-gray-700 font-medium">
                Produkter
              </Link>
              <span className="text-gray-400">/</span>
              <Link href={`/kategori/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 hover:text-gray-700 font-medium">
                {product.category}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium">{product.name}</span>
            </div>
          </div>
        </nav>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column - Product Images */}
            <div className="lg:col-span-1 order-1">
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
                
                {/* REA Badge */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">
                  REA
                </div>
                
                {/* Bestseller Badge */}
                <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded text-sm font-bold">
                  Bestseller
                </div>
              </div>
              
              {/* Image Gallery */}
              <div className="mt-4">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === image 
                          ? 'border-orange-500 ring-2 ring-orange-200' 
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">
                  Bild {product.images.gallery.findIndex(img => img === selectedImage) + 1} av {product.images.gallery.length}
                </div>
              </div>
            </div>

            {/* Middle Column - Product Info & Purchase */}
            <div className="lg:col-span-1 order-2">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({totalReviews}) Lämna recension
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    Artikelnummer: {product.articleNumber || product.id.toUpperCase()}
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Leverans:</span> Lev. 5-7 dagar
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Frakt:</span> 49 kr <span className="text-blue-600 cursor-pointer">*Läs mer</span>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-orange-500">
                      {product.price.base} {product.price.currency}
                    </span>
                    <span className="text-base sm:text-lg text-gray-500 line-through">
                      {originalPrice} {product.price.currency}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    /st inkl moms | Spara {discount}% | Ord. pris. {originalPrice} {product.price.currency}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    Storlek
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 sm:px-4 py-2 border rounded-lg font-medium transition-colors text-sm sm:text-base ${
                          selectedSize === size
                            ? 'border-orange-500 bg-orange-50 text-orange-700'
                            : 'border-gray-300 hover:border-orange-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    Färg
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 sm:px-4 py-2 border rounded-lg font-medium transition-colors text-sm sm:text-base ${
                          selectedColor === color
                            ? 'border-orange-500 bg-orange-50 text-orange-700'
                            : 'border-gray-300 hover:border-orange-300'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Purchase */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg self-start">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors text-lg"
                      >
                        −
                      </button>
                      <span className="w-12 sm:w-16 text-center font-medium text-sm sm:text-base">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors text-lg"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 flex-1">
                      <button
                        onClick={() => {
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price.base,
                            currency: product.price.currency,
                            size: selectedSize,
                            color: selectedColor,
                            image: product.images.main,
                            category: product.category
                          });
                          // Show success message or notification
                          alert('Produkten har lagts till i varukorgen!');
                        }}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                      >
                        🛒 Lägg i varukorg
                      </button>
                      <Link 
                        href={`/design/upload?productId=${product.id}&size=${selectedSize}&color=${selectedColor}&quantity=${quantity}`}
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-colors text-center text-sm sm:text-base"
                      >
                        🎨 Börja designa
                      </Link>
                    </div>
                  </div>

                  {/* Stock & Favorite */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Finns i lager</span>
                    </div>
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`flex items-center gap-2 text-sm transition-colors ${
                        isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <span>{isFavorite ? '❤️' : '🤍'}</span>
                      Favorit
                    </button>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center flex-wrap gap-3 sm:gap-4">
                    <img 
                      src="/images/swish-logo.png" 
                      alt="Swish" 
                      className="h-6 w-auto"
                    />
                    <img 
                      src="/images/visa-mastercard-logo.png" 
                      alt="Visa Mastercard" 
                      className="h-6 w-auto"
                    />
                    <img 
                      src="/images/american-express-logo.png" 
                      alt="American Express" 
                      className="h-4 w-auto"
                    />
                    <img 
                      src="/images/Klarna_Payment_Badge.svg.png" 
                      alt="Klarna" 
                      className="h-6 w-auto"
                    />
                    <img 
                      src="/images/apple-pay-logo.png" 
                      alt="Apple Pay" 
                      className="h-6 w-auto"
                    />
                    <img 
                      src="/images/google-pay-logo.png" 
                      alt="Google Pay" 
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Trust Signals & Compatibility */}
            <div className="lg:col-span-1 order-3">
              <div className="space-y-6">
                {/* Trust Signals */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Snabb leverans</div>
                      <div className="text-sm text-gray-600">Vi levererar dina varor inom 5-7 dagar över hela Sverige.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">🛡️</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Prisgaranti</div>
                      <div className="text-sm text-gray-600">Alltid lägsta priset</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 text-sm">↩️</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">30 dagars returrätt</div>
                      <div className="text-sm text-gray-600">Både för dig som privatkund och för dig som företagskund.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">🔒</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Säker betalning</div>
                      <div className="text-sm text-gray-600">Vi arbetar endast med säkra betallösningar.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-600 text-sm">💳</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Betala med flexibel delbetalning</div>
                      <div className="text-sm text-blue-600 cursor-pointer">Läs mer →</div>
                    </div>
                  </div>
                </div>

                {/* Compatibility */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Produkten passar till
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    {compatibleProducts.slice(0, 5).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {item}
                      </div>
                    ))}
                    <button className="text-blue-600 text-sm mt-2">
                      Visa mer →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-8 sm:mt-16">
            <div className="bg-gray-100 border border-gray-300 rounded-t-lg">
              <nav className="-mb-px flex flex-wrap sm:flex-nowrap space-x-2 sm:space-x-8 px-2 sm:px-6 overflow-x-auto">
                {[
                  { id: 'specifications', label: 'Specifikationer' },
                  { id: 'description', label: 'Produktbeskrivning' },
                  { id: 'compatibility', label: 'Kompatibla produkter' },
                  { id: 'reviews', label: `Recensioner (${totalReviews})` }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 sm:py-4 px-2 sm:px-4 border-b-2 font-semibold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-gray-800 text-gray-800 bg-white'
                        : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-white border border-t-0 border-gray-300 rounded-b-lg p-4 sm:p-8">
              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                      Produktspecifikationer
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="py-3 px-4 bg-white rounded border border-gray-200">
                        <div className="font-semibold text-gray-700 mb-1">Kategori:</div>
                        <div className="text-gray-900 font-medium">{product.category}</div>
                      </div>
                      <div className="py-3 px-4 bg-white rounded border border-gray-200">
                        <div className="font-semibold text-gray-700 mb-1">Material:</div>
                        <div className="text-gray-900 font-medium">{product.material}</div>
                      </div>
                      <div className="py-3 px-4 bg-white rounded border border-gray-200">
                        <div className="font-semibold text-gray-700 mb-1">Tryckyta:</div>
                        <div className="text-gray-900 font-medium">{product.printArea}</div>
                      </div>
                      <div className="py-3 px-4 bg-white rounded border border-gray-200">
                        <div className="font-semibold text-gray-700 mb-1">Tillgängliga storlekar:</div>
                        <div className="text-gray-900 font-medium">{product.sizes.join(', ')}</div>
                      </div>
                      <div className="py-3 px-4 bg-white rounded border border-gray-200">
                        <div className="font-semibold text-gray-700 mb-1">Tillgängliga färger:</div>
                        <div className="text-gray-900 font-medium">{product.colors.join(', ')}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                      Funktioner
                    </h3>
                    <ul className="space-y-3 text-sm">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start bg-white p-3 rounded border border-gray-200">
                          <span className="text-gray-600 mr-3 mt-1">✓</span>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'description' && (
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Produktbeskrivning
                    </h3>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {product.description}
                    </div>
                  </div>
                  
                  {product.shortDescription && (
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        Kort beskrivning
                      </h4>
                      <p className="text-gray-700">
                        {product.shortDescription}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'compatibility' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Kompatibla produkter
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">T-shirt med eget tryck</h4>
                      <p className="text-sm text-gray-600">Perfekt komplement till din hoodie</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Keps med eget tryck</h4>
                      <p className="text-sm text-gray-600">Komplettera din look med en keps</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Strumpor med eget tryck</h4>
                      <p className="text-sm text-gray-600">Avsluta din outfit med tryckta strumpor</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Telefonfodral med eget tryck</h4>
                      <p className="text-sm text-gray-600">Skydda din telefon med stil</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Ryggsäck med eget tryck</h4>
                      <p className="text-sm text-gray-600">Bär dina saker i stil</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Muggar med eget tryck</h4>
                      <p className="text-sm text-gray-600">Drick din kaffe med personlig touch</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  {/* Rating Summary */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl font-bold text-gray-800 bg-white rounded-full w-16 h-16 flex items-center justify-center border border-gray-300">
                          {averageRating}
                        </div>
                        <div>
                          <div className="flex text-yellow-400 mb-2 text-xl">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>⭐</span>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            Baserat på {totalReviews} recensioner
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-800 mb-6 text-lg">
                        Betygsfördelning
                      </h4>
                      <div className="space-y-4">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center gap-4 bg-white p-4 rounded border border-gray-200">
                            <span className="text-sm w-12 font-semibold text-gray-700">{stars} stjärnor</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-4">
                              <div 
                                className="bg-gray-600 h-4 rounded-full"
                                style={{ width: `${ratingDistribution[stars as keyof typeof ratingDistribution]}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-700 w-12 font-bold text-right">
                              {ratingDistribution[stars as keyof typeof ratingDistribution]}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-gray-600 font-medium">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-900">{review.name}</span>
                                {review.verified && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                    Verifierad köpare
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">{review.location}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex text-yellow-400 mb-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i}>⭐</span>
                              ))}
                            </div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Relevant Products and Quote Form */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Relevanta produkter
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Relevant Products - Left Side */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relevantProducts.map((relevantProduct) => (
                    <Link
                      key={relevantProduct.id}
                      href={`/produkter/${relevantProduct.id}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
                    >
                      <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                        <img
                          src={relevantProduct.images.main}
                          alt={relevantProduct.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                          {relevantProduct.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2 flex-grow">
                          {relevantProduct.shortDescription}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-bold text-orange-500">
                            {relevantProduct.price.base} {relevantProduct.price.currency}
                          </span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                            BULK
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quote Form - Right Side */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Få offert
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Behöver du en anpassad offert för stora beställningar? Fyll i formuläret så återkommer vi inom 24 timmar.
                  </p>
                  
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Namn *
                      </label>
                      <input
                        type="text"
                        required
                        value={quoteFormData.name}
                        onChange={(e) => handleQuoteInputChange('name', e.target.value)}
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
                        value={quoteFormData.email}
                        onChange={(e) => handleQuoteInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="din@email.se"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Företag
                      </label>
                      <input
                        type="text"
                        value={quoteFormData.company}
                        onChange={(e) => handleQuoteInputChange('company', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Företagsnamn"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Antal produkter
                      </label>
                      <select 
                        value={quoteFormData.quantity}
                        onChange={(e) => handleQuoteInputChange('quantity', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="25-50 st">25-50 st</option>
                        <option value="51-100 st">51-100 st</option>
                        <option value="101-250 st">101-250 st</option>
                        <option value="251-500 st">251-500 st</option>
                        <option value="500+ st">500+ st</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meddelande
                      </label>
                      <textarea
                        rows={3}
                        value={quoteFormData.message}
                        onChange={(e) => handleQuoteInputChange('message', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Beskriv dina önskemål..."
                      ></textarea>
                    </div>

                    {/* Status Messages */}
                    {quoteStatus.type && (
                      <div className={`p-3 rounded-lg flex items-center gap-2 ${
                        quoteStatus.type === 'success' 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}>
                        {quoteStatus.type === 'success' ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        )}
                        <span className="text-sm">{quoteStatus.message}</span>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmittingQuote}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
                    >
                      {isSubmittingQuote ? 'Skickar...' : 'Skicka offertförfrågan'}
                    </button>
                  </form>
                  
                  <div className="mt-6 text-xs text-gray-500">
                    <p>✓ Svar inom 24 timmar</p>
                    <p>✓ Personlig kontaktperson</p>
                    <p>✓ Konkurrenskraftiga priser</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Lock, 
  Truck, 
  Shield, 
  CheckCircle,
  ArrowLeft,
  Loader2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import StripePaymentForm from '@/components/stripe-payment-form';
import ApplePayForm from '@/components/apple-pay-form';
import GooglePayForm from '@/components/google-pay-form';
import KlarnaPaymentForm from '@/components/klarna-payment-form';
import { trackBeginCheckout, trackPaymentMethod } from '@/lib/analytics';

interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  size?: string;
  color?: string;
  image: string;
  category: string;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

export default function CheckoutPage() {
  const { cartItems, getTotalPrice } = useCart();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    country: 'Sverige'
  });
  const [selectedPayment, setSelectedPayment] = useState<'stripe' | 'apple_pay' | 'google_pay' | 'klarna' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);

  useEffect(() => {
    // Cart is now managed by context
    setIsLoading(false);
    
    // Track begin checkout event
    if (cartItems.length > 0) {
      trackBeginCheckout(getTotalPrice(), cartItems.map(item => ({
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        quantity: item.quantity,
        price: item.price
      })));
    }
  }, [cartItems, getTotalPrice]);


  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!customerInfo.firstName.trim()) newErrors.firstName = 'Förnamn krävs';
    if (!customerInfo.lastName.trim()) newErrors.lastName = 'Efternamn krävs';
    if (!customerInfo.email.trim()) newErrors.email = 'E-post krävs';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Ogiltig e-postadress';
    }
    if (!customerInfo.phone.trim()) newErrors.phone = 'Telefon krävs';
    if (!customerInfo.address.trim()) newErrors.address = 'Adress krävs';
    if (!customerInfo.postalCode.trim()) newErrors.postalCode = 'Postnummer krävs';
    if (!customerInfo.city.trim()) newErrors.city = 'Stad krävs';
    if (!selectedPayment) newErrors.payment = 'Välj betalningsmetod';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePaymentMethodChange = (method: 'stripe' | 'apple_pay' | 'google_pay' | 'klarna') => {
    setSelectedPayment(method);
    // Track payment method selection
    trackPaymentMethod(method);
  };





  const handleStripeSuccess = (paymentIntentId: string) => {
    // Store order data for analytics
    localStorage.setItem('lastOrderTotal', getTotalPrice().toString());
    localStorage.setItem('lastOrderItems', JSON.stringify(cartItems));
    
    setPaymentSuccess(paymentIntentId);
    // Redirect to success page after a short delay
    setTimeout(() => {
      window.location.href = `/checkout/success?payment_intent=${paymentIntentId}`;
    }, 2000);
  };

  const handleStripeError = (error: string) => {
    setErrors({ payment: error });
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-orange-500 mx-auto mb-4" />
            <p className="text-gray-600">Laddar kassan...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (cartItems.length === 0) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Din varukorg är tom</h1>
            <p className="text-gray-600 mb-8">Lägg till produkter för att komma igång med din beställning.</p>
            <Link href="/produkter">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Fortsätt handla
              </Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
          <Link href="/cart" className="mb-4 sm:mb-0 sm:mr-4">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tillbaka till varukorg
            </Button>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Kassa</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Kontaktuppgifter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Förnamn *</Label>
                    <Input
                      id="firstName"
                      value={customerInfo.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={errors.firstName ? 'border-red-500' : ''}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Efternamn *</Label>
                    <Input
                      id="lastName"
                      value={customerInfo.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={errors.lastName ? 'border-red-500' : ''}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-postadress *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Telefonnummer *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle>Leveransadress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Adress *</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={errors.address ? 'border-red-500' : ''}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="postalCode">Postnummer *</Label>
                    <Input
                      id="postalCode"
                      value={customerInfo.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className={errors.postalCode ? 'border-red-500' : ''}
                    />
                    {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="city">Stad *</Label>
                    <Input
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={errors.city ? 'border-red-500' : ''}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">Land</Label>
                  <Input
                    id="country"
                    value={customerInfo.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    disabled
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Betalningsmetod</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Payment Method Selection */}
                <div className="space-y-3">
                  <div 
                    className={`border rounded-lg p-3 sm:p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'stripe' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePaymentMethodChange('stripe')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-6 sm:w-12 sm:h-8 flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/stripe-logo.png"
                          alt="Stripe"
                          width={48}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm sm:text-base">Kortbetalning</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Visa, Mastercard, American Express</p>
                      </div>
                      <div className="flex space-x-1 sm:space-x-2 flex-shrink-0">
                        <div className="w-12 h-6 sm:w-16 sm:h-8 flex items-center justify-center">
                          <Image
                            src="/images/visa-mastercard-logo.png"
                            alt="Visa Mastercard"
                            width={64}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <div className="w-6 h-4 sm:w-8 sm:h-5 flex items-center justify-center">
                          <Image
                            src="/images/american-express-logo.png"
                            alt="American Express"
                            width={32}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'apple_pay' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePaymentMethodChange('apple_pay')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-8 flex items-center justify-center">
                        <Image
                          src="/images/apple-pay-logo.png"
                          alt="Apple Pay"
                          width={48}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Apple Pay</h3>
                        <p className="text-sm text-gray-600">Snabb och säker betalning med Touch ID/Face ID</p>
                      </div>
                      <Badge variant="outline" className="text-gray-600 border-gray-600">
                        Snabb
                      </Badge>
                    </div>
                  </div>

                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'google_pay' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePaymentMethodChange('google_pay')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-8 flex items-center justify-center">
                        <Image
                          src="/images/google-pay-logo.png"
                          alt="Google Pay"
                          width={48}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Google Pay</h3>
                        <p className="text-sm text-gray-600">Snabb och säker betalning med Google</p>
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        Snabb
                      </Badge>
                    </div>
                  </div>

                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'klarna' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePaymentMethodChange('klarna')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-8 flex items-center justify-center">
                        <Image
                          src="/images/Klarna_Payment_Badge.svg.png"
                          alt="Klarna"
                          width={48}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Klarna</h3>
                        <p className="text-sm text-gray-600">Betala senare eller dela upp betalningen</p>
                      </div>
                      <Badge variant="outline" className="text-pink-600 border-pink-600">
                        Flexibel
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Stripe Payment Form */}
                {selectedPayment === 'stripe' && (
                  <StripePaymentForm
                    amount={getTotalPrice()}
                    currency="SEK"
                    items={cartItems}
                    customer={customerInfo}
                    onSuccess={handleStripeSuccess}
                    onError={handleStripeError}
                  />
                )}


                {selectedPayment === 'apple_pay' && (
                  <ApplePayForm
                    amount={getTotalPrice()}
                    currency="SEK"
                    items={cartItems}
                    customer={customerInfo}
                    onSuccess={handleStripeSuccess}
                    onError={handleStripeError}
                  />
                )}

                {selectedPayment === 'google_pay' && (
                  <GooglePayForm
                    amount={getTotalPrice()}
                    currency="SEK"
                    items={cartItems}
                    customer={customerInfo}
                    onSuccess={handleStripeSuccess}
                    onError={handleStripeError}
                  />
                )}

                {selectedPayment === 'klarna' && (
                  <KlarnaPaymentForm
                    amount={getTotalPrice()}
                    currency="SEK"
                    items={cartItems}
                    customer={customerInfo}
                    onSuccess={handleStripeSuccess}
                    onError={handleStripeError}
                  />
                )}

                {errors.payment && <p className="text-red-500 text-sm">{errors.payment}</p>}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ordersammanfattning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{item.name}</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-600">
                          {item.size && <span>Storlek: {item.size}</span>}
                          {item.color && <span>Färg: {item.color}</span>}
                        </div>
                        <p className="text-sm font-medium">Antal: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-sm">{item.price * item.quantity} SEK</p>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Antal artiklar:</span>
                    <span>{getTotalItems()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Frakt:</span>
                    <span className="text-green-600">Gratis</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Moms (25%):</span>
                    <span>{Math.round(getTotalPrice() * 0.2)} SEK</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Totalt:</span>
                    <span>{getTotalPrice()} SEK</span>
                  </div>
                </div>

                {!selectedPayment && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Välj en betalningsmetod för att fortsätta</p>
                  </div>
                )}

                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-3 w-3" />
                    <span>Säker betalning med SSL-kryptering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-3 w-3" />
                    <span>Snabb leverans 1-3 dagar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3" />
                    <span>Gratis retur inom 30 dagar</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

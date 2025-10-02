'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { trackPurchase } from '@/lib/analytics';

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get order details from URL params or session storage
    const sessionId = searchParams.get('session_id');
    const paymentIntentId = searchParams.get('payment_intent');
    
    if (sessionId || paymentIntentId) {
      // Get order details from localStorage
      const orderTotal = localStorage.getItem('lastOrderTotal') || '0';
      const orderItems = JSON.parse(localStorage.getItem('lastOrderItems') || '[]');
      
      setOrderDetails({
        orderId: sessionId || paymentIntentId,
        status: 'completed',
        total: orderTotal
      });

      // Track purchase event
      if (orderItems.length > 0) {
        trackPurchase({
          transaction_id: sessionId || paymentIntentId || '',
          value: parseFloat(orderTotal),
          currency: 'SEK',
          items: orderItems.map((item: any) => ({
            item_id: item.id,
            item_name: item.name,
            category: item.category || 'Clothing',
            quantity: item.quantity,
            price: item.price
          }))
        });
      }
    }
    
    // Clear cart and order data after successful payment
    localStorage.removeItem('cart');
    localStorage.removeItem('lastOrderTotal');
    localStorage.removeItem('lastOrderItems');
    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Laddar orderdetaljer...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Tack för din beställning!
            </h1>
            <p className="text-lg text-gray-600">
              Din betalning har genomförts framgångsrikt.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Orderdetaljer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderDetails && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ordernummer:</span>
                    <span className="font-medium">#{orderDetails.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-medium">Bekräftad</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Totalt:</span>
                    <span className="font-medium">{orderDetails.total} SEK</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Vad händer nu?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-500 mt-1" />
                <div className="text-left">
                  <h3 className="font-medium">Bekräftelsemail</h3>
                  <p className="text-sm text-gray-600">
                    Du kommer att få en bekräftelse via e-post inom några minuter.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-orange-500 mt-1" />
                <div className="text-left">
                  <h3 className="font-medium">Produktion & Leverans</h3>
                  <p className="text-sm text-gray-600">
                    Vi börjar trycka dina produkter inom 1-2 arbetsdagar. 
                    Leveranstid: 5-7 arbetsdagar.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-500 mt-1" />
                <div className="text-left">
                  <h3 className="font-medium">Spårning</h3>
                  <p className="text-sm text-gray-600">
                    Du får ett spårningsnummer via e-post när din order skickas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produkter">
                <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
                  Fortsätt handla
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link href="/">
                <Button variant="outline" className="w-full sm:w-auto">
                  Tillbaka till startsidan
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500">
              Har du frågor om din beställning?{' '}
              <Link href="/contact" className="text-orange-500 hover:text-orange-600">
                Kontakta oss
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Laddar...</p>
          </div>
        </div>
      </PageLayout>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  );
}

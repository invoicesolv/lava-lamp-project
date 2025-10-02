'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { getCurrentStripeKeys } from '@/lib/payment-config';

const stripeKeys = getCurrentStripeKeys();
const stripePromise = loadStripe(stripeKeys.publishableKey!);

interface KlarnaPaymentFormProps {
  amount: number;
  currency: string;
  items: any[];
  customer: any;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
}

interface KlarnaPaymentFormContentProps extends KlarnaPaymentFormProps {
  elementKey: number;
}

function KlarnaPaymentFormContent({ 
  amount, 
  currency, 
  items, 
  customer, 
  onSuccess, 
  onError,
  elementKey
}: KlarnaPaymentFormContentProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPaymentElementReady, setIsPaymentElementReady] = useState(false);

  // Add timeout for PaymentElement loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isPaymentElementReady) {
        console.warn('PaymentElement loading timeout');
        setError('Betalningsalternativen laddar för långsamt. Försök igen.');
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [isPaymentElementReady]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe not loaded');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Check if PaymentElement is mounted
      const paymentElement = elements.getElement('payment');
      if (!paymentElement) {
        throw new Error('Payment element not found. Please try again.');
      }

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
        },
        redirect: 'if_required'
      });

      if (error) {
        console.error('Payment confirmation error:', error);
        setError(error.message || 'Payment failed');
        onError(error.message || 'Payment failed');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent.id);
      }
    } catch (err) {
      console.error('Payment error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Payment failed';
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Klarna Betalning</h3>
          <p className="text-sm text-orange-700">
            Betala senare, dela på 3 eller 4 delar, eller betala direkt med Swish
          </p>
        </div>
        
        <div className="space-y-4">
          <PaymentElement 
            key={elementKey}
            options={{
              layout: 'tabs',
              paymentMethodOrder: ['klarna'],
              fields: {
                billingDetails: 'auto'
              }
            }}
            onReady={() => {
              console.log('PaymentElement is ready');
              setIsPaymentElementReady(true);
            }}
            onChange={(event) => {
              console.log('PaymentElement onChange:', event);
            }}
            onLoadError={(error) => {
              console.error('PaymentElement load error:', error);
              setError('Kunde inte ladda betalningsalternativ. Försök igen.');
            }}
          />
          
          {error && (
            <Alert className="border-red-200 bg-red-50">
              <XCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                {error}
              </AlertDescription>
            </Alert>
          )}
          
          <Button 
            type="submit" 
            disabled={!stripe || isLoading || !isPaymentElementReady}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Bearbetar betalning...
              </>
            ) : !isPaymentElementReady ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Laddar betalningsalternativ...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Betala med Klarna - {amount} SEK
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default function KlarnaPaymentForm(props: KlarnaPaymentFormProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [elementKey, setElementKey] = useState(0);

  useEffect(() => {
    let isMounted = true;
    
    // Create Klarna payment intent when component mounts
    const createKlarnaPaymentIntent = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/payments/create-klarna-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: props.amount * 100, // Convert to cents
            currency: props.currency,
            items: props.items,
            customer: props.customer
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create payment intent');
        }

        const { clientSecret: secret } = await response.json();
        console.log('Klarna clientSecret received:', secret);
        
        if (isMounted) {
          setClientSecret(secret);
          setElementKey(prev => prev + 1); // Force new element instance
        }
      } catch (err) {
        console.error('Error creating Klarna payment intent:', err);
        if (isMounted) {
          props.onError(err instanceof Error ? err.message : 'Failed to initialize payment');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    createKlarnaPaymentIntent();

    return () => {
      isMounted = false;
    };
  }, [props.amount, props.currency, props.items, props.customer, props.onError]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
        <span className="ml-2">Initialiserar Klarna betalning...</span>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <Alert className="border-red-200 bg-red-50">
        <XCircle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          Kunde inte initialisera Klarna betalning. Försök igen.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <KlarnaPaymentFormContent {...props} elementKey={elementKey} />
    </Elements>
  );
}

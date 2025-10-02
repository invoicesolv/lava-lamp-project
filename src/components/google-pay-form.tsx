'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, Smartphone } from 'lucide-react';
import { getCurrentStripeKeys } from '@/lib/payment-config';

const stripeKeys = getCurrentStripeKeys();
const stripePromise = loadStripe(stripeKeys.publishableKey!);

interface GooglePayFormProps {
  amount: number;
  currency: string;
  items: any[];
  customer: any;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
}

function GooglePayFormContent({ 
  amount, 
  currency, 
  items, 
  customer, 
  onSuccess, 
  onError 
}: GooglePayFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentRequest, setPaymentRequest] = useState<any>(null);
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    if (stripe) {
      console.log('Creating Google Pay payment request...');
      // Create payment request for Google Pay according to Stripe docs
      const pr = stripe.paymentRequest({
        country: 'SE',
        currency: currency.toLowerCase(),
        total: {
          label: 'Total',
          amount: Math.round(amount * 100),
        },
        requestPayerName: true,
        requestPayerEmail: true,
        requestPayerPhone: true,
        requestShipping: true,
        displayItems: items.map(item => ({
          label: item.name,
          amount: Math.round(item.price * item.quantity * 100),
        })),
      });

      // Check if Google Pay is available
      pr.canMakePayment().then((result) => {
        console.log('Google Pay canMakePayment result:', result);
        if (result) {
          console.log('Google Pay is available for payment!');
          setCanMakePayment(true);
          setPaymentRequest(pr);
        } else {
          console.log('Google Pay is not available for payment');
        }
      }).catch((error) => {
        console.error('Error checking Google Pay availability:', error);
      });

      // Handle payment method creation
      pr.on('paymentmethod', async (ev) => {
        try {
          setIsLoading(true);
          setError(null);

          // Create payment intent
          const response = await fetch('/api/payments/create-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              amount: amount * 100,
              currency,
              items,
              customer
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to create payment intent');
          }

          const { clientSecret } = await response.json();

          // Confirm payment with Google Pay
          const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            { payment_method: ev.paymentMethod.id },
            { handleActions: false }
          );

          if (confirmError) {
            ev.complete('fail');
            setError(confirmError.message || 'Payment failed');
            onError(confirmError.message || 'Payment failed');
          } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            ev.complete('success');
            onSuccess(paymentIntent.id);
          } else {
            ev.complete('fail');
            setError('Payment was not completed');
            onError('Payment was not completed');
          }
        } catch (err) {
          console.error('Google Pay payment error:', err);
          ev.complete('fail');
          const errorMessage = err instanceof Error ? err.message : 'Payment failed';
          setError(errorMessage);
          onError(errorMessage);
        } finally {
          setIsLoading(false);
        }
      });

      setPaymentRequest(pr);
    }
  }, [stripe, amount, currency, items, customer, onSuccess, onError]);

  if (!canMakePayment) {
    return (
      <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Google Pay inte tillgängligt</h3>
          <p className="text-sm text-orange-700">
            Ingen Google Pay-kompatibel enhet eller kort hittades. Använd en annan betalningsmetod.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="p-4 border border-gray-200 rounded-lg bg-white">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Google Pay</h3>
          <p className="text-sm text-gray-600">
            Snabb och säker betalning med Google
          </p>
        </div>
        
        <div className="space-y-4">
          {paymentRequest && (
            <PaymentRequestButtonElement
              options={{
                paymentRequest,
                style: {
                  paymentRequestButton: {
                    type: 'default',
                    theme: 'dark',
                    height: '48px',
                  },
                },
              }}
            />
          )}
          
          {error && (
            <Alert className="border-red-200 bg-red-50">
              <XCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                {error}
              </AlertDescription>
            </Alert>
          )}
          
          {isLoading && (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin text-orange-500 mr-2" />
              <span className="text-sm text-gray-600">Bearbetar Google Pay betalning...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GooglePayForm(props: GooglePayFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <GooglePayFormContent {...props} />
    </Elements>
  );
}

'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, Smartphone } from 'lucide-react';
import { getCurrentStripeKeys } from '@/lib/payment-config';

const stripeKeys = getCurrentStripeKeys();
const stripePromise = loadStripe(stripeKeys.publishableKey!);

interface ApplePayFormProps {
  amount: number;
  currency: string;
  items: any[];
  customer: any;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
}

function ApplePayFormContent({ 
  amount, 
  currency, 
  items, 
  customer, 
  onSuccess, 
  onError 
}: ApplePayFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentRequest, setPaymentRequest] = useState<any>(null);
  const [canMakePayment, setCanMakePayment] = useState(false);
  const [isApplePaySupported, setIsApplePaySupported] = useState(false);

  // Memoize the items array to prevent unnecessary re-renders
  const memoizedItems = useMemo(() => items, [items]);
  
  // Memoize the customer object to prevent unnecessary re-renders
  const memoizedCustomer = useMemo(() => customer, [customer]);

  // Use useCallback for the success handler
  const handleSuccess = useCallback((paymentIntentId: string) => {
    onSuccess(paymentIntentId);
  }, [onSuccess]);

  // Use useCallback for the error handler
  const handleError = useCallback((error: string) => {
    onError(error);
  }, [onError]);

  useEffect(() => {
    // Check if Apple Pay is supported
    const checkApplePaySupport = () => {
      console.log('Checking Apple Pay support...');
      console.log('User agent:', navigator.userAgent);
      console.log('ApplePaySession available:', !!(window as any).ApplePaySession);
      
      if (typeof window !== 'undefined' && (window as any).ApplePaySession) {
        console.log('Apple Pay is supported!');
        setIsApplePaySupported(true);
      } else {
        console.log('Apple Pay is not supported on this device/browser');
      }
    };

    checkApplePaySupport();
  }, []);

  useEffect(() => {
    if (stripe && isApplePaySupported) {
      // Create payment request for Apple Pay
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
        displayItems: memoizedItems.map(item => ({
          label: item.name,
          amount: Math.round(item.price * item.quantity * 100),
        })),
      });

      // Check if Apple Pay is available
      pr.canMakePayment().then((result) => {
        console.log('Apple Pay canMakePayment result:', result);
        if (result) {
          console.log('Apple Pay is available for payment!');
          setCanMakePayment(true);
          setPaymentRequest(pr);
        } else {
          console.log('Apple Pay is not available for payment');
        }
      }).catch((error) => {
        console.error('Error checking Apple Pay availability:', error);
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
              items: memoizedItems,
              customer: memoizedCustomer
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to create payment intent');
          }

          const { clientSecret } = await response.json();

          // Confirm payment with Apple Pay using confirmCardPayment
          const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            { payment_method: ev.paymentMethod.id },
            { handleActions: false }
          );

          if (confirmError) {
            ev.complete('fail');
            setError(confirmError.message || 'Payment failed');
            handleError(confirmError.message || 'Payment failed');
          } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            ev.complete('success');
            handleSuccess(paymentIntent.id);
          } else {
            ev.complete('fail');
            setError('Payment was not completed');
            handleError('Payment was not completed');
          }
        } catch (err) {
          console.error('Apple Pay payment error:', err);
          ev.complete('fail');
          const errorMessage = err instanceof Error ? err.message : 'Payment failed';
          setError(errorMessage);
          handleError(errorMessage);
        } finally {
          setIsLoading(false);
        }
      });

      setPaymentRequest(pr);
    }
  }, [stripe, amount, currency, memoizedItems, memoizedCustomer, handleSuccess, handleError, isApplePaySupported]);

  if (!isApplePaySupported) {
    return (
      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
        <div className="text-center">
          <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Apple Pay inte tillgängligt</h3>
          <p className="text-sm text-gray-600">
            Apple Pay kräver Safari på iOS eller macOS. Använd en annan betalningsmetod.
          </p>
        </div>
      </div>
    );
  }

  if (!canMakePayment) {
    return (
      <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Apple Pay inte tillgängligt</h3>
          <p className="text-sm text-orange-700">
            Ingen Apple Pay-kompatibel enhet eller kort hittades. Använd en annan betalningsmetod.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="p-4 border border-gray-200 rounded-lg bg-white">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Apple Pay</h3>
          <p className="text-sm text-gray-600">
            Snabb och säker betalning med Touch ID eller Face ID
          </p>
        </div>
        
        <div className="space-y-4">
          {paymentRequest && (
            <PaymentRequestButtonElement
              options={{
                paymentRequest,
                style: {
                  paymentRequestButton: {
                    type: 'buy',
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
              <span className="text-sm text-gray-600">Bearbetar Apple Pay betalning...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ApplePayForm(props: ApplePayFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <ApplePayFormContent {...props} />
    </Elements>
  );
}

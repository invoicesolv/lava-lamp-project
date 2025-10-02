'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import { getCurrentStripeKeys } from '@/lib/payment-config';

const stripeKeys = getCurrentStripeKeys();
const stripePromise = loadStripe(stripeKeys.publishableKey!);

interface StripePaymentFormProps {
  amount: number;
  currency: string;
  items: any[];
  customer: any;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
}

function PaymentForm({ amount, currency, items, customer, onSuccess, onError }: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'succeeded' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setStatus('processing');
    setErrorMessage('');

    try {
      // Create payment intent
      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          currency: currency.toLowerCase(),
          items: items,
          customer: customer
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Confirm payment with Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        }
      });

      if (error) {
        setStatus('failed');
        setErrorMessage(error.message || 'Payment failed');
        onError(error.message || 'Payment failed');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        setStatus('succeeded');
        onSuccess(paymentIntent.id);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setStatus('failed');
      setErrorMessage('An unexpected error occurred');
      onError('An unexpected error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            Kortuppgifter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 border border-gray-300 rounded-lg">
            <CardElement options={cardElementOptions} />
          </div>
          
          {status === 'processing' && (
            <div className="flex items-center justify-center mt-4 p-4 bg-blue-50 rounded-lg">
              <Loader2 className="h-5 w-5 animate-spin text-blue-600 mr-2" />
              <span className="text-blue-600">Bearbetar betalning...</span>
            </div>
          )}

          {status === 'succeeded' && (
            <div className="flex items-center justify-center mt-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-600">Betalning lyckades!</span>
            </div>
          )}

          {status === 'failed' && (
            <div className="flex items-center justify-center mt-4 p-4 bg-red-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-600">{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={!stripe || isProcessing || status === 'succeeded'}
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Bearbetar betalning...
              </>
            ) : status === 'succeeded' ? (
              'Betalning slutförd'
            ) : (
              `Betala ${amount} ${currency}`
            )}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}

export default function StripePaymentForm({ amount, currency, items, customer, onSuccess, onError }: StripePaymentFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm 
        amount={amount} 
        currency={currency} 
        items={items}
        customer={customer}
        onSuccess={onSuccess} 
        onError={onError} 
      />
    </Elements>
  );
}

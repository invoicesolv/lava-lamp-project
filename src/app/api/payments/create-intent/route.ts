import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { paymentConfig, validatePaymentConfig, getCurrentStripeKeys } from '@/lib/payment-config';

const configValidation = validatePaymentConfig();
if (!configValidation.isValid) {
  console.error('Payment configuration errors:', configValidation.errors);
}

// Get current Stripe keys (test or live based on environment)
const stripeKeys = getCurrentStripeKeys();

// Only initialize Stripe if we have valid credentials
let stripe: Stripe | null = null;
if (configValidation.isValid) {
  stripe = new Stripe(stripeKeys.secretKey!, {
    apiVersion: '2025-08-27.basil',
  });
}

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, items, customer } = await request.json();

    // Validate required fields
    if (!amount || !currency || !items || !customer) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { 
          error: 'Payment system not configured. Please set up Stripe credentials.',
          details: configValidation.errors
        },
        { status: 503 }
      );
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency.toLowerCase(),
      metadata: {
        customer_email: customer.email,
        customer_name: `${customer.firstName} ${customer.lastName}`,
        items: JSON.stringify(items.map((item: any) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })))
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });

  } catch (error) {
    console.error('Stripe payment intent creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

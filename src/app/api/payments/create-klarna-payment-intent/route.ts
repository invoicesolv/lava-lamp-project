import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { paymentConfig, validatePaymentConfig, getCurrentStripeKeys } from '@/lib/payment-config';

const configValidation = validatePaymentConfig();
if (!configValidation.isValid) {
  console.error('Payment configuration errors:', configValidation.errors);
}

// Get current Stripe keys (test or live based on environment)
const stripeKeys = getCurrentStripeKeys();
console.log('Using Stripe keys:', { 
  isLive: stripeKeys.isLive, 
  publishableKey: stripeKeys.publishableKey?.substring(0, 20) + '...' 
});

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

    // Create line items for Klarna
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: currency.toLowerCase(),
        product_data: {
          name: item.name,
          description: `${item.category} - ${item.size || ''} ${item.color || ''}`.trim(),
          images: [item.image],
          metadata: {
            product_id: item.id,
            category: item.category
          }
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Create payment intent with Klarna
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency.toLowerCase(),
      payment_method_types: ['klarna'],
      metadata: {
        customer_email: customer.email,
        customer_name: `${customer.firstName} ${customer.lastName}`,
        customer_phone: customer.phone,
        shipping_address: `${customer.address}, ${customer.postalCode} ${customer.city}`,
        items: JSON.stringify(items.map((item: any) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })))
      },
      shipping: {
        name: `${customer.firstName} ${customer.lastName}`,
        phone: customer.phone,
        address: {
          line1: customer.address,
          postal_code: customer.postalCode,
          city: customer.city,
          country: 'SE'
        }
      }
    });

    console.log('PaymentIntent created:', paymentIntent.id);

    // Note: For Klarna, we don't need to create a separate payment method
    // The PaymentElement will handle the payment method creation
    console.log('Klarna payment intent created successfully');

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });

  } catch (error) {
    console.error('Stripe Klarna payment intent creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create Klarna payment intent' },
      { status: 500 }
    );
  }
}

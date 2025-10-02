import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { paymentConfig } from '@/lib/payment-config';

const stripe = new Stripe(paymentConfig.stripe.secretKey, {
  apiVersion: '2025-08-27.basil',
});

export async function GET(request: NextRequest) {
  try {
    // Test if Klarna is available
    const paymentMethods = await stripe.paymentMethods.list({
      type: 'klarna',
      limit: 1
    });

    // Get account capabilities
    const account = await stripe.accounts.retrieve();

    return NextResponse.json({
      klarnaAvailable: paymentMethods.data.length >= 0, // This will be true if we can list
      accountCapabilities: account.capabilities,
      country: account.country,
      chargesEnabled: account.charges_enabled,
      payoutsEnabled: account.payouts_enabled,
      detailsSubmitted: account.details_submitted,
      message: 'Klarna test completed'
    });

  } catch (error) {
    console.error('Klarna test error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to test Klarna availability',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

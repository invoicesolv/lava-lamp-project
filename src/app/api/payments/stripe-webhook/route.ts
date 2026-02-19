import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getCurrentStripeKeys } from '@/lib/payment-config';

const stripeKeys = getCurrentStripeKeys();
const stripe = new Stripe(stripeKeys.secretKey!, {
  apiVersion: '2025-08-27.basil',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature || !webhookSecret) {
      console.error('[Stripe Webhook] Missing signature or webhook secret');
      return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('[Stripe Webhook] Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }

    console.log(`[Stripe Webhook] Received event: ${event.type}`);

    // Handle payment intent succeeded
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      
      console.log(`[Stripe Webhook] Payment succeeded: ${paymentIntent.id}`);
      
      try {
        // Extract order details from metadata
        const customerEmail = paymentIntent.metadata.customer_email;
        const customerName = paymentIntent.metadata.customer_name;
        const customerPhone = paymentIntent.metadata.customer_phone || '';
        const itemsMetadata = paymentIntent.metadata.items;
        
        if (!customerEmail || !itemsMetadata) {
          console.error('[Stripe Webhook] Missing required metadata:', {
            customerEmail,
            itemsMetadata
          });
          return NextResponse.json({ error: 'Missing required metadata' }, { status: 400 });
        }

        // Parse items from metadata
        const cartItems = JSON.parse(itemsMetadata);
        
        // Extract shipping address from metadata if available
        const shippingAddress = paymentIntent.metadata.shipping_address
          ? JSON.parse(paymentIntent.metadata.shipping_address)
          : {};
        
        // Extract company info from metadata if available
        const companyInfo = paymentIntent.metadata.company_info 
          ? JSON.parse(paymentIntent.metadata.company_info)
          : undefined;

        // Prepare order data for CRM sync
        const orderData = {
          orderId: paymentIntent.id,
          customerEmail,
          customerName,
          customerPhone,
          totalAmount: paymentIntent.amount / 100, // Convert from cents
          cartItems,
          shippingAddress,
          billingAddress: shippingAddress, // Use shipping as billing if no separate billing
          companyInfo,
          paymentMethod: 'stripe',
          paymentStatus: 'paid',
          timestamp: new Date().toISOString(),
          domain: 'tryckeget.se'
        };

        // Sync order to CRM - use absolute URL since relative URLs don't work in webhook context
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tryckeget.se';
        const crmResponse = await fetch(`${baseUrl}/api/orders/sync`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...orderData,
            sendConfirmationEmail: true
          })
        });

        if (!crmResponse.ok) {
          console.error('[Stripe Webhook] Failed to sync order to CRM:', crmResponse.status);
          return NextResponse.json({ error: 'Failed to sync order to CRM' }, { status: 500 });
        }

        const crmResult = await crmResponse.json();
        console.log(`[Stripe Webhook] Order synced to CRM successfully:`, crmResult);

        return NextResponse.json({ 
          message: 'Order processed successfully',
          orderId: paymentIntent.id,
          crmSync: crmResult
        });

      } catch (error) {
        console.error('[Stripe Webhook] Error processing payment:', error);
        return NextResponse.json({ error: 'Error processing payment' }, { status: 500 });
      }
    }

    // Handle other event types if needed
    console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
    return NextResponse.json({ message: 'Event received but not handled' });

  } catch (error) {
    console.error('[Stripe Webhook] Webhook error:', error);
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 });
  }
}

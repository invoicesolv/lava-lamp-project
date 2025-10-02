# Payment Integration Setup Guide

This guide will help you set up Stripe and Klarna payment integration for your Tryckeget e-commerce site.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Klarna Configuration
KLARNA_USERNAME=your_klarna_username
KLARNA_PASSWORD=your_klarna_password

# App Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NODE_ENV=development
```

## Stripe Setup

1. **Create a Stripe Account**
   - Go to [stripe.com](https://stripe.com)
   - Sign up for a free account
   - Complete the account setup

2. **Get API Keys**
   - Go to [Stripe Dashboard > Developers > API Keys](https://dashboard.stripe.com/apikeys)
   - Copy your **Publishable key** (starts with `pk_test_`)
   - Copy your **Secret key** (starts with `sk_test_`)

3. **Enable Klarna Payment Method**
   - Go to [Stripe Dashboard > Settings > Payment methods](https://dashboard.stripe.com/settings/payment_methods)
   - Enable **Klarna** payment method
   - Configure Klarna for your region (Sweden)
   - Test with Klarna's test credentials

4. **Set up Webhooks** (Optional for development)
   - Go to [Stripe Dashboard > Developers > Webhooks](https://dashboard.stripe.com/webhooks)
   - Add endpoint: `https://yourdomain.com/api/payments/stripe-webhook`
   - Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
   - Copy the webhook secret (starts with `whsec_`)

## Klarna Setup

1. **Create a Klarna Account**
   - Go to [klarna.com/merchants](https://www.klarna.com/merchants/)
   - Sign up for a merchant account
   - Complete the verification process

2. **Get API Credentials**
   - Go to [Klarna Merchant Portal](https://merchants.klarna.com/)
   - Navigate to API credentials section
   - Copy your **Username** and **Password**

3. **Test Environment**
   - Use Klarna's test environment for development
   - Test credentials are provided in the Klarna merchant portal

## Testing

### Stripe Test Cards
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **3D Secure**: 4000 0025 0000 3155

### Klarna Test
- Use any valid Swedish personal number for testing
- Test with small amounts (under 1000 SEK)

## Production Deployment

1. **Update Environment Variables**
   - Replace test keys with live keys
   - Update `NEXT_PUBLIC_BASE_URL` to your production domain
   - Set `NODE_ENV=production`

2. **Configure Webhooks**
   - Update webhook URLs to production endpoints
   - Test webhook delivery

3. **Security**
   - Never commit API keys to version control
   - Use environment variables for all sensitive data
   - Enable HTTPS in production

## Features Implemented

✅ **Stripe Integration**
- Payment intent creation
- Card payment processing
- Automatic payment methods
- Webhook handling

✅ **Stripe Klarna Integration**
- Klarna payment method via Stripe
- Buy now, pay later options
- Installment payments (3-4 parts)
- Swish integration
- Swedish market optimization

✅ **Checkout Flow**
- Customer information collection
- Address validation
- Payment method selection
- Order confirmation

✅ **Security**
- SSL encryption
- PCI compliance (via Stripe)
- Input validation
- Error handling

## Support

For issues with:
- **Stripe**: Check [Stripe Documentation](https://stripe.com/docs)
- **Klarna**: Check [Klarna Developer Portal](https://developers.klarna.com/)
- **This Implementation**: Check the code comments and error logs

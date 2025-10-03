# Production Deployment Guide

## ✅ Live Stripe Keys Activated

Your application is now configured with **LIVE Stripe keys** for production use.

### Current Configuration

**Environment Variables:**
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: `pk_live_...` (Your live publishable key)
- `STRIPE_SECRET_KEY`: `sk_live_...` (Your live secret key)
- `NODE_ENV`: `production`

### Payment Methods Available

✅ **Card Payments** (Visa, Mastercard, American Express)
✅ **Apple Pay** (iOS Safari, macOS Safari)
✅ **Google Pay** (Chrome, Android)
✅ **Klarna** (Buy now, pay later, 3-4 installments, Swish)

### Pre-Production Checklist

#### 1. **Stripe Dashboard Configuration**
- [ ] Verify live keys are active in Stripe Dashboard
- [ ] Enable all required payment methods:
  - [ ] Cards (Visa, Mastercard, Amex)
  - [ ] Apple Pay (for Sweden)
  - [ ] Google Pay (for Sweden)
  - [ ] Klarna (for Sweden)
- [ ] Set up webhooks for production
- [ ] Configure business information
- [ ] Add bank account for payouts

#### 2. **Domain Configuration**
- [ ] Update `NEXT_PUBLIC_BASE_URL` to your production domain
- [ ] Ensure HTTPS is enabled (required for Apple Pay/Google Pay)
- [ ] Update webhook URLs in Stripe Dashboard

#### 3. **Testing**
- [ ] Test all payment methods with real cards
- [ ] Test Apple Pay on iOS/macOS Safari
- [ ] Test Google Pay on Chrome/Android
- [ ] Test Klarna payment flow
- [ ] Verify webhook delivery

#### 4. **Security**
- [ ] Ensure `.env.local` is not committed to git
- [ ] Use environment variables in production
- [ ] Enable Stripe Radar fraud protection
- [ ] Set up proper error monitoring

### Production Environment Variables

For your production deployment, set these environment variables:

```bash
# Stripe Live Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key_here
STRIPE_SECRET_KEY=sk_live_your_secret_key_here

# App Configuration
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NODE_ENV=production
```

### Important Notes

⚠️ **Live Mode Warning:**
- All payments will be **REAL** and charged to customers
- Test thoroughly before going live
- Monitor transactions in Stripe Dashboard
- Set up proper error handling and logging

✅ **Payment Methods Status:**
- **Cards**: Ready for production
- **Apple Pay**: Requires HTTPS and Safari
- **Google Pay**: Works on Chrome and Android
- **Klarna**: Fully integrated via Stripe

### Support

- **Stripe Dashboard**: https://dashboard.stripe.com
- **Stripe Documentation**: https://stripe.com/docs
- **Apple Pay Setup**: https://docs.stripe.com/apple-pay
- **Google Pay Setup**: https://docs.stripe.com/google-pay
- **Klarna Integration**: https://docs.stripe.com/payments/klarna

---

**Status**: ✅ Ready for Production
**Last Updated**: $(date)
**Environment**: Production (Live Keys)

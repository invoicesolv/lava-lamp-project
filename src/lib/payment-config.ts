// Payment configuration
export const paymentConfig = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo',
    secretKey: process.env.STRIPE_SECRET_KEY || 'sk_test_demo',
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || 'whsec_demo',
    // Live keys (för produktion)
    publishableKeyLive: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE,
    secretKeyLive: process.env.STRIPE_SECRET_KEY_LIVE,
  },
  // Klarna is handled through Stripe, no separate credentials needed
  klarna: {
    enabled: true, // Klarna is enabled via Stripe
  },
  app: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  }
};

// Environment validation
export function validatePaymentConfig() {
  const errors: string[] = [];

  // Check if we have live keys configured
  const hasLiveKeys = !!(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE && process.env.STRIPE_SECRET_KEY_LIVE);
  const isLiveKey = process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_');

  if (hasLiveKeys || isLiveKey) {
    // Using live keys - validate they are properly configured
    const publishableKey = hasLiveKeys ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const secretKey = hasLiveKeys ? process.env.STRIPE_SECRET_KEY_LIVE : process.env.STRIPE_SECRET_KEY;
    
    if (!publishableKey || !publishableKey.startsWith('pk_live_')) {
      errors.push('Live NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is required and must start with pk_live_');
    }
    
    if (!secretKey || !secretKey.startsWith('sk_live_')) {
      errors.push('Live STRIPE_SECRET_KEY is required and must start with sk_live_');
    }
  } else {
    // Using test keys - validate they are configured
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === 'pk_test_demo') {
      errors.push('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is required');
    }
    
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_demo') {
      errors.push('STRIPE_SECRET_KEY is required');
    }
  }
  
  // Klarna credentials not needed when using Stripe's Klarna integration

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Helper function to get current environment keys
export function getCurrentStripeKeys() {
  // Always use live keys if they are available, otherwise fall back to test keys
  const hasLiveKeys = !!(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE && process.env.STRIPE_SECRET_KEY_LIVE);
  const isLiveKey = process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_');
  
  return {
    publishableKey: hasLiveKeys 
      ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE
      : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: hasLiveKeys 
      ? process.env.STRIPE_SECRET_KEY_LIVE
      : process.env.STRIPE_SECRET_KEY,
    isLive: hasLiveKeys || isLiveKey
  };
}

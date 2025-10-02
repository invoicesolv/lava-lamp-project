// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-6VHSN8D8L9', {
      page_path: url,
    });
  }
};

// Track purchase events
export const trackPurchase = (transactionData: {
  transaction_id: string;
  value: number;
  currency: string;
  items: Array<{
    item_id: string;
    item_name: string;
    category: string;
    quantity: number;
    price: number;
  }>;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionData.transaction_id,
      value: transactionData.value,
      currency: transactionData.currency,
      items: transactionData.items,
    });
  }
};

// Track add to cart events
export const trackAddToCart = (item: {
  item_id: string;
  item_name: string;
  category: string;
  quantity: number;
  price: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'SEK',
      value: item.price * item.quantity,
      items: [item],
    });
  }
};

// Track begin checkout events
export const trackBeginCheckout = (value: number, items: Array<{
  item_id: string;
  item_name: string;
  category: string;
  quantity: number;
  price: number;
}>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'SEK',
      value: value,
      items: items,
    });
  }
};

// Track payment method selection
export const trackPaymentMethod = (paymentMethod: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'select_payment_method', {
      payment_method: paymentMethod,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

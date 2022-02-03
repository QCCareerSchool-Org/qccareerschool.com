import type { Enrollment } from '../models/enrollment';

type FBQ = {
  (action: 'track', type: 'PageView' | 'Lead'): void;
  (action: 'track', type: 'Purchase', params: { value: number; currency: string }): void;
  (action: 'trackCustom', type: 'VirtualPageView', params: { url: string }): void;
};

declare global {
  interface Window {
    fbq?: FBQ;
  }
}

// log the page view with a specific URL
export const fbqPageview = (url: string): void => {
  window.fbq?.('trackCustom', 'VirtualPageView', { url });
};

// log the conversion
export const fbqLead = (): void => {
  window.fbq?.('track', 'Lead');
};

// log a sale
export const fbqSale = (enrollment: Enrollment): void => {
  window.fbq?.('track', 'Purchase', { value: enrollment.cost, currency: enrollment.currencyCode });
};

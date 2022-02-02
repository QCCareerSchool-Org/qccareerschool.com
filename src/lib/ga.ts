import Big from 'big.js';

import type { Enrollment } from '../models/enrollment';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// log the page view with a specific URL
export const gaPageview = (url: string): void => {
  window.gtag?.('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url, // eslint-disable-line camelcase
  });
};

// log an event
export const gaEvent = (action: string, params?: unknown): void => {
  window.gtag?.('event', action, params);
};

const precision = 2;

export const gaSale = (enrollment: Enrollment): void => {
  gaEvent('purchase', {
    transaction_id: enrollment.id, // eslint-disable-line camelcase
    affiliation: enrollment.school,
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    tax: 0,
    shipping: 0,
    items: enrollment.courses.map(c => ({
      id: c.code, // eslint-disable-line camelcase
      name: c.name, // eslint-disable-line camelcase
      price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
      quantity: 1,
    })),
  });
};

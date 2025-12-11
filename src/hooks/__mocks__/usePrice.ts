import type { PriceResult } from '@/models/price';

const defaultValue: PriceResult = {
  countryCode: 'CA',
  currency: {
    code: 'CAD',
    symbol: '$',
    name: 'Canadian dollars',
    exchangeRate: 1,
  },
  disclaimers: [],
  notes: [],
  noShipping: true,
  courses: [],

  cost: 0,
  multiCourseDiscount: 0,
  promoDiscount: 0,
  discountedCost: 0,
  plans: {
    full: {
      discount: 0,
      deposit: 0,
      installmentSize: 0,
      installments: 0,
      remainder: 0,
      total: 0,
    },
    part: {
      discount: 0,
      deposit: 0,
      installmentSize: 0,
      installments: 0,
      remainder: 0,
      total: 0,
    },
  },
};

export const usePrice = jest.fn(() => defaultValue);

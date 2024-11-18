import { Big } from 'big.js';

export const formatPrice = (amount: number | Big): string => {
  const s = amount.toFixed(2);
  if (s.endsWith('.00')) {
    return s.slice(0, -3);
  }
  return s;
};

import { useEffect, useState } from 'react';

import { lookupPrices } from '../lib/lookupPrices';
import type { PriceResult } from '../models/price';

export const usePrice = (courses: string[], countryCode: string, provinceCode: string | null): PriceResult | undefined => {
  const [ state, dispatch ] = useState<PriceResult>();

  useEffect(() => {
    lookupPrices(courses, countryCode, provinceCode).then(p => {
      dispatch(p);
    }).catch(() => {
      dispatch(undefined);
    });
  }, [ courses, countryCode, provinceCode ]);

  return state;
};

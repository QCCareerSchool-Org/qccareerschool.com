import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

import { getQueryString } from '../functions';
import { Price } from '../models/price';

export const usePrice = (courses: Array<string | string[]>, countryCode?: string, provinceCode?: string | null): Price[] => {
  const [ price, setPrice ] = useState<Price[]>([]);

  useEffect(() => {
    if (countryCode) {
      const fetchPrices = async (): Promise<void> => {
        const url = 'https://api.qccareerschool.com/prices';
        const promises = courses.map(async c => {
          const params = { courses: Array.isArray(c) ? c : [ c ], countryCode, provinceCode };
          const queryString = getQueryString(params);
          return fetch(`${url}?${queryString}`);
        });
        try {
          const results = await Promise.all(promises);
          setPrice(await Promise.all<Price>(results.map(async r => r.json())));
        } catch (err) {
          console.error('Unable to look up prices', err);
        }
      };

      fetchPrices().catch(() => { /* empty */ });
    }
  }, [ countryCode, provinceCode, courses ]);

  return price;
};

import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

import { getQueryString } from '../functions';
import { Price } from '../models/price';

export const usePrice = (courses: Array<string | string[]>, countryCode?: string, provinceCode?: string | null) => {
  const [ price, setPrice ] = useState<Price[]>([]);

  useEffect(() => {
    if (countryCode) {
      fetchPrices();
    }
  }, [ countryCode, provinceCode ]);

  async function fetchPrices() {
    const url = 'https://api.qccareerschool.com/prices';
    const promises = courses.map(c => {
      const params = { courses: Array.isArray(c) ? c : [ c ], countryCode, provinceCode };
      const queryString = getQueryString(params);
      return fetch(`${url}?${queryString}`);
    });
    try {
      const results = await Promise.all(promises);
      setPrice(await Promise.all<Price>(results.map(r => r.json())));
    } catch (err) {
      console.error('Unable to look up prices', err);
    }
  }

  return price;
};

import fetch from 'isomorphic-unfetch';

import { PriceResult } from '../models/price';
import { createQueryString } from './querystring';

export const lookupPrices = async (courses: string[], countryCode: string, provinceCode: string | null): Promise<PriceResult> => {
  const data = provinceCode ? { courses, countryCode, provinceCode } : { courses, countryCode };
  const url = 'https://api.qccareerschool.com/prices?' + createQueryString(data);
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw Error('Unable to fetch prices');
  }
  return response.json();
};

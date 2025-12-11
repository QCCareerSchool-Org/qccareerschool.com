import type { PriceResult } from '../models/price';

export const lookupPrices = async (courses: string[], countryCode: string, provinceCode: string | null): Promise<PriceResult> => {
  const searchParams = new URLSearchParams({ countryCode });
  for (const c of courses) {
    searchParams.append('courses', c);
  }
  if (provinceCode) {
    searchParams.append('provinceCode', provinceCode);
  }
  const url = `https://api.qccareerschool.com/prices?'${searchParams.toString()}`;
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw Error('Unable to fetch prices');
  }
  return response.json() as unknown as Promise<PriceResult>;
};

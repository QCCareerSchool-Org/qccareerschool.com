import fetch from 'isomorphic-unfetch';

import { Province } from '../models/province';

export const fetchProvinces = async (countryCode: string): Promise<Province[]> => {
  const url = `https://api.qccareerschool.com/geoLocation/provinces?countryCode=${encodeURIComponent(countryCode)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error('Unable to retreive provinces');
  }
  return response.json();
};

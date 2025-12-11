import type { Location } from '@/models/location';

const defaultValue: Location = { countryCode: 'CA', provinceCode: 'ON' };

export const useLocation = jest.fn(() => defaultValue);

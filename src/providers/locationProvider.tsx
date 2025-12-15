import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import type { Location } from '../models/location';

const defaultLocation: Location = { countryCode: 'US', provinceCode: 'MD' };

// better to keep these separate, rather than combining in an array or object
export const LocationStateContext = createContext<Location | undefined>(undefined);
export const LocationDispatchContext = createContext<((location: Location) => void) | undefined>(undefined);

export const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ location, setLocation ] = useState<Location>(defaultLocation);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch('https://api.qccareerschool.com/geoLocation/ip');
      const data = await response.json() as { countryCode: string; provinceCode: string | null };
      setLocation({ countryCode: data.countryCode, provinceCode: data.provinceCode });
    };
    fetchData().catch(() => { /* empty */ });
  }, []);

  return (
    <LocationStateContext.Provider value={location}>
      <LocationDispatchContext.Provider value={setLocation}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  );
};

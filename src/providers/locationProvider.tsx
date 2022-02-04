import PropTypes from 'prop-types';
import { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';

import { Location } from '../models/location';

const defaultLocation: Location = { countryCode: 'US', provinceCode: 'MD' };

// better to keep these separate, rather than combining in an array or object
export const LocationStateContext = createContext<Location | undefined>(undefined);
export const LocationDispatchContext = createContext<((location: Location) => void) | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const LocationProvider = ({ children }: Props): ReactElement => {
  const [ location, setLocation ] = useState<Location>(defaultLocation);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch('https://api.qccareerschool.com/geoLocation/ip');
      const data = await response.json();
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

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

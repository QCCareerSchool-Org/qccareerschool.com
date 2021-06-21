import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

interface Location {
  countryCode: string;
  provinceCode: string | null;
}

const defaultLocation = { countryCode: 'US', provinceCode: 'MD' };

// better to keep these separate, rather than combining in an array or object
export const LocationStateContext = React.createContext<Location | undefined>(undefined);
export const LocationDispatchContext = React.createContext<(location: Location) => void>(() => { /* */ });

export const LocationProvider: React.FC = ({ children }) => {
  const [ location, setLocation ] = useState<Location>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://api.qccareerschool.com/geoLocation/ip');
        const data = await response.json();
        setLocation({ countryCode: data.countryCode, provinceCode: data.provinceCode });
      } catch (err) {
        setLocation(defaultLocation);
      }
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

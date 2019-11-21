import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

interface Location {
  countryCode: string;
  provinceCode: string | null;
}

const defaultLocation = { countryCode: 'US', provinceCode: 'MD' };

// better to keep these separate, rather than combining in an array or object
export const LocationStateContext = React.createContext<Location>(defaultLocation);
export const LocationDispatchContext = React.createContext<(location: Location) => void>(() => { /* */ });

export const LocationProvider: React.FC = ({ children }) => {
  const [ location, setLocation ] = useState<Location>(defaultLocation);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.qccareerschool.com/geoLocation/ip');
      const data = await response.json();
      setLocation({ countryCode: data.countryCode, provinceCode: data.provinceCode });
    })();
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

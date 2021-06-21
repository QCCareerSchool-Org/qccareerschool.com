import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export const ScreenWidthContext = React.createContext<number>(0);

export const ScreenWidthProvider: React.FC = ({ children }) => {
  const [ screenWidth, setScreenWidth ] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = (): void => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

ScreenWidthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

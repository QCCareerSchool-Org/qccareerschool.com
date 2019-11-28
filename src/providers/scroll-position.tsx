import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export const ScrollPositionContext = React.createContext<number>(0);

export const ScrollPositionProvider: React.FC = ({ children }) => {
  const [ scrollPosition, setScrollPosition ] = useState(0);

  useEffect(() => {
    setScrollPosition(window.pageYOffset);
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollPositionContext.Provider value={scrollPosition}>
      {children}
    </ScrollPositionContext.Provider>
  );
};

ScrollPositionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import PropTypes from 'prop-types';
import { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';

export const ScrollPositionContext = createContext<number>(0);

type Props = {
  children: ReactNode;
};

export const ScrollPositionProvider = ({ children }: Props): ReactElement => {
  const [ scrollPosition, setScrollPosition ] = useState(0);

  useEffect(() => {
    setScrollPosition(window.pageYOffset);
    const handleScroll = (): void => setScrollPosition(window.pageYOffset);
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

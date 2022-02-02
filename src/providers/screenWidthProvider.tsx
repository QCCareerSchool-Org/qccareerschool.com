import PropTypes from 'prop-types';
import { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';

export const ScreenWidthContext = createContext<number>(0);

type Props = {
  children: ReactNode;
};

export const ScreenWidthProvider = ({ children }: Props): ReactElement => {
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

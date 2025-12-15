import type { FC, PropsWithChildren } from 'react';
import { createContext } from 'react';

import { useWindowListener } from '../hooks/useWindowListener';

export const ScreenWidthContext = createContext<number | undefined>(undefined);

const valueSelector = (w: Window) => w.innerWidth;

export const ScreenWidthProvider: FC<PropsWithChildren> = ({ children }) => {
  const screenWidth = useWindowListener('resize', valueSelector, 0);

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

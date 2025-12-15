import type { FC, PropsWithChildren } from 'react';
import { createContext } from 'react';

import { useWindowListener } from '../hooks/useWindowListener';

export const ScrollPositionContext = createContext<number | undefined>(0);

const valueSelector = (w: Window) => w.pageYOffset;

export const ScrollPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const scrollPosition = useWindowListener('scroll', valueSelector, 0);

  return (
    <ScrollPositionContext.Provider value={scrollPosition}>
      {children}
    </ScrollPositionContext.Provider>
  );
};

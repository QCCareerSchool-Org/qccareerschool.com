import type { FC, PropsWithChildren } from 'react';

import { LocationProvider } from './locationProvider';
import { ScreenWidthProvider } from './screenWidthProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <LocationProvider>
    <ScreenWidthProvider>
      <ScrollPositionProvider>
        {children}
      </ScrollPositionProvider>
    </ScreenWidthProvider>
  </LocationProvider>
);

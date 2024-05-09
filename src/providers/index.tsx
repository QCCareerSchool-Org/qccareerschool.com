import { ReactElement, ReactNode } from 'react';
import { LocationProvider } from './locationProvider';
import { ScreenWidthProvider } from './screenWidthProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props): ReactElement => (
  <LocationProvider>
    <ScreenWidthProvider>
      <ScrollPositionProvider>
        {children}
      </ScrollPositionProvider>
    </ScreenWidthProvider>
  </LocationProvider>
);

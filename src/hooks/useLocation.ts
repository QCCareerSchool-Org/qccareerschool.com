import { useContext } from 'react';

import type { Location } from '../models/location';
import { LocationStateContext } from '../providers/locationProvider';

export const useLocation = (): Location | null => {
  const context = useContext(LocationStateContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

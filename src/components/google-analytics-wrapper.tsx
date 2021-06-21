import React, { useEffect } from 'react';

import { initGA, logPageView } from '../ga';

export const GoogleAnalyticsWrapper: React.FC = ({ children }) => {
  useEffect(() => {
    if (!window.location.host.startsWith('localhost')) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!(window as any).GA_INITIALIZED) {
        initGA();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, []);

  return <>{children}</>;
};

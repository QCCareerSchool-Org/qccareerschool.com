import { useEffect } from 'react';
import { initGA, logPageView } from '../ga';

export const GoogleAnalyticsWrapper: React.FC = ({ children }) => {
  useEffect(() => {
    if (!window.location.host.startsWith('localhost')) {
      if (!(window as any).GA_INITIALIZED) {
        initGA();
        (window as any).GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, []);

  return <>{children}</>;
};

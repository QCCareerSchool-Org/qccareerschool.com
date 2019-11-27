import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

import { initGA, logPageView } from '../ga';

export const DefaultLayout: React.FC = ({ children }) => {
  useEffect(() => {
    console.log(window.location.host);
    if (!window.location.host.startsWith('localhost')) {
      if (!(window as any).GA_INITIALIZED) {
        initGA();
        (window as any).GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, []);

  return (
    <div className="d-flex flex-column vh-100">
      <Header className="flex-shrink-0 fixed-top" />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

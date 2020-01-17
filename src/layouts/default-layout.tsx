import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../components/footer';
import { GoogleAnalyticsWrapper } from '../components/google-analytics-wrapper';
import { Header } from '../components/header';

export const DefaultLayout: React.FC = ({ children }) => (
  <GoogleAnalyticsWrapper>
    <div className="d-flex flex-column vh-100">
      <Header className="flex-shrink-0 fixed-top" />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  </GoogleAnalyticsWrapper>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

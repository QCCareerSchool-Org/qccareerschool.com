import PropTypes from 'prop-types';
import React from 'react';

import { GoogleAnalyticsWrapper } from '../components/google-analytics-wrapper';

import './monospace.scss';

export const MonospaceLayout: React.FC = ({ children }) => (
  <GoogleAnalyticsWrapper>
    <div className="d-flex flex-column vh-100">
      <main className="monospace flex-shrink-0">
        {children}
      </main>
    </div>
  </GoogleAnalyticsWrapper>
);

MonospaceLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

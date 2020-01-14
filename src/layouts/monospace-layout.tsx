import PropTypes from 'prop-types';
import React from 'react';

import './monospace.scss';

export const MonospaceLayout: React.FC = ({ children }) => (
  <div className="d-flex flex-column vh-100">
    <main className="monospace flex-shrink-0">
      {children}
    </main>
  </div>
);

MonospaceLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

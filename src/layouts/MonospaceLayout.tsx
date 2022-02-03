import PropTypes from 'prop-types';
import { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MonospaceLayout = ({ children }: Props): ReactElement => (
  <div className="d-flex flex-column vh-100">
    <main className="monospace flex-shrink-0">
      {children}
    </main>
  </div>
);

MonospaceLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

import PropTypes from 'prop-types';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const DefaultLayout: React.FC = ({ children }) => (
  <div className="d-flex flex-column vh-100">
    <Header className="flex-shrink-0 fixed-top" />
    <main className="flex-shrink-0">
      {children}
    </main>
    <Footer className="mt-auto" />
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

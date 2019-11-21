import PropTypes from 'prop-types';

import 'bootstrap/scss/bootstrap.scss';
import './profile-layout.scss';

export const ProfileLayout: React.FC = ({ children }) => (
  <div>
    {children}
  </div>
);

ProfileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

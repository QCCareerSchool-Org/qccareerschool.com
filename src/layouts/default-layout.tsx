import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

type Props = {
  noHero?: boolean;
};

export const DefaultLayout: React.FC<Props> = ({ noHero, children }) => (
  <>
    <div className="d-flex flex-column vh-100">
      <Header noHero={noHero} className="flex-shrink-0 fixed-top" />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  </>
);

DefaultLayout.propTypes = {
  noHero: PropTypes.bool,
};

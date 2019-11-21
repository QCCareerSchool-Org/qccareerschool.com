/**
 * This is the layout that wraps pages
 */

import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';
import { ScrollPositionProvider } from '../providers/scroll-position';

import Helmet from 'react-helmet';
import './default-layout.scss';

export const DefaultLayout: React.FC = ({ children }) => (
  <LocationProvider>
    <ScreenWidthProvider>
      <ScrollPositionProvider>
        <Helmet link={[ { rel: 'manifest', href: 'manifest.json' } ]} />
        <div className="d-flex flex-column vh-100">
          <Header className="flex-shrink-0 fixed-top" />
          <main className="flex-shrink-0">
            {children}
          </main>
          <Footer className="mt-auto" />
        </div>
      </ScrollPositionProvider>
    </ScreenWidthProvider>
  </LocationProvider>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

import App from 'next/app';
import Head from 'next/head';

import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';
import { ScrollPositionProvider } from '../providers/scroll-position';

import '../style.scss';

export default class QCApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <LocationProvider>
        <ScreenWidthProvider>
          <ScrollPositionProvider>
            <Component {...pageProps} />
          </ScrollPositionProvider>
        </ScreenWidthProvider>
      </LocationProvider>
    );
  }
}

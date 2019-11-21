import App, { AppContext, AppInitialProps } from 'next/app';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';
import { ScrollPositionProvider } from '../providers/scroll-position';

export default class QCApp extends App {
  // public static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   return { pageProps };
  // }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <LocationProvider>
        <ScreenWidthProvider>
          <ScrollPositionProvider>
            <Helmet link={[ { rel: 'manifest', href: 'manifest.json' } ]} />
            <Component {...pageProps} />
          </ScrollPositionProvider>
        </ScreenWidthProvider>
      </LocationProvider>
    );
  }
}

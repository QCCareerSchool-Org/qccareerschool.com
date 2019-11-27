import App, { AppContext, AppInitialProps } from 'next/app';
import Head from 'next/head';

import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';
import { ScrollPositionProvider } from '../providers/scroll-position';

import '../style.scss';

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
            <Head>
              <link rel="manifest" href="/manifest.json" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600|Open+Sans:300,400&display=swap" />
            </Head>
            <Component {...pageProps} />
          </ScrollPositionProvider>
        </ScreenWidthProvider>
      </LocationProvider>
    );
  }
}

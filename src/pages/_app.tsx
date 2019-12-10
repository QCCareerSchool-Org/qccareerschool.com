
import App from 'next/app';

import { AuthProvider } from '../providers/auth';
import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';
import { ScrollPositionProvider } from '../providers/scroll-position';

import { initGA, logPageView } from '../ga';

import '../style.scss';

export default class QCApp extends App {
  public componentDidMount() {
    console.log(window.location.host);
    if (!window.location.host.startsWith('localhost')) {
      if (!(window as any).GA_INITIALIZED) {
        initGA();
        (window as any).GA_INITIALIZED = true;
      }
      logPageView();
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <LocationProvider>
          <ScreenWidthProvider>
            <ScrollPositionProvider>
              <Component {...pageProps} />
            </ScrollPositionProvider>
          </ScreenWidthProvider>
        </LocationProvider>
      </AuthProvider>
    );
  }
}

import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { AuthProvider } from '../providers/auth';
import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';
import { ScrollPositionProvider } from '../providers/scroll-position';
import { makeStore } from '../store';

import '../style.scss';

interface Props {
  store: Store;
}

class QCApp extends App<Props> {
  public render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <AuthProvider>
          <LocationProvider>
            <ScreenWidthProvider>
              <ScrollPositionProvider>
                <Component {...pageProps} />
              </ScrollPositionProvider>
            </ScreenWidthProvider>
          </LocationProvider>
        </AuthProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(QCApp);

import { NextPage } from 'next';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { ReactElement, ReactNode, useEffect } from 'react';

import { DefaultLayout } from '../layouts/default-layout';
import { AuthProvider } from '../providers/auth';
import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';
import { ScrollPositionProvider } from '../providers/scroll-position';

import '../style.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const QCApp = ({ Component, pageProps }: AppPropsWithLayout): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      // gaPageview(url);
      // uetPageview(url);
      // fbqPageview(url);
      // pardotPageview(url);
    };

    // When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ router ]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <AuthProvider>
      <LocationProvider>
        <ScreenWidthProvider>
          <ScrollPositionProvider>
            {/* {getLayout(<Component {...pageProps} />)} */}
            <Component {...pageProps} />
          </ScrollPositionProvider>
        </ScreenWidthProvider>
      </LocationProvider>
    </AuthProvider>
  );
};

export const reportWebVitals = ({ id, name, label, value }: NextWebVitalsMetric): void => {
  // // Use `window.gtag` if you initialized Google Analytics as this example:
  // // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
  // window.gtag('event', name, {
  //   // eslint-disable-next-line camelcase
  //   event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
  //   value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
  //   // eslint-disable-next-line camelcase
  //   event_label: id, // id unique to current page load
  //   // eslint-disable-next-line camelcase
  //   non_interaction: true, // avoids affecting bounce rate.
  // });
};

export default QCApp;

import { NextPage, NextPageContext } from 'next';
import { Provider } from 'react-redux';
import { AnyAction, Store } from 'redux';

import { initializeStore, State } from '../store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
export const withRedux = (PageComponent: NextPage<any>, { ssr = true } = {}) => {

  const WithRedux = ({ initialReduxState, ...props }: { initialReduxState: State }): JSX.Element => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  // Make sure people don't use this HOC on _app.js level
  // if (process.env.NODE_ENV !== 'production') {
  //   const isAppHoc = PageComponent === App || PageComponent.prototype instanceof App;
  //   if (isAppHoc) {
  //     throw new Error('The withRedux HOC only works with PageComponents');
  //   }
  // }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName ?? PageComponent.name ?? 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (context: NextPageContextWithRedux) => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = getOrInitializeStore();

      // Provide the store to getInitialProps of pages
      context.reduxStore = store;

      // Run getInitialProps from HOCed PageComponent
      const pageProps = typeof PageComponent.getInitialProps === 'function'
        ? await PageComponent.getInitialProps(context)
        : {};

      // Pass props to PageComponent
      return {
        ...pageProps,
        initialReduxState: store.getState(),
      };
    };
  }

  return WithRedux;
};

let reduxStore: Store;
const getOrInitializeStore = (initialState?: State): Store<unknown, AnyAction> => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};

export type NextPageContextWithRedux = NextPageContext & { reduxStore: Store };

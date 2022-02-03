import PropTypes from 'prop-types';
import { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';

import { cookieLogin } from '../functions';

export type Auth = {
  id: number;
  emailAddress: string;
};

// better to keep these separate, rather than combining in an array or object
export const AuthStateContext = createContext<Auth | undefined>(undefined);
export const AuthDispatchContext = createContext<(auth: Auth | undefined) => void>(() => { /* */ });

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props): ReactElement => {
  const [ auth, setAuth ] = useState<Auth | undefined>();

  useEffect(() => {
    cookieLogin().then(setAuth).catch(() => { /* empty */ });
  }, []);

  return (
    <AuthStateContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={setAuth}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { cookieLogin } from '../functions';

export interface Auth {
  id: number;
  emailAddress: string;
}

// better to keep these separate, rather than combining in an array or object
export const AuthStateContext = React.createContext<Auth | undefined>(undefined);
export const AuthDispatchContext = React.createContext<(auth: Auth | undefined) => void>(() => { /* */ });

export const AuthProvider: React.FC = ({ children }) => {
  const [ auth, setAuth ] = useState<Auth | undefined>();

  useEffect(() => {
    cookieLogin().then(setAuth);
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

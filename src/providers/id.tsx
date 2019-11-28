import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { login } from '../functions';

// better to keep these separate, rather than combining in an array or object
export const IdStateContext = React.createContext<number | undefined>(undefined);
export const IdDispatchContext = React.createContext<(id: number) => void>(() => { /* */ });

export const IdProvider: React.FC = ({ children }) => {
  const [ id, setId ] = useState<number>();

  useEffect(() => {
    const storedId = window.localStorage?.getItem('id');
    if (storedId) {
      setId(parseInt(storedId, 10));
    } else {
      login().then(userId => {
        if (userId) {
          setId(userId);
          window.localStorage?.setItem('id', userId.toString());
        }
      });
    }
  }, []);

  return (
    <IdStateContext.Provider value={id}>
      <IdDispatchContext.Provider value={setId}>
        {children}
      </IdDispatchContext.Provider>
    </IdStateContext.Provider>
  );
};

IdProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

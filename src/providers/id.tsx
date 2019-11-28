import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

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
      login();
    }

    async function login() {
      try {
        const response = await fetch('https://api.qccareerschool.com/qccareerschool/id', {
          method: 'POST',
          credentials: 'include',
        });
        if (!response.ok) {
          throw Error('Bad status code from server');
        }
        const data = await response.json();
        if (data.id) {
          setId(data.id);
          window.localStorage?.setItem('id', data.id);
        }
      } catch (err) { /* */ }
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

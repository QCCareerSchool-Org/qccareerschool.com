import fetch from 'isomorphic-unfetch';

export interface State {
  id: number | null;
}

export type Action =
  | { type: 'LOG_IN_STARTED'; payload: string }
  | { type: 'LOG_IN_FINISHED'; payload: number }
  | { type: 'LOG_IN_FAILED'; payload: Error };

const localStorageId = process.browser ? window.localStorage?.getItem('id') : null;
const initialState: State = {
  id: localStorageId ? parseInt(localStorageId, 10) : null,
};

export const reducer = ((state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'LOG_IN_FINISHED':
      return { ...state, id: action.payload };
    default:
      return state;
  }
});

export const actionCreators = {
  logIn: (emailAddress: string, password: string) => (dispatch: (action: Action) => void): void => {
    dispatch({ type: 'LOG_IN_STARTED', payload: emailAddress });
    fetch('https://api.qccareerschool.com/qccareerschool/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailAddress, password }),
      credentials: 'include',
    }).then(async response => {
      if (!response.ok) {
        throw Error('Server error');
      }
      return response.json();
    }).then(data => {
      if (process.browser) {
        window.localStorage?.setItem('id', data.id);
      }
      dispatch({ type: 'LOG_IN_FINISHED', payload: data.id });
    }).catch(err => {
      dispatch({ type: 'LOG_IN_FAILED', payload: err });
    });
  },
};

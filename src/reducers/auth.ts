import fetch from 'isomorphic-unfetch';

export type State = {
  id: number | null;
};

export type Action =
  | { type: 'LOG_IN_STARTED'; payload: string }
  | { type: 'LOG_IN_FINISHED'; payload: number }
  | { type: 'LOG_IN_FAILED'; payload: Error };

const localStorageId = typeof window === 'undefined' ? null : window?.localStorage?.getItem('id');
const initialState: State = {
  id: localStorageId !== null ? parseInt(localStorageId, 10) : null,
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
    makeLogInRequest(emailAddress, password).then(data => {
      if (typeof window !== 'undefined') {
        window.localStorage?.setItem('id', data.id);
      }
      dispatch({ type: 'LOG_IN_FINISHED', payload: data.id });
    }).catch(err => {
      dispatch({ type: 'LOG_IN_FAILED', payload: err });
    });
  },
};

const makeLogInRequest = async (emailAddress: string, password: string): Promise<any> => {
  const url = 'https://api.qccareerschool.com/qccareerschool/login';
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emailAddress, password }),
    credentials: 'include',
  });
  if (!response.ok) {
    throw Error('Server error');
  }
  return response.json();
};

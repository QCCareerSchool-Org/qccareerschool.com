import { logIn } from '../lib/logIn';

export type AuthState = {
  id: number | null;
};

export type AuthAction =
  | { type: 'LOG_IN_STARTED'; payload: string }
  | { type: 'LOG_IN_FINISHED'; payload: number }
  | { type: 'LOG_IN_FAILED'; payload: Error };

const localStorageId = typeof window === 'undefined' ? null : window?.localStorage?.getItem('id') ?? null;
const initialState: AuthState = {
  id: localStorageId !== null ? parseInt(localStorageId, 10) : null,
};

export const authReducer = ((state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOG_IN_FINISHED':
      return { ...state, id: action.payload };
    default:
      return state;
  }
});

export const authActionCreators = {
  logIn: (emailAddress: string, password: string) => (dispatch: (action: AuthAction) => void): void => {
    dispatch({ type: 'LOG_IN_STARTED', payload: emailAddress });
    logIn(emailAddress, password).then(data => {
      if (typeof window !== 'undefined') {
        window.localStorage?.setItem('id', data.id);
      }
      dispatch({ type: 'LOG_IN_FINISHED', payload: data.id });
    }).catch(err => {
      dispatch({ type: 'LOG_IN_FAILED', payload: err });
    });
  },
};

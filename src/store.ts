import { createStore } from 'redux';
import { Profile } from './models/profile';

export const pageSize = 15;

export interface State {
  profiles?: Profile[];
  page: number;
  pageCount: number;
}

export type Action =
  | { type: 'CLEAR_PROFILES' }
  | { type: 'SET_PROFILES', payload: Profile[] }
  | { type: 'SET_PAGE', payload: number }
  | { type: 'INCREMENT_PAGE' }
  | { type: 'DECREMENT_PAGE' };

export const store = createStore((state: State = { page: 0, pageCount: 0 }, action: Action): State => {
  switch (action.type) {
    case 'CLEAR_PROFILES':
      return { ...state, profiles: undefined, page: 0, pageCount: 0 };
    case 'SET_PROFILES':
      return { ...state, profiles: [ ...action.payload ], page: 0, pageCount: Math.ceil(action.payload.length / pageSize) };
    case 'SET_PAGE':
      if (action.payload >= 0 && action.payload <= state.pageCount - 1) {
        return { ...state, page: action.payload };
      }
      return state;
    case 'INCREMENT_PAGE':
      if (state.page < state.pageCount - 1) {
        return { ...state, page: state.page + 1 };
      }
      return state;
    case 'DECREMENT_PAGE':
      if (state.page > 0) {
        return { ...state, page: state.page - 1 };
      }
      return state;
    default:
      return state;
  }
});
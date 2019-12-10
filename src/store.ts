import { applyMiddleware, bindActionCreators, combineReducers, createStore, Store } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import * as Auth from './reducers/auth';
import * as FindProfessionals from './reducers/find-professionals';

export interface State {
  auth: Auth.State;
  findProfessionals: FindProfessionals.State;
}

const rootReducer = combineReducers({
  auth: Auth.reducer,
  findProfessionals: FindProfessionals.reducer,
});

export const initializeStore = (initialState?: State) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk as ThunkMiddleware<State, Auth.Action | FindProfessionals.Action>),
  );
};

export const initializeBoundActions = (store: Store) => ({
  findProfessionals: bindActionCreators(FindProfessionals.actionCreators, store.dispatch),
  auth: bindActionCreators(Auth.actionCreators, store.dispatch),
});

import { Config } from 'next-redux-wrapper';
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

// export const store = createStore(rootReducer, applyMiddleware(reduxThunk as ThunkMiddleware<State, Auth.Action | FindProfessionals.Action>));

// export const boundActionCreators = {
//   findProfessionals: bindActionCreators(FindProfessionals.actionCreators, store.dispatch),
//   auth: bindActionCreators(Auth.actionCreators, store.dispatch),
// };

export const makeStore = (initialState: State, options: Config) => {
  return createStore(rootReducer, initialState, applyMiddleware(reduxThunk as ThunkMiddleware<State, Auth.Action | FindProfessionals.Action>));
};

export const makeBoundActions = (store: Store) => ({
  findProfessionals: bindActionCreators(FindProfessionals.actionCreators, store.dispatch),
  auth: bindActionCreators(Auth.actionCreators, store.dispatch),
});

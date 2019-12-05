import { applyMiddleware, bindActionCreators, combineReducers, createStore } from 'redux';
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

export const store = createStore(rootReducer, applyMiddleware(reduxThunk as ThunkMiddleware<State, Auth.Action | FindProfessionals.Action>));

export const boundActionCreators = {
  findProfessionals: bindActionCreators(FindProfessionals.actionCreators, store.dispatch),
  auth: bindActionCreators(Auth.actionCreators, store.dispatch),
};

// interface MakeStoreOptions {
//   isServer: boolean;
//   req: Request;
//   res: Response;
//   debug: boolean;
//   storeKey: string;
// }

// export const makeStore = (initialState: State, options: MakeStoreOptions) => {
//   return createStore(rootReducer, initialState, applyMiddleware(reduxThunk as ThunkMiddleware<State, Auth.Action | FindProfessionals.Action>));
// };

// export const makeBoundActions = (store: Store) => ({
//   findProfessionals: bindActionCreators(FindProfessionals.actionCreators, store.dispatch),
//   auth: bindActionCreators(Auth.actionCreators, store.dispatch),
// }

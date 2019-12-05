import { applyMiddleware, bindActionCreators, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

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

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export const boundActionCreators = {
  findProfessionals: bindActionCreators(FindProfessionals.actionCreators, store.dispatch),
  auth: bindActionCreators(Auth.actionCreators, store.dispatch),
};

// export const boundFindProfessionals = bindActionCreators(FindProfessionals.actionCreators, store.dispatch);

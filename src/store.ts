import { bindActionCreators, combineReducers, createStore } from 'redux';

import * as FindProfessionals from './reducers/find-professionals';

export interface State {
  findProfessionals: FindProfessionals.State;
}

const rootReducer = combineReducers({
  findProfessionals: FindProfessionals.reducer,
});

export const store = createStore(rootReducer);

export const boundFindProfessionals = bindActionCreators(FindProfessionals.actionCreators, store.dispatch);

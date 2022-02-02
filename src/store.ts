import { applyMiddleware, bindActionCreators, combineReducers, createStore, Store } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import { Country } from './models/country';
import { ProfessionGroup } from './professionGroups';
import * as Auth from './reducers/auth';
import * as FindProfessionals from './reducers/findProfessionals';

export type State = {
  auth: Auth.State;
  findProfessionals: FindProfessionals.State;
};

const rootReducer = combineReducers({
  auth: Auth.reducer,
  findProfessionals: FindProfessionals.reducer,
});

export const initializeStore = (initialState?: State): Store => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk as ThunkMiddleware<State, Auth.Action | FindProfessionals.Action>),
  );
};

type BoundActionsResult = {
  findProfessionals: {
    setCountries: (countries: Country[]) => { type: 'COUNTRIES_SET'; payload: Country[] };
    setProfessions: (professions: ProfessionGroup[]) => { type: 'PROFESSIONS_SET'; payload: ProfessionGroup[] };
  };
  auth: {
    logIn: (emailAddress: string, password: string) => (dispatch: (action: Auth.Action) => void) => void;
  };
};

export const initializeBoundActions = (store: Store): BoundActionsResult => ({
  findProfessionals: bindActionCreators(FindProfessionals.actionCreators, store.dispatch),
  auth: bindActionCreators(Auth.actionCreators, store.dispatch),
});

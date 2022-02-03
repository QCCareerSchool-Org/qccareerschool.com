import { applyMiddleware, bindActionCreators, combineReducers, createStore, Store } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import { Country } from './models/country';
import { ProfessionGroup } from './professionGroups';
import { AuthAction, authActionCreators, authReducer, AuthState } from './reducers/auth';
import { FindProfessionalsAction, findProfessionalsActionCreators, findProfessionalsReducer, FindProfessionalsState } from './reducers/findProfessionals';

export type State = {
  auth: AuthState;
  findProfessionals: FindProfessionalsState;
};

const rootReducer = combineReducers({
  auth: authReducer,
  findProfessionals: findProfessionalsReducer,
});

export const initializeStore = (initialState?: State): Store => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk as ThunkMiddleware<State, AuthAction | FindProfessionalsAction>),
  );
};

type BoundActionsResult = {
  findProfessionals: {
    setCountries: (countries: Country[]) => { type: 'COUNTRIES_SET'; payload: Country[] };
    setProfessions: (professions: ProfessionGroup[]) => { type: 'PROFESSIONS_SET'; payload: ProfessionGroup[] };
  };
  auth: {
    logIn: (emailAddress: string, password: string) => (dispatch: (action: AuthAction) => void) => void;
  };
};

export const initializeBoundActions = (store: Store): BoundActionsResult => ({
  findProfessionals: bindActionCreators(findProfessionalsActionCreators, store.dispatch),
  auth: bindActionCreators(authActionCreators, store.dispatch),
});

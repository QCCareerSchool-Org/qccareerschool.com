import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { needsProvince } from '../functions';
import { Country } from '../models/country';
import { Profile } from '../models/profile';
import { Province } from '../models/province';
import { ProfessionGroup } from '../profession-groups';

export const pageSize = 15;

export interface State {
  professions: ProfessionGroup[];
  countries: Country[];
  provinces: Province[];
  form: {
    profession: string;
    countryCode: string;
    provinceCode: string | null;
    firstName: string;
    lastName: string;
    area: string;
  };
  profiles?: Profile[];
  page: number;
  pageCount: number;
  scrollPosition: number;
}

export type Action =
  | { type: 'COUNTRIES_SET'; payload: Country[]; }
  | { type: 'PROFESSIONS_SET'; payload: ProfessionGroup[]; }
  | { type: 'PROFESSION_SET'; payload: string; }
  | { type: 'COUNTRY_SET'; payload: { countryCode: string; provinces: Province[]; }; }
  | { type: 'PROVINCE_SET'; payload: string | null; }
  | { type: 'FIRST_NAME_SET'; payload: string; }
  | { type: 'LAST_NAME_SET'; payload: string; }
  | { type: 'AREA_SET'; payload: string; }
  | { type: 'CLEAR_PROFILES'; }
  | { type: 'SET_PROFILES'; payload: Profile[]; }
  | { type: 'SET_PAGE'; payload: number; }
  | { type: 'INCREMENT_PAGE'; }
  | { type: 'DECREMENT_PAGE'; }
  | { type: 'PAGE_SCROLLED'; payload: number; };

type ThunkResult<T> = ThunkAction<T, { findProfessionals: State }, undefined, Action>;

const initialState: State = {
  professions: [],
  countries: [],
  provinces: [],
  form: {
    profession: '',
    countryCode: '',
    provinceCode: null,
    firstName: '',
    lastName: '',
    area: '',
  },
  page: 0,
  pageCount: 0,
  scrollPosition: 0,
};

export const reducer = ((state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'COUNTRIES_SET':
      return { ...state, countries: action.payload };
    case 'PROFESSIONS_SET':
      if (action.payload.length === 0) {
        return { ...state, professions: [], form: { ...state.form, profession: '' } };
      } else if (action.payload.some(group => group.professions.includes(state.form.profession))) {
        return { ...state, professions: action.payload };
      } else {
        return { ...state, professions: action.payload, form: { ...state.form, profession: action.payload[0].professions[0] } };
      }
    case 'PROFESSION_SET':
      return { ...state, form: { ...state.form, profession: action.payload } };
    case 'COUNTRY_SET':
      let provinceCode;
      if (action.payload.provinces.length === 0) {
        provinceCode = null;
      } else if (action.payload.provinces.some(p => p.code === state.form.provinceCode)) {
        provinceCode = state.form.provinceCode;
      } else {
        provinceCode = action.payload.provinces[0].code;
      }
      return {
        ...state,
        provinces: action.payload.provinces,
        form: { ...state.form, countryCode: action.payload.countryCode, provinceCode },
      };
    case 'PROVINCE_SET':
      if (action.payload === null) {
        return { ...state, form: { ...state.form, provinceCode: null } };
      } else if (state.provinces.some(p => p.code === action.payload)) {
        return { ...state, form: { ...state.form, provinceCode: action.payload } };
      }
      return state;
    case 'FIRST_NAME_SET':
      return { ...state, form: { ...state.form, firstName: action.payload } };
    case 'LAST_NAME_SET':
      return { ...state, form: { ...state.form, lastName: action.payload } };
    case 'AREA_SET':
      return { ...state, form: { ...state.form, area: action.payload } };
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
    case 'PAGE_SCROLLED':
      return { ...state, scrollPosition: action.payload };
    default:
      return state;
  }
});

const updateCountry = (countryCode: string): ThunkResult<void> => dispatch => {
  if (needsProvince(countryCode)) {
    const url = `https://api.qccareerschool.com/geoLocation/provinces?countryCode=${encodeURIComponent(countryCode)}`;
    fetch(url).then(response => {
      if (!response.ok) {
        throw Error('Unable to retreive provinces');
      }
      return response.json();
    }).then(provinces => {
      dispatch({ type: 'COUNTRY_SET', payload: { countryCode, provinces } });
    });
  } else {
    dispatch({ type: 'COUNTRY_SET', payload: { countryCode, provinces: [] } });
  }
};

export const actionCreators = {
  setCountries: (countries: Country[]) => ({ type: 'COUNTRIES_SET', payload: countries }),
  setProfessions: (professions: ProfessionGroup[]) => ({ type: 'PROFESSIONS_SET', payload: professions }),
  updateProfession: (profession: string) => ({ type: 'PROFESSION_SET', payload: profession }),
  updateCountry,
  updateProvince: (provinceCode: string | null) => ({ type: 'PROVINCE_SET', payload: provinceCode }),
  updateFirstName: (firstName: string) => ({ type: 'FIRST_NAME_SET', payload: firstName }),
  updateLastName: (lastName: string) => ({ type: 'LAST_NAME_SET', payload: lastName }),
  updateArea: (area: string) => ({ type: 'AREA_SET', payload: area }),
  clear: () => ({ type: 'CLEAR_PROFILES' }),
  set: (payload: Profile[]) => ({ type: 'SET_PROFILES', payload }),
  setPage: (page: number) => ({ type: 'SET_PAGE', payload: page }),
  incrementPage: () => ({ type: 'INCREMENT_PAGE' }),
  decrementPage: () => ({ type: 'DECREMENT_PAGE' }),
  scroll: (position: number) => ({ type: 'PAGE_SCROLLED', payload: position }),
};

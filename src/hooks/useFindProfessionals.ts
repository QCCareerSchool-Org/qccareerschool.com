import { Dispatch, useReducer } from 'react';
import { Province } from '../models/province';

interface State {
  provinces: Province[];
  profession: string;
  countryCode?: string;
  provinceCode: string | null;
  firstName: string;
  lastName: string;
  area: string;
}

type Action =
  | { type: 'setProfession', payload: { profession: string } }
  | { type: 'setCountryCode', payload: { countryCode: string; provinces: Province[] } }
  | { type: 'setProvinceCode', payload: { provinceCode: string } }
  | { type: 'setFirstName', payload: { firstName: string } }
  | { type: 'setLastName', payload: { lastName: string } }
  | { type: 'setArea', payload: { area: string } };

function reducer(state: State, action: Action) {
  console.log('dispatch!', action);
  switch (action.type) {
    case 'setProfession':
      return { ...state, profession: action.payload.profession };
    case 'setCountryCode':
      return {
        ...state,
        countryCode: action.payload.countryCode,
        provinces: action.payload.provinces,
        provinceCode: action.payload.provinces.length ? action.payload.provinces[0].code : null,
      };
    case 'setProvinceCode':
      return { ...state, provinceCode: action.payload.provinceCode };
    case 'setFirstName':
      return { ...state, firstName: action.payload.firstName };
    case 'setLastName':
      return { ...state, lastName: action.payload.lastName };
    case 'setArea':
      return { ...state, area: action.payload.area };
    default:
      throw Error('unkown action type');
  }
}

export function useFindProfessionals(): [ State, Dispatch<Action> ] {
  const [ state, dispatch ] = useReducer(reducer, {
    profession: 'makeup artist',
    provinces: [],
    provinceCode: null,
    firstName: '',
    lastName: '',
    area: '',
  });
  return [ state, dispatch ];
}

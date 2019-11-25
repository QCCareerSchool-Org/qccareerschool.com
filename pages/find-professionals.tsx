import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useContext, useEffect, useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { SearchResults } from '../components/search-results';
import { getQueryString } from '../functions';
import { DefaultLayout } from '../layouts/default-layout';
import { Country } from '../models/country';
import { Profile } from '../models/profile';
import { Province } from '../models/province';
import { LocationStateContext } from '../providers/location';

import HeroHome from '../images/backgrounds/hero-home.jpg';

interface Props {
  errorCode?: number;
  countries?: Country[];
}

interface State {
  provinces: Province[];
  countryCode?: string;
  provinceCode: string | null;
  firstName: string;
  lastName: string;
  area: string;
}

type Action =
  | { type: 'setCountryCode', payload: { countryCode: string; provinces: Province[] } }
  | { type: 'setProvinceCode', payload: { provinceCode: string } }
  | { type: 'setFirstName', payload: { firstName: string } }
  | { type: 'setLastName', payload: { lastName: string } }
  | { type: 'setArea', payload: { area: string } };

function reducer(state: State, action: Action) {
  console.log('dispatch!', action);
  switch (action.type) {
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

const FindProfessionalsPage: NextPage<Props> = props => {
  const location = useContext(LocationStateContext);
  const [ state, dispatch ] = useReducer(reducer, {
    provinces: [],
    provinceCode: null,
    firstName: '',
    lastName: '',
    area: '',
  });
  const [ results, setResults ] = useState<Profile[]>();
  const [ provinceLabel, setProvinceLabel ] = useState<string>();
  const [ error, setError ] = useState(false);

  useEffect(() => {
    changeCountry(location.countryCode);
  }, [ location.countryCode ]);

  useEffect(() => {
    setProvinceLabel(state.countryCode === 'CA' ? 'Province' : 'State');
  }, [ state.countryCode ]);

  async function changeCountry(countryCode: string) {
    const provinces = await getProvinces(countryCode);
    dispatch({ type: 'setCountryCode', payload: { countryCode, provinces } });
  }

  async function getProvinces(countryCode: string): Promise<Province[]> {
    let provinces: Province[] = [];
    if (needsProvince(countryCode)) {
      const url = `https://api.qccareerschool.com/geoLocation/provinces?countryCode=${countryCode}`;
      const provinceResponse = await fetch(url);
      if (provinceResponse.ok) {
        provinces = await provinceResponse.json();
      }
    }
    return provinces;
  }

  async function handleCountryCodeChange(event: React.ChangeEvent) {
    const target = event.target as HTMLSelectElement;
    const countryCode = target.value;
    await changeCountry(countryCode);
  }

  function handleProvinceCodeChange(event: React.ChangeEvent) {
    const target = event.target as HTMLSelectElement;
    const provinceCode = target.value;
    dispatch({ type: 'setProvinceCode', payload: { provinceCode } });
  }

  async function handleSubmit(event: React.FormEvent) {
    console.log('here');
    event.preventDefault();
    const payload = {
      firstName: state.firstName,
      lastName: state.lastName,
      area: state.area,
      provinceCode: state.provinceCode,
      countryCode: state.countryCode,
    };
    const searchResponse = await fetch(`https://www.qccareerschool.com/profiles/?${getQueryString(payload)}`);
    if (searchResponse.ok) {
      setResults(await searchResponse.json());
    } else {
      setError(true);
    }
  }

  if (props.errorCode) {
    return <ErrorPage statusCode={props.errorCode} />;
  }

  return (
    <DefaultLayout>

      <section id="first-section" className="text-light">
        <Container>
          <Row>
            <Col xs={12} md={10} lg={8} xl={6}>
              <h1>Find Professionals</h1>
              <p className="lead">Seeking a skilled professional in your area? Look no further! Our graduates are well prepared to help you. Simply fill in the form below to find a professional near you.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={5} className="mb-5 mb-md-0">
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="countryCode">Country</label>
                  <select className="form-control" id="countryCode" value={state.countryCode} onChange={handleCountryCodeChange}>
                    {props.countries?.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
                {state.provinces.length
                  ? (
                    <div className="form-group">
                      <label htmlFor="countryCode">{provinceLabel}</label>
                      <select className="form-control" id="provinceCode" value={state.provinceCode || ''} onChange={handleProvinceCodeChange}>
                        {state.provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
                      </select>
                    </div>
                  )
                  : null
                }
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" value={state.firstName} onChange={e => dispatch({ type: 'setFirstName', payload: { firstName: e.target.value } })} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" value={state.lastName} onChange={e => dispatch({ type: 'setLastName', payload: { lastName: e.target.value } })} />
                </div>
                <div className="form-group">
                  <label htmlFor="area">Area</label>
                  <input type="text" className="form-control" id="area" value={state.area} onChange={e => dispatch({ type: 'setArea', payload: { area: e.target.value } })} />
                </div>

                <Button type="submit">Search</Button>
              </form>
            </Col>
            <Col xs={12} md={6} lg={7}>
              {results ? <SearchResults profiles={results} /> : null}
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome});
        background-position: 50% 20%;
      }
      `}</style>

    </DefaultLayout>
  );
};

FindProfessionalsPage.getInitialProps = async context => {
  try {
    const countryResponse = await fetch('https://api.qccareerschool.com/geoLocation/countries');
    if (countryResponse.status !== 200) {
      throw new HttpStatus.InternalServerError();
    }
    const countries = await countryResponse.json();
    return { countries };
  } catch (err) {
    console.error(err);
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.getStatusCode() : 500;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

function needsProvince(countryCode: string): boolean {
  return [ 'CA', 'US', 'AU' ].includes(countryCode);
}

export default FindProfessionalsPage;

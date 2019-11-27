import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useContext, useEffect, useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { SearchResults } from '../components/search-results';
import { getQueryString, subscribe } from '../functions';
import { DefaultLayout } from '../layouts/default-layout';
import { Country } from '../models/country';
import { Profile } from '../models/profile';
import { Province } from '../models/province';
import { LocationStateContext } from '../providers/location';
import { ScreenWidthContext } from '../providers/screen-width';

import HeroHome from '../images/backgrounds/hero-home.jpg';

interface Props {
  errorCode?: number;
  errorMessage?: any;
  countries?: Country[];
}

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

const FindProfessionalsPage: NextPage<Props> = props => {
  const location = useContext(LocationStateContext);
  const screenWidth = useContext(ScreenWidthContext);
  const [ state, dispatch ] = useReducer(reducer, {
    profession: 'makeup artist',
    provinces: [],
    provinceCode: null,
    firstName: '',
    lastName: '',
    area: '',
  });
  const [ results, setResults ] = useState<Profile[]>();
  const [ provinceLabel, setProvinceLabel ] = useState<string>();
  const [ error, setError ] = useState(false);

  const lg = screenWidth >= 992;
  const md = screenWidth >= 768;
  const sm = screenWidth >= 576;

  useEffect(() => {
    if (location?.countryCode) {
      changeCountry(location.countryCode);
    }
  }, [ location?.countryCode ]);

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

  function handleProfessionChange(event: React.ChangeEvent) {
    const target = event.target as HTMLSelectElement;
    const profession = target.value;
    dispatch({ type: 'setProfession', payload: { profession } });
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
    event.preventDefault();
    const payload = {
      profession: state.profession,
      countryCode: state.countryCode,
      provinceCode: state.provinceCode,
      area: state.area,
      firstName: state.firstName,
      lastName: state.lastName,
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
              <h1 onClick={() => subscribe()}>Find Professionals</h1>
              <p className="lead">Seeking a skilled professional in your area? Look no further! Our graduates are well prepared to help you. Simply fill in the form below to find a professional near you.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light">
        <Container>
          <Row>
            <Col xs={12} sm={10} md={8} lg={5} className="offset-sm-1 offset-md-2 offset-lg-0 mb-5 mb-lg-0">
              <Card className="shadow-lg rounded-lg text-dark">
                <Card.Body>
                  <Card.Title className="mb-4">Find a Professional</Card.Title>
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="profession">Profession</label>
                      <select className="form-control" id="profession" value={state.profession} onChange={handleProfessionChange}>
                        <optgroup label="QC Makeup Academy">
                          <option>makeup artist</option>
                          <option>airbrush makeup artist</option>
                          <option>special fx makeup artist</option>
                          <option>hair stylist</option>
                        </optgroup>
                        <optgroup label="QC Event School">
                          <option>event planner</option>
                          <option>wedding planner</option>
                          <option>event decorator</option>
                          <option>corporate event planner</option>
                          <option>destination wedding planner</option>
                          <option>luxury event and wedding planner</option>
                        </optgroup>
                        <optgroup label="QC Design School">
                          <option>interior decorator</option>
                          <option>home stager</option>
                          <option>interior redesigner</option>
                          <option>green designer</option>
                          <option>landscape designer</option>
                          <option>feng shui consultant</option>
                          <option>color consultant</option>
                          <option>professional organizer</option>
                        </optgroup>
                        <optgroup label="QC Travel School">
                          <option>travel consultant</option>
                        </optgroup>
                        <optgroup label="QC Style Academy">
                          <option>personal stylist</option>
                          <option>fashion merchandiser</option>
                          <option>editorial stylist</option>
                        </optgroup>
                        <optgroup label="Winghill Writing School">
                          <option>screenwriter</option>
                        </optgroup>
                        <optgroup label="QC Wellness Studies">
                          <option>sleep consultant</option>
                        </optgroup>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="countryCode">Country</label>
                      <select className="form-control" id="countryCode" value={state.countryCode} onChange={handleCountryCodeChange}>
                        {props.countries?.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                      </select>
                    </div>
                    {state.provinces.length
                      ? (
                        <div className="form-group">
                          <label htmlFor="provinceCode">{provinceLabel}</label>
                          <select className="form-control" id="provinceCode" value={state.provinceCode || ''} onChange={handleProvinceCodeChange}>
                            {state.provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
                          </select>
                        </div>
                      )
                      : null
                    }
                    <div className="form-group">
                      <label htmlFor="area">Area</label>
                      <input type="text" className="form-control" id="area" value={state.area} onChange={e => dispatch({ type: 'setArea', payload: { area: e.target.value } })} />
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" value={state.firstName} onChange={e => dispatch({ type: 'setFirstName', payload: { firstName: e.target.value } })} />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" value={state.lastName} onChange={e => dispatch({ type: 'setLastName', payload: { lastName: e.target.value } })} />
                      </div>
                    </div>
                    <Button type="submit" className="mt-2">Search</Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={7} className={sm ? 'text-left' : 'text-center'}>
              {results ? <SearchResults profiles={results} maxPages={sm ? 9 : 3} /> : null}
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        #first-section {
          background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 50% 0;
          background-size: cover;
        }
      `}</style>

    </DefaultLayout>
  );
};

FindProfessionalsPage.getInitialProps = async context => {
  try {
    const countryResponse = await fetch('https://api.qccareerschool.com/geoLocation/countries');
    if (countryResponse.status !== 200) {
      throw new HttpStatus.InternalServerError(countryResponse.statusText);
    }
    const countries = await countryResponse.json();
    return { countries };
  } catch (err) {
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.getStatusCode() : 500;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { errorCode, errorMessage: err.message };
  }
};

function needsProvince(countryCode: string): boolean {
  return [ 'CA', 'US', 'AU' ].includes(countryCode);
}

export default FindProfessionalsPage;

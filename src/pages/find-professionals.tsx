import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useContext, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';

import { SearchResults } from '../components/search-results';
import { getQueryString } from '../functions';
import { DefaultLayout } from '../layouts/default-layout';
import { NextPageContextWithRedux, withRedux } from '../lib/with-redux';
import { Country } from '../models/country';
import { Profile } from '../models/profile';
import { ProfessionGroup, professionGroups } from '../profession-groups';
import { LocationStateContext } from '../providers/location';
import { ScreenWidthContext } from '../providers/screen-width';
import * as FindProfessionals from '../reducers/find-professionals';
import { State } from '../store';

import HeroHome from '../images/backgrounds/hero-home.jpg';

interface SubmitPayload {
  profession: string;
  countryCode?: string;
  provinceCode: string | null;
  area: string;
  firstName: string;
  lastName: string;
}

interface Props {
  errorCode?: number;
}

const FindProfessionalsPage: NextPage<Props> = ({ errorCode }) => {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((p: State) => p.findProfessionals);

  // context
  const location = useContext(LocationStateContext);
  const screenWidth = useContext(ScreenWidthContext);

  // local state
  const [ provinceLabel, setProvinceLabel ] = useState<string>();
  const [ error, setError ] = useState(false);
  const [ refreshing, setRefreshing ] = useState(false);

  // refs
  const scrollStart = useRef(0);
  const scrolledEnough = useRef(false);
  const submitPayload = useRef<SubmitPayload>();

  const lg = screenWidth >= 992;
  const md = screenWidth >= 768;
  const sm = screenWidth >= 576;

  useEffect(() => {
    window.scrollTo(0, state.scrollPosition);
    const handleScroll = () => dispatch(FindProfessionals.actionCreators.scroll(window.pageYOffset));
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location?.countryCode) {
      if (state.form.countryCode === '') {
        dispatch(FindProfessionals.actionCreators.updateCountry(location.countryCode));
      }
    }
  }, [ state.form.countryCode, location?.countryCode ]);

  useEffect(() => {
    setProvinceLabel(state.form.countryCode === 'CA' ? 'Province' : 'State');
  }, [ state.form.countryCode ]);

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    submitPayload.current = { ...state.form };
    submit();
  }

  async function submit() {
    try {
      const searchResponse = await fetch(`https://api.qccareerschool.com/qccareerschool/profiles/?${getQueryString(submitPayload.current)}`);
      if (!searchResponse.ok) {
        throw Error(`Server responded with response code ${searchResponse.status}`);
      }
      const data: Profile[] = await searchResponse.json();
      dispatch(FindProfessionals.actionCreators.set(data));
      setError(false);
    } catch (err) {
      setError(true);
    }
  }

  /** Records the vertical start position */
  function handleTouchStart(e: React.TouchEvent) {
    scrollStart.current = e.touches[0].pageY;
  }

  /** Determines if we should activate the custom pull refresh when we recevie a touchEnd event */
  function handleTouchMove(e: React.TouchEvent) {
    const minScroll = 250; // the minimum amount of overscroll we need to detect
    scrolledEnough.current = document.scrollingElement?.scrollTop === 0 && // at the top
      e.touches[0].pageY > scrollStart.current + minScroll && // overscrolled the minimum amount
      !refreshing; // not already refreshing
  }

  /** Activates custom pull-to-refresh */
  function handleTouchEnd(e: React.TouchEvent) {
    if (scrolledEnough.current) {
      setRefreshing(true);
      submit().then(() => setRefreshing(false));
    }
  }

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  return (
    <DefaultLayout>

      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>

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

        <section className="bg-light">
          <Container>
            <Row>
              <Col xs={12} sm={10} md={8} lg={5} className="offset-sm-1 offset-md-2 offset-lg-0 mb-5 mb-lg-0">
                <Card className="shadow-lg rounded-lg text-dark">
                  <Card.Body>
                    <Card.Title className="mb-4">Find a Professional</Card.Title>
                    <form method="post" onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <label htmlFor="profession">Profession</label>
                        <select className="form-control" id="profession" value={state.form.profession} onChange={e => dispatch(FindProfessionals.actionCreators.updateProfession(e.target.value))}>
                          {state.professions.map(group => (
                            <optgroup key={group.name} label={group.name}>
                              {group.professions.map(p => (
                                <option key={p}>{p}</option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="countryCode">Country</label>
                        <select className="form-control" id="countryCode" value={state.form.countryCode} onChange={e => dispatch(FindProfessionals.actionCreators.updateCountry(e.target.value))}>
                          {state.countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                        </select>
                      </div>
                      {state.provinces.length
                        ? (
                          <div className="form-group">
                            <label htmlFor="provinceCode">{provinceLabel}</label>
                            <select className="form-control" id="provinceCode" value={state.form.provinceCode || ''} onChange={e => dispatch(FindProfessionals.actionCreators.updateProvince(e.target.value))}>
                              {state.provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
                            </select>
                          </div>
                        )
                        : null
                      }
                      <div className="form-group">
                        <label htmlFor="area">Area</label>
                        <input type="text" className="form-control" id="area" value={state.form.area} onChange={e => dispatch(FindProfessionals.actionCreators.updateArea(e.target.value))} />
                      </div>
                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" className="form-control" id="firstName" value={state.form.firstName} onChange={e => dispatch(FindProfessionals.actionCreators.updateFirstName(e.target.value))} />
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" className="form-control" id="lastName" value={state.form.lastName} onChange={e => dispatch(FindProfessionals.actionCreators.updateLastName(e.target.value))} />
                        </div>
                      </div>
                      <Button type="submit" className="mt-2">Search</Button>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} lg={7} className={sm ? 'text-left' : 'text-center'}>
                {error ? (
                  <>
                    <p className="lead">Network Error</p>
                    <p>Try again.</p>
                  </>
                ) : null}
                {state.profiles && !error
                  ? (
                    <SearchResults
                      profiles={state.profiles}
                      page={state.page}
                      pageCount={state.pageCount}
                      increment={() => dispatch(FindProfessionals.actionCreators.incrementPage())}
                      decrement={() => dispatch(FindProfessionals.actionCreators.decrementPage())}
                      setPage={i => dispatch(FindProfessionals.actionCreators.setPage(i))}
                      maxPages={sm ? 9 : 3}
                    />
                  )
                  : null}
              </Col>
            </Row>
          </Container>
        </section>

      </div>

      <style jsx>{`
        #first-section {
          background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 50% 0;
          background-size: cover;
        }
      `}</style>

    </DefaultLayout>
  );
};

FindProfessionalsPage.getInitialProps = async ({ foo, reduxStore, res }: NextPageContextWithRedux | any) => {
  const state: State = reduxStore.getState();
  try {
    if (state.findProfessionals.countries.length === 0) {
      const countryResponse = await fetch('https://api.qccareerschool.com/geoLocation/countries');
      if (countryResponse.status !== 200) {
        throw new HttpStatus.InternalServerError(countryResponse.statusText);
      }
      const data: Country[] = await countryResponse.json();
      reduxStore.dispatch(FindProfessionals.actionCreators.setCountries(data));
    }
    if (state.findProfessionals.professions.length === 0) {
      reduxStore.dispatch(FindProfessionals.actionCreators.setProfessions(professionGroups));
    }
    return { };
  } catch (err) {
    const errorCode = typeof err.statusCode === 'undefined' ? 500 : err.statusCode;
    if (res) {
      res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

export default withRedux(FindProfessionalsPage);

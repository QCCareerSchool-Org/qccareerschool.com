import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchResults } from '../components/search-results';
import { SEO } from '../components/seo';
import { getQueryString } from '../functions';
import Hero from '../images/backgrounds/hero-find-professionals.jpg';
import { DefaultLayout } from '../layouts/default-layout';
import { NextPageContextWithRedux, withRedux } from '../lib/with-redux';
import { Country } from '../models/country';
import { Profile } from '../models/profile';
import { professionGroups } from '../profession-groups';
import { LocationStateContext } from '../providers/location';
import { ScreenWidthContext } from '../providers/screen-width';
import * as FindProfessionals from '../reducers/find-professionals';
import { State } from '../store';

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

  const sm = screenWidth >= 576;

  useEffect(() => {
    window.scrollTo(0, state.scrollPosition);
    const handleScroll = (): void => {
      dispatch(FindProfessionals.actionCreators.scroll(window.pageYOffset));
    };
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

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    submitPayload.current = { ...state.form };
    submit().catch(() => { /* empty */ });
  };

  const submit = async (): Promise<void> => {
    try {
      const searchResponse = await fetch(`https://api.qccareerschool.com/qccareerschool/profiles/?${getQueryString(submitPayload.current)}`);
      if (!searchResponse.ok) {
        throw Error(`Server responded with response code ${searchResponse.status}`);
      }
      const data: Partial<Profile>[] = await searchResponse.json();
      dispatch(FindProfessionals.actionCreators.set(data));
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  /** Records the vertical start position */
  const handleTouchStart = (e: React.TouchEvent): void => {
    scrollStart.current = e.touches[0].pageY;
  };

  /** Determines if we should activate the custom pull refresh when we recevie a touchEnd event */
  const handleTouchMove = (e: React.TouchEvent): void => {
    const minScroll = 250; // the minimum amount of overscroll we need to detect
    scrolledEnough.current = document.scrollingElement?.scrollTop === 0 && // at the top
      e.touches[0].pageY > scrollStart.current + minScroll && // overscrolled the minimum amount
      !refreshing; // not already refreshing
  };

  /** Activates custom pull-to-refresh */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTouchEnd = (e: React.TouchEvent): void => {
    if (scrolledEnough.current) {
      setRefreshing(true);
      submit().then(() => setRefreshing(false)).catch(() => { /* empty */ });
    }
  };

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  return (
    <DefaultLayout>

      <SEO
        title="Find Professionals"
        description="Seeking a skilled professional in your area? Look no further! QC graduates are well prepared to help you. Simply fill in the form to find a professional near you."
        canonical="/find-professionals"
      />

      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>

        <section id="first-section" className="text-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                <h1>Find Professionals</h1>
                <p className="lead">Seeking a skilled professional in your area? Look no further! Our graduates are well prepared to help you. Simply fill in the form below to find a professional near you.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 col-md-8 col-lg-5 offset-sm-1 offset-md-2 offset-lg-0 mb-5 mb-lg-0">
                <div className="card shadow-lg rounded-lg text-dark">
                  <div className="card-body">
                    <h2 className="h5 card-title mb-4">Find a Professional</h2>
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
                            <select className="form-control" id="provinceCode" value={state.form.provinceCode ?? ''} onChange={e => dispatch(FindProfessionals.actionCreators.updateProvince(e.target.value))}>
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
                      <button type="submit" className="btn btn-primary mt-2">Search</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7 text-center text-sm-left">
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
              </div>
            </div>
          </div>
        </section>

      </div>

      <style jsx>{`
        #first-section {
          background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${Hero}) 50% 0;
          background-size: cover;
        }
      `}</style>

    </DefaultLayout>
  );
};

FindProfessionalsPage.getInitialProps = async ({ reduxStore, res }: NextPageContextWithRedux) => {
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
    return {};
  } catch (err) {
    const errorCode = typeof err.statusCode === 'undefined' ? 500 : err.statusCode;
    if (res) {
      res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

export default withRedux(FindProfessionalsPage);

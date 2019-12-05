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
import { connect, useSelector } from 'react-redux';
import { Store } from 'redux';

import { SearchResults } from '../components/search-results';
import { getQueryString } from '../functions';
import { DefaultLayout } from '../layouts/default-layout';
import { Country } from '../models/country';
import { Profile } from '../models/profile';
import { LocationStateContext } from '../providers/location';
import { ScreenWidthContext } from '../providers/screen-width';
import * as FindProfessionals from '../reducers/find-professionals';
import { makeBoundActions, State } from '../store';

import HeroHome from '../images/backgrounds/hero-home.jpg';

interface SubmitPayload {
  profession: string;
  countryCode?: string;
  provinceCode: string | null;
  area: string;
  firstName: string;
  lastName: string;
}

interface ProfessionGroup {
  name: string;
  professions: string[];
}

interface Props {
  store: Store;
  boundActions: ReturnType<typeof makeBoundActions>;
  errorCode?: number;
  countries?: Country[];
  professionGroups?: ProfessionGroup[];
}

const FindProfessionalsPage: NextPage<Props> = ({ store, boundActions, errorCode, countries, professionGroups }) => {
  const form = useSelector((p: State) => p.findProfessionals.form);
  const provinces = useSelector((p: State) => p.findProfessionals.provinces);
  const profiles = useSelector((p: State) => p.findProfessionals.profiles);
  const scrollPosition = useSelector((p: State) => p.findProfessionals.scrollPosition);

  const location = useContext(LocationStateContext);
  const screenWidth = useContext(ScreenWidthContext);

  const [ provinceLabel, setProvinceLabel ] = useState<string>();
  const [ error, setError ] = useState(false);
  const [ refreshing, setRefreshing ] = useState(false);

  const scrollStart = useRef(0);
  const scrolledEnough = useRef(false);
  const submitPayload = useRef<SubmitPayload>();

  const lg = screenWidth >= 992;
  const md = screenWidth >= 768;
  const sm = screenWidth >= 576;

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
    const handleScroll = () => boundActions.findProfessionals.scroll(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location?.countryCode) {
      if (form.countryCode === '') {
        boundActions.findProfessionals.updateCountry(location.countryCode);
      }
    }
  }, [ form.countryCode, location?.countryCode ]);

  useEffect(() => {
    if (professionGroups?.length) {
      // boundActions.findProfessionals.updateProfession(professionGroups[0].professions[0]);
      store.dispatch(FindProfessionals.actionCreators.updateProfession(professionGroups[0].professions[0]));
    }
  }, [ professionGroups ]);

  useEffect(() => {
    setProvinceLabel(form.countryCode === 'CA' ? 'Province' : 'State');
  }, [ form.countryCode ]);

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    submitPayload.current = { ...form };
    submit();
  }

  async function submit() {
    try {
      const searchResponse = await fetch(`https://api.qccareerschool.com/qccareerschool/profiles/?${getQueryString(submitPayload.current)}`);
      if (!searchResponse.ok) {
        throw Error(`Server responded with response code ${searchResponse.status}`);
      }
      const data: Profile[] = await searchResponse.json();
      boundActions.findProfessionals.set(data);
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
                        <select className="form-control" id="profession" value={form.profession} onChange={e => boundActions.findProfessionals.updateProfession(e.target.value)}>
                          {professionGroups?.map(group => (
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
                        <select className="form-control" id="countryCode" value={form.countryCode} onChange={e => boundActions.findProfessionals.updateCountry(e.target.value)}>
                          {countries?.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                        </select>
                      </div>
                      {provinces.length
                        ? (
                          <div className="form-group">
                            <label htmlFor="provinceCode">{provinceLabel}</label>
                            <select className="form-control" id="provinceCode" value={form.provinceCode || ''} onChange={e => boundActions.findProfessionals.updateProvince(e.target.value)}>
                              {provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
                            </select>
                          </div>
                        )
                        : null
                      }
                      <div className="form-group">
                        <label htmlFor="area">Area</label>
                        <input type="text" className="form-control" id="area" value={form.area} onChange={e => boundActions.findProfessionals.updateArea(e.target.value)} />
                      </div>
                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" className="form-control" id="firstName" value={form.firstName} onChange={e => boundActions.findProfessionals.updateFirstName(e.target.value)} />
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" className="form-control" id="lastName" value={form.lastName} onChange={e => boundActions.findProfessionals.updateLastName(e.target.value)} />
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
                {profiles && !error ? <SearchResults boundActions={boundActions} maxPages={sm ? 9 : 3} /> : null}
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

FindProfessionalsPage.getInitialProps = async context => {
  console.log((context as any).store);

  const boundActions = makeBoundActions((context as any).store);
  const professionGroups: ProfessionGroup[] = [
    {
      name: 'QC Makeup Academy',
      professions: [
        'makeup artist',
        'airbrush makeup artist',
        'special fx makeup artist',
        'hair stylist',
      ],
    },
    {
      name: 'QC Event School',
      professions: [
        'event planner',
        'wedding planner',
        'event decorator',
        'corporate event planner',
        'destination wedding planner',
        'luxury event and wedding planner',
      ],
    },
    {
      name: 'QC Design School',
      professions: [
        'interior decorator',
        'home stager',
        'interior redesigner',
        'green designer',
        'landscape designer',
        'feng shui consultant',
        'color consultant',
        'professional organizer',
      ],
    },
    { name: 'QC Travel School', professions: [ 'travel consultant' ] },
    { name: 'QC Style Academy', professions: [ 'personal stylist', 'fashion merchandiser', 'editorial stylist' ] },
    { name: 'Winghill Writing School', professions: [ 'screenwriter' ] },
    { name: 'QC Wellness Studies', professions: [ 'sleep consultant' ] },
  ];
  try {
    const countryResponse = await fetch('https://api.qccareerschool.com/geoLocation/countries');
    if (countryResponse.status !== 200) {
      throw new HttpStatus.InternalServerError(countryResponse.statusText);
    }
    const countries = await countryResponse.json();
    return { store: (context as any).store, boundActions, countries, professionGroups };
  } catch (err) {
    const errorCode = typeof err.statusCode === 'undefined' ? 500 : err.statusCode;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { store: (context as any).store, boundActions, errorCode };
  }
};

export default connect(state => state)(FindProfessionalsPage);

import { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { login, register, subscribe } from '../functions';
import { DefaultLayout } from '../layouts/default-layout';
import { AuthDispatchContext, AuthStateContext } from '../providers/auth';

import HeroHome from '../images/backgrounds/hero-home.jpg';

const TestPage: NextPage = () => {
  const auth = useContext(AuthStateContext);
  const setAuth = useContext(AuthDispatchContext);
  const [ emailAddress, setEmailAddress ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const handleClick = () => {
    subscribe().then(subscriptionId => {
      if (subscriptionId) {
        console.log(`got subscriptionId ${subscriptionId}`);
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(emailAddress, password).then(result => {
      if (typeof result === 'number') {
        //
      } else {
        setAuth(result);
      }
    });
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    login(emailAddress, password).then(result => {
      if (typeof result === 'number') {
        //
      } else {
        setAuth(result);
      }
    });
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Test - QC Career School</title>
      </Head>

      <section id="first-section" className="text-light">
        <Container>
          <h1>Test</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
          <p>You are user {auth?.id}</p>
          <Button variant="primary" onClick={handleClick}>Subscribe</Button>
        </Container>
      </section>

      <section>
        <Container>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input className="form-control" type="email" id="emailAddress" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <Button type="submit" variant="primary">Register</Button>
          </form>
        </Container>
      </section>

      <section>
        <Container>
          <form onSubmit={handleSubmit2}>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input className="form-control" type="email" id="emailAddress" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <Button type="submit" variant="primary">Log In</Button>
          </form>
        </Container>
      </section>

      <style jsx={true}>{`
        #first-section {
          background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 50% 0;
          background-size: cover;
        }
      `}</style>

    </DefaultLayout>
  );
};

export default TestPage;

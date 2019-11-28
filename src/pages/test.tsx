import { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { subscribe } from '../functions';
import { DefaultLayout } from '../layouts/default-layout';
import { IdStateContext } from '../providers/id';

import HeroHome from '../images/backgrounds/hero-home.jpg';

const TestPage: NextPage = () => {
  const id = useContext(IdStateContext);

  const handleClick = () => {
    subscribe().then(subscriptionId => {
      if (subscriptionId) {
        console.log(`got subscriptionId ${subscriptionId}`);
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
          <p>You are user {id}</p>
          <Button variant="primary" onClick={handleClick}>Subscribe</Button>
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

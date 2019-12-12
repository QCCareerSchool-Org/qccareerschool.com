import { NextPage } from 'next';
import Head from 'next/head';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';

import { DefaultLayout } from '../layouts/default-layout';
import { LocationStateContext } from '../providers/location';

import HeroHome from '../images/backgrounds/hero-home.jpg';

const ContactPage: NextPage = () => {
  const location = useContext(LocationStateContext);

  function address(): JSX.Element {
    switch (location?.countryCode) {
      case 'GB': return (
        <>
          186 St. Albans Road<br />
          Suite 18<br />
          Watford WD24 4AS<br />
          0800 066 4734
        </>
      );
      case 'AU': return (
        <>
          78 Williams Street<br />
          Suite 23<br />
          Sydney, NSW 2011<br />
          1800 531 923
        </>
      );
      case 'NZ': return (
        <>
          78 Williams Street<br />
          Suite 23<br />
          Sydney, NSW 2011<br />
          Australia
          0800-451-979
        </>
      );
      case 'CA': return (
        <>
          38 McArthur Avenue<br />
          Ottawa, ON K1L 6R2<br />
          1-833-600-3751
        </>
      );
      case 'US': return (
        <>
          7201 Wisconsin Avenue<br />
          Suite 440<br />
          Bethesda, MD 20814<br />
          1-833-600-3751
        </>
      );
      default: return (
        <>
          38 McArthur Avenue<br />
          Ottawa, ON K1L 6R2<br />
          Canada<br />
          +1-613-749-8248
        </>
      );
    }
  }

  return (
    <DefaultLayout>
      <Head>
        <title>Contact Us - QC Career School</title>
      </Head>

      <section id="first-section" className="text-dark">
        <Container>
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
        </Container>
      </section>

      <section>
        <Container>
          {address()}
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

export default ContactPage;

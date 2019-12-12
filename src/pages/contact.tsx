import { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoMdChatbubbles, IoMdMail, IoMdPhonePortrait   } from 'react-icons/io';

import { DefaultLayout } from '../layouts/default-layout';
import { LocationStateContext } from '../providers/location';

import HeroHome from '../images/backgrounds/hero-home.jpg';

const ContactPage: NextPage = () => {
  const iconSize = 100;
  const location = useContext(LocationStateContext);

  function address(): JSX.Element {
    switch (location?.countryCode) {
      case 'GB': return (
        <>
          <h3>Address</h3>
          186 St. Albans Road<br />
          Suite 18<br />
          Watford WD24 4AS<br />
          0800 066 4734
        </>
      );
      case 'AU': return (
        <>
          <section className="text-dark">
          <h3>Address</h3>
          78 Williams Street<br />
          Suite 23<br />
          Sydney, NSW 2011<br />
          1800 531 923
          </section>
        </>
      );
      case 'NZ': return (
        <>
          <section className="text-dark">
          <h3>Address</h3>
          78 Williams Street<br />
          Suite 23<br />
          Sydney, NSW 2011<br />
          Australia
          0800-451-979
          </section>
        </>
      );
      case 'CA': return (
        <>
          <section className="text-dark">
          <h3>Address</h3>
          38 McArthur Avenue<br />
          Ottawa, ON K1L 6R2<br />
          1-833-600-3751
          </section>
        </>
      );
      case 'US': return (
        <>
          <section className="text-dark">
          <h3>Address</h3>
          7201 Wisconsin Avenue<br />
          Suite 440<br />
          Bethesda, MD 20814<br />
          1-833-600-3751
          </section>
        </>
      );
      default: return (
        <>
          <section className="text-dark">
          <h3>Address</h3>
          38 McArthur Avenue<br />
          Ottawa, ON K1L 6R2<br />
          Canada<br />
          +1-613-749-8248
          </section>
        </>
      );
    }
  }

  return (
    <DefaultLayout>
      <Head>
        <title>Contact Us - QC Career School</title>
      </Head>

      <section id="first-section" className="text-light">
        <Container>
          <h1>Contact</h1>
          <p className="lead">Whether you have a question about enrolling, are a student looking for help with your account or an assignment, or are a graduate looking to expand your skillset, QC’s team of friendly student advisors are always happy to help. Reach out to us any time!</p>
        </Container>
      </section>

<section className="text-dark">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <IoMdPhonePortrait size={iconSize} />
              <h3>By Phone:</h3>
              <p>Our student support specialists are available by phone and are always happy to take some time to discuss your career path and goals at 1-833-600-3751.</p>
            </Col>
            <Col xs={12} md={4}>
              <IoMdMail size={iconSize} />
              <h3>By Email:</h3>
              <p>You are more than welcome to email us at info@qccareerschool.com. You can be sure to receive a quick and informative reply.</p>
            </Col>
            <Col xs={12} md={4}>
              <IoMdChatbubbles size={iconSize} />
              <h3>By Live Chat:</h3>
              <p>Have a quick question and want a speedy response? Our live chat representatives are there to help!</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          {address()}
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

export default ContactPage;

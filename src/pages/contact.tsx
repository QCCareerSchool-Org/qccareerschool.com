import { NextPage } from 'next';
import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoMdChatbubbles, IoMdMail, IoMdPhonePortrait } from 'react-icons/io';

import { SEO } from '../components/seo';
import { getTelephoneNumber } from '../functions';
import { DefaultLayout } from '../layouts/default-layout';
import { LocationStateContext } from '../providers/location';

import Hero from '../images/backgrounds/hero-contact.jpg';

const ContactPage: NextPage = () => {
  const iconSize = 100;
  const location = useContext(LocationStateContext);
  const telephoneNumber = getTelephoneNumber(location?.countryCode);

  return (
    <DefaultLayout>

      <SEO
        title="Contact"
        description="QC’s team of friendly student advisors are always happy to help. Reach out to us by phone email or live chat at any time!"
        canonical="/contact"
      />

      <section id="first-section" className="text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
            <h1>Contact</h1>
            <p className="lead">Whether you have a question about enrolling, are a student looking for help with your account or an assignment, or are a graduate looking to expand your skillset, QC’s team of friendly student advisors are always happy to help. Reach out to us any time!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-dark text-center">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <IoMdPhonePortrait size={iconSize} />
              <h3>By Phone</h3>
              <p>Our student support specialists are available by phone and are always happy to take some time to discuss your career path and goals at <a href={`tel:${telephoneNumber}`} className="text-nowrap">{telephoneNumber}</a>.</p>
            </Col>
            <Col xs={12} md={4}>
              <IoMdMail size={iconSize} />
              <h3>By Email</h3>
              <p>You are more than welcome to email us at <a href="mailto:info@qccareerschool.com" className="text-nowrap">info@qccareerschool.com</a>. You can be sure to receive a quick and informative reply.</p>
            </Col>
            <Col xs={12} md={4}>
              <IoMdChatbubbles size={iconSize} />
              <h3>By Live Chat</h3>
              <p>Have a quick question and want a speedy response? Our live chat representatives are there to help!</p>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        #first-section {
          background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${Hero}) 50% 0;
          background-size: cover;
        }
      `}</style>

    </DefaultLayout>
  );
};

export default ContactPage;

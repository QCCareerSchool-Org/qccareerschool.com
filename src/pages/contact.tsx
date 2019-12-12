import { NextPage } from 'next';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoMdChatbubbles, IoMdMail, IoMdPhonePortrait } from 'react-icons/io';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

import HeroHome from '../images/backgrounds/hero-home.jpg';

const ContactPage: NextPage = () => {
  const iconSize = 100;

  return (
    <DefaultLayout>

<SEO
      title="Contact"
      description="QC’s team of friendly student advisors are always happy to help. Reach out to us any time!"
      canonical="/contact" />

      <section id="first-section" className="text-light">
        <Container>
          <h1>Contact</h1>
          <p className="lead">Whether you have a question about enrolling, are a student looking for help with your account or an assignment, or are a graduate looking to expand your skillset, QC’s team of friendly student advisors are always happy to help. Reach out to us any time!</p>
        </Container>
      </section>

      <section className="text-dark text-center">
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

import { NextPage } from 'next';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { DefaultLayout } from '../../layouts/default-layout';

import CareersHeadquarters from '../../images/careers-headquarters.jpg';
import CareerStudents from '../../images/careers-students.jpg';
import CareerTutors from '../../images/careers-tutors.jpg';
import HeroCareers from '../../images/hero-careers.jpg';

const CareersPage: NextPage = () => (
  <DefaultLayout>

    <section id="first-section" className="bg-dark text-light">
      <Container>
        <h1>Careers</h1>
        <p className="lead mb-5 bold">Come work for QC Career School!</p>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-md-2">
            <img src={CareerStudents} alt="QC Student" className="sideImage" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3>Careers for Students and Graduates</h3>
            <p className="mb-4">QC Career School is an international distance-learning institution, and thus providing individual employment assistance to students and graduates is not available. However, all students and graduates have access to full business training as well as career resources to help you look for and secure work.</p>
            <p className="mb-4">Students and graduates also have access to an online career profile builder, which allows you to build a professional online profile that is searchable by potential clients.  Here’s where you can <Link href="/find-professionals"><a>find Professional Profiles of QC-trained professionals.</a></Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="bg-light">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <img src={CareerTutors} alt="QC Tutor" className="sideImage" />
          </Col>
          <Col xs={12} md={6}>
            <h3>Become a QC Tutor</h3>
            <p className="mb-4">QC is always looking for qualified, successful professionals who want to give back to their industry by becoming an educator. If you are a successful professional in one of QC’s industries and would like to discuss the possibility of becoming a tutor, please contact us!</p>
            <h3>Requirements for QC Tutors:</h3>
            <p className="mb-4">
              <ul>
                <li>3+ years experience in your industry</li>
                <li>Owner or senior-level employee in a successful business</li>
                <li>Strong communication skills</li>
                <li>A strong digital portfolio of recent works</li>
              </ul>
            </p>
            <p className="mb-4">We’re always happy to accept tutors from around the world! QC is an International school, and most of our students are located in the United States, Canada, Australia, the United Kingdom, and New Zealand.</p>
            <div className="text-left">
              <Link href="/contact"><a className="btn btn-secondary btn-sm">Contact QC</a></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-md-2">
            <img src={CareersHeadquarters} alt="Ottawa Landscape" className="sideImage" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3>Careers at QC Headquarters</h3>
            <p className="mb-4">QC’s head office is located in Ottawa, Ontario Canada. Typically jobs at QC will be listed on Indeed.ca and LinkedIn. QC is a growing company and we’re always looking for qualified course developers, IT professionals, Student Support Specialists, graphic designers, social media experts, and more. Be on the lookout for exciting professional opportunities!</p>
          </Col>
        </Row>
      </Container>
    </section>

    <style jsx>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroCareers}) 0 0;
        background-size: cover;
      }
      .sideImage {
        width: 100%;
      }
    `}</style>
  </DefaultLayout>
);

export default CareersPage;

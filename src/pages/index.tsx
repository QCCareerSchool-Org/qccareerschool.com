import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../components/bar';
import { CourseCard } from '../components/course-card';
import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

import Emblem from '../images/35-year-emblem.png';
import Design from '../images/backgrounds/hero-faculty-design.jpg';
import Event from '../images/backgrounds/hero-faculty-event.jpg';
import Makeup from '../images/backgrounds/hero-faculty-makeup.jpg';
import Pet from '../images/backgrounds/hero-faculty-pet.jpg';
import Style from '../images/backgrounds/hero-faculty-style.jpg';
import Travel from '../images/backgrounds/hero-faculty-travel.jpg';
import Wellness from '../images/backgrounds/hero-faculty-wellness.jpg';
import Writing from '../images/backgrounds/hero-faculty-writing.jpg';
import Hero from '../images/backgrounds/hero-home.jpg';

const HomePage: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="QC Career School"
      description="QC is a leader in online distance education. With QC you’ll graduate with the skills and confidence you need to start a successful professional career!"
      canonical="/"
    />

    <section id="first-section" className="text-light">
      <Container>
        <Col xs="12" md="10" lg="7" className="offset-md-1">
          <p className="hat">QC Career School</p>
          <h1 className="text-shadow">Providing Quality Distance Education for 35 Years and Counting</h1>
          <Bar className="text-secondary" />
        </Col>
      </Container>
    </section>

    <section>
      <Container className="text-center">
        <Col xs="12" md="8" className="offset-md-2">
          <img src={Emblem} alt="emblem" className="mb-4" />
          <h2 className="text-center">Welcome to QC Career School!</h2>
          <p>QC is a leader in online distance education. With eight faculties and courses available around the globe, QC offers affordable and convenient career training in a variety of professional fields.  With QC’s unparalleled student support, professional tutors, and unique online learning system based on direct feedback, you’ll graduate with the skills and confidence you need to start a successful professional career!</p>
        </Col>
      </Container>
    </section>

    <section className="text-dark bg-light">
      <Container>
        <h2>QC Career School Faculties</h2>
        <Bar className="text-primary mb-5" />
        <Row>
          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={Makeup}
              alt="makeup artist applying makeup on a client"
              title="QC Makeup Academy"
              body="Basic and advanced professional makeup artistry courses for all skill levels."
              buttonText="VISIT QC MAKEUP ACADEMY"
              link="https://www.qcmakeupacademy.com/"
              externalLink={true}
            />
          </Col>
          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={Event}
              alt="event planning - professionally decorated dinner set"
              title="QC Event School"
              body="Training event planning professionals to launch their own business. Courses include party planning, wedding planning, corporate event planning and more."
              buttonText="VISIT QC EVENT SCHOOL"
              link="https://www.qceventplanning.com/"
              externalLink={true}
            />
          </Col>
          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={Design}
              alt="professionally designed living room"
              title="QC Design School"
              body=" Offering courses in all areas of home design from interior decorating to professional organizing."
              buttonText="VISIT QC DESIGN SCHOOL"
              link="https://www.qcdesignschool.com/"
              externalLink={true}
            />
          </Col>
          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={Pet}
              alt="dog groomer bathing a small dog"
              title="QC Pet Studies"
              body="Training dog grooming professionals from the comfort of home through innovative interactive tutorials and assignments."
              buttonText="VISIT QC PET STUDIES"
              link="https://www.doggroomingcourse.com/"
              externalLink={true}
            />
          </Col>
          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={Wellness}
              alt="wellness professional putting a baby to sleep"
              title="QC Wellness Studies"
              body="Offering professional certification courses in a number of wellness industries, from sleep consulting to home health aides."
              buttonText="VISIT QC WELLNESS STUDIES"
              link="https://www.qcwellnessstudies.com/"
              externalLink={true}
            />
          </Col>
          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={Style}
              alt="professional stylist shopping with her client"
              title="QC Style Academy"
              body="Partnered with QC Makeup Academy to offer courses to beauty professionals expanding into personal styling."
              buttonText="VISIT QC STYLE ACADEMY"
              link="https://www.qcstyleacademy.com/"
              externalLink={true}
            />
          </Col>
          <Col xs="12" md="6" className="mb-g mb-md-0 d-flex">
            <CourseCard
              img={Travel}
              alt="traveling couple enjoying an amazing view"
              title="QC Travel School"
              body="Training professional travel agents in an ever competing marketplace."
              buttonText="VISIT QC TRAVEL SCHOOL"
              link="https://www.qctravelschool.com/"
              externalLink={true}
            />
          </Col>
          <Col xs="12" md="6" className="mb-g mb-md-0 d-flex">
            <CourseCard
              img={Writing}
              alt="person writing a book"
              title="Winghill Writing School"
              body="The school that started it all! Winghill offers a myriad of writing courses from novel writing to family history writing and much more."
              buttonText="VISIT WINGHILL WRITING SCHOOL"
              link="https://www.winghill.com/"
              externalLink={true}
            />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="text-light bg-dark">
      <Container>
        <Row>
          <Col xs="12" md="4" className="mb-5 mb-md-0">
            <h3 className="mb-3">Full Course<br />Catalog</h3>
            <p>View a full list and description of training programs and courses offered by QC Career School</p>
            <div className="buttonSpacer" />
            <Link href="/programs"><a className="absoluteButton btn btn-primary btn-sm caps">View Course Catalog</a></Link>
          </Col>
          <Col xs="12" md="4" className="mb-5 mb-md-0">
            <h3 className="mb-3">Enroll<br />Today</h3>
            <p>QC offers individual, group, and corporate admissions! Learn more about the admissions process and how you can enroll in a QC course!</p>
            <div className="buttonSpacer" />
            <Link href="/admissions"><a className="absoluteButton btn btn-primary btn-sm caps">Admissions</a></Link>
          </Col>
          <Col xs="12" md="4" className="mb-5 mb-md-0">
            <h3 className="mb-3">Find<br />Professionals</h3>
            <p>Hire a QC graduate here! Search by profession and location</p>
            <div className="buttonSpacer" />
            <Link href="/find-professionals"><a className="absoluteButton btn btn-primary btn-sm caps">Find Professionals</a></Link>
          </Col>
        </Row>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${Hero}) 0 0;
        background-size: cover;
      }
      .buttonSpacer {
        height: 31px;
      }
      .absoluteButton {
        position: absolute;
        bottom: 0px;
      }
    `}</style>

  </DefaultLayout>
);

export default HomePage;

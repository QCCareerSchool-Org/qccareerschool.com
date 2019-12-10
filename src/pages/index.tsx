import { NextPage } from 'next';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../components/bar';
import { CourseCard } from '../components/course-card';
import { DefaultLayout } from '../layouts/default-layout';

import Emblem from '../images/35-year-emblem.png';
import HeroHome from '../images/backgrounds/hero-home.jpg';
import DesignFaculties from '../images/design-faculties-modern-living-room.jpg';
import EventFaculties from '../images/event-faculties-table.jpg';
import MakeupFaculties from '../images/makeup-faculties-applying-eyeliner.jpg';
import PetFaculties from '../images/pet-faculties-washing-dog.jpg';
import StyleFaculties from '../images/style-faculties-shopping-clothes.jpg';
import TravelFaculties from '../images/travel-faculties-woman-hiking.jpg';
import WritingFaculties from '../images/writing-faculties-woman.jpg';
import WellnessFaculties from '../images/writing-wellness-woman-baby.jpg';

const IndexPage: NextPage = () => (
  <DefaultLayout>

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
          <p className="lead">Lorem ipsum dolor sit amet</p>
          <p>QC is a leader in online distance education. With eight faculties and courses available around the globe, QC offers affordable and convenient career training in a variety of professional fields.  With QC’s unparalleled student support, professional tutors, and unique online learning system based on direct feedback, you’ll graduate with the skills and confidence you need to start a successful professional career!</p>
        </Col>
      </Container>
    </section>

    <section className="text-dark bg-light">
      <Container>
        <h2>QC Career School Faculties</h2>
        <p className="lead">Lorem ipsum dolor sit amet</p>
        <Bar className="text-primary mb-5" />

        <Row>

          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={MakeupFaculties}
              title="QC Makeup Academy"
              body="Basic and advanced professional makeup artistry courses for all skill levels."
              buttonText="LEARN MORE"
              buttonLink="https://www.qcmakeupacademy.com/"
            />
          </Col>

          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={EventFaculties}
              title="QC Event School"
              body="Training event planning professionals to launch their own business. Courses include party planning, wedding planning, corporate event planning and more."
              buttonText="LEARN MORE"
              buttonLink="https://www.qceventplanning.com/"
            />
          </Col>

          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={DesignFaculties}
              title="QC Design School"
              body=" Offering courses in all areas of home design from interior decorating to professional organizing."
              buttonText="LEARN MORE"
              buttonLink="https://www.qcdesignschool.com/"
            />
          </Col>

          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={PetFaculties}
              title="QC Pet Studies"
              body="Training dog grooming professionals from the comfort of home through innovative interactive tutorials and assignments."
              buttonText="LEARN MORE"
              buttonLink="https://www.doggroomingcourse.com/"
            />
          </Col>

          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={WellnessFaculties}
              title="QC Wellness Studies"
              body="Offering professional certification courses in a number of wellness industries, from sleep consulting to home health aides."
              buttonText="LEARN MORE"
              buttonLink="https://www.qcwellnessstudies.com/"
            />
          </Col>

          <Col xs="12" md="6" className="mb-g d-flex">
            <CourseCard
              img={StyleFaculties}
              title="QC Style Academy"
              body="Partnered with QC Makeup Academy to offer courses to beauty professionals expanding into personal styling."
              buttonText="LEARN MORE"
              buttonLink="https://www.qcstyleacademy.com/"
            />
          </Col>

          <Col xs="12" md="6" className="mb-g mb-md-0 d-flex">
            <CourseCard
              img={TravelFaculties}
              title="QC Travel School"
              body="Training professional travel agents in an ever competing marketplace."
              buttonText="LEARN MORE"
              buttonLink="https://www.qctravelschool.com/"
            />
          </Col>

          <Col xs="12" md="6" className="mb-g mb-md-0 d-flex">
            <CourseCard
              img={WritingFaculties}
              title="Winghill Writing School"
              body="The school that started it all! Winghill offers a myriad of writing courses from novel writing to family history writing and much more."
              buttonText="LEARN MORE"
              buttonLink="https://www.winghill.com/"
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
            <div className="absoluteButton btn btn-primary btn-sm caps">Normal Button</div>
          </Col>
          <Col xs="12" md="4" className="mb-5 mb-md-0">
            <h3 className="mb-3">Admission<br />Requirements</h3>
            <p>Interested in enrolling with QC Career School? Find out the admissions requirements and enroll here!</p>
            <div className="buttonSpacer" />
            <div className="absoluteButton btn btn-primary btn-sm caps">Normal Button</div>
          </Col>
          <Col xs="12" md="4" className="mb-5 mb-md-0">
            <h3 className="mb-3">Find<br />Professionals</h3>
            <p>Hire a QC graduate here! Search by profession and location</p>
            <div className="buttonSpacer" />
            <div className="absoluteButton btn btn-primary btn-sm caps">Normal Button</div>
          </Col>
        </Row>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 0 0;
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

export default IndexPage;

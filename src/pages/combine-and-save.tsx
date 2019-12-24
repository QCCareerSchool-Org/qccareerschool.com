import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../components/bar';
import { DefaultLayout } from '../layouts/default-layout';

import HeroHome from '../images/backgrounds/hero-home.jpg';
import BusinessCommunications from '../images/combine-business-communications.jpg';
import DecorColor from '../images/combine-decor-color.jpg';
import DestinationTravel from '../images/combine-destination-travel.jpg';
import DecorEvent from '../images/combine-interior-decorating-event-decor.jpg';
import MakeupWedding from '../images/combine-makeup-wedding-planning.jpg';
import WriteMakeup from '../images/combine-screenwriting-makeup.jpg';

const CombinePage: NextPage = () => (
  <DefaultLayout>

    <section id="first-section" className="text-light">
      <Container>
        <h1>Combine Your Training and Save</h1>
        <p className="lead mb-5 bold">When you enroll with QC Career School, you join an international community of creative professionals who understand and value the benefits of continued education.</p>
        <p className="lead mb-5 bold">That's why QC offers a 50% discount on all additional courses you enroll in!</p>
      </Container>
    </section>

    <section id="second-section" className="text-light">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <p className="lead mb-5 bold">Many QC students choose to get more than one certification in order to diversify their skill set and enhance their business. It’s very common to combine courses from the same school (example: Master Makeup Artistry + Pro Makeup Workshop, or Event &amp; Wedding Planning + Event Décor), however you can also mix &amp; match courses between different schools!</p>
          </Col>
          <Col xs={12} md={6}>
            <p className="lead mb-5 bold">Consider taking these complementary courses to expand your business reach &amp; clientele:</p>
            <Bar className="text-primary mb-5" />
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <h3>Master Makeup Artistry + Event &amp; Wedding Planning</h3>
            <p className="mb-4">Most special events will require a makeup artist at some point. So why not offer dual services? Sure if you’re coordinating a big wedding you might not be able to also do the bridal party’s makeup on the big day (you’ll be busy with planning duties), but most smaller-scale weddings or other special events should allow you some free time to offer makeup services. Your clients will love the flexibility you offer, not to mention the convenience of only having to hire a single professional who offers the full package!</p>
            <div className="text-left">
              <Link href="/contact"><a className="btn btn-secondary">Contact Us</a></Link>
            </div>
          </Col>
          <Col xs={12} md={6} className="mb-4 md-md-0 order-1 order-md-2">
            <img src={MakeupWedding} alt="applying makeup on wedding bride" className="sideImage" />
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 md-md-0">
            <img src={DecorEvent} alt="interior decorated event" className="sideImage" />
          </Col>
          <Col xs={12} md={6}>
            <h3>Interior Decorating + Event Décor</h3>
            <p className="mb-4">If you would like to enroll with QC along with a friend, colleague or family member, you can take advantage of QC’s group admissions discount! Any group of two or more enrolling in any course (you don’t all have to enroll in the same course!) will receive a 25% discount for each individual enrolling. Simply call the school to enroll; this is only available for phone enrollments. Note that this discount cannot be combined with other offers or promotions.</p>
            <div className="text-left">
              <Link href="/contact"><a className="btn btn-secondary">Contact Us</a></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <h3>Destination Wedding Planning + Travel &amp; Tourism</h3>
            <p className="mb-4">A destination wedding planner’s job is to plan &amp; coordinate the big day. At some point, the planner will work with a travel agent to organize the wedding party’s travel arrangements and itinerary for the full trip. Why not skip the middle man and have the skills to offer the full service yourself? Again, clients will be thrilled to rely on a single professional who offers a no-hassle service like this.</p>
            <div className="text-left">
              <Link href="/contact"><a className="btn btn-secondary">Contact Us</a></Link>
            </div>
          </Col>
          <Col xs={12} md={6} className="mb-4 md-md-0 order-1 order-md-2">
            <img src={DestinationTravel} alt="destination wedding and travel" className="sideImage" />
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 md-md-0">
            <img src={WriteMakeup} alt="screenwriting and makeup" className="sideImage" />
          </Col>
          <Col xs={12} md={6}>
            <h3>Screenwriting + Master Makeup Artistry</h3>
            <p className="mb-4">Being a trained makeup artist can help you develop and sell your screenplays. Having the skills and expertise in makeup (or special FX makeup) can help you better envision the final product as you’re developing your script. Furthermore, when selling your script, you can take the time to actually get a few models and develop a portfolio of concepts to give stakeholders a visual to go along with your written work.</p>
            <div className="text-left">
              <Link href="/contact"><a className="btn btn-secondary">Contact Us</a></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <h3>Event Décor + Color Consulting</h3>
            <p className="mb-4">Event Decorators often need inspiration to create an event’s theme. Being able to draw that inspiration from your clients’ life can make the event even more magical. The color consultant course shows you how to bring the color wheel to life and help your clients choose a color palette that speaks to them. As an event decorator, you can use these same skills to develop an event theme that will wow any client.</p>
            <div className="text-left">
              <Link href="/contact"><a className="btn btn-secondary">Contact Us</a></Link>
            </div>
          </Col>
          <Col xs={12} md={6} className="mb-4 md-md-0 order-1 order-md-2">
            <img src={DecorColor} alt="event decoration and color consulting" className="sideImage" />
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 md-md-0">
            <img src={BusinessCommunications} alt="business communications" className="sideImage" />
          </Col>
          <Col xs={12} md={6}>
            <h3>Any QC Course + Business Communications</h3>
            <p className="mb-4">Being able to communicate effectively as a business owner is a key to success. Though most of QC’s courses will come with complete business training, this training mainly focuses on how to start and manage your business (business plan, marketing, etc.). Some QC students could greatly benefit from a basic business communications course where the focus is on how to effectively connect with clients, colleagues, and stakeholders alike.</p>
            <div className="text-left">
              <Link href="/contact"><a className="btn btn-secondary">Contact Us</a></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="bg-dark text-light text-center">
      <Container>
        <h3>Enroll in multiple courses today!</h3>
        <p className="lead mb-5 bold">If you would like to enroll in any of the courses above or another combination of courses from different QC faculties, simply contact QC’s student support center and we’ll be happy to help!</p>
        <Link href="/contact"><a className="btn btn-secondary">Contact Us</a></Link>
      </Container>
    </section>

    <style jsx>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 0 0;
        background-size: cover;
      }
      #second-section {
        background: linear-gradient(35deg, #011037, #130820);
      }
      .sideImage {
        width: 100%;
      }
    `}</style>
  </DefaultLayout>
);

export default CombinePage;

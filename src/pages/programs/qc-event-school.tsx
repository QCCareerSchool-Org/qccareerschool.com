import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import CardColumn from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { DefaultLayout } from '../../layouts/default-layout';

import EventAccelerate from '../../images/course-event-accelerate.jpg';
import EventCorporate from '../../images/course-event-corporate.jpg';
import EventDecor from '../../images/course-event-decor.jpg';
import EventWedding from '../../images/course-event-wedding.jpg';

const EventPlanningPage: NextPage = () => (
  <DefaultLayout>

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Container>
        <Row>
          <Col xs={12} md={8} className="offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>QC Event School</h1>
            <p className="lead">The event planning industry is expecting a 110% growth over the next 10 years! If you’re organized, detail-oriented, and enjoy working with people, you might just have found your new career in event and wedding planning! QC provides fundamental, specialized, and advanced courses for event planning professionals of all skill levels.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={EventWedding}
              alt="professionally decorated wedding table"
              title="Event &amp; Wedding Planning Course"
              body="This dual-certification course will prepare you to plan and coordinate any number of private events from weddings to birthday parties to religious celebrations. You’ll learn how to negotiate with vendors, establish long-lasting client relationships, and budget for any event or client. With QC’s unparalleled business training, you’ll graduate from this course with the knowledge and skills to be a successful planning professional."
              buttonText="Full Course Overview"
              link="https://www.qceventplanning.com/online-event-courses/event-and-wedding-planning/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={EventCorporate}
              alt="corporate event master of ceremonies making a speech"
              title="Corporate Event Planning Course"
              body="Catering to corporate clients is a very different experience from working for private clients. This course focuses on the project management aspects you’ll be expected to master in order to work with a number of corporate stakeholders. You’ll also learn how to work around the unique challenges of planning conferences, trade shows, and other types of corporate events."
              buttonText="Full Course Overview"
              link="https://www.qceventplanning.com/online-event-courses/corporate-event-planning/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={EventDecor}
              alt="professionally decorated dinner table"
              title="Event Décor Course"
              body="The perfect course to complement your fundamental event planner training. The Event Décor Course teaches you to create a cohesive décor to suit any theme, and how to plan for and incorporate all decorative elements that brings an event together. Being an event decorator can be a full-time job, or it can be a perfect addition to your booming event planning business!"
              buttonText="Full Course Overview"
              link="https://www.qceventplanning.com/online-event-courses/event-decor/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={EventAccelerate}
              alt="business owners closing a new deal"
              title="Accelerate Your Business Workshop"
              body="For the established event planning business owner who wants to take their business to the next level.  In this advanced course, you’ll work one-on-one with your tutor to enhance a specific area of your business where you can use some help. This is a very flexible course where you set the tone with your tutor. You’ll work on a specific goal for your business."
              buttonText="Full Course Overview"
              link="https://www.qceventplanning.com/online-event-courses/accelerate-your-business/"
              externalLink={true}
            />
          </CardColumn>
        </Row>
        <h3>Additional Event Planning Courses:</h3>
        <ul>
          <li>Private Event Planning Course</li>
          <li>Wedding Planning Course</li>
          <li>Luxury Wedding Planning Specialization</li>
          <li>Destination Wedding Planning Specialization</li>
          <li>Festivals &amp; Live Events Planning Specialization</li>
          <li>Promotional Event Planning Specialization</li>
        </ul>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${EventWedding}) 50% 0;
        background-size: cover;
      }
    `}</style>

  </DefaultLayout>
);

export default EventPlanningPage;

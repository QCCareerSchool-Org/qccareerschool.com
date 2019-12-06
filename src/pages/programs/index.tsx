import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import CardColumn from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { DefaultLayout } from '../../layouts/default-layout';

import HeroHome from '../../images/backgrounds/hero-home.jpg';
import DesignInterior from '../../images/course-design-interior.jpg';
import EventWedding from '../../images/course-event-wedding.jpg';
import MakeupMaster from '../../images/course-makeup-master.jpg';
import PetGrooming from '../../images/course-pet-grooming.jpg';
import WellnessSleep from '../../images/course-welness-sleep.jpg';

const ProgramsPage: NextPage = () => (
  <DefaultLayout>

    <section id="first-section" className="bg-dark text-light text-shadow">
      <Container>
        <Bar className="text-primary mb-5" />
        <p className="hat">QC Career School</p>
        <h1>Courses &amp; Professional Training Programs</h1>
        <p className="lead">Learning online doesn’t have to mean learning on your own. QC’s expert course developers and tutors have spent years developing a unique and comprehensive approach to online learning that will offer the flexibility you need while giving you the high quality training and personalized feedback you deserve!</p>
      </Container>
    </section>

    <section>
        <Container>
      <Row>
        <Col xs={12} md={8}>
        <h2>QC Career School Faculties</h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Bar className="text-primary" />
    </Col>
    </Row>
    </Container>
    </section>

    <section className="negative-section" >
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="QC Makeup Academy"
              body="QC Makeup Academy offers a number of fundamental, advanced, and specialized courses for makeup artists. Whether you’re a total beginner or a seasoned professional, you’ll find a QC course to help develop your makeup skills and take you to the next level professionally!"
              buttonText="Learn More"
              buttonLink="/programs/makeup-academy"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={EventWedding}
              title="QC Event School"
              body="The event planning industry is expecting a 110% growth over the next 10 years! If you’re organized, detail-oriented, and enjoy working with people, you might just have found your new career in event and wedding planning! QC provides fundamental, specialized, and advanced courses for event planning professionals of all skill levels."
              buttonText="Learn More"
              buttonLink="/programs/event-school"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={DesignInterior}
              title="QC Design School"
              body="It’s hard to make a work of art if you don’t start with a healthy canvas. That’s why QC tutors recommend that eveHome design is often an overlooked industry yet a very creative and rewarding field. A trained design professional has the flexibility to work full-time or part-time. They can focus on specialized areas of the design industry, or they can broaden their services to attract a wider range of clients.ry student takes the skincare course! This course will teach makeup artists how to help clients achieve healthy, glowing skin which will make your makeup skills shine!"
              buttonText="Learn More"
              buttonLink="/programs/design-school"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={PetGrooming}
              title="QC Pet Studies"
              body="Working with animals is a dream for many people. But most animal fields require years of study before you can start your career.  QC is working to bring animal care careers into the world of online learning! With interactive online training under an expert’s tutelage, you’ll work at your own pace while completing hands-on assignments that prepare you for your chosen field."
              buttonText="Learn More"
              buttonLink="/programs/dog-grooming"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={WellnessSleep}
              title="QC Wellness Studies"
              body="If you’re looking for a fulfilling career where you can help people by contributing to their overall wellbeing, QC Wellness Studies has you covered. This is QC’s newest faculty and is expanding into different areas of wellness, from Sleep Consulting to Personal Care Aide Training."
              buttonText="Learn More"
              buttonLink="/programs/wellness"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="Winghill School of Writing"
              body="Let your creativity soar with a number of writing courses that will help you become a published author.  Winghill’s courses are extremely flexible and designed to work with you as you turn your ideas into workable manuscripts with the help of your tutor.  Choose a course based on your writing genre and goals. Popular courses include the Creative Writing Course, Novel Writing Course, or Screenwriting Course, among others"
              buttonText="Learn More"
              buttonLink="/programs/"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="QC Travel School"
              body="Travel agents might not be as common these days thanks to cheap online travel sites, however for the clientele will still pay handsomely for the services of a seasoned travel agent who can arrange a fantastic getaway &amp; travel itinerary from start to finish. Learn the tools of the trade and how to make a successful career in this highly competitive industry with the Travel &amp; Tourism Course!"
              buttonText="Learn More"
              buttonLink="/programs/"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="QC Style Academy"
              body="Partnered closely with QC Makeup Academy, the Style academy will introduce you to a different angle to the beauty industry with its Fashion Styling Course. Become a full-time fashion stylist and/or personal shopper, or pair those services to your thriving beauty business to offer full-service solutions to your clients. The possibilities are limitless!"
              buttonText="Learn More"
              buttonLink="/programs/"
            />
          </CardColumn>
        </Row>
      </Container>
    </section>

    <style jsx>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 0 0;
        background-size: cover;
      }
    `}</style>
  </DefaultLayout>
);

export default ProgramsPage;

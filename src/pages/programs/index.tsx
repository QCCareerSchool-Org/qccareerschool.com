import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import { CardColumn } from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { SEO } from '../../components/seo';
import { DefaultLayout } from '../../layouts/default-layout';

import Other from '../../images/backgrounds/hero-additional-programs.jpg';
import Design from '../../images/backgrounds/hero-faculty-design.jpg';
import Event from '../../images/backgrounds/hero-faculty-event.jpg';
import Makeup from '../../images/backgrounds/hero-faculty-makeup.jpg';
import Pet from '../../images/backgrounds/hero-faculty-pet.jpg';
import Wellness from '../../images/backgrounds/hero-faculty-wellness.jpg';
import Hero from '../../images/backgrounds/hero-home.jpg';

const ProgramsPage: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="Courses &amp; Professional Training Programs"
      description="QC’s comprehensive approach to online learning will offer the flexibility you need while giving you the high-quality training &amp; personalized feedback you deserve"
      canonical="/programs"
    />

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
            <p className="lead">QC contains 7 faculty schools that specialize in different industries.</p>
            <Bar className="text-primary" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={Makeup}
              alt="makeup artist applying liptstick on a client"
              title="QC Makeup Academy"
              body="QC Makeup Academy offers a number of fundamental, advanced, and specialized courses for makeup artists. Whether you’re a total beginner or a seasoned professional, you’ll find a QC course to help develop your makeup skills and take you to the next level professionally!"
              buttonText="VISIT QC MAKEUP ACADEMY"
              link="/programs/qc-makeup-academy"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={Event}
              alt="professionally decorated wedding table"
              title="QC Event School"
              body="The event planning industry is expecting a 110% growth over the next 10 years! If you’re organized, detail-oriented, and enjoy working with people, you might just have found your new career in event and wedding planning! QC provides fundamental, specialized, and advanced courses for event planning professionals of all skill levels."
              buttonText="VISIT QC EVENT SCHOOL"
              link="/programs/qc-event-school"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={Design}
              alt="professionally decorated dining room"
              title="QC Design School"
              body="It’s hard to make a work of art if you don’t start with a healthy canvas. That’s why QC tutors recommend that eveHome design is often an overlooked industry yet a very creative and rewarding field. A trained design professional has the flexibility to work full-time or part-time. They can focus on specialized areas of the design industry, or they can broaden their services to attract a wider range of clients.ry student takes the skincare course! This course will teach makeup artists how to help clients achieve healthy, glowing skin which will make your makeup skills shine!"
              buttonText="VISIT QC DESIGN SCHOOL"
              link="/programs/qc-design-school"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={Pet}
              alt="dog groomer cutting dog's hair"
              title="QC Pet Studies"
              body="Working with animals is a dream for many people. But most animal fields require years of study before you can start your career. QC is working to bring animal care careers into the world of online learning! With interactive online training under an expert’s tutelage, you’ll work at your own pace while completing hands-on assignments that prepare you for your chosen field."
              buttonText="VISIT QC PET STUDIES"
              link="/programs/qc-pet-studies"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={Wellness}
              alt="sleeping baby"
              title="QC Wellness Studies"
              body="If you’re looking for a fulfilling career where you can help people by contributing to their overall wellbeing, QC Wellness Studies has you covered. This is QC’s newest faculty and is expanding into different areas of wellness, from Sleep Consulting to Personal Care Aide Training."
              buttonText="VISIT QC WELLNESS STUDIES"
              link="/programs/qc-wellness-studies"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={Other}
              alt="checking additional programs in a laptop"
              title="Additional Programs"
              body="Other QC Schools include the QC Style Academy, QC Travel School and Winghill Writing School. Explore these additional programs here!"
              buttonText="VISIT ADDITIONAL PROGRAMS"
              link="/programs/additional-programs"
            />
          </CardColumn>
        </Row>
      </Container>
    </section>

    <style jsx>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${Hero}) 0 0;
        background-size: cover;
      }
    `}</style>
  </DefaultLayout>
);

export default ProgramsPage;

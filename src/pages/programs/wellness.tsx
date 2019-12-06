import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import CardColumn from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { DefaultLayout } from '../../layouts/default-layout';

import WellnessCare from '../../images/course-welness-personal-care.jpg';
import WellnessSleep from '../../images/course-welness-sleep.jpg';

const WelnessPage: NextPage = () => (
  <DefaultLayout>
  <section id="first-section" className="text-light overlay-section bg-dark text-light text-shadow text-right">
  <Container>
    <Row>
      <Col xs={12} md={8} className="offset-md-4">
      <Bar className="text-primary ml-auto" />
      <h2>QC Wellness Studies</h2>
        <p className="lead">If you’re looking for a fulfilling career where you can help people by contributing to their overall wellbeing, QC Wellness Studies has you covered. This is QC’s newest faculty and is expanding into different areas of wellness, from Sleep Consulting to Personal Care Aide Training.</p>
        </Col>
    </Row>
    </Container>
    </section>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={WellnessSleep}
              title="Pediatric Sleep Consultant Course"
              body="Sleep consulting is a growing industry as more busy parents seek professional help to ensure their child gets a good night’s rest. As a highly trained professional sleep consultant, you’ll have the tools and skills you need to work with families in desperate need of your help. After all, if baby doesn’t sleep, the parents don’t either!"
              buttonText="Full Course Overview"
              buttonLink="https://www.qcwellnessstudies.com/courses-and-tuition/sleep-consultant/"
            />
          </CardColumn>
        </Row>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${WellnessSleep}) 50% 0;
        background-size: cover;
      }
    `}</style>

  </DefaultLayout>
);

export default WelnessPage;

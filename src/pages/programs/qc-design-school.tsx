import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import CardColumn from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { DefaultLayout } from '../../layouts/default-layout';

import DesignHomeStaging from '../../images/course-design-homestaging.jpg';
import DesignInterior from '../../images/course-design-interior.jpg';
import DesignOrganizing from '../../images/course-design-organizing.jpg';

const InteriorDecoratingPage: NextPage = () => (
  <DefaultLayout>

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Container>
        <Row>
          <Col xs={12} md={8} className="offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>QC Design School</h1>
            <p className="lead">Home design is often an overlooked industry yet a very creative and rewarding field. A trained design professional has the flexibility to work full-time or part-time. They can focus on specialized areas of the design industry, or they can broaden their services to attract a wider range of clients.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={DesignInterior}
              title="Interior Decorating Course"
              body="Interior Decorating is a home designer’s bread &amp; butter. In this course you’ll learn how to create beautiful spaces customized to your clients’ tastes and for their specific needs. The course comes with full business training, so you’ll graduate with all the tools and skills you need to start a successful decorating business."
              buttonText="Full Course Overview"
              buttonLink="https://www.qcdesignschool.com/online-courses/interior-decorating/"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={DesignHomeStaging}
              title="Home Staging Course"
              body="Working with sellers and real estate agents to stage a home can be incredibly rewarding for any designer. A well-staged home sells more quickly and fetches a higher market price, so more and more sellers are opting to hire professional home stagers when putting a house on the market. Partner with a few real estate agents and you’ll have a successful business in no time!"
              buttonText="Full Course Overview"
              buttonLink="https://www.qcdesignschool.com/online-courses/home-staging/"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={DesignOrganizing}
              title="Professional Organizing Course"
              body="The art of getting organized has become increasingly popular in recent years thanks to shows that highlight the joys of living in a sparse and organized space. Often times, individuals will attempt to get themselves organized only to revert to old habits very quickly. As a professional organizer, you’ll give clients custom solutions to keep them organized for years to come."
              buttonText="Full Course Overview"
              buttonLink="https://www.qcdesignschool.com/online-courses/professional-organizing/"
            />
          </CardColumn>
        </Row>
        <h3>Additional Design Courses:</h3>
        <ul>
          <li>Color Consultant Course</li>
          <li>Feng Shui Design Course</li>
          <li>Aging in Place Course</li>
        </ul>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${DesignInterior}) 50% 0;
        background-size: cover;
      }
    `}</style>

  </DefaultLayout>
);

export default InteriorDecoratingPage;

import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import CardColumn from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { DefaultLayout } from '../../layouts/default-layout';

import WritingFaculties from '../../images/writing-faculties-woman.jpg';

const WritingPage: NextPage = () => (
  <DefaultLayout>
  <section id="first-section" className="text-light overlay-section bg-dark text-light text-shadow text-right">
  <Container>
    <Row>
      <Col xs={12} md={8} className="offset-md-4">
      <Bar className="text-primary ml-auto" />
      <h2>Winghill School of Writing</h2>
        <p className="lead">Let your creativity soar with a number of writing courses that will help you become a published author.  Winghill’s courses are extremely flexible and designed to work with you as you turn your ideas into workable manuscripts with the help of your tutor.  Choose a course based on your writing genre and goals. Popular courses include the Creative Writing Course, Novel Writing Course, or Screenwriting Course, among others</p>
        </Col>
    </Row>
    </Container>
    </section>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={WritingFaculties}
              title="Lorem Ipsum"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dolor eget lorem condimentum eleifend a sit amet ante. Vivamus id mattis mi. Morbi ut arcu et ante gravida tempor. Aenean nisl ex, scelerisque sed rhoncus ut, venenatis vitae arcu. Maecenas tristique felis id eros molestie, vitae sagittis odio rutrum. Suspendisse pellentesque pretium orci, eget hendrerit magna bibendum vitae. Nam imperdiet quam suscipit lacinia tincidunt."
              buttonText="Full Course Overview"
              buttonLink="https://www.winghill.com/"
            />
          </CardColumn>
        </Row>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${WritingFaculties}) 50% 0;
        background-size: cover;
      }
    `}</style>

  </DefaultLayout>
);

export default WritingPage;

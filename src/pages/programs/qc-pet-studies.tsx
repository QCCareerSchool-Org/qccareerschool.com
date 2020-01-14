import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import CardColumn from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { SEO } from '../../components/seo';
import { DefaultLayout } from '../../layouts/default-layout';

import PetFirstAid from '../../images/course-pet-firstaid.jpg';
import PetGrooming from '../../images/course-pet-grooming.jpg';

const DogGroominPage: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="QC Pet Studies"
      description="Get the training to become a professional dog groomer with QC's affordable online dog grooming course. Learn from the experts and start your career today!"
      canonical="/programs/qc-pet-studies"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Container>
        <Row>
          <Col xs={12} md={8} className="offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h2>QC Pet Studies</h2>
            <p className="lead">Working with animals is a dream for many people. But most animal fields require years of study before you can start your career.  QC is working to bring animal care careers into the world of online learning! With interactive online training under an expert’s tutelage, you’ll work at your own pace while completing hands-on assignments that prepare you for your chosen field.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={PetGrooming}
              alt="dog groomer cutting dog's hair"
              title="Dog Grooming Course"
              body="Regular grooming is a key part to maintaining a dog’s health, and most dog owners prefer to leave their pooch’s grooming up to a qualified professional.  With the dog grooming course, you’ll learn how to groom all different breeds and the various popular cuts safely and effectively. You’ll also learn how to launch your own successful dog grooming business."
              buttonText="Full Course Overview"
              link="http://gooogle.com"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={PetFirstAid}
              alt="dog groomer applying first aid practices on a dog"
              title="First Aid for Groomers"
              body="Every groomer should be well-versed not only in preventing injuries, but also in dealing with injuries and medical emergencies should they happen.  This course covers the types of dog injuries and medical conditions a groomer might encounter throughout their career.  It’s yours at no cost when you enroll in the dog grooming course."
              buttonText="Full Course Overview"
              link="https://www.doggroomingcourse.com/online-courses/dog-grooming/course-outline/"
              externalLink={true}
            />
          </CardColumn>
        </Row>
        <h3>Additional Design Courses:</h3>
        <ul>
          <li>Breed Styling Workshop</li>
        </ul>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .60), rgba(0, 0, 0, .90)), url(${PetGrooming}) 100% 0;
        background-size: cover;
      }
    `}</style>

  </DefaultLayout>
);

export default DogGroominPage;

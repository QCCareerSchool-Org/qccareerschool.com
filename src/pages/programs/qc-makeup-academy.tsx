import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import CardColumn from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { SEO } from '../../components/seo';
import { DefaultLayout } from '../../layouts/default-layout';

import MakeupGlobalBeauty from '../../images/course-makeup-global-beauty.jpg';
import MakeupMaster from '../../images/course-makeup-master.jpg';
import MakeupPro from '../../images/course-makeup-pro-makeup.jpg';
import MakeupSFX from '../../images/course-makeup-sfx.jpg';
import MakeupSkin from '../../images/course-makeup-skincare.jpg';

const MakeupAcademy: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="QC Makeup Academy"
      description="QC Makeup Academy offers a number of courses for makeup artists. You’ll find a course to help develop your makeup skills &amp; take you to the next level!"
      canonical="/programs/qc-makeup-academy"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Container>
        <Row>
          <Col xs={12} md={8} className="offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>QC Makeup Academy</h1>
            <p className="lead">QC Makeup Academy offers a number of fundamental, advanced, and specialized courses for makeup artists. Whether you’re a total beginner or a seasoned professional, you’ll find a QC course to help develop your makeup skills and take you to the next level professionally!</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="negative-section">

      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="Master Makeup Artistry Course"
              body="QC’s most popular foundational makeup course trains you to be a professional makeup artist from the ground up. This comprehensive training course will teach you everything from basic makeup applications to bridal and editorial makeup, and more!"
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/master-makeup-artistry/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupPro}
              title="Pro Makeup Workshop with Nathan Johnson"
              body="Work with celebrity executive makeup artist Nathan Johnson to challenge your professional skills in this intense cutting-edge course. You’ll work with Nathan to enhance your creativity and use your advanced skills to become a trendsetter in the industry."
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/pro-makeup-workshop/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupSkin}
              title="Skincare Course"
              body="It’s hard to make a work of art if you don’t start with a healthy canvas. That’s why QC tutors recommend that every student takes the skincare course! This course will teach makeup artists how to help clients achieve healthy, glowing skin which will make your makeup skills shine!"
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/skincare-course/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupSFX}
              title="Special FX Makeup Course"
              body="This popular specialty makeup course will teach makeup artists the art of creating special effects through their makeup artistry. Whether you want to age a character, create a gunshot wound, or transform your subject into a mythical creature, this course will teach you the skills to get there."
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/special-fx-makeup/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupGlobalBeauty}
              title="Global Beauty Makeup Workshop"
              body="Makeup is a lifelong learning process. Once you’re done with the master makeup artistry course, the Global Beauty Workshop will take your skills to the next level by teaching you different makeup applications and trends from all over the world. "
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/global-beauty-workshop/"
              externalLink={true}
            />
          </CardColumn>
        </Row>
        <h3>Additional Courses for Makeup Artists</h3>
        <ul>
          <li>Airbrush Makeup Workshop</li>
          <li>Portfolio Development Workshop</li>
          <li>Hair Styling Essentials Course</li>
          <li>Personal Makeup Course</li>
        </ul>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${MakeupMaster}) 50% 0;
        background-size: cover;
      }
    `}</style>
  </DefaultLayout>
);
export default MakeupAcademy;

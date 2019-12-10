import { NextPage } from 'next';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { DefaultLayout } from '../layouts/default-layout';

import Corporate from '../images/admissions-corporate.jpg';
import PrivateGroup from '../images/admissions-private-group.jpg';
import HeroHome from '../images/backgrounds/hero-home.jpg';

const AdmissionsPage: NextPage = () => (
  <DefaultLayout>

    <section id="first-section" className="text-light">
      <Container>
        <h1>Admissions</h1>
        <p className="lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur</p>

        <h2>Admissions For Individuals</h2>
        <p>If you would like to enroll in one of QC’s courses, you can do so at the faculties’ online enrollment pages:</p>
        <ul>
          <li><a href="https://www.qcmakeupacademy.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Makeup Academy</a></li>
          <li><a href="https://www.qceventplanning.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Event School</a></li>
          <li><a href="https://www.qcdesignschool.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Design School</a></li>
          <li><a href="https://www.doggroomingcourse.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Pet Studies</a></li>
          <li><a href="https://www.qcwellnessstudies.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Wellness Studies</a></li>
          <li><a href="https://www.winghill.com/" target="_blank" rel="noopener noreferrer">Enroll with Winghill School of Writing</a></li>
          <li><a href="https://www.qcstyleacademy.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Style Academy</a></li>
          <li><a href="https://www.qctravelschool.com/" target="_blank" rel="noopener noreferrer">Enroll with QC Travel School</a></li>
        </ul>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <h3>Private Group Admissions &amp; Discounts</h3>
            <p className="mb-4">If you would like to enroll with QC along with a friend, colleague or family member, you can take advantage of QC’s group admissions discount! Any group of two or more enrolling in any course (you don’t all have to enroll in the same course!) will receive a 25% discount for each individual enrolling. Simply call the school to enroll; this is only available for phone enrollments.  Note that this discount cannot be combined with other offers or promotions.</p>
            <Link href="/contact"><a className="btn btn-secondary btn-lg">Contact QC</a></Link>                  
            </Col>
          <Col xs={12} md={6} className="mb-4 md-md-0 order-1 order-md-2">
            <img src={PrivateGroup} alt="Private Group Discounts" className="sideImage" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="bg-light">
      <Container>
        <Row>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <h3>Corporate Admissions</h3>
            <p className="mb-4">Over the years QC has worked with corporations to adapt course content, assignments and tuition/billing practices to corporate groups with specific goals for their employees. If you are a member of a corporation looking to train your employees via a QC course, please contact us to speak with a business development representative who will be happy to prepare a proposal that will suit your needs.           </p>
            <Link href="/contact"><a className="btn btn-secondary btn-lg">Contact QC</a></Link>
          </Col>
          <Col xs={12} md={6} className="mb-4 md-md-0 order-1 order-md-2">
            <img src={Corporate} alt="Corporate Admissions" className="sideImage" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="bg-dark text-light text-center">
      <Container>
        <Row>
          <Col md={10} lg={8} className="offset-md-1 offset-lg-2">
            <h3>Have Questions? We are here to help!</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sagittis augue. Praesent interdum odio a justo tincidunt, at scelerisque urna molestie. Ut euismod venenatis faucibus. Vestibulum auctor sollicitudin faucibus. In hac habitasse platea dictumst. Duis efficitur lectus a nisi tristique, id sollicitudin ex porta. In quis cursus urna. Sed fringilla ipsum vitae massa fermentum accumsan. Morbi a tincidunt justo. Phasellus aliquet at sem non cursus. Fusce risus arcu, imperdiet et iaculis in, vehicula in nulla. Aenean mauris urna, venenatis a egestas in, interdum vel ante. Morbi placerat malesuada malesuada. Duis vel nibh id urna pulvinar dignissim vel et lorem.</p>
            <Link href="/contact"><a className="btn btn-secondary btn-lg">Contact Us</a></Link>           
          </Col>
        </Row>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 0 0;
        background-size: cover;
      }
      #first-section a:link { color: white }
      #first-section a:visited { color: white }
      #first-section a:hover { color: white }
      #first-section a:active { color: white }

      .sideImage {
        width: 100%;
      }
    `}</style>

  </DefaultLayout>
);

export default AdmissionsPage;

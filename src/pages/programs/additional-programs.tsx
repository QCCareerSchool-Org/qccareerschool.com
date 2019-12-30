import { NextPage } from 'next';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import { DefaultLayout } from '../../layouts/default-layout';

import OtherPrograms from '../../images/hero-additional-programs.jpg';
import StyleFaculties from '../../images/style-faculties-shopping-clothes.jpg';
import TravelFaculties from '../../images/travel-faculties-woman-hiking.jpg';
import WritingFaculties from '../../images/writing-faculties-woman.jpg';

const AdditionalPrograms: NextPage = () => (
  <DefaultLayout>

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Container>
        <Row>
          <Col xs={12} md={8} className="offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>Additional Programs</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dolor eget lorem condimentum eleifend a sit amet ante. Vivamus id mattis mi. Morbi ut arcu et ante gravida tempor. Aenean nisl ex, scelerisque sed rhoncus ut, venenatis vitae arcu. Maecenas tristique felis id eros molestie, vitae sagittis odio rutrum. Suspendisse pellentesque pretium orci, eget hendrerit magna bibendum vitae. Nam imperdiet quam suscipit lacinia tincidunt.</p>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-md-2">
            <img src={WritingFaculties} alt="person writing a book" className="sideImage" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3>Winghill School of Writing</h3>
            <p className="mb-4">Let your creativity soar with a number of writing courses that will help you become a published author. Winghill’s courses are extremely flexible and designed to work with you as you turn your ideas into workable manuscripts with the help of your tutor. Choose a course based on your writing genre and goals. Popular courses include the Creative Writing Course, Novel Writing Course, or Screenwriting Course, among others</p>
            <Link href="https://www.winghill.com/"><a className="btn btn-secondary btn-sm">VISIT WINGHILL WRITING SCHOOL</a></Link>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="bg-light">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-md-2">
            <img src={TravelFaculties} alt="couple traveling through a beautiful landscape" className="sideImage" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3>QC Travel School</h3>
            <p className="mb-4">Travel agents might not be as common these days thanks to cheap online travel sites, however for the clientele will still pay handsomely for the services of a seasoned travel agent who can arrange a fantastic getaway &amp; travel itinerary from start to finish. Learn the tools of the trade and how to make a successful career in this highly competitive industry with the Travel &amp; Tourism Course!</p>
            <Link href="https://www.qctravelschool.com/"><a className="btn btn-secondary btn-sm">VISIT QC TRAVEL SCHOOL</a></Link>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-md-2">
            <img src={StyleFaculties} alt="style professional helping customer" className="sideImage" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3>QC Style Academy</h3>
            <p className="mb-4">Partnered closely with QC Makeup Academy, the Style academy will introduce you to a different angle to the beauty industry with its Fashion Styling Course. Become a full-time fashion stylist and/or personal shopper, or pair those services to your thriving beauty business to offer full-service solutions to your clients. The possibilities are limitless!</p>
            <Link href="https://www.qcstyleacademy.com/"><a className="btn btn-secondary btn-sm">VISIT QC STYLE ACADEMY</a></Link>
          </Col>
        </Row>
      </Container>
    </section>

    <style jsx={true}>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${OtherPrograms}) 50% 0;
        background-size: cover;
      }
      .sideImage {
        width: 100%;
      }
    `}</style>

  </DefaultLayout>
);

export default AdditionalPrograms;

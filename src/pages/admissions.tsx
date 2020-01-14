import { NextPage } from 'next';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { IoMdChatbubbles, IoMdCheckmarkCircle, IoMdHand, IoMdPeople, IoMdShuffle, IoMdTimer } from 'react-icons/io';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

import Corporate from '../images/admissions-corporate.jpg';
import PrivateGroup from '../images/admissions-private-group.jpg';
import HeroHome from '../images/backgrounds/hero-home.jpg';

const AdmissionsPage: NextPage = () => {
  const iconSize = 42;

  return (
    <DefaultLayout>

      <SEO
        title="Admissions"
        description="Enroll in a course today & join the QC Career School community! QC offers private group & corporate discounts. Read on about QC admissions process here!"
        canonical="/admissions"
      />

      <section id="first-section" className="text-light">
        <Container>
          <h1>Admissions</h1>
          <p className="lead mb-5">Enroll in a course today and join the QC Career School community!</p>
        </Container>
      </section>

      <section className="bg-light text-dark">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="individuals">
            <Row>
              <Col sm={3} className="mb-3 mb-sm-0">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="individuals">Individuals</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="groups">Groups</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="corporate">Corporate</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="individuals">
                    <h3>Admissions For Individuals</h3>
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
                  </Tab.Pane>
                  <Tab.Pane eventKey="groups">
                    <Row>
                      <Col xs={12} md={6}>
                        <h3>Private Group Admissions &amp; Discounts</h3>
                        <p className="mb-4">If you would like to enroll with QC along with a friend, colleague or family member, you can take advantage of QC’s group admissions discount! Any group of two or more enrolling in any course (you don’t all have to enroll in the same course!) will receive a 25% discount for each individual enrolling. Simply call the school to enroll; this is only available for phone enrollments. Note that this discount cannot be combined with other offers or promotions.</p>
                        <Link href="/contact"><a className="btn btn-secondary btn-sm">Contact QC</a></Link>
                      </Col>
                      <Col xs={12} md={6} className="mb-4 mb-md-0 d-none d-md-block">
                        <img src={PrivateGroup} alt="Private Group Discounts" className="sideImage" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="corporate">
                    <Row>
                      <Col xs={12} md={6}>
                        <h3>Corporate Admissions</h3>
                        <p className="mb-4">Over the years QC has worked with corporations to adapt course content, assignments and tuition/billing practices to corporate groups with specific goals for their employees. If you are a member of a corporation looking to train your employees via a QC course, please contact us to speak with a business development representative who will be happy to prepare a proposal that will suit your needs.           </p>
                        <Link href="/contact"><a className="btn btn-secondary btn-sm">Contact QC</a></Link>
                      </Col>
                      <Col xs={12} md={6} className="mb-4 mb-md-0 d-none d-md-block">
                        <img src={Corporate} alt="Corporate Admissions" className="sideImage" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

      <section className="text-dark">
        <Container>
          <h2 className="mb-5">How It Works</h2>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdTimer size={iconSize} /></span>No Deadlines or Mandatory Classes</h3>
              <p>You’ll never be on the clock to finish your assignments. You have a full two years to complete any training program, so there’s no rush and plenty of time if life gets in the way! (as a reference point, the average program completion time is 3 to 6 months)</p>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdHand size={iconSize} /></span>A hands-on approach</h3>
              <p>Some people have trouble understanding how you can learn a practical skill online. The answer is, your online training has to follow the same kind of hands-on methods as you’ll get in the classroom. Your training assignments will be a mix of theoretical and practical. Depending on the program you take, “practical” can mean anything from completing thorough case studies or real-world scenarios to actually completing a full makeup application or grooming a live dog!</p>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdChatbubbles size={iconSize} /></span>100% Personalized Tutor Feedback</h3>
              <p>All your assignments will be graded by a live tutor, who is a working professional in the industry you’re studying. Your tutor will provide you with detailed audio feedback on your work, indicating your strengths and also the areas where you need to improve. This unique approach to providing constructive feedback is how QC students graduate way ahead of the curve in all programs.</p>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdPeople size={iconSize} /></span>Unmatched Student Support</h3>
              <p>QC’s student advisors are available on extended hours to help you in any way they can. Whether you have a question about enrolling in a course, are having trouble with an assignment, or are looking for job seeking advice, your student support team will be available to help answer your questions or point you in the right direction!</p>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="h5"><span className="icon-wrapper"><IoMdShuffle size={iconSize} /></span>Flexible Payment Plans</h3>
              <p>With QC, you’ll receive top quality training at a cost you can afford. Every course comes with an available payment plan where you can pay off your tuition in affordable monthly installments. What’s more, if you ever need to miss a tuition payment, simply call your student advisor who will be happy to work with you!</p>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="h5"><span className="icon-wrapper"><IoMdCheckmarkCircle size={iconSize} /></span>Proven Track Record</h3>
              <p>Enroll with confidence in a school that has been offering quality distance education for over 35 years. QC has an A+ rating with the Better Business Bureau and thousands of successful graduates working careers they love. You can be one of them!</p>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx={true}>{`
        #first-section {
          background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 0 0;
          background-size: cover;
        }
        .sideImage {
          width: 100%;
        }
        .icon-wrapper { margin-right: 1rem; }
      `}</style>

    </DefaultLayout>
  );
};

export default AdmissionsPage;

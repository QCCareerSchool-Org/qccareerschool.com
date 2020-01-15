import { NextPage } from 'next';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { IoMdChatbubbles, IoMdCheckmarkCircle, IoMdHand, IoMdPeople, IoMdShuffle, IoMdTimer } from 'react-icons/io';

import { CourseCard } from '../components/course-card';
import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

import Corporate from '../images/admissions-corporate.jpg';
import PrivateGroup from '../images/admissions-private-group.jpg';
import Hero from '../images/backgrounds/hero-admissions.jpg';

import Design from '../images/course-design-interior.jpg';
import Event from '../images/course-event-wedding.jpg';
import Makeup from '../images/course-makeup-master.jpg';
import Pet from '../images/course-pet-grooming.jpg';
import Wellness from '../images/course-welness-sleep.jpg';

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
          <Tab.Container id="admissions-tabs" defaultActiveKey="individuals">
            <Row>
              <Col md={3} className="mb-3 mb-md-0">
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
              <Col md={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="individuals">
                    <h3>Admissions For Individuals</h3>
                    <p>If you would like to enroll in one of QC’s courses, you can do so at the faculties’ online enrollment pages:</p>
                    <Row>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <Card className="shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcmakeupacademy.com"><Card.Img variant="top" src={Makeup} alt="QC Makeup Academy" /></a>
                          <Card.Body className="pb-3">
                            <Card.Title className="h6">QC Makeup Academy</Card.Title>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcmakeupacademy.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <Card className="shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qceventplanning.com"><Card.Img variant="top" src={Event} alt="QC Event School" /></a>
                          <Card.Body className="pb-3">
                            <Card.Title className="h6">QC Event School</Card.Title>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.qceventplanning.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <Card className="shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcdesignschool.com"><Card.Img variant="top" src={Design} alt="QC Design School" /></a>
                          <Card.Body className="pb-3">
                            <Card.Title className="h6">QC Design School</Card.Title>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcdesignschool.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <Card className="shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.doggroomingcourse.com"><Card.Img variant="top" src={Pet} alt="QC Pet Studies" /></a>
                          <Card.Body className="pb-3">
                            <Card.Title className="h6">QC Pet Studies</Card.Title>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.doggroomingcourse.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <Card className="shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcwellnessstudies.com"><Card.Img variant="top" src={Wellness} alt="QC Wellness Studies" /></a>
                          <Card.Body className="pb-3">
                            <Card.Title className="h6">QC Wellness Studies</Card.Title>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcwellnessstudies.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </Card.Body>
                        </Card>
                      </div>
                    </Row>

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
              <p>You’ll never be on the clock to finish your assignments. You have a full two years to complete any training program, so there’s no rush and plenty of time if life gets in the way!</p>
              <p>Typically, students who work on their assignments for a short period each week will complete their course within four to six months.</p>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdHand size={iconSize} /></span>A hands-on approach</h3>
              <p>You might be wondering how you can learn a practical skill online. The answer is simple. Your online training relies on the same kind of hands-on methods you would follow in the classroom. Your training assignments are a mix of theoretical and practical. Depending on the program you take, “practical” can mean anything from completing case studies or working through real-world scenarios to completing a full makeup application or grooming a dog!</p>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdChatbubbles size={iconSize} /></span>100% Personalized Tutor Feedback</h3>
              <p>All your assignments will be graded by a your personal tutor, who is a working professional in the field you’re studying. Your tutor will provide you with detailed audio feedback on your work, indicating your strengths and also the areas where you need to improve. This unique approach to providing constructive feedback is why QC students graduate way ahead of the curve.</p>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdPeople size={iconSize} /></span>Unmatched Student Support</h3>
              <p>QC’s student advisors are available on extended hours to help you in any way they can. You might have a question about enrolling in a course, have trouble with an assignment, or be looking for advice on a job you are considering. Rest assured that your student support team will help answer your questions and will point you in the right direction.</p>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="h5"><span className="icon-wrapper"><IoMdShuffle size={iconSize} /></span>Flexible Payment Plans</h3>
              <p>With QC, you’ll receive top quality training at a price you can afford. Every course comes with a payment plan where you can pay off your tuition in affordable monthly installments. What’s more, if you ever need to miss a tuition payment, simply call your student advisor who will be happy to work with you!</p>
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
          background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${Hero}) 0 0;
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

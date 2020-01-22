import { NextPage } from 'next';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { IoMdChatbubbles, IoMdCheckmarkCircle, IoMdHand, IoMdPeople, IoMdShuffle, IoMdTimer } from 'react-icons/io';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

import Hero from '../images/backgrounds/hero-admissions.jpg';

const AdmissionsPage: NextPage = () => {
  const iconSize = 42;

  return (
    <DefaultLayout>

      <SEO
        title="Admissions"
        description="Enroll in a course today &amp; join the QC Career School community! QC offers private group &amp; corporate discounts. Read on about QC admissions process here!"
        canonical="/admissions"
      />

      <section id="first-section" className="text-light">
        <div className="container">
          <h1>Admissions</h1>
          <p className="lead mb-5">Enroll in a course today and join the QC Career School community!</p>
        </div>
      </section>

      <section className="bg-light text-dark">
        <div className="container">
          <Tab.Container id="admissions-tabs" defaultActiveKey="individuals">
            <div className="row">
              <div className="col-12 col-md-3 mb-3 mb-md-0">
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
              </div>
              <div className="col-12 col-md-9">
                <Tab.Content>
                  <Tab.Pane eventKey="individuals">
                    <h3>Admissions For Individuals</h3>
                    <p>If you would like to enroll in one of QC’s courses, you can do so at the faculties’ online enrollment pages:</p>
                    <div className="row">
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <div className="card shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcmakeupacademy.com">
                            <picture>
                              <source type="image/webp" srcSet={require('../images/faculty-makeup.jpg?webp')} />
                              <source type="image/jpg" srcSet={require('../images/faculty-makeup.jpg')} />
                              <img src={require('../images/faculty-makeup.jpg')} alt="QC Makeup Academy" className="card-img-top" />
                            </picture></a>
                          <div className="card-body pb-3">
                            <h5 className="h6 card-title">QC Makeup Academy</h5>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcmakeupacademy.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <div className="card shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qceventplanning.com">
                            <picture>
                              <source type="image/webp" srcSet={require('../images/faculty-event.jpg?webp')} />
                              <source type="image/jpg" srcSet={require('../images/faculty-event.jpg')} />
                              <img src={require('../images/faculty-event.jpg')} alt="QC Event School" className="card-img-top" />
                            </picture>
                          </a>
                          <div className="card-body pb-3">
                            <h5 className="card-title h6">QC Event School</h5>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.qceventplanning.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <div className="card shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcdesignschool.com">
                            <picture>
                              <source type="image/webp" srcSet={require('../images/faculty-design.jpg?webp')} />
                              <source type="image/jpg" srcSet={require('../images/faculty-design.jpg')} />
                              <img src={require('../images/faculty-design.jpg')} alt="QC Design School" className="card-img-top" />
                            </picture>
                          </a>
                          <div className="card-body pb-3">
                            <h5 className="card-title h6">QC Design School</h5>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcdesignschool.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <div className="card shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.doggroomingcourse.com">
                            <picture>
                              <source type="image/webp" srcSet={require('../images/faculty-pet.jpg?webp')} />
                              <source type="image/jpg" srcSet={require('../images/faculty-pet.jpg')} />
                              <img src={require('../images/faculty-pet.jpg')} alt="QC Pet Studies" className="card-img-top" />
                            </picture>
                          </a>
                          <div className="card-body pb-3">
                            <h5 className="card-title h6">QC Pet Studies</h5>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.doggroomingcourse.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-lg-4 mb-g d-flex">
                        <div className="card shadow-lg rounded-lg">
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcwellnessstudies.com">
                            <picture>
                              <source type="image/webp" srcSet={require('../images/faculty-wellness.jpg?webp')} />
                              <source type="image/jpg" srcSet={require('../images/faculty-wellness.jpg')} />
                              <img src={require('../images/faculty-wellness.jpg')} alt="QC Wellness Studies" className="card-img-top" />
                            </picture>
                          </a>
                          <div className="card-body pb-3">
                            <h5 className="card-title h6">QC Wellness Studies</h5>
                            <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcwellnessstudies.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="groups">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <h3>Private Group Admissions &amp; Discounts</h3>
                        <p className="mb-4">If you would like to enroll with QC along with a friend, colleague or family member, you can take advantage of QC’s group admissions discount! Any group of two or more enrolling in any course (you don’t all have to enroll in the same course!) will receive a 25% discount for each individual enrolling. Simply call the school to enroll; this is only available for phone enrollments. Note that this discount cannot be combined with other offers or promotions.</p>
                        <Link href="/contact"><a className="btn btn-secondary btn-sm">Contact QC</a></Link>
                      </div>
                      <div className="col-12 col-md-6 mb-4 mb-md-0 d-none d-md-block">
                        <picture>
                          <source type="image/webp" srcSet={require('../images/admissions-private-group.jpg?webp')} />
                          <source type="image/jpg" srcSet={require('../images/admissions-private-group.jpg')} />
                          <img src={require('../images/admissions-private-group.jpg')} alt="Private Group Discounts" className="sideImage" />
                        </picture>

                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="corporate">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <h3>Corporate Admissions</h3>
                        <p className="mb-4">Over the years QC has worked with corporations to adapt course content, assignments and tuition/billing practices to corporate groups with specific goals for their employees. If you are a member of a corporation looking to train your employees via a QC course, please contact us to speak with a business development representative who will be happy to prepare a proposal that will suit your needs.           </p>
                        <Link href="/contact"><a className="btn btn-secondary btn-sm">Contact QC</a></Link>
                      </div>
                      <div className="col-12 col-md-6 mb-4 mb-md-0 d-none d-md-block">
                        <picture>
                          <source type="image/webp" srcSet={require('../images/admissions-corporate.jpg?webp')} />
                          <source type="image/jpg" srcSet={require('../images/admissions-corporate.jpg')} />
                          <img src={require('../images/admissions-corporate.jpg')} alt="Corporate Admissions" className="sideImage" />
                        </picture>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>

      <section className="text-dark">
        <div className="container">
          <h2 className="mb-5">How It Works</h2>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdTimer size={iconSize} /></span>No Deadlines or Mandatory Classes</h3>
              <p>You’ll never be on the clock to finish your assignments. You have a full two years to complete any training program, so there’s no rush and plenty of time if life gets in the way!</p>
              <p>Typically, students who work on their assignments for a short period each week will complete their course within four to six months.</p>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdHand size={iconSize} /></span>A hands-on approach</h3>
              <p>You might be wondering how you can learn a practical skill online. The answer is simple. Your online training relies on the same kind of hands-on methods you would follow in the classroom. Your training assignments are a mix of theoretical and practical. Depending on the program you take, “practical” can mean anything from completing case studies or working through real-world scenarios to completing a full makeup application or grooming a dog!</p>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdChatbubbles size={iconSize} /></span>100% Personalized Tutor Feedback</h3>
              <p>All your assignments will be graded by a your personal tutor, who is a working professional in the field you’re studying. Your tutor will provide you with detailed audio feedback on your work, indicating your strengths and also the areas where you need to improve. This unique approach to providing constructive feedback is why QC students graduate way ahead of the curve.</p>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <h3 className="h5"><span className="icon-wrapper"><IoMdPeople size={iconSize} /></span>Unmatched Student Support</h3>
              <p>QC’s student advisors are available on extended hours to help you in any way they can. You might have a question about enrolling in a course, have trouble with an assignment, or be looking for advice on a job you are considering. Rest assured that your student support team will help answer your questions and will point you in the right direction.</p>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="h5"><span className="icon-wrapper"><IoMdShuffle size={iconSize} /></span>Flexible Payment Plans</h3>
              <p>With QC, you’ll receive top quality training at a price you can afford. Every course comes with a payment plan where you can pay off your tuition in affordable monthly installments. What’s more, if you ever need to miss a tuition payment, simply call your student advisor who will be happy to work with you!</p>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="h5"><span className="icon-wrapper"><IoMdCheckmarkCircle size={iconSize} /></span>Proven Track Record</h3>
              <p>Enroll with confidence in a school that has been offering quality distance education for over 35 years. QC has an A+ rating with the Better Business Bureau and thousands of successful graduates working careers they love. You can be one of them!</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        #first-section {
          background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${Hero}) 0 0;
          background-size: cover;
        }
        .sideImage {
          width: 100%;
        }
        .icon-wrapper { margin-right: 1rem; }
        .h6.card-title { font-weight: normal; }
      `}</style>

    </DefaultLayout>
  );
};

export default AdmissionsPage;

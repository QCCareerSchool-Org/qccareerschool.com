import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { IoMdChatbubbles, IoMdCheckmarkCircle, IoMdHand, IoMdPeople, IoMdShuffle, IoMdTimer } from 'react-icons/io';

import { Overlay } from '../components/Overlay';
import { SEO } from '../components/SEO';
import AdmissionsCorporate from '../images/admissions-corporate.jpg';
import AdmissionsPrivate from '../images/admissions-private-group.jpg';
import Hero from '../images/backgrounds/hero-admissions.jpg';
import FacultyDesign from '../images/faculty-design.jpg';
import FacultyEvent from '../images/faculty-event.jpg';
import FacultyMakeup from '../images/faculty-makeup.jpg';
import FacultyPet from '../images/faculty-pet.jpg';
import FacultyWellness from '../images/faculty-wellness.jpg';

const iconSize = 42;

const AdmissionsPage: NextPage = () => (
  <>
    <SEO
      title="Admissions"
      description="Enroll in a course today &amp; join the QC Career School community! QC offers private group &amp; corporate discounts. Read on about QC admissions process here!"
      canonical="/admissions"
    />

    <section id="first-section" className="text-light">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="left top" placeholder="blur" alt="colleagues working at a table" priority />
      <Overlay />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Admissions</h1>
            <p className="lead mb-0">Enroll in a course today and join the QC Career School community!</p>
          </div>
        </div>
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
                  <p>If you would like to enroll in one of QC&apos;s courses, you can do so at the faculties&apos; online enrollment pages:</p>
                  <div className="row">
                    <div className="col-6 col-lg-4 mb-g d-flex">
                      <div className="card shadow-sm rounded-sm">
                        <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcmakeupacademy.com">
                          <Image src={FacultyMakeup} alt="QC Makeup Academy" className="card-img-top" style={{ height: 'auto' }} />
                        </a>
                        <div className="card-body pb-3">
                          <h5 className="h6 card-title">QC Makeup Academy</h5>
                          <div className="buttonSpacer" />
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcmakeupacademy.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-g d-flex">
                      <div className="card shadow-sm rounded-sm">
                        <a target="_blank" rel="noopener noreferrer" href="https://enroll.qceventplanning.com">
                          <Image src={FacultyEvent} alt="QC Event School" className="card-img-top" style={{ height: 'auto' }} />
                        </a>
                        <div className="card-body pb-3">
                          <h5 className="card-title h6">QC Event School</h5>
                          <div className="buttonSpacer" />
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qceventplanning.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-g d-flex">
                      <div className="card shadow-sm rounded-sm">
                        <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcdesignschool.com">
                          <Image src={FacultyDesign} alt="QC Design School" className="card-img-top" style={{ height: 'auto' }} />
                        </a>
                        <div className="card-body pb-3">
                          <h5 className="card-title h6">QC Design School</h5>
                          <div className="buttonSpacer" />
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcdesignschool.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-g d-flex">
                      <div className="card shadow-sm rounded-sm">
                        <a target="_blank" rel="noopener noreferrer" href="https://enroll.doggroomingcourse.com">
                          <Image src={FacultyPet} alt="QC Pet Studies" className="card-img-top" style={{ height: 'auto' }} />
                        </a>
                        <div className="card-body pb-3">
                          <h5 className="card-title h6">QC Pet Studies</h5>
                          <div className="buttonSpacer" />
                          <a target="_blank" rel="noopener noreferrer" href="https://enroll.doggroomingcourse.com" className="absoluteButton btn btn-sm btn-secondary">Enroll</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-g d-flex">
                      <div className="card shadow-sm rounded-sm">
                        <a target="_blank" rel="noopener noreferrer" href="https://enroll.qcwellnessstudies.com">
                          <Image src={FacultyWellness} alt="QC Wellness Studies" className="card-img-top" style={{ height: 'auto' }} />
                        </a>
                        <div className="card-body pb-3">
                          <h5 className="card-title h6">QC Wellness Studies</h5>
                          <div className="buttonSpacer" />
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
                      <p className="mb-4">If you would like to enroll with QC along with a friend, colleague or family member, you can take advantage of QC&apos;s group admissions discount! Any group of two or more enrolling in any course (you don&apos;t all have to enroll in the same course!) will receive a 25% discount for each individual enrolling. Simply call the school to enroll; this is only available for phone enrollments. Note that this discount cannot be combined with other offers or promotions.</p>
                      <Link href="/contact" className="btn btn-secondary btn-sm">Contact QC</Link>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-md-0 d-none d-md-block">
                      <Image src={AdmissionsPrivate} layout="responsive" alt="Private Group Discounts" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="corporate">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <h3>Corporate Admissions</h3>
                      <p className="mb-4">Over the years QC has worked with corporations to adapt course content, assignments and tuition/billing practices to corporate groups with specific goals for their employees. If you are a member of a corporation looking to train your employees via a QC course, please contact us to speak with a business development representative who will be happy to prepare a proposal that will suit your needs.           </p>
                      <Link href="/contact" className="btn btn-secondary btn-sm">Contact QC</Link>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-md-0 d-none d-md-block">
                      <Image src={AdmissionsCorporate} layout="responsive" alt="Corporate Admissions" />
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
            <p>You&apos;ll never be on the clock to finish your assignments. You have a full two years to complete any training program, so there&apos;s no rush and plenty of time if life gets in the way!</p>
            <p>Typically, students who work on their assignments for a short period each week will complete their course within four to six months.</p>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h3 className="h5"><span className="icon-wrapper"><IoMdHand size={iconSize} /></span>A hands-on approach</h3>
            <p>You might be wondering how you can learn a practical skill online. The answer is simple. Your online training relies on the same kind of hands-on methods you would follow in the classroom. Your training assignments are a mix of theoretical and practical. Depending on the program you take, &ldquo;practical&rdquo; can mean anything from completing case studies or working through real-world scenarios to completing a full makeup application or grooming a dog!</p>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h3 className="h5"><span className="icon-wrapper"><IoMdChatbubbles size={iconSize} /></span>100% Personalized Tutor Feedback</h3>
            <p>All your assignments will be graded by a your personal tutor, who is a working professional in the field you&apos;re studying. Your tutor will provide you with detailed audio feedback on your work, indicating your strengths and also the areas where you need to improve. This unique approach to providing constructive feedback is why QC students graduate way ahead of the curve.</p>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h3 className="h5"><span className="icon-wrapper"><IoMdPeople size={iconSize} /></span>Unmatched Student Support</h3>
            <p>QC&apos;s student advisors are available on extended hours to help you in any way they can. You might have a question about enrolling in a course, have trouble with an assignment, or be looking for advice on a job you are considering. Rest assured that your student support team will help answer your questions and will point you in the right direction.</p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="h5"><span className="icon-wrapper"><IoMdShuffle size={iconSize} /></span>Flexible Payment Plans</h3>
            <p>With QC, you&apos;ll receive top quality training at a price you can afford. Every course comes with a payment plan where you can pay off your tuition in affordable monthly installments. What&apos;s more, if you ever need to miss a tuition payment, simply call your student advisor who will be happy to work with you!</p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="h5"><span className="icon-wrapper"><IoMdCheckmarkCircle size={iconSize} /></span>Proven Track Record</h3>
            <p>Enroll with confidence in a school that has been offering quality distance education for over 35 years. QC has an A+ rating with the Better Business Bureau and thousands of successful graduates working careers they love. You can be one of them!</p>
          </div>
        </div>
      </div>
    </section>

    <style>{`
      .icon-wrapper { margin-right: 1rem; }
      .h6.card-title { font-weight: normal; }
      .buttonSpacer {
        height: 31px;
      }
      .absoluteButton {
        position: absolute;
        bottom: 1rem;
      }
    `}</style>
  </>
);

export default AdmissionsPage;

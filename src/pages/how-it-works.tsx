import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoMdChatbubbles, IoMdCheckmarkCircle, IoMdHand, IoMdPeople, IoMdShuffle, IoMdTimer } from 'react-icons/io';

import { DefaultLayout } from '../layouts/default-layout';

import HeroHome from '../images/backgrounds/hero-home.jpg';

const HowItWorksPage: NextPage = () => {
  const iconSize = 160;
  return (
    <DefaultLayout>

      <section id="first-section" className="text-light text-shadow">
        <div className="my-5">
          <Container>
            <h1>How It Works</h1>
            <p className="lead">QC's Approach to Online Learning</p>
          </Container>
        </div>
      </section>

      <section className="text-dark">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <IoMdTimer size={iconSize} />
              <h3>No Deadlines or Mandatory Classes</h3>
              <p>You’ll never be on the clock to finish your assignments.  You have a full two years to complete any training program, so there’s no rush and plenty of time if life gets in the way! (as a reference point, the average program completion time is 3-6 months)</p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdHand size={iconSize} />
              <h3>A hands-on approach</h3>
              <p>Some people have trouble understanding how you can learn a practical skill online.  The answer is, your online training has to follow the same kind of hands-on methods as you’ll get in the classroom.  Your training assignments will be a mix of theoretical and practical. Depending on the program you take, “practical” can mean anything from completing thorough case studies or real-world scenarios to actually completing a full makeup application or grooming a live dog!</p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdChatbubbles size={iconSize} />
              <h3>100% Personalized Tutor Feedback</h3>
              <p>All your assignments will be graded by a live tutor, who is a working professional in the industry you’re studying.  Your tutor will provide you with detailed audio feedback on your work, indicating your strengths and also the areas where you need to improve.  This unique approach to providing constructive feedback is how QC students graduate way ahead of the curve in all programs.</p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdPeople size={iconSize} />
              <h3>Unmatched Student Support</h3>
              <p>QC’s student advisors are available on extended hours to help you in any way they can.  Whether you have a question about enrolling in a course, are having trouble with an assignment, or are looking for job seeking advice, your student support team will be available to help answer your questions or point you in the right direction!</p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdShuffle size={iconSize} />
              <h3>Flexible Payment Plans</h3>
              <p>With QC, you’ll receive top quality training at a cost you can afford. Every course comes with an available payment plan where you can pay off your tuition in affordable monthly installments. What’s more, if you ever need to miss a tuition payment, simply call your student advisor who will be happy to work with you!</p>
            </Col>
            <Col xs={12} md={6}>
              <IoMdCheckmarkCircle size={iconSize} />
              <h3>Proven Track Record</h3>
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
      `}</style>

    </DefaultLayout>
  );
};

export default HowItWorksPage;

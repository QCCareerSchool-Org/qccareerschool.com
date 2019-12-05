import { NextPage } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from '../../components/bar';
import { CourseCard } from '../../components/course-card';
import OverlaySection from '../../components/overlay-section';
import { DefaultLayout } from '../../layouts/default-layout';

import HeroHome from '../../images/backgrounds/hero-home.jpg';
import DesignHomeStaging from '../../images/course-design-homestaging.jpg';
import DesignInterior from '../../images/course-design-interior.jpg';
import DesignOrganizing from '../../images/course-design-organizing.jpg';
import EventAccelerate from '../../images/course-event-accelerate.jpg';
import EventCorporate from '../../images/course-event-corporate.jpg';
import EventDecor from '../../images/course-event-decor.jpg';
import EventWedding from '../../images/course-event-wedding.jpg';
import MakeupGlobalBeauty from '../../images/course-makeup-global-beauty.jpg';
import MakeupMaster from '../../images/course-makeup-master.jpg';
import MakeupPro from '../../images/course-makeup-pro-makeup.jpg';
import MakeupSFX from '../../images/course-makeup-sfx.jpg';
import MakeupSkin from '../../images/course-makeup-skincare.jpg';
import PetFirstAid from '../../images/course-pet-firstaid.jpg';
import PetGrooming from '../../images/course-pet-grooming.jpg';
import WellnessCare from '../../images/course-welness-personal-care.jpg';
import WellnessSleep from '../../images/course-welness-sleep.jpg';

const ProgramsPage: NextPage = () => (
  <DefaultLayout>

    <section id="first-section" className="bg-dark text-light text-shadow">
      <Container>
        <Bar className="text-primary mb-5" />
        <p className="hat">QC Career School</p>
        <h1>Courses &amp; Professional Training Programs</h1>
        <p>Learning online doesn’t have to mean learning on your own. QC’s expert course developers and tutors have spent years developing a unique and comprehensive approach to online learning that will offer the flexibility you need while giving you the high quality training and personalized feedback you deserve!</p>
      </Container>
    </section>

    <OverlaySection backgroundImage={MakeupMaster}>
      <>
        <h2>QC Makeup Academy</h2>
        <p className="lead">QC Makeup Academy offers a number of fundamental, advanced, and specialized courses for makeup artists. Whether you’re a total beginner or a seasoned professional, you’ll find a QC course to help develop your makeup skills and take you to the next level professionally!</p>
      </>
    </OverlaySection>
    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="Master Makeup Artistry Course"
              body="QC’s most popular foundational makeup course trains you to be a professional makeup artist from the ground up. This comprehensive training course will teach you everything from basic makeup applications to bridal and editorial makeup, and more!"
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupPro}
              title="Pro Makeup Workshop with Nathan Johnson"
              body="Work with celebrity executive makeup artist Nathan Johnson to challenge your professional skills in this intense cutting-edge course. You’ll work with Nathan to enhance your creativity and use your advanced skills to become a trendsetter in the industry."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupSkin}
              title="Skincare Course"
              body="It’s hard to make a work of art if you don’t start with a healthy canvas. That’s why QC tutors recommend that every student takes the skincare course! This course will teach makeup artists how to help clients achieve healthy, glowing skin which will make your makeup skills shine!"
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupSFX}
              title="Special FX Makeup Course"
              body="This popular specialty makeup course will teach makeup artists the art of creating special effects through their makeup artistry. Whether you want to age a character, create a gunshot wound, or transform your subject into a mythical creature, this course will teach you the skills to get there."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={MakeupGlobalBeauty}
              title="Global Beauty Makeup Workshop"
              body="Makeup is a lifelong learning process. Once you’re done with the master makeup artistry course, the Global Beauty Workshop will take your skills to the next level by teaching you different makeup applications and trends from all over the world. "
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
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

    <OverlaySection backgroundImage={EventWedding}>
      <>
        <h2>QC Event School</h2>
        <p className="lead">The event planning industry is expecting a 110% growth over the next 10 years! If you’re organized, detail-oriented, and enjoy working with people, you might just have found your new career in event and wedding planning! QC provides fundamental, specialized, and advanced courses for event planning professionals of all skill levels.</p>
      </>
    </OverlaySection>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={EventWedding}
              title="Event &amp; Wedding Planning Course"
              body="This dual-certification course will prepare you to plan and coordinate any number of private events from weddings to birthday parties to religious celebrations. You’ll learn how to negotiate with vendors, establish long-lasting client relationships, and budget for any event or client. With QC’s unparalleled business training, you’ll graduate from this course with the knowledge and skills to be a successful planning professional."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={EventCorporate}
              title="Corporate Event Planning Course"
              body="Catering to corporate clients is a very different experience from working for private clients. This course focuses on the project management aspects you’ll be expected to master in order to work with a number of corporate stakeholders. You’ll also learn how to work around the unique challenges of planning conferences, trade shows, and other types of corporate events."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={EventDecor}
              title="Event Décor Course"
              body="The perfect course to complement your fundamental event planner training. The Event Décor Course teaches you to create a cohesive décor to suit any theme, and how to plan for and incorporate all decorative elements that brings an event together. Being an event decorator can be a full-time job, or it can be a perfect addition to your booming event planning business!"
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={EventAccelerate}
              title="Accelerate Your Business Workshop"
              body="For the established event planning business owner who wants to take their business to the next level.  In this advanced course, you’ll work one-on-one with your tutor to enhance a specific area of your business where you can use some help. This is a very flexible course where you set the tone with your tutor. You’ll work on a specific goal for your business."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
        </Row>
        <h3>Additional Event Planning Courses:</h3>
        <ul>
          <li>Private Event Planning Course</li>
          <li>Wedding Planning Course</li>
          <li>Luxury Wedding Planning Specialization</li>
          <li>Destination Wedding Planning Specialization</li>
          <li>Festivals &amp; Live Events Planning Specialization</li>
          <li>Promotional Event Planning Specialization</li>
        </ul>
      </Container>
    </section>

    <OverlaySection backgroundImage={DesignInterior}>
      <>
        <h2>QC Design School</h2>
        <p className="lead">Home design is often an overlooked industry yet a very creative and rewarding field. A trained design professional has the flexibility to work full-time or part-time. They can focus on specialized areas of the design industry, or they can broaden their services to attract a wider range of clients.</p>
      </>
    </OverlaySection>
    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={DesignInterior}
              title="Interior Decorating Course"
              body="Interior Decorating is a home designer’s bread &amp; butter. In this course you’ll learn how to create beautiful spaces customized to your clients’ tastes and for their specific needs. The course comes with full business training, so you’ll graduate with all the tools and skills you need to start a successful decorating business."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={DesignHomeStaging}
              title="Home Staging Course"
              body="Working with sellers and real estate agents to stage a home can be incredibly rewarding for any designer. A well-staged home sells more quickly and fetches a higher market price, so more and more sellers are opting to hire professional home stagers when putting a house on the market. Partner with a few real estate agents and you’ll have a successful business in no time!"
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={DesignOrganizing}
              title="Professional Organizing Course"
              body="The art of getting organized has become increasingly popular in recent years thanks to shows that highlight the joys of living in a sparse and organized space. Often times, individuals will attempt to get themselves organized only to revert to old habits very quickly. As a professional organizer, you’ll give clients custom solutions to keep them organized for years to come."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
        </Row>
        <h3>Additional Design Courses:</h3>
        <ul>
          <li>Color Consultant Course</li>
          <li>Feng Shui Design Course</li>
          <li>Aging in Place Course</li>
        </ul>
      </Container>
    </section>

    <OverlaySection backgroundImage={PetGrooming}>
      <>
        <h2>QC Pet Studies</h2>
        <p className="lead">Working with animals is a dream for many people. But most animal fields require years of study before you can start your career.  QC is working to bring animal care careers into the world of online learning! With interactive online training under an expert’s tutelage, you’ll work at your own pace while completing hands-on assignments that prepare you for your chosen field.</p>
      </>
    </OverlaySection>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={PetGrooming}
              title="Dog Grooming Course"
              body="Regular grooming is a key part to maintaining a dog’s health, and most dog owners prefer to leave their pooch’s grooming up to a qualified professional.  With the dog grooming course, you’ll learn how to groom all different breeds and the various popular cuts safely and effectively. You’ll also learn how to launch your own successful dog grooming business."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              img={PetFirstAid}
              title="First Aid for Groomers"
              body="Every groomer should be well-versed not only in preventing injuries, but also in dealing with injuries and medical emergencies should they happen.  This course covers the types of dog injuries and medical conditions a groomer might encounter throughout their career.  It’s yours at no cost when you enroll in the dog grooming course."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
        </Row>
        <h3>Additional Design Courses:</h3>
        <ul>
          <li>Breed Styling Workshop</li>
        </ul>
      </Container>
    </section>

    <OverlaySection backgroundImage={WellnessSleep}>
      <>
        <h2>QC Wellness Studies</h2>
        <p className="lead">If you’re looking for a fulfilling career where you can help people by contributing to their overall wellbeing, QC Wellness Studies has you covered. This is QC’s newest faculty and is expanding into different areas of wellness, from Sleep Consulting to Personal Care Aide Training.</p>
      </>
    </OverlaySection>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={WellnessSleep}
              title="Pediatric Sleep Consultant Course"
              body="Sleep consulting is a growing industry as more busy parents seek professional help to ensure their child gets a good night’s rest. As a highly trained professional sleep consultant, you’ll have the tools and skills you need to work with families in desperate need of your help. After all, if baby doesn’t sleep, the parents don’t either!"
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
        </Row>
      </Container>
    </section>

    <OverlaySection backgroundImage={MakeupMaster}>
      <>
        <h2>Winghill School of Writing</h2>
        <p className="lead">Let your creativity soar with a number of writing courses that will help you become a published author.  Winghill’s courses are extremely flexible and designed to work with you as you turn your ideas into workable manuscripts with the help of your tutor.  Choose a course based on your writing genre and goals. Popular courses include the Creative Writing Course, Novel Writing Course, or Screenwriting Course, among others</p>
      </>
    </OverlaySection>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="Lorem Ipsum"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend eget eros at vulputate. Nam sit amet feugiat lectus. Donec diam erat, ullamcorper quis tincidunt non, aliquam ut nisi. Praesent quis fringilla massa, nec eleifend mi. Donec finibus vulputate venenatis. Nam id sapien eget mi bibendum aliquam non ac turpis. Proin congue sagittis tellus id porta."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
        </Row>
      </Container>
    </section>

    <OverlaySection backgroundImage={MakeupMaster}>
      <>
        <h2>QC Travel School</h2>
        <p className="lead">Travel agents might not be as common these days thanks to cheap online travel sites, however for the clientele will still pay handsomely for the services of a seasoned travel agent who can arrange a fantastic getaway &amp; travel itinerary from start to finish. Learn the tools of the trade and how to make a successful career in this highly competitive industry with the Travel &amp; Tourism Course!</p>
      </>
    </OverlaySection>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="Lorem Ipsum"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend eget eros at vulputate. Nam sit amet feugiat lectus. Donec diam erat, ullamcorper quis tincidunt non, aliquam ut nisi. Praesent quis fringilla massa, nec eleifend mi. Donec finibus vulputate venenatis. Nam id sapien eget mi bibendum aliquam non ac turpis. Proin congue sagittis tellus id porta."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
        </Row>
      </Container>
    </section>

    <OverlaySection backgroundImage={MakeupMaster}>
      <>
        <h2>QC Style Academy</h2>
        <p className="lead">Partnered closely with QC Makeup Academy, the Style academy will introduce you to a different angle to the beauty industry with its Fashion Styling Course. Become a full-time fashion stylist and/or personal shopper, or pair those services to your thriving beauty business to offer full-service solutions to your clients. The possibilities are limitless!</p>
      </>
    </OverlaySection>

    <section className="negative-section">
      <Container>
        <Row>
          <CardColumn>
            <CourseCard
              img={MakeupMaster}
              title="Lorem Ipsum"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend eget eros at vulputate. Nam sit amet feugiat lectus. Donec diam erat, ullamcorper quis tincidunt non, aliquam ut nisi. Praesent quis fringilla massa, nec eleifend mi. Donec finibus vulputate venenatis. Nam id sapien eget mi bibendum aliquam non ac turpis. Proin congue sagittis tellus id porta."
              buttonText="Full Course Overview"
              buttonLink="http://gooogle.com"
            />
          </CardColumn>
        </Row>
      </Container>
    </section>

    <style jsx>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${HeroHome}) 0 0;
        background-size: cover;
      }
    `}</style>
  </DefaultLayout>
);

const CardColumn: React.FC = ({ children }) => <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-0 mb-g d-flex">{children}</div>;

export default ProgramsPage;

import type { NextPage } from 'next';
import Image from 'next/image';

import { Bar } from '../../components/Bar';
import { CardColumn } from '../../components/CardColumn';
import { CourseCard } from '../../components/CourseCard';
import { Overlay } from '../../components/Overlay';
import { SEO } from '../../components/SEO';
import Hero from '../../images/backgrounds/hero-faculty-event.jpg';
import AccelerateYourBusiness from '../../images/course-event-accelerate-your-business.jpg';
import CorporateEventPlanning from '../../images/course-event-corporate-event-planning.jpg';
import EventAndWeddingPlanning from '../../images/course-event-event-and-wedding-planning.jpg';
import EventDecor from '../../images/course-event-event-decor.jpg';

const EventPage: NextPage = () => (
  <>
    <SEO
      title="QC Event School"
      description="If you enjoy working with people you might have found your new career in event planning! QC provides courses for planning professionals of all skill levels!"
      canonical="/programs/qc-event-school"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="10% top" placeholder="blur" alt="table set for a wedding" priority />
      <Overlay opacityTop={0.4} opacityBottom={0.6} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>QC Event School</h1>
            <p className="lead">The event planning industry is expecting a 110% growth over the next 10 years! If you&apos;re organized, detail-oriented, and enjoy working with people, you might just have found your new career in event and wedding planning! QC provides fundamental, specialized, and advanced courses for event planning professionals of all skill levels.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="negative-section">
      <div className="container">
        <div className="row">
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={EventAndWeddingPlanning} layout="responsive" className="card-img-top" alt="professionally decorated wedding table" />}
              title="Event &amp; Wedding Planning Course"
              body="This dual-certification course will prepare you to plan and coordinate any number of private events from weddings to birthday parties to religious celebrations. You’ll learn how to negotiate with vendors, establish long-lasting client relationships, and budget for any event or client. With QC’s unparalleled business training, you’ll graduate from this course with the knowledge and skills to be a successful planning professional."
              buttonText="Full Course Overview"
              link="https://www.qceventplanning.com/online-event-courses/event-and-wedding-planning/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={CorporateEventPlanning} layout="responsive" className="card-img-top" alt="corporate event master of ceremonies making a speech" />}
              title="Corporate Event Planning Course"
              body="Catering to corporate clients is a very different experience from working for private clients. This course focuses on the project management aspects you’ll be expected to master in order to work with a number of corporate stakeholders. You’ll also learn how to work around the unique challenges of planning conferences, trade shows, and other types of corporate events."
              buttonText="Full Course Overview"
              link="https://www.qceventplanning.com/online-event-courses/corporate-event-planning/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={EventDecor} layout="responsive" className="card-img-top" alt="professionally decorated dinner table" />}
              title="Event Decor Course"
              body="The perfect course to complement your fundamental event planner training. The Event Decor Course teaches you to create a cohesive decor to suit any theme, and how to plan for and incorporate all decorative elements that brings an event together. Being an event decorator can be a full-time job, or it can be a perfect addition to your booming event planning business!"
              buttonText="Full Course Overview"
              link="https://www.qceventplanning.com/online-event-courses/event-decor/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={AccelerateYourBusiness} layout="responsive" className="card-img-top" alt="business owners closing a new deal" />}
              title="Accelerate Your Business Workshop"
              body="For the established event planning business owner who wants to take their business to the next level.  In this advanced course, you’ll work one-on-one with your tutor to enhance a specific area of your business where you can use some help. This is a very flexible course where you set the tone with your tutor. You’ll work on a specific goal for your business."
              buttonText="Full Course Overview"
              link="https://www.qceventplanning.com/online-event-courses/accelerate-your-business/"
              externalLink={true}
            />
          </CardColumn>
        </div>
        <h3>Additional Event Planning Courses:</h3>
        <ul>
          <li><a href="https://www.qceventplanning.com/online-event-courses/event-planning/">Private Event Planning</a></li>
          <li><a href="https://www.qceventplanning.com/online-event-courses/wedding-planning/">Wedding Planning</a></li>
          <li><a href="https://www.qceventplanning.com/online-event-courses/luxury-wedding-and-event-planning-specialization/">Luxury Wedding &amp; Event Planning</a></li>
          <li><a href="https://www.qceventplanning.com/online-event-courses/destination-wedding-planning-specialization/">Destination Wedding Planning</a></li>
          <li><a href="https://www.qceventplanning.com/online-event-courses/festivals-and-live-events/">Festivals &amp; Live Events Planning</a></li>
          <li><a href="https://www.qceventplanning.com/online-event-courses/promotional-event-planning/">Promotional Event Planning</a></li>
        </ul>
      </div>
    </section>
  </>
);

export default EventPage;

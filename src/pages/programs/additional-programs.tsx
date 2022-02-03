import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Bar } from '../../components/Bar';
import { Overlay } from '../../components/Overlay';
import { SEO } from '../../components/SEO';
import Hero from '../../images/backgrounds/hero-additional-programs.jpg';
import FacultyStyle from '../../images/backgrounds/hero-faculty-style.jpg';
import FacultyTravel from '../../images/backgrounds/hero-faculty-travel.jpg';
import FacultyWriting from '../../images/backgrounds/hero-faculty-writing.jpg';

const AdditionalProgramsPage: NextPage = () => (
  <>
    <SEO
      title="Additional Programs"
      description="Other QC Schools include QC Style Academy, QC Travel School, and Winghill Writing School. Explore these additional programs here!"
      canonical="/programs/additional-programs"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="center top" placeholder="blur" alt="a person pointing out something on a laptop screen" />
      <Overlay />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>Additional Programs</h1>
            <p className="lead">Other QC Schools include QC Style Academy, QC Travel School, and Winghill Writing School. Explore these additional programs here!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0 order-md-2">
            <Image src={FacultyStyle} alt="style professional helping customer" />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>QC Style Academy</h3>
            <p className="mb-4">Partnered closely with QC Makeup Academy, QC Style Academy will introduce you to a different angle to the beauty industry with its Fashion Styling Course. Become a full-time fashion stylist and/or personal shopper, or pair those services to your thriving beauty business to offer full-service solutions to your clients. The possibilities are limitless!</p>
            <Link href="https://www.qcmakeupacademy.com/online-makeup-courses/fashion-styling/"><a className="btn btn-secondary btn-sm">Full Course Overview</a></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0 order-md-2">
            <Image src={FacultyWriting} alt="person writing a book" />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>Winghill School of Writing</h3>
            <p className="mb-4">Let your creativity soar with a number of writing courses that will help you become a published author. Winghill&apos;s courses are extremely flexible and designed to work with you as you turn your ideas into workable manuscripts with the help of your tutor. Choose a course based on your writing genre and goals. Popular courses include the Creative Writing Course, Novel Writing Course, or Screenwriting Course, among others</p>
            <Link href="https://www.winghill.com/"><a className="btn btn-secondary btn-sm">Full Course Overview</a></Link>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0 order-md-2">
            <Image src={FacultyTravel} alt="couple traveling through a beautiful landscape" />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>QC Travel School</h3>
            <p className="mb-4">Travel agents might not be as common these days thanks to cheap online travel sites, however for the clientele will still pay handsomely for the services of a seasoned travel agent who can arrange a fantastic getaway &amp; travel itinerary from start to finish. Learn the tools of the trade and how to make a successful career in this highly competitive industry with the Travel &amp; Tourism Course!</p>
            <Link href="https://www.qceventplanning.com/online-event-courses/travel-and-tourism/"><a className="btn btn-secondary btn-sm">Full Course Overview</a></Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AdditionalProgramsPage;

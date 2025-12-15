import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Overlay } from '../components/Overlay';
import { SEO } from '../components/SEO';
import Hero from '../images/backgrounds/hero-careers.jpg';
import OttawaLandscape from '../images/careers-headquarters.jpg';
import StudentWithLaptop from '../images/careers-students.jpg';
import TutorWithLaptop from '../images/careers-tutors.jpg';

const CareersPage: NextPage = () => (
  <>
    <SEO
      title="Careers"
      description="Get informed about careers for students and graduates, how to become a QC Tutor, and careers at QC headquarters. Come work for QC Career School!"
      canonical="/programs/careers"
    />

    <section id="first-section" className="bg-dark text-light">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="left top" placeholder="blur" alt="two people working at a laptop" priority />
      <Overlay />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Careers</h1>
            <p className="lead mb-0">Come work for QC Career School!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0 order-md-2">
            <Image src={StudentWithLaptop} alt="QC Student" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>Careers for Students and Graduates</h3>
            <p className="mb-0">QC Career School is an international distance-learning institution, and thus providing individual employment assistance to students and graduates is not available. However, all students and graduates have access to full business training as well as career resources to help you look for and secure work.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <Image src={TutorWithLaptop} alt="QC Tutor" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <h3>Become a QC Tutor</h3>
            <p>QC is always looking for qualified, successful professionals who want to give back to their industry by becoming an educator. If you are a successful professional in one of QC&apos;s industries and would like to discuss the possibility of becoming a tutor, please contact us!</p>
            <h3>Requirements for QC Tutors:</h3>
            <p>
              <ul>
                <li>3+ years experience in your industry</li>
                <li>Owner or senior-level employee in a successful business</li>
                <li>Strong communication skills</li>
                <li>A strong digital portfolio of recent works</li>
              </ul>
            </p>
            <p>We&apos;re always happy to accept tutors from around the world! QC is an International school, and most of our students are located in the United States, Canada, Australia, the United Kingdom, and New Zealand.</p>
            <div className="text-left">
              <Link href="/contact" className="btn btn-secondary btn-sm">Contact QC</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0 order-md-2">
            <Image src={OttawaLandscape} alt="Ottawa Landscape" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>Careers at QC Headquarters</h3>
            <p className="mb-0">QC&apos;s head office is located in Ottawa, Ontario Canada. Typically jobs at QC will be listed on Indeed.ca and LinkedIn. QC is a growing company and we&apos;re always looking for qualified course developers, IT professionals, Student Support Specialists, graphic designers, social media experts, and more. Be on the lookout for exciting professional opportunities!</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CareersPage;

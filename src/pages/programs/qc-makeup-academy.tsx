import { NextPage } from 'next';
import Image from 'next/image';

import { Bar } from '../../components/Bar';
import { CardColumn } from '../../components/CardColumn';
import { CourseCard } from '../../components/CourseCard';
import { Overlay } from '../../components/Overlay';
import { SEO } from '../../components/SEO';
import Hero from '../../images/backgrounds/hero-faculty-makeup.jpg';
import GlobalBeauty from '../../images/course-makeup-global-beauty.jpg';
import MasterMakeupArtistry from '../../images/course-makeup-master-makeup-artistry.jpg';
import ProMakeupWorkshop from '../../images/course-makeup-pro-makeup-workshop.jpg';
import Skincare from '../../images/course-makeup-skincare.jpg';
import SpecialFXMakeup from '../../images/course-makeup-special-fx.jpg';

const MakeupPage: NextPage = () => (
  <>
    <SEO
      title="QC Makeup Academy"
      description="QC Makeup Academy offers a number of courses for makeup artists. You’ll find a course to help develop your makeup skills &amp; take you to the next level!"
      canonical="/programs/qc-makeup-academy"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="10% top" placeholder="blur" alt="makeup artist applying makeup on a client" priority />
      <Overlay opacityTop={0.4} opacityBottom={0.6} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>QC Makeup Academy</h1>
            <p className="lead">QC Makeup Academy offers a number of fundamental, advanced, and specialized courses for makeup artists. Whether you&apos;re a total beginner or a seasoned professional, you&apos;ll find a QC course to help develop your makeup skills and take you to the next level professionally!</p>
          </div>
        </div>
      </div>
    </section>

    <section className="negative-section">
      <div className="container">
        <div className="row">
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={MasterMakeupArtistry} className="card-img-top" alt="makeup artist applying liptstick on a client" />}
              title="Master Makeup Artistry Course"
              body="QC’s most popular foundational makeup course trains you to be a professional makeup artist from the ground up. This comprehensive training course will teach you everything from basic makeup applications to bridal and editorial makeup, and more!"
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/master-makeup-artistry/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={ProMakeupWorkshop} className="card-img-top" alt="makeup artist tools" />}
              title="Pro Makeup Workshop with Nathan Johnson"
              body="Work with celebrity executive makeup artist Nathan Johnson to challenge your professional skills in this intense cutting-edge course. You’ll work with Nathan to enhance your creativity and use your advanced skills to become a trendsetter in the industry."
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/pro-makeup-workshop/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={Skincare} className="card-img-top" alt="applying skincare cream" />}
              title="Skincare Course"
              body="It’s hard to make a work of art if you don’t start with a healthy canvas. That’s why QC tutors recommend that every student takes the skincare course! This course will teach makeup artists how to help clients achieve healthy, glowing skin which will make your makeup skills shine!"
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/skincare-course/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={SpecialFXMakeup} className="card-img-top" alt="makeup artist applying special fx makeup on a client" />}
              title="Special FX Makeup Course"
              body="This popular specialty makeup course will teach makeup artists the art of creating special effects through their makeup artistry. Whether you want to age a character, create a gunshot wound, or transform your subject into a mythical creature, this course will teach you the skills to get there."
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/special-fx-makeup/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={GlobalBeauty} className="card-img-top" alt="makeup artist applying makeup on a client" />}
              title="Global Beauty Makeup Workshop"
              body="Makeup is a lifelong learning process. Once you’re done with the master makeup artistry course, the Global Beauty Workshop will take your skills to the next level by teaching you different makeup applications and trends from all over the world."
              buttonText="Full Course Overview"
              link="https://www.qcmakeupacademy.com/online-makeup-courses/global-beauty-workshop/"
              externalLink={true}
            />
          </CardColumn>
        </div>
        <h3>Additional Courses for Makeup Artists</h3>
        <ul>
          <li><a href="https://www.qcmakeupacademy.com/online-makeup-courses/airbrush-makeup-workshop/">Airbrush Makeup Workshop</a></li>
          <li><a href="https://www.qcmakeupacademy.com/online-makeup-courses/portfolio-development/">Portfolio Development Workshop</a></li>
          <li><a href="https://www.qcmakeupacademy.com/online-makeup-courses/hair-styling-essentials/">Hair Styling Essentials</a></li>
          <li><a href="https://www.qcmakeupacademy.com/online-makeup-courses/makeup-artistry/">Personal Makeup</a></li>
        </ul>
      </div>
    </section>

    <style>{`
      #first-section {
        
        background-size: cover;
      }
    `}</style>
  </>
);
export default MakeupPage;

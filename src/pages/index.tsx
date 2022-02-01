import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { Bar } from '../components/bar';
import { CourseCard } from '../components/course-card';
import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

const HomePage: NextPage = () => (
  <DefaultLayout>
    <SEO
      title="QC Career School"
      description="QC is a leader in online distance education. With QC you’ll graduate with the skills and confidence you need to start a successful professional career!"
      canonical="/"
    />

    <section id="first-section" className="text-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-7 offset-md-1">
            <p className="hat">QC Career School</p>
            <h1 className="text-shadow">Providing Quality Distance Education for 35 Years and Counting</h1>
            <Bar className="text-secondary" />
          </div>
        </div>
      </div>
    </section>

    <section className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <img src={require('../images/35-year-emblem.png')} alt="emblem" className="mb-4" />
            <h2 className="text-center">Welcome to QC Career School!</h2>
            <p>QC is a leader in online distance education. With eight faculties and courses available around the globe, QC offers affordable and convenient career training in a variety of professional fields.  With QC&apos;s unparalleled student support, professional tutors, and unique online learning system based on direct feedback, you&apos;ll graduate with the skills and confidence you need to start a successful professional career!</p>
          </div>
        </div>
      </div>
    </section>

    <section className="text-dark bg-light">
      <div className="container">
        <h2>QC Career School Faculties</h2>
        <Bar className="text-primary mb-5" />
        <div className="row">
          <div className="col-12 col-md-6 mb-g d-flex">
            <CourseCard
              images={[
                { src: require('../images/faculty-makeup.jpg'), type: 'image/jpg' },
                { src: require('../images/faculty-makeup.jpg?webp'), type: 'image/webp' },
              ]}
              alt="makeup artist applying makeup on a client"
              title="QC Makeup Academy"
              body="Basic and advanced professional makeup artistry courses for all skill levels."
              buttonText="VISIT QC MAKEUP ACADEMY"
              link="https://www.qcmakeupacademy.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g d-flex">
            <CourseCard
              images={[
                { src: require('../images/faculty-event.jpg'), type: 'image/jpg' },
                { src: require('../images/faculty-event.jpg?webp'), type: 'image/webp' },
              ]}
              alt="event planning - professionally decorated dinner set"
              title="QC Event School"
              body="Training event planning professionals to launch their own business. Courses include party planning, wedding planning, corporate event planning and more."
              buttonText="VISIT QC EVENT SCHOOL"
              link="https://www.qceventplanning.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g d-flex">
            <CourseCard
              images={[
                { src: require('../images/faculty-design.jpg'), type: 'image/jpg' },
                { src: require('../images/faculty-design.jpg?webp'), type: 'image/webp' },
              ]}
              alt="professionally designed living room"
              title="QC Design School"
              body=" Offering courses in all areas of home design from interior decorating to professional organizing."
              buttonText="VISIT QC DESIGN SCHOOL"
              link="https://www.qcdesignschool.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g d-flex">
            <CourseCard
              images={[
                { src: require('../images/faculty-pet.jpg'), type: 'image/jpg' },
                { src: require('../images/faculty-pet.jpg?webp'), type: 'image/webp' },
              ]}
              alt="dog groomer bathing a small dog"
              title="QC Pet Studies"
              body="Training dog grooming professionals from the comfort of home through innovative interactive tutorials and assignments."
              buttonText="VISIT QC PET STUDIES"
              link="https://www.doggroomingcourse.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g mb-md-0 d-flex">
            <CourseCard
              images={[
                { src: require('../images/faculty-wellness.jpg'), type: 'image/jpg' },
                { src: require('../images/faculty-wellness.jpg?webp'), type: 'image/webp' },
              ]}
              alt="wellness professional putting a baby to sleep"
              title="QC Wellness Studies"
              body="Offering professional certification courses in a number of wellness industries, from sleep consulting to home health aides."
              buttonText="VISIT QC WELLNESS STUDIES"
              link="https://www.qcwellnessstudies.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g mb-md-0 d-flex">
            <CourseCard
              images={[
                { src: require('../images/faculty-writing.jpg'), type: 'image/jpg' },
                { src: require('../images/faculty-writing.jpg?webp'), type: 'image/webp' },
              ]}
              alt="person writing a book"
              title="Winghill Writing School"
              body="The school that started it all! Winghill offers a myriad of writing courses from novel writing to family history writing and much more."
              buttonText="VISIT WINGHILL WRITING SCHOOL"
              link="https://www.winghill.com/"
              externalLink={true}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="text-light bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <h3 className="mb-3">Full Course<br />Catalog</h3>
            <p>View a full list and description of training programs and courses offered by QC Career School</p>
            <div className="buttonSpacer" />
            <Link href="/programs"><a className="absoluteButton btn btn-primary btn-sm caps">View Course Catalog</a></Link>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <h3 className="mb-3">Enroll<br />Today</h3>
            <p>QC offers individual, group, and corporate admissions! Learn more about the admissions process and how you can enroll in a QC course!</p>
            <div className="buttonSpacer" />
            <Link href="/admissions"><a className="absoluteButton btn btn-primary btn-sm caps">Admissions</a></Link>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <h3 className="mb-3">Find<br />Professionals</h3>
            <p>Hire a QC graduate here! Search by profession and location</p>
            <div className="buttonSpacer" />
            <Link href="/find-professionals"><a className="absoluteButton btn btn-primary btn-sm caps">Find Professionals</a></Link>
          </div>
        </div>
      </div>
    </section>

    <style>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${require('../images/backgrounds/hero-home.jpg')}) 0 0;
        background-size: cover;
      }
      .webp #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${require('../images/backgrounds/hero-home.jpg?webp')}) 0 0;
        background-size: cover;
      }
      .buttonSpacer {
        height: 31px;
      }
      .absoluteButton {
        position: absolute;
        bottom: 0px;
      }
    `}</style>
  </DefaultLayout>
);

export default HomePage;

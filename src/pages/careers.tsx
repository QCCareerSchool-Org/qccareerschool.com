import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

const CareersPage: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="Careers"
      description="Get informed about careers for students and graduates, how to become a QC Tutor, and careers at QC headquarters. Come work for QC Career School!"
      canonical="/programs/careers"
    />

    <section id="first-section" className="bg-dark text-light">
      <div className="container">
        <h1>Careers</h1>
        <p className="lead mb-5 bold">Come work for QC Career School!</p>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0 order-md-2">
            <picture>
              <source type="image/webp" srcSet={require('../images/careers-students.jpg?webp')} />
              <source type="image/jpg" srcSet={require('../images/careers-students.jpg')} />
              <img src={require('../images/careers-students.jpg')} alt="QC Student" className="card-img-top" />
            </picture>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>Careers for Students and Graduates</h3>
            <p className="mb-4">QC Career School is an international distance-learning institution, and thus providing individual employment assistance to students and graduates is not available. However, all students and graduates have access to full business training as well as career resources to help you look for and secure work.</p>
            <p className="mb-4">Students and graduates also have access to an online career profile builder, which allows you to build a professional online profile that is searchable by potential clients.  Here&apos;s where you can <Link href="/find-professionals"><a>find professional profiles of QC-trained professionals.</a></Link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <picture>
              <source type="image/webp" srcSet={require('../images/careers-tutors.jpg?webp')} />
              <source type="image/jpg" srcSet={require('../images/careers-tutors.jpg')} />
              <img src={require('../images/careers-tutors.jpg')} alt="QC Tutor" className="card-img-top" />
            </picture>
          </div>
          <div className="col-12 col-md-6">
            <h3>Become a QC Tutor</h3>
            <p className="mb-4">QC is always looking for qualified, successful professionals who want to give back to their industry by becoming an educator. If you are a successful professional in one of QC&apos;s industries and would like to discuss the possibility of becoming a tutor, please contact us!</p>
            <h3>Requirements for QC Tutors:</h3>
            <p className="mb-4">
              <ul>
                <li>3+ years experience in your industry</li>
                <li>Owner or senior-level employee in a successful business</li>
                <li>Strong communication skills</li>
                <li>A strong digital portfolio of recent works</li>
              </ul>
            </p>
            <p className="mb-4">We&apos;re always happy to accept tutors from around the world! QC is an International school, and most of our students are located in the United States, Canada, Australia, the United Kingdom, and New Zealand.</p>
            <div className="text-left">
              <Link href="/contact"><a className="btn btn-secondary btn-sm">Contact QC</a></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0 order-md-2">
            <picture>
              <source type="image/webp" srcSet={require('../images/careers-headquarters.jpg?webp')} />
              <source type="image/jpg" srcSet={require('../images/careers-headquarters.jpg')} />
              <img src={require('../images/careers-headquarters.jpg')} alt="Ottawa Landscape" className="card-img-top" />
            </picture>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h3>Careers at QC Headquarters</h3>
            <p className="mb-4">QC&apos;s head office is located in Ottawa, Ontario Canada. Typically jobs at QC will be listed on Indeed.ca and LinkedIn. QC is a growing company and we&apos;re always looking for qualified course developers, IT professionals, Student Support Specialists, graphic designers, social media experts, and more. Be on the lookout for exciting professional opportunities!</p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${require('../images/backgrounds/hero-careers.jpg')}) 0 0;
        background-size: cover;
      }
      .sideImage {
        width: 100%;
      }
    `}</style>
  </DefaultLayout>
);

export default CareersPage;

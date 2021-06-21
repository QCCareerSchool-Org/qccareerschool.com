import { NextPage } from 'next';
import React from 'react';

import { Bar } from '../../components/bar';
import { CardColumn } from '../../components/card-column';
import { CourseCard } from '../../components/course-card';
import { SEO } from '../../components/seo';
import { DefaultLayout } from '../../layouts/default-layout';

const WellnessPage: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="QC Wellness Studies"
      description="If you’re looking for a fulfilling career where you can help people by contributing to their overall wellbeing, QC Wellness Studies has you covered."
      canonical="/programs/qc-wellness-studies"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h2>QC Wellness Studies</h2>
            <p className="lead">If you&apos;re looking for a fulfilling career where you can help people by contributing to their overall wellbeing, QC Wellness Studies has you covered. This is QC&apos;s newest faculty and is expanding into different areas of wellness, from Sleep Consulting to Personal Care Aide Training.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="negative-section">
      <div className="container">
        <div className="row">
          <CardColumn>
            <CourseCard
              images={[
                { src: require('../../images/course-wellness-sleep-consultant.jpg'), type: 'image/jpg' },
                { src: require('../../images/course-wellness-sleep-consultant.jpg?webp'), type: 'image/webp' },
              ]}
              alt="sleeping baby"
              title="Pediatric Sleep Consultant Course"
              body="Sleep consulting is a growing industry as more busy parents seek professional help to ensure their child gets a good night’s rest. As a highly trained professional sleep consultant, you’ll have the tools and skills you need to work with families in desperate need of your help. After all, if baby doesn’t sleep, the parents don’t either!"
              buttonText="Full Course Overview"
              link="https://www.qcwellnessstudies.com/courses-and-tuition/sleep-consultant/"
              externalLink={true}
            />
          </CardColumn>
        </div>
      </div>
    </section>

    <style>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .40), rgba(0, 0, 0, .60)), url(${require('../../images/backgrounds/hero-faculty-wellness.jpg')}) 90% 0;
        background-size: cover;
      }
    `}</style>

  </DefaultLayout>
);

export default WellnessPage;

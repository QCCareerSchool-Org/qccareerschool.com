import { NextPage } from 'next';
import Image from 'next/image';

import { Bar } from '../../components/Bar';
import { CardColumn } from '../../components/CardColumn';
import { CourseCard } from '../../components/CourseCard';
import { Overlay } from '../../components/Overlay';
import { SEO } from '../../components/SEO';
import Hero from '../../images/backgrounds/hero-faculty-wellness.jpg';
import SleepConsultant from '../../images/course-wellness-sleep-consultant.jpg';

const WellnessPage: NextPage = () => (
  <>
    <SEO
      title="QC Wellness Studies"
      description="If you’re looking for a fulfilling career where you can help people by contributing to their overall wellbeing, QC Wellness Studies has you covered."
      canonical="/programs/qc-wellness-studies"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="90% top" placeholder="blur" alt="woman looking at a baby on a changing table" />
      <Overlay opacityTop={0.4} opacityBottom={0.6} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>QC Wellness Studies</h1>
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
              imageComponent={<Image src={SleepConsultant} className="card-img-top" alt="sleeping baby" />}
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
  </>
);

export default WellnessPage;

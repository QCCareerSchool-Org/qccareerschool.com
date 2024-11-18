import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLdScriptProps } from 'react-schemaorg';
import { EducationalOrganization } from 'schema-dts';

import { Bar } from '../components/Bar';
import { CourseCard } from '../components/CourseCard';
import { Overlay } from '../components/Overlay';
import { SEO } from '../components/SEO';
import ThirtyFiveYearEmblem from '../images/35-year-emblem.png';
import Hero from '../images/backgrounds/hero-home.jpg';
import FacultyDesign from '../images/faculty-design.jpg';
import FacultyEvent from '../images/faculty-event.jpg';
import FacultyMakeup from '../images/faculty-makeup.jpg';
import FacultyPet from '../images/faculty-pet.jpg';
import FacultyWellness from '../images/faculty-wellness.jpg';
import FacultyWriting from '../images/faculty-writing.jpg';
import { qcCareerSchoolEducationalOrganization } from '../qcCareerSchoolEducationalOrganization';

const HomePage: NextPage = () => (
  <>
    <SEO
      title="QC Career School"
      description="QC is a leader in online distance education. With QC you’ll graduate with the skills and confidence you need to start a successful professional career!"
      canonical="/"
    />

    <Head>
      <script {...jsonLdScriptProps<EducationalOrganization>(qcCareerSchoolEducationalOrganization)} />
    </Head>

    <section id="first-section" className="text-light">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="left top" placeholder="blur" alt="colleagues collaborating around a computer" priority />
      <Overlay />
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
            <div className="mb-3">
              <Image src={ThirtyFiveYearEmblem} layout="fixed" alt="in business over 35 years, since 1984" />
            </div>
            <h2 className="text-center">Welcome to QC Career School!</h2>
            <p className="mb-0">QC is a leader in online distance education. With eight faculties and courses available around the globe, QC offers affordable and convenient career training in a variety of professional fields.  With QC&apos;s unparalleled student support, professional tutors, and unique online learning system based on direct feedback, you&apos;ll graduate with the skills and confidence you need to start a successful professional career!</p>
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
              imageComponent={<Image src={FacultyMakeup} layout="responsive" alt="QC Makeup Academy" className="card-img-top" />}
              title="QC Makeup Academy"
              body="Basic and advanced professional makeup artistry courses for all skill levels."
              buttonText="VISIT QC MAKEUP ACADEMY"
              link="https://www.qcmakeupacademy.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g d-flex">
            <CourseCard
              imageComponent={<Image src={FacultyEvent} layout="responsive" alt="QC Event School" className="card-img-top" />}
              title="QC Event School"
              body="Training event planning professionals to launch their own business. Courses include party planning, wedding planning, corporate event planning and more."
              buttonText="VISIT QC EVENT SCHOOL"
              link="https://www.qceventplanning.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g d-flex">
            <CourseCard
              imageComponent={<Image src={FacultyDesign} layout="responsive" alt="QC Design School" className="card-img-top" />}
              title="QC Design School"
              body=" Offering courses in all areas of home design from interior decorating to professional organizing."
              buttonText="VISIT QC DESIGN SCHOOL"
              link="https://www.qcdesignschool.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g d-flex">
            <CourseCard
              imageComponent={<Image src={FacultyPet} layout="responsive" alt="QC Pet Studies" className="card-img-top" />}
              title="QC Pet Studies"
              body="Training dog grooming professionals from the comfort of home through innovative interactive tutorials and assignments."
              buttonText="VISIT QC PET STUDIES"
              link="https://www.qcpetstudies.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g mb-md-0 d-flex">
            <CourseCard
              imageComponent={<Image src={FacultyWellness} layout="responsive" alt="QC Wellness Studies" className="card-img-top" />}
              title="QC Wellness Studies"
              body="Offering professional certification courses in a number of wellness industries, from sleep consulting to home health aides."
              buttonText="VISIT QC WELLNESS STUDIES"
              link="https://www.qcwellnessstudies.com/"
              externalLink={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-g mb-md-0 d-flex">
            <CourseCard
              imageComponent={<Image src={FacultyWriting} layout="responsive" alt="Winghill Writing School" className="card-img-top" />}
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
            <Link href="/programs" className="absoluteButton btn btn-primary btn-sm caps">View Course Catalog</Link>
          </div>
          <div className="col-12 col-md-4">
            <h3 className="mb-3">Enroll<br />Today</h3>
            <p>QC offers individual, group, and corporate admissions! Learn more about the admissions process and how you can enroll in a QC course!</p>
            <div className="buttonSpacer" />
            <Link href="/admissions" className="absoluteButton btn btn-primary btn-sm caps">Admissions</Link>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
    .buttonSpacer {
      height: 31px;
    }
    .absoluteButton {
      position: absolute;
      bottom: 0px;
    }
    `}</style>
  </>
);

export default HomePage;

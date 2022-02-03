import { NextPage } from 'next';
import Image from 'next/image';

import { Bar } from '../../components/Bar';
import { CardColumn } from '../../components/CardColumn';
import { CourseCard } from '../../components/CourseCard';
import { Overlay } from '../../components/Overlay';
import { SEO } from '../../components/SEO';
import Hero from '../../images/backgrounds/hero-faculty-design.jpg';
import HomeStaging from '../../images/course-design-home-staging.jpg';
import InteriorDesign from '../../images/course-design-interior-design.jpg';
import ProfessionalOrganizing from '../../images/course-design-professional-organizing.jpg';

const DesignPage: NextPage = () => (
  <>
    <SEO
      title="QC Design School"
      description="Start a career in home design. Become a certified design professional with flexible online training from industry experts. Find out more!"
      canonical="/programs/qc-design-school"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="10% top" placeholder="blur" alt="professionaly decorated room" />
      <Overlay opacityTop={0.4} opacityBottom={0.6} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>QC Design School</h1>
            <p className="lead">Home design is often an overlooked industry yet a very creative and rewarding field. A trained design professional has the flexibility to work full-time or part-time. They can focus on specialized areas of the design industry, or they can broaden their services to attract a wider range of clients.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="negative-section">
      <div className="container">
        <div className="row">
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={InteriorDesign} className="card-img-top" alt="professionally decorated dining room" />}
              title="Interior Decorating Course"
              body="Interior Decorating is a home designer’s bread &amp; butter. In this course you’ll learn how to create beautiful spaces customized to your clients’ tastes and for their specific needs. The course comes with full business training, so you’ll graduate with all the tools and skills you need to start a successful decorating business."
              buttonText="Full Course Overview"
              link="https://www.qcdesignschool.com/online-courses/interior-decorating/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={HomeStaging} className="card-img-top" alt="professionally decorated home" />}
              title="Home Staging Course"
              body="Working with sellers and real estate agents to stage a home can be incredibly rewarding for any designer. A well-staged home sells more quickly and fetches a higher market price, so more and more sellers are opting to hire professional home stagers when putting a house on the market. Partner with a few real estate agents and you’ll have a successful business in no time!"
              buttonText="Full Course Overview"
              link="https://www.qcdesignschool.com/online-courses/home-staging/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={ProfessionalOrganizing} className="card-img-top" alt="professional organizer" />}
              title="Professional Organizing Course"
              body="The art of getting organized has become increasingly popular in recent years thanks to shows that highlight the joys of living in a sparse and organized space. Often times, individuals will attempt to get themselves organized only to revert to old habits very quickly. As a professional organizer, you’ll give clients custom solutions to keep them organized for years to come."
              buttonText="Full Course Overview"
              link="https://www.qcdesignschool.com/online-courses/professional-organizing/"
              externalLink={true}
            />
          </CardColumn>
        </div>
        <h3>Additional Design Courses</h3>
        <ul>
          <li><a href="https://www.qcdesignschool.com/online-courses/color-consultant/">Color Consultant</a></li>
          <li><a href="https://www.qcdesignschool.com/online-courses/feng-shui-design/">Feng Shui Design</a></li>
          <li><a href="https://www.qcdesignschool.com/online-courses/aging-in-place/">Aging in Place</a></li>
        </ul>
      </div>
    </section>
  </>
);

export default DesignPage;

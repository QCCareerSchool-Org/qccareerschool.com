import { NextPage } from 'next';

import { Bar } from '../../components/Bar';
import { CardColumn } from '../../components/CardColumn';
import { CourseCard } from '../../components/CourseCard';
import { SEO } from '../../components/SEO';

const PetPage: NextPage = () => (
  <>
    <SEO
      title="QC Pet Studies"
      description="Get the training to become a professional dog groomer with QC's affordable online dog grooming course. Learn from the experts and start your career today!"
      canonical="/programs/qc-pet-studies"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h2>QC Pet Studies</h2>
            <p className="lead">Working with animals is a dream for many people. But most animal fields require years of study before you can start your career.  QC is working to bring animal care careers into the world of online learning! With interactive online training under an expert&apos;s tutelage, you&apos;ll work at your own pace while completing hands-on assignments that prepare you for your chosen field.</p>
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
                { src: require('../../images/course-pet-dog-grooming.jpg'), type: 'image/jpg' },
                { src: require('../../images/course-pet-dog-grooming.jpg?webp'), type: 'image/webp' },
              ]}
              alt="dog groomer cutting dog's hair"
              title="Dog Grooming Course"
              body="Regular grooming is a key part to maintaining a dog’s health, and most dog owners prefer to leave their pooch’s grooming up to a qualified professional.  With the dog grooming course, you’ll learn how to groom all different breeds and the various popular cuts safely and effectively. You’ll also learn how to launch your own successful dog grooming business."
              buttonText="Full Course Overview"
              link="https://www.doggroomingcourse.com/online-courses/dog-grooming/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              images={[
                { src: require('../../images/course-pet-first-aid-for-groomers.jpg'), type: 'image/jpg' },
                { src: require('../../images/course-pet-first-aid-for-groomers.jpg?webp'), type: 'image/webp' },
              ]}
              alt="dog groomer applying first aid practices on a dog"
              title="First Aid for Groomers"
              body="Every groomer should be well-versed not only in preventing injuries, but also in dealing with injuries and medical emergencies should they happen.  This course covers the types of dog injuries and medical conditions a groomer might encounter throughout their career.  It’s yours at no cost when you enroll in the dog grooming course."
              buttonText="Full Course Overview"
              link="https://www.doggroomingcourse.com/online-courses/first-aid-for-groomers/"
              externalLink={true}
            />
          </CardColumn>
        </div>
        <h3>Additional QC Pet Studies Courses</h3>
        <ul>
          <li><a href="https://www.doggroomingcourse.com/online-courses/breed-styling-workshop/">Breed Styling Workshop</a></li>
        </ul>
      </div>
    </section>

    <style jsx>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .30), rgba(0, 0, 0, .50)), url(${require('../../images/backgrounds/hero-faculty-pet.jpg')}) 100% 0;
        background-size: cover;
      }
    `}</style>
  </>
);

export default PetPage;

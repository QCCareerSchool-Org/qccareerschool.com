import { NextPage } from 'next';
import Image from 'next/image';

import { Bar } from '../../components/Bar';
import { CardColumn } from '../../components/CardColumn';
import { CourseCard } from '../../components/CourseCard';
import { Overlay } from '../../components/Overlay';
import { SEO } from '../../components/SEO';
import Hero from '../../images/backgrounds/hero-faculty-pet.jpg';
import DogGrooming from '../../images/course-pet-dog-grooming.jpg';
import DogTraining from '../../images/course-pet-dog-training.jpg';

const PetPage: NextPage = () => (
  <>
    <SEO
      title="QC Pet Studies"
      description="Get the training to become a professional dog groomer with QC's affordable online dog grooming course. Learn from the experts and start your career today!"
      canonical="/programs/qc-pet-studies"
    />

    <section id="first-section" className="overlay-section bg-dark text-light text-shadow text-right">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="right top" placeholder="blur" alt="groomer washing a dog" priority />
      <Overlay opacityTop={0.3} opacityBottom={0.5} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <Bar className="text-primary ml-auto" />
            <h1>QC Pet Studies</h1>
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
              imageComponent={<Image src={DogGrooming} layout="responsive" className="card-img-top" alt="dog groomer cutting dog's hair" />}
              title="Dog Grooming Course"
              body="Regular grooming is a key part to maintaining a dog’s health, and most dog owners prefer to leave their pooch’s grooming up to a qualified professional.  With the dog grooming course, you’ll learn how to groom all different breeds and the various popular cuts safely and effectively. You’ll also learn how to launch your own successful dog grooming business."
              buttonText="Full Course Overview"
              link="https://www.qcpetstudies.com/dog-grooming-courses/dog-grooming"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <CourseCard
              imageComponent={<Image src={DogTraining} layout="responsive" className="card-img-top" alt="woman gives command to her dog" />}
              title="Dog Training Course"
              body="Dog trainers have never been in higher demand! This course uses scientifically proven methods of dog training derived from learning theory and industry best practices. You'll gain a thorough understanding of how dogs learn, how to modify unwanted behaviors, and how to create new behaviors in all types of dogs. Don't miss out on your chance to learn from the best!"
              buttonText="Full Course Overview"
              link="https://www.qcpetstudies.com/dog-training-courses/dog-training"
              externalLink={true}
            />
          </CardColumn>
        </div>
        {/* <h3>Additional QC Pet Studies Courses</h3>
        <ul>
          <li><a href="https://www.qcpetstudies.com/dog-grooming-courses/first-aid">First Aid for Groomers</a></li>
        </ul> */}
      </div>
    </section>
  </>
);

export default PetPage;

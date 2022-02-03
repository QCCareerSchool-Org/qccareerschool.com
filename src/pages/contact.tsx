import { NextPage } from 'next';
import Image from 'next/image';
import { IoMdMail, IoMdPhonePortrait } from 'react-icons/io';
import { Overlay } from '../components/Overlay';

import { SEO } from '../components/SEO';
import { getTelephoneNumber } from '../functions';
import { useLocation } from '../hooks/useLocation';
import Hero from '../images/backgrounds/hero-contact.jpg';

const iconSize = 100;

const ContactPage: NextPage = () => {
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode);

  return (
    <>
      <SEO
        title="Contact"
        description="QC’s team of friendly student advisors are always happy to help. Reach out to us by phone or email at any time!"
        canonical="/contact"
      />

      <section id="first-section" className="text-light">
        <Image src={Hero} layout="fill" objectFit="cover" objectPosition="center top" placeholder="blur" alt="three people using their phones" />
        <Overlay />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              <h1>Contact</h1>
              <p className="lead">Whether you have a question about enrolling, are a student looking for help with your account or an assignment, or are a graduate looking to expand your skillset, QC&apos;s team of friendly student advisors are always happy to help. Reach out to us any time!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-dark text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 offset-md-2">
              <IoMdPhonePortrait size={iconSize} />
              <h2 className="h3">By Phone</h2>
              <p>
                Our student support specialists are available by phone and are always happy to take some time to discuss your career path and goals.
                <br />
                {telephoneNumber === getTelephoneNumber()
                  ? <a href={`tel:${telephoneNumber}`} className="text-nowrap">{telephoneNumber}</a>
                  : (
                    <div className="mt-3">
                      Toll Free: <a href={`tel:${telephoneNumber}`} className="text-nowrap">{telephoneNumber}</a>
                      <br />
                      International: <a href={`tel:${getTelephoneNumber()}`} className="text-nowrap">{getTelephoneNumber()}</a>
                    </div>
                  )
                }
              </p>
            </div>
            <div className="col-12 col-md-4">
              <IoMdMail size={iconSize} />
              <h2 className="h3">By Email</h2>
              <p>You are more than welcome to email us at <a href="mailto:info@qccareerschool.com" className="text-nowrap">info@qccareerschool.com</a>. You can be sure to receive a quick and informative reply.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Overlay } from '../components/Overlay';
import { SEO } from '../components/SEO';
import Hero from '../images/backgrounds/hero-contact.jpg';

const NotFoundPage: NextPage = () => (
  <>
    <SEO
      title="Contact"
      description="QC’s team of friendly student advisors are always happy to help. Reach out to us by phone or email at any time!"
      canonical="/contact"
      noIndex={true}
    />

    <section id="first-section" className="text-light">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="three people using their phones" />
      <Overlay />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <h1>Not Found</h1>
            <p className="lead">Sorry. That page doesn't exist.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <h2>Other Links</h2>
        <p>Here are some other pages you might be looking for:</p>
        <ul>
          <li><Link href="/"><a className="link-primary">Home</a></Link></li>
          <li><Link href="/programs"><a className="link-primary">Programs</a></Link></li>
          <li><Link href="/contact"><a className="link-primary">Contact</a></Link></li>
        </ul>
      </div>
    </section>
  </>
);

export default NotFoundPage;

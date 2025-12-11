import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Bar } from '../../components/Bar';
import { Overlay } from '../../components/Overlay';
import { SEO } from '../../components/SEO';
import Hero from '../../images/backgrounds/hero-home.jpg';
import CombineBusinessCommunications from '../../images/combine-business-communications.jpg';
import CombineDecorAndColorConsulting from '../../images/combine-decor-color.jpg';
import CombineDestinationAndTravel from '../../images/combine-destination-travel.jpg';
import CombineDecoratingAndDecor from '../../images/combine-interior-decorating-event-decor.jpg';
import CombineMakeupAndWedding from '../../images/combine-makeup-wedding-planning.jpg';
import CombineScreenwritingAndMakeup from '../../images/combine-screenwriting-makeup.jpg';

const CombineAndSavePage: NextPage = () => (
  <>
    <SEO
      title="Combine Your Training and Save"
      description="When you enroll with QC Career School, you join a community of creative professionals who understand &amp; value the benefits of continued education."
      canonical="/combine-and-save"
    />

    <section id="first-section" className="text-light">
      <Image src={Hero} layout="fill" objectFit="cover" objectPosition="left top" placeholder="blur" alt="colleagues collaborating around a computer" priority />
      <Overlay />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Combine Your Training and Save</h1>
            <p className="lead">When you enroll with QC Career School, you join an international community of creative professionals who understand and value the benefits of continued education.</p>
            <p className="lead mb-0">That&apos;s why QC offers a 50% discount on additional courses you enroll in!</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="lead mb-0 mb-md-2">Many QC students choose to get more than one certification in order to diversify their skill set and enhance their business. It&apos;s very common to combine courses from the same school (example: Master Makeup Artistry + Pro Makeup Workshop, or Event &amp; Wedding Planning + Event Decor), however you can also mix &amp; match courses between different schools!</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="lead">Consider taking these complementary courses to expand your business reach and clientele:</p>
            <Bar className="text-primary mb-5" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 md-md-0 order-md-2">
            <Image src={CombineMakeupAndWedding} className="img-fluid" alt="applying makeup on wedding bride" />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h2 className="h3">Master Makeup Artistry + Event &amp; Wedding Planning</h2>
            <p className="mb-4">Most special events will require a makeup artist at some point. So why not offer dual services? Sure if you&apos;re coordinating a big wedding you might not be able to also do the bridal party&apos;s makeup on the big day (you&apos;ll be busy with planning duties), but most smaller-scale weddings or other special events should allow you some free time to offer makeup services. Your clients will love the flexibility you offer, not to mention the convenience of only having to hire a single professional who offers the full package!</p>
            <div className="text-left">
              <Link href="/contact" className="btn btn-secondary btn-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 md-md-0">
            <Image src={CombineDecoratingAndDecor} className="img-fluid" alt="interior decorated event" />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="h3">Interior Decorating + Event Decor</h2>
            <p className="mb-4">Interior decorating is all about having a good eye for color, proportions, and being good at planning. The Event Decor field requires the same skills, to be applied to a specific special event. Taking these two courses could allow you to expand your decorating business to also service event planners and private events, which could lead to a huge increase in sales and cross-selling to your clients.</p>
            <div className="text-left">
              <Link href="/contact" className="btn btn-secondary btn-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 md-md-0 order-md-2">
            <Image src={CombineDestinationAndTravel} className="img-fluid" alt="destination wedding and travel" />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h2 className="h3">Destination Wedding Planning + Travel &amp; Tourism</h2>
            <p className="mb-4">A destination wedding planner&apos;s job is to plan &amp; coordinate the big day. At some point, the planner will work with a travel agent to organize the wedding party&apos;s travel arrangements and itinerary for the full trip. Why not skip the middle man and have the skills to offer the full service yourself? Again, clients will be thrilled to rely on a single professional who offers a no-hassle service like this.</p>
            <div className="text-left">
              <Link href="/contact" className="btn btn-secondary btn-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 md-md-0">
            <Image src={CombineScreenwritingAndMakeup} className="img-fluid" alt="screenwriting and makeup" />
          </div>
          <div className="col-12 col-md-6">
            <h3>Screenwriting + Master Makeup Artistry</h3>
            <p className="mb-4">Being a trained makeup artist can help you develop and sell your screenplays. Having the skills and expertise in makeup (or special FX makeup) can help you better envision the final product as you&apos;re developing your script. Furthermore, when selling your script, you can take the time to actually get a few models and develop a portfolio of concepts to give stakeholders a visual to go along with your written work.</p>
            <div className="text-left">
              <Link href="/contact" className="btn btn-secondary btn-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 md-md-0 order-md-2">
            <Image src={CombineDecorAndColorConsulting} className="img-fluid" alt="event decor and color consulting" />
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <h2 className="h3">Event Decor + Color Consulting</h2>
            <p className="mb-4">Event Decorators often need inspiration to create an event&apos;s theme. Being able to draw that inspiration from your clients&apos; life can make the event even more magical. The color consultant course shows you how to bring the color wheel to life and help your clients choose a color palette that speaks to them. As an event decorator, you can use these same skills to develop an event theme that will wow any client.</p>
            <div className="text-left">
              <Link href="/contact" className="btn btn-secondary btn-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 md-md-0">
            <Image src={CombineBusinessCommunications} className="img-fluid" alt="business communications" />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="h3">Any QC Course + Business Communications</h2>
            <p className="mb-4">Being able to communicate effectively as a business owner is a key to success. Though most of QC&apos;s courses will come with complete business training, this training mainly focuses on how to start and manage your business (business plan, marketing, etc.). Some QC students could greatly benefit from a basic business communications course where the focus is on how to effectively connect with clients, colleagues, and stakeholders alike.</p>
            <div className="text-left">
              <Link href="/contact" className="btn btn-secondary btn-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-dark text-light text-center">
      <div className="container">
        <h2 className="h3">Enroll in multiple courses today!</h2>
        <p className="lead mb-5">If you would like to enroll in any of the courses above or another combination of courses from different QC faculties, simply contact QC&apos;s student support center and we&apos;ll be happy to help!</p>
        <Link href="/contact" className="btn btn-secondary btn-sm">Contact Us</Link>
      </div>
    </section>
  </>
);

export default CombineAndSavePage;

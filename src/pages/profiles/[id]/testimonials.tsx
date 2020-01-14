import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Link from 'next/link';

import { Profile } from '../../../models/profile';

import { Testimonial } from '../../../components/testimonial';
import { ProfileLayout } from '../../../layouts/profile-layout';

interface Props {
  profile?: Profile;
  errorCode?: number;
}

const TestimonialPage: NextPage<Props> = ({ errorCode, profile }) => {
  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!profile) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <ProfileLayout backgroundImage={profile.backgroundName}>

      <div className="row">
        <div className="col-12 col-lg-7 col-xl-8 text-center text-md-left mb-2">
          <h1 className="fontName">Testimonials for {profile.firstName} {profile.lastName}</h1>
        </div>
        <div className="col-12 col-lg-5 col-xl-4 mt-4 mt-md-0 text-center text-lg-right">
          {profile.images.length ? <Link href="/profiles/[id]" as={`/profiles/${profile.id}`}><a className="btn btn-primary ml-3">Back to Profile</a></Link> : null}
          <div className="my-3" />
        </div>
      </div>

      <div className="row">
        <div className="overflow-hidden col-12 col-lg-7 col-xl-8 text-center text-md-left mb-2">
          {profile.testimonials.length
            ? (
              <div className="mt-3 text-left">
                <div>
                  {profile.testimonials.map((t, i) => <Testimonial key={i} testimonial={t} />)}
                </div>
              </div>
            )
            : null
          }
        </div>
      </div>

      <style jsx>{`
        .fontName { font-family: 'Dancing Script', cursive; }
      `}</style>

    </ProfileLayout>
  );
};

TestimonialPage.getInitialProps = async context => {
  const { id } = context.query;
  const url = `https://api.qccareerschool.com/qccareerschool/profiles/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new HttpStatus.HttpResponse(response.status, response.statusText);
    }
    const profile: Profile = await response.json();
    if (profile.active === false) {
      throw new HttpStatus.NotFound();
    }
    if (profile.testimonials.length <= 3) {
      throw new HttpStatus.NotFound();
    }
    return { profile };
  } catch (err) {
    const errorCode = typeof err.statusCode === 'undefined' ? 500 : err.statusCode;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

export default TestimonialPage;

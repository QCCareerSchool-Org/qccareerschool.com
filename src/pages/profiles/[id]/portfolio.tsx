import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';

import Link from 'next/link';
import { useState } from 'react';
import { LightBox } from '../../../components/lightbox';
import { SEO } from '../../../components/seo';
import { ProfileLayout } from '../../../layouts/profile-layout';
import { Profile } from '../../../models/profile';

interface Props {
  errorCode?: number;
  profile?: Profile;
}

const PortfolioPage: NextPage<Props> = ({ errorCode, profile }) => {
  const size = 131;
  const [ lightBoxId, setLightBoxId ] = useState<number>();

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!profile) {
    return <ErrorPage statusCode={500} />;
  }

  const title = profile.company ? profile.company : `${profile.firstName} ${profile.lastName}`;

  return (
    <ProfileLayout backgroundImage={profile.backgroundName}>

      <SEO
        title={`${title} Portfolio`}
        description={`Portfolio for ${title}`}
        canonical={`/profiles/${profile.id}/portfolio`}
      />

      <LightBox id={lightBoxId} onClose={() => setLightBoxId(undefined)} />

      <h1 className="text-center text-md-left mb-4">Portfolio for {profile.company
        ? profile.company
        : `${profile.firstName} ${profile.lastName}`
      }</h1>
      <p className="text-center text-md-left mb-4"><Link href="/profiles/[id]" as={`/profiles/${profile.id}`}><a className="btn btn-primary">Back to Profile</a></Link></p>
      <div className="row">
        {profile.images.map(image => (
          <div key={image.id} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
            <div onClick={() => setLightBoxId(image.id)} className="portfolioImage" style={{ backgroundImage: `url(https://studentcenter.qccareerschool.com/public/view-image.php?id=${image.id}&thumbnail=${size})` }} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .portfolioImage {
          width: ${size}px;
          height: ${size}px;
          margin: 0 auto;
        }
      `}</style>

    </ProfileLayout>
  );
};

PortfolioPage.getInitialProps = async context => {
  const { id } = context.query;
  const url = `https://api.qccareerschool.com/qccareerschool/profiles/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new HttpStatus.HttpResponse(response.status, response.statusText);
    }
    const profile = await response.json() as Profile;
    if (profile.active === false) {
      throw new HttpStatus.NotFound();
    }
    if (profile.images.length === 0) {
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

export default PortfolioPage;

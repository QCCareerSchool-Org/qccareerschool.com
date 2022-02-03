import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';
import Link from 'next/link';

import { Certification } from '../../../components/Certification';
import { ProfileWrapper } from '../../../components/ProfileWrapper';
import { SEO } from '../../../components/SEO';
import { Profile } from '../../../models/profile';
import { NextPageWithLayout } from '../../_app';

type Props = {
  errorCode?: number;
  profile?: Profile;
};

const CertificationsPage: NextPageWithLayout<Props> = ({ errorCode, profile }) => {
  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!profile) {
    return <ErrorPage statusCode={500} />;
  }

  const title = profile.company ? profile.company : `${profile.firstName} ${profile.lastName}`;

  return (
    <ProfileWrapper backgroundImage={profile.backgroundName}>

      <SEO
        title={`${title} Certifications`}
        description={`Certifications for ${title}`}
        canonical={`/profiles/${profile.id}/certifications`}
      />

      <h1 className="text-center text-md-left mb-4">Certifications for {profile.company
        ? profile.company
        : `${profile.firstName} ${profile.lastName}`
      }</h1>
      <p className="text-center text-md-left mb-4"><Link href="/profiles/[id]" as={`/profiles/${profile.id}`}><a className="btn btn-primary">Back to Profile</a></Link></p>
      <div className="wrapper">
        {profile.certifications.map(c => <Certification key={c} courseCode={c} inverse={profile.dark} />)}
      </div>

      <style jsx>{`
        .wrapper { display: flex; flex-wrap: wrap; justify-content: space-between; }
      `}</style>

    </ProfileWrapper>
  );
};

CertificationsPage.getInitialProps = async context => {
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

    if (profile.certifications.length <= 3) {
      throw new HttpStatus.NotFound();
    }
    return { profile };
  } catch (err) {
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : 500;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

CertificationsPage.getLayout = page => <>{page}</>;

export default CertificationsPage;

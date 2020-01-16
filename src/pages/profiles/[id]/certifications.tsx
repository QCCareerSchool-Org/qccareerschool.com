import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Link from 'next/link';

import { Certification } from '../../../components/certification';
import { ProfileLayout } from '../../../layouts/profile-layout';
import { Profile } from '../../../models/profile';

interface Props {
  errorCode?: number;
  profile?: Profile;
}

const CertificationsPage: NextPage<Props> = ({ errorCode, profile }) => {
  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!profile) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <ProfileLayout backgroundImage={profile.backgroundName}>
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
    </ProfileLayout>
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
    const errorCode = typeof err.statusCode === 'undefined' ? 500 : err.statusCode;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

export default CertificationsPage;

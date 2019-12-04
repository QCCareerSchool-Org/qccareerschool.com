import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';

import parseBBCode from '../../../bbcode-parser';
import { nl2br } from '../../../functions';
import { Profile } from '../../../models/profile';

import { ProfileLayout } from '../../../layouts/profile-layout';

interface Props {
  profile?: Profile;
  errorCode?: number;
}

const ProfilePage: NextPage<Props> = ({ errorCode, profile }) => {
  const iconSize = 40;

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!profile) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <ProfileLayout backgroundImage={profile.backgroundName}>

      <Row className="mb-4">

        <Col xs={12} lg={7} xl={8} className="text-center text-md-left mb-2">
          {profile.company
            ? (
              <>
                <h1>{profile.company}</h1>
                <p className="lead mb-0">{profile.firstName} {profile.lastName}</p>
              </>
            )
            : <h1>{profile.firstName} {profile.lastName}</h1>
          }
          {profile.professions.length
            ? <p className="lead mb-0 professionList">{profile.professions.join(', ')}</p>
            : null
          }
        </Col>

        <Col xs={12} lg={5} xl={4} className="mt-4 mt-md-0 text-center text-lg-right">
          {profile.website ? <a href={profile.website} className="btn btn-primary ml-3">My Website</a> : null}
          {profile.images.length ? <Link href="/profiles/[id]/portfolio" as={`/profiles/${profile.id}/portfolio`}><a className="btn btn-primary ml-3">View Portfolio</a></Link> : null}
          <div className="my-3">
            {profile.facebook ? <a target="_blank" rel="noopener noreferrer" title="facebook" className="text-dark" href={`https://facebook.com/${profile.facebook}`}><FaFacebookSquare size={iconSize} className="ml-1" /></a> : null}
            {profile.twitter ? <a target="_blank" rel="noopener noreferrer" title="twitter" className="text-dark" href={`https://twitter.com/${profile.twitter}`}><FaTwitterSquare size={iconSize} className="ml-1" /></a> : null}
            {profile.instagram ? <a target="_blank" rel="noopener noreferrer" title="instagram" className="text-dark" href={`https://instagram.com/${profile.instagram}`}><FaInstagram size={iconSize} className="ml-1" /></a> : null}
            {profile.pinterest ? <a target="_blank" rel="noopener noreferrer" title="pinterest" className="text-dark" href={`https://pinterest.com/${profile.pinterest}`}><FaPinterestSquare size={iconSize} className="ml-1" /></a> : null}
            {profile.linkedin ? <a target="_blank" rel="noopener noreferrer" title="linkedin" className="text-dark" href={`https://linkedin.com/${profile.linkedin}`}><FaLinkedin size={iconSize} className="ml-1" /></a> : null}
          </div>
        </Col>

      </Row>

      <Row>

        <Col xs={12} md={4} className="text-center text-md-left mb-4">
          <img className="img-fluid my-2" src={`https://studentcenter.qccareerschool.com/view-portrait.php?id=${profile.id}`} alt="Elena Martinez MIMP" />
          <br />
          {profile.city ? <>{profile.city}{profile.provinceCode ? `, ${profile.provinceCode}` : ''}<br /></> : null}
          {profile.phoneNumber ? <>{profile.phoneNumber}<br /></> : null}
          {profile.emailAddress ? <><a href={`mailto:${profile.emailAddress}`}>{profile.emailAddress}</a><br /></> : null}
        </Col>

        <Col xs={12} md={8}>
          {profile.slogan
            ? <p className="lead" dangerouslySetInnerHTML={{ __html: nl2br(parseBBCode(profile.slogan)) }} />
            : null
          }
          {profile.intro
            ? <p dangerouslySetInnerHTML={{ __html: nl2br(parseBBCode(profile.intro)) }} />
            : null
          }
          {profile.additional
            ? <p dangerouslySetInnerHTML={{ __html: nl2br(parseBBCode(profile.additional)) }} />
            : null
          }
          {profile.services
            ? (
              <>
                <h5>Services</h5>
                <p dangerouslySetInnerHTML={{ __html: nl2br(parseBBCode(profile.services)) }} />
              </>
            )
            : null
          }
        </Col>

      </Row>

      <style jsx>{`
        .professionList { text-transform: capitalize; }
      `}</style>

    </ProfileLayout>
  );
};

ProfilePage.getInitialProps = async context => {
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
    return { profile };
  } catch (err) {
    const errorCode = typeof err.statusCode === 'undefined' ? 500 : err.statusCode;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

export default ProfilePage;

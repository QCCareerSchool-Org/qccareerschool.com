import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';

import parseBBCode from '../../../bbcode-parser';
import { nl2br } from '../../../functions';
import { Profile } from '../../../models/profile';

import Logo from '../../../images/logo-inverse.svg';
import None from '../../../images/profile-backgrounds/none.png';
import Powder from '../../../images/profile-backgrounds/powder.jpg';

interface Props {
  profile?: Profile;
  errorCode?: number;
}

const ProfilePage: NextPage<Props> = ({ errorCode, profile }) => {

  const iconSize = 40;

  const backgroundImage = profile?.backgroundName === 'Powder' ? Powder : None;

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!profile) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script|Open+Sans&display=swap" />
      </Head>

      <div className="profileWrapper">
        <div className="profile container my-sm-4">

          <header>
            <Link href="/">
              <a><img className="profileLogo" src={Logo} alt="QC Career School" /></a>
            </Link>
            <hr />
          </header>

          <main>

            <Row>

              <Col xs={12} lg={7} xl={8} className="text-center text-md-left">
                {profile.company
                  ? (
                    <>
                      <h1>{profile.company}</h1>
                      <h5>{profile.firstName} {profile.lastName}</h5>
                    </>
                  )
                  : <h1>{profile.firstName} {profile.lastName}</h1>
                }
                {profile.professions.length
                  ? <h5 className="professionList">{profile.professions.join(', ')}</h5>
                  : null
                }
              </Col>

              <Col xs={12} lg={5} xl={4} className="mt-4 mt-md-0 text-center text-lg-right">
                {profile.website ? <a href={profile.website} className="btn btn-primary ml-3">My Website</a> : null}
                {profile.images.length ? <a href="portfolio" className="btn btn-primary ml-3">View Portfolio</a> : null}
                <div className="my-3">
                  {profile.facebook ? <a target="_blank" title="facebook" className="text-muted" href={`https://facebook.com/${profile.facebook}`}><FaFacebookSquare size={iconSize} className="ml-1" /></a> : null}
                  {profile.twitter ? <a target="_blank" title="twitter" className="text-muted" href={`https://twitter.com/${profile.twitter}`}><FaTwitterSquare size={iconSize} className="ml-1" /></a> : null}
                  {profile.instagram ? <a target="_blank" title="instagram" className="text-muted" href={`https://instagram.com/${profile.instagram}`}><FaInstagram size={iconSize} className="ml-1" /></a> : null}
                  {profile.pinterest ? <a target="_blank" title="pinterest" className="text-muted" href={`https://pinterest.com/${profile.pinterest}`}><FaPinterestSquare size={iconSize} className="ml-1" /></a> : null}
                  {profile.linkedin ? <a target="_blank" title="linkedin" className="text-muted" href={`https://linkedin.com/${profile.linkedin}`}><FaLinkedin size={iconSize} className="ml-1" /></a> : null}
                </div>
              </Col>

            </Row>

            <Row className="mt-4">

              <Col xs={12} md={4} className="text-center text-md-left mb-4">
                <img className="img-fluid my-2" src={`https://studentcenter.qccareerschool.com/view-portrait.php?id=${profile.id}`} alt="Elena Martinez MIMP" />
                <br />
                {profile.city ? <>{profile.city}{profile.provinceCode ? `, ${profile.provinceCode}` : ''}<br /></> : null}
                {profile.phoneNumber ? <>{profile.phoneNumber}<br /></> : null}
                {profile.emailAddress ? <><a href={`mailto:${profile.emailAddress}`}>{profile.emailAddress}</a><br /></> : null}
              </Col>

              <Col xs={12} md={8}>
                {profile.slogan
                  ? <h2 dangerouslySetInnerHTML={{ __html: nl2br(parseBBCode(profile.slogan)) }} />
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
                      <h2>Services</h2>
                      <p dangerouslySetInnerHTML={{ __html: nl2br(parseBBCode(profile.services)) }} />
                    </>
                  )
                  : null
                }
              </Col>

            </Row>

          </main>

          <footer className="mt-4 text-muted">
            <small>© {(new Date()).getFullYear()} <Link href="/"><a>QC Career School</a></Link>. User-created content is owned by the poster.</small>
          </footer>

        </div>

      </div>

      <style jsx>{`
        .profileWrapper {
          background-image: url(${backgroundImage});
          background-position: top center;
          background-color: #ddd;
          font-weight: 300;
          padding: 1px 0;
        }
        .profile {
          background: white;
          color: #333;
          box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.5);
          padding-top: 12px;
          padding-bottom: 12px;
        }
        h1 {
          font-size: 3.5rem;
          font-family: 'Dancing Script', cursive;
          font-weight: 400;
        }
        h2, h3, h4, h5, h6 {
          font-weight: 400;
          text-transform: none;
          font-family: 'Open Sans', sans-serif;
          letter-spacing: 0;
        }
        h2 { font-size: 1.5rem; }
        @media (min-width: 576px){
          .profile { padding: 24px; }
          .profileLogo { margin-bottom: 6px; }
        }
        @media (min-width: 768px){
          .profile { padding: 24px 36px; }
        }
        @media (min-width: 992px){
          .profile { padding: 36px 48px; }
          .profileLogo { margin-bottom: 12px; }
        }
        .profileLogo { height: 24px; }
        .professionList { text-transform: capitalize; }
      `}</style>
    </>
  );
};

ProfilePage.getInitialProps = async context => {
  const { id } = context.query;
  const url = `https://api.qccareerschool.com/qccareerschool/profiles/${id}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
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

import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import parseBBCode from '../../bbcode-parser';
import { nl2br } from '../../functions';
import { Profile } from '../../models/profile';

interface Props {
  profile?: Profile;
  errorCode?: number;
}

const ProfilePage: NextPage<Props> = ({ errorCode, profile }) => {

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!profile) {
    return <ErrorPage statusCode={500} />;
  }

  function getName(): string {
    if (!profile) {
      return '';
    }
    if (profile.company) {
      return profile.company;
    }
    return profile.firstName + ' ' + profile.lastName;
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script|Open+Sans&display=swap" />
      </Head>
      <style global jsx>{`
body {font-family:'Open Sans',Verdana,Geneva,sans-serif;background-position:top center;background-color:#ddd;font-weight:300}
#wrapper{background:white;color:#333;box-shadow:0px 6px 12px 0px rgba(0,0,0,0.5);padding-top:12px;padding-bottom:12px}
#mainHeader{font-size:3.5rem}

@media (min-width: 576px){
	#wrapper{padding:24px}
	#logo{margin-bottom:6px}
}
@media (min-width: 768px){
	#wrapper{padding:24px 36px}
}
@media (min-width: 992px){
	#wrapper{padding:36px 48px}
	#logo{margin-bottom:12px}
}
#logo{height:24px}
#mainHeader{font-family:'Dancing Script', cursive;}

.sprite-social-facebook { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: 0 0; width: 20px; height: 20px; }
.sprite-social-twitter { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -20px 0; width: 20px; height: 20px; }
.sprite-social-pinterest { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -40px 0; width: 20px; height: 20px; }
.sprite-social-youtube { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -60px 0; width: 20px; height: 20px; }
.sprite-social-googleplus { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -80px 0; width: 20px; height: 20px; }
.sprite-social-rss { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -100px 0; width: 20px; height: 20px; }

.sprite-social-facebook:hover { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: 0 -20px; width: 20px; height: 20px; }
.sprite-social-twitter:hover { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -20px -20px; width: 20px; height: 20px; }
.sprite-social-pinterest:hover { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -40px -20px; width: 20px; height: 20px; }
.sprite-social-youtube:hover { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -60px -20px; width: 20px; height: 20px; }
.sprite-social-googleplus:hover { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -80px -20px; width: 20px; height: 20px; }
.sprite-social-rss:hover { background: url(/images/social-media-icons-20.png) no-repeat top left; background-position: -100px -20px; width: 20px; height: 20px; }

.sprite-social-32-facebook { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: 0 0; width: 32px; height: 32px; }
.sprite-social-32-twitter { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -32px 0; width: 32px; height: 32px; }
.sprite-social-32-pinterest { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -64px 0; width: 32px; height: 32px; }
.sprite-social-32-youtube { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -96px 0; width: 32px; height: 32px; }
.sprite-social-32-googleplus { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -128px 0; width: 32px; height: 32px; }
.sprite-social-32-rss { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -160px 0; width: 32px; height: 32px; }
.sprite-social-32-instagram { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -192px 0; width: 32px; height: 32px; }
.sprite-social-32-linkedin { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -224px 0; width: 32px; height: 32px; }

.sprite-social-32-facebook:hover { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: 0 -32px; width: 32px; height: 32px; }
.sprite-social-32-twitter:hover { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -32px -32px; width: 32px; height: 32px; }
.sprite-social-32-pinterest:hover { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -64px -32px; width: 32px; height: 32px; }
.sprite-social-32-youtube:hover { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -96px -32px; width: 32px; height: 32px; }
.sprite-social-32-googleplus:hover { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -128px -32px; width: 32px; height: 32px; }
.sprite-social-32-rss:hover { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -100px -160px; width: 32px; height: 32px; }
.sprite-social-32-instagram:hover { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -192px -32px; width: 32px; height: 32px; }
.sprite-social-32-linkedin:hover { background: url(/images/social-media-icons-32.png) no-repeat top left; background-position: -224px -32px; width: 32px; height: 32px; }
      `}</style>

      <Container id="wrapper" className="my-sm-4">

        <main>
          <Link href="/">
            <a><img id="logo" src="/profile/logo-inverse.svg" alt="QC Career School" /></a>
          </Link>
          <hr />

          <Row>

            <Col xs={12} md={6} xl={8} className="text-center text-md-left">
              <h1 id="mainHeader">{getName()}</h1>
              {profile.professions.length
                ? <h5 className="font-weight-light">{profile.professions.join(', ')}</h5>
                : null
              }
            </Col>

            <Col xs={12} md={6} xl={4} className="mt-4 mt-md-0 text-center text-md-right">
              <a href="https://www.facebook.com/MakeupByElenaAtAvalonDesigns?ref="><button className="btn btn-primary">My Website</button></a>
              <a href="portfolio/?id=27763"><button className="btn btn-primary">View Portfolio</button></a>
              <div className="my-4">
                <a target="_blank" href="https://instagram.com/emziepooh"><img src="/images/trans.png" style={{ marginRight: 5 }} className="sprite-social-32-instagram" /></a>
                <a target="_blank" href="https://www.facebook.com/MakeupByElenaAtAvalonDesigns"><img src="/images/trans.png" style={{ marginRight: 5 }} className="sprite-social-32-facebook" /></a>
              </div>
            </Col>

          </Row>

          <Row className="mt-4">

            <Col xs={12} md={4} className="text-center text-md-left mb-4" style={{ overflow: 'hidden' }}>
              <img className="img-fluid my-2" src={`https://studentcenter.qccareerschool.com/view-portrait.php?id=${profile.id}`} alt="Elena Martinez MIMP" />
              <br />
              <strong>{profile.city}</strong>
              <br />
              {profile.phoneNumber}
              <br />
              <a href="/cdn-cgi/l/email-protection#89afaab8b8bfb2afaab8b9bdb2afaab8b9b8b2afaab0beb2afaab8b8bdb2afaab8b8bfb2afaab8b8b8b2afaab8b9bbb2afaab0b1b2afaab8b9b8b2afaab0beb2afaab8b8beb2afaab8b8bfb2afaab8bbb8b2afaabfbdb2afaab8bbb8b2afaab8b9b0b2afaab0beb2afaab8b9bcb2afaab8b9b1b2afaabdbfb2afaab0b0b2afaab8b8b8b2afaab8b9b0b2">&#116;&#104;&#101;&#97;&#114;&#116;&#111;&#102;&#98;&#101;&#97;&#117;&#116;&#121;&#64;&#121;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>
              <br />
            </Col>

            <Col xs={12} md={8} style={{ overflow: 'hidden' }}>

              {profile.slogan
                ? <h2 className="h4" id="tagline" dangerouslySetInnerHTML={{ __html: nl2br(parseBBCode(profile.slogan)) }} />
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

      </Container>

    </>
  );
};

ProfilePage.getInitialProps = async context => {
  const { id } = context.query;
  const url = `https://www.qccareerschool.com/profiles/?id=${id}`;
  const response = await fetch(url);
  try {
    if (response.status !== 200) {
      throw new HttpStatus.HttpResponse(response.status, response.statusText);
    }
    const profile: Profile = await response.json();
    if (profile.active === false) {
      throw new HttpStatus.NotFound();
    }
    return { profile };
  } catch (err) {
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.getStatusCode() : 500;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

export default ProfilePage;

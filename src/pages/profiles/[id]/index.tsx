import * as HttpStatus from '@qccareerschool/http-status';
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';

import parseBBCode from '../../../bbcode-parser';
import { Certification } from '../../../components/Certification';
import { ProfileWrapper } from '../../../components/ProfileWrapper';
import { SEO } from '../../../components/SEO';
import { TestimonialBox } from '../../../components/TestimonialBox';
import { nl2br } from '../../../functions';
import { Profile } from '../../../models/profile';
import { NextPageWithLayout } from '../../_app';

type Props = {
  profile?: Profile;
  errorCode?: number;
};

const ProfilePage: NextPageWithLayout<Props> = ({ errorCode, profile }) => {
  const iconSize = 40;

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
        title={title}
        description={profile.slogan ? profile.slogan : `Professional Profile for ${title}`}
        canonical={`/profiles/${profile.id}`}
      />

      <div className="row mb-4">

        <div className="col-12 col-lg-7 col-xl-8 text-center text-md-left mb-2">
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
        </div>

        <div className="col-12 col-lg-5 col-xl-4 mt-4 mt-md-0 text-center text-lg-right">
          {profile.website ? <a target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-3" href={profile.website}>My Website</a> : null}
          {profile.images.length ? <Link href="/profiles/[id]/portfolio" as={`/profiles/${profile.id}/portfolio`}><a className="btn btn-primary ml-3">View Portfolio</a></Link> : null}
          <div className="my-3">
            {profile.facebook ? <a target="_blank" rel="noopener noreferrer" title="facebook" className="text-dark" href={`https://facebook.com/${profile.facebook}`}><FaFacebookSquare size={iconSize} className="ml-1" /></a> : null}
            {profile.twitter ? <a target="_blank" rel="noopener noreferrer" title="twitter" className="text-dark" href={`https://twitter.com/${profile.twitter}`}><FaTwitterSquare size={iconSize} className="ml-1" /></a> : null}
            {profile.instagram ? <a target="_blank" rel="noopener noreferrer" title="instagram" className="text-dark" href={`https://instagram.com/${profile.instagram}`}><FaInstagram size={iconSize} className="ml-1" /></a> : null}
            {profile.pinterest ? <a target="_blank" rel="noopener noreferrer" title="pinterest" className="text-dark" href={`https://pinterest.com/${profile.pinterest}`}><FaPinterestSquare size={iconSize} className="ml-1" /></a> : null}
            {profile.linkedin ? <a target="_blank" rel="noopener noreferrer" title="linkedin" className="text-dark" href={`https://linkedin.com/in/${profile.linkedin}`}><FaLinkedin size={iconSize} className="ml-1" /></a> : null}
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col-12 col-md-4 text-center text-md-left mb-4 overflow-hidden">
          <img className="img-fluid my-2" src={`https://studentcenter.qccareerschool.com/view-portrait.php?id=${profile.id}&v=${profile.portrait?.modified ?? 0}`} alt={profile.firstName + ' ' + profile.lastName} />
          <br />
          {profile.city ? <>{profile.city}{profile.provinceCode ? `, ${profile.provinceCode}` : ''}<br /></> : null}
          {profile.phoneNumber ? <>{profile.phoneNumber}<br /></> : null}
          {profile.emailAddress ? <><a href={`mailto:${profile.emailAddress}`}>{profile.emailAddress}</a><br /></> : null}
          {profile.certifications.length
            ? (
              <div className="mt-3 text-center">
                <h5>Certifications</h5>
                <div>
                  {profile.certifications.slice(0, 3).map(c => <Certification key={c} courseCode={c} inverse={profile.dark} />)}
                </div>
                {profile.certifications.length > 3
                  ? <Link href="/profiles/[id]/certifications" as={`/profiles/${profile.id}/certifications`}><a>View All</a></Link>
                  : null
                }
              </div>
            )
            : null
          }
        </div>

        <div className="col-12 col-md-8 overflow-hidden">
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
          {profile.testimonials.length
            ? (
              <div className="mt-3 text-left">
                <h4>Testimonials</h4>
                <div>
                  {profile.testimonials.slice(0, 3).map((t, i) => <TestimonialBox key={i} testimonial={t} />)}
                </div>
                {profile.testimonials.length > 3
                  ? <Link href="/profiles/[id]/testimonials" as={`/profiles/${profile.id}/testimonials`}><a>See All Testimonials</a></Link>
                  : null
                }
              </div>
            )
            : null
          }

        </div>

      </div>

      <style jsx>{`
        .professionList { text-transform: capitalize; }
      `}</style>

    </ProfileWrapper>
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
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : 500;
    if (context.res) {
      context.res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

ProfilePage.getLayout = page => <>{page}</>;

export default ProfilePage;

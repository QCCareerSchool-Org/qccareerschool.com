import Link from 'next/link';
import { MdLocationOn, MdPhone } from 'react-icons/md';

import { Profile } from '../models/profile';

interface Props {
  profile: Partial<Profile>;
}

export const SearchResult: React.FC<Props> = ({ profile }) => {
  let details: JSX.Element | null = null;
  if (profile.city || profile.phoneNumber) {
    details = (
      <p>
        {profile.city ? <><MdLocationOn style={{ position: 'relative', top: -1 }} /> <strong>{profile.city}{profile.provinceCode ? <>, {profile.provinceCode}</> : null}</strong></> : null}
        {profile.city && profile.phoneNumber ? <br /> : null}
        {profile.phoneNumber ? <><MdPhone style={{ position: 'relative', top: -1 }} /> {profile.phoneNumber}</> : null}
      </p>
    );
  }

  return (
    <div className="result">
      <Link href="/profiles/[id]" as={`/profiles/${profile.id}`}>
        <a><div className="portrait" /></a>
      </Link>
      <div className="content">
        <h3>{profile.firstName} {profile.lastName}</h3>
        <p>{profile.slogan}</p>
        {details}
      </div>

      <style jsx>{`
        div.result {
          overflow: auto;
          margin-bottom: 30px;
        }
        div.portrait {
          max-width: 100%;
          width: 290px;
          height: 351px;
          background-size: cover;
          background-position: center;
          background-image: url(https://studentcenter.qccareerschool.com/public/view-portrait.php?id=${profile.id}&thumb=310&v=${profile.portrait ? profile.portrait.modified : 0});
          margin: 0 auto 1rem;
        }
        @media (min-width: 576px) {
          div.portrait {
            width: 155px;
            height: 188px;
            float: left;
            margin: 0;
          }
          div.content {
            margin-left: 185px;
          }
        }
        @media (min-width: 768px) {
          div.portrait {
            width: 310px;
            height: 375px;
          }
          div.content {
            margin-left: 340px;
          }
        }
        @media (min-width: 992px) {
          div.portrait {
            width: 207px;
            height: 250px;
          }
          div.content {
            margin-left: 237px;
          }
        }
      `}</style>
    </div>
  );
};

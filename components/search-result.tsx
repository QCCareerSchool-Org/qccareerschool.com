import Link from 'next/link';

import { Profile } from '../models/profile';

interface Props {
  profile: Profile;
}

export const SearchResult: React.FC<Props> = ({ profile }) => (
  <div className="result">
    <div className="portrait" />
    <h3>{profile.firstName} {profile.lastName}</h3>
    <p>{profile.slogan}</p>
    <Link href="/profiles/[id]" as={`/profiles/${profile.id}`}><a target="_blank">View Profile</a></Link>

    <style jsx>{`
    div.result {
      overflow: auto;
      margin-bottom: 30px;
    }
    div.portrait {
      float: left;
      margin-right: 30px;
      width: 124px;
      height: 150px;
      background-size: cover;
      background-position: center;
      background-image: url(https://studentcenter.qccareerschool.com/public/view-portrait.php?id=${profile.id}&thumb=248);
    }`}</style>
  </div>
);

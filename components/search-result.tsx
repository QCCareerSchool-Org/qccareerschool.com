import Link from 'next/link';

import { Profile } from '../models/profile';

interface Props {
  profile: Profile;
}

export const SearchResult: React.FC<Props> = ({ profile }) => (
  <div>
    <h3>{profile.firstName} {profile.lastName}</h3>
    <p>{profile.slogan}</p>
    <Link href="/profiles/[id]" as={`/profiles/${profile.id}`}><a target="_blank">View Profile</a></Link>
  </div>
);

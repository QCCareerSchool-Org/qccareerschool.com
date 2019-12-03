import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ErrorPage from 'next/error';

import { Profile } from '../../../models/profile';

interface Props {
  errorCode?: number;
  profile?: Profile;
}

const PortfolioPage: NextPage<Props> = ({ errorCode, profile }) => {
  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  return <h1>Portfolio</h1>;
};

PortfolioPage.getInitialProps = async context => {
  const { id } = context.query;
  const url = `https://api.qccareerschool.com/qccareerschool/profiles/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Server error');
    }
    const profile = await response.json() as Profile;
    if (profile.images.length === 0) {
      return { errorCode: 404 };
    }
    return { profile };
  } catch (err) {
    return { errorCode: 500 };
  }
};

export default PortfolioPage;

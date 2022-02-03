import { NextPage } from 'next';
import ErrorPage from 'next/error';

const OldPortfolioPage: NextPage = () => <ErrorPage statusCode={404} />;

OldPortfolioPage.getInitialProps = ({ query, res }) => {
  if (res) {
    if (typeof query.id === 'string') {
      const id = parseInt(query.id, 10);
      res.writeHead(301, { Location: `/profiles/${id}/portfolio` });
      res.end();
    }
  }
  return {};
};

export default OldPortfolioPage;

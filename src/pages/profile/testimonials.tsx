import { NextPage } from 'next';
import ErrorPage from 'next/error';

const OldTestimonialsPage: NextPage = props => <ErrorPage statusCode={404} />;

OldTestimonialsPage.getInitialProps = ({ query, res }) => {
  if (res) {
    if (typeof query.id === 'string') {
      const id = parseInt(query.id, 10);
      res.writeHead(301, { Location: `/profiles/${id}/testimonials` });
      res.end();
    }
  }
  return {};
};

export default OldTestimonialsPage;

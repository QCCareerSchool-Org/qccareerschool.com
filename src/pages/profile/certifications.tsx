import { NextPage } from 'next';
import ErrorPage from 'next/error';

const OldCertificationsPage: NextPage = () => <ErrorPage statusCode={404} />;

OldCertificationsPage.getInitialProps = ({ query, res }) => {
  if (res) {
    if (typeof query.id === 'string') {
      const id = parseInt(query.id, 10);
      res.writeHead(301, { Location: `/profiles/${id}/certifications` });
      res.end();
    }
  }
  return {};
};

export default OldCertificationsPage;

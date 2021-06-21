import { NextPage } from 'next';
import ErrorPage from 'next/error';
import React from 'react';

const OldProfilePage: NextPage = () => <ErrorPage statusCode={404} />;

OldProfilePage.getInitialProps = ({ query, res }) => {
  if (res) {
    if (typeof query.id === 'string') {
      const id = parseInt(query.id, 10);
      res.writeHead(301, { Location: `/profiles/${id}` });
      res.end();
    }
  }
  return {};
};

export default OldProfilePage;

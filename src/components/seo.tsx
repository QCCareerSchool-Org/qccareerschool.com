import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

interface Props {
  title: string;
  description: string;
  canonical: string;
}

export const SEO: React.FC<Props> = ({ title, description, canonical }) => (
  <Head>
    <title>{title === 'QC Career School' ? title : `${title} - QC Career School`}</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="QC Career School" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <link rel="canonical" href={canonical} />
    {/* {canonical ? <link rel="canonical" href={canonical} /> : null} */}
  </Head>
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

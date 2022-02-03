import Head from 'next/head';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';

type Props = {
  title: string;
  description: string;
  canonical: string;
  noIndex?: boolean;
};

export const SEO = ({ title, description, canonical, noIndex = false }: Props): ReactElement => (
  <Head>
    <title>{title === 'QC Career School' ? title : `${title} - QC Career School`}</title>
    {noIndex && <meta name="robots" content="noindex" />}
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="QC Career School" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <link rel="canonical" href={canonical} />
  </Head>
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

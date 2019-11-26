import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement[];
  title: string;
  link?: Array<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>>;
}

export const SEO: React.FC<Props> = ({ description = '', lang = 'en', meta = [], title, link = [] }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - QC Career School`}
      link={link}
      meta={[
        { name: `description`, content: description },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: 'QC Career School' },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.any),
  title: PropTypes.string.isRequired,
};

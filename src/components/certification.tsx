import { ReactElement } from 'react';

import { getCertificationData } from '../lib/certifications';

type Props = {
  courseCode: string;
  inverse?: boolean;
};

export const Certification = ({ courseCode, inverse = false }: Props): ReactElement | null => {
  const certificationData = getCertificationData(courseCode);
  if (!certificationData) {
    return null;
  }
  let cdnUrl = 'https://aeea626a74ffdd96fbcf-77df9cf355bf5239094a1d99115ccf2c.ssl.cf1.rackcdn.com/';
  if (certificationData.oldCdn) {
    cdnUrl += '2019/standard/';
  } else {
    cdnUrl += inverse ? '2019/inverse/' : '2019/standard/';
  }
  return (
    <>
      <a href={certificationData.url} target="_blank" rel="noopener noreferrer">
        <img src={`${cdnUrl}${certificationData.code.toLowerCase()}.svg`} alt={certificationData.title} className="logo" />
      </a>
      <style jsx>{`
        .logo { width: 180px; margin-bottom: 1rem; }
      `}</style>
    </>
  );
};

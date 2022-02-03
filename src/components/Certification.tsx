import Image from 'next/image';
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
        <div className="logoWrapper">
          <Image src={`${cdnUrl}${certificationData.code.toLowerCase()}.svg`} width={180} height={180} alt={certificationData.title} className="logo" />
        </div>
      </a>
      <style jsx>{`
        .logoWrapper { margin-bottom: 1rem; }
      `}</style>
    </>
  );
};

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { getAddress } from '@/functions';
import { useLocation } from '@/hooks/useLocation';
import BBBLogo from '@/images/bbb-a+.svg';

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  const location = useLocation();
  const address = getAddress(location?.countryCode ?? 'US');
  return (
    <footer style={{ borderTop: '1px solid rgb(255,255,255,0.1)' }} className={`bg-dark text-light py-4 ${className}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 text-center text-sm-left mb-4 mb-sm-0">
            <Link href="/programs" className="text-light">Programs</Link><br />
            <Link href="/admissions" className="text-light">Admissions</Link><br />
            <Link href="/contact" className="text-light">Contact Us</Link><br />
            <Link href="/careers" className="text-light">Careers</Link><br />
          </div>
          <div className="col-12 col-sm-6 text-center text-sm-right mb-4 mb-sm-0">
            <div id="footer-right">
              <a target="_blank" rel="noopener noreferrer" className="text-light" href="https://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-career-school-in-ottawa-on-4175#sealclick"><Image src={BBBLogo} alt="Better Business Bureau A+ accreditation" /></a><br />
              <a target="_blank" rel="noopener noreferrer" className="text-light" href="https://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-career-school-in-ottawa-on-4175#sealclick">View BBB Profile</a><br />
            </div>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(255,255,255,0.4)' }} />
        <div className="small">&copy; {new Date().getFullYear()} QC Career School &nbsp;|&nbsp; <Link href="/privacy-policy" className="text-light">Privacy Policy</Link></div>
        <div className="small">{address.join(', ')}</div>
      </div>
      <style jsx>{`
      #footer-right { width: 120px; margin-left: auto; margin-right: auto; text-align: center; }
      @media (min-width: 576px) {
        #footer-right { margin-right: 0; }
      }
    `}</style>
    </footer>
  );
};

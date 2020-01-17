import Link from 'next/link';
import React from 'react';

import BBBLogo from '../images/bbb-a+.svg';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => (
  <footer style={{ borderTop: '1px solid rgb(255,255,255,0.1)' }} className={`bg-dark text-light py-4 ${className}`}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-sm-6 text-center text-sm-left mb-4 mb-sm-0">
          <Link href="/programs"><a className="text-light">Programs</a></Link><br />
          <Link href="/admissions"><a className="text-light">Admissions</a></Link><br />
          <Link href="/find-professionals"><a className="text-light">Find Professionals</a></Link><br />
          <Link href="/contact"><a className="text-light">Contact Us</a></Link><br />
          <Link href="/careers"><a className="text-light">Careers</a></Link><br />
        </div>
        <div className="col-12 col-sm-6 text-center text-sm-right mb-4 mb-sm-0">
          <div id="footer-right">
            <a target="_blank" rel="noopener noreferrer" className="text-light" href="https://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-career-school-in-ottawa-on-4175#sealclick"><img src={BBBLogo} alt="Better Business Bureau A+ accreditation" className="mb-2" /></a><br />
            <a target="_blank" rel="noopener noreferrer" className="text-light" href="https://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-career-school-in-ottawa-on-4175#sealclick">View BBB Profile</a><br />
          </div>
        </div>
      </div>
      <hr style={{ borderColor: 'rgba(255,255,255,0.4)' }} />
      <small>&copy; {new Date().getFullYear()} QC Career School &nbsp;|&nbsp; <Link href="/privacy-policy"><a className="text-light">Privacy Policy</a></Link></small>
    </div>
    <style jsx>{`
      #footer-right { width: 120px; margin-left: auto; margin-right: auto; text-align: center; }
      @media (min-width: 576px) {
        #footer-right { margin-right: 0; }
      }
    `}</style>
  </footer>
);

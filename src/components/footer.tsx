import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => (
  <footer className={`bg-dark text-light py-4 ${className}`}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 text-center text-sm-left mb-4 mb-sm-0">
          <Link href="/programs"><a className="text-light">Programs</a></Link><br />
          <Link href="/admissions"><a className="text-light">Admissions</a></Link><br />
          <Link href="/find-professionals"><a className="text-light">Find Professionals</a></Link><br />
          <Link href="/contact"><a className="text-light">Contact Us</a></Link><br />
          <Link href="/careers"><a className="text-light">Careers</a></Link><br />
        </div>
        <div className="col-12 col-sm-6 text-center text-sm-right mb-4 mb-sm-0">
          <a target="_blank" rel="noopener noreferrer" className="text-light" href="https://studentcenter.qccareerschool.com">Student Log In</a><br />
          <a target="_blank" rel="noopener noreferrer" className="text-light" href="">BBB A+</a><br />
        </div>
      </div>
      <hr className="border-light" />
      <small>&copy; {new Date().getFullYear()} QC Career School &nbsp;|&nbsp; Privacy Policy</small>

    </div>
  </footer>
);

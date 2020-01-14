import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => (
  <footer className={`bg-dark text-light py-4 ${className}`}>
    <div className="container">
      <small>&copy; {new Date().getFullYear()} QC Career School</small>
      <Link href="/careers"><a>Careers</a></Link>
    </div>
  </footer>
);

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logoLight from '../images/q-light.svg';
import logoDark from '../images/q.svg';

import { ScreenWidthContext } from '../providers/screen-width';
import { ScrollPositionContext } from '../providers/scroll-position';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const screenWidth = useContext(ScreenWidthContext);
  const scrollPosition = useContext(ScrollPositionContext);
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const maxPosition = 20;

  const logo = scrollPosition > maxPosition ? logoDark : logoLight;
  const mobile = screenWidth < 992;

  return (
    <Navbar
      id="main-nav"
      bg={scrollPosition > maxPosition ? 'light' : undefined}
      variant={scrollPosition > maxPosition ? undefined : 'dark'}
      expand="lg"
      className={`${scrollPosition > maxPosition ? 'shadow-sm' : ''} ${mobileMenu && mobile ? 'opened' : 'closed'} ${mobile ? 'mobile' : 'desktop'} ${className}`}
    >
      <div className="container">
        <div id="nav-wrapper">
          <Navbar.Brand>
            <Link href="/"><a><img src={logo} alt="QC Career School" style={{ display: 'block', height: 40 }} /></a></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" onClick={() => { setMobileMenu(m => !m); }} />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ml-auto mr-3">
              <NavDropdown title="Programs" id="programs-dropdown">
                <Link href="/programs/qc-makeup-academy"><a className="dropdown-item">QC Makeup Academy</a></Link>
                <Link href="/programs/qc-design-school"><a className="dropdown-item">QC Design School</a></Link>
                <Link href="/programs/qc-event-school"><a className="dropdown-item">QC Event School</a></Link>
                <Link href="/programs/qc-pet-studies"><a className="dropdown-item">QC Pet Studies</a></Link>
                <Link href="/programs/qc-wellness-studies"><a className="dropdown-item">QC Wellness Studies</a></Link>
                <Link href="/programs/additional-programs"><a className="dropdown-item">Additional Programs</a></Link>
                <Link href="/programs/combine-and-save"><a className="dropdown-item">Combine and Save</a></Link>
              </NavDropdown>
              <Link href="/admissions"><a className="nav-link">Admissions</a></Link>
              <Link href="/find-professionals"><a className="nav-link">Find Professionals</a></Link>
              <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
            </Nav>
            <a href="https://studentcenter.qccareerschool.com">
              {mobile
                ? <button className="btn btn-link p-0">Student Log In</button>
                : <button className="btn btn-primary btn-sm">Student Log In</button>
              }
            </a>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

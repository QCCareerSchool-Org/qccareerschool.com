import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
  const mobile = screenWidth < 768;

  return (
    <Navbar
      id="main-nav"
      bg={scrollPosition > maxPosition ? 'light' : undefined}
      variant={scrollPosition > maxPosition ? undefined : 'dark'}
      expand="md"
      className={`${scrollPosition > maxPosition ? 'shadow-sm' : ''} ${mobileMenu && mobile ? 'opened' : 'closed'} ${mobile ? 'mobile' : 'desktop'} ${className}`}
    >
      <Container>
        <div id="nav-wrapper">
          <Navbar.Brand>
            <Link href="/"><a><img src={logo} alt="QC Career School" style={{ display: 'block', height: 40 }} /></a></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" onClick={() => { setMobileMenu(m => !m); }} />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ml-auto mr-3">
              <NavDropdown title="Programs" id="programs-dropdown">
                <Link href="/programs"><a className="dropdown-item">Overview</a></Link>
                <NavDropdown.Divider />
                <Link href="/programs/makeup-artistry"><a className="dropdown-item">Makeup Artistry</a></Link>
                <Link href="/programs/interior-decorating"><a className="dropdown-item">Interior Decorating</a></Link>
                <Link href="/programs/event-planning"><a className="dropdown-item">Event Planning</a></Link>
                <Link href="/programs/dog-grooming"><a className="dropdown-item">Dog Grooming</a></Link>
              </NavDropdown>
              <Link href="/admissions"><a className="nav-link">Admissions</a></Link>
              <Link href="/find-professionals"><a className="nav-link">Find Professionals</a></Link>
              <Link href="/contact"><a className="nav-link">Contact</a></Link>
            </Nav>
            <a href="https://enroll.qcmakeupacademy.com">
              {mobile
                ? <Button variant="link" className="p-0">Student Login</Button>
                : <Button size="sm">Student Login</Button>
              }
            </a>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

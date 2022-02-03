import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useScreenWidth } from '../hooks/useScreenWidth';
import { useScrollPosition } from '../hooks/useScrollPosition';
import LogoLight from '../images/q-light.svg';
import LogoDark from '../images/q.svg';

type Props = {
  noHero?: boolean;
  className?: string;
};

export const Header = ({ noHero, className }: Props): ReactElement => {
  const screenWidth = useScreenWidth();
  const scrollPosition = useScrollPosition();
  const [ expanded, setExpanded ] = useState(false);
  const [ key, setKey ] = useState(0);

  const resetMenu = (): void => {
    setExpanded(false);
    // because this component persists from page to page, we need to recreate the Navbar component each time a menu item is clicked
    setTimeout(() => {
      setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
    }, 300);
  };

  const maxPosition = 20;

  const Logo = scrollPosition > maxPosition ? LogoDark : LogoLight;
  const mobile = screenWidth < 992;

  return (
    <Navbar
      key={key}
      id="main-nav"
      bg={scrollPosition > maxPosition ? 'light' : noHero ? 'dark' : undefined}
      variant={scrollPosition > maxPosition ? undefined : 'dark'}
      expand="lg"
      className={`${scrollPosition > maxPosition ? 'shadow-sm' : ''} ${expanded && mobile ? 'opened' : 'closed'} ${mobile ? 'mobile' : 'desktop'} ${className}`}
      onToggle={setExpanded}
    >
      <div className="container">
        <div id="nav-wrapper">
          <Navbar.Brand>
            <Link href="/"><a><div className="logoWrapper"><Image src={Logo} alt="QC Career School" layout="fixed" width={40.92} height={40} /></div></a></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ml-auto mr-3">
              <NavDropdown title="Programs" id="programs-dropdown">
                <Link href="/programs/qc-makeup-academy"><a onClick={resetMenu} className="dropdown-item">QC Makeup Academy</a></Link>
                <Link href="/programs/qc-design-school"><a onClick={resetMenu} className="dropdown-item">QC Design School</a></Link>
                <Link href="/programs/qc-event-school"><a onClick={resetMenu} className="dropdown-item">QC Event School</a></Link>
                <Link href="/programs/qc-pet-studies"><a onClick={resetMenu} className="dropdown-item">QC Pet Studies</a></Link>
                <Link href="/programs/qc-wellness-studies"><a onClick={resetMenu} className="dropdown-item">QC Wellness Studies</a></Link>
                <Link href="/programs/additional-programs"><a onClick={resetMenu} className="dropdown-item">Additional Programs</a></Link>
                <Link href="/programs/combine-and-save"><a onClick={resetMenu} className="dropdown-item">Combine and Save</a></Link>
              </NavDropdown>
              <Link href="/admissions"><a onClick={resetMenu} className="nav-link">Admissions</a></Link>
              <Link href="/find-professionals"><a onClick={resetMenu} className="nav-link">Find Professionals</a></Link>
              <Link href="/contact"><a onClick={resetMenu} className="nav-link">Contact Us</a></Link>
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
      <style jsx>{`
      .logoWrapper {
        height: 40px;
      }
      `}</style>
    </Navbar>
  );
};

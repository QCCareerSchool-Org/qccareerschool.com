import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

import Logo from '../images/logo-horizontal.svg';
import None from '../images/profile-backgrounds/none.png';
import Powder from '../images/profile-backgrounds/powder.jpg';

type Props = {
  backgroundImage: string | null;
  children: ReactNode;
};

export const ProfileWrapper = ({ backgroundImage, children }: Props): ReactElement => (
  <>
    <div className="profileWrapper">
      <div className="profile container my-sm-4">

        <header>
          <div className="profileLogoWrapper">
            <Link href="/">
              <a><Image src={Logo} height={32} width={268} layout="fixed" alt="QC Career School" /></a>
            </Link>
          </div>
          <hr />
        </header>

        <main>
          {children}
        </main>

        <footer className="mt-4 text-muted">
          <small>© {(new Date()).getFullYear()} <Link href="/"><a>QC Career School</a></Link>. User-created content is owned by the poster.</small>
        </footer>

      </div>

    </div>

    <style jsx>{`
      .profileWrapper {
        background-image: url(${backgroundImage === 'Powder' ? Powder : None});
        background-position: top center;
        background-color: #ddd;
        font-weight: 300;
        padding: 1px 0;
        min-height: 100vh;
      }
      .profile {
        background: white;
        color: #333;
        box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.5);
        padding-top: 12px;
        padding-bottom: 12px;
      }
      @media (min-width: 576px){
        .profile { padding: 24px; }
        .profileLogoWrapper { margin-bottom: 6px; }
      }
      @media (min-width: 768px){
        .profile { padding: 24px 36px; }
      }
      @media (min-width: 992px){
        .profile { padding: 36px 48px; }
        .profileLogoWrapper { margin-bottom: 12px; }
      }
    `}</style>
  </>
);

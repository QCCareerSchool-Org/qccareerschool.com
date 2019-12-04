import Head from 'next/head';
import Link from 'next/link';

import Logo from '../images/logo-inverse.svg';
import None from '../images/profile-backgrounds/none.png';
import Powder from '../images/profile-backgrounds/powder.jpg';

interface Props {
  backgroundImage: string | null;
}

export const ProfileLayout: React.FC<Props> = props => (
  <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script|Open+Sans&display=swap" />
    </Head>

    <div className="profileWrapper">
      <div className="profile container my-sm-4">

        <header>
          <Link href="/">
            <a><img className="profileLogo" src={Logo} alt="QC Career School" /></a>
          </Link>
          <hr />
        </header>

        <main>
          {props.children}
        </main>

        <footer className="mt-4 text-muted">
          <small>© {(new Date()).getFullYear()} <Link href="/"><a>QC Career School</a></Link>. User-created content is owned by the poster.</small>
        </footer>

      </div>

    </div>

    <style jsx>{`
      .profileWrapper {
        background-image: url(${props.backgroundImage === 'Powder' ? Powder : None});
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
      .profileLogo { height: 24px; }
      @media (min-width: 576px){
        .profile { padding: 24px; }
        .profileLogo { margin-bottom: 6px; }
      }
      @media (min-width: 768px){
        .profile { padding: 24px 36px; }
      }
      @media (min-width: 992px){
        .profile { padding: 36px 48px; }
        .profileLogo { margin-bottom: 12px; }
      }
    `}</style>
    {/* <style global jsx>{`
      h1 {
        font-size: 3.5rem;
        font-family: 'Dancing Script', cursive;
        font-weight: 400;
      }
      h2, h3, h4, h5, h6 {
        font-weight: 400;
        text-transform: none;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 0;
      }
      h2 { font-size: 1.5rem; }
    `}</style> */}
  </>
);

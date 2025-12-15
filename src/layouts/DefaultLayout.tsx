import type { FC, PropsWithChildren } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface Props {
  noHero?: boolean;
}

export const DefaultLayout: FC<PropsWithChildren<Props>> = ({ noHero, children }) => (
  <>
    <div className="d-flex flex-column vh-100">
      <Header noHero={noHero} className="flex-shrink-0 fixed-top" />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  </>
);

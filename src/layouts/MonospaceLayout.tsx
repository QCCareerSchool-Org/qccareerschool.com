import type { FC, PropsWithChildren } from 'react';

export const MonospaceLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="d-flex flex-column vh-100">
    <main className="monospace flex-shrink-0">
      {children}
    </main>
  </div>
);

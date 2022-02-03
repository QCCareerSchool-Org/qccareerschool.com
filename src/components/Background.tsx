// TODO: is this being used?

import { CSSProperties, ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  image: string;
  overlay?: unknown[];
};

export const Background = ({ children }: Props): ReactElement => (
  <div style={{ background: 'black' }}>
    {children}
  </div>
);

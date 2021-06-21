import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  image: string;
  overlay?: unknown[];
}

export const Background: React.FC<Props> = ({ children }) => (
  <div style={{ background: 'black' }}>
    {children}
  </div>
);

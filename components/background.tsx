import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  image: string;
  overlay?: any[];
}

export const Background: React.FC<Props> = ({ children, style, className, image, overlay = [] }) => (
  <div style={{ background: 'black' }}>
    {children}
  </div>
);

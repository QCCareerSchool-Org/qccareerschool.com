import React from 'react';

interface Props {
  className?: string;
}

export const Bar: React.FC<Props> = ({ className }) => {
  const style: React.CSSProperties = {
    borderWidth: '.6875rem',
    width: '6rem',
    borderColor: 'inherit',
    marginInlineStart: 0,
    marginInlineEnd: 0,
  };
  return <hr className={className} style={style} />;
};

import type { CSSProperties, FC } from 'react';

interface Props {
  className?: string;
}

const style: CSSProperties = {
  borderWidth: '.6875rem',
  width: '6rem',
  borderColor: 'inherit',
  marginInlineStart: 0,
  marginInlineEnd: 0,
};

export const Bar: FC<Props> = ({ className }) => {
  return <hr className={className} style={style} />;
};

import { CSSProperties, ReactElement } from 'react';

type Props = {
  className?: string;
};

export const Bar = ({ className }: Props): ReactElement => {
  const style: CSSProperties = {
    borderWidth: '.6875rem',
    width: '6rem',
    borderColor: 'inherit',
    marginInlineStart: 0,
    marginInlineEnd: 0,
  };
  return <hr className={className} style={style} />;
};

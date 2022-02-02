import { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CardColumn = ({ children }: Props): ReactElement => <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-0 mb-g d-flex">{children}</div>;

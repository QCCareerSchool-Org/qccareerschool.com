import type { FC, PropsWithChildren } from 'react';

const Link: FC<PropsWithChildren> = ({ children, ...props }) => <a data-testid="mock-link" {...props}>{children}</a>;

export default jest.fn(Link);

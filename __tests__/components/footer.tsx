jest.mock('@/hooks/useLocation');

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Footer } from '@/components/Footer';

expect.extend(toHaveNoViolations);

describe('<Footer>', () => {
  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Footer />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});

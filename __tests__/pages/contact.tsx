jest.mock('@/hooks/useLocation');

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import ContactPage from '@/pages/contact';

expect.extend(toHaveNoViolations);

describe('<ContactPage>', () => {

  it('should have no usability violations', async () => {
    const { container } = render(<ContactPage />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});

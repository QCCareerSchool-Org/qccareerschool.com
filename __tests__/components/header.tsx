jest.mock('@/hooks/useScreenWidth');
jest.mock('@/hooks/useScrollPosition');

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Header } from '@/components/Header';

expect.extend(toHaveNoViolations);

describe('<Header>', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Header />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

});

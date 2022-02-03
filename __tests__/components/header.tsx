import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import { Header } from '../../src/components/Header';

expect.extend(toHaveNoViolations);

describe('<Header>', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Header />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

});

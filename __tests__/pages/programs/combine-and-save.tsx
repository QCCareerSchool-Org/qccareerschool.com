import { render } from '@testing-library/react';
import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';

import CombineAndSavePage from '../../../src/pages/programs/combine-and-save';

expect.extend(toHaveNoViolations);

describe('<CombineAndSavePage>', () => {

  it('should have no usability violations', async () => {
    const { container } = render(<CombineAndSavePage />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});

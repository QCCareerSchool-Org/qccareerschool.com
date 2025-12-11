import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import PrivacyPolicyPage from '@/pages/privacy-policy';

expect.extend(toHaveNoViolations);

describe('<PrivacyPolicyPage>', () => {

  it('should have no usability violations', async () => {
    const { container } = render(<PrivacyPolicyPage />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});

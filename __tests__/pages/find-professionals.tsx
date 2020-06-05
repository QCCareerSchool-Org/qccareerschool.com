import { render } from '@testing-library/react';
import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';

import FindProfessionalsPage from '../../src/pages/find-professionals';
import { State } from '../../src/store';

expect.extend(toHaveNoViolations);

describe('<ContactPage>', () => {
  const state: State = {
    auth: { id: 0 },
    findProfessionals: {
      professions: [],
      countries: [],
      provinces: [],
      form: {
        profession: '',
        countryCode: '',
        provinceCode: null,
        firstName: '',
        lastName: '',
        area: '',
      },
      page: 0,
      pageCount: 0,
      scrollPosition: 0,
    }
  }

  it('should have no usability violations', async () => {
    const { container } = render(<FindProfessionalsPage initialReduxState={state} />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});

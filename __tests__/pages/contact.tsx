import React from 'react';

import { render } from '@testing-library/react';
import ContactPage from '../../src/pages/contact';

describe('<ContactPage />', () => {

  test('it works', () => {
    render(<ContactPage />);
  });

});

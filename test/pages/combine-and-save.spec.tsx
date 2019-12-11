import { fireEvent, render, waitForElement } from '@testing-library/react';
import React from 'react';

import CombineAndSavePage from '../../src/pages/combine-and-save';

describe('<CombineAndSavePage>', () => {

  test('it works', () => {
    render(<CombineAndSavePage />);
  });

});

import { render } from '@testing-library/react';
import React from 'react';

import { Testimonial } from '../../src/components/testimonial';
import { Testimonial as T } from '../../src/models/testimonial';
import ProfilePage from '../../src/pages/programs/combine-and-save';

export interface Props {
  testimonial: T;
}

test('First test', () => {
  expect(true).toBeTruthy();
});

test('Secont test', () => {
  expect(undefined).toBeUndefined();
});

describe('<ProfilePage>', () => {

  test('it works', () => {
    const { rerender } = render(<ProfilePage />); rerender(<ProfilePage />);
  });
});

describe('testimonial component rendering', () => {

  test('it works', () => {
    render(
        <Testimonial key={4} testimonial={{ quote: 'asdasd', name: 'asdas', rating: 5 }} />);
      });
    });

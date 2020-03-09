import { render } from '@testing-library/react';
import * as faker from 'faker';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import { Testimonial } from '../../src/components/testimonial';

expect.extend(toHaveNoViolations);

describe('<Testimonial>', () => {
  let quote: string;
  let name: string;
  let rating: number;

  beforeEach(() => {
    quote = faker.random.words(25);
    name = faker.name.firstName() + ' ' + faker.name.lastName();
    rating = faker.random.number({ min: 1, max: 5 });
  });

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Testimonial testimonial={{ quote, name, rating }} />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

  it('should have the correct number of stars', () => {
    const { queryAllByTitle } = render(<Testimonial testimonial={{ quote, name, rating }} />);
    expect(queryAllByTitle(/filled-star/i)).toHaveLength(rating);
    expect(queryAllByTitle(/empty-star/i)).toHaveLength(5 - rating);
  });
});

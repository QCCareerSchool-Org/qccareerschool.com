import React from 'react';

import { Testimonial as T } from '../models/testimonial';

import { IoMdStar } from 'react-icons/io';

export interface Props {
  testimonial: T;
}

export const Testimonial: React.FC<Props> = ({ testimonial }) => {
  const iconSize = 28;

  return (
    <div>
      <p>{`${testimonial.quote}`}</p>
      <p><strong>{`${testimonial.name}`}</strong></p>
      <p className="mb-5">
        {testimonial.rating
          ? Array(5).fill(0).map((x, i) => <IoMdStar key={i} size={iconSize} color={i < testimonial.rating! ? 'black' : 'red'} />)
          : null
        }
      </p>
    </div>
  );
};

import React from 'react';
import { IoMdStar } from 'react-icons/io';

import { Testimonial as T } from '../models/testimonial';

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
        {testimonial.rating !== null && Array(5).fill(null).map((x, i) => <IoMdStar key={i} title={i < (testimonial.rating ?? 0) ? 'filled-star' : 'empty-star'} size={iconSize} color={i < (testimonial.rating ?? 0) ? 'black' : '#CCCCCC'} />)}
      </p>
    </div>
  );
};

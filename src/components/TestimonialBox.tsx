import { ReactElement } from 'react';
import { IoMdStar } from 'react-icons/io';

import { Testimonial } from '../models/testimonial';

type Props = {
  testimonial: Testimonial;
};

const iconSize = 28;

export const TestimonialBox = ({ testimonial }: Props): ReactElement => {

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

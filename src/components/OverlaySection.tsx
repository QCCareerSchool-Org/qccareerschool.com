// TODO: is this being used?

import { ReactElement, ReactNode } from 'react';

import { Bar } from './Bar';

type Props = {
  children: ReactNode;
  backgroundImage: string;
};

export const OverlaySection = ({ children, backgroundImage }: Props): ReactElement => (
  <section className="overlay-section bg-dark text-light text-shadow text-right">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-4">
          <Bar className="text-primary ml-auto" />
          {children}
        </div>
      </div>
    </div>

    <style jsx>{`
      section {
        background: url(${backgroundImage}) 0 0;
        background-size: cover;
      }
    `}</style>
  </section>
);

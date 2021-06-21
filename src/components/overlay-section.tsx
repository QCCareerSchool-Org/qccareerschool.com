import React from 'react';

import { Bar } from './bar';

const OverlaySection: React.FC<{ backgroundImage: string }> = ({ children, backgroundImage }) => (
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

export default OverlaySection;
